export type DrinkItem = {
  title: string;
  ingredients: string[];
  menuDescription: string;
  image: string;
  modalDescriptionTop: string;
  modalDescriptionBottom?: string;
};

const AVIATION: DrinkItem = {
  title: "Aviation",
  ingredients: [
    "Gin",
    "Maraschino Liqueur",
    "Creme de Violette",
    "Lemon Juice",
  ],
  menuDescription:
    "A bright and floral gin-based cocktail that was first published in 1916",
  image: "./aviation.png",
  modalDescriptionTop: `Being Pooja's favorite, the Aviation is a classic gin cocktail that first appeared in Huge Enslinn’s book “Recipes for Mixed Drinks” in 1916.`,
  modalDescriptionBottom: `In the ensuing decades, it was all but forgotten. That’s because one of the drink’s primary ingredients, crème de violette liqueur, disappeared from the market during the 1960s.`,
};

const BRAMBLE: DrinkItem = {
  title: "Bramble",
  ingredients: ["Gin", "Creme de Mure", "Lemon Juice", "Spices"],
  menuDescription: "A favorite of our beloved AJ, created in 80s, London",
  image: "./bramble.png",
  modalDescriptionTop: `The Bramble was created in London, in 1984, by Dick Bradsell. At the time, Bradsell worked at a bar in Soho called Fred's Club, and he wanted to create a British cocktail.`,
  modalDescriptionBottom: `Memories of going blackberrying in his childhood on the Isle of Wight provided the inspiration for the Bramble. The name of the drink comes from the fact that blackberry bushes are called brambles.`,
};

const CHRYSANTHEMUM: DrinkItem = {
  title: "Chrysanthemum",
  ingredients: ["Vermouth", "Bénédictine Liqueur", "Absinthe"],
  menuDescription:
    "An aromatic cocktail with a delicate balance of herbal and floral notes",
  image: "./chrysanthemum.png",
  modalDescriptionTop: `This century-old classic is believed to have first appeared in “Recipes for Mixed Drinks” by Hugo R. Ensslin, which hit the market in 1916.`,
  modalDescriptionBottom: `With vermouth in the driver’s seat, the Chrysanthemum is light and elegant, with a touch of absinthe to sharpen the edges. And because its base is low-proof, it’s a good aperitif and a solid option any time you want to dial back the booze.`,
};

const CORPSE_REVIVER_NO_2: DrinkItem = {
  title: "Corpse Reviver #2",
  ingredients: ["Gin", "Aperitif Wine", "Orange Liqueur", "Absinthe"],
  menuDescription:
    "The traditional first drink of the night at the Turk's Head",
  image: "./corpse-reviver-2.png",
  modalDescriptionTop: `The Corpse Reviver No. 2 is a classic drink that belongs to a family of pre-Prohibition cocktails that were said to be created and consumed for only one purpose: `,
  modalDescriptionBottom: `Rousing the drinker from the dead—in other words, meant to cure hangovers, increase vigor and otherwise improve one’s morning.`,
};

const COQUITO: DrinkItem = {
  title: "Coquito",
  ingredients: ["Rum", "Coconut Cream", "Coconut Milk", "Spices"],
  menuDescription:
    "A traditional Puerto Rican Christmas drink with 1000 different recipes",
  image: "",
  modalDescriptionTop: "",
};

const LAST_WORD: DrinkItem = {
  title: "Last Word",
  ingredients: ["Gin", "Chartreuse", "Maraschino Liqueur", "Lime"],
  menuDescription: "Feeling the need to have the last word is quite normal",
  image: "./last-word.png",
  modalDescriptionTop: `The Last Word is a gin-based cocktail originating at the Detroit Athletic Club in the 1910s, shortly before the start of Prohibition.`,
  modalDescriptionBottom: `After a long period of obscurity, it enjoyed a renewed popularity in the cocktail renaissance of the early 2000s after being discovered by bartender Murray Stenson of the Zig Zag Café in Seattle.`,
};

const MARTINI: DrinkItem = {
  title: "Martini",
  ingredients: ["Gin", "Vermouth", "Orange Bitters"],
  menuDescription: "Spirit forward, sweet, stirred, with olive garnish",
  image: "./martini.png",
  modalDescriptionTop: `Helena's favorite drink. But who mixed the world’s first Martini? Was it a California prospector during the 1849 Gold Rush or the barman at a New York City hotel 50 years later?`,
  modalDescriptionBottom: `Most likely, the Martini is a cocktail that came onto the scene in multiple places at once, as an increasing number of bartenders began to experiment with gin and vermouth.`,
};

const MONTE_CARLO: DrinkItem = {
  title: "Monte Carlo",
  ingredients: ["Rye Whiskey", "Bénédictine Liqueur", "Aromatic Bitters"],
  menuDescription:
    "A harmonious blend of robust spice, herbal complexity, and subtle sweetness",
  image: "",
  modalDescriptionTop: "",
};

const WHISKEY_SOUR: DrinkItem = {
  title: "Whiskey Sour",
  ingredients: ["Rye Whiskey", "Egg White", "Lemon Juice", "Simple Syrup"],
  menuDescription:
    "Simon's favorite, prepared at the Turk's Head with a secret ingredient",
  image: "./whiskey-sour.png",
  modalDescriptionTop: `The Whiskey Sour, Simon's favorite drink, has sated thirsty drinkers for more than one and a half centuries.`,
  modalDescriptionBottom: `It’s unknown exactly when the cocktail was conceived but its history stretches back to at least the administration of Abraham Lincoln, and the first printed recipe appeared circa 1862 in Jerry Thomas's book The Bar-Tenders Guide.`,
};

export const COCKTAILS = {
  AVIATION,
  BRAMBLE,
  CHRYSANTHEMUM,
  COQUITO,
  CORPSE_REVIVER_NO_2,
  LAST_WORD,
  MARTINI,
  MONTE_CARLO,
  WHISKEY_SOUR,
};

const A_LIFE_FULL_OF_PASSION: DrinkItem = {
  title: "A Life Full Of Passion",
  ingredients: ["Passion Fruit Syrup", "Tonic Water", "Lime"],
  menuDescription: "Drink this with passion or do not drink it at all",
  image: "./passion.png",
  modalDescriptionTop: `The name "passion fruit" has a religious connotation, as Spanish missionaries in South America saw the flower of the passion fruit vine as a symbol of the Crucifixion of Christ.`,
  modalDescriptionBottom: `The arrangement of petals and other floral parts was thought to represent parts of the Passion story, hence the name. It was later introduced to Europe in 1553 by Spanish and Portuguese colonists.`,
};

const PEASED_TO_MEET_YOU: DrinkItem = {
  title: "Peased To Meet You",
  ingredients: ["Peas", "Seedlip Herbal", "Yogurt", "Lemon Juice"],
  menuDescription: "A highly experimental mocktail for the bravest",
  image: "./peas.png",
  modalDescriptionTop: `This might be an awful drink, or a masterpiece. We, the founders of the Turk's Head based in East London, have no idea what our customers will think of this drink.`,
  modalDescriptionBottom: `However, despite caring A LOT, we also feel obliged to say that a tiny teeny little microscopic part of us doesn't really a give shit about our customers' thoughts on drinks they pay nothing for.`,
};

const OUR_BLUEBERRY_NIGHTS: DrinkItem = {
  title: "Our Blueberry Nights",
  ingredients: ["Blueberries", "Ginger Beer", "Lemon Juice", "Mint"],
  menuDescription: "No ginger, no beer, no relation to 'My Blueberry Nights'",
  image: "./blueberries.png",
  modalDescriptionTop: `Blueberries consist of 14% carbohydrates, 0.7% protein, 0.3% fat, and 84% water. A 100-gram serving provides a relatively low amount of food energy – 240 kilojoules (57 kcal) – with a glycemic load of 6.`,
  modalDescriptionBottom: `They contain only negligible amounts of micronutrients, with moderate levels (relative to respective Daily Values) of the essential dietary mineral manganese, vitamin C, vitamin K and dietary fiber.`,
};

const TYHME_FOR_A_TREAT: DrinkItem = {
  title: "Thyme For A Treat",
  ingredients: ["Thyme Infused Syrup", "Ginger Beer", "Lemon Juice"],
  menuDescription:
    "If you think this would go really well with gin, please remember you are drinking a mocktail",
  image: "./thyme.png",
  modalDescriptionTop: `Well, Thyme For A Treat means it is thyme for a cozy short story... Rumor has it Pooja rearranged the labels on her in-laws' spice rack. I am sure we can all agree that it was not anise gesture.`,
  modalDescriptionBottom: `Perhaps it was the fennel straw, who knows?..  Nobody in the Cuthbertson household has noticed yet, but let me tell you, the thyme is cumin.`,
};

const PAINKILLER: DrinkItem = {
  title: "Painkiller",
  ingredients: ["Alka-Seltzer tablets", "Water"],
  menuDescription:
    "If you have pain that needs to be killed, this is one way to achieve that",
  image: "./painkiller.png",
  modalDescriptionTop: `Developed by head chemist Maurice Treneer and launched in 1931, Alka-Seltzer is a pain reliever owned by Bayer since 1978.`,
  modalDescriptionBottom: `First marketed by the Dr. Miles Medicine Company of Indiana, it contains three active ingredients: aspirin (a pain reliever and anti-inflammatory), sodium bicarbonate (an antacid), and anhydrous citric acid (reacts with the sodium bicarbonate and water to form effervescence).`,
};

export const MOCKTAILS = {
  A_LIFE_FULL_OF_PASSION,
  OUR_BLUEBERRY_NIGHTS,
  PEASED_TO_MEET_YOU,
  TYHME_FOR_A_TREAT,
  PAINKILLER,
};
