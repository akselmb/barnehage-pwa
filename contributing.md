# Contributing Guide

Dette dokumentet beskriver standarder for **branches**, **commits** og **PR-flyt** for dette prosjektet.

---

## 1️⃣ Branch-navngivning

**Format:** `<type>/<short-descriptive-name>`

| Type         | Eksempel                        | Bruk                                  |
|-------------|---------------------------------|---------------------------------------|
| **feature**  | `feature/smart-charging`        | Ny funksjonalitet                     |
| **fix**      | `fix/login-bug`                 | Bug-fiks                              |
| **chore**    | `chore/update-dependencies`     | Vedlikehold, oppdateringer, refaktorering |
| **hotfix**   | `hotfix/critical-crash`         | Kritisk feil i produksjon             |
| **experiment** | `experiment/new-ui-layout`    | Eksperimentell kode, testing          |
| **docs**     | `docs/readme-installation`      | Dokumentasjon                          |

**Tips:**
- Bruk **kebab-case** (`-`) mellom ord.
- Hold branch-navnet kort og beskrivende (3–4 ord maks).
- Bruk alltid prefix (`feature/`, `fix/` osv.) for enkel oversikt.

---

## 2️⃣ Commit-meldinger

Vi følger **Conventional Commits**:

**Format:**
```
<type>[optional scope]: <short description>
[optional body]
```

### Type-forklaringer

| Type       | Eksempel                                   | Bruk                              |
|-----------|-------------------------------------------|----------------------------------|
| **feat**  | `feat(auth): add login with Google`       | Ny funksjon                      |
| **fix**   | `fix(cart): correct item quantity bug`    | Bug-fiks                         |
| **chore** | `chore(deps): update react to v21`       | Vedlikehold/oppdateringer        |
| **docs**  | `docs(readme): clarify installation`     | Dokumentasjon                     |
| **style** | `style(button): fix spacing/indentation` | Kun formatering, ingen logikk     |
| **refactor** | `refactor(auth): simplify login flow` | Refaktorering, ingen ny funksjon  |

**Tips:**
- Scope (f.eks. `auth`, `cart`) gjør det tydelig hvilken del av appen som påvirkes.
- Beskrivelse bør være i **imperativ form**: “add”, “fix”, “update”, “remove”.
- Body brukes hvis commit trenger forklaring utover tittel.

---

## 3️⃣ PR-titler

- Bruk samme stil som commit-meldingen, f.eks. `feat(auth): add login with Google`.
- PR-beskrivelse kan ha mer UX-fokus, f.eks. hvordan funksjonen testes.

---

## 4️⃣ Branch-flow

```text
feature/*  --> PR --> develop (staging)
fix/*      --> PR --> develop (staging)
develop    --> PR --> main (production)

- Feature branches merges kun inn i develop.
- Develop merges kun inn i main.
- Branch protection + Actions sikrer at tests og lint kjører før merge.```