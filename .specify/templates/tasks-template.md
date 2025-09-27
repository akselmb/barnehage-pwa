# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize [language] project with [framework] dependencies
- [ ] T003 [P] Configure linting and formatting tools
- [ ] T004 [P] Configure TypeScript strict mode
- [ ] T005 [P] Set up feature flag system infrastructure
- [ ] T006 [P] Configure PWA manifest and service worker

## Phase 3.2: Security & Simplified Multi-tenant Setup
- [ ] T007 [P] Configure Supabase Row Level Security (RLS)
- [ ] T008 [P] Design database schema with tenant_id relationships
- [ ] T009 [P] Implement authentication middleware with tenant context
- [ ] T010 [P] Configure HTTPS/TLS security headers
- [ ] T011 [P] Set up GDPR compliance framework
- [ ] T012 [P] Create RLS policies for tenant isolation

## Phase 3.3: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.4
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T013 [P] Contract test POST /api/users in tests/contract/test_users_post.py
- [ ] T014 [P] Contract test GET /api/users/{id} in tests/contract/test_users_get.py
- [ ] T015 [P] Integration test user registration in tests/integration/test_registration.py
- [ ] T016 [P] Integration test auth flow in tests/integration/test_auth.py
- [ ] T017 [P] End-to-end test critical user flows
- [ ] T018 [P] Security test tenant isolation with RLS
- [ ] T019 [P] PWA offline functionality tests

## Phase 3.4: Core Implementation (ONLY after tests are failing)
- [ ] T020 [P] User model in src/models/user.py
- [ ] T021 [P] UserService CRUD in src/services/user_service.py
- [ ] T022 [P] CLI --create-user in src/cli/user_commands.py
- [ ] T023 POST /api/users endpoint
- [ ] T024 GET /api/users/{id} endpoint
- [ ] T025 Input validation and sanitization
- [ ] T026 Error handling and logging
- [ ] T027 [P] Norwegian language content implementation

## Phase 3.5: PWA & Feature Flags
- [ ] T028 [P] Implement offline data synchronization
- [ ] T029 [P] Configure push notification system
- [ ] T030 [P] Implement feature flag toggles
- [ ] T031 [P] Optimize for Core Web Vitals performance

## Phase 3.6: Integration
- [ ] T032 Connect UserService to DB
- [ ] T033 Auth middleware with role-based access
- [ ] T034 Request/response logging
- [ ] T035 CORS and security headers
- [ ] T036 [P] Tenant-aware data access controls

## Phase 3.7: Polish
- [ ] T037 [P] Unit tests for validation in tests/unit/test_validation.py
- [ ] T038 [P] Security penetration testing
- [ ] T039 [P] Performance tests (<200ms)
- [ ] T040 [P] Update docs/api.md
- [ ] T041 [P] Norwegian user documentation
- [ ] T042 Remove duplication
- [ ] T043 Run manual-testing.md

## Dependencies
- Security setup (T007-T012) before tests (T013-T019)
- Tests (T013-T019) before implementation (T020-T031)
- T020 blocks T021, T032
- T033 blocks T035
- Implementation before polish (T037-T043)
- Feature flags (T030) before PWA features (T028-T029)

## Parallel Example
```
# Launch T013-T019 together (Tests First):
Task: "Contract test POST /api/users in tests/contract/test_users_post.py"
Task: "Contract test GET /api/users/{id} in tests/contract/test_users_get.py"
Task: "Integration test registration in tests/integration/test_registration.py"
Task: "Integration test auth in tests/integration/test_auth.py"
Task: "End-to-end test critical user flows"
Task: "Security test tenant isolation with RLS"
Task: "PWA offline functionality tests"

# Launch T007-T012 together (Security Setup):
Task: "Configure Supabase Row Level Security (RLS)"
Task: "Design database schema with tenant_id relationships"
Task: "Implement authentication middleware with tenant context"
Task: "Configure HTTPS/TLS security headers"
Task: "Set up GDPR compliance framework"
Task: "Create RLS policies for tenant isolation"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
   - Each contract file → contract test task [P]
   - Each endpoint → implementation task
   
2. **From Data Model**:
   - Each entity → model creation task [P]
   - Relationships → service layer tasks
   
3. **From User Stories**:
   - Each story → integration test [P]
   - Quickstart scenarios → validation tasks

4. **Ordering**:
   - Setup → Tests → Models → Services → Endpoints → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding tests
- [ ] All entities have model tasks
- [ ] All tests come before implementation
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task