#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  BEGIN;
    CREATE TABLE IF NOT EXISTS users (
	  id SERIAL PRIMARY KEY,
	  name VARCHAR(20), email VARCHAR(20)
	);
  INSERT INTO users (name, email) values ('john','john@gmail.com');
  COMMIT;
EOSQL