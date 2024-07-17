export function getProduct(productId){
  let matchingProduct;
  products.forEach((product)=>{
    if (product.id===productId)
      matchingProduct=product;
  })
return matchingProduct;

};

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/plats/salades/saladeNecoise.jpg",
    name: "Salade Niçoise",
    priceCents: 25,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/plats/salades/saladeCésar.jpg",
    name: "Salade César",
    priceCents: 30,
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/plats/salades/saladechicken.jpg",
    name: "Salde Chicken",
    priceCents: 35,
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/plats/salades/salademarocain.jpg",
    name: "Salade Marocaine",
    priceCents: 19,
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/plats/pizza/margerita.jpg",
    name: "Margerita-Petite",
    priceCents: 24,
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/plats/pizza/margerita.jpg",
    name: "Margerita-Moyenne",
    priceCents: 35,
  
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/plats/pizza/margerita.jpg",
    name: "Margerita-Grande",
    priceCents: 40,
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/plats/pizza/viande.jpg",
    name: "Viande Hachée-Petite",
    priceCents: 30,
  
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/plats/pizza/viande.jpg",
    name: "Viande Hachée-Moyenne",
    priceCents: 40,
  
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/plats/pizza/viande.jpg",
    name: "Viande Hachée-Grande",
    priceCents: 50,
  
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/plats/pizza/Mer.jpg",
    name: "Fruit de Mer-Petite ",
    priceCents: 35,
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/plats/pizza/Mer.jpg",
    name: "Fruit de Mer-Moyenne ",
    priceCents: 45,
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/plats/pizza/Mer.jpg",
    name: "Fruit de Mer-Grande ",
    priceCents: 60,
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/plats/pizza/Fromage.jpg",
    name: "4 Fromages-Petite",
    priceCents: 30,
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/plats/pizza/Fromage.jpg",
    name: "4 Fromages-Moyenne",
    priceCents: 40,
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/plats/pizza/Fromage.jpg",
    name: "4 Fromages-Grande",
    priceCents: 55,
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/plats/pizza/végétarienne.jpg",
    name: "Végétarienne-Petite",
    priceCents: 25,
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/plats/pizza/végétarienne.jpg",
    name: "Végétarienne-Moyenne",
    priceCents: 35,
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/plats/pizza/végétarienne.jpg",
    name: "Végétarienne-Grande",
    priceCents: 42,
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/plats/pizza/peperoni.jpg",
    name: "Pepe Roni-Petite",
    priceCents: 28,
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/plats/pizza/peperoni.jpg",
    name: "Pepe Roni-Moyenne",
    priceCents: 38,
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/plats/pizza/peperoni.jpg",
    name: "Pepe Roni-Grande",
    priceCents: 50,
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/plats/pizza/poulet.jpg",
    name: "Poulet-petite",
    priceCents: 26,
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/plats/pizza/poulet.jpg",
    name: "Poulet-Moyenne",
    priceCents: 35,
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/plats/pizza/poulet.jpg",
    name: "Poulet-Grande",
    priceCents: 48,
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/plats/pizza/thon.JPG",
    name: "Thon-Petite",
    priceCents: 28,
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/plats/pizza/thon.JPG",
    name: "Thon-Moyenne",
    priceCents: 38,
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/plats/pizza/thon.JPG",
    name: "Thon-Grande",
    priceCents: 55  ,
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/plats/pizza/mixte.jpg",
    name: "Mixte-Petite",
    priceCents: 28,
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/plats/pizza/mixte.jpg",
    name: "Mixte-Moyenne",
    priceCents: 40,
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/plats/pizza/mixte.jpg",
    name: "Mixte-Grande",
    priceCents: 50,
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/plats/pizza/Gusto.png",
    name: "GustoFino-Petit",
    priceCents: 40,
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/plats/pizza/Gusto.png",
    name: "GustoFino-Moyenne",
    priceCents: 50,
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/plats/pizza/Gusto.png",
    name: "GustoFino-Grande",
    priceCents: 68,
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/plats/burger/hamburger.PNG",
    name: "Hamburger ",
    priceCents: 20,
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/plats/burger/hamburger.PNG",
    name: "Cheese Burger",
    priceCents: 25,
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/plats/burger/hamburger.PNG",
    name: "Egs Burger",
    priceCents: 28,
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/plats/burger/doubleburger.PNG",
    name: "Double Burger",
    priceCents: 42,
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/plats/panini/PaniniModel.jpg",
    name: "Poulet (avec frites)",
    priceCents: 20,
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/plats/panini/PaniniModel.jpg",
    name: "Viande Hachée (avec frites)",
    priceCents: 26,
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/plats/panini/PaniniModel.jpg",
    name: "Crevette (avec frites)",
    priceCents: 28,
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/plats/panini/PaniniModel.jpg",
    name: "Thon (avec frites)",
    priceCents: 20,
  }, 
  {
  id: "bc2847e9-5323-403f-b7cf-57fde044a956",
  image: "images/plats/tacos/tacos.PNG",
  name: "Poulet (avec frites)",
  priceCents: 30
  },
  {
  id: "bc2847e9-5323-403f-b7cf-57fde044a957",
  image: "images/plats/tacos/tacos.PNG",
  name: "Viande Hachée (avec frites)",
  priceCents: 35
  },
  {
  id: "bc2847e9-5323-403f-b7cf-57fde044a958",
  image: "images/plats/tacos/tacos.PNG",
  name: "Mixte (avec frites)",
  priceCents: 32
  },
  {
  id: "bc2847e9-5323-403f-b7cf-57fde044a959",
  image: "images/plats/tacos/tacos.PNG",
  name: "Crispy (avec frites)",
  priceCents: 30
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a9560",
    image: "images/plats/pasticcio/pasticcioModel.PNG",
    name: "Poulet",
    priceCents: 30
    },
    {
 id: "bc2847e9-5323-403f-b7cf-57fde044a9561",
 image: "images/plats/pasticcio/pasticcioModel.PNG",
 name: "Viande Hachée",
 priceCents: 35
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a9562",
  image: "images/plats/pasticcio/pasticcioModel.PNG",
  name: "Mixte",
  priceCents: 38
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a9563",
  image: "images/plats/pasticcio/pasticcioModel.PNG",
  name: "Fruit de Mer",
  priceCents: 45
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a95577",
  image: "images/plats/Plat/PlatModel.PNG",
  name: "Emincé de Poulet",
  priceCents: 40
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955TB",
  image: "images/plats/Plat/PlatModel.PNG",
  name: "Brochettes Viande Hachée",
  priceCents: 45
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955VH55",
  image: "images/plats/Plat/PlatModel.PNG",
  name: "Brochettes Mixtes",
  priceCents: 45
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955LM90",
  image: "images/plats/Plat/PlatModel.PNG",
  name: "Cordon Bleu",
  priceCents: 55
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955VF21",
  image: "images/plats/pates/pate.PNG",
  name: "Spaghetti Bolognaise",
  priceCents: 30
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955VF22",
  image: "images/plats/pates/pate.PNG",
  name: "Tagliatelle Fruit de Mer",
  priceCents: 33
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955VF23",
  image: "images/plats/pates/pate.PNG",
  name: "Tagliatelle Poulet",
  priceCents: 30
},
{
  id: "bc2847e9-5323-403f-b7cf-57fde044a955VF24",
  image: "images/plats/pates/pate.PNG",
  name: "Penne aux 4 Fromages",
  priceCents: 35
},
{
  id: "bc2847e9-7923-433f-b7cf-57fde044a955VF27",
  image: "images/drinks/expresso.PNG",
  name: "Espresso",
  priceCents: 13
},
{
  id: "Nc2847e9-5323-407f-b3cf-57fde044a955VF26",
  image: "images/drinks/creme.PNG",
  name: "Café Créme",
  priceCents: 14
},
{
  id: "Nc6333e9-5323-4374-b7cN-57fde044a955VF25",
  image: "images/drinks/creme.PNG",
  name: "Café Séparé",
  priceCents: 16
},
{
  id: "Nc5798e3-5323-5374-b7cN-57fde044a955pB28",
  image: "images/drinks/chacolat.PNG",
  name: "Chocolat Chaud",
  priceCents: 14
},
{
  id: "Nc6333d9-5323-4374-b7Cl-57fdE044a955VF30",
  image: "images/drinks/expresso.PNG",
  name: "Américano",
  priceCents: 16
},
{
  id: "Na6343d9-5323-4379-b7Cl-50NdE044a955VF30",
  image: "images/drinks/expresso.PNG",
  name: "Double Espresso",
  priceCents: 18
},
{
  id: "Na6343d0-5323-4379-b7Cl-50NnEl044a845VF31",
  image: "images/drinks/cappuccino.PNG",
  name: "Cappuccino",
  priceCents: 18
},
{
  id: "Na6343d0-5323-4379-b7Cl-51NnEl044a655VF32",
  image: "images/drinks/expresso.PNG",
  name: "Nespresso",
  priceCents: 18
},
{
  id: "Na6343d0-5323-4379-b7Cl-50NnEl044a845VF31",
  image: "images/drinks/macchiato.PNG",
  name: "Macchiato-(chocolat-caramel-noisette)",
  priceCents: 20
},
{
  id: "Nn6343d0-5323-4379-b7Cl-50NnEl144a845VF32",
  image: "images/drinks/thé.PNG",
  name: "Thé marocain",
  priceCents: 13
},
{
  id: "Nn6343d0-5323-4379-b7CM-50NnEl144a845VF33",
  image: "images/drinks/tchaba.jpg",
  name: "Infusion Sultan",
  priceCents: 13
},
{
  id: "Nn6343d0-5354-4379-b7cM-50NLEl144a845VF34",
  image: "images/drinks/tchaba.jpg",
  name: "Tchaba",
  priceCents: 18
},
{
  id: "Nn6343d0-5354-4379-b7cM-50NLEl144a845MF35",
  image: "images/petitDéjeuner/petitpain.jpg",
  name: "Croissant",
  priceCents: 7
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl144a845MF36",
  image: "images/petitDéjeuner/petitpain.jpg",
  name: "Pain au Chocolat",
  priceCents: 8
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl144a845MF37",
  image: "images/petitDéjeuner/petitpain.jpg",
  name: "Pain suisse",
  priceCents: 8
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl145a845MF38",
  image: "images/petitDéjeuner/petitpain.jpg",
  name: "Shneck",
  priceCents: 8
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl145a845MF39",
  image: "images/petitDéjeuner/melwi.jpg",
  name: "Melwi au Fromage",
  priceCents: 6
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl155a845MF40",
  image: "images/petitDéjeuner/melwi.jpg",
  name: "Melwi au Beurre Beldi et Miel Pur",
  priceCents: 8
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl155a845GF41",
  image: "images/petitDéjeuner/harcha.jpg",
  name: "Harcha au Fromage",
  priceCents: 6
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl155a845MF42",
  image: "images/petitDéjeuner/harcha.jpg",
  name: "Harcha au Beurre Beldi et Miel Pur",
  priceCents: 8
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845MF43",
  image: "images/drinks/Milkshake.jpg",
  name: "Milkshake Vanille",
  priceCents: 22
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845MF44",
  image: "images/drinks/Milkshake.jpg",
  name: "Milkshake Chocolat",
  priceCents: 22
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845WF45",
  image: "images/drinks/Milkshake.jpg",
  name: "Milkshake Caramel",
  priceCents: 22
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845AF46",
  image: "images/drinks/mojito.PNG",
  name: "Mojito",
  priceCents: 25
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845MF47",
  image: "images/drinks/soda.jpg",
  name: "Soda",
  priceCents: 13
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845SF48",
  image: "images/drinks/ali.Png",
  name: "Eau Minérale 50cl",
  priceCents: 7
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845JF49",
  image: "images/drinks/oulmes.Png",
  name: "Oulmes",
  priceCents: 13
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845JF50",
  image: "images/drinks/jus.jpg",
  name: "Jus d'Orange",
  priceCents: 16
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845JF51",
  image: "images/drinks/jus.jpg",
  name: "Jus de Banane",
  priceCents: 16
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845JF52",
  image: "images/drinks/jus.jpg",
  name: "Jus d'Avocat",
  priceCents: 18
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845JF53",
  image: "images/drinks/jus.jpg",
  name: "Jus de Pomme",
  priceCents: 19
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845JF54",
  image: "images/drinks/jus.jpg",
  name: "Panaché",
  priceCents: 25
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a845JF55",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "OMLETTE-(Omelette au Fine Herbes, Panier de Pain, Fromage, Boisson Chaude)",
  priceCents: 19
},
{
  id: "Nn6343d1-5354-4379-b7cM-50NLEl125a875JF56",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "EXPRESS-(3 Mini Viennoiseries Pur Beurre, Boisson Chaude, Jus d'Orange)",
  priceCents: 28
},
{
  id: "Nn6343d1-5354-4079-b7cM-50NLEl125a875JF57",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "CHAMALI-(2 OEufs au Plat, Jben, Fromage, Charcuterie, Olive, Huile d'Olive, Panier de Pain, Boisson Chaude, Jus d'Orange)",
  priceCents: 32
},
{
  id: "Nn6343d1-5354-4079-b7cM-50NLEl125a875JF58",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "BELDI-(Msemen, Harcha, Miel Pur, Beurre Beldi, Olive, Huile d'Olive, Boisson Chaude, Jus d'Orange)",
  priceCents: 35
},
{
  id: "Nn6343d1-5354-4079-b8cM-50NLEl125a875JF59",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "FASSI-(OEufs au Khlie, Olive, Panier Pain, Boisson Chaude, Jus d'Orange)",
  priceCents: 39
},
{
  id: "Nn6343d1-5354-4079-b7cM-50NLEl125a875JF60",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "CROQUE-MONSIEUR-(Croque-Monsieur, Olive, Fromage, Boisson Chaude, Jus d'Orange)",
  priceCents: 45
},
{
  id: "Nn6343d1-5354-4179-b7QM-50NLEl125a875JF61",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "GUSTO-(Nuggets à l'Américain, Hot Dog, Tomates Cerise, Panier de Pain, Fromage, Boisson Chaude, Jus d'Orange)",
  priceCents: 49
},
{
  id: "Nn6343d1-5354-4079-b7DM-50NLEl125a875JF62",
  image: "images/petitDéjeuner/petitDejeuner.jpg",
  name: "ENFANT-(Bole Conflex Chocolat, Pancake Nutella, Fromage, Boisson Chaude, Jus de Fruits)",
  priceCents: 28
},
{
  id: "Nn6343d1-5354-4079-b7MM-50NLEl125a875JF63",
  image: "images/goutter/crepesucre.jpg",
  name: "Crêpe-Nature",
  priceCents: 18
},
{
  id: "Nn6343d1-5354-4079-b7MM-50NLEl225a875JF64",
  image: "images/goutter/crepesucre.jpg",
  name: "Crêpe-Miel Pur",
  priceCents: 20
},
{
  id: "Nn6343d1-1554-4079-b7MM-50NLEl225a875JF65",
  image: "images/goutter/crepesucre.jpg",
  name: "Crêpe-Nutelle",
  priceCents: 22
},
{
  id: "Nn6343d1-1454-4079-b7MM-50NLEl225a875JF66",
  image: "images/goutter/crepesucre.jpg",
  name: "Crêpe-Nutelle Banane",
  priceCents: 25
},
{
  id: "Nn6343d1-5355-4079-b7MM-50NLEl225a875JF67",
  image: "images/goutter/crepesucre.jpg",
  name: "Crêpe-Lotus",
  priceCents: 25
},
{
  id: "Nn6343d1-5354-4072-b7MM-50NLEl125a875JF68",
  image: "images/goutter/gaufre.jpg",
  name: "Gaufre-Nature",
  priceCents: 18
},
{
  id: "Nn6343d1-5354-4071-b7MM-50NLEl225a875JF69",
  image: "images/goutter/gaufre.jpg",
  name: "Gaufre-Miel Pur",
  priceCents: 20
},
{
  id: "Nn6343d1-1554-4077-b7MM-50NLEl225a875JF70",
  image: "images/goutter/gaufre.jpg",
  name: "Gaufre-Nutelle",
  priceCents: 22
},
{
  id: "Nn6343d1-1452-4073-b9MM-50NLEl225a875JF71",
  image: "images/goutter/gaufre.jpg",
  name: "Gaufre-Nutelle Banane",
  priceCents: 25
},
{
  id: "Nn6343d1-5355-4074-b2MM-50NLEl225a875JF72",
  image: "images/goutter/gaufre.jpg",
  name: "Gaufre-Lotus",
  priceCents: 25
},
{
  id: "Nn6343d1-5354-4072-b1MM-50NLEl125a875JF73",
  image: "images/goutter/pancake.jpg",
  name: "Pancake-Nature",
  priceCents: 18
},
{
  id: "Nn6343d1-5354-4071-b5MM-50NLEl225a875JF74",
  image: "images/goutter/pancake.jpg",
  name: "Pancake-Miel Pur",
  priceCents: 20
},
{
  id: "Nn6343d1-1554-4070-b3MM-50NLEl225a875JF75",
  image: "images/goutter/pancake.jpg",
  name: "Pancake-Nutelle",
  priceCents: 22
},
{
  id: "Nn6343d1-1454-4076-b7MM-50NLEl225a875JF76",
  image: "images/goutter/pancake.jpg",
  name: "Pancake-Nutelle Banane",
  priceCents: 25
},
{
  id: "Nn6343d1-5355-4074-b7MM-50NLEl225a875JF77",
  image: "images/goutter/pancake.jpg",
  name: "Pancake-Lotus",
  priceCents: 25
},
{
  id: "Nn6343d1-5355-4074-b7MM-50NLEl225a875JF78",
  image: "images/plats/supplement/Frite.JPG",
  name: "Rotation Frites",
  priceCents: 10
},
{
  id: "Nn6343d1-4355-4074-b7MM-50NLEl225a875JF80",
  image: "images/plats/supplement/nutella.JPG",
  name: "Nutella",
  priceCents: 3
},
{
  id: "Nn6343d1-4355-4074-b7MM-50NLEl225a875JF81",
  image: "images/plats/supplement/sauce.JPG",
  name: "Sauce",
  priceCents: 3
},
{
  id: "Nn6343d1-4355-4074-b7MM-50NLEl225a875JF79",
  image: "images/plats/supplement/miel.JPG",
  name: "Miel Pur",
  priceCents: 5
},
{
  id: "Nn6343d1-4355-4074-b7MM-50NLEl225a875JF82",
  image: "images/plats/supplement/Beure.JPG",
  name: "Beurre Beldi",
  priceCents: 4
},
{
  id: "Nn6343d1-4355-4074-b7MM-50NLEl225a875JF83",
  image: "images/plats/supplement/Fromage.JPG",
  name: "Fromage",
  priceCents: 3
},

];