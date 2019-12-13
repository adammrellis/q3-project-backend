exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("guitars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("guitars").insert(
        [
        {
          make: "Gibson",
          model: "Les Paul Standard",
          year: 1953,
          color: "Gold Top",
          pickups: "Two P90s",
          price: 15500,
          condition: 9,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/00853_00853_front.jpg"
        },
        {
          make: "Gretsch",
          model: "Duo Jet",
          year: 1953,
          color: "Black",
          pickups: "Two DeArmond Single Coils",
          price: 9695,
          condition: 8,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/01175_01175_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Junior",
          year: 1954,
          color: "Tobacco Sunburst",
          pickups: "One P90",
          price: 3500,
          condition: 9,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/01695_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Standard",
          year: 1954,
          color: "Gold Top",
          pickups: "Two P90s",
          price: 17500,
          condition: 9,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/01093_01093_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Custom",
          year: 1955,
          color: "Black Beauty",
          pickups: "P90 Bridge, Staple Neck",
          price: 18000,
          condition: 8,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/00742_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Junior",
          year: 1955,
          color: "Tobacco Sunburst",
          pickups: "One P90",
          price: 4500,
          condition: 9,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/01765_front.jpg"
        },
        {
          make: "Gretsch",
          model: "Round Up",
          year: 1955,
          color: "Natual",
          pickups: "DeArmond Single Coils",
          price: 6500,
          condition: 7,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/00927_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Custom",
          year: 1956,
          color: "Black Beauty",
          pickups: "P90 Bridge, Staple Neck",
          price: 45000,
          condition: 9,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/01070_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Junior",
          year: 1956,
          color: "TV Yellow",
          pickups: "One P90",
          price: 5000,
          condition: 9,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/02120_front%20copy.jpg"
        },
        {
          make: "Gretsch",
          model: "Country Club",
          year: 1956,
          color: "Cadillac Green",
          pickups: "DeArmond Single Coils",
          price: 9500,
          condition: 8,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/00942_front.jpg"
        },
        {
          make: "Gibson",
          model: "ES 295",
          year: 1957,
          color: "Gold",
          pickups: "Two p90s",
          price: 12500,
          condition: 9,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/02098_front%20copy.jpg"
        },
        {
          make: "Gretsch",
          model: "6121 Chet Atkins",
          year: 1957,
          color: "Orange",
          pickups: "DeArmond Single Coils",
          price: 8650,
          condition: 8,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/02130_front%20copy.jpg"
        },
        {
          make: "Gretsch",
          model: "Country Club",
          year: 1957,
          color: "Cadillac Green",
          pickups: "Early FilterTrons",
          price: 12500,
          condition: 7,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/01249_front.jpg"
        },
        {
          make: "Gretsch",
          model: "6120 Chet Atkins",
          year: 1958,
          color: "Orange",
          pickups: "Two FilterTrons",
          price: 16000,
          condition: 8,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/02004_front%20copy.jpg"
        },
        {
          make: "Gretsch",
          model: "6129",
          year: 1958,
          color: "Silver Sparkle",
          pickups: "DeArmond Single Coils",
          price: 8500,
          condition: 7,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/02053_front%20copy.jpg"
        },
        {
          make: "Gretsch",
          model: "Country Gentlman",
          year: 1958,
          color: "Brown",
          pickups: "Two FilterTrons",
          price: 12500,
          condition: 9,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/01287_front.jpg"
        },
        {
          make: "Gibson",
          model: "ES 355",
          year: 1959,
          color: "Cherry",
          pickups: "Two PAF Humbuckers",
          price: 32500,
          condition: 9,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/01116_01116_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Standard",
          year: 1959,
          color: "Cherry Sunburst",
          pickups: "Two PAF Humbuckers",
          price: 375000,
          condition: 8,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/00976_00976_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Standard",
          year: 1959,
          color: "Cherry Sunburst",
          pickups: "Two PAF Humbuckers",
          price: 400000,
          condition: 9,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01497_front.jpg"
        },
        {
          make: "Gibson",
          model: "ES 330",
          year: 1960,
          color: "Black",
          pickups: "Two P90s",
          price: 10000,
          condition: 10,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01050_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Custom",
          year: 1960,
          color: "Black Beauty",
          pickups: "Three PAF Humbuckers",
          price: 45000,
          condition: 7,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/01995_front%20copy.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Junior",
          year: 1960,
          color: "Cherry",
          pickups: "One P90",
          price: 7500,
          condition: 7,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/01711_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Standard",
          year: 1960,
          color: "Cherry Sunburst",
          pickups: "Two PAF Humbuckers",
          price: 300000,
          condition: 8,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/01013_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Standard",
          year: 1960,
          color: "Refin Gold Top",
          pickups: "Two PAF Humbuckers",
          price: 250000,
          condition: 7,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/00691_front.jpg"
        },
        {
          make: "Gretsch",
          model: "Country Club",
          year: 1960,
          color: "Cadillac Green",
          pickups: "Two FilterTrons",
          price: 20000,
          condition: 9,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01078_front.jpg"
        },
        {
          make: "Gretsch",
          model: "White Falcon",
          year: 1960,
          color: "White",
          pickups: "Two FilterTrons",
          price: 75000,
          condition: 8,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01012_01012_front.jpg"
        },
        {
          make: "Gibson",
          model: "ES 335",
          year: 1961,
          color: "Cherry",
          pickups: "Two PAF Humbuckers",
          price: 3250,
          condition: 8,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01162_01162_front.jpg"
        },
        {
          make: "Gibson",
          model: "Les Paul Special",
          year: 1961,
          color: "Cherry",
          pickups: "Two P90s",
          price: 5500,
          condition: 8,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/01712_front.jpg"
        },
        {
          make: "Gibson",
          model: "SG Special",
          year: 1961,
          color: "Cherry",
          pickups: "Two P90s",
          price: 8500,
          condition: 8,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/00580_front.jpg"
        },
        {
          make: "Gretsch",
          model: "Corvette",
          year: 1961,
          color: "Cherry",
          pickups: "One HiLoTron",
          price: 1550,
          condition: 7,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/01443_front.jpg"
        },
        {
          make: "Gibson",
          model: "SG Custom",
          year: 1962,
          color: "White",
          pickups: "Three PAF Humbuckers",
          price: 26500,
          condition: 8,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/01220_front.jpg"
        },
        {
          make: "Gibson",
          model: "SG Junior",
          year: 1962,
          color: "Cherry",
          pickups: "One P90",
          price: 5650,
          condition: 7,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01775_front.jpg"
        },
        {
          make: "Gibson",
          model: "SG Standard",
          year: 1962,
          color: "Cherry",
          pickups: "Two PAF Humbuckers",
          price: 27500,
          condition: 8,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/01798_front.jpg"
        },
        {
          make: "Gibson",
          model: "SG Standard",
          year: 1962,
          color: "Cherry",
          pickups: "Two PAF Humbuckers",
          price: 27500,
          condition: 6,
          location_id: 3,
          image:
            "https://www.frettedamericana.com/sites/default/files/01131_01131_front.jpg"
        },
        {
          make: "Gretsch",
          model: "6131 Firebird",
          year: 1962,
          color: "Firebird Red/Black",
          pickups: "Two FilterTrons",
          price: 10000,
          condition: 9,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/00485_front.jpg"
        },
        {
          make: "Gibson",
          model: "ES 330",
          year: 1963,
          color: "Cherry",
          pickups: "Two P90s",
          price: 12500,
          condition: 8,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01072_01072_front.jpg"
        },
        {
          make: "Gibson",
          model: "ES 355",
          year: 1963,
          color: "Cherry",
          pickups: "Two PAF Humbuckers",
          price: 36950,
          condition: 9,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/01117_front.jpg"
        },
        {
          make: "Gibson",
          model: "Firebird III",
          year: 1963,
          color: "Sunburst",
          pickups: "Two Mini PAF Humbuckers",
          price: 12000,
          condition: 8,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/01319_front.jpg"
        },
        {
          make: "Gibson",
          model: "Firebird III",
          year: 1963,
          color: "Sunburst",
          pickups: "Two Mini PAF Humbuckers",
          price: 13500,
          condition: 9,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/01018_01018_front1.jpg"
        },
        {
          make: "Gibson",
          model: "SG Custom",
          year: 1963,
          color: "White",
          pickups: "Three PAF Humbuckers",
          price: 35500,
          condition: 8,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01533_front.jpg"
        },
        {
          make: "Gibson",
          model: "SG Junior",
          year: 1963,
          color: "Pelham Blue",
          pickups: "One P90",
          price: 6500,
          condition: 6,
          location_id: 4,
          image:
            "https://www.frettedamericana.com/sites/default/files/01862_front%20copy.jpg"
        },
        {
          make: "Gibson",
          model: "SG Special",
          year: 1963,
          color: "White",
          pickups: "Two P90s",
          price: 12500,
          condition: 8,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/01553_front.jpg"
        },
        {
          make: "Gibson",
          model: "SG Standard",
          year: 1963,
          color: "Cherry",
          pickups: "Two PAF Humbuckers",
          price: 18500,
          condition: 8,
          location_id: 2,
          image:
            "https://www.frettedamericana.com/sites/default/files/00733_front.jpg"
        },
        {
          make: "Gretsch",
          model: "6122 Chet Atkins",
          year: 1963,
          color: "Black",
          pickups: "Two FilterTrons",
          price: 16500,
          condition: 9,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01646_front.jpg"
        },
        {
          make: "Gibson",
          model: "ES 345",
          year: 1964,
          color: "Cherry",
          pickups: "Two PAF Humbuckers",
          price: 45000,
          condition: 9,
          location_id: 5,
          image:
            "https://www.frettedamericana.com/sites/default/files/01279_01279_front.jpg"
        },
        {
          make: "Gibson",
          model: "Firebird III",
          year: 1964,
          color: "White",
          pickups: "Two Mini PAF Humbuckers",
          price: 15500,
          condition: 8,
          location_id: 1,
          image:
            "https://www.frettedamericana.com/sites/default/files/01095_front.jpg"
        },
        // {
        //   make: "Gibson",
        //   model: "Firebird III",
        //   year: 1964,
        //   color: "Red",
        //   pickups: "Two Mini PAF Humbuckers",
        //   price: 15000,
        //   condition: 9,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01073_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Firebird VII",
        //   year: 1964,
        //   color: "Sunburst",
        //   pickups: "Three Mini PAF Humbuckers",
        //   price: 30000,
        //   condition: 8,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01136_01136_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Standard",
        //   year: 1964,
        //   color: "Cherry",
        //   pickups: "Two PAF Humbuckers",
        //   price: 30000,
        //   condition: 9,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/02062_front.jpg"
        // },
        // {
        //   make: "Gretsch",
        //   model: "6120 Chet Atkins",
        //   year: 1964,
        //   color: "Orange",
        //   pickups: "Two FilterTrons",
        //   price: 7500,
        //   condition: 7,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00620_front.jpg"
        // },
        // {
        //   make: "Gretsch",
        //   model: "6131 Firebird",
        //   year: 1964,
        //   color: "Firebird Red/Black",
        //   pickups: "Two FilterTrons",
        //   price: 7500,
        //   condition: 8,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/02128_front%20copy.jpg"
        // },
        // {
        //   make: "Gretsch",
        //   model: "Country Club",
        //   year: 1964,
        //   color: "Cadillac Green",
        //   pickups: "Two FilterTrons",
        //   price: 20000,
        //   condition: 1,
        //   location_id: 9,
        //   image:
        //     "Rhttps://www.frettedamericana.com/sites/default/files/01350_front.jpg"
        // },
        // {
        //   make: "Gretsch",
        //   model: "6122 Chet Atkins",
        //   year: 1964,
        //   color: "Brown",
        //   pickups: "FilterTron Bridge/SuperTron Neck",
        //   price: 18500,
        //   condition: 8,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00726_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "ES 335",
        //   year: 1965,
        //   color: "Cherry",
        //   pickups: "Two PAF Humbuckers",
        //   price: 20500,
        //   condition: 8,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00998_00998_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Firebird III Non-Reverse",
        //   year: 1965,
        //   color: "Sunburst",
        //   pickups: "Three P90s",
        //   price: 7500,
        //   condition: 7,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00789_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Junior",
        //   year: 1965,
        //   color: "Cherry",
        //   pickups: "One p90",
        //   price: 5500,
        //   condition: 7,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01390_01390_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Standard",
        //   year: 1965,
        //   color: "Cherry",
        //   pickups: "Two PAF Humbuckers",
        //   price: 30500,
        //   condition: 9,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00733_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Custom",
        //   year: 1966,
        //   color: "White",
        //   pickups: "Three PAF Humbuckers",
        //   price: 45500,
        //   condition: 9,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00953_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Special",
        //   year: 1966,
        //   color: "Cherry",
        //   pickups: "Two P90s",
        //   price: 20000,
        //   condition: 9,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00950_front.jpg"
        // },
        // {
        //   make: "Gretsch",
        //   model: "Astro Jet",
        //   year: 1966,
        //   color: "Red",
        //   pickups: "Two SuperTrons",
        //   price: 5000,
        //   condition: 8,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01771_front_detail.jpg"
        // },
        // {
        //   make: "Gretsch",
        //   model: "6128 Duo Jet",
        //   year: 1966,
        //   color: "Black/Natural",
        //   pickups: "Two FilterTrons",
        //   price: 1715,
        //   condition: 9,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01794_front1.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Firebird Non-Reverse III",
        //   year: 1967,
        //   color: "White",
        //   pickups: "Three P90s",
        //   price: 12000,
        //   condition: 8,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01611_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Special",
        //   year: 1967,
        //   color: "Cherry",
        //   pickups: "Two P90s",
        //   price: 7500,
        //   condition: 8,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01143_front.jpg"
        // }
        // ,
        // {
        //   make: "Gretsch",
        //   model: "6120 Chet Atkins",
        //   year: 1967,
        //   color: "Orange",
        //   pickups: "Two FilterTrons",
        //   price: 13500,
        //   condition: 8,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01485_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Firebird Non-Reverse I",
        //   year: 1968,
        //   color: "Sunburst",
        //   pickups: "Two P90s",
        //   price: 7550,
        //   condition: 9,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01309_01309_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Custom",
        //   year: 1969,
        //   color: "Black Beauty",
        //   pickups: "Two T-Top Humbuckers",
        //   price: 11500,
        //   condition: 8,
        //   location_id: 3,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01545_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Standard",
        //   year: 1969,
        //   color: "Gold Top",
        //   pickups: "Two P90s",
        //   price: 9500,
        //   condition: 9,
        //   location_id: 3,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01395_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Custom",
        //   year: 1970,
        //   color: "Black",
        //   pickups: "Two T-Top Humbuckers",
        //   price: 10500,
        //   condition: 8,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01398_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Deluxe",
        //   year: 1970,
        //   color: "Gold Top",
        //   pickups: "Two Mini Humbuckers",
        //   price: 7500,
        //   condition: 8,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01038_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Custoom",
        //   year: 1970,
        //   color: "Brown",
        //   pickups: "Two Low-Impedance Humbuckers",
        //   price: 6500,
        //   condition: 9,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01453_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "SG Standard",
        //   year: 1971,
        //   color: "Cherry",
        //   pickups: "Two T-Top Humbuckers",
        //   price: 8000,
        //   condition: 8,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/02082_front%20copy.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Deluxe",
        //   year: 1972,
        //   color: "Gold Top",
        //   pickups: "Two Mini Humbuckers",
        //   price: 7000,
        //   condition: 8,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01652_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Deluxe",
        //   year: 1973,
        //   color: "Tobacco Sunburst",
        //   pickups: "Two Mini Humbuckers",
        //   price: 7350,
        //   condition: 3,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01086_front.jpg"
        // },
        // {
        //   make: "Gretsch",
        //   model: "White Falcon",
        //   year: 1973,
        //   color: "White",
        //   pickups: "Two BlackTop FilterTrons",
        //   price: 12500,
        //   condition: 9,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01092_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Custom",
        //   year: 1974,
        //   color: "Black Beauty",
        //   pickups: "Two T-Top Humbuckers",
        //   price: 8500,
        //   condition: 8,
        //   location_id: 1,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01123_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Double Neck",
        //   year: 1975,
        //   color: "Brown",
        //   pickups: "Four T-Top Humbuckers",
        //   price: 12500,
        //   condition: 9,
        //   location_id: 2,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00916_00916_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Double Neck",
        //   year: 1975,
        //   color: "White",
        //   pickups: "Four T-Top Humbuckers",
        //   price: 15000,
        //   condition: 9,
        //   location_id: 3,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00915_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Custom",
        //   year: 1976,
        //   color: "Natural",
        //   pickups: "Two T-Top Humbuckers",
        //   price: 9500,
        //   condition: 9,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00707_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Firebird 76 Reverse",
        //   year: 1976,
        //   color: "Ebony",
        //   pickups: "Two Mini Humbuckers",
        //   price: 5850,
        //   condition: 9,
        //   location_id: 5,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/02000_front%20copy.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Deluxe",
        //   year: 1976,
        //   color: "Gold Top",
        //   pickups: "Two Mini Humbuckers",
        //   price: 7000,
        //   condition: 9,
        //   location_id: 3,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01039_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Artisan",
        //   year: 1977,
        //   color: "Dark Walnut",
        //   pickups: "Three T-Top Humbuckers",
        //   price: 9500,
        //   condition: 9500,
        //   location_id: 4,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/00708_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Les Paul Custom",
        //   year: 1977,
        //   color: "Black/Maple Fretboard",
        //   pickups: "Two T-Top Humuckers",
        //   price: 9000,
        //   condition: 9,
        //   location_id: 3,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01819_front.jpg"
        // },
        // {
        //   make: "Gibson",
        //   model: "Double Neck",
        //   year: 1978,
        //   color: "Walnut",
        //   pickups: "Four T-Top Humbuckers",
        //   price: 11500,
        //   condition: 9,
        //   location_id: 3,
        //   image:
        //     "https://www.frettedamericana.com/sites/default/files/01338_front.jpg"
        // }
      ]
      );
    });
};