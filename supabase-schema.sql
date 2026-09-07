-- LCKMY database schema for Supabase
-- This file is a starting schema for the production CMS.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text default 'EDITOR' check (role in ('SUPER_ADMIN','CONTENT_ADMIN','FINANCE_ADMIN','EDITOR')),
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  role text default 'EDITOR' check (role in ('SUPER_ADMIN','CONTENT_ADMIN','FINANCE_ADMIN','EDITOR')),
  status text default 'active' check (status in ('active','inactive')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text,
  excerpt text,
  featured_image text,
  content text,
  author text,
  status text default 'draft' check (status in ('draft','published','scheduled','archived')),
  publish_date timestamptz,
  seo_title text,
  seo_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text,
  cover_image text,
  project_date date,
  location text,
  organizer text,
  partners text,
  description text,
  objectives text,
  activities text,
  impact text,
  participants text,
  beneficiaries text,
  featured boolean default false,
  status text default 'draft' check (status in ('draft','published','archived')),
  seo_title text,
  seo_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text,
  cover_image text,
  event_date date,
  start_time text,
  end_time text,
  venue text,
  organizer text,
  partners text,
  registration_url text,
  contact text,
  status text default 'draft' check (status in ('draft','upcoming','ongoing','completed','cancelled')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.gallery_albums (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  cover_image text,
  album_date date,
  category text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  album_id uuid references public.gallery_albums(id) on delete cascade,
  image_url text not null,
  caption text,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  position text,
  leo_year text,
  biography text,
  photo_url text,
  social_links jsonb,
  display_order int default 0,
  is_active boolean default true,
  member_type text default 'member' check (member_type in ('current_board','advisors','department_heads','members','past_presidents')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.impact_statistics (
  id uuid primary key default gen_random_uuid(),
  projects_completed int default 0,
  people_reached int default 0,
  volunteers int default 0,
  communities_reached int default 0,
  funds_raised numeric default 0,
  volunteer_hours numeric default 0,
  years_of_service int default 0,
  updated_at timestamptz default now()
);

create table if not exists public.impact_stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  image_url text,
  story text,
  impact text,
  related_project text,
  status text default 'draft' check (status in ('draft','published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.donation_campaigns (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text,
  short_description text,
  cover_image text,
  target_amount numeric not null default 0,
  amount_raised numeric default 0,
  start_date date,
  end_date date,
  status text default 'draft' check (status in ('draft','active','closed')),
  beneficiary_description text,
  impact_description text,
  donation_methods jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.donations (
  id uuid primary key default gen_random_uuid(),
  donor_name text,
  donor_email text,
  donor_phone text,
  amount numeric not null,
  campaign_id uuid references public.donation_campaigns(id),
  payment_method text,
  reference_id text,
  message text,
  anonymous_donation boolean default false,
  status text default 'pending' check (status in ('pending','verified','rejected')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.membership_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  age int,
  occupation text,
  why_join text,
  skills_interests text,
  social_media text,
  status text default 'new' check (status in ('new','contacted','accepted','rejected','archived')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  status text default 'unread' check (status in ('unread','read','replied','archived')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  year int,
  category text,
  file_url text,
  publish_date date,
  status text default 'draft' check (status in ('draft','published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text,
  status text default 'draft' check (status in ('draft','published','scheduled','expired')),
  publish_date timestamptz,
  expires_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  club_name text,
  tagline text,
  email text,
  phone text,
  location text,
  logo_url text,
  homepage_text text,
  footer_text text,
  seo_title text,
  seo_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  admin_email text,
  action text,
  entity text,
  entity_id uuid,
  created_at timestamptz default now()
);

create index if not exists idx_posts_slug on public.posts(slug);
create index if not exists idx_posts_status on public.posts(status);
create index if not exists idx_posts_publish_date on public.posts(publish_date);
create index if not exists idx_projects_slug on public.projects(slug);
create index if not exists idx_projects_status on public.projects(status);
create index if not exists idx_projects_category on public.projects(category);
create index if not exists idx_events_slug on public.events(slug);
create index if not exists idx_events_status on public.events(status);
create index if not exists idx_events_date on public.events(event_date);
create index if not exists idx_campaigns_slug on public.donation_campaigns(slug);
create index if not exists idx_campaigns_status on public.donation_campaigns(status);
create index if not exists idx_donations_campaign on public.donations(campaign_id);
create index if not exists idx_donations_status on public.donations(status);
create index if not exists idx_membership_status on public.membership_applications(status);
create index if not exists idx_contact_status on public.contact_messages(status);

alter table public.profiles enable row level security;
alter table public.admin_users enable row level security;
alter table public.posts enable row level security;
alter table public.projects enable row level security;
alter table public.events enable row level security;
alter table public.gallery_albums enable row level security;
alter table public.gallery_images enable row level security;
alter table public.team_members enable row level security;
alter table public.impact_statistics enable row level security;
alter table public.impact_stories enable row level security;
alter table public.donation_campaigns enable row level security;
alter table public.donations enable row level security;
alter table public.membership_applications enable row level security;
alter table public.contact_messages enable row level security;
alter table public.documents enable row level security;
alter table public.notices enable row level security;
alter table public.site_settings enable row level security;
alter table public.audit_logs enable row level security;

create or replace function public.current_admin_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid() limit 1;
$$;

create or replace function public.is_admin(allowed_roles text[])
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(public.current_admin_role() = any(allowed_roles), false);
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', new.email), 'EDITOR')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create policy "Public can read published posts" on public.posts for select using (status = 'published');
create policy "Public can read published projects" on public.projects for select using (status = 'published');
create policy "Public can read published events" on public.events for select using (status in ('upcoming','ongoing','completed'));
create policy "Public can read published stories" on public.impact_stories for select using (status = 'published');
create policy "Public can read public documents" on public.documents for select using (status = 'published');
create policy "Public can read active campaigns" on public.donation_campaigns for select using (status = 'active');
create policy "Public can read team members" on public.team_members for select using (is_active = true);
create policy "Public can read site settings" on public.site_settings for select using (true);
create policy "Users can read own profile" on public.profiles for select using (id = auth.uid());
create policy "Super admins manage profiles" on public.profiles for all using (public.is_admin(array['SUPER_ADMIN'])) with check (public.is_admin(array['SUPER_ADMIN']));
create policy "Content admins manage posts" on public.posts for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Content admins manage projects" on public.projects for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Content admins manage events" on public.events for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Content admins manage gallery albums" on public.gallery_albums for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Content admins manage gallery images" on public.gallery_images for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Content admins manage team" on public.team_members for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Admins manage impact" on public.impact_statistics for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN']));
create policy "Content admins manage impact stories" on public.impact_stories for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Finance admins manage campaigns" on public.donation_campaigns for all using (public.is_admin(array['SUPER_ADMIN','FINANCE_ADMIN'])) with check (public.is_admin(array['SUPER_ADMIN','FINANCE_ADMIN']));
create policy "Finance admins read donations" on public.donations for select using (public.is_admin(array['SUPER_ADMIN','FINANCE_ADMIN']));
create policy "Finance admins update donations" on public.donations for update using (public.is_admin(array['SUPER_ADMIN','FINANCE_ADMIN'])) with check (public.is_admin(array['SUPER_ADMIN','FINANCE_ADMIN']));
create policy "Public can submit donations" on public.donations for insert with check (amount > 0 and status = 'pending');
create policy "Content admins manage documents" on public.documents for all using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','EDITOR']));
create policy "Admins manage settings" on public.site_settings for all using (public.is_admin(array['SUPER_ADMIN'])) with check (public.is_admin(array['SUPER_ADMIN']));
create policy "Admins read audit logs" on public.audit_logs for select using (public.is_admin(array['SUPER_ADMIN']));
create policy "Admins write audit logs" on public.audit_logs for insert with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN','FINANCE_ADMIN','EDITOR']));
create policy "Public can submit applications" on public.membership_applications for insert with check (status = 'new');
create policy "Admins read applications" on public.membership_applications for select using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN']));
create policy "Admins update applications" on public.membership_applications for update using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN']));
create policy "Public can submit messages" on public.contact_messages for insert with check (status = 'unread');
create policy "Admins read messages" on public.contact_messages for select using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN']));
create policy "Admins update messages" on public.contact_messages for update using (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN'])) with check (public.is_admin(array['SUPER_ADMIN','CONTENT_ADMIN']));

-- Storage buckets for image/doc uploads
create policy "Public images are readable by everyone" on storage.objects for select using (bucket_id in ('public-images','project-images','event-images','gallery','team-photos','documents','donation-assets'));
create policy "Authenticated admins can upload files" on storage.objects for insert with check (bucket_id in ('public-images','project-images','event-images','gallery','team-photos','documents','donation-assets') and auth.role() = 'authenticated');
create policy "Authenticated admins can update files" on storage.objects for update using (auth.role() = 'authenticated');
create policy "Authenticated admins can delete files" on storage.objects for delete using (auth.role() = 'authenticated');
