export const site = {
  name: "Drivora",
  tagline: "Premium car rental across Germany",
  description:
    "Rent premium and everyday cars across 12 German cities. Transparent pricing, free cancellation and 24/7 roadside support.",
  phone: "+49 69 1234 5678",
  phoneHref: "tel:+496912345678",
  email: "hello@drivora.de",
  address: "Mainzer Landstraße 50, 60325 Frankfurt am Main",
  hours: [
    { days: "Mon – Fri", time: "08:00 – 20:00" },
    { days: "Saturday", time: "08:00 – 16:00" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const navLinks = [
  { name: "Fleet", href: "/car-models" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
] as const;

export const locations = [
  "Frankfurt",
  "Berlin",
  "Munich",
  "Hamburg",
  "Stuttgart",
  "Cologne",
  "Düsseldorf",
  "Dortmund",
  "Essen",
  "Leipzig",
  "Bremen",
  "Dresden",
];

export const stats = [
  { value: "12", label: "Cities in Germany" },
  { value: "9", label: "Curated models" },
  { value: "4.9", label: "Average rating" },
  { value: "24/7", label: "Roadside support" },
];

export const testimonials = [
  {
    quote:
      "Booking took less than two minutes and the car was spotless. The pick-up in Frankfurt was faster than any airport desk I've used.",
    name: "Lena Hoffmann",
    role: "Business traveller",
    city: "Frankfurt",
  },
  {
    quote:
      "We rented the GLK for a family trip to the Alps. Clear pricing, no surprise fees and a friendly team when we extended by a day.",
    name: "Markus Weber",
    role: "Family trip",
    city: "Munich",
  },
  {
    quote:
      "The M4 was an absolute highlight of our weekend. Handover was professional and the car was in perfect condition.",
    name: "Sophie Brandt",
    role: "Weekend getaway",
    city: "Hamburg",
  },
  {
    quote:
      "I use Drivora for every client visit now. Consistent quality, and support actually picks up the phone at 11 pm.",
    name: "Jonas Keller",
    role: "Consultant",
    city: "Berlin",
  },
  {
    quote:
      "Dropping off in a different city was effortless. Exactly the flexibility I needed for a one-way move.",
    name: "Aylin Demir",
    role: "One-way rental",
    city: "Cologne",
  },
  {
    quote:
      "Transparent, fast and premium without the premium attitude. Highly recommended.",
    name: "Thomas Richter",
    role: "Returning customer",
    city: "Stuttgart",
  },
];

export const faqs = [
  {
    q: "What do I need to rent a car?",
    a: "A valid driving licence held for at least one year, a government-issued ID and a credit card in the driver's name. Performance models require drivers aged 25+.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Yes. Cancellations are free up to 48 hours before pick-up, and you can change dates or locations from your profile at any time.",
  },
  {
    q: "Is mileage unlimited?",
    a: "All compact, sedan and SUV rentals include unlimited kilometres within Germany. Performance models include 300 km per day.",
  },
  {
    q: "Can I return the car in a different city?",
    a: "Absolutely. One-way rentals between any of our 12 locations are supported. The drop-off fee is shown before you confirm.",
  },
  {
    q: "What insurance is included?",
    a: "Every rental includes third-party liability and collision damage cover. Optional zero-excess cover can be added at the counter.",
  },
];
