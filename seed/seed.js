const itemSeed = [
    {
        product: "LEGO City Advent Calendar",
        seller: "LEGO",
        price: "29.99",
        description: "Build 24 different presents, including vehicles, minifigures and seasonal items with this fun advent calendar with toys",
        photoLink: "./assets/1",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "Fire TV Stick with Alexa Voice Remote",
        seller: "Amazon",
        price: "39.99",
        description: "Enjoy tens of thousands of channels, apps, and Alexa skills with access to over 500,000 movies and TV episodes.",
        photoLink: "./assets/2",
        categories: ["Electronics"],
        stock: "0"
    },
    {
        product: "Fujifilm INSTAX Mini Instant Film Twin Pack",
        seller: "FujiFilm",
        price: "20.75",
        description: "Designed for use with Instax Mini line of cameras. Works well in low light",
        photoLink: "./assets/3",
        categories: ["Photo"],
        stock: "0"
    },
    {
        product: "Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision",
        seller: "Wyze Labs",
        price: "27.98",
        description: "1080p full HD live stream direct to your smartphone day or night with night vision (up to 30 feet away).",
        photoLink: "./assets/4",
        categories: ["Photo", "Electronics"],
        stock: "0"
    },
    {
        product: "Red Dead Redemption 2",
        seller: "Rockstar Games",
        price: "59.99",
        description: "Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland.",
        photoLink: "./assets/5",
        categories: ["Video Games", "Electronics"],
        stock: "0"
    },
    {
        product: "VTech Touch and Learn Activity Desk Deluxe",
        seller: "Vtech",
        price: "44.99",
        description: "The Touch and learn activity desk deluxe is an interactive desk and includes five activity pages to explore that are filled with engaging content",
        photoLink: "./assets/6",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "Ring Wi-Fi Enabled Video Doorbell",
        seller: "Ring",
        price: "99.99",
        description: "Stay connected to home with motion-activated alerts, HD video and two-way talk from Ring Video Doorbell. Get alerts on your phone, tablet and PC when anyone comes to your door, so you can see, hear and speak to visitors from anywhere.",
        photoLink: "./assets/7",
        categories: ["Photo", "Electronics"],
        stock: "0"
    },
    {
        product: "Samsung UN55NU8000FXZA FLAT 55” 4K UHD 8 Series Smart TV 2018",
        seller: "Samsung",
        price: "847.99",
        description: "Loaded with features, the NU8000 has advanced smart browsing with voice control, which finds your shows easily. Stunning depth of HDR plus more colors than HDTVs create a breathtaking 4K picture.",
        photoLink: "./assets/8",
        categories: ["Electronics"],
        stock: "0"
    },
    {
        product: "Nintendo Switch – Neon Red and Neon Blue Joy-Con",
        seller: "Nintendo",
        price: "299.00",
        description: "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.",
        photoLink: "./assets/9",
        categories: ["Video Games", "Electronics"],
        stock: "0"
    },
    {
        product: "Crayola Silly Scents Sticker Maker, Gift for Kids, Ages 6, 7, 8, 9",
        seller: "Crayola",
        price: "19.95",
        description: "The Silly Scents Sticker Set Includes: Sticker Maker, 10 Line Art Sheets, 20 Adhesive Sheets, 6 Silly Scents Mini Markers, 3 Scent Sticks, and Instructions",
        photoLink: "./assets/10",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "NBA 2K19",
        seller: "2K",
        price: "39.99",
        description: "NBA 2K celebrates 20 years of redefining what sports gaming can be, from best in class gameplay to groundbreaking game modes and an immersive open-world 'Neighborhood.' NBA 2K19 continues to push limits as it brings gaming one step closer to real-life basketball excitement and culture.",
        photoLink: "./assets/11",
        categories: ["Electronics", "Video Games"],
        stock: "0"
    },
    {
        product: "NIX X08G Advance 8 inch Widescreen Hi-Res Digital Photo & HD Video Frame with Hu-Motion Sensor, Black",
        seller: "NIX",
        price: "79.99",
        description: "Designed to keep all your precious memories in one place.NIX Advance frames allow you to play HD videos and photos in the same Slideshow. 720p HD Video Formats: MP4 (H.264 HD 720p AAC).Fast processor: View thousands of photos and videos from your inserted USB stick or SD/SDHC card.",
        photoLink: "./assets/12",
        categories: ["Photo", "Electronics"],
        stock: "0"
    },
    {
        product: "Epson Perfection V600 Color Photo, Image, Film, Negative & Document Scanner - Corded",
        seller: "Epson",
        price: "189.98",
        description: "Epson Perfection V600 Color Photo, Image, Film, Negative & Document Scanner - Corded. Create extraordinary enlargements from film — 6400 x 9600 dpi for enlargements up to 17 x 22. Scan slides, negatives and medium-format panoramic film — built-in Transparency Unit. ",
        photoLink: "./assets/13",
        categories: ["Photo", "Electronics"],
        stock: "0"
    },
    {
        product: "Disney/Pixar Cars Transforming Super Track Mack Playset",
        seller: "Matchbox",
        price: "79.95",
        description: "Disney/Pixar's Cars Mega Mack transforming truck. 2 exciting ways to play: as a push around truck and a racetrack. A launcher starts the action and the course is banked for extra challenge. Lights and sounds add realistic affects",
        photoLink: "./assets/14",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "Anki Cozmo, A Fun, Educational Toy Robot for Kids",
        seller: "Anki",
        price: "179.00",
        description: "Cozmo’s a supercomputer and loyal sidekick all at once. Thanks to artificial intelligence, Cozmo can express hundreds of emotions. From curious to clever, persistent to playful, he has personality x 10. He knows your name, face, and quirks. And best of all, he continues to evolve the more you hang out.",
        photoLink: "./assets/15",
        categories: ["Toys", "Electronics"],
        stock: "0"
    },
    {
        product: "Pokémon: Let’s Go, Pikachu! + Poké Ball Plus Pack",
        seller: "Nintendo",
        price: "99.99",
        description: "Take your favorite Pokémon out for a stroll in Poké Ball Plus. Share your adventure with family or friends in 2-player action using a second Joy-Con or Poké Ball Plus (sold separately). Every accessory contains the Mythical Pokémon Mew!** You can even connect to the Pokémon GO app* using a compatible smartphone to bring over Pokémon originally discovered in the Kanto region!",
        photoLink: "./assets/16",
        categories: ["Video Games", "Electronics"],
        stock: "0"
    },
    {
        product: "Overkill's The Walking Dead - PlayStation 4",
        seller: "505 Games",
        price: "59.99",
        description: "Overkill's the Walking Dead is all about tension and fear. Actions have consequences and every sound you make risk pulling the horde closer. Sometimes a knife is better than a gun.",
        photoLink: "./assets/17",
        categories: ["Video Games", "Electronics"],
        stock: "0"
    },
    {
        product: "Anki Cozmo, A Fun, Educational Toy Robot for Kids",
        seller: "Anki",
        price: "179.00",
        description: "Cozmo’s a supercomputer and loyal sidekick all at once. Thanks to artificial intelligence, Cozmo can express hundreds of emotions. From curious to clever, persistent to playful, he has personality x 10. He knows your name, face, and quirks. And best of all, he continues to evolve the more you hang out.",
        photoLink: "./assets/18",
        categories: ["Toys", "Electronics"],
        stock: "0"
    },
    {
        product: "WolVol Transport Car Carrier Truck Toy for Boys and Girls (includes 6 cars and 28 slots)",
        seller: "WolVol",
        price: "28.94",
        description: "20'' Long Truck, includes 6 semi metal cars and has space to carry up to 28 cars",
        photoLink: "./assets/19",
        categories: ["Toys"],
        stock: "0"
    },
    {
        product: "ASUS VivoBook S Thin & Light Laptop, 14 inch FHD, Intel Core i7-8550U, 8GB RAM, 256GB SSD, GeForce MX150, NanoEdge Display, Backlit Kbd, FP Sensor - S410UN-NS74",
        seller: "ASUS",
        price: "799.00",
        description: "ASUS VivoBook S Thin & Light Laptop, 14 inch FHD, Intel Core i7-8550U, 8GB RAM, 256GB SSD, GeForce MX150, NanoEdge Display, Backlit Kbd, FP Sensor - S410UN-NS74",
        photoLink: "./assets/20",
        categories: ["Electronics"],
        stock: "0"
    },
];

module.exports = itemSeed;