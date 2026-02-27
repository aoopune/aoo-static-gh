-- Fix RLS for applications table so insert/update work after Google sign-in.
-- Run applications-table.sql first if the table does not exist.
-- Run in Supabase Dashboard → SQL Editor → New query, then Run.

-- Ensure RLS is on
alter table public.applications enable row level security;

-- Drop existing policies if they exist (so this script is re-runnable)
drop policy if exists "Users can insert own application" on public.applications;
drop policy if exists "Users can update own application" on public.applications;
drop policy if exists "Users can read own applications" on public.applications;

-- Allow insert only when the row's email matches the signed-in user's email
create policy "Users can insert own application"
  on public.applications for insert
  with check (auth.email() = email);

-- Allow update only for the user's own rows (e.g. to set status = 'paid', razorpay_payment_id)
create policy "Users can update own application"
  on public.applications for update
  using (auth.email() = email)
  with check (auth.email() = email);

-- Optional: allow users to read only their own applications
create policy "Users can read own applications"
  on public.applications for select
  using (auth.email() = email);
