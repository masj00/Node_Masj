//man behøver ikke at bruge TEMPLATEENGINGE LIBRARIES FORDI MAN SELV KAN LAVE DEM
//SSR HAR DE 4 PUNKTER DER ER FOR DET LOAD TIME, RESSOURCES, SEO, CORS- SSR HAR IKKE CORS PROBLEMER

//fs er indbygget i node da det er tungt skal man importere dere LEKSION 8/9?
import fs from 'fs';


    const header = readPage("./public/components/header/header.html");
    const footer = readPage("./public/components/footer/footer.html");
//den er mere dynamisk
export function constructPage(pageContent, options = {}) {
    //|| løser oppe i toppen altså oppe ved tabbene i browser
    return header
    .replace('$$TAB_TITLE$$', options.tabTitle || "DogInder")
    .replace('$$CSS_LINKS$$', options.cssLinks || '')
    + pageContent 
    + footer;
}
//SE HANS GIT


//før denne function
//const frontpage = fs.readFileSync("./public/pages/frontend/index.html", "utf-8")

export function readPage(path){
    return fs.readFileSync(path).toString();
}