export interface Cocktail {
    name: string;
    price: number;
    baseDrink: string;
    imageUrl: string
}

export const cocktailMenu: Cocktail[] = [
    {
        name: "Mojito",
        price: 12,
        baseDrink: "Rum",
        imageUrl: "https://www.liquor.com/thmb/CSwF3euRPLCL4lTgkZLlDbSPfFg=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/mojito-720x720-primary-f9ab733f0ae64a96a7f6ce61474f9c67.jpg"
    },
    {
        name: "Margarita",
        price: 10,
        baseDrink: "Tequila",
        imageUrl: "https://www.liquor.com/thmb/4fuXv8_xU2kKe-ZXxGFYevF8HTM=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-margarita-720x720-primary-v2-5cffe870c9e77c0001f12c1d.jpg"
    },
    {
        name: "Old Fashioned",
        price: 15,
        baseDrink: "Whiskey",
        imageUrl: "https://www.liquor.com/thmb/S1A48WIV_BuYMCsCQUlFuG0bRgU=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-720x720-primary-v2-d11cfa77cc2d418f9b4b9a33507f48a8.jpg"
    },
    {
        name: "Martini",
        price: 14,
        baseDrink: "Gin",
        imageUrl: "https://www.liquor.com/thmb/V7nB1P7DYujZTUKxuqQLbECV2Zo=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/vodka-martini-720x720-primary-3885a6bfe59a4d21a6b5c7da22c34cd8.jpg"
    },
    {
        name: "Pina Colada",
        price: 13,
        baseDrink: "Rum",
        imageUrl: "https://www.liquor.com/thmb/QMvBfF-X9oTUz5OBNn8X5KcJgiw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-pina-colada-720x720-primary-8a717f27b2cb4ae4b71b582c0d86af42.jpg"
    },
    {
        name: "Cosmopolitan",
        price: 11,
        baseDrink: "Vodka",
        imageUrl: "https://www.liquor.com/thmb/dFoVfQo1_dBt6XG1CQNCGWYI5Qk=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/cosmopolitan-720x720-primary-94b75f644de74993a8c5bd07b267ff6a.jpg"
    },
    {
        name: "Daiquiri",
        price: 10,
        baseDrink: "Rum",
        imageUrl: "https://www.liquor.com/thmb/WeMrH40K42bUdRdtKdnqEWBmfhw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-daiquiri-720x720-primary-75d560e42ef24802a8822538dbe24e7c.jpg"
    },
    {
        name: "Negroni",
        price: 13,
        baseDrink: "Gin",
        imageUrl: "https://www.liquor.com/thmb/BUs9bM1DnpKq0Ge8LIz50cSMtK4=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-negroni-720x720-primary-1b68e178c22c4b4e89aa6ed3153c6a47.jpg"
    },
    {
        name: "Whiskey Sour",
        price: 12,
        baseDrink: "Whiskey",
        imageUrl: "https://www.liquor.com/thmb/9bbGa8MmGVR98ybmKH7O7ajB9d8=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-sour-720x720-primary-v2-d480b3aa8b614a3f8a3b30c4c01ab289.jpg"
    },
    {
        name: "Mai Tai",
        price: 14,
        baseDrink: "Rum",
        imageUrl: "https://www.liquor.com/thmb/E3-Pp4cXVv4K8dmwrd7T9vNNK64=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-mai-tai-720x720-primary-v2-ecad8d240e014baab9678cf4319cb9f5.jpg"
    },
    {
        name: "Manhattan",
        price: 15,
        baseDrink: "Whiskey",
        imageUrl: "https://www.liquor.com/thmb/8I4RApZoa3TmdMm41u24-JUjx_Y=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-manhattan-720x720-primary-82a4c905c7dd48e4a2d0beff2ff9aa63.jpg"
    },
    {
        name: "Bloody Mary",
        price: 12,
        baseDrink: "Vodka",
        imageUrl: "https://www.liquor.com/thmb/JQLEW1W4PQl8puUucgKN4sTYcNk=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/bloody-mary-720x720-primary-v2-99151010375042c3b69ae3675a0c1c27.jpg"
    },
    {
        name: "Tom Collins",
        price: 11,
        baseDrink: "Gin",
        imageUrl: "https://www.liquor.com/thmb/r75Slyf6OxhfFcrvWBNZtpWqUDo=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-tom-collins-720x720-primary-01c80e3732e046b8b729e40e94913a6c.jpg"
    },
    {
        name: "Mint Julep",
        price: 13,
        baseDrink: "Bourbon",
        imageUrl: "https://www.liquor.com/thmb/V0IylFoqZ0Ro0aFAtY0nDiNyr70=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-mint-julep-720x720-primary-efc65eae9e37400b9f7ea6ad16876dfd.jpg"
    },
    {
        name: "Sidecar",
        price: 14,
        baseDrink: "Cognac",
        imageUrl: "https://www.liquor.com/thmb/P5ApeSuThAOew5bPKCg2_nU-f2U=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-sidecar-720x720-primary-9959a34f234a4e31874c29558e51f1e8.jpg"
    },
    {
        name: "Sazerac",
        price: 15,
        baseDrink: "Rye Whiskey",
        imageUrl: "https://www.liquor.com/thmb/v1-f-RX19SQrzvlyhg4EXQOi0Zs=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-sazerac-720x720-primary-v2-525cdde270944df490091c79cd6be740.jpg"
    },
    {
        name: "French 75",
        price: 13,
        baseDrink: "Gin",
        imageUrl: "https://www.liquor.com/thmb/qXeCVG3M8Y_VRWdwAFHG9TcM3Kg=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-french-75-720x720-primary-8cf6ef93c44e465b9be0630c89610b3b.jpg"
    },
    {
        name: "Pisco Sour",
        price: 12,
        baseDrink: "Pisco",
        imageUrl: "https://www.liquor.com/thmb/VjR11DGqU2xnGteDiCoxVp3FuJc=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/pisco-sour-720x720-primary-a1b09a649ebf419f81a35b2fdb4f60e5.jpg"
    },
    {
        name: "Caipirinha",
        price: 11,
        baseDrink: "Cachaça",
        imageUrl: "https://www.liquor.com/thmb/FalDGbO-yOXslK7oyw_A1DLfCKs=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-caipirinha-720x720-primary-dce3e1a3a80742da8b6227a7abf0c998.jpg"
    },
    {
        name: "Aperol Spritz",
        price: 10,
        baseDrink: "Aperol",
        imageUrl: "https://www.liquor.com/thmb/RLh35prWIK4uTpcoM6FhThHe4Qw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc()/aperol-spritz-720x720-primary-4317ad1bd2b04c8d8a773af9d1a6122d.jpg"
    }
];
