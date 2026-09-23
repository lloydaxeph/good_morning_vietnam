import type { Day } from "../types";

export const DAYS: Day[] = [
  {
    date: "2026-11-05", nice: "Tue, Nov 5", city: "Hanoi", route: ["SINGAPORE", "HANOI"],
    note: "Keep your bags packed light for the overnight journey. <b>Secure all valuables and essential travel documents</b>, including your passport, wallet, phone, medications, and IDs. It is best to convert money before departure.",
    blocks: [
      {
        start: "12:00", end: "16:00", label: "Singapore Departure",
        transit: "✈️ Flight from Singapore to Hanoi — on the way. Rest up, today runs late.",
        item: { n: "Singapore Departure", d: "Details to be added." },
      },
      {
        start: "16:00", end: "18:00", label: "Hanoi Arrival",
        transit: "🛬 Land at Noi Bai Airport. This airport is known for its long waiting times during both arrivals and departures so its best to bring your patience.",
        item: { n: "Airport Bus 86 to Old Quarter", d: "Cheap, easy express bus straight to Hoan Kiem — a scenic first look at Hanoi.", thumb: "/images/airport_bus_86_to_old_quarter.png" },
      },
      {
        start: "18:00", end: "22:00", label: "First dinner in Hanoi",
        item: { n: "Pho Thin Lo Duc", d: "Michelin Selected ⭐. Legendary stir-fried-beef pho — the perfect first meal in Vietnam.", loc: "Pho Thin Lo Duc, Hanoi", thumb: "/images/pho_thin_lo_duc.jpg" },
      },
      {
        start: "23:00", end: "06:00", label: "Overnight to Sapa",
        item: { n: "Sleeper Train to Sapa", d: "Overnight train to Lao Cai, then shuttle up the mountain — cabin bunks, rocks you to sleep. Could be noisy though.", loc: "Hanoi Railway Station", thumb: "/images/sleeper_train_to_sapa.jpg" },
      },
    ],
  },
  {
    date: "2026-11-06", nice: "Wed, Nov 6", city: "Sapa", route: ["HANOI", "SAPA"],
    note: "Arrive early morning, then a winding shuttle up to Sapa. November is cool (10–18°C) and often misty — <b>bring jackets</b>.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Arrival morning",
        transit: "🚆 Arrive Sapa (Lao Cai) — early hotel check-in, drop bags before heading out.",
        item: { n: "Dai Nam Hotel Sapa", d: "Well-located Sapa town stay — ask for an early check-in after the overnight ride.", loc: "Dai Nam Hotel Sapa", thumb: "/images/dai_nam_hotel_sapa.jpg", website: "https://www.booking.com/hotel/vn/dai-nam-47-pho-fansipan-by-bay-luxury.html" },
      },
      {
        start: "08:00", end: "11:00", label: "Settle into Sapa",
        item: { n: "Sapa Sun Plaza", d: "Alternative Sapa town hotel option, close to restaurants and the main square.", loc: "Sapa Sun Plaza", thumb: "/images/sapa_sun_plaza.jpg" },
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        item: { n: "Salmon hotpot lunch", d: "Sapa's mountain specialty — river salmon simmered at your table.", loc: "Salmon hotpot restaurant, Sapa", thumb: "/images/salmon_hotpot_lunch.jpg" },
      },
      {
        start: "13:00", end: "17:00", label: "Gentle first afternoon",
        item: { n: "Cat Cat Village walk", d: "Closest village to town — waterfalls, water wheels, Hmong houses.", loc: "Cat Cat Village, Sapa", thumb: "/images/cat_cat_village_walk.jpg" },
      },
      {
        start: "17:00", end: "19:00", label: "Dinner",
        item: { n: "Viettrekking Cafe & Restaurant", d: "Cozy trekking-lodge spot for a warming dinner in town.", loc: "Viettrekking Cafe & Restaurant, Sapa", thumb: "/images/viettrekking_cafe_restaurant.jpg" },
      },
      {
        start: "19:00", end: "22:00", label: "Cozy evening",
        item: { n: "Sapa Night Market", d: "Grilled skewers, sticky rice in bamboo, warm soy milk.", loc: "Sapa Night Market", thumb: "/images/sapa_night_market.jpg" },
      },
    ],
  },
  {
    date: "2026-11-07", nice: "Thu, Nov 7", city: "Sapa", route: ["SAPA", "FANSIPAN"],
    note: "Leg day. Go up <b>Fansipan early</b> — mornings give the best chance above the clouds before afternoon fog.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Misty sunrise breakfast",
        item: { n: "Sunrise over Muong Hoa Valley", d: "Sea of clouds below the viewpoints on a lucky morning.", loc: "Muong Hoa Valley viewpoint, Sapa", thumb: "/images/sunrise_over_muong_hoa_valley.jpg" },
      },
      {
        start: "08:00", end: "11:00", label: "Roof of Indochina",
        item: { n: "Fansipan cable car", d: "20-minute ride over the valley to Vietnam's highest peak (3,143 m).", loc: "Fansipan Cable Car Station, Sapa", thumb: "/images/fansipan_cable_car.jpg" },
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        item: { n: "Lunch at a Ta Van homestay", d: "Home-cooked mountain food with valley views.", loc: "Ta Van Village, Sapa", thumb: "/images/lunch_at_a_ta_van_homestay.jpg" },
      },
      {
        start: "13:00", end: "17:00", label: "Into the valley",
        item: { n: "Trek Muong Hoa Valley", d: "The classic walk through layered rice terraces.", loc: "Muong Hoa Valley, Sapa", thumb: "/images/trek_muong_hoa_valley.jpg" },
      },
      {
        start: "17:00", end: "19:00", label: "Dinner",
        item: { n: "Thang co & apple wine tasting", d: "H'mong specialties for the adventurous — local corn & apple wine.", loc: "Sapa town center", thumb: "/images/thang_co_apple_wine_tasting.jpg" },
      },
      {
        start: "19:00", end: "22:00", label: "Night in the mountains",
        item: { n: "Sapa Lake at night", d: "Lights reflecting on the water, cool mountain air.", loc: "Sapa Lake", thumb: "/images/sapa_lake_at_night.jpg" },
      },
    ],
  },
  {
    date: "2026-11-08", nice: "Fri, Nov 8", city: "Sapa", route: ["SAPA", "LAO CAI"],
    note: "Last Sapa day. Just relax and enjoy the fresh air.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "One last sunrise",
        item: { n: "Final misty sunrise viewpoint", d: "Last chance for the cloud-sea over the valley.", loc: "Muong Hoa Valley viewpoint, Sapa", thumb: "/images/final_misty_sunrise_viewpoint.jpg" },
      },
      {
        start: "08:00", end: "11:00", label: "Waterfalls & the pass",
        item: { n: "Silver Waterfall (Thac Bac)", d: "100 m cascade on the O Quy Ho road, 15 min from town.", loc: "Silver Waterfall (Thac Bac), Sapa", thumb: "/images/silver_waterfall_thac_bac.jpg" },
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        transit: "Hotel Check-out.",
        item: { n: "Early salmon hotpot dinner spot for lunch", d: "Eat well in Sapa — train snacks are slim, so make lunch count.", loc: "Salmon hotpot restaurant, Sapa", thumb: "/images/early_salmon_hotpot_dinner_spot_for_lunch.jpg" },
      },
      {
        start: "13:00", end: "17:00", label: "Souvenirs & slow goodbye",
        item: { n: "Brocade & Hmong craft shopping", d: "Indigo-dyed textiles and silver — buy direct from makers.", loc: "Sapa Market", thumb: "/images/brocade_hmong_craft_shopping.jpg" },
      },
      {
        start: "17:00", end: "19:00", label: "Dinner before the ride down",
        transit: "🚐 Shuttle Sapa → Lao Cai in the evening ahead of the overnight departure.",
        item: { n: "Dinner near Lao Cai station", d: "Simple rice or noodle spots if you go down early.", loc: "Lao Cai Railway Station", thumb: "/images/dinner_near_lao_cai_station.jpg" },
      },
      {
        start: "19:00", end: "22:00", label: "Evening in transit",
        item: { n: "Last-minute Lao Cai market browse", d: "Small stalls near the station for final souvenirs.", loc: "Lao Cai Market", thumb: "/images/last_minute_lao_cai_market_browse.jpg" },
      },
      {
        start: "23:00", end: "06:00", label: "Overnight to Hanoi",
        item: { n: "Sleeper Train to Hanoi", d: "Overnight train back down from Lao Cai — cabin bunks, arrive Hanoi at dawn.", loc: "Lao Cai Railway Station", thumb: "/images/sleeper_train_to_sapa.jpg" },
      },
    ],
  },
  {
    date: "2026-11-09", nice: "Sat, Nov 9", city: "Hanoi", route: ["LAO CAI", "HANOI"],
    note: "Train or bus arrives Hanoi early morning. Hanoi is at its best at dawn.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Hanoi at dawn",
        transit: "🚆 Arrive back in Hanoi — early hotel check-in, drop bags before heading out or settle down.",
        item: { n: "Centraltique Downtown", d: "Bespoke French colonial house steps from Hoan Kiem Lake, blending heritage charm with modern comfort.", loc: "Centraltique Downtown, Hanoi", thumb: "/images/centraltique_downtown.jpg", website: "https://www.booking.com/hotel/vn/centraltique-bespoke-french-colonial-house-near-hoan-kiem-lake.html" },
      },
      {
        start: "08:00", end: "11:00", label: "Imperial Hanoi",
        item: { n: "Tai chi at Hoan Kiem Lake", d: "Join locals exercising around the lake at sunrise.", loc: "Hoan Kiem Lake, Hanoi", thumb: "/images/tai_chi_at_hoan_kiem_lake.jpg" },
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        item: { n: "Bun cha lunch in the Old Quarter", d: "Charcoal-grilled pork patties with herbs and noodles.", loc: "Old Quarter, Hanoi", thumb: "/images/bun_cha_lunch_in_the_old_quarter.jpg" },
      },
      {
        start: "13:00", end: "17:00", label: "Museums & silk",
        item: { n: "Hoa Lo Prison Museum", d: "Sobering, well-told history — the \"Hanoi Hilton.\"", loc: "Hoa Lo Prison Museum, Hanoi", thumb: "/images/hoa_lo_prison_museum.jpg" },
      },
      {
        start: "17:00", end: "19:00", label: "Dinner",
        item: { n: "Street food crawl", d: "Banh cuon, nem chua ran, che desserts — graze street by street.", loc: "Old Quarter, Hanoi", thumb: "/images/street_food_crawl.jpg" },
      },
      {
        start: "19:00", end: "22:00", label: "Hanoi by night",
        item: { n: "Thang Long Water Puppet Theatre", d: "A thousand-year-old art form — puppets dancing on water.", loc: "Thang Long Water Puppet Theatre, Hanoi", thumb: "/images/thang_long_water_puppet_theatre.jpg" },
      },
    ],
  },
  {
    date: "2026-11-10", nice: "Sun, Nov 10", city: "Hanoi", route: ["HANOI", "HANOI"],
    note: "Weekend bonus: streets around Hoan Kiem become <b>pedestrian-only</b> — great evening atmosphere.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Market dawn breakfast",
        item: { n: "Quang Ba flower market", d: "Wholesale flower market at its peak before sunrise.", loc: "Quang Ba Flower Market, Hanoi", thumb: "/images/quang_ba_flower_market.jpg" },
      },
      {
        start: "08:00", end: "11:00", label: "West Lake & beyond",
        item: { n: "Tran Quoc Pagoda", d: "Hanoi's oldest pagoda on a West Lake islet — 1,500 years old.", loc: "Tran Quoc Pagoda, Hanoi", thumb: "/images/tran_quoc_pagoda.jpg" },
      },
      {
        start: "11:00", end: "13:00", label: "Lunch",
        item: { n: "Cha ca La Vong lunch", d: "Turmeric fish sizzled with dill at your table — a Hanoi original.", loc: "Cha Ca La Vong, Hanoi", thumb: "/images/cha_ca_la_vong_lunch.jpg" },
      },
      {
        start: "13:00", end: "17:00", label: "Classic afternoon",
        item: { n: "Bat Trang ceramic village", d: "Half-day pottery village trip — throw your own bowl.", loc: "Bat Trang Ceramic Village, Hanoi", thumb: "/images/bat_trang_ceramic_village.jpg" },
      },
      {
        start: "17:00", end: "19:00", label: "Dinner",
        item: { n: "Maison Sen Buffet", d: "All-you-can-eat spread if you want variety on your last big night.", loc: "Maison Sen Buffet, Hanoi", thumb: "/images/maison_sen_buffet.jpg" },
      },
      {
        start: "19:00", end: "22:00", label: "Last big night",
        item: { n: "Hoan Kiem walking street (weekend)", d: "Car-free streets, buskers and games around the lake.", loc: "Hoan Kiem Lake, Hanoi", thumb: "/images/hoan_kiem_walking_street_weekend.jpg" },
      },
    ],
  },
  {
    date: "2026-11-11", nice: "Mon, Nov 11", city: "Hanoi", route: ["HANOI", "SINGAPORE"],
    note: "Departure day. Keep the morning close to the hotel; airport is roughly 45 min away — leave with plenty of buffer before your flight. Airport lines could take <b>1-3hrs</b>.",
    blocks: [
      {
        start: "06:00", end: "08:00", label: "Slow last breakfast",
        item: { n: "One last egg coffee", d: "A farewell ca phe trung at a balcony cafe.", loc: "Old Quarter, Hanoi", thumb: "/images/one_last_egg_coffee.jpg" },
      },
      {
        start: "08:00", end: "11:00", label: "Hotel check-out & last bites",
        transit: "Hotel Check-out — settle up and store bags if you're not heading straight to the airport.",
        item: { n: "Dong Xuan Market souvenirs", d: "Coffee beans, dried fruit, conical hats — haggle happily.", loc: "Dong Xuan Market, Hanoi", thumb: "/images/dong_xuan_market_souvenirs.jpg" },
      },
      {
        start: "11:00", end: "15:00", label: "To the airport",
        transit: "🛫 Flight from Hanoi to Singapore — head to Noi Bai Airport (~45 min by Grab or Bus 86). Aim to arrive well ahead of an international flight.",
        item: { n: "Airport pho or banh mi", d: "Decent last-chance Vietnamese food after security.", loc: "Noi Bai International Airport", thumb: "/images/airport_pho_or_banh_mi.jpg" },
      },
      {
        start: "15:00", end: "18:00", label: "Arrive at Singapore",
        transit: "🛬 Land at Changi Airport.",
        item: { n: "Arrive at Singapore", d: "Details to be added." },
      },
    ],
  },
];
