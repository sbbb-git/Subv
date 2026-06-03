-- Schema D1 pour la campagne cold email Opti-CDS
-- Run: wrangler d1 execute optids-cold --file=schema.sql

CREATE TABLE IF NOT EXISTS contacts (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  email         TEXT UNIQUE NOT NULL,
  first_name    TEXT,
  nom_cds       TEXT,
  ville         TEXT,
  dept          TEXT,
  source        TEXT,
  segment       TEXT,                         -- A_premium / B_standard
  status        TEXT DEFAULT 'pending',       -- pending / sending / replied / bounced / unsubscribed / done
  step          INTEGER DEFAULT 0,            -- 0 = pas encore envoyé, 1 = J0 envoyé, 2 = J+4 envoyé, 3 = J+9 envoyé
  last_sent_at  TEXT,                         -- ISO timestamp dernier envoi
  thread_id     TEXT,                         -- Message-ID du J0 pour threader les relances
  created_at    TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_step ON contacts(step);
CREATE INDEX IF NOT EXISTS idx_contacts_segment ON contacts(segment);

CREATE TABLE IF NOT EXISTS sends (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  contact_id    INTEGER NOT NULL,
  step          INTEGER NOT NULL,             -- 1=J0, 2=J+4, 3=J+9
  resend_id     TEXT,                         -- ID retourné par Resend
  message_id    TEXT,                         -- Message-ID header (pour threader)
  sent_at       TEXT DEFAULT CURRENT_TIMESTAMP,
  status        TEXT DEFAULT 'sent',          -- sent / delivered / bounced / complained / opened / clicked
  error         TEXT,
  FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE INDEX IF NOT EXISTS idx_sends_contact ON sends(contact_id);
CREATE INDEX IF NOT EXISTS idx_sends_resend ON sends(resend_id);

CREATE TABLE IF NOT EXISTS events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  contact_id  INTEGER,
  type        TEXT NOT NULL,                  -- run_start / run_end / unsubscribe / bounce / complaint / replied
  detail      TEXT,
  created_at  TEXT DEFAULT CURRENT_TIMESTAMP
);
