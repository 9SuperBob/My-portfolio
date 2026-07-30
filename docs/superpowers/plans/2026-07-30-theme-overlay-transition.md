# Theme Overlay Transition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Animate theme switching with a full-screen destination-colour overlay.

**Architecture:** `App.jsx` holds an overlay colour state alongside the persisted theme. Motion fades the overlay in, changes the theme at 300ms, then fades it out at 600ms.

**Tech Stack:** React, Motion, Node.js, Vite.

### Task 1: Implement the overlay

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `scripts/verify-theme-toggle.mjs`

- [ ] Add a failing verifier for `themeOverlay`, a 300ms timeout, and a fixed Motion overlay.
- [ ] Add the minimal React state, delayed theme update, disabled toggle control, and `motion.div` overlay.
- [ ] Run the theme verifier and production build.
