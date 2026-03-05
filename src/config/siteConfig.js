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
        overallRating: 5.0, // 5.0 (3 reviews) on Yelp :contentReference[oaicite:1]{index=1}
        reviewCount: 3,
        items: [
            {
                name: "Ryan K.",
                date: "Jul 10, 2025",
                text: "“Awesome place, kids had a blast, and reasonably priced! Owner is a super nice guy! We went twice in one day!”",
            }, // :contentReference[oaicite:2]{index=2}
            {
                name: "Josh W.",
                date: "Aug 18, 2019",
                text: "“The can am dirt track was my boys’ favorite part of our trip… very patient and welcoming.”",
            }, // :contentReference[oaicite:3]{index=3}
            {
                name: "Jennifer B.",
                date: "Sep 21, 2017",
                text: "“We had so much fun! Fast karts, great service, excellent price.”",
            }, // :contentReference[oaicite:4]{index=4}
        ],
    },
};