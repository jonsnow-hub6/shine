# CLAUDE.md

# Shine AI Context

This document provides project context and engineering guidelines for any AI agent contributing to this repository.

It is intended to be tool-agnostic. Although named `CLAUDE.md`, the contents should be respected by any AI coding assistant (Claude, ChatGPT, Gemini, Copilot, etc.).

---

# Project Overview

## Purpose

Shine is a realtime alert management dashboard.

External systems publish alerts into PocketBase.

The frontend receives realtime updates from PocketBase and presents alerts to operators in an intuitive, responsive dashboard.

The project should feel like an operations dashboard rather than a CRUD application.

The primary goals are:

- realtime responsiveness
- high visibility of important alerts
- minimal operator interaction
- clean architecture
- long-term maintainability

---

# High Level Architecture

```
External System
        │
        │ HTTP POST
        ▼
PocketBase
(Database + Auth + REST + Realtime)
        │
        │ realtime subscription
        ▼
React Frontend
        │
        ▼
Redux Store
        │
        ├──────────────┐
        ▼              ▼
Alert Feed      Active Alerts
```

PocketBase is the single backend service.

The frontend should never communicate directly with any other backend.

---

# Repository Structure

```
apps/
    frontend/
    backend/

services/
    shared cross-feature services

```

Each feature owns its own code.

```
features/
    alerts/
        components/
        hooks/
        services/
        store/
        types/
        constants/
        utils/
```

Feature-specific code belongs inside the feature.

Only reusable cross-feature code belongs under root services/, shared/, etc.

---

# Current Functionality

Current implementation includes:

- PocketBase backend
- automatic frontend authentication
- realtime subscriptions
- Redux Toolkit state management
- Alert Feed
- Active Alerts
- acknowledgement flow
- continuous alert sound while alerts remain active
- light/dark Shine themes
- Docker support

---

# Alert Lifecycle

```
Incoming Alert
        │
        ▼
PocketBase
        │
        ▼
Realtime Subscription
        │
        ▼
Redux Store
        │
        ├─────────────┐
        ▼             ▼
Alert Feed      Active Alerts
                        │
                        ▼
                  Operator confirms
                        │
                        ▼
              Removed from pending
```

The alert feed is historical.

Active Alerts represent work that still requires operator acknowledgement.

---

# Frontend Architecture

React

Vite

Redux Toolkit

React Router

Ant Design

PocketBase JS SDK

CSS Modules

---

# Backend

PocketBase is responsible for:

- authentication
- persistence
- REST endpoints
- realtime events

PocketBase should remain the primary backend unless explicitly changed in the future.

---

# State Management

Redux Toolkit is the global state solution.

Do not introduce additional global state libraries.

Use slices.

Business state belongs in Redux.

UI-local state belongs inside components.

---

# PocketBase Access

Never communicate with PocketBase directly from components.

Always use a service layer.

Preferred structure:

```
services/
    pocketbase.ts

features/
    alerts/
        services/
            alerts.service.ts
```

Components

↓

Hooks

↓

Services

↓

PocketBase

---

# Component Philosophy

Prefer:

Small components

Composition

Reusable UI

Avoid:

Large monolithic components

Business logic inside UI

Components should remain mostly presentational.

---

# Hooks

Custom hooks should:

- begin with "use"
- encapsulate reusable behaviour
- avoid rendering logic
- avoid unrelated responsibilities

---

# Styling

Use:

- CSS Modules
- Ant Design
- Ant Design design tokens
- responsive layouts

Avoid:

Large inline styles

Hardcoded colours where tokens exist

Global CSS unless necessary

---

# Naming

Components

PascalCase

Example

```
ActiveAlerts.tsx
AlertSidebar.tsx
```

Hooks

```
useAlerts.ts
```

Services

```
alerts.service.ts
```

Types

```
alert.types.ts
```

Constants

```
alert.constants.ts
```

---

# Engineering Philosophy

This project prioritises maintainability over speed of implementation.

Prefer solutions that scale.

Avoid shortcuts that introduce technical debt.

Information hierarchy is more important than decorative UI.

Operator awareness is more important than visual effects.

New functionality should integrate into the existing architecture rather than introducing parallel patterns.

Prefer extending existing abstractions over creating new ones.

---

# Code Quality

Always:

- use TypeScript strict typing
- avoid `any`
- favour composition
- keep components focused
- extract reusable logic
- avoid duplicated code
- write self-explanatory code
- keep imports organised
- use descriptive names
- maintain consistent formatting

Business logic should be easy to test.

---

# Logging

Avoid console.log in committed code.

Temporary debugging logs are acceptable during development but should be removed before completion.

---

# AI Behaviour

When modifying this project:

Do not rewrite existing architecture unless explicitly requested.

Prefer incremental improvements.

Preserve architectural consistency.

Before introducing new dependencies:

- explain why they are needed
- prefer existing libraries first

When multiple solutions exist:

Recommend the solution that scales best.

Keep generated code production-ready.

Strongly prefer reusable abstractions.

Explain architectural decisions when they significantly affect the project.

Respect existing folder ownership.

Do not duplicate functionality.

Reuse existing services.

Reuse existing hooks.

Reuse existing components.

Prefer Ant Design components before building custom UI.

---

# User Experience Philosophy

Shine is an operational dashboard.

UI decisions should optimise for:

- rapid situational awareness
- readability
- minimal clicks
- realtime feedback
- clear information hierarchy

Visual polish should never reduce clarity.

---

# Future Direction

The project is expected to evolve.

Future functionality may include:

- richer alert metadata
- acknowledgement persistence
- additional alert parameters
- filtering
- search
- user management
- roles
- dashboard enhancements

New implementations should make these future capabilities easy to introduce.

---

# Guiding Principle

When in doubt:

Choose the solution that is:

- simpler
- more maintainable
- more scalable
- more reusable
- more consistent with the existing architecture
