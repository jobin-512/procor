/* Icon set inlined from Lucide (ISC) — no external request, so icons
       render even when a CDN is unreachable. */
    const ICONS = {
        "smartphone": '<svg class="lucide lucide-smartphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="14" height="20" x="5" y="2" rx="2" ry="2" /> <path d="M12 18h.01" />',
        "hand-coins": '<svg class="lucide lucide-hand-coins" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /> <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /> <path d="m2 16 6 6" /> <circle cx="16" cy="9" r="2.9" /> <circle cx="6" cy="5" r="3" />',
        "banknote": '<svg class="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="20" height="12" x="2" y="6" rx="2" /> <circle cx="12" cy="12" r="2" /> <path d="M6 12h.01M18 12h.01" />',
        "calculator": '<svg class="lucide lucide-calculator" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="16" height="20" x="4" y="2" rx="2" /> <line x1="8" x2="16" y1="6" y2="6" /> <line x1="16" x2="16" y1="14" y2="18" /> <path d="M16 10h.01" /> <path d="M12 10h.01" /> <path d="M8 10h.01" /> <path d="M12 14h.01" /> <path d="M8 14h.01" /> <path d="M12 18h.01" /> <path d="M8 18h.01" />',
        "database": '<svg class="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 5V19A9 3 0 0 0 21 19V5" /> <path d="M3 12A9 3 0 0 0 21 12" />',
        "factory": '<svg class="lucide lucide-factory" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 16h.01" /> <path d="M16 16h.01" /> <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" /> <path d="M8 16h.01" />',
        "plus": '<svg class="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M5 12h14" /> <path d="M12 5v14" />',
        "shopping-bag": '<svg class="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M16 10a4 4 0 0 1-8 0" /> <path d="M3.103 6.034h17.794" /> <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />',
        "utensils": '<svg class="lucide lucide-utensils" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /> <path d="M7 2v20" /> <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />',
        "phone": '<svg class="lucide lucide-phone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />',
        "heart-pulse": '<svg class="lucide lucide-heart-pulse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /> <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />',
        "panel-left": '<svg class="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 3v18" />',
        "bell": '<svg class="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />',
        "activity": '<svg class="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />',
        "arrow-left": '<svg class="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m12 19-7-7 7-7" /> <path d="M19 12H5" />',
        "arrow-right": '<svg class="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',
        "book-open": '<svg class="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',
        "briefcase": '<svg class="lucide lucide-briefcase" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /> <rect width="20" height="14" x="2" y="6" rx="2" />',
        "building-2": '<svg class="lucide lucide-building-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10 12h4" /> <path d="M10 8h4" /> <path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" /> <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />',
        "calendar-range": '<svg class="lucide lucide-calendar-range" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M16 2v3" /> <path d="M3 9h18" /> <path d="M8 2v3" /> <path d="M17 13h-6" /> <path d="M13 17H7" /> <path d="M7 13h.01" /> <path d="M17 17h.01" />',
        "check": '<svg class="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M20 6 9 17l-5-5" />',
        "chevron-down": '<svg class="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m6 9 6 6 6-6" />',
        "clipboard-list": '<svg class="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="M12 11h4" /> <path d="M12 16h4" /> <path d="M8 11h.01" /> <path d="M8 16h.01" />',
        "cloud": '<svg class="lucide lucide-cloud" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',
        "door-open": '<svg class="lucide lucide-door-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10 21H2" /> <path d="M10 3H7a2 2 0 00-2 2v16" /> <path d="M14 12h.01" /> <path d="M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z" /> <path d="M22 21h-3" />',
        "download": '<svg class="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 15V3" /> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <path d="m7 10 5 5 5-5" />',
        "file-check-2": '<svg class="lucide lucide-file-check-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m14 20 2 2 4-4" />',
        "file-text": '<svg class="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10 9H8" /> <path d="M16 13H8" /> <path d="M16 17H8" />',
        "fingerprint": '<svg class="lucide lucide-fingerprint" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" /> <path d="M14 13.12c0 2.38 0 6.38-1 8.88" /> <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" /> <path d="M2 12a10 10 0 0 1 18-6" /> <path d="M2 16h.01" /> <path d="M21.8 16c.2-2 .131-5.354 0-6" /> <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" /> <path d="M8.65 22c.21-.66.45-1.32.57-2" /> <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />',
        "git-merge": '<svg class="lucide lucide-git-merge" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <circle cx="18" cy="18" r="3" /> <circle cx="6" cy="6" r="3" /> <path d="M6 21V9a9 9 0 0 0 9 9" />',
        "graduation-cap": '<svg class="lucide lucide-graduation-cap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /> <path d="M22 10v6" /> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />',
        "handshake": '<svg class="lucide lucide-handshake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m11 17 2 2a1 1 0 1 0 3-3" /> <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /> <path d="m21 3 1 11h-2" /> <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /> <path d="M3 4h8" />',
        "history": '<svg class="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M12 7v5l4 2" />',
        "laptop": '<svg class="lucide lucide-laptop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" /> <path d="M20.054 15.987H3.946" />',
        "layers": '<svg class="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />',
        "life-buoy": '<svg class="lucide lucide-life-buoy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <circle cx="12" cy="12" r="10" /> <path d="m4.93 4.93 4.24 4.24" /> <path d="m14.83 9.17 4.24-4.24" /> <path d="m14.83 14.83 4.24 4.24" /> <path d="m9.17 14.83-4.24 4.24" /> <circle cx="12" cy="12" r="4" />',
        "lock": '<svg class="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" />',
        "mail": '<svg class="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" />',
        "map-pin": '<svg class="lucide lucide-map-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <circle cx="12" cy="10" r="3" />',
        "menu": '<svg class="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M4 5h16" /> <path d="M4 12h16" /> <path d="M4 19h16" />',
        "message-square": '<svg class="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />',
        "moon": '<svg class="lucide lucide-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',
        "plug": '<svg class="lucide lucide-plug" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 22v-5" /> <path d="M15 8V2" /> <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" /> <path d="M9 8V2" />',
        "receipt": '<svg class="lucide lucide-receipt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 17V7" /> <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />',
        "refresh-cw": '<svg class="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',
        "rocket": '<svg class="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /> <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" /> <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" /> <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />',
        "search": '<svg class="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',
        "server": '<svg class="lucide lucide-server" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="20" height="8" x="2" y="2" rx="2" ry="2" /> <rect width="20" height="8" x="2" y="14" rx="2" ry="2" /> <line x1="6" x2="6.01" y1="6" y2="6" /> <line x1="6" x2="6.01" y1="18" y2="18" />',
        "shield-check": '<svg class="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="m9 12 2 2 4-4" />',
        "sliders-horizontal": '<svg class="lucide lucide-sliders-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10 5H3" /> <path d="M12 19H3" /> <path d="M14 3v4" /> <path d="M16 17v4" /> <path d="M21 12h-9" /> <path d="M21 19h-5" /> <path d="M21 5h-7" /> <path d="M8 10v4" /> <path d="M8 12H3" />',
        "sparkles": '<svg class="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',
        "sun": '<svg class="lucide lucide-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />',
        "target": '<svg class="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" />',
        "terminal": '<svg class="lucide lucide-terminal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 19h8" /> <path d="m4 17 6-6-6-6" />',
        "trending-up": '<svg class="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M16 7h6v6" /> <path d="m22 7-8.5 8.5-5-5L2 17" />',
        "user-check": '<svg class="lucide lucide-user-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m16 11 2 2 4-4" /> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" />',
        "user-search": '<svg class="lucide lucide-user-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <circle cx="10" cy="7" r="4" /> <path d="M10.3 15H7a4 4 0 0 0-4 4v2" /> <circle cx="17" cy="17" r="3" /> <path d="m21 21-1.9-1.9" />',
        "user-x": '<svg class="lucide lucide-user-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <line x1="17" x2="22" y1="8" y2="13" /> <line x1="22" x2="17" y1="8" y2="13" />',
        "users-round": '<svg class="lucide lucide-users-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M18 21a8 8 0 0 0-16 0" /> <circle cx="10" cy="8" r="5" /> <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />',
        "wallet": '<svg class="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /> <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />',
        "workflow": '<svg class="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect width="8" height="8" x="3" y="3" rx="2" /> <path d="M7 11v4a2 2 0 0 0 2 2h4" /> <rect width="8" height="8" x="13" y="13" rx="2" />',
        "x": '<svg class="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M18 6 6 18" /> <path d="m6 6 12 12" />'
    };

    function renderIcons(scope) {
      (scope || document).querySelectorAll('[data-lucide]').forEach((el) => {
        const name = el.getAttribute('data-lucide');
        const body = ICONS[name];
        if (!body) { console.warn('Missing icon:', name); return; }
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '1.75');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('class', el.getAttribute('class') || '');
        svg.innerHTML = body;
        el.replaceWith(svg);
      });
    }

document.addEventListener('DOMContentLoaded', () => {
      /* Icons */
      renderIcons();

      /* Year */
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      /* Navbar elevation on scroll */
      const navbar = document.getElementById('navbar');
      const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 12);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      /* Mega menu */
      const trigger = document.getElementById('modules-trigger');
      const item = document.getElementById('modules-item');
      const mega = document.getElementById('mega-menu');
      const mq = (q) => (window.matchMedia ? window.matchMedia(q) : { matches: false });
      const canHover = mq('(hover: hover) and (pointer: fine)');
      let closeTimer;

      const setMega = (open) => {
        clearTimeout(closeTimer);
        trigger.setAttribute('aria-expanded', String(open));
        mega.classList.toggle('is-open', open);
      };
      const isMegaOpen = () => trigger.getAttribute('aria-expanded') === 'true';

      [item, mega].forEach((el) => {
        el.addEventListener('mouseenter', () => { if (canHover.matches) setMega(true); });
        el.addEventListener('mouseleave', () => {
          if (canHover.matches) closeTimer = setTimeout(() => setMega(false), 180);
        });
      });

      trigger.addEventListener('click', (e) => {
        // Keyboard activation (detail === 0) or touch toggles; mouse on hover devices keeps it open.
        if (e.detail === 0 || !canHover.matches) setMega(!isMegaOpen());
        else setMega(true);
      });

      mega.addEventListener('focusout', (e) => {
        if (!mega.contains(e.relatedTarget) && !item.contains(e.relatedTarget)) setMega(false);
      });

      mega.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMega(false)));

      /* Mobile menu */
      const mobileToggle = document.getElementById('mobile-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const setMobile = (open) => {
        mobileToggle.setAttribute('aria-expanded', String(open));
        mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        mobileMenu.classList.toggle('is-open', open);
        mobileToggle.querySelector('.icon-open').classList.toggle('hidden', open);
        mobileToggle.querySelector('.icon-close').classList.toggle('hidden', !open);
      };
      mobileToggle.addEventListener('click', () => setMobile(mobileToggle.getAttribute('aria-expanded') !== 'true'));
      mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMobile(false)));

      /* Global dismissal */
      document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (isMegaOpen()) { setMega(false); trigger.focus(); }
        if (mobileToggle.getAttribute('aria-expanded') === 'true') { setMobile(false); mobileToggle.focus(); }
      });
      document.addEventListener('click', (e) => {
        if (isMegaOpen() && !item.contains(e.target) && !mega.contains(e.target)) setMega(false);
        if (mobileToggle.getAttribute('aria-expanded') === 'true' && !mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) setMobile(false);
      });

      /* =========================================================
         SITE CONFIGURATION — fill these in once and they appear
         everywhere on the site (footer, contact page, schema).
      ========================================================== */
      const CONFIG = {
        legalEntity: 'Procor Digital Solutions Pvt Ltd',
        address: 'New Delhi',
        phone: '+91 99999 54416',
        salesEmail: 'info@procor.co.in',
        supportEmail: '',              // separate support inbox, if you have one
        portalUrl: '',                 // your live application login URL
        formEndpoint: 'https://script.google.com/macros/s/AKfycbwfYRd2kf4zOxZkAMogB_uoz82kD9PavgDS5zvqC-KIUbyFnasFDJpIw1YZ8y76kIQ4/exec',
        siteUrl: 'https://www.procorhrms.com'
      };


      /* =========================================================
         MODULE DATA
         t title · i icon · c accent · sub subline · d intro
         cap capability chips · f capabilities · who · replaces
         connects · a sample rows · faq
      ========================================================== */
      const MODULES = {
        'core-hr': { t: 'Core HR', i: 'users-round', c: '0 99 215',
          sub: 'The record every other module depends on.',
          d: 'A single verified employee record covering personal details, job history, documents and org structure, which every other module reads from instead of keeping its own copy.',
          cap: ['Employee master', 'Org structure', 'Documents', 'Multi-entity', 'Access control'],
          f: ['Employee master with full change history on every field', 'Org chart, reporting lines and cost centres kept current', 'Group companies, locations and cost centres in one instance', 'Role-based access so salary and identity fields stay restricted'],
          who: 'HR operations own the record. Managers see their own teams. Employees update their own contact and bank details through self-service, with changes routed for verification.',
          replaces: 'The master spreadsheet that four people maintain different versions of, plus the document folder nobody can find during an audit.',
          connects: ['payroll', 'attendance', 'offboarding'],
          a: [['Bank details updated', 'Verified by HR operations', 'Approved'], ['12 records synced to payroll', 'September cycle', 'Complete'], ['Probation confirmations due', '4 employees this week', 'Action needed']],
          faq: [['Can employees update their own details?', 'Yes. Self-service changes to contact, address and bank details are routed to HR for verification before they take effect, and the previous value is retained in the change history.'],
                ['How are multiple legal entities handled?', 'Each entity carries its own statutory settings, policies and approval chains while sharing one employee database, so a transfer between group companies does not create a duplicate record.']] },

        'attendance': { t: 'Attendance', i: 'fingerprint', c: '62 142 240',
          sub: 'From the clock-in to the payslip, without a spreadsheet in between.',
          d: 'Shift schedules, clock-ins, regularisations and overtime captured as they happen, then passed into the pay run as the inputs payroll actually needs.',
          cap: ['Shifts and rosters', 'Clock-in', 'Regularisation', 'Overtime', 'Muster roll'],
          f: ['Configurable shifts, rosters, week-offs and holiday calendars per location', 'Clock-in from biometric devices, the browser or the employee mobile app', 'Regularisation requests with a manager approval trail', 'Overtime rules that feed the pay run without manual transfer'],
          who: 'Shift supervisors publish rosters, managers approve regularisations, and payroll receives the finished inputs without chasing anyone for a sheet.',
          replaces: 'Device exports that get cleaned in Excel every month and emailed to payroll three days before cutoff.',
          connects: ['payroll', 'leave', 'core-hr'],
          a: [['Night shift roster published', 'Operations, 42 employees', 'Live'], ['8 regularisations awaiting approval', 'Manager queue', 'Pending'], ['Muster roll generated', 'August, all locations', 'Complete']],
          faq: [['Can we keep our existing biometric devices?', 'In most cases yes. Devices that can export punch data on a schedule or expose an API can be connected, so hardware does not need replacing to move platforms.'],
                ['How is overtime calculated?', 'Overtime rules are configured per entity and grade, applied to captured punches, and carried into the pay run as a separate earning line so it is visible on the payslip.']] },

        'leave': { t: 'Leave', i: 'calendar-range', c: '16 185 129',
          sub: 'Your policy, enforced automatically.',
          d: 'Leave types, balances and approval chains driven by the policy you actually wrote, with accrual, carry forward and encashment handled by the system rather than by a coordinator.',
          cap: ['Policy engine', 'Accrual', 'Carry forward', 'Encashment', 'Team calendar'],
          f: ['Policies that vary by grade, location and legal entity', 'Automatic accrual, carry forward, lapse and encashment', 'Holiday calendars maintained per location', 'Team calendar so managers see coverage before approving'],
          who: 'Employees apply and see their own balance. Managers approve against visible team coverage. HR sets the policy once instead of answering balance queries.',
          replaces: 'A leave tracker workbook, an email approval chain and a monthly balance query queue.',
          connects: ['attendance', 'payroll', 'core-hr'],
          a: [['Three days of casual leave', 'Approved by reporting manager', 'Approved'], ['Comp-off credited', '18 employees, festival shift', 'Complete'], ['Encashment window', 'Opens at year end', 'Scheduled']],
          faq: [['Can different entities have different leave policies?', 'Yes. Policies are configured per entity, location and grade, and an employee moving between them carries the correct entitlement automatically.'],
                ['Does leave affect payroll automatically?', 'Yes. Loss-of-pay days and encashment flow into the pay run as inputs, so payroll does not need a separate leave statement.']] },

        'assets': { t: 'Assets', i: 'laptop', c: '217 119 6',
          sub: 'Issued, tracked and recovered at exit.',
          d: 'A register of the equipment your company owns and who currently holds it, tied to the employee record so recovery is part of the exit process rather than an afterthought.',
          cap: ['Office assets', 'Communication assets', 'Issue and return', 'Custody trail', 'Exit recovery'],
          f: ['Separate registers for office and communication assets', 'Issue, transfer and return with employee acknowledgement', 'Warranty, insurance and depreciation tracked against each item', 'Recovery tied to offboarding clearance so nothing is written off silently'],
          who: 'IT and admin manage the register. Managers see what their team holds. Finance gets a defensible asset position at year end.',
          replaces: 'An asset sheet that was last accurate two audits ago.',
          connects: ['onboarding', 'offboarding', 'core-hr'],
          a: [['Laptop issued to new joiner', 'Acknowledged by employee', 'Assigned'], ['Devices due back', 'Exits this week', 'Pending'], ['Asset audit closed', 'One location', 'Complete']],
          faq: [['Can employees acknowledge assets digitally?', 'Yes. Issue and return are confirmed by the employee in self-service, which creates the custody record you need at exit.'],
                ['Does it handle non-IT assets?', 'Yes. Any issued item can be tracked, from vehicles and tools to access cards and uniforms.']] },

        'recruitment': { t: 'Recruitment', i: 'user-search', c: '124 58 237',
          sub: 'New headcount and backfills in the same pipeline.',
          d: 'Requisitions, candidates and interview feedback in one pipeline, with a distinct path for replacement hiring because backfilling a leaver is not the same process as adding headcount.',
          cap: ['Requisitions', 'Approval chain', 'Candidate pipeline', 'Interviews', 'Offers'],
          f: ['Separate workflows for new headcount and replacement hires', 'Approval chain before a role is opened to the market', 'Stage-wise pipeline with interview scheduling and feedback', 'Offer generation that hands straight over to onboarding'],
          who: 'Hiring managers raise requisitions, finance approves the headcount, recruiters run the pipeline, and interviewers leave structured feedback.',
          replaces: 'Requisition approvals over email and candidate tracking in a shared sheet.',
          connects: ['onboarding', 'core-hr', 'offboarding'],
          a: [['Requisition raised', 'Replacement for a resigning employee', 'Approved'], ['Candidates in pipeline', 'Four at offer stage', 'Active'], ['Offer accepted', 'Handed to onboarding', 'Closed']],
          faq: [['What makes replacement hiring different?', 'A backfill is linked to the employee being replaced and to their exit date, so the approval path, budget check and target joining date all follow from the vacancy rather than from a new-headcount business case.'],
                ['Does an accepted offer create the employee record?', 'Yes. Accepting an offer triggers onboarding and creates the employee record from the candidate data already captured, so nothing is re-typed.']] },

        'onboarding': { t: 'Onboarding', i: 'rocket', c: '2 132 199',
          sub: 'Signed offer to productive first day.',
          d: 'Offer acceptance triggers document collection, asset requests and day-one tasks, so a new joiner arrives to a working laptop, a payroll record and a plan.',
          cap: ['Document collection', 'Verification', 'Asset requests', 'Day-one tasks', 'Induction'],
          f: ['Digital document collection with verification status', 'Asset and access requests raised automatically on acceptance', 'Buddy, training and day-one checklists with owners', 'Employee record created without re-entering candidate data'],
          who: 'HR runs the checklist, IT and admin receive their tasks automatically, and the joiner completes documents before day one.',
          replaces: 'A joining kit emailed as attachments and a mental checklist held by one HR executive.',
          connects: ['recruitment', 'assets', 'core-hr'],
          a: [['Documents verified', 'Ahead of joining date', 'Complete'], ['Asset request raised', 'Laptop and access card', 'In progress'], ['Induction scheduled', 'Day one, first session', 'Scheduled']],
          faq: [['How far in advance can onboarding start?', 'As soon as the offer is accepted. Document collection and asset requests typically run in the week before joining so day one is productive.'],
                ['Can we vary onboarding by role or location?', 'Yes. Checklists are configured per role, entity and location, so a factory joiner and a head-office joiner follow different paths.']] },

        'performance': { t: 'Performance', i: 'target', c: '225 29 72',
          sub: 'Goals that connect to the appraisal run.',
          d: 'Goal setting and review cycles that link individual objectives to company targets, and produce ratings your payroll team can actually act on at appraisal time.',
          cap: ['Goal setting', 'Cascading goals', 'Review cycles', 'Calibration', 'Appraisal inputs'],
          f: ['Goals cascading from company objectives to individual targets', 'Self, manager and skip-level reviews in one cycle', 'Calibration support before ratings are finalised', 'Ratings available as inputs to the appraisal pay run'],
          who: 'Leadership sets objectives, managers run reviews, HR administers the cycle and calibration, and payroll receives the outcome.',
          replaces: 'A review form circulated as a document and a rating spreadsheet reconciled by hand.',
          connects: ['core-hr', 'payroll'],
          a: [['Review cycle opened', 'All participants notified', 'Live'], ['Calibration session', 'One department', 'Scheduled'], ['Manager submissions pending', 'Reminders sent', 'Action needed']],
          faq: [['Can we run more than one cycle a year?', 'Yes. Cycles are configured independently, so quarterly check-ins and an annual appraisal can run on different schedules for different populations.'],
                ['Do ratings flow into increments?', 'Ratings are available as an input to the appraisal pay run, so increment and bonus workings use the same data rather than a separate sheet.']] },

        'payroll': { t: 'Payroll', i: 'wallet', c: '1 43 97',
          sub: 'One cycle, every entity, statutory deductions included.',
          d: 'A compliant pay run that pulls attendance, leave and claims automatically, calculates PF, ESI, professional tax and TDS in the same cycle, and publishes payslips across every entity you operate.',
          cap: ['PF', 'ESI', 'Professional tax', 'TDS', 'Variable pay', 'Form 16', 'Bank files'],
          f: ['Attendance, leave and approved claims pulled in before the run starts', 'Variable pay engine for incentives, commissions and service charge', 'Statutory deductions, challans and returns produced from the same run', 'Payslips published to employees across all entities on approval'],
          who: 'Payroll and finance run the cycle under maker-checker approval. HR supplies nothing extra, because the inputs are already in the system. Employees receive payslips in self-service.',
          replaces: 'An input workbook assembled from four sources, emailed to a vendor, and reconciled again when it comes back.',
          connects: ['attendance', 'leave', 'reimbursement'],
          a: [['Pay cycle calculated', 'Awaiting final approval', 'In review'], ['Statutory challans generated', 'Ready for payment', 'Ready'], ['Payslips published', 'Previous cycle, all entities', 'Complete']],
          faq: [['How do we know the first run will be correct?', 'Migrated salary structures, balances and year-to-date figures are validated against your existing system during implementation, and calculations are verified with your team before sign-off. The first live run is processed under maker-checker approval with our delivery team present.'],
                ['How is variable pay handled across outlets?', 'The variable pay engine supports distribution configured per client, whether unit-wise, pooled company-wide or through hybrid pool groups, which matters for service charge and incentive models.'],
                ['What happens if a pay run is wrong?', 'Runs are locked only after maker-checker approval. Before lock, inputs can be corrected and recalculated; after lock, corrections are processed as adjustments in the next cycle with a full audit trail.']] },

        'reimbursement': { t: 'Reimbursement & Expenses', i: 'receipt', c: '192 38 211',
          sub: 'Claim to payout, inside payroll.',
          d: 'Expense claims submitted with receipts, checked against policy limits, approved by the right manager and settled through the next pay run instead of a separate payment process.',
          cap: ['Category limits', 'Receipts', 'Policy checks', 'Approvals', 'Payroll settlement'],
          f: ['Category-wise limits and policy checks applied at submission', 'Receipt upload with duplicate detection', 'Multi-level approval routing by amount and grade', 'Settlement through payroll or direct transfer'],
          who: 'Employees claim from self-service, managers approve, finance reviews exceptions, and payroll settles without a second payment run.',
          replaces: 'Claim forms with receipts stapled to them and a reimbursement cheque run.',
          connects: ['payroll', 'core-hr'],
          a: [['Travel claim submitted', 'Awaiting manager approval', 'Pending'], ['Claims cleared for payout', 'Current payroll cycle', 'Approved'], ['Policy breach flagged', 'Above grade limit', 'Action needed']],
          faq: [['Can claims be settled outside payroll?', 'Yes. Approved claims can be settled in the pay run or paid separately, depending on how your finance team prefers to handle cash flow.'],
                ['Are policy limits enforced at submission?', 'Yes. Limits by category and grade are checked when the claim is raised, so breaches are visible before an approver spends time on them.']] },

        'offboarding': { t: 'Offboarding', i: 'door-open', c: '71 85 105',
          sub: 'Clearance, recovery and settlement, closed out on time.',
          d: 'Resignation through to full-and-final settlement as one tracked workflow, so clearances, asset recovery, access revocation and the final payment do not depend on someone remembering.',
          cap: ['Resignation', 'Notice period', 'Clearances', 'Asset recovery', 'Full and final'],
          f: ['Resignation, notice period and last working day tracked in one place', 'Department-wise clearance checklists with owners and due dates', 'Asset recovery and access revocation tied to clearance', 'Full-and-final settlement and exit documents produced from the same record'],
          who: 'HR runs the exit, department owners complete clearances, IT revokes access on the right date, and finance settles from verified figures.',
          replaces: 'A clearance form passed between desks and an FnF calculation built by hand weeks after the exit.',
          connects: ['assets', 'payroll', 'core-hr'],
          a: [['Clearance raised', 'IT, finance and admin', 'In progress'], ['Full and final processed', 'Previous cycle exits', 'Settled'], ['Exit interview scheduled', 'Before last working day', 'Scheduled']],
          faq: [['How quickly can full-and-final be settled?', 'Because clearances, recoveries and leave balances are already in the system, settlement can be prepared as soon as the last working day passes rather than after a manual collection exercise.'],
                ['Is access revoked automatically?', 'Access revocation is a tracked step in the clearance workflow tied to the last working day, so it is owned and dated rather than assumed.']] },

        'helpdesk': { t: 'Helpdesk', i: 'life-buoy', c: '234 88 12',
          sub: 'Employee questions, answered and tracked.',
          d: 'A single place for employees to raise HR queries or find their own answers, with every ticket routed, tracked and measured against its resolution time.',
          cap: ['Ticket routing', 'SLA tracking', 'FAQ library', 'Escalation', 'Resolution history'],
          f: ['Category-wise routing with service levels per ticket type', 'Searchable FAQ and policy library for self-service', 'Escalation matrix with automatic reminders', 'Resolution history visible on the employee record'],
          who: 'Employees raise and track their own tickets. HR handles exceptions rather than repeat questions. Leadership sees where the volume comes from.',
          replaces: 'An HR inbox where queries are answered twice and lost once.',
          connects: ['core-hr', 'payroll'],
          a: [['Payslip query', 'Answered from policy library', 'Resolved'], ['Shift change request', 'Routed to operations', 'In progress'], ['Asset replacement', 'Routed to IT', 'Assigned']],
          faq: [['Can employees see the status of their ticket?', 'Yes. Employees track their own tickets end to end, which removes most of the follow-up email HR currently absorbs.'],
                ['Does the FAQ reduce ticket volume?', 'It is designed to. Common questions about payslips, leave balances and policies are answered from the library before a ticket is created.']] }
      };

      const GROUPS = [
        ['Workforce Core', ['core-hr', 'attendance', 'leave', 'assets']],
        ['Talent & Growth', ['recruitment', 'onboarding', 'performance']],
        ['Finance & Operations', ['payroll', 'reimbursement', 'offboarding', 'helpdesk']]
      ];
      const GROUP_OF = {};
      GROUPS.forEach(([label, keys]) => keys.forEach((k) => { GROUP_OF[k] = label; }));
      const ORDER = GROUPS.flatMap(([, keys]) => keys);

      const homeView = document.getElementById('home-view');
      const moduleView = document.getElementById('module-view');
      const canvas = document.getElementById('module-canvas');
      const refreshIcons = () => renderIcons();
      const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');

      /* Shared building blocks ------------------------------------------------ */
      const faqBlock = (items) => items.map(([q, a]) => `
        <details class="group border-b border-slate-200/60 py-5">
          <summary class="flex cursor-pointer list-none items-start justify-between gap-6 text-[16.5px] font-semibold text-ink transition-colors hover:text-indigo-600">
            ${esc(q)}
            <span class="mt-1 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-45"><i data-lucide="plus" class="h-4 w-4"></i></span>
          </summary>
          <p class="mt-4 max-w-3xl text-[15.5px] leading-[1.75] text-slate-600">${esc(a)}</p>
        </details>`).join('');

      const sampleWindow = (d) => `
        <div class="overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/90 shadow-[0_20px_50px_rgba(8,112,184,0.05),0_40px_80px_-32px_rgba(1,43,97,0.25)] backdrop-blur">
          <div class="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
            <span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span><span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span><span class="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
            <p class="ml-3 text-[12.5px] font-medium text-slate-500">${d.t}</p>
            <span class="ml-auto rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">Sample view</span>
          </div>
          <ul class="divide-y divide-slate-100">
            ${d.a.map(([title, meta, status]) => `
              <li class="flex items-center gap-4 px-6 py-5">
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style="background: rgb(${d.c} / 0.08); color: rgb(${d.c}); box-shadow: inset 0 0 0 1px rgb(${d.c} / 0.16)"><i data-lucide="${d.i}" class="h-[18px] w-[18px]"></i></span>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-[14.5px] font-medium text-ink">${title}</p>
                  <p class="truncate text-[12.5px] text-slate-400">${meta}</p>
                </div>
                <span class="shrink-0 rounded-full px-3 py-1 text-[11.5px] font-semibold" style="background: rgb(${d.c} / 0.09); color: rgb(${d.c})">${status}</span>
              </li>`).join('')}
          </ul>
        </div>`;

      const pageHeadSection = (title, lead, intro, ctaLabel, ctaHref) => `
        <section class="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40">
          <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
            <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.72)_0%,rgba(255,255,255,0.86)_75%)]"></div>
            <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_30%_25%,#000_0%,transparent_75%)]"></div>
            <div class="absolute -top-40 right-[-8%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(0,99,215,0.14),transparent_62%)] blur-3xl"></div>
          </div>
          <div class="mx-auto max-w-[1320px] px-6 lg:px-10">
            <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-[13px] text-slate-400">
              <a href="#top" class="transition-colors hover:text-ink">Home</a><span class="text-slate-300">/</span>
              <span class="font-medium text-ink">${title}</span>
            </nav>
            <div class="mt-10 grid gap-12 lg:grid-cols-5">
              <h1 class="font-display text-ink lg:col-span-3">
                <span class="wdth-condensed block text-[clamp(2.4rem,5.6vw,4.6rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">${title}</span>
                <span class="mt-3 block max-w-[18ch] text-[clamp(1.4rem,2.7vw,2.1rem)] font-extralight leading-[1.15] tracking-[-0.04em] text-slate-500">${lead}</span>
              </h1>
              <div class="lg:col-span-2 lg:pt-6">
                <p class="max-w-[34rem] text-[16.5px] leading-[1.75] text-slate-600">${intro}</p>
                <a href="${ctaHref || '#/contact'}" class="cta-primary group mt-8 inline-flex h-12 px-7 text-[15px]"><span class="cta-glow"></span><span class="relative">${ctaLabel || 'Book a demo'}</span></a>
              </div>
            </div>
          </div>
        </section>`;

      /* ---------------- MODULE PAGE ---------------- */
      function activeModule(name) {
        const key = MODULES[name] ? name : ORDER[0];
        const d = MODULES[key];
        const pos = ORDER.indexOf(key);
        const prev = ORDER[(pos - 1 + ORDER.length) % ORDER.length];
        const next = ORDER[(pos + 1) % ORDER.length];

        canvas.innerHTML = `
          <section class="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40" style="--c: ${d.c}">
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
              <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.72)_0%,rgba(255,255,255,0.86)_75%)]"></div>
              <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_75%_30%,#000_0%,transparent_75%)]"></div>
              <div class="absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full blur-3xl" style="background: radial-gradient(circle, rgb(${d.c} / 0.16), transparent 62%)"></div>
            </div>
            <div class="mx-auto max-w-[1320px] px-6 lg:px-10">
              <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-[13px] text-slate-400">
                <a href="#top" class="transition-colors hover:text-ink">Home</a><span class="text-slate-300">/</span>
                <a href="#/platform" class="transition-colors hover:text-ink">Platform</a><span class="text-slate-300">/</span>
                <span class="font-medium text-ink">${d.t}</span>
              </nav>

              <div class="mt-10 grid items-center gap-16 lg:grid-cols-5 lg:gap-12">
                <div class="lg:col-span-3">
                  <span class="chip"><span class="h-1.5 w-1.5 rounded-full" style="background: rgb(${d.c})"></span>${GROUP_OF[key]}</span>
                  <h1 class="mt-7 font-display text-ink">
                    <span class="wdth-condensed block text-[clamp(2.5rem,6vw,4.9rem)] font-extrabold leading-[0.94] tracking-[-0.04em]">${d.t}</span>
                    <span class="mt-3 block text-[clamp(1.4rem,2.7vw,2.1rem)] font-extralight leading-[1.15] tracking-[-0.04em] text-slate-500">${d.sub}</span>
                  </h1>
                  <p class="mt-8 max-w-[34rem] text-[17px] leading-[1.7] text-slate-600">${d.d}</p>
                  <div class="mt-9 flex flex-wrap gap-3">
                    <a href="#/contact" class="cta-primary group inline-flex h-12 px-7 text-[15px]"><span class="cta-glow"></span><span class="relative">See ${d.t} on your data</span></a>
                    <a href="#modules" class="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-6 text-[15px] font-medium text-slate-600 shadow-[0_20px_50px_rgba(8,112,184,0.05)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg">All eleven modules</a>
                  </div>
                </div>
                <div class="lg:col-span-2">${sampleWindow(d)}</div>
              </div>
            </div>
          </section>

          <section class="border-y border-slate-200/60 bg-white/70 backdrop-blur-[2px]">
            <div class="mx-auto flex max-w-[1320px] flex-wrap items-center gap-3 px-6 py-8 lg:px-10">
              <span class="mr-2 text-[13px] font-semibold text-ink">In this module</span>
              ${d.cap.map((c) => `<span class="chip">${c}</span>`).join('')}
            </div>
          </section>

          <section class="relative isolate overflow-hidden bg-white/70 py-24 backdrop-blur-[2px] sm:py-28" style="--c: ${d.c}">
            <div class="mx-auto max-w-[1320px] px-6 lg:px-10">
              <div class="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
                <div class="lg:sticky lg:top-28 lg:self-start">
                  <div class="h-[2px] w-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
                  <h2 class="mt-6 font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">What you get</h2>
                  <p class="mt-4 text-[15.5px] leading-[1.7] text-slate-500">Configured to your policies and entities, running on the same employee record as every other module.</p>
                </div>
                <div class="grid gap-5 sm:grid-cols-2">
                  ${d.f.map((f, i) => `
                    <article class="bento-card min-h-0">
                      <div class="pat ${['pat-grid', 'pat-dots', 'pat-diagonal', 'pat-rings'][i % 4]}"></div>
                      <div class="glow-corner"></div>
                      <div class="icon-tile"><i data-lucide="${['layers', 'workflow', 'shield-check', 'refresh-cw'][i % 4]}"></i></div>
                      <p class="mt-8 text-[17px] font-semibold leading-[1.45] tracking-[-0.01em] text-ink">${f}</p>
                    </article>`).join('')}
                </div>
              </div>
            </div>
          </section>

          <section class="border-t border-slate-200/60 bg-white/70 py-20 backdrop-blur-[2px]">
            <div class="mx-auto grid max-w-[1320px] gap-10 px-6 sm:grid-cols-3 lg:px-10">
              <div>
                <h2 class="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">Who uses it</h2>
                <p class="mt-3 text-[15px] leading-[1.7] text-slate-600">${d.who}</p>
              </div>
              <div class="sm:border-l sm:border-slate-200/60 sm:pl-10">
                <h2 class="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">What it replaces</h2>
                <p class="mt-3 text-[15px] leading-[1.7] text-slate-600">${d.replaces}</p>
              </div>
              <div class="sm:border-l sm:border-slate-200/60 sm:pl-10">
                <h2 class="font-display text-[19px] font-bold tracking-[-0.02em] text-ink">How it connects</h2>
                <p class="mt-3 text-[15px] leading-[1.7] text-slate-600">
                  ${d.t} shares the employee record with ${d.connects.map((c) => `<a href="#/modules/${c}" class="font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 transition-colors hover:text-indigo-700">${MODULES[c].t}</a>`).join(', ')}, so data entered once is available to all of them.
                </p>
              </div>
            </div>
          </section>

          <section class="border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px]">
            <div class="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1fr_1.7fr] lg:gap-16 lg:px-10">
              <h2 class="font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">${d.t} questions</h2>
              <div class="border-t border-slate-200/60">${faqBlock(d.faq)}</div>
            </div>
          </section>

          <section class="border-t border-slate-200/60 bg-white/70 py-16 backdrop-blur-[2px]">
            <div class="mx-auto max-w-[1320px] px-6 lg:px-10">
              <div class="flex flex-wrap items-center justify-between gap-6">
                <p class="font-display text-[22px] font-semibold tracking-[-0.025em] text-ink">Continue through the platform</p>
                <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <a href="#/modules/${prev}" class="inline-flex h-11 max-w-full items-center gap-2 rounded-full border border-slate-200/60 bg-white px-5 text-[14px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg"><i data-lucide="arrow-left" class="h-4 w-4 shrink-0"></i><span class="truncate">${MODULES[prev].t}</span></a>
                  <a href="#/modules/${next}" class="inline-flex h-11 max-w-full items-center justify-end gap-2 rounded-full border border-slate-200/60 bg-white px-5 text-[14px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg"><span class="truncate">${MODULES[next].t}</span><i data-lucide="arrow-right" class="h-4 w-4 shrink-0"></i></a>
                </div>
              </div>
              <div class="mt-8 flex flex-wrap gap-2">
                ${ORDER.map((k) => `<a href="#/modules/${k}" class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${k === key ? 'border-transparent bg-ink text-white' : 'border-slate-200/60 bg-white text-slate-600 hover:text-ink'}"><span class="h-1.5 w-1.5 shrink-0 rounded-full" style="background: ${k === key ? '#3E8EF0' : `rgb(${MODULES[k].c})`}"></span>${MODULES[k].t}</a>`).join('')}
              </div>
            </div>
          </section>`;
        refreshIcons();
      }
      window.activeModule = activeModule;

      const openModule = (key) => {
        homeView.classList.add('hidden');
        moduleView.classList.remove('hidden');
        activeModule(key);
      };
      const showHome = (hash) => {
        moduleView.classList.add('hidden');
        homeView.classList.remove('hidden');
        const target = hash && hash.length > 1 && document.querySelector(hash);
        if (target && target.scrollIntoView) target.scrollIntoView({ behavior: 'auto', block: 'start' });
        else window.scrollTo({ top: 0 });
      };

      document.querySelectorAll('#modules article[data-route]').forEach((card) => {
        card.classList.add('cursor-pointer');
        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Read about ${MODULES[card.id].t}`);
        const go = () => navigate(card.getAttribute('data-route'));
        card.addEventListener('click', go);
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      });
      /* =========================================================
         CONTENT PAGES
      ========================================================== */
      const FAQS = [
        ['What does implementation involve, and what do we have to do?', 'We map your entities, pay structures, leave policies and approval chains, configure them, migrate your master data and balances, and train your team before the first live run. Your side supplies master data, policy documents and one decision-maker per area. Timelines are scoped per client, because they depend on the size of your workforce and how ready your data is.'],
        ['How do you make sure the migrated data is right?', 'Employee master, salary structures, leave balances, loan and advance records and year-to-date figures are migrated and then validated against your existing system before anything goes live, so differences are found and explained rather than discovered in a pay run.'],
        ['Which statutory deductions and returns do you handle?', 'Provident fund, ESI, professional tax and TDS are calculated in the pay run, with challans, returns and statutory registers produced from the same data. Professional tax is handled for every state, Form 16 is generated in-house, and gratuity and bonus are calculated on the same record. Exactly which filings we submit on your behalf is set in your contract.'],
        ['Where is our data hosted, and who can see salary information?', 'Procor HRMS runs on AWS infrastructure hosted in India, with daily backups. Access is controlled by role. Salary and identity fields are hidden unless a role has an explicit grant, and every change is written to an audit trail with user, timestamp and previous value.'],
        ['What happens if a pay run is wrong?', 'Pay runs lock only after maker-checker approval. Before lock, inputs are corrected and the run recalculated. After lock, corrections are processed as adjustments in the next cycle, with the full history retained.'],
        ['Can we keep our existing attendance devices?', 'In most cases yes. Biometric devices that export punch data on a schedule or expose an API can be connected, so you do not need to replace hardware to change platforms.'],
        ['How do you handle group companies with different policies?', 'Each legal entity carries its own statutory settings, leave policies, pay structures and approval chains while sharing one employee database, so transfers between entities do not create duplicate records.'],
        ['What does support look like after go-live?', 'You keep a named contact from the delivery team. Employees raise queries through the in-product helpdesk, and your HR team escalates through the same channel with tracked resolution times.']
      ];

      const PAGES = {
        platform: { t: 'Platform', k: 'Eleven modules, one employee record, one contract.',
          d: 'Procor HRMS covers the employee lifecycle from requisition to full-and-final settlement. Every module is configurable to your policies, entities and statutory obligations, and all of them read and write the same record.',
          s: [['11', 'Modules on one platform', 'Deploy all of them or start with a few'], ['50+', 'Client companies', '10,000+ users live today'], ['1', 'Employee record', 'No re-entry between modules']],
          b: [['layers', 'One data model', 'Leave updates attendance, attendance feeds payroll, and an exit closes out assets and settlement without anyone re-keying data.'],
              ['sliders-horizontal', 'Configured, not customised', 'Policies, approval chains, pay structures and letter templates are set up per entity without code changes, so upgrades never break your setup.'],
              ['building-2', 'Multi-entity by default', 'Group companies, locations and cost centres run in one instance with separate statutory settings and approval chains.'],
              ['cloud', 'Cloud delivery', 'Hosted, updated and monitored by us, reachable in any browser on desktop and mobile, with a mobile app for employees who prefer one.'],
              ['plug', 'Fits your stack', 'Exports and integrations for finance systems, biometric devices and bank payment files.'],
              ['smartphone', 'Self-service, including mobile', 'Employees raise leave, claims and tickets themselves from the browser or the mobile app, so HR handles exceptions instead of data entry.']],
          pills: true },

        compliance: { t: 'Compliance', k: 'Statutory work handled inside payroll, not bolted on after it.',
          d: 'Procor has delivered payroll and labour-law compliance as a service for years. Procor HRMS is the platform our own compliance team works in, which is why statutory deductions, challans and registers come out of the same run that produces the payslip.',
          s: [['4', 'Statutory heads in every run', 'PF, ESI, professional tax and TDS'], ['State-wise', 'Professional tax', 'Slabs applied per location'], ['Multi-entity', 'Filings', 'Separate settings per company']],
          b: [['shield-check', 'Provident fund', 'Contributions calculated on the configured wage definition, with ECR-ready output and a clear record of eligibility changes month to month.'],
              ['activity', 'ESI', 'Eligibility tracked against the wage threshold, including employees who move in and out of coverage mid-year.'],
              ['map-pin', 'Professional tax', 'State-wise slabs applied by work location, so a multi-state workforce does not need separate payroll runs.'],
              ['receipt', 'Income tax and TDS', 'Declarations, proof submission and monthly TDS computation, with Form 16 generated from the same data at year end.'],
              ['file-text', 'Registers and returns', 'Statutory registers and periodic returns produced from payroll output rather than rebuilt in spreadsheets.'],
              ['history', 'Audit trail', 'Every rate change, override and correction is recorded with user and timestamp, which is what an inspection actually asks for.']],
          faq: [FAQS[2], FAQS[6], FAQS[4]] },

        implementation: { t: 'Implementation', k: 'What switching to Procor HRMS actually involves.',
          d: 'Most HRMS decisions stall on migration risk, not on features. This is the sequence we run, what we need from your team, and how we make sure your data lands correctly. Timelines are scoped per client, because they depend on headcount, number of entities and how ready your existing data is.',
          s: [['Named team', 'From kickoff to go-live', 'And a named contact afterwards'], ['Validated', 'Data migration', 'Checked against your existing system'], ['Since 2018', 'Doing this for a living', 'Payroll specialists, not generalists']],
          steps: [['Kickoff and scoping', 'Discovery', 'We map your entities, locations, pay structures, leave policies and approval chains, and agree who owns each decision. You get a written configuration plan before any data moves.'],
                  ['Configuration', 'Setup', 'Policies, shifts, pay components, statutory settings and letter templates are set up per entity. Your team reviews the configuration against real cases rather than a demo dataset.'],
                  ['Data migration', 'Migration', 'Employee master, salary structures, leave balances, loan and advance records and year-to-date payroll figures are migrated and validated against your existing system.'],
                  ['Verification', 'Sign-off', 'Calculations are checked against your current outputs and any differences are explained before your team signs off. Nothing goes live on an assumption.'],
                  ['Training and self-service rollout', 'Enablement', 'HR, finance and managers are trained on their own configuration. Employees are introduced to self-service with a short guide.'],
                  ['Go-live and handover', 'Go-live', 'First live run under maker-checker approval with the delivery team present. You keep a named contact afterwards rather than being handed to a queue.']],
          b: [['database', 'What we need from you', 'Employee master data, current salary structures, leave balances, policy documents and year-to-date payroll figures, plus one decision-maker per area.'],
              ['shield-check', 'How we de-risk it', 'Migrated data is validated against your existing system and calculations are verified before sign-off, so problems surface during implementation rather than in a live pay run.'],
              ['users-round', 'Who runs it', 'A delivery team that has processed payroll since 2018, not an implementation partner learning your statutory rules on your time.']],
          faq: [FAQS[0], FAQS[1], FAQS[5]] },

        industries: { t: 'Industries', k: 'Configured around how your workforce actually operates.',
          d: 'The statutory rules are national, but shift patterns, wage structures and attendance realities are not. These are the operating models Procor HRMS is configured for most often.',
          b: [['utensils', 'Restaurants and QSR', 'Multi-outlet rosters, service charge distribution configurable unit-wise or as a pooled group, high attrition and continuous onboarding.'],
              ['factory', 'Manufacturing', 'Shift rosters and overtime rules, contractor and staff populations, statutory registers and inspection-ready records across plants.'],
              ['shopping-bag', 'Retail', 'Store-level attendance, part-time and seasonal staffing, incentive and commission structures that vary by location.'],
              ['briefcase', 'Professional services', 'Salaried teams across multiple states, reimbursement-heavy expense policies and appraisal cycles tied to increments.'],
              ['users-round', 'Staffing and outsourcing', 'Multiple client sites, separate legal entities, and payroll cycles that must reconcile against client invoices.'],
              ['building-2', 'Multi-entity groups', 'Shared services teams running several companies with different policies, statutory registrations and approval chains from one instance.']],
          pills: true },

        integrations: { t: 'Integrations', k: 'It has to fit the systems you already run.',
          d: 'Procor HRMS exchanges data with the finance, banking and attendance systems already in place, so moving HR and payroll does not force a change everywhere else.',
          b: [['calculator', 'Accounting and ERP', 'Payroll journals and cost-centre-wise summaries exported in the format your finance system expects, so the month-end entry is a load rather than a re-key.'],
              ['fingerprint', 'Biometric and access devices', 'Punch data pulled from devices that support scheduled export or an API, across multiple locations.'],
              ['banknote', 'Bank payment files', 'Salary and settlement payment files generated in bank-specific formats for upload to your corporate banking portal.'],
              ['file-text', 'Statutory outputs', 'Challan and return files prepared in the formats required for statutory filing.'],
              ['download', 'Reporting exports', 'Every register and report is exportable, so your analysts are never locked out of their own data.'],
              ['plug', 'Custom connections', 'Where a system needs a direct connection, our team scopes it during implementation rather than after go-live.']] },

        security: { t: 'Security', k: 'Payroll data, handled the way payroll data should be.',
          d: 'Procor HRMS holds salary, identity and statutory records. Access is restricted by design and every change is traceable. The facts below are what IT and risk reviewers usually ask for first.',
          s: [['Role-based', 'Access control', 'Down to individual fields'], ['Encrypted', 'In transit and at rest', 'Across the platform'], ['Full audit trail', 'On every record change', 'User, timestamp, previous value']],
          b: [['lock', 'Least-privilege access', 'Roles decide which modules, entities and fields a user can open. Salary and identity fields stay hidden from anyone without an explicit grant.'],
              ['history', 'Traceable changes', 'Record edits, approvals and payroll actions are logged with user, timestamp and the value that was replaced.'],
              ['shield-check', 'Approval gates', 'Pay runs, master data changes and settlements move through maker-checker approval before they take effect.'],
              ['server', 'Managed hosting', 'Backups, patching and monitoring are part of the service, with documented recovery procedures.'],
              ['file-text', 'Statutory retention', 'Payroll registers, challans and exit records are retained in line with Indian statutory requirements.'],
              ['user-x', 'Clean offboarding', 'Access revocation is a dated, owned step inside the exit workflow rather than a manual afterthought.']],
          note: 'We are happy to complete your security questionnaire and walk your IT team through hosting, backup and access controls before you commit to anything.',
          faq: [FAQS[3], FAQS[7]] },

        company: { t: 'Company', k: 'Payroll, HR and compliance, run by people who do it daily.',
          d: 'Procor has delivered payroll, HRMS and statutory compliance to companies operating in India since 2018, and more than 50 companies now run on Procor HRMS. It is the platform our own delivery teams work in, which is why it is built around how payroll and compliance actually run rather than how they demo.',
          s: [['50+', 'Client companies', 'Live on Procor HRMS'], ['Since 2018', 'Running payroll', 'For companies operating in India'], ['New Delhi', 'Where we are based', 'Serving clients across every state']],
          b: [['briefcase', 'What we do', 'Managed payroll, HRMS implementation and labour-law compliance, delivered as a service or as software your team runs. Procor HRMS is offered by Procor Digital Solutions Pvt Ltd, part of the Procor group.'],
              ['handshake', 'How we work', 'A named delivery team, documented processes and a single point of accountability for every client.'],
              ['map-pin', 'Where we operate', 'Our office is in New Delhi, supporting multi-state and multi-entity clients across India.'],
              ['git-merge', 'Partners', 'We work with consultancies and staffing firms as a subcontracted delivery partner for payroll and compliance.'],
              ['users-round', 'Careers', 'We hire payroll specialists, compliance analysts and product engineers. Send your CV to the contact address on our contact page.'],
              ['mail', 'Talk to us', 'Tell us your headcount, entities and current setup, and we will come back with a scoped proposal.']] },

        faq: { t: 'FAQ', k: 'The questions that decide whether this is a fit.',
          d: 'Straight answers on implementation, compliance, data and support. If something you need is not covered here, ask us directly.',
          faq: FAQS, faqSchema: true },

        contact: { t: 'Contact', k: 'Talk to someone who runs payroll for a living.',
          d: 'Tell us your headcount, how many entities you operate and what you use today. We come back within one business day with a scoped walkthrough, not a generic product tour.',
          contact: true, ctaLabel: 'Jump to the form' },

        privacy: { t: 'Privacy Policy', k: 'How we handle personal data on this website and in the platform.',
          d: 'This policy explains what we collect, why, and what you can ask us to do about it. It covers this website and the Procor HRMS platform.',
          prose: [
            ['Who we are', 'Procor operates this website and the Procor HRMS platform. For data submitted through this website we act as the data controller. For employee data processed inside Procor HRMS on behalf of a client, the client is the controller and we act as a processor under the terms of our services agreement.'],
            ['What we collect on this website', 'When you submit a demo or contact form we collect the work email address, company name, headcount range and any other details you provide. Our hosting provider records standard server logs, including IP address and browser type. Where analytics is enabled, we collect aggregate usage data about pages viewed.'],
            ['Why we collect it', 'To respond to your enquiry, to prepare a relevant walkthrough, and to maintain and secure the website. We do not sell personal data, and we do not use website enquiry data for unrelated marketing without consent.'],
            ['Employee data in the platform', 'Where we process employee data for a client, we do so only on that client\u2019s documented instructions and for the purposes set out in the services agreement: payroll processing, statutory filings and HR administration. Access is restricted by role and every change is logged.'],
            ['Retention', 'Website enquiry data is retained for as long as needed to pursue the enquiry and for a reasonable period afterwards. Payroll and statutory records processed in the platform are retained in line with Indian statutory requirements and the client agreement.'],
            ['Your rights', 'Under the Digital Personal Data Protection Act, 2023, you may ask us to confirm what personal data we hold about you, to correct it, or to erase it where retention is not required by law. Employees of our clients should contact their employer, who is the controller of that data; we support the client in responding.'],
            ['Security', 'We apply role-based access control, encryption in transit and at rest, audit logging and approval gates on sensitive actions. Our practices are described in more detail on the Security page.'],
            ['Contact', 'Privacy questions and data requests can be sent to the address on our Contact page, marked for the attention of the data protection contact.']
          ],
          updated: true },

        terms: { t: 'Terms of Service', k: 'The terms that apply to this website.',
          d: 'These terms govern your use of this website. Use of the Procor HRMS platform itself is governed by the signed services agreement between Procor and the client, which takes precedence over anything on this page.',
          prose: [
            ['Use of this website', 'You may use this website to learn about our services and to contact us. You may not attempt to gain unauthorised access to any part of the site or its underlying systems, or use automated tools to extract content at scale.'],
            ['Information on this website', 'Descriptions of platform capabilities are provided for general information. Screens and sample views shown on this site are illustrative and use representative data, not live client data. Functionality, statutory coverage and service levels for your organisation are set out in a written proposal and agreement.'],
            ['Enquiries and quotations', 'Submitting a form does not create a contract. Pricing, scope and service commitments are provided in a written proposal and become binding only when both parties sign an agreement.'],
            ['Intellectual property', 'The Procor name, logo, platform, website content and design are the property of Procor and may not be reproduced without written permission.'],
            ['Limitation of liability', 'This website is provided on an as-is basis. To the extent permitted by law, Procor is not liable for indirect or consequential loss arising from use of this website. Liability in relation to services is governed by the signed services agreement.'],
            ['Governing law', 'These terms are governed by the laws of India, and the courts of Delhi have exclusive jurisdiction over any dispute relating to this website.'],
            ['Changes', 'We may update these terms. The version published on this page at the time of your visit is the version that applies.']
          ],
          updated: true },

        cookies: { t: 'Cookie Policy', k: 'What this website stores in your browser.',
          d: 'This website is deliberately light on tracking. This page lists what is stored and why.',
          prose: [
            ['Strictly necessary storage', 'This site stores your light or dark theme preference in your browser so the site does not reset on every visit. It contains no personal data and is never sent to a server.'],
            ['Analytics', 'Where website analytics is enabled, it records aggregate usage such as pages viewed and approximate region, to help us understand which content is useful. It is not used to identify individuals.'],
            ['Third parties', 'Web fonts are loaded from Google Fonts, which receives the request as part of serving the font files. No advertising or social media tracking scripts run on this site.'],
            ['Managing storage', 'You can clear or block browser storage through your browser settings. Blocking it will not prevent the site from working; your theme preference simply will not persist between visits.']
          ],
          updated: true },

        '404': { t: 'Page not found', k: 'That link does not lead anywhere.',
          d: 'The page you were looking for may have moved. The platform overview and the module list below cover most of what people arrive here looking for.',
          pills: true, b: [['layers', 'Platform overview', 'How eleven modules share one employee record, and what that removes from your month end.'], ['shield-check', 'Compliance', 'PF, ESI, professional tax and TDS handled inside the pay run.'], ['mail', 'Talk to our team', 'Tell us what you were looking for and we will point you to it.']], ctaLabel: 'Talk to our team' }
      };
      /* ---------------- CONTENT PAGE RENDERER ---------------- */
      function activePage(name) {
        const key = PAGES[name] ? name : '404';
        const g = PAGES[key];

        const stats = !g.s ? '' : `
          <section class="border-y border-slate-200/60 bg-white/70 backdrop-blur-[2px]">
            <div class="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 sm:grid-cols-3 lg:px-10">
              ${g.s.map(([value, label, note], i) => `
                <div class="${i ? 'sm:border-l sm:border-slate-200/60 sm:pl-10' : ''}">
                  <p class="font-display text-[clamp(1.8rem,2.9vw,2.4rem)] font-semibold leading-none tracking-[-0.035em] text-ink">${value}</p>
                  <p class="mt-3 text-[15px] font-medium text-ink">${label}</p>
                  <p class="mt-1 text-[13.5px] text-slate-500">${note}</p>
                </div>`).join('')}
            </div>
          </section>`;

        const blocks = !g.b ? '' : `
          <section class="relative isolate overflow-hidden bg-white/70 py-24 backdrop-blur-[2px] sm:py-28">
            <div class="mx-auto max-w-[1320px] px-6 lg:px-10">
              <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                ${g.b.map(([icon, title, text], i) => `
                  <article class="bento-card min-h-0" style="--c: ${['0 99 215', '62 142 240', '124 58 237', '16 185 129', '1 43 97', '234 88 12'][i % 6]}">
                    <div class="pat ${['pat-grid', 'pat-dots', 'pat-diagonal', 'pat-rings'][i % 4]}"></div>
                    <div class="glow-corner"></div>
                    <div class="icon-tile"><i data-lucide="${icon}"></i></div>
                    <h2 class="bento-title mt-8 text-[22px]">${title}</h2>
                    <p class="bento-copy">${text}</p>
                  </article>`).join('')}
              </div>
              ${g.note ? `<p class="mt-10 max-w-3xl rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-[15px] leading-[1.7] text-slate-600 backdrop-blur">${g.note}</p>` : ''}
              ${g.pills ? `
                <div class="mt-16 rounded-[28px] border border-slate-200/60 bg-white/85 p-8 shadow-[0_20px_50px_rgba(8,112,184,0.05)] backdrop-blur sm:p-10">
                  <p class="font-display text-[24px] font-bold tracking-[-0.03em] text-ink">Browse the modules</p>
                  <p class="mt-2 max-w-xl text-[15px] leading-relaxed text-slate-500">Each module has its own page covering what it does, who uses it and what it replaces.</p>
                  <div class="mt-7 flex flex-wrap gap-2">
                    ${ORDER.map((m) => `<a href="#/modules/${m}" class="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-4 py-2 text-[13.5px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-lg"><span class="h-1.5 w-1.5 rounded-full" style="background: rgb(${MODULES[m].c})"></span>${MODULES[m].t}</a>`).join('')}
                  </div>
                </div>` : ''}
            </div>
          </section>`;

        const steps = !g.steps ? '' : `
          <section class="border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px]">
            <div class="mx-auto max-w-[1320px] px-6 lg:px-10">
              <h2 class="font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">The sequence</h2>
              <ol class="mt-12 border-t border-slate-200/60">
                ${g.steps.map(([title, when, text], i) => `
                  <li class="grid gap-4 border-b border-slate-200/60 py-8 lg:grid-cols-[90px_260px_minmax(0,1fr)] lg:gap-10">
                    <span class="font-display text-[15px] font-bold text-indigo-600">${String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 class="text-[18px] font-semibold tracking-[-0.01em] text-ink">${title}</h3>
                      <p class="mt-1 text-[13px] text-slate-400">${when}</p>
                    </div>
                    <p class="max-w-2xl text-[15.5px] leading-[1.75] text-slate-600">${text}</p>
                  </li>`).join('')}
              </ol>
            </div>
          </section>`;

        const prose = !g.prose ? '' : `
          <section class="border-t border-slate-200/60 bg-white/70 py-20 backdrop-blur-[2px]">
            <div class="mx-auto max-w-[1320px] px-6 lg:px-10">
              <div class="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
                <nav class="lg:sticky lg:top-28 lg:self-start" aria-label="On this page">
                  <p class="text-[13px] font-semibold text-ink">On this page</p>
                  <ul class="mt-4 space-y-2.5">
                    ${g.prose.map(([h]) => `<li><a href="#s-${h.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" class="text-[13.5px] text-slate-500 transition-colors hover:text-ink">${h}</a></li>`).join('')}
                  </ul>
                  ${g.updated ? `<p class="mt-8 text-[12.5px] text-slate-400">Last updated ${new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>` : ''}
                </nav>
                <div class="max-w-3xl space-y-10">
                  ${g.prose.map(([h, p]) => `
                    <div id="s-${h.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" class="scroll-mt-28">
                      <h2 class="font-display text-[22px] font-bold tracking-[-0.025em] text-ink">${h}</h2>
                      <p class="mt-4 text-[15.5px] leading-[1.8] text-slate-600">${p}</p>
                    </div>`).join('')}
                </div>
              </div>
            </div>
          </section>`;

        const faq = !g.faq ? '' : `
          <section class="border-t border-slate-200/60 bg-white/70 py-24 backdrop-blur-[2px]">
            <div class="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1fr_1.7fr] lg:gap-16 lg:px-10">
              <div class="lg:sticky lg:top-28 lg:self-start">
                <h2 class="font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">Questions</h2>
                <p class="mt-5 text-[15.5px] leading-[1.7] text-slate-500">Not covered here? Ask us and you will get a direct answer.</p>
                <a href="#/contact" class="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-indigo-600 transition-colors hover:text-indigo-700">Talk to our team<i data-lucide="arrow-right" class="h-4 w-4"></i></a>
              </div>
              <div class="border-t border-slate-200/60">${faqBlock(g.faq)}</div>
            </div>
          </section>`;

        const contact = !g.contact ? '' : `
          <section id="contact-form-section" class="border-t border-slate-200/60 bg-white/70 py-20 backdrop-blur-[2px]">
            <div class="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
              <div>
                <h2 class="font-display text-[26px] font-bold tracking-[-0.03em] text-ink">Request a walkthrough</h2>
                <p class="mt-3 max-w-lg text-[15.5px] leading-[1.7] text-slate-500">The more you tell us, the more specific the session. Nothing here is shared outside our team.</p>
                <form id="contact-form" class="relative mt-8 grid gap-3 sm:grid-cols-2" novalidate>${honeypot('contact')}
                  <div><label for="c-name" class="sr-only">Full name</label><input id="c-name" name="name" type="text" autocomplete="name" required placeholder="Full name" class="field" /></div>
                  <div><label for="c-email" class="sr-only">Work email</label><input id="c-email" name="email" type="email" autocomplete="email" required placeholder="Work email" class="field" /></div>
                  <div><label for="c-company" class="sr-only">Company</label><input id="c-company" name="company" type="text" autocomplete="organization" required placeholder="Company" class="field" /></div>
                  <div><label for="c-phone" class="sr-only">Phone</label><input id="c-phone" name="phone" type="tel" autocomplete="tel" placeholder="Phone (optional)" class="field" /></div>
                  <div><label for="c-headcount" class="sr-only">Headcount</label>
                    <select id="c-headcount" name="headcount" required class="field">
                      <option value="">Headcount</option><option>Under 100</option><option>100 to 500</option><option>500 to 2,000</option><option>Over 2,000</option>
                    </select></div>
                  <div><label for="c-entities" class="sr-only">Legal entities</label>
                    <select id="c-entities" name="entities" class="field">
                      <option value="">Legal entities</option><option>One</option><option>2 to 5</option><option>More than 5</option>
                    </select></div>
                  <div class="sm:col-span-2"><label for="c-current" class="sr-only">What you use today</label><input id="c-current" name="current" type="text" placeholder="What you use today (optional)" class="field" /></div>
                  <div class="sm:col-span-2"><label for="c-message" class="sr-only">Message</label><textarea id="c-message" name="message" rows="4" placeholder="What would you like to see?" class="field h-auto py-3.5"></textarea></div>
                  <div class="sm:col-span-2">
                    <button type="submit" class="cta-primary group inline-flex h-[52px] w-full items-center justify-center px-6 text-[15px] sm:w-auto sm:px-10"><span class="cta-glow"></span><span class="relative">Send request</span></button>
                    <p id="contact-msg" class="mt-3 min-h-[20px] text-[13px] text-slate-500" aria-live="polite">We reply within one business day.</p>
                  </div>
                </form>
              </div>
              <div class="lg:pl-10">
                <div class="rounded-[28px] border border-slate-200/60 bg-white/85 p-8 shadow-[0_20px_50px_rgba(8,112,184,0.05)] backdrop-blur">
                  <h2 class="font-display text-[20px] font-bold tracking-[-0.025em] text-ink">Reach us directly</h2>
                  <div id="contact-details" class="mt-6 space-y-5 text-[14.5px] text-slate-600"></div>
                </div>
                <div class="mt-5 rounded-[28px] border border-slate-200/60 bg-white/85 p-8 backdrop-blur">
                  <h2 class="font-display text-[20px] font-bold tracking-[-0.025em] text-ink">What happens next</h2>
                  <ol class="mt-5 space-y-4 text-[14.5px] leading-[1.6] text-slate-600">
                    <li class="flex gap-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-[12px] font-semibold text-indigo-600">1</span>We reply within one business day to understand your setup.</li>
                    <li class="flex gap-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-[12px] font-semibold text-indigo-600">2</span>A 30-minute walkthrough on your entities, policies and pay cycle.</li>
                    <li class="flex gap-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-[12px] font-semibold text-indigo-600">3</span>A written proposal with scope, timeline and commercials.</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>`;

        /* the footer already carries the closing call to action, so pages
           must not repeat it directly above the footer */
        canvas.innerHTML = pageHeadSection(g.t, g.k, g.d, g.ctaLabel, g.contact ? '#contact-form-section' : '#/contact')
          + stats + blocks + steps + prose + faq + contact;

        if (g.contact) { renderContactDetails(); wireForm('contact-form', 'contact-msg'); }
        injectFaqSchema(g.faq || null);
        refreshIcons();
      }
      window.activePage = activePage;

      const openPage = (key) => {
        homeView.classList.add('hidden');
        moduleView.classList.remove('hidden');
        activePage(key);
      };

      /* =========================================================
         PER-ROUTE SEO
      ========================================================== */
      const META = {
        home: ['Procor HRMS | HR & Payroll Software for Enterprises in India', 'Eleven modules from core HR to payroll on one cloud platform, with PF, ESI, PT and TDS handled inside the pay run. Built for multi-entity, multi-state teams in India.', '/'],
        platform: ['The Procor HRMS Platform | One Employee Record, Eleven Modules', 'See how core HR, attendance, payroll and exits share one record, so data is entered once and trusted everywhere.', '/platform/'],
        compliance: ['Statutory & Labour Law Compliance Software | Procor HRMS', 'PF, ESI, professional tax, TDS, challans, registers and Form 16 produced inside the same payroll run, across states and entities.', '/compliance/'],
        implementation: ['HRMS Implementation & Payroll Migration | Procor HRMS', 'Configuration, data migration validated against your existing system, training and go-live, run by a named delivery team and scoped to your headcount and entities.', '/implementation/'],
        industries: ['HR & Payroll Software by Industry | Procor HRMS', 'Configured for restaurants and QSR, manufacturing, retail, professional services, staffing and multi-entity groups in India.', '/industries/'],
        integrations: ['Integrations | Procor HRMS', 'Accounting and ERP exports, biometric devices, bank payment files and statutory outputs that fit the systems you already run.', '/integrations/'],
        security: ['Security at Procor HRMS | How We Protect Payroll Data', 'Role-based access, encryption, audit trails and approval gates on every payroll action, with managed hosting and documented recovery.', '/security/'],
        company: ['About Procor | Payroll, HRMS & Compliance in India', 'Procor delivers payroll, HRMS and statutory compliance to companies operating across India, from Delhi NCR.', '/company/'],
        faq: ['Procor HRMS FAQ | Implementation, Compliance, Data and Support', 'Straight answers on implementation, statutory coverage across states, where your data is hosted, corrections to a pay run and post go-live support.', '/faq/'],
        contact: ['Contact Procor HRMS | Book a Demo', 'Tell us your headcount, entities and current setup. We reply within one business day with a scoped walkthrough.', '/contact/'],
        privacy: ['Privacy Policy | Procor HRMS', 'What we collect on this website, how employee data is processed in the platform, retention, and your rights under the DPDP Act.', '/privacy/'],
        terms: ['Terms of Service | Procor HRMS', 'The terms that apply to this website. Platform use is governed by the signed services agreement.', '/terms/'],
        cookies: ['Cookie Policy | Procor HRMS', 'What this website stores in your browser, why, and how to manage it.', '/cookies/'],
        '404': ['Page not found | Procor HRMS', 'That link does not lead anywhere. Browse the platform overview or the eleven modules.', '/404/']
      };

      function setMeta(title, desc, path) {
        document.title = title;
        const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
        const url = CONFIG.siteUrl + path;
        set('meta[name="description"]', 'content', desc);
        set('meta[property="og:title"]', 'content', title);
        set('meta[property="og:description"]', 'content', desc);
        set('meta[name="twitter:title"]', 'content', title);
        set('meta[name="twitter:description"]', 'content', desc);
        set('#og-url', 'content', url);
        set('#canonical-link', 'href', url);
        /* the 404 route should never be indexed */
        set('meta[name="robots"]', 'content', path === '/404/' ? 'noindex, follow' : 'index, follow');
      }

      /* Breadcrumbs help Google show the site hierarchy in results */
      function injectBreadcrumb(trail) {
        const old = document.getElementById('breadcrumb-schema');
        if (old) old.remove();
        if (!trail) return;
        const el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = 'breadcrumb-schema';
        el.textContent = JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: trail.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: CONFIG.siteUrl + path }))
        });
        document.head.appendChild(el);
      }

      function injectFaqSchema(items) {
        const old = document.getElementById('faq-schema');
        if (old) old.remove();
        if (!items) return;
        const el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = 'faq-schema';
        el.textContent = JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
        });
        document.head.appendChild(el);
      }

      /* =========================================================
         ROUTING
      ========================================================== */
      let currentRoute = null;

      function render(route) {
        route = route || '';
        if (route === currentRoute) return;
        currentRoute = route;
        setMega(false); setMobile(false);

        if (route.startsWith('#/modules/')) {
          const key = route.slice('#/modules/'.length);
          if (MODULES[key]) {
            openModule(key);
            setMeta(`${MODULES[key].t} Software for Indian Enterprises | Procor HRMS`, MODULES[key].d, `/modules/${key}/`);
            injectFaqSchema(MODULES[key].faq);
            injectBreadcrumb([['Home', '/'], ['Platform', '/platform/'], [MODULES[key].t, `/modules/${key}/`]]);
            window.scrollTo({ top: 0 });
            return;
          }
        } else if (route.startsWith('#/')) {
          const key = route.slice(2);
          const pk = PAGES[key] ? key : '404';
          openPage(pk);
          setMeta(...(META[pk] || META['404']));
          injectBreadcrumb([['Home', '/'], [PAGES[pk].t, META[pk] ? META[pk][2] : '/404/']]);
          window.scrollTo({ top: 0 });
          return;
        }
        showHome(route === '#top' ? null : route);
        setMeta(...META.home);
        injectFaqSchema(FAQS);
        injectBreadcrumb(null);
      }

      const readHash = () => { try { return location.hash || ''; } catch (err) { return ''; } };
      function navigate(route) {
        render(route);
        try { if (location.hash !== route) location.hash = route; } catch (err) { /* URL is read-only in this context */ }
      }
      window.navigate = navigate;
      window.addEventListener('hashchange', () => render(readHash()));
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const href = link.getAttribute('href');
        if (href === '#') { e.preventDefault(); return; }
        if (href.startsWith('#s-') || href === '#contact-form-section') return;  // in-page anchors
        e.preventDefault();
        navigate(href);
      });

      /* =========================================================
         COMPANY DETAILS, HOME FAQ, FORMS
      ========================================================== */
      const honeypot = (id) => `<div class="absolute -left-[9999px] top-0" aria-hidden="true"><label for="${id}-website">Leave this empty</label><input id="${id}-website" name="website" type="text" tabindex="-1" autocomplete="off" /></div>`;

      const line = (icon, text, href) => `<p class="flex items-start gap-2.5"><i data-lucide="${icon}" class="mt-0.5 h-4 w-4 shrink-0 text-slate-400"></i>${href ? `<a href="${href}" class="transition-colors hover:text-ink">${text}</a>` : `<span>${text}</span>`}</p>`;

      function renderCompanyBits() {
        const f = document.getElementById('company-details');
        if (f) f.innerHTML = [
          CONFIG.address && line('map-pin', CONFIG.address),
          CONFIG.phone && line('phone', CONFIG.phone, 'tel:' + CONFIG.phone.replace(/\s/g, '')),
          CONFIG.salesEmail && line('mail', CONFIG.salesEmail, 'mailto:' + CONFIG.salesEmail)
        ].filter(Boolean).join('');

        const legal = document.getElementById('footer-legal');
        if (legal) {
          legal.innerHTML = `&copy; ${new Date().getFullYear()} ${CONFIG.legalEntity}. All rights reserved.`;
        }
        ['portal-link', 'portal-link-mobile'].forEach((id) => {
          const portal = document.getElementById(id);
          if (!portal) return;
          if (CONFIG.portalUrl) { portal.setAttribute('href', CONFIG.portalUrl); portal.setAttribute('rel', 'noopener'); }
          else portal.remove();
        });
      }

      function renderContactDetails() {
        const el = document.getElementById('contact-details');
        if (!el) return;
        el.innerHTML = [
          `<div><p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Office</p><p class="mt-1.5">${CONFIG.address}</p></div>`,
          CONFIG.phone ? `<div><p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Phone</p><p class="mt-1.5"><a href="tel:${CONFIG.phone.replace(/\s/g, '')}" class="transition-colors hover:text-ink">${CONFIG.phone}</a></p></div>` : '',
          CONFIG.salesEmail ? `<div><p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Sales</p><p class="mt-1.5"><a href="mailto:${CONFIG.salesEmail}" class="transition-colors hover:text-ink">${CONFIG.salesEmail}</a></p></div>` : '',
          CONFIG.supportEmail ? `<div><p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Existing clients</p><p class="mt-1.5"><a href="mailto:${CONFIG.supportEmail}" class="transition-colors hover:text-ink">${CONFIG.supportEmail}</a></p></div>` : '',
          `<div><p class="text-[12.5px] font-semibold uppercase tracking-wide text-slate-400">Response time</p><p class="mt-1.5">One business day</p></div>`
        ].filter(Boolean).join('');
        refreshIcons();
      }

      /* Forms post to CONFIG.formEndpoint when set; otherwise they fall back to
         the visitor's mail client so an enquiry is never silently lost. */
      function wireForm(formId, msgId) {
        const form = document.getElementById(formId);
        const msg = document.getElementById(msgId);
        if (!form || !msg || form.dataset.wired) return;
        form.dataset.wired = '1';
        const msgDefault = msg.textContent;
        const openedAt = Date.now();
        const submitBtn = form.querySelector('[type=submit]');

        const say = (state, text) => {
          if (state) msg.dataset.state = state; else delete msg.dataset.state;
          msg.textContent = text;
        };

        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(form).entries());

          /* validate first, so a real person always gets real feedback */
          const email = (data.email || '').trim();
          const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
          const missing = [...form.querySelectorAll('[required]')].find((f) => !f.value.trim());
          if (!valid || missing) {
            say('error', !valid ? 'Enter a work email address, like name@company.com.' : 'Please complete the required fields.');
            const focusEl = !valid ? form.querySelector('[type=email]') : missing;
            if (focusEl && focusEl.focus) focusEl.focus();
            return;
          }

          /* anti-spam: the hidden field is invisible to people, so anything in
             it is a bot. Accept quietly rather than telling the bot it failed. */
          const elapsedMs = Date.now() - openedAt;
          if (data.website) {
            say('success', 'Thanks. We will be in touch within one business day.');
            form.reset();
            return;
          }
          delete data.website;

          const payload = { ...data, source: readHash() || '/', page: document.title, fillSeconds: Math.round(elapsedMs / 1000), submittedAt: new Date().toISOString() };
          say(null, 'Sending your request...');
          if (submitBtn) submitBtn.disabled = true;

          try {
            if (!CONFIG.formEndpoint) throw new Error('no-endpoint');
            const isAppsScript = CONFIG.formEndpoint.includes('script.google.com');
            /* text/plain avoids a CORS preflight, which Apps Script cannot answer */
            const req = {
              method: 'POST',
              headers: isAppsScript ? { 'Content-Type': 'text/plain;charset=utf-8' } : { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify(payload)
            };
            try {
              const res = await fetch(CONFIG.formEndpoint, req);
              if (!res.ok) throw new Error('bad-status');
            } catch (corsErr) {
              /* Apps Script redirects to a different host, and some setups return
                 no CORS headers, so the browser hides an otherwise fine response.
                 Resend in no-cors mode: it delivers, we just cannot read the reply. */
              if (!isAppsScript) throw corsErr;
              await fetch(CONFIG.formEndpoint, { ...req, mode: 'no-cors' });
            }
            say('success', `Thanks. We have your request and will write to ${email} within one business day.`);
            form.reset();
          } catch (err) {
            /* delivery failed or no endpoint is configured yet — hand the visitor
               a route that cannot fail rather than losing the enquiry */
            const body = Object.entries(payload).map(([k, v]) => `${k}: ${v}`).join('\n');
            const mailto = `mailto:${CONFIG.salesEmail}?subject=${encodeURIComponent('Demo request from ' + (data.company || 'the website'))}&body=${encodeURIComponent(body)}`;
            msg.dataset.state = 'error';
            msg.innerHTML = `We could not send that automatically. Please <a class="font-semibold underline underline-offset-4" href="${mailto}">email it to ${CONFIG.salesEmail}</a> or call ${CONFIG.phone} and we will pick it up.`;
          } finally {
            if (submitBtn) submitBtn.disabled = false;
          }
        });

        form.addEventListener('input', () => {
          if (msg.dataset.state === 'error') say(null, msgDefault);
        });
      }

      const homeFaq = document.getElementById('home-faq');
      if (homeFaq) homeFaq.innerHTML = faqBlock(FAQS);

      renderCompanyBits();
      wireForm('demo-form', 'demo-msg');

      /* In the static multi-page build each route is its own HTML file, so the
         router does not run on load and links are real paths. */
      if (window.__STATIC__) {
        currentRoute = window.__ROUTE__ || '';
        if (document.getElementById('contact-form')) { renderContactDetails(); wireForm('contact-form', 'contact-msg'); }
      } else {
        render(readHash());
      }

      /* =========================================================
         THEME
      ========================================================== */
      const root = document.documentElement;
      const themeBtn = document.getElementById('theme-toggle');
      const store = {
        get() { try { return localStorage.getItem('procor-theme'); } catch (err) { return null; } },
        set(v) { try { localStorage.setItem('procor-theme', v); } catch (err) { /* storage unavailable */ } }
      };

      function applyTheme(mode) {
        const dark = mode === 'dark';
        root.classList.toggle('dark', dark);
        themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
        const moon = themeBtn.querySelector('.icon-moon');
        const sun = themeBtn.querySelector('.icon-sun');
        if (moon) moon.classList.toggle('hidden', dark);
        if (sun) sun.classList.toggle('hidden', !dark);
        store.set(mode);
      }

      const saved = store.get();
      applyTheme(saved || (mq('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
      themeBtn.addEventListener('click', () => applyTheme(root.classList.contains('dark') ? 'light' : 'dark'));

      refreshIcons();
    });