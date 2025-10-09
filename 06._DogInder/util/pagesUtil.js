//fs er indbygget i node da det er tungt skal man importere dere LEKSION 8/9?
import fs from 'fs';

//vi læser filen før vi går videre i programmet (altså readFileSync) (læser den ind som en string)
//den lægger her pga. den skal kun læses når projektet skal deployes(nu har vi den i memory)
//const frontpage = fs.readFileSync("./public/pages/frontend/index.html", "utf-8")
//vi prøver at lave SSR - server side rendering (så alt loades før) /fordele er mindre loadtider, skal ikke dom manipuleres da alt er lavet når vi sender, /
//Reccouser bliver brugt på alle clienters mobiler osv hvis det client side rendere / men serveren gør det i server side rendering

//har page bagefter fordi hvis det bare var matches ville man tro matches var en liste og ikke en side
const header = readPage("./public/components/header/header.html");
const footer = readPage("./public/components/footer/footer.html");


const frontpage = readPage("./public/pages/frontend/index.html");
export const frontpagePage = header + frontpage + footer;

const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = header + matches + footer;


//før denne function
//const frontpage = fs.readFileSync("./public/pages/frontend/index.html", "utf-8")

function readPage(path){
    return fs.readFileSync(path).toString();
}