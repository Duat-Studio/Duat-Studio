# Duat Studio Website

A React + TypeScript + Vite marketing/store website for **Ankhvault** — an ultra-fast Rust + Tauri 2.0 desktop game launcher platform with Web3 settlement support.

## Stack

- **Frontend**: React 19, TypeScript, Vite 8
- **Auth / Database**: Supabase (`@supabase/supabase-js`)
- **Styling**: Custom CSS + glassmorphism effects (`src/styles/glassmorphism.css`)
- **Icons**: Lucide React
- **Confetti**: canvas-confetti

## Running the app

```bash
npm run dev   # starts dev server on port 5000
npm run build # production build
```

The **"Start application"** workflow runs `npm run dev` and serves the app at port 5000.

## Supabase connection

Credentials are read from environment variables with hardcoded fallbacks:

```
VITE_SUPABASE_URL      → your Supabase project URL
VITE_SUPABASE_ANON_KEY → your Supabase anon/public key
```

To use **your own Supabase project**, set these as Replit Secrets (they must be prefixed with `VITE_` to be exposed to the Vite frontend). The fallback credentials point to the original project's Supabase instance.

See `src/lib/supabase.ts` for the client setup and database helpers (`fetchCatalogFromSupabase`, `submitGameToDeveloperPortal`).

## Key Supabase tables

- `catalog_games` — game listings shown in the Store Catalog
- `developer_profiles` — developer accounts and wallet info

## Project structure

```
src/
  components/    # Page sections (Navbar, Hero, StoreCatalog, etc.)
  lib/           # supabase.ts — client + DB helpers
  styles/        # glassmorphism.css
  App.tsx        # Tab-based routing + auth state
  main.tsx       # Entry point
```

## User preferences

- Keep the existing project structure and stack.
