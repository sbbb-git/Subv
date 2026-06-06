-- Migration 004 : table settings pour stocker l'état de la stratégie (checklist pré-lancement, phase courante)

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

INSERT OR IGNORE INTO settings (key, value) VALUES
  ('checklist.dmarc',        '0'),
  ('checklist.dkim',         '0'),
  ('checklist.calendly',     '0'),
  ('checklist.pitch_oral',   '0'),
  ('checklist.creneaux',     '0'),
  ('checklist.test_send',    '0'),
  ('phase_current',          '0'),
  ('launch_date',            '');
