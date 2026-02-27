-- Create the applications table used by the Apply flow (Apply Only Once).
-- Run in Supabase Dashboard → SQL Editor → New query, then Run.
-- After this, run applications-rls-policy.sql to enable RLS and policies.

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
