// default currency is USD
const redux = require("redux");
const Product = [
/*---product data---*/
/* category Featured*/
{
    id: "FEA01",
    name: "Featured Beauty Women Clothing White",
    category: "Featured",
    price: 410,
    sale__off: "20%",
    best__sell: false,
    main__image: require("../Assets/images/products/Featured/Featured Beauty Women Clothing White/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing White/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing White/side1.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing White/side2.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing White/side3.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing White/side4.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing White/side5.jpg")
    ],
    color: ["white", "black", "red"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, Summer and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "FEA02",
    name: "Featured Black Sporting Leggings",
    category: "Featured",
    price: 195,
    sale__off: "30%",
    best__sell: false,
    main__image: require("../Assets/images/products/Featured/Featured Black Sporting Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured Black Sporting Leggings/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured Black Sporting Leggings/side1.jpg"),
        require("../Assets/images/products/Featured/Featured Black Sporting Leggings/side2.jpg"),
        require("../Assets/images/products/Featured/Featured Black Sporting Leggings/side3.jpg"),
        require("../Assets/images/products/Featured/Featured Black Sporting Leggings/side4.jpg"),
        require("../Assets/images/products/Featured/Featured Black Sporting Leggings/side5.jpg")
    ],
    color: ["white", "black", "orange" ],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "FEA03",
    name: "Featured Cool Women Casual",
    category: "Featured",
    price: 340,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Featured/Featured Cool Women Casual/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured Cool Women Casual/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured Cool Women Casual/side1.jpg"),
        require("../Assets/images/products/Featured/Featured Cool Women Casual/side2.jpg"),
        require("../Assets/images/products/Featured/Featured Cool Women Casual/side3.jpg"),
        require("../Assets/images/products/Featured/Featured Cool Women Casual/side4.jpg"),
        require("../Assets/images/products/Featured/Featured Cool Women Casual/side5.jpg")
    ],
    color: ["white", "black", "orange" ],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "FEA04",
    name: "Featured Fashion For Female High",
    category: "Featured",
    price: 200,
    sale__off: "20%",
    best__sell: false,
    main__image: require("../Assets/images/products/Featured/Featured Fashion For Female High/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured Fashion For Female High/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion For Female High/side1.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion For Female High/side2.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion For Female High/side3.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion For Female High/side4.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion For Female High/side5.jpg")
    ],
    color: ["red", "black", "orange" ],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "FEA05",
    name: "Featured Fashion Women Digital",
    category: "Featured",
    price: 270,
    sale__off: "30%",
    best__sell: true,
    main__image: require("../Assets/images/products/Featured/Featured Fashion Women Digital/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured Fashion Women Digital/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion Women Digital/side1.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion Women Digital/side2.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion Women Digital/side3.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion Women Digital/side4.jpg"),
        require("../Assets/images/products/Featured/Featured Fashion Women Digital/side5.jpg")
    ],
    color: ["white", "blue", "orange" ],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "FEA06",
    name: "Featured Women Print Fashion Low",
    category: "Featured",
    price: 240,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Featured/Featured Women Print Fashion Low/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured Women Print Fashion Low/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured Women Print Fashion Low/side1.jpg"),
        require("../Assets/images/products/Featured/Featured Women Print Fashion Low/side2.jpg"),
        require("../Assets/images/products/Featured/Featured Women Print Fashion Low/side3.jpg"),
        require("../Assets/images/products/Featured/Featured Women Print Fashion Low/side4.jpg"),
        require("../Assets/images/products/Featured/Featured Women Print Fashion Low/side5.jpg")
    ],
    color: ["white", "pink", "orange" ],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "FEA07",
    name: "Featured Beauty Women Clothing",
    category: "Featured",
    price: 225,
    sale__off: "30%",
    best__sell: false,
    main__image: require("../Assets/images/products/Featured/Featured Beauty Women Clothing/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing/side1.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing/side2.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing/side3.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing/side4.jpg"),
        require("../Assets/images/products/Featured/Featured Beauty Women Clothing/side5.jpg")
    ],
    color: ["white", "blue", "orange" ],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "FEA08",
    name: "Featured New Fashion Women Leggings",
    category: "Featured",
    price: 245,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Featured/Featured New Fashion Women Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Featured/Featured New Fashion Women Leggings/main/main.jpg"),
        require("../Assets/images/products/Featured/Featured New Fashion Women Leggings/side1.jpg"),
        require("../Assets/images/products/Featured/Featured New Fashion Women Leggings/side2.jpg"),
        require("../Assets/images/products/Featured/Featured New Fashion Women Leggings/side3.jpg"),
        require("../Assets/images/products/Featured/Featured New Fashion Women Leggings/side4.jpg"),
        require("../Assets/images/products/Featured/Featured New Fashion Women Leggings/side5.jpg")
    ],
    color: ["red", "blue", "orange" ],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
/* end category Featured*/
/* category Hot*/
{
    id: "HOT01",
    name: "Hot Beauty Women Clothing White",
    category: "Hot",
    price: 300,
    sale__off: "20%",
    best__sell: false,
    main__image: require("../Assets/images/products/Hot/Hot Beauty Women Clothing White/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing White/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing White/side1.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing White/side2.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing White/side3.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing White/side4.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing White/side5.jpg")
    ],
    color: ["white", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "HOT02",
    name: "Hot Black Sporting Leggings",
    category: "Hot",
    price: 290,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Hot/Hot Black Sporting Leggings/main/main.jpg"),
    slide__image: [
        
        require("../Assets/images/products/Hot/Hot Black Sporting Leggings/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot Black Sporting Leggings/side1.jpg"),
        require("../Assets/images/products/Hot/Hot Black Sporting Leggings/side2.jpg"),
        require("../Assets/images/products/Hot/Hot Black Sporting Leggings/side3.jpg"),
        require("../Assets/images/products/Hot/Hot Black Sporting Leggings/side4.jpg"),
        require("../Assets/images/products/Hot/Hot Black Sporting Leggings/side5.jpg")
    ],
    color: ["black", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "HOT03",
    name: "Hot Cool Women Casual",
    category: "Hot",
    price: 280,
    sale__off: "20%",
    best__sell: false,
    main__image: require("../Assets/images/products/Hot/Hot Cool Women Casual/main/main.jpg"),
    slide__image: [
        
        require("../Assets/images/products/Hot/Hot Cool Women Casual/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot Cool Women Casual/side1.jpg"),
        require("../Assets/images/products/Hot/Hot Cool Women Casual/side2.jpg"),
        require("../Assets/images/products/Hot/Hot Cool Women Casual/side3.jpg"),
        require("../Assets/images/products/Hot/Hot Cool Women Casual/side4.jpg"),
        require("../Assets/images/products/Hot/Hot Cool Women Casual/side5.jpg")
    ],
    color: ["black", "blue", "red"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "HOT04",
    name: "Hot Fashion For Female High",
    category: "Hot",
    price: 220,
    sale__off: false,
    best__sell: true,
    main__image: require("../Assets/images/products/Hot/Hot Fashion For Female High/main/main.jpg"),
    slide__image: [
        
        require("../Assets/images/products/Hot/Hot Fashion For Female High/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion For Female High/side1.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion For Female High/side2.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion For Female High/side3.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion For Female High/side4.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion For Female High/side5.jpg")
    ],
    color: ["white", "pink", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "HOT05",
    name: "Hot Fashion Women Digital",
    category: "Hot",
    price: 260,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Hot/Hot Fashion Women Digital/main/main.jpg"),
    slide__image: [
        
        require("../Assets/images/products/Hot/Hot Fashion Women Digital/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion Women Digital/side1.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion Women Digital/side2.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion Women Digital/side3.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion Women Digital/side4.jpg"),
        require("../Assets/images/products/Hot/Hot Fashion Women Digital/side5.jpg")
    ],
    color: ["black", "pink", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "HOT06",
    name: "Hot Women Print Fashion Low",
    category: "Hot",
    price: 250,
    sale__off: "25%",
    best__sell: false,
    main__image: require("../Assets/images/products/Hot/Hot Women Print Fashion Low/main/main.jpg"),
    slide__image: [
        
        require("../Assets/images/products/Hot/Hot Women Print Fashion Low/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot Women Print Fashion Low/side1.jpg"),
        require("../Assets/images/products/Hot/Hot Women Print Fashion Low/side2.jpg"),
        require("../Assets/images/products/Hot/Hot Women Print Fashion Low/side3.jpg"),
        require("../Assets/images/products/Hot/Hot Women Print Fashion Low/side4.jpg"),
        require("../Assets/images/products/Hot/Hot Women Print Fashion Low/side5.jpg")
    ],
    color: ["white", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "HOT07",
    name: "Hot Beauty Women Clothing",
    category: "Hot",
    price: 225,
    sale__off: "20%",
    best__sell: false,
    main__image: require("../Assets/images/products/Hot/Hot Beauty Women Clothing/main/main.jpg"),
    slide__image: [
        
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing/side1.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing/side2.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing/side3.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing/side4.jpg"),
        require("../Assets/images/products/Hot/Hot Beauty Women Clothing/side5.jpg")
    ],
    color: ["white", "pink", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "HOT08",
    name: "Hot New Fashion Women Leggings",
    category: "Hot",
    price: 245,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Hot/Hot New Fashion Women Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Hot/Hot New Fashion Women Leggings/main/main.jpg"),
        require("../Assets/images/products/Hot/Hot New Fashion Women Leggings/side1.jpg"),
        require("../Assets/images/products/Hot/Hot New Fashion Women Leggings/side2.jpg"),
        require("../Assets/images/products/Hot/Hot New Fashion Women Leggings/side3.jpg"),
        require("../Assets/images/products/Hot/Hot New Fashion Women Leggings/side4.jpg"),
        require("../Assets/images/products/Hot/Hot New Fashion Women Leggings/side5.jpg")
    ],
    color: "red",
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
/* end category Hot*/
/* category Latest*/
{
    id: "LAT01",
    name: "Latest Beauty Women Clothing White",
    category: "Latest",
    price: 395,
    sale__off: "40%",
    best__sell: false,
    main__image: require("../Assets/images/products/Latest/Latest Beauty Women Clothing White/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing White/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing White/side1.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing White/side2.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing White/side3.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing White/side4.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing White/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "LAT02",
    name: "Latest Black Sporting Leggings",
    category: "Latest",
    price: 385,
    sale__off: "15%",
    best__sell: true,
    main__image: require("../Assets/images/products/Latest/Latest Black Sporting Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Latest/Latest Black Sporting Leggings/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest Black Sporting Leggings/side1.jpg"),
        require("../Assets/images/products/Latest/Latest Black Sporting Leggings/side2.jpg"),
        require("../Assets/images/products/Latest/Latest Black Sporting Leggings/side3.jpg"),
        require("../Assets/images/products/Latest/Latest Black Sporting Leggings/side4.jpg"),
        require("../Assets/images/products/Latest/Latest Black Sporting Leggings/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "LAT03",
    name: "Latest Cool Women Casual",
    category: "Latest",
    price: 375,
    sale__off: "10%",
    best__sell: false,
    main__image: require("../Assets/images/products/Latest/Latest Cool Women Casual/main/main.jpg"),
    slide__image: [
        
        require("../Assets/images/products/Latest/Latest Cool Women Casual/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest Cool Women Casual/side1.jpg"),
        require("../Assets/images/products/Latest/Latest Cool Women Casual/side2.jpg"),
        require("../Assets/images/products/Latest/Latest Cool Women Casual/side3.jpg"),
        require("../Assets/images/products/Latest/Latest Cool Women Casual/side4.jpg"),
        require("../Assets/images/products/Latest/Latest Cool Women Casual/side5.jpg")
    ],
    color: ["orange", "blue", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "LAT04",
    name: "Latest Fashion For Female High",
    category: "Latest",
    price: 365,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Latest/Latest Fashion For Female High/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Latest/Latest Fashion For Female High/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion For Female High/side1.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion For Female High/side2.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion For Female High/side3.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion For Female High/side4.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion For Female High/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "LAT05",
    name: "Latest Fashion Women Digital",
    category: "Latest",
    price: 355,
    sale__off: "30%",
    best__sell: false,
    main__image: require("../Assets/images/products/Latest/Latest Fashion Women Digital/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Latest/Latest Fashion Women Digital/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion Women Digital/side1.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion Women Digital/side2.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion Women Digital/side3.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion Women Digital/side4.jpg"),
        require("../Assets/images/products/Latest/Latest Fashion Women Digital/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "LAT06",
    name: "Latest Women Print Fashion Low",
    category: "Latest",
    price: 345,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Latest/Latest Women Print Fashion Low/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Latest/Latest Women Print Fashion Low/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest Women Print Fashion Low/side1.jpg"),
        require("../Assets/images/products/Latest/Latest Women Print Fashion Low/side2.jpg"),
        require("../Assets/images/products/Latest/Latest Women Print Fashion Low/side3.jpg"),
        require("../Assets/images/products/Latest/Latest Women Print Fashion Low/side4.jpg"),
        require("../Assets/images/products/Latest/Latest Women Print Fashion Low/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "LAT07",
    name: "Latest Beauty Women Clothing",
    category: "Latest",
    price: 225,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Latest/Latest Beauty Women Clothing/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing/side1.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing/side2.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing/side3.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing/side4.jpg"),
        require("../Assets/images/products/Latest/Latest Beauty Women Clothing/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "LAT08",
    name: "Latest New Fashion Women Leggings",
    category: "Latest",
    price: 245,
    sale__off: "10%",
    best__sell: false,
    main__image: require("../Assets/images/products/Latest/Latest New Fashion Women Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Latest/Latest New Fashion Women Leggings/main/main.jpg"),
        require("../Assets/images/products/Latest/Latest New Fashion Women Leggings/side1.jpg"),
        require("../Assets/images/products/Latest/Latest New Fashion Women Leggings/side2.jpg"),
        require("../Assets/images/products/Latest/Latest New Fashion Women Leggings/side3.jpg"),
        require("../Assets/images/products/Latest/Latest New Fashion Women Leggings/side4.jpg"),
        require("../Assets/images/products/Latest/Latest New Fashion Women Leggings/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
/* end category Latest*/
/* category Minimal*/
{
    id: "MIN01",
    name: "Minimal Beauty Women Clothing White",
    category: "Minimal",
    price: 392,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing White/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing White/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing White/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing White/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing White/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing White/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing White/side5.jpg")
    ],
    color: ["white", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MIN02",
    name: "Minimal Black Sporting Leggings",
    category: "Minimal",
    price: 382,
    sale__off: "10%",
    best__sell: false,
    main__image: require("../Assets/images/products/Minimal/Minimal Black Sporting Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal Black Sporting Leggings/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal Black Sporting Leggings/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal Black Sporting Leggings/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal Black Sporting Leggings/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal Black Sporting Leggings/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal Black Sporting Leggings/side5.jpg")
    ],
    color: ["white", "blue", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MIN03",
    name: "Minimal Cool Women Casual",
    category: "Minimal",
    price: 372,
    sale__off: "20%",
    best__sell: true,
    main__image: require("../Assets/images/products/Minimal/Minimal Cool Women Casual/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal Cool Women Casual/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal Cool Women Casual/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal Cool Women Casual/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal Cool Women Casual/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal Cool Women Casual/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal Cool Women Casual/side5.jpg")
    ],
    color: ["white", "black", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MIN04",
    name: "Minimal Fashion For Female High",
    category: "Minimal",
    price: 362,
    sale__off: "20%",
    best__sell: false,
    main__image: require("../Assets/images/products/Minimal/Minimal Fashion For Female High/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal Fashion For Female High/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion For Female High/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion For Female High/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion For Female High/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion For Female High/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion For Female High/side5.jpg")
    ],
    color: ["white", "red", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MIN05",
    name: "Minimal Fashion Women Digital",
    category: "Minimal",
    price: 352,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Minimal/Minimal Fashion Women Digital/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal Fashion Women Digital/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion Women Digital/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion Women Digital/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion Women Digital/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion Women Digital/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal Fashion Women Digital/side5.jpg")
    ],
    color: ["white", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MIN06",
    name: "Minimal Women Print Fashion Low",
    category: "Minimal",
    price: 342,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Minimal/Minimal Women Print Fashion Low/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal Women Print Fashion Low/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal Women Print Fashion Low/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal Women Print Fashion Low/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal Women Print Fashion Low/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal Women Print Fashion Low/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal Women Print Fashion Low/side5.jpg")
    ],
    color: ["black", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MIN07",
    name: "Minimal Beauty Women Clothing",
    category: "Minimal",
    price: 225,
    sale__off: "5%",
    best__sell: false,
    main__image: require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal Beauty Women Clothing/side5.jpg")
    ],
    color: ["white", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MIN08",
    name: "Minimal New Fashion Women Leggings",
    category: "Minimal",
    price: 245,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Minimal/Minimal New Fashion Women Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Minimal/Minimal New Fashion Women Leggings/main/main.jpg"),
        require("../Assets/images/products/Minimal/Minimal New Fashion Women Leggings/side1.jpg"),
        require("../Assets/images/products/Minimal/Minimal New Fashion Women Leggings/side2.jpg"),
        require("../Assets/images/products/Minimal/Minimal New Fashion Women Leggings/side3.jpg"),
        require("../Assets/images/products/Minimal/Minimal New Fashion Women Leggings/side4.jpg"),
        require("../Assets/images/products/Minimal/Minimal New Fashion Women Leggings/side5.jpg")
    ],
    color: ["red", "blue", "orange"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
/* end category Minimal*/
/* category Modern*/
{
    id: "MOD01",
    name: "Modern Beauty Women Clothing White",
    category: "Modern",
    price: 295,
    sale__off: false,
    best__sell: true,
    main__image: require("../Assets/images/products/Modern/Modern Beauty Women Clothing White/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing White/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing White/side1.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing White/side2.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing White/side3.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing White/side4.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing White/side5.jpg")
    ],
    color: ["white", "yellow", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MOD02",
    name: "Modern Black Sporting Leggings",
    category: "Modern",
    price: 285,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Modern/Modern Black Sporting Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern Black Sporting Leggings/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern Black Sporting Leggings/side1.jpg"),
        require("../Assets/images/products/Modern/Modern Black Sporting Leggings/side2.jpg"),
        require("../Assets/images/products/Modern/Modern Black Sporting Leggings/side3.jpg"),
        require("../Assets/images/products/Modern/Modern Black Sporting Leggings/side4.jpg"),
        require("../Assets/images/products/Modern/Modern Black Sporting Leggings/side5.jpg")
    ],
    color: ["white", "yellow", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MOD03",
    name: "Modern Cool Women Casual",
    category: "Modern",
    price: 315,
    sale__off: "10%",
    best__sell: false,
    main__image: require("../Assets/images/products/Modern/Modern Cool Women Casual/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern Cool Women Casual/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern Cool Women Casual/side1.jpg"),
        require("../Assets/images/products/Modern/Modern Cool Women Casual/side2.jpg"),
        require("../Assets/images/products/Modern/Modern Cool Women Casual/side3.jpg"),
        require("../Assets/images/products/Modern/Modern Cool Women Casual/side4.jpg"),
        require("../Assets/images/products/Modern/Modern Cool Women Casual/side5.jpg")
    ],
    color: ["white", "yellow", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MOD04",
    name: "Modern Fashion For Female High",
    category: "Modern",
    price: 325,
    sale__off: "30%",
    best__sell: false,
    main__image: require("../Assets/images/products/Modern/Modern Fashion For Female High/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern Fashion For Female High/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion For Female High/side1.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion For Female High/side2.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion For Female High/side3.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion For Female High/side4.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion For Female High/side5.jpg")
    ],
    color: ["white", "yellow", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MOD05",
    name: "Modern Fashion Women Digital",
    category: "Modern",
    price: 335,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Modern/Modern Fashion Women Digital/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern Fashion Women Digital/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion Women Digital/side1.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion Women Digital/side2.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion Women Digital/side3.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion Women Digital/side4.jpg"),
        require("../Assets/images/products/Modern/Modern Fashion Women Digital/side5.jpg")
    ],
    color: ["white", "black", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MOD06",
    name: "Modern Women Print Fashion Low",
    category: "Modern",
    price: 305,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Modern/Modern Women Print Fashion Low/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern Women Print Fashion Low/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern Women Print Fashion Low/side1.jpg"),
        require("../Assets/images/products/Modern/Modern Women Print Fashion Low/side2.jpg"),
        require("../Assets/images/products/Modern/Modern Women Print Fashion Low/side3.jpg"),
        require("../Assets/images/products/Modern/Modern Women Print Fashion Low/side4.jpg"),
        require("../Assets/images/products/Modern/Modern Women Print Fashion Low/side5.jpg")
    ],
    color: ["white", "yellow", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MOD07",
    name: "Modern Beauty Women Clothing",
    category: "Modern",
    price: 225,
    sale__off: "20%",
    best__sell: false,
    main__image: require("../Assets/images/products/Modern/Modern Beauty Women Clothing/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing/side1.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing/side2.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing/side3.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing/side4.jpg"),
        require("../Assets/images/products/Modern/Modern Beauty Women Clothing/side5.jpg")
    ],
    color: ["white", "yellow", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "MOD08",
    name: "Modern New Fashion Women Leggings",
    category: "Modern",
    price: 245,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Modern/Modern New Fashion Women Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Modern/Modern New Fashion Women Leggings/main/main.jpg"),
        require("../Assets/images/products/Modern/Modern New Fashion Women Leggings/side1.jpg"),
        require("../Assets/images/products/Modern/Modern New Fashion Women Leggings/side2.jpg"),
        require("../Assets/images/products/Modern/Modern New Fashion Women Leggings/side3.jpg"),
        require("../Assets/images/products/Modern/Modern New Fashion Women Leggings/side4.jpg"),
        require("../Assets/images/products/Modern/Modern New Fashion Women Leggings/side5.jpg")
    ],
    color: ["red", "yellow", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
/* end category Modern*/
/* category Summer*/
{
    id: "SUM01",
    name: "Summer Beauty Women Clothing White",
    category: "Summer",
    price: 250,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Summer/Summer Beauty Women Clothing White/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing White/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing White/side1.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing White/side2.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing White/side3.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing White/side4.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing White/side5.jpg")
    ],
    color: ["white", "red", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, Summer and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "SUM02",
    name: "Summer Black Sporting Leggings",
    category: "Summer",
    price: 210,
    sale__off: "20%",
    best__sell: true,
    main__image: require("../Assets/images/products/Summer/Summer Black Sporting Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer Black Sporting Leggings/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer Black Sporting Leggings/side1.jpg"),
        require("../Assets/images/products/Summer/Summer Black Sporting Leggings/side2.jpg"),
        require("../Assets/images/products/Summer/Summer Black Sporting Leggings/side3.jpg"),
        require("../Assets/images/products/Summer/Summer Black Sporting Leggings/side4.jpg"),
        require("../Assets/images/products/Summer/Summer Black Sporting Leggings/side5.jpg")
    ],
    color: ["white", "red", "black"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, Summer and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "SUM03",
    name: "Summer Cool Women Casual",
    category: "Summer",
    price: 230,
    sale__off: "20%",
    best__sell: true,
    main__image: require("../Assets/images/products/Summer/Summer Cool Women Casual/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer Cool Women Casual/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer Cool Women Casual/side1.jpg"),
        require("../Assets/images/products/Summer/Summer Cool Women Casual/side2.jpg"),
        require("../Assets/images/products/Summer/Summer Cool Women Casual/side3.jpg"),
        require("../Assets/images/products/Summer/Summer Cool Women Casual/side4.jpg"),
        require("../Assets/images/products/Summer/Summer Cool Women Casual/side5.jpg")
    ],
    color: ["white", "red", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, Summer and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "SUM04",
    name: "Summer Fashion For Female High",
    category: "Summer",
    price: 225,
    sale__off: false,
    best__sell: true,
    main__image: require("../Assets/images/products/Summer/Summer Fashion For Female High/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer Fashion For Female High/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion For Female High/side1.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion For Female High/side2.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion For Female High/side3.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion For Female High/side4.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion For Female High/side5.jpg")
    ],
    color: ["white", "red", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, Summer and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "SUM05",
    name: "Summer Fashion Women Digital",
    category: "Summer",
    price: 275,
    sale__off: "10%",
    best__sell: false,
    main__image: require("../Assets/images/products/Summer/Summer Fashion Women Digital/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer Fashion Women Digital/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion Women Digital/side1.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion Women Digital/side2.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion Women Digital/side3.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion Women Digital/side4.jpg"),
        require("../Assets/images/products/Summer/Summer Fashion Women Digital/side5.jpg")
    ],
    color: ["white", "red", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "SUM06",
    name: "Summer Women Print Fashion Low",
    category: "Summer",
    price: 279,
    sale__off: "30%",
    best__sell: false,
    main__image: require("../Assets/images/products/Summer/Summer Women Print Fashion Low/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer Women Print Fashion Low/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer Women Print Fashion Low/side1.jpg"),
        require("../Assets/images/products/Summer/Summer Women Print Fashion Low/side2.jpg"),
        require("../Assets/images/products/Summer/Summer Women Print Fashion Low/side3.jpg"),
        require("../Assets/images/products/Summer/Summer Women Print Fashion Low/side4.jpg"),
        require("../Assets/images/products/Summer/Summer Women Print Fashion Low/side5.jpg")
    ],
    color: ["white", "red", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "SUM07",
    name: "Summer Beauty Women Clothing",
    category: "Summer",
    price: 225,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Summer/Summer Beauty Women Clothing/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing/side1.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing/side2.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing/side3.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing/side4.jpg"),
        require("../Assets/images/products/Summer/Summer Beauty Women Clothing/side5.jpg")
    ],
    color: ["white", "red", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
{
    id: "SUM08",
    name: "Summer New Fashion Women Leggings",
    category: "Summer",
    price: 245,
    sale__off: false,
    best__sell: false,
    main__image: require("../Assets/images/products/Summer/Summer New Fashion Women Leggings/main/main.jpg"),
    slide__image: [
        require("../Assets/images/products/Summer/Summer New Fashion Women Leggings/main/main.jpg"),
        require("../Assets/images/products/Summer/Summer New Fashion Women Leggings/side1.jpg"),
        require("../Assets/images/products/Summer/Summer New Fashion Women Leggings/side2.jpg"),
        require("../Assets/images/products/Summer/Summer New Fashion Women Leggings/side3.jpg"),
        require("../Assets/images/products/Summer/Summer New Fashion Women Leggings/side4.jpg"),
        require("../Assets/images/products/Summer/Summer New Fashion Women Leggings/side5.jpg")
    ],
    color: ["white", "red", "blue"],
    material: "cotton",
    description: "Fashion & Clothing Shopify Themes & TemplateOur Fashion shopify theme is a best, popular, modern and clean. Also the main specialty of our Shopify Theme is Advance Feature List. You can easily setup your store Because Our fashion shopify Theme have Advance Theme",
},
/* end category Summer*/
]
const Product_reducer = (init = Product, action) => {
    return init;
}
/*---end product data---*/
/*---currency---*/
const currency = {
    currency: "USD",
    rate: 1
}
const Currency_reducer = (init = currency, action) => {
    switch (action.type) {
        case "USD":
            return {
                ...init,
                currency: "USD",
                rate: 1
            }
        
        case "EUR":
            return {
                ...init,
                currency: "EUR",
                rate: 0.84, // 1 USD = 0.84 * 1 EUR
            }
    
        case "GBP":
            return {
                ...init,
                currency: "GBP",
                rate: 0.76 // 1 USD = 0.76 * 1 GBP
            }

        default:
            return init
    }
}
/*---shopping cart---*/
const Cart = [];
var currentCart; // to use for BoughtTarget below
const Cart_reducer = (init = Cart, action) => {
    const product = Product.find((product) => {
        return product.id === action.id;
    })
    currentCart = [...init];
    switch (action.type) {
        case "ADD":
            for (let i = 0; i < action.quantity; i++){
                currentCart.push(product)
            }
            return currentCart;
        case "REMOVE":
            var countRemove = 0;
            currentCart.forEach((removedProduct) => {
                if (removedProduct.id === action.id){
                    countRemove += 1;
                }
            })
            for (let j = 0; j < countRemove; j++){
                currentCart.splice(currentCart.indexOf(product), 1)
            }
            return currentCart;
        case "UPDATE":
            if (action.quantity === null) {
                return currentCart;
            } else {
                var currentCount = 0;
                currentCart.forEach((item) => {
                    if (item.id === action.id){
                        currentCount += 1;
                    }
                })
                const difference = action.quantity - currentCount;
                // if difference < 0, mean decrease : remove (difference) product right to left
                if (difference < 0) {
                    currentCart.reverse(); // to remove from right to left of original
                    for (let k = 0; k < (-difference); k++) {
                        currentCart.splice(currentCart.indexOf(product), 1)
                    }
                    currentCart.reverse();
                    return currentCart;
                }
                // if difference >= 0, mean increase : push (difference) product to current cart
                if (difference >= 0) {
                    for (let k = 0; k < difference; k++) {
                        currentCart.push(product)
                    }
                    return currentCart;
                }
                return currentCart;
            }
        default:
            break;
    }
    return currentCart;
}
/*---countries data: name, code, regions (cities), shipping-fee---*/
const countryData = [
    {
        code: "UK",
        name: "UNITED KINGDOM",
        regions : [
            {
                name: "London",
                fee: 30,
            },
            {
                name: "Manchester",
                fee: 40,
            },
            {
                name: "Liverpool",
                fee: 50
            }
        ]
    },
    {
        code: "US",
        name: "UNITED STATES",
        regions : [
            {
                name: "Las Vegas",
                fee: 35,
            },
            {
                name: "Los Angeles",
                fee: 45,
            },
            {
                name: "New York",
                fee: 55
            }
        ]
    },
    {
        code: "FR",
        name: "FRANCE",
        regions : [
            {
                name: "Paris",
                fee: 32,
            },
            {
                name: "Reims",
                fee: 42,
            },
            {
                name: "Lyon",
                fee: 52
            }
        ]
    }
]
const Country_reducer = (init = countryData, action) => {
    return init
}
/*---orders---*/
const orders = []
const Order_reducer = (init = orders, action) => {
    let currentOrders = [...init]; 
    switch (action.type) {
        case "ADD_ORDER":
            currentOrders.push(action.order)
            return currentOrders
        default:
            break;
    }
    return currentOrders
}
/*---bought product (when buy separate product, not the whole shopping cart)---*/
const BoughtProduct = ["bought product"];
var currentBoughtProduct; // to use for BoughtTarget below
const BoughtProduct_reducer = (init = BoughtProduct, action) => {
    currentBoughtProduct = [...init]; 
    switch (action.type) {
        case "BUY_PRODUCT": // when click name of product of components Modal
            currentBoughtProduct = [];
            currentBoughtProduct.push(action.product);
            return currentBoughtProduct;
        case "CHANGE_QUANTITY_BUY_PRODUCT": // when click buy now of component product detail
            currentBoughtProduct = [];
            for (let i = 0; i < action.quantity; i++){
                currentBoughtProduct.push(action.product)
            }
            return currentBoughtProduct;
        default:
            break;
    }
    return currentBoughtProduct;
}
/*---define check out whole shopping cart or separate product---(use Store Cart or Bought Product)*/
const BoughtTarget = {
    target: ""
}
const BoughtTarget_reducer = (init = BoughtTarget, action) => {
    var currentBoughtTarget = {...init}; 
    switch (action.type) {
        case "BUY_WHOLE_CART":
            currentBoughtTarget.target = currentCart
            return currentBoughtTarget
        case "BUY_SEPARATE":
            currentBoughtTarget.target = currentBoughtProduct
            return currentBoughtTarget
        default:
            break;
    }
    return currentBoughtTarget
}

const All_reducer = redux.combineReducers({
    Products: Product_reducer,
    Currency: Currency_reducer,
    Cart: Cart_reducer,
    Country: Country_reducer,
    Orders: Order_reducer,
    BoughtProduct: BoughtProduct_reducer,
    BoughtTarget: BoughtTarget_reducer
})
const Store = redux.createStore(All_reducer);
export default Store;