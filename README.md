# CarRental

a Website to choose a car and rent it for your needs.
Based in Germany.

## Booking Data Structure

Bookings are stored in Firestore with the following structure:

```
{
  pickupDate: string, // ISO date
  dropoffDate: string, // ISO date
  pickupLocation: string,
  dropoffLocation: string,
  car: string,
  price: number,
  userId: string,
  createdAt: string // ISO date
}
```

## Booking API Endpoints

### Create Booking

- **POST** `/api/booking`
- Body: JSON matching the booking data structure above
- Returns: `{ message: "Booking created" }` or error

### Fetch Bookings

- **GET** `/api/booking?userId=USER_ID` (user bookings)
- **GET** `/api/booking` (all bookings, admin)
- Returns: `{ bookings: [ ... ] }`

### Delete Booking (Admin)

- **DELETE** `/api/booking?id=BOOKING_ID`
- Returns: `{ message: "Booking deleted" }` or error

### Update Booking (Admin)

- **PATCH** `/api/booking?id=BOOKING_ID`
- Body: JSON with fields to update
- Returns: `{ message: "Booking updated" }` or error

## Example Booking Object

```
{
  "pickupDate": "2024-06-01",
  "dropoffDate": "2024-06-05",
  "pickupLocation": "Berlin",
  "dropoffLocation": "Munich",
  "car": "BMW 320",
  "price": 250,
  "userId": "firebase-uid-123",
  "createdAt": "2024-05-01T12:00:00.000Z"
}
```

## Tech stack

- **Next.js 16** (App Router, React 19.3, statically prerendered pages)
- **Tailwind CSS 4.3** with CSS-first design tokens in `src/app/globals.css`
- **Radix Dialog** for accessible modals, **lucide-react** icons, **sonner** toasts
- **Firebase 13** (Auth + Firestore), loaded lazily after first paint
- **Zustand 5** for the small amount of shared client state

## Design system

All tokens live in `src/app/globals.css` and are exposed as Tailwind utilities.

| Token                                   | Usage                                              |
| --------------------------------------- | -------------------------------------------------- |
| `background` / `card` / `muted`         | Page, surfaces and subtle fills                    |
| `foreground` / `muted-foreground`       | Primary and secondary text                         |
| `primary` / `primary-soft`              | Signal red, used only for actions and highlights   |
| `ink` / `ink-foreground` / `ink-muted`  | Deep, high-contrast bands (CTA, feature tiles)     |
| `well`                                  | Neutral backdrop for studio car photos             |
| `shadow-soft` / `shadow-lift`           | Resting and hover elevation                        |

- **Type:** Geist (one variable font via `next/font`), tight tracking on headings, `tabular-nums` for prices.
- **Radius:** `rounded-xl` controls, `rounded-2xl` cards, `rounded-3xl` feature panels, pill buttons.
- **Layout:** `.container-page` (max-w-7xl), `.section` vertical rhythm, `.eyebrow` section labels.
- **Primitives:** `src/components/ui` (`Button`, `Input`, `Select`, `Textarea`, `Badge`, `Card`, `Dialog`, `Avatar`).

## Performance notes

- Every page is static; images use `next/image` with AVIF/WebP and responsive `sizes`.
- Firebase Auth loads during browser idle time; Firestore and the sign-in/reservation dialogs load only on demand.
- Native `<select>` and `<details>` replace JS-heavy widgets; the theme toggle swaps icons with CSS (no hydration flash).
