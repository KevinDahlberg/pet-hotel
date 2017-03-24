--Create 'Owners' Table
CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(80)
);

--Create 'Pets' Table
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES "owners",
    name character varying(60),
    breed character varying(60),
    color character varying(60)
);

--Add a new owner, where varX is 'first_name' and varY is 'last_name'.
INSERT INTO "owners" ("first_name", "last_name") VALUES ('varX', 'varY');

--Add a new pet, where varA is 'owner_id', varP is 'name', varE is 'breed', and varT is 'color'.
INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES ('varA', 'varP', 'varE', 'varT');

--Change owner info, where varL is 'first_name' and varL is 'last_name'.
UPDATE "owners" SET ("first_name", "last_name") = ('varF', 'varL') WHERE "id" = varINT;

--Change pet info, where varB is 'owner_id', varC is 'name', varD is 'breed', and varZ is 'color'.
UPDATE "pets" SET ("owner_id", "name", "breed", "color") = ('varB', 'varC', 'varD', 'varE') WHERE "id" = varINT;



----These add dummy data:

INSERT INTO "owners" ("first_name", "last_name") VALUES ('YPaul', 'Sussman');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (1, 'Cappi', 'Rat Terrier', 'White');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (1, 'Pud', 'Pitbull', 'White');

INSERT INTO "owners" ("first_name", "last_name") VALUES ('Zoe', 'Liu');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (2, 'Dib', 'Chiweenie', 'Black');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (2, 'Lenore', 'Crab', 'Red');
