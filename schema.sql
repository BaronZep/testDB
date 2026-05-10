DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    prenom TEXT,
    nom TEXT,
    adresse TEXT,
    telephone TEXT
);
INSERT INTO contacts (prenom, nom, adresse, telephone) 
VALUES ('Jean', 'Dupont', '10 rue de la Paix, Paris', '06 01 02 03 04');
