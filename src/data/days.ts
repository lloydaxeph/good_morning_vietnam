import type { Day } from "../types";

export const DAYS: Day[] = [
  {
    date: "2026-11-04", nice: "Wed, Nov 4", city: "Hanoi", route: ["SINGAPORE", "HANOI"],
    note: "Keep your bags packed light for the overnight journey. <b>Secure all valuables and essential travel documents</b>, including your passport, wallet, phone, medications, and IDs. It is best to convert money before departure.",
    blocks: [
      {
        start: "13:35", end: "15:55", label: "Singapore Departure",
        transit: "✈️ Flight from Singapore to Hanoi — on the way. Rest up, today runs late.",
        items: [{ n: "Singapore Departure", d: "Booking Ref: FJR9E9. SG Changi Airport - Terminal 3. Noi Bai Airport - Terminal 2." }],
      },
      {
        start: "15:55", end: "22:30", label: "Hanoi Arrival",
        transit: "🛬 Land at Noi Bai Airport. This airport is known for its long waiting times during both arrivals and departures so its best to bring your patience.",
        items: [{ n: "Wait & dinner at Noi Bai Airport", d: "Stay at the airport until the Sapa bus — grab dinner at the terminal, then head to the 1st floor, Pillar 01 pick-up point before 22:30.", loc: "Noi Bai International Airport Terminal 2, Hanoi" }],
      },
      {
        start: "22:30", end: "06:00", label: "Bus to Sapa",
        transit: "🚌 Overnight bus from Noi Bai Airport straight to your Sapa hotel.",
        items: [{ n: "HK Buslines", d: "Pick-up: Noi Bai International Airport — International Terminal, 1st floor, Pillar 01. Drop-off: hotel in central Sapa (within 5 km of the Sapa office).", loc: "Noi Bai International Airport Terminal 2, Hanoi" }],
      }
    ],
  },
  {
    date: "2026-11-05", nice: "Thu, Nov 5", city: "Sapa", route: ["HANOI", "SAPA"],
    note: "Arrive early morning, then a winding shuttle up to Sapa. November is cool (10–18°C) and often misty — <b>bring jackets</b>.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Arrival morning",
        transit: "🚌 Bus arrives at your Sapa hotel — early check-in, drop bags before heading out.",
        items: [{ n: "Sapa Lumia Hotel", d: "Well-located Sapa town stay — ask for an early check-in after the overnight ride. Phone: +84-382966363.", loc: "15 Violet, Sapa, Lao Cai Province, Vietnam" }],
      },
      {
        start: "08:00", end: "11:30", label: "Breakfast in Sapa town",
        confirmed: false,
        items: [
          { n: "Hot pho breakfast", d: "Warm up with a steaming bowl of pho after the overnight ride — a local favorite to start the day in the mountain chill.", loc: "Sapa town center" },
          { n: "Sapa Sun Plaza", d: "Alternative Sapa town hotel option, close to restaurants and the main square.", loc: "Sapa Sun Plaza" },
        ],
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        confirmed: false,
        items: [{ n: "Lunch at Sapa town", d: "Still deciding — plenty of local spots to pick from once you're there.", loc: "Sapa town center" }],
      },
      {
        start: "13:00", end: "15:00", label: "Rest at hotel",
        items: [{ n: "Rest at Sapa Lumia Hotel", d: "Take a breather after the overnight ride and lunch before heading back out.", loc: "15 Violet, Sapa, Lao Cai Province, Vietnam" }],
      },
      {
        start: "15:00", end: "17:00", label: "Gentle first afternoon",
        confirmed: false,
        items: [{ n: "Explore Sapa town", d: "Wander the streets, shops, and viewpoints around town at an easy pace.", loc: "Sapa town center" }],
      },
      {
        start: "17:00", end: "19:00", label: "Dinner",
        confirmed: false,
        items: [{ n: "Dinner at Sapa town", d: "Still deciding — plenty of local spots to pick from once you're there.", loc: "Sapa town center" }],
      },
      {
        start: "19:00", end: "22:00", label: "Cozy evening",
        items: [{ n: "Sapa Night Market", d: "Grilled skewers, sticky rice in bamboo, warm soy milk.", loc: "Sapa Night Market", thumb: "/images/sapa_night_market.jpg" }],
      },
    ],
  },
  {
    date: "2026-11-06", nice: "Fri, Nov 6", city: "Sapa", route: ["SAPA", "FANSIPAN"],
    note: "Leg day. Go up <b>Fansipan early</b> — mornings give the best chance above the clouds before afternoon fog.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Misty sunrise breakfast",
        confirmed: false,
        items: [{ n: "Sunrise over Muong Hoa Valley", d: "Sea of clouds below the viewpoints on a lucky morning.", loc: "Muong Hoa Valley viewpoint, Sapa" }],
      },
      {
        start: "08:00", end: "11:00", label: "Roof of Indochina",
        confirmed: false,
        items: [{ n: "Fansipan cable car", d: "20-minute ride over the valley to Vietnam's highest peak (3,143 m).", loc: "Fansipan Cable Car Station, Sapa" }],
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        confirmed: false,
        items: [{ n: "Lunch at a Ta Van homestay", d: "Home-cooked mountain food with valley views.", loc: "Ta Van Village, Sapa" }],
      },
      {
        start: "13:00", end: "17:00", label: "Into the valley",
        confirmed: false,
        items: [{ n: "Trek Muong Hoa Valley", d: "The classic walk through layered rice terraces.", loc: "Muong Hoa Valley, Sapa" }],
      },
      {
        start: "17:00", end: "19:00", label: "Dinner",
        confirmed: false,
        items: [{ n: "Thang co & apple wine tasting", d: "H'mong specialties for the adventurous — local corn & apple wine.", loc: "Sapa town center" }],
      },
      {
        start: "19:00", end: "22:00", label: "Night in the mountains",
        confirmed: false,
        items: [{ n: "Sapa Lake at night", d: "Lights reflecting on the water, cool mountain air.", loc: "Sapa Lake" }],
      },
    ],
  },
  {
    date: "2026-11-07", nice: "Sat, Nov 7", city: "Sapa", route: ["SAPA", "LAO CAI"],
    note: "Last Sapa day. Just relax and enjoy the fresh air — checkout is by 9 AM.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "One last sunrise",
        confirmed: false,
        items: [{ n: "Final misty sunrise viewpoint", d: "Last chance for the cloud-sea over the valley.", loc: "Muong Hoa Valley viewpoint, Sapa" }],
      },
      {
        start: "08:00", end: "09:00", label: "Pack up & check out",
        transit: "🏨 Hotel check-out by 9 AM.",
        items: [{ n: "Final packing at Sapa Lumia Hotel", d: "Grab breakfast on the way out and settle up before the shuttle.", loc: "15 Violet, Sapa, Lao Cai Province, Vietnam" }],
      },
      {
        start: "09:00", end: "12:05", label: "Shuttle down to Lao Cai",
        transit: "🚐 Shuttle Bus Transfer: Sapa Town Center → Lao Cai Station. Pickup 09:30–09:40 for the SP8 train.",
        items: [{ n: "SP8 to Hanoi", d: "Chapa Express Train, Deluxe Berth x 3 (3 adults). Departs Lao Cai 12:05, Track/Platform 1.", loc: "Lao Cai Railway Station", thumb: "/images/sleeper_train_to_sapa.jpg" }],
      },
      {
        start: "12:05", end: "19:37", label: "Train to Hanoi",
        transit: "🚆 SP8 Chapa Express Train — Lao Cai to Hanoi, Deluxe Berth. Arrives Hanoi 19:37.",
        items: [{ n: "SP8 Chapa Express Train", d: "Deluxe Berth x 3 (3 adults, 0 child). Bring snacks and something to pass the afternoon.", loc: "Lao Cai Railway Station" }],
      },
    ],
  },
  {
    date: "2026-11-08", nice: "Sun, Nov 8", city: "Hanoi", route: ["LAO CAI", "HANOI"],
    note: "Train arrives Hanoi in the evening. Settle into the hotel and ease into the city at night.",
    blocks: [
      {
        start: "12:05", end: "20:00", label: "Train to Hanoi",
        transit: "🚆 SP8 Chapa Express Train — Lao Cai to Hanoi, Deluxe Berth. Arrives Hanoi 19:37.",
        items: [{ n: "SP8 Chapa Express Train", d: "Deluxe Berth x 3 (3 adults, 0 child). Bring snacks and something to pass the afternoon.", loc: "Lao Cai Railway Station" }],
      },
      {
        start: "20:00", end: "21:00", label: "Hanoi arrival",
        transit: "🚆 Arrive Hanoi on the SP8 from Lao Cai — check in and drop bags.",
        items: [{ n: "A89 West Lake Hotel", d: "Hotel stay near West Lake, Tay Ho.", loc: "No. 9, Lane 612 Lac Long Quan Street, Tay Ho Ward, Tay Ho, Hanoi" }],
      },
      {
        start: "21:00", end: "23:00", label: "Late dinner",
        confirmed: false,
        items: [{ n: "Street food crawl", d: "Banh cuon, nem chua ran, che desserts — graze street by street.", loc: "Old Quarter, Hanoi" }],
      },
    ],
  },
  {
    date: "2026-11-09", nice: "Mon, Nov 9", city: "Ninh Binh", route: ["HANOI", "NINH BINH"],
    note: "Ninh Binh day tour — shared transfer, pick-up time reconfirmed after booking.",
    blocks: [
      {
        start: "07:00", end: "07:30", label: "Pick-up",
        transit: "🚐 Shared transfer pick-up at a designated meeting point around Hanoi Old Quarter, or Hanoi Opera House (1 Tràng Tiền, Phan Chu Trinh, Hoàn Kiếm) at 07:40 if staying outside the pick-up area. Arrive 10 min early — pick-up may run early or late. Operator reconfirms exact time after booking.",
        items: [{ n: "Ninh Binh day tour pick-up", d: "Shared transfer — enter hotel name and address at checkout so the operator can confirm pick-up time.", loc: "Hanoi Opera House, 1 Tràng Tiền, Phan Chu Trinh, Hoàn Kiếm, Hà Nội, Vietnam" }],
      },
      {
        start: "07:30", end: "08:00", label: "Stopover",
        transit: "🚐 Depart for Ninh Binh — 30 min stop at Hanam province for a toilet break.",
        items: [{ n: "Hanam province", d: "Stop at a stopover for a toilet break.", loc: "Hanam province" }],
      },
      {
        start: "08:00", end: "09:30", label: "Bai Dinh Pagoda",
        items: [{ n: "Bai Dinh Pagoda", d: "Guided tour. The most famous & biggest pagoda in Southeast Asia — 500 Stone Arhat Statues, 36-ton bronze bell, 100-ton Buddha statue.", loc: "Bai Dinh Pagoda, Ninh Binh" }],
      },
      {
        start: "09:30", end: "11:00", label: "Lunch",
        items: [{ n: "Buffet lunch", d: "Buffet lunch in the restaurant with a lot of local foods.", loc: "Ninh Binh" }],
      },
      {
        start: "11:00", end: "14:00", label: "Trang An Landscape Complex",
        items: [{ n: "Trang An Landscape Complex", d: "Guided tour. UNESCO World Heritage Site (2014). Boat trip through the landscape's amazing caves.", loc: "Trang An Landscape Complex, Ninh Binh" }],
      },
      {
        start: "14:00", end: "17:00", label: "Mua Cave",
        items: [{ n: "Mua Cave", d: "Guided tour. Walk up almost 500 steps to the top of Lying Dragon Mountain for a panoramic view of Tam Coc.", loc: "Mua Cave, Ninh Binh" }],
      },
      {
        start: "17:00", end: "19:30", label: "Return to Hanoi",
        transit: "🚐 Drive back to Hanoi — drop-off at hotel/personal address, end of service.",
        items: [{ n: "Ninh Binh day tour drop-off", d: "Return drop-off at your hotel or personal address.", loc: "Hanoi" }],
      },
    ],
  },
  {
    date: "2026-11-10", nice: "Tue, Nov 10", city: "Hanoi", route: ["HANOI", "HANOI"],
    note: "Another relaxed day around Hanoi before checkout tomorrow.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Slow morning coffee",
        confirmed: false,
        items: [{ n: "One last egg coffee", d: "A farewell ca phe trung at a balcony cafe.", loc: "Old Quarter, Hanoi" }],
      },
      {
        start: "08:00", end: "11:00", label: "Free morning",
        confirmed: false,
        items: [{ n: "Dong Xuan Market souvenirs", d: "Coffee beans, dried fruit, conical hats — haggle happily.", loc: "Dong Xuan Market, Hanoi" }],
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        confirmed: false,
        items: [{ n: "Lunch in Hanoi", d: "Still deciding — plenty of local spots to pick from.", loc: "Hanoi" }],
      },
      {
        start: "13:00", end: "17:00", label: "Free afternoon",
        confirmed: false,
        items: [{ n: "Explore Hanoi", d: "Wander at an easy pace — plenty left to see.", loc: "Hanoi" }],
      },
      {
        start: "17:00", end: "19:00", label: "Dinner",
        confirmed: false,
        items: [{ n: "Dinner in Hanoi", d: "Still deciding — plenty of local spots to pick from.", loc: "Hanoi" }],
      },
      {
        start: "19:00", end: "22:00", label: "Evening in Hanoi",
        confirmed: false,
        items: [{ n: "Explore at night", d: "Still deciding — keep it easy the night before checkout.", loc: "Hanoi" }],
      },
    ],
  },
  {
    date: "2026-11-11", nice: "Wed, Nov 11", city: "Hanoi", route: ["HANOI", "SINGAPORE"],
    note: "Departure day. Checkout is by 9 AM; airport is roughly 45 min away — leave with plenty of buffer before your flight. Airport lines could take <b>1-3hrs</b>.",
    blocks: [
      {
        start: "08:00", end: "09:00", label: "Hotel check-out",
        transit: "🏨 Hotel check-out by 9 AM — settle up and store bags if you're not heading straight to the airport.",
        items: [{ n: "A89 West Lake Hotel check-out", d: "Checkout by 9 AM.", loc: "No. 9, Lane 612 Lac Long Quan Street, Tay Ho Ward, Tay Ho, Hanoi" }],
      },
      {
        start: "09:00", end: "11:00", label: "Last bites",
        items: [{ n: "Dong Xuan Market souvenirs", d: "Coffee beans, dried fruit, conical hats — haggle happily.", loc: "Dong Xuan Market, Hanoi", thumb: "/images/dong_xuan_market_souvenirs.jpg" }],
      },
      {
        start: "11:00", end: "15:00", label: "To the airport",
        transit: "🛫 Flight from Hanoi to Singapore — head to Noi Bai Airport (~45 min by Grab or Bus 86). Aim to arrive well ahead of an international flight.",
        items: [{ n: "Airport pho or banh mi", d: "Decent last-chance Vietnamese food after security.", loc: "Noi Bai International Airport", thumb: "/images/airport_pho_or_banh_mi.jpg" }],
      },
      {
        start: "15:00", end: "18:00", label: "Arrive at Singapore",
        transit: "🛬 Land at Changi Airport.",
        confirmed: false,
        items: [{ n: "Arrive at Singapore", d: "Details to be added." }],
      },
    ],
  },
];
