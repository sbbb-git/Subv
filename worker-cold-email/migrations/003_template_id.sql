-- Migration 003 : ajoute template_id pour gérer la bibliothèque de 10 templates

ALTER TABLE contacts ADD COLUMN template_id TEXT;
CREATE INDEX IF NOT EXISTS idx_contacts_template ON contacts(template_id);
