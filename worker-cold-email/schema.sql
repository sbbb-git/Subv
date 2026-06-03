-- Schema D1 Opti-CDS cold email + dashboard
-- Run: wrangler d1 execute optids-cold --remote --file=schema.sql

CREATE TABLE IF NOT EXISTS contacts (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  email         TEXT UNIQUE NOT NULL,
  first_name    TEXT,

  -- profil CDS
  nom_cds       TEXT,
  adresse       TEXT,
  code_postal   TEXT,
  ville         TEXT,
  dept          TEXT,
  telephone     TEXT,
  site_web      TEXT,
  specialite    TEXT,                          -- Dentaire / Médical / Ophtalmo / Polyvalent / etc.
  finess        TEXT,
  siret         TEXT,
  notes         TEXT,                          -- notes manuelles
  source        TEXT,                          -- ars_93 / scraping_idf / scraping_fr / manual

  -- workflow draft
  draft_subject TEXT,
  draft_body    TEXT,
  draft_status  TEXT DEFAULT 'draft',          -- draft / validated / sent / skipped

  -- pipeline d'envoi
  segment       TEXT DEFAULT 'B_standard',
  status        TEXT DEFAULT 'pending',        -- pending / sending / replied / bounced / unsubscribed / done
  step          INTEGER DEFAULT 0,             -- 0=rien, 1=J0, 2=J+4, 3=J+9
  last_sent_at  TEXT,

  created_at    TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at    TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contacts_status       ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_draft_status ON contacts(draft_status);
CREATE INDEX IF NOT EXISTS idx_contacts_step         ON contacts(step);
CREATE INDEX IF NOT EXISTS idx_contacts_dept         ON contacts(dept);
CREATE INDEX IF NOT EXISTS idx_contacts_specialite   ON contacts(specialite);

CREATE TABLE IF NOT EXISTS sends (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  contact_id   INTEGER NOT NULL,
  step         INTEGER NOT NULL,               -- 1=J0, 2=J+4, 3=J+9
  resend_id    TEXT,
  message_id   TEXT,
  subject      TEXT,
  sent_at      TEXT DEFAULT CURRENT_TIMESTAMP,
  status       TEXT DEFAULT 'sent',            -- sent / delivered / bounced / complained / opened / clicked / error
  error        TEXT,
  FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE INDEX IF NOT EXISTS idx_sends_contact ON sends(contact_id);
CREATE INDEX IF NOT EXISTS idx_sends_resend  ON sends(resend_id);

CREATE TABLE IF NOT EXISTS events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  contact_id  INTEGER,
  type        TEXT NOT NULL,
  detail      TEXT,
  created_at  TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_events_contact ON events(contact_id);
