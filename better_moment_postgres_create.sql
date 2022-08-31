SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	"streak" varchar,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.suggestions (
	"_id" serial NOT NULL,
	"suggestion_title" varchar NOT NULL,
	"suggestion_content" text NOT NULL, 
	"user_id" bigint,
	CONSTRAINT "suggestions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.suggestions ADD CONSTRAINT "suggestions_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");