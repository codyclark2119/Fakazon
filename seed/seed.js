const itemSeed = [
    {
        product: "LEGO City Advent Calendar",
        seller: "LEGO",
        price: "29.99",
        description: "Build 24 different presents, including vehicles, minifigures and seasonal items with this fun advent calendar with toys",
        photoLink: "/static/photos/1.jpg",
        categories: ["Toys", "Lego", "Creative"],
        stock: "0"
    },
    {
        product: "Fire TV Stick with Alexa Voice Remote",
        seller: "Amazon",
        price: "39.99",
        description: "Enjoy tens of thousands of channels, apps, and Alexa skills with access to over 500,000 movies and TV episodes.",
        photoLink: "/static/photos/2.jpg",
        categories: ["Electronics", "Television"],
        stock: "0"
    },
    {
        product: "Fujifilm INSTAX Mini Instant Film Twin Pack",
        seller: "FujiFilm",
        price: "20.75",
        description: "Designed for use with Instax Mini line of cameras. Works well in low light",
        photoLink: "static/photos/3.jpg",
        categories: ["Photo"],
        stock: "0"
    },
    {
        product: "Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision",
        seller: "Wyze Labs",
        price: "27.98",
        description: "1080p full HD live stream direct to your smartphone day or night with night vision (up to 30 feet away).",
        photoLink: "static/photos/4.jpg",
        categories: ["Photo", "Electronics", "Home"],
        stock: "0"
    },
    {
        product: "Red Dead Redemption 2",
        seller: "Rockstar Games",
        price: "59.99",
        description: "Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland.",
        photoLink: "static/photos/5.jpg",
        categories: ["Video Games", "Electronics", "Playstation"],
        stock: "0"
    },
    {
        product: "VTech Touch and Learn Activity Desk Deluxe",
        seller: "Vtech",
        price: "44.99",
        description: "The Touch and learn activity desk deluxe is an interactive desk and includes five activity pages to explore that are filled with engaging content",
        photoLink: "static/photos/6.jpg",
        categories: ["Toys", "Kids"],
        stock: "0"
    },
    {
        product: "Ring Wi-Fi Enabled Video Doorbell",
        seller: "Ring",
        price: "99.99",
        description: "Stay connected to home with motion-activated alerts, HD video and two-way talk from Ring Video Doorbell. Get alerts on your phone, tablet and PC when anyone comes to your door, so you can see, hear and speak to visitors from anywhere.",
        photoLink: "static/photos/7.jpg",
        categories: ["Photo", "Electronics", "Home"],
        stock: "0"
    },
    {
        product: "Samsung FLAT 55” 4K UHD 8 Series Smart TV 2018",
        seller: "Samsung",
        price: "847.99",
        description: "Loaded with features, the NU8000 has advanced smart browsing with voice control, which finds your shows easily. Stunning depth of HDR plus more colors than HDTVs create a breathtaking 4K picture.",
        photoLink: "static/photos/8.jpg",
        categories: ["Electronics", "Television"],
        stock: "0"
    },
    {
        product: "Nintendo Switch – Neon Red and Neon Blue Joy-Con",
        seller: "Nintendo",
        price: "299.00",
        description: "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.",
        photoLink: "static/photos/9.jpg",
        categories: ["Video Games", "Electronics", "Nintendo"],
        stock: "0"
    },
    {
        product: "Crayola Silly Scents Sticker Maker",
        seller: "Crayola",
        price: "19.95",
        description: "The Silly Scents Sticker Set Includes: Sticker Maker, 10 Line Art Sheets, 20 Adhesive Sheets, 6 Silly Scents Mini Markers, 3 Scent Sticks, and Instructions",
        photoLink: "static/photos/10.jpg",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "NBA 2K19",
        seller: "2K",
        price: "39.99",
        description: "NBA 2K celebrates 20 years of redefining what sports gaming can be, from best in class gameplay to groundbreaking game modes and an immersive open-world 'Neighborhood.' NBA 2K19 continues to push limits as it brings gaming one step closer to real-life basketball excitement and culture.",
        photoLink: "static/photos/11.jpg",
        categories: ["Electronics", "Video Games", "Playstation"],
        stock: "0"
    },
    {
        product: "NIX X08G Advance 8 inch Widescreen Sensor, Black",
        seller: "NIX",
        price: "79.99",
        description: "Designed to keep all your precious memories in one place. NIX Advance frames allow you to play HD videos and photos in the same Slideshow. 720p HD Video Formats: MP4 (H.264 HD 720p AAC).Fast processor: View thousands of photos and videos from your inserted USB stick or SD/SDHC card.",
        photoLink: "static/photos/12.jpg",
        categories: ["Photo", "Electronics"],
        stock: "0"
    },
    {
        product: "Epson Perfection V600 Scanner",
        seller: "Epson",
        price: "189.98",
        description: "Epson Perfection V600 Color Photo, Image, Film, Negative & Document Scanner - Corded. Create extraordinary enlargements from film — 6400 x 9600 dpi for enlargements up to 17 x 22. Scan slides, negatives and medium-format panoramic film — built-in Transparency Unit. ",
        photoLink: "static/photos/13.jpg",
        categories: ["Photo", "Electronics", "Computer"],
        stock: "0"
    },
    {
        product: "Disney/Pixar Cars Transforming Super Track Mack Playset",
        seller: "Matchbox",
        price: "79.95",
        description: "Disney/Pixar's Cars Mega Mack transforming truck. 2 exciting ways to play: as a push around truck and a racetrack. A launcher starts the action and the course is banked for extra challenge. Lights and sounds add realistic affects",
        photoLink: "static/photos/14.jpg",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "Anki Cozmo, A Fun, Educational Toy Robot for Kids",
        seller: "Anki",
        price: "179.00",
        description: "Cozmo’s a supercomputer and loyal sidekick all at once. Thanks to artificial intelligence, Cozmo can express hundreds of emotions. From curious to clever, persistent to playful, he has personality x 10. He knows your name, face, and quirks. And best of all, he continues to evolve the more you hang out.",
        photoLink: "static/photos/15.jpg",
        categories: ["Toys", "Electronics"],
        stock: "0"
    },
    {
        product: "Pokémon: Let’s Go, Pikachu! + Poké Ball Plus Pack",
        seller: "Nintendo",
        price: "99.99",
        description: "Take your favorite Pokémon out for a stroll in Poké Ball Plus. Share your adventure with family or friends in 2-player action using a second Joy-Con or Poké Ball Plus (sold separately). Every accessory contains the Mythical Pokémon Mew!** You can even connect to the Pokémon GO app* using a compatible smartphone to bring over Pokémon originally discovered in the Kanto region!",
        photoLink: "static/photos/16.jpg",
        categories: ["Video Games", "Electronics", "Nintendo"],
        stock: "0"
    },
    {
        product: "Overkill's The Walking Dead",
        seller: "505 Games",
        price: "59.99",
        description: "Overkill's the Walking Dead is all about tension and fear. Actions have consequences and every sound you make risk pulling the horde closer. Sometimes a knife is better than a gun.",
        photoLink: "static/photos/17.jpg",
        categories: ["Video Games", "Electronics", "Playstation"],
        stock: "0"
    },
    {
        product: "WolVol Transport Car Carrier Truck",
        seller: "WolVol",
        price: "28.94",
        description: "20'' Long Truck, includes 6 semi metal cars and has space to carry up to 28 cars",
        photoLink: "static/photos/18.jpg",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "ASUS VivoBook S Thin & Light Laptop",
        seller: "ASUS",
        price: "799.00",
        description: "ASUS VivoBook S Thin & Light Laptop, 14 inch FHD, Intel Core i7-8550U, 8GB RAM, 256GB SSD, GeForce MX150, NanoEdge Display, Backlit Kbd, FP Sensor - S410UN-NS74",
        photoLink: "static/photos/19.jpg",
        categories: ["Electronics", "Computer"],
        stock: "0"
    },
    {
        product: "Fintie Carry Case for Nintendo Switch",
        seller: "Fintie",
        price: "10.39",
        description: "Designed to make your Nintendo Switch console and accessories more portable & travel-friendly. This carrying case fits Switch Console with both Joy-Con attached on.",
        photoLink: "static/photos/20.jpg",
        categories: ["Video Games", "Nintendo"],
        stock: "0"
    },
    {
        product: "MY HERO One’s Justice",
        seller: "Bandai Namco",
        price: "49.95",
        description: "PLUS ULTRA! - Based on the hit weekly Shonen Jump manga series HEROES OR VILLAINS - Choose between fan favorite characters like Deku, All Might, Tomura, and many more in your path to justice",
        photoLink: "static/photos/21.jpg",
        categories: ["Video Games", "Xbox"],
        stock: "0"
    },
    {
        product: "Super Smash Bros. Ultimate",
        seller: "Nintendo",
        price: "59.95",
        description: "Challenge others anytime, anywhere, whether you’re on the couch or on the go. Play any way you want—locally, online, in TV mode, Tabletop mode, Handheld mode, or even with GameCube Controllers",
        photoLink: "static/photos/22.jpg",
        categories: ["Video Games", "Nintendo"],
        stock: "0"
    },
    {
        product: "Portal from Facebook. Hands-Free Video Calling with Alexa Built-in",
        seller: "Facebook",
        price: "99.95",
        description: "Move and talk freely with Smart Camera: With Smart Camera, you don’t have to worry about being out of frame. Whether you’re moving around the kitchen, prepping dinner or chasing the kids through the living room, Smart Camera adjusts to follow the action. And as more people enter a room, Smart Camera automatically widens to keep everyone in view, so you don’t miss a moment",
        photoLink: "static/photos/23.jpg",
        categories: ["Electronics", "Home", "Photo"],
        stock: "0"
    },
    {
        product: "DubeeBaby Yoga Socks, Women’s Non Slip Anti-Skid Pilate Grip Socks",
        seller: "DubeeBaby",
        price: "10.95",
        description: "3D Gel dots on the sole of the bottom,shock absorption, cushioning and stability.it is very easy to grip and keep people safety when do the yoga or pilates while traveling, at the studio, or at home.Extends fully from heel to toe, giving you enhanced balance and stability.",
        photoLink: "static/photos/24.jpg",
        categories: ["Clothes", "Home"],
        stock: "0"
    },
    {
        product: "G4Free Wooden Hook Handle Classic Golf Umbrella",
        seller: "G4Free",
        price: "15.39",
        description: "Windproof Auto Open 52 inch Large Oversized Double Canopy Vented Rainproof Cane Stick Umbrellas. Suitable for golf course, daily commuting, luxury hotel and so on; Strong business style make you look smart and wise.",
        photoLink: "static/photos/25.jpg",
        categories: ["Outdoors", "Home"],
        stock: "0"
    },
    {
        product: "Celestron PowerSeeker 127EQ Telescope",
        seller: "Celestron",
        price: "199.95",
        description: "1000mm Focal Length. Fully coated glass optical components with high transmission coatings for enhanced image brightness and clarity. Comes with aluminum tripod and accessory tray.Focal Length of Eyepiece 1 (mm) 20 mm (0.79 in).Focal Length of Eyepiece 2 (mm) 4 mm (0.16 in)",
        photoLink: "static/photos/26.jpg",
        categories: ["Outdoors", "Home"],
        stock: "0"
    },
    {
        product: "NIVEA Men Sensitive Post Shave Balm 3.3 Fluid Ounce",
        seller: "NIVEA",
        price: "10.17",
        description: "(Pack of 3) The improved extra gentle formula was specially developed for men with sensitive skin. It’s very gentle and enriched with Vitamin E and natural, soothing Chamomile and Witch Hazel extracts. It leaves skin looking healthy and cared for and feeling comfortable and smooth.",
        photoLink: "static/photos/27.jpg",
        categories: ["Home", "Beauty"],
        stock: "0"
    },
    {
        product: "Physicians Formula Murumuru Butter Bronzer",
        seller: "Physicians Formula",
        price: "5.95",
        description: "Ultra-luxurious bronzer, infused with Murumuru Butter, delivers a radiant Brazilian goddess glow! Incredibly creamy and soft texture combines the best features of a powder and cream bronzer, to deliver a lit-from-within tropical glow unlike any other.",
        photoLink: "static/photos/28.jpg",
        categories: ["Beauty", "Home"],
        stock: "0"
    },
    {
        product: "Lip Smacker Disney Tsum Tsum Balms, Mickey Marshmallow Pop",
        seller: "Lip Smacker",
        price: "3.46",
        description: "Dome shaped balms feature a soft topper cap that doubles as a collectible toy! Each character has their own unique flavor - collect and stack them all to create a tower of cuteness!",
        photoLink: "static/photos/29.jpg",
        categories: ["Beauty", "Home", "Disney"],
        stock: "0"
    },
    {
        product: "Lagunamoon Essential Oils Top 6 Gift Set Pure Essential Oils",
        seller: "Lagunamoon",
        price: "11.95",
        description: "Each diffuser oil flavor carries its own unique properties. Our essential oil kits for beginners are Pure essential oils are easy to mix and match for blending or dilution purposes. The Essential Oil Sets are perfectly suitable gifts for any season.",
        photoLink: "static/photos/30.jpg",
        categories: ["Outdoors", "Home", "Beauty"],
        stock: "0"
    },
    {
        product: "Back to the Future: The Complete Adventures",
        seller: "Universal Pictures",
        price: "35.95",
        description: "Great Scott! Back to the Future: The Complete Adventures pairs together the original beloved trilogy starring Michael J. Fox and Christopher Lloyd along with the complete TV series. Join Marty McFly, Doc Brown and a time traveling DeLorean for the adventure of a lifetime as they travel to the past, present and future, setting off a time-shattering chain reaction that disrupts the space-time continuum!",
        photoLink: "static/photos/31.jpg",
        categories: ["Movies", "Electronics", "Blu-Ray"],
        stock: "0"
    },
    {
        product: "Indiana Jones: The Complete Adventures",
        seller: "Universal Pictures",
        price: "34.99",
        description: "Own all four Indiana Jones adventures in this Blu-ray collection.  This collection includes: Indiana Jones and the Raiders of the Lost Ark, Indiana Jones and the Temple of Doom, Indiana Jones and the Last Crusade, and Indiana Jones and the Kingdom of the Crystal Skull.",
        photoLink: "static/photos/32.jpg",
        categories: ["Movies", "Electronics", "Blu-Ray"],
        stock: "0"
    },
    {
        product: "Cowboy Bebop: The Complete Series",
        seller: "YUTAKA MASEBA",
        price: "39.99",
        description: "Explore the far reaches of the galaxy in this undeniably hip series that inspired a generation – and redefined anime as an indisputable art form. See You Space Cowboy....",
        photoLink: "static/photos/33.jpg",
        categories: ["Movies", "Electronics", "Blu-Ray"],
        stock: "0"
    },
    {
        product: "LEGO Classic Medium Creative Brick Box 10696",
        seller: "LEGO",
        price: "27.99",
        description: "Build your own vehicles and much more with this classic collection of LEGO bricks in 35 different colors",
        photoLink: "static/photos/34.jpg",
        categories: ["Toys", "Kids", "Creative"],
        stock: "0"
    },
    {
        product: "LEGO Marvel Super Heroes Avengers: Infinity War Sanctum Sanctorum Showdown",
        seller: "LEGO",
        price: "82.99",
        description: "Build a 3-level New York City building including the Sanctum Sanctorum with an Infinity Stone, pizzeria with fire extinguisher, Peter Parker’s apartment, window exploder functions and water tower",
        photoLink: "static/photos/35.jpg",
        categories: ["Toys", "Kids", "Creative"],
        stock: "0"
    },    {
        product: "RockBirds 22 Inch Cruiser Skateboard Complete Plastic Banana Board for Youths",
        seller: "RockBirds",
        price: "29.99",
        description: "Fit for everyone: with CE certification, this well-built skateboard is safe to ride and suitable for any level of riders, no matter whether you’re a beginner or experienced rider",
        photoLink: "static/photos/36.jpg",
        categories: ["Toys", "Kids", "Outdoors"],
        stock: "0"
    },    {
        product: "PORTER-CABLE PC1500HG 1500-Watt Heat Gun",
        seller: "Porter-Cable",
        price: "19.99",
        description: "The Porter-Cable PC1500HG Heat Gun has a dual fan speed selector that delivers high and low fan speed settings. The variable temperature control dial allows for easy adjustment of temperatures. It has an integrated hands free support stand that allows the gun to sit upright for hands free use.",
        photoLink: "static/photos/37.jpg",
        categories: ["Tools", "Outdoors", "Adult"],
        stock: "0"
    },    {
        product: "PORTER-CABLE PCC795B 20V MAX Wet/Dry Vacuum, 2 gallon",
        seller: "Porter-Cable",
        price: "79.99",
        description: "The PORTER-CABLE PCC795B 20V MAX* 2-Gallon Wet/Dry Vacuum features powerful suction for quick clean ups. It offers a portable 2-gallon tank with wet/dry versatility, which allows you to use it for the usual dry clean up and can also pick up wet messes.",
        photoLink: "static/photos/38.jpg",
        categories: ["Tools", "Outdoors", "Adult", "Cleaning"],
        stock: "0"
    },
    {
        product: "Rabing RC Car Electric Rock Crawler Vehicle",
        seller: "Rabing",
        price: "68.99",
        description: "High-quality materials and the special protection design make the car more crashproof and more resistant to shock. Make it much Super reliable and safe. With independent shockproof system, It can prevent damages caused by the vibration effectively.",
        photoLink: "static/photos/39.jpg",
        categories: ["Toys", "Kids", "Outdoors", "Remote Control"],
        stock: "0"
    },
    {
        product: "SOLARMKS 20 LED Romote Control Solar Flood Lights, Black",
        seller: "Solarmks",
        price: "32.99",
        description: "Build your own vehicles and much more with this classic collection of LEGO bricks in 35 different colors",
        photoLink: "static/photos/40.jpg",
        categories: ["Outdoors", "Tools", "Home"],
        stock: "0"
    },
];

module.exports = itemSeed;