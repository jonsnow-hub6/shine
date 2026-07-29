# Shine Architecture

## Overview

Shine is a realtime alert management dashboard built around PocketBase.

The backend receives alerts from external systems, persists them, and publishes realtime updates to connected clients.

The frontend subscribes to these updates, maintains application state using Redux Toolkit, and provides operators with a responsive interface for monitoring and acknowledging alerts.

---

# High-Level Architecture

```text
                    External Systems
          (Monitoring, Scripts, APIs, etc.)
                         │
                         │ HTTP POST
                         ▼
                 ┌─────────────────┐
                 │    PocketBase   │
                 │                 │
                 │ REST API        │
                 │ Database        │
                 │ Authentication  │
                 │ Realtime        │
                 └────────┬────────┘
                          │
                          │ WebSocket (Realtime)
                          ▼
                 ┌─────────────────┐
                 │ React Frontend  │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Redux Toolkit   │
                 └────────┬────────┘
                          │
          ┌───────────────┴───────────────┐
          ▼                               ▼
    Alert Feed                     Active Alerts
          │                               │
          ▼                               ▼
 Historical View                 Requires Operator Action
```

---

# Repository Structure

```text
apps/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── providers/
│   │   ├── services/
│   │   ├── shared/
│   │   └── styles/
│   │
│   └── Dockerfile
│
└── backend/
    ├── pb_hooks/
    ├── pb_data/
    ├── pocketbase
    └── Dockerfile

docs/
    architecture.md

CLAUDE.md
```

---

# Backend Architecture

PocketBase is responsible for:

- Authentication
- User management
- Database
- REST API
- Realtime subscriptions

PocketBase is currently the only backend service.

No additional backend services should be introduced unless the architecture changes significantly.

---

# Frontend Architecture

```text
Pages
    │
    ▼
Layouts
    │
    ▼
Feature Components
    │
    ▼
Hooks
    │
    ▼
Feature Services
    │
    ▼
PocketBase Service
```

Components should not communicate directly with PocketBase.

All backend communication should pass through the service layer.

---

# Feature Architecture

Each feature owns its implementation.

Example:

```text
features/
└── alerts/
    ├── components/
    ├── hooks/
    ├── services/
    ├── store/
    ├── constants/
    ├── utils/
    └── types/
```

Feature logic should remain inside the feature.

Only reusable code belongs in shared modules.

---

# Alert Flow

## Incoming Alert

```text
External System
        │
        ▼
POST /api/collections/alerts/records
        │
        ▼
PocketBase
        │
        ▼
Persist Alert
        │
        ▼
Realtime Event
        │
        ▼
Frontend Subscription
        │
        ▼
Redux
```

---

# Frontend Alert Flow

```text
Realtime Event
        │
        ▼
Alert Service
        │
        ▼
Redux Slice
        │
        ├─────────────┐
        ▼             ▼
Alert Feed      Active Alerts
```

---

# Active Alert Lifecycle

```text
Alert Received
      │
      ▼
Pending Alert
      │
      ▼
Displayed to Operator
      │
      ▼
Alarm Playing
      │
Confirm
      │
      ▼
Removed from Pending
      │
      ▼
Alarm Stops
```

---

# State Management

Redux Toolkit is the single source of truth.

Global state belongs in Redux.

Component state should only contain temporary UI state.

---

# Authentication

Current implementation:

1. PocketBase automatically creates a frontend user.
2. Frontend automatically authenticates.
3. Auth state is stored in the PocketBase client.

This implementation is intentionally simple and may evolve later.

---

# Service Layer

Every backend interaction should flow through services.

```text
Component
    │
    ▼
Hook
    │
    ▼
Feature Service
    │
    ▼
PocketBase Service
```

Example:

```text
alerts.service.ts

createAlert()

subscribeToAlerts()

getAlerts()

confirmAlert()
```

---

# Theming

Shine supports:

- Light Theme
- Dark Theme

Both are based on Ant Design theme tokens.

Theme colours:

Light

- White
- Yellow

Dark

- Dark Grey
- Yellow

Custom styling should integrate with the theme rather than hardcoding colours.

---

# Sound Architecture

```text
Realtime Alert
        │
        ▼
Redux
        │
        ▼
AlertNotificationProvider
        │
        ▼
Audio Manager
        │
        ▼
Loop Alarm
```

The alarm continues while unresolved active alerts exist.

---

# Notifications

Alert sound:

- loops while active alerts exist

Browser notifications:

- optional
- shown when enabled by the user

---

# Design Principles

The dashboard should prioritise:

- readability
- operator awareness
- realtime responsiveness
- minimal interaction
- clean layouts

The interface should resemble an operational monitoring console rather than a traditional CRUD application.

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Redux Toolkit
- Ant Design
- PocketBase SDK

## Backend

- PocketBase

## Tooling

- Nx
- pnpm
- Docker
- Docker Compose

---

# Development Workflow

```text
Feature Request
        │
        ▼
Feature Folder
        │
        ▼
Service
        │
        ▼
Hook
        │
        ▼
Component
        │
        ▼
Redux (if global state)
```

---

# Future Evolution

The architecture should remain flexible enough to support:

- richer alert metadata
- persistent acknowledgements
- alert filtering
- search
- user roles
- additional dashboard widgets
- integrations with external monitoring systems

The current architecture is intentionally modular to minimise future refactoring.
