-- One-time setup for the Apply flow: create applications table + RLS.
-- Run in Supabase Dashboard → SQL Editor → New query → paste all → Run.

-- 1. Create table
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  offers jsonb not null default '[]',
  input_data jsonb not null default '{}',
  amount_paise bigint not null default 9900,
  status text not null default 'initiated',
  razorpay_payment_id text,
  created_at timestamptz not null default now()
);

comment on table public.applications is 'Loan application submissions; linked to Razorpay payment.';

-- 2. RLS so signed-in users can insert/update their own row
alter table public.applications enable row level security;

drop policy if exists "Users can insert own application" on public.applications;
drop policy if exists "Users can update own application" on public.applications;
drop policy if exists "Users can read own applications" on public.applications;

create policy "Users can insert own application"
  on public.applications for insert
  with check (auth.email() = email);

create policy "Users can update own application"
  on public.applications for update
  using (auth.email() = email)
  with check (auth.email() = email);

create policy "Users can read own applications"
  on public.applications for select
  using (auth.email() = email);
