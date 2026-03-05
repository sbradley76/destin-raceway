const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\/+/, "")}`;

export const siteConfig = {
    name: "Destin Raceway",
    // Yelp currently lists this location/phone under “Naskart Raceway”
    altNameNote: "Also known as Naskart Raceway",

    phoneDisplay: "(850) 269-2999",
    phoneRaw: "+18502692999",

    addressLine1: "26000 Emerald Coast Pkwy",
    addressLine2: "Destin, FL 32541",

    yelpUrl: "https://www.yelp.com/biz/naskart-raceway-destin",
    directionsUrl:
        "https://www.google.com/maps?daddr=26000+Emerald+Coast+Pkwy,+Destin,+FL+32541",

    // Public assets (GitHub Pages-safe via BASE_URL)
    media: {
        heroVideo: asset("images/DuneBuggies_1.mp4"),
        heroPoster: asset("images/gallery/hero.webp"),

        duneCard: asset("images/gallery/3.webp"),
        nascartCard: asset("images/gallery/2.webp"),
        expect: asset("images/gallery/3.webp"),

        gallery: [
            asset("images/gallery/1.webp"),
            asset("images/gallery/2.webp"),
            asset("images/gallery/3.webp"),
            asset("images/gallery/4.webp"),
        ],
    },

    experiences: [
        {
            title: "Dune Buggies (Oval Track)",
            laps: "10 laps",
            highlights: [
                "Kids can ride with supervision",
                "Adults: no racing — safe driving only",
                "Seatbelts required",
            ],
        },
        {
            title: "Nascarts (Paved Track)",
            laps: "20 laps",
            highlights: [
                "Kids can ride with supervision",
                "Teens/adults: friendly competition",
                "No excessive bumping / aggressive driving",
                "Seatbelts required",
            ],
        },
    ],

    reviews: {
        sourceName: "Yelp",
        sourceUrl: "https://www.yelp.com/biz/naskart-raceway-destin",
        overallRating: 5.0,
        reviewCount: 3,
        items: [
            {
                name: "Ryan K.",
                date: "Jul 10, 2025",
                text: "“Awesome place, kids had a blast, and reasonably priced! Owner is a super nice guy! We went twice in one day!”",
            },
            {
                name: "Josh W.",
                date: "Aug 18, 2019",
                text: "“The can am dirt track was my boys’ favorite part of our trip… very patient and welcoming.”",
            },
            {
                name: "Jennifer B.",
                date: "Sep 21, 2017",
                text: "“We had so much fun! Fast karts, great service, excellent price.”",
            },
        ],
    },
};
