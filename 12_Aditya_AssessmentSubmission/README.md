# Grand Luxe Hotel – Room Reservation UI

Simple front‑end hotel room reservation system built with **React + Vite** and plain **CSS**.  
It simulates a 10‑floor hotel with 97 rooms and lets you quickly test different booking scenarios in the browser.

---

## Live Demo

[`https://rainbow-cuchufli-0607cc.netlify.app/`](https://rainbow-cuchufli-0607cc.netlify.app/)


## Screenshot

<img width="2579" height="1436" alt="image" src="https://github.com/user-attachments/assets/f1d786ed-c8cb-40bd-a502-0b177709ba3e" />


---

## Features

- **Hotel layout**
  - 10 floors, 97 rooms total  
  - Floors **1–9**: rooms `x01–x10` (e.g. 101–110, 201–210, …)  
  - Floor **10**: rooms `1001–1007`  
  - Rooms rendered left → right, closest to the lift first

- **Booking rules**
  - Book **1–5 rooms** at a time
  - First tries to place all rooms on the **same floor**
  - If that’s not possible, chooses a set across floors that **minimizes travel time**
  - Travel time:
    - Horizontal: **1 minute** per adjacent room
    - Vertical: **2 minutes** per floor
    - Used metric = distance of farthest room from lift − nearest room from lift

- **UI behaviour**
  - Input for number of rooms
  - **Book Now** button
  - **Random Occupancy** button
  - **Reset All** button
  - Clear floor labels and room numbers
  - Legend + counters for Available / Occupied / Selected
  - Colour scheme:
    - Green → Available
    - Red → Occupied
    - Blue → Newly booked / Selected

- **Implementation notes**
  - No backend, no database
  - No UI libraries, only **React** and plain **CSS**
  - Booking logic is kept deliberately small and readable

---

## Tech Stack

- **React 18**
- **Vite**
- **Plain CSS** (no Tailwind, no component libraries)

---

## Getting Started

Clone the project and install dependencies:

```bash
git clone <your-repo-url>
cd Unstop
npm install
```

Start the dev server:

```bash
npm run dev
```

By default Vite runs on `http://localhost:5173`. Open it in the browser to see the hotel layout.

---

## Project Structure

```text
src/
 ├─ App.jsx              # Main layout and UI
 ├─ App.css              # All styling (layout, colours, responsiveness)
 ├─ data/
 │   └─ rooms.js         # Room definitions for all 97 rooms
 ├─ utils/
 │   └─ bookingLogic.js  # Booking + travel time logic
 └─ main.jsx             # React entry point
```

---

## Booking Logic – Short Overview

The core logic lives in `src/utils/bookingLogic.js`:

- Computes a simple “distance from lift” for each room based on:
  - Vertical steps: `(floor - 1) * 2`
  - Horizontal steps: `position` (index from the lift)
- **Same floor first**: tries to find `N` free rooms on a single floor and picks the group with the smallest travel time.
- If that fails, it sorts all available rooms by distance and slides a window of size `N` to find the combination with the smallest travel time.

The output is a list of rooms to book and a travel time value that is shown in the UI.

---

## Customisation Tips

- Tweak colours, shadows, and spacing in `App.css` to match your brand.
- Change the hotel name or logo in `App.jsx` (`Grand Luxe Hotel` header).
- If you want to support more floors or a different room numbering scheme, adjust `src/data/rooms.js`.

---


