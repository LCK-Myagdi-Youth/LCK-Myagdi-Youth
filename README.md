<<<<<<< HEAD
# LCK-Myagdi-Youth
=======
# Leo Club of Kathmandu Myagdi Youth

A modern Next.js full-stack platform and CMS for the Leo Club of Kathmandu Myagdi Youth, built with a public-facing website and admin dashboard using Supabase-ready architecture.

## Stack

## Local setup
1. Copy `.env.example` to `.env.local`.
2. Add your Supabase project URL and anon key.
3. Run:

```bash
npm install
npm run dev
```

## Required environment variables
```env
NEXT_PUBLIC_SUPABASE_URL="..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_JOIN_FORM_URL="https://docs.google.com/forms/d/e/your-form-id/viewform"
```

## Supabase

```sql
update public.profiles
set role = 'SUPER_ADMIN'
where id = (select id from auth.users where email = 'your-admin-email@example.com');
```


## Admin features

## Google Form response transfer
Set both values in the deployment environment:

```env
NEXT_PUBLIC_JOIN_FORM_URL="https://docs.google.com/forms/d/e/your-form-id/viewform"
GOOGLE_FORM_WEBHOOK_SECRET="a-long-random-secret"
```

Then copy [scripts/google-form-webhook.gs](scripts/google-form-webhook.gs) into the Google Form's linked spreadsheet Apps Script project, replace `YOUR-DOMAIN.com` and the secret, and create an installable **On form submit** trigger for `handleFormSubmit`. The Google Form question names should match the keys in that script. Responses will be stored as private rows in `membership_applications` for admin review.

## Vercel deployment
1. Import the repository into Vercel.
2. Set the variables from `.env.example` in Project Settings for Production, Preview, and Development as needed.
3. Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL.
4. Add the deployed URL to Supabase Auth URL Configuration and add `/admin/login` to the allowed redirect URLs.
5. Deploy with the included `vercel.json` configuration.

Before deploying, run:

```bash
npm ci
npm run lint
npm run build
```

## Notes
This project uses a branded public website plus an authenticated admin portal. Public membership, contact, and donation submissions write to Supabase; admin CRUD screens write posts, projects, events, and campaigns with role checks and audit logs.

The public presentation currently includes clearly replaceable fallback content from `lib/site-data.ts` so the site remains usable before the first Supabase records are created. Once credentials are configured and content is published in Supabase, the next improvement is switching public listing/detail pages from fallback data to database queries with revalidation.

Add the official club logo and approved club photography to Supabase Storage or `public/` before launch. The current monogram and stock-image URLs are placeholders because no official logo/image files were available in this workspace.
>>>>>>> c999028 (Initial LCKMY website and CMS)
