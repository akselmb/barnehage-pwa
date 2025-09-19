# Barnehage PWA

En Progressive Web App (PWA) for barnehage kommunikasjon mellom personal og familier.

## Funksjoner

- **Multi-tenant arkitektur**: Støtter flere barnehager med separate databaser
- **Rollebasert tilgang**: Administrator, ansatt, forelder, og familiemedlem
- **Norsk språkstøtte**: Fullstendig oversatt til norsk
- **PWA funksjonalitet**: Kan installeres på mobile enheter med push-varsler
- **Moderne UI**: Bygget med React, TypeScript, og Tailwind CSS

## Teknisk stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Deployment**: Netlify
- **PWA**: Vite PWA Plugin + Workbox

## Arkitektur

### Multi-tenant oppsett

Prosjektet bruker en multi-tenant arkitektur med:

1. **Master Admin Project**: Sentral database for å administrere alle barnehager
2. **Individual Kindergarten Projects**: Separate Supabase prosjekter for hver barnehage

Dette gir:
- **Sikkerhet**: Isolert data per barnehage
- **Skalerbarhet**: Enkelt å legge til nye barnehager
- **Uavhengighet**: Hver barnehage har sin egen database

### Roller

- **Barnehage Administrator**: Full tilgang til sin barnehages data
- **Barnehage Ansatt**: Kan poste innlegg, oppdatere kalender, sende meldinger
- **Forelder**: Kan se innlegg, kalender, sende meldinger til barnehagen
- **Familiemedlem**: Samme tilgang som forelder, men må godkjennes av barnehage

## Kom i gang

### 1. Installer avhengigheter

```bash
npm install
```

### 2. Konfigurer miljøvariabler

Kopier `.env.example` til `.env.local` og fyll inn:

```bash
# Master Admin Project (for å administrere flere barnehager)
VITE_MASTER_SUPABASE_URL=your_master_supabase_url_here
VITE_MASTER_SUPABASE_ANON_KEY=your_master_supabase_anon_key_here

# Individuelle barnehage prosjekter
VITE_KINDERGARTEN_001_URL=your_kindergarten_001_supabase_url_here
VITE_KINDERGARTEN_001_ANON_KEY=your_kindergarten_001_supabase_anon_key_here
```

### 3. Start utviklingsserver

```bash
npm run dev
```

### 4. Bygg for produksjon

```bash
npm run build
```

## Supabase oppsett

### Master Admin Database

Opprett en Supabase prosjekt for å administrere alle barnehager med følgende tabeller:

- `kindergartens`: Informasjon om hver barnehage og deres database-tilkoblinger

### Individual Kindergarten Database

Hver barnehage trenger sin egen Supabase prosjekt med følgende tabeller:

- `profiles`: Brukerprofiler med roller
- `children`: Barn registrert i barnehagen
- `family_children`: Kobling mellom familier og barn
- `posts`: Innlegg og bilder fra barnehagen
- `calendar_events`: Kalenderarrangementer
- `messages`: Direkte meldinger mellom parter

## Neste steg

1. ✅ Prosjekt struktur og avhengigheter
2. ✅ PWA konfigurasjon
3. ✅ Norsk språkstøtte
4. ✅ Multi-tenant arkitektur design
5. 🔄 Supabase database oppsett
6. 🔄 Autentisering implementasjon
7. 🔄 Rollestyring
8. 🔄 UI komponenter
9. 🔄 Push-varsler
10. 🔄 Testing og deployment