-- Migration 002 : ajoute region (calculé depuis dept) et is_primary (1 email principal par CDS)
-- Run: wrangler d1 execute optids-cold --remote --file=migrations/002_region_and_primary.sql

ALTER TABLE contacts ADD COLUMN region TEXT;
ALTER TABLE contacts ADD COLUMN is_primary INTEGER DEFAULT 0;
ALTER TABLE contacts ADD COLUMN cds_key TEXT;

CREATE INDEX IF NOT EXISTS idx_contacts_region    ON contacts(region);
CREATE INDEX IF NOT EXISTS idx_contacts_primary   ON contacts(is_primary);
CREATE INDEX IF NOT EXISTS idx_contacts_cds_key   ON contacts(cds_key);

-- Calcule region depuis dept (toutes les régions françaises 2026)
UPDATE contacts SET region = CASE
  WHEN dept IN ('75','77','78','91','92','93','94','95') THEN 'Île-de-France'
  WHEN dept IN ('01','03','07','15','26','38','42','43','63','69','73','74') THEN 'Auvergne-Rhône-Alpes'
  WHEN dept IN ('04','05','06','13','83','84') THEN 'PACA'
  WHEN dept IN ('22','29','35','56') THEN 'Bretagne'
  WHEN dept IN ('18','28','36','37','41','45') THEN 'Centre-Val de Loire'
  WHEN dept IN ('21','25','39','58','70','71','89','90') THEN 'Bourgogne-Franche-Comté'
  WHEN dept IN ('02','59','60','62','80') THEN 'Hauts-de-France'
  WHEN dept IN ('14','27','50','61','76') THEN 'Normandie'
  WHEN dept IN ('44','49','53','72','85') THEN 'Pays de la Loire'
  WHEN dept IN ('08','10','51','52','54','55','57','67','68','88') THEN 'Grand Est'
  WHEN dept IN ('16','17','19','23','24','33','40','47','64','79','86','87') THEN 'Nouvelle-Aquitaine'
  WHEN dept IN ('09','11','12','30','31','32','34','46','48','65','66','81','82') THEN 'Occitanie'
  WHEN dept IN ('2A','2B') THEN 'Corse'
  WHEN dept = '971' THEN 'Guadeloupe'
  WHEN dept = '972' THEN 'Martinique'
  WHEN dept = '973' THEN 'Guyane'
  WHEN dept = '974' THEN 'La Réunion'
  WHEN dept = '976' THEN 'Mayotte'
  ELSE NULL
END;

-- cds_key = clé de groupement (FINESS si présent, sinon nom_cds normalisé, sinon email)
UPDATE contacts SET cds_key = COALESCE(NULLIF(finess, ''), NULLIF(nom_cds, ''), email);

-- is_primary : 1 email par cds_key, choisi via heuristique
-- (priorité : not bad_email, local part "directionnel", local court, id petit)
UPDATE contacts SET is_primary = 0;

UPDATE contacts SET is_primary = 1 WHERE id IN (
  SELECT id FROM (
    SELECT id, ROW_NUMBER() OVER (
      PARTITION BY cds_key
      ORDER BY
        CASE WHEN draft_status = 'bad_email' THEN 1 ELSE 0 END,
        CASE WHEN lower(substr(email, 1, instr(email,'@')-1))
             IN ('direction','directeur','accueil','contact','secretariat','info','cabinet')
             THEN 0 ELSE 1 END,
        length(email),
        id
    ) AS rn
    FROM contacts
  ) WHERE rn = 1
);
