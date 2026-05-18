# Greenfield University — Unified Portal v2.0

**Angular 21 | Landing Page + School Management Portal**

A fully unified, production-grade web application combining a cinematic landing page with a complete role-based school management portal. Built with Angular 21 standalone components, NgRx SignalStore, Three.js, Lenis smooth scroll, and a shared design system.

---

## Quick Start

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 20.x LTS |
| npm | ≥ 10.x |
| Angular CLI | ^21.2.0 |

### Install Angular CLI (if not installed)

```bash
npm install -g @angular/cli@21
```

### Run the project

```bash
# 1. Unzip
unzip greenfield-university-v21.zip -d greenfield-university
cd greenfield-university

# 2. Install dependencies
npm install

# 3. Start dev server
ng serve

# 4. Open browser
# → http://localhost:4200
```

---

## Project Structure

```
src/
├── app/
│   ├── app.component.ts         # Root component
│   ├── app.config.ts            # Angular 21 zoneless config
│   ├── app.routes.ts            # Unified router (landing + portal)
│   ├── core/
│   │   ├── auth/                # JWT auth, NgRx SignalStore, guards
│   │   ├── mock/                # Mock data (students, courses, exams...)
│   │   ├── models/              # TypeScript domain models
│   │   └── services/            # NotificationService, ThemeService
│   ├── shared/
│   │   ├── components/          # Avatar, Badge, StatCard, DataTable...
│   │   ├── directives/          # HasRole directive
│   │   └── pipes/               # TimeAgo, GradeColor
│   ├── features/
│   │   ├── landing/             # 13-section landing page
│   │   │   └── sections/        # Nav, Hero (Three.js), TrustBar...
│   │   ├── auth/login/          # Login page with demo credentials
│   │   ├── student/             # 10 student portal pages
│   │   ├── staff/               # 9 staff portal pages
│   │   └── admin/               # 7 admin portal pages
│   └── layout/
│       ├── shell/               # Portal shell (sidebar + topbar + router-outlet)
│       ├── sidebar/             # Role-aware navigation sidebar
│       └── topbar/              # Portal top bar with theme toggle
├── styles.scss                  # Unified design system (landing + portal tokens)
└── index.html                   # Google Fonts: Space Grotesk + DM Sans
```

---

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| **Student** | `student@school.edu` | `password123` |
| **Staff** | `staff@school.edu` | `password123` |
| **Admin** | `admin@school.edu` | `password123` |

---

## Routing Map

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Authentication |
| `/student/dashboard` | Student dashboard |
| `/student/courses` | Registered courses |
| `/student/registration` | Course registration |
| `/student/attendance` | Attendance records |
| `/student/exams` | Exam timetable |
| `/student/results` | Academic results |
| `/student/library` | E-Library |
| `/student/messages` | Messaging |
| `/student/calendar` | Academic calendar |
| `/student/profile` | Student profile |
| `/staff/dashboard` | Staff dashboard |
| `/staff/courses` | My courses |
| `/staff/students` | Student roster |
| `/staff/attendance` | Take attendance |
| `/staff/exams` | Exam builder |
| `/staff/grading` | Enter grades |
| `/staff/messages` | Messages |
| `/staff/calendar` | Calendar |
| `/staff/profile` | Staff profile |
| `/admin/dashboard` | Admin overview |
| `/admin/users` | User management |
| `/admin/courses` | Course management |
| `/admin/timetable` | Timetable builder |
| `/admin/reports` | Reports & analytics |
| `/admin/announcements` | Post announcements |
| `/admin/settings` | System settings |

---

## Angular 21 Key Conventions Used

- `provideExperimentalZonelessChangeDetection()` — no Zone.js
- `input()` / `output()` signal-based decorators
- `viewChild()` signal queries
- `afterNextRender()` for DOM-dependent init (Three.js, Lenis)
- `inject()` exclusively for dependency injection
- No `standalone: true` needed (default in v21)
- NgRx SignalStore v21 for auth state
- `@for`, `@if`, `@switch` new control flow syntax throughout

---

## Design System

- **Fonts:** Space Grotesk (headings) + DM Sans (body)
- **Palette:** Ink (#0a0a0f), Chalk, Primary Blue (#1a5cff), Gold, Jade, Coral
- **Landing:** Apple-meets-Miva aesthetic, dark hero with Three.js particle canvas, Lenis smooth scroll, IntersectionObserver reveal animations
- **Portal:** Clean, accessible dashboard UI with light/dark mode support
- **No gradients** — solid colours throughout per design spec

---

## Build for Production

```bash
ng build
# Output → dist/greenfield-university/
```
