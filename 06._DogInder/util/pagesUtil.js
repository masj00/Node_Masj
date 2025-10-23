import {constructPage, readPage} from "./templatingEngine.js"

//vi læser filen før vi går videre i programmet (altså readFileSync) (læser den ind som en string)
//den lægger her pga. den skal kun læses når projektet skal deployes(nu har vi den i memory)
//const frontpage = fs.readFileSync("./public/pages/frontend/index.html", "utf-8")
//vi prøver at lave SSR - server side rendering (så alt loades før) /fordele er mindre loadtider, skal ikke dom manipuleres da alt er lavet når vi sender, /
//Reccouser bliver brugt på alle clienters mobiler osv hvis det client side rendere / men serveren gør det i server side rendering
//SEO OPTIMERING se chatgpt men det gør vi
// //har page bagefter fordi hvis det bare var matches ville man tro matches var en liste og ikke en side

const frontpage = readPage("./public/pages/frontend/index.html");
export const frontpagePage = constructPage(frontpage,{
    tabTitle: "DogInder Welcome"
});

const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = constructPage(matches, {
    cssLinks: `<link rel="stylesheet" href="/pages/matches/matches.css">`
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = constructPage(contact, {
    tabTitle: "DogInder  Contact"
});


//skal lige se hans git også på template engine