-- JC's Birthday V21 — Shared Birthday Box
-- Run ONCE in Supabase Dashboard -> SQL Editor -> New query -> Run.

create extension if not exists pgcrypto;

create table if not exists public.birthday_gifts (
  id uuid primary key default gen_random_uuid(),
  gift_id text not null unique,
  gift_type text not null,
  gift_name text not null,
  icon text not null default '🎁',
  from_name text not null,
  note text not null default '',
  spent_seconds integer,
  gift_payload jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.birthday_gifts enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert on table public.birthday_gifts to anon, authenticated;

drop policy if exists "birthday gifts public insert" on public.birthday_gifts;
create policy "birthday gifts public insert"
on public.birthday_gifts for insert
to anon, authenticated
with check (true);

drop policy if exists "birthday gifts public read" on public.birthday_gifts;
create policy "birthday gifts public read"
on public.birthday_gifts for select
to anon, authenticated
using (true);

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'birthday_gifts'
  ) then
    alter publication supabase_realtime add table public.birthday_gifts;
  end if;
end
$$;

grant usage on schema storage to anon, authenticated;
grant select, insert on table storage.objects to anon, authenticated;

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values (
  'birthday-gifts-media',
  'birthday-gifts-media',
  true,
  5242880,
  array[
    'image/jpeg','image/png','image/webp','image/gif',
    'audio/webm','audio/ogg','audio/mpeg','audio/mp4','audio/wav','audio/x-wav'
  ]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "birthday media public insert" on storage.objects;
create policy "birthday media public insert"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'birthday-gifts-media');

drop policy if exists "birthday media public read" on storage.objects;
create policy "birthday media public read"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'birthday-gifts-media');


-- Ask PostgREST/Supabase to refresh its schema cache immediately.
notify pgrst, 'reload schema';
