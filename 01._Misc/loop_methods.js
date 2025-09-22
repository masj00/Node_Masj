// .forEach(), .map(), .filter(), .reduce(), .find(), .findIndex(), .some(), .every() .sort()
//for each loops through the entire list but doesnt return new list (use if dont care about values)


// const hvis det ikke ændre sig og loop hvis ikke du kan tælle med fingrerne

const numbers = [1, 2, 3, 4, 5];

//double numbers for loop
const double = [];
for (let i = 0; i < numbers.length; i++) {
  double.push(numbers[i] * 2);
}
//console.log(double);

// Med brug af .map: Returnerer et nyt array, hvor hvert element er det oprindelige tal ganget med 2
const doubledNumber = numbers.map((number) => number * 2);
//console.log(doubledNumber);


const desserts = [
  { name: "flan", weightGrams: 200 },
  { name: "banana split", weightGrams: 700 },
  { name: "brownie", weightGrams: 600 }
];


// Denne linje bruger .map til at oprette et nyt array af desserts.
// Hvis dessertens navn er "brownie", returneres objektet uændret.
const updatedDesserts1 = desserts.map(dessert =>
  // ? : Lav et nyt objekt med ekstra vægt (tenary operator)
  dessert.name !== "brownie" ? { ...dessert, weightGrams: dessert.weightGrams + 400 } : dessert
);
//tenary ? = hvis sand( returner dessert uændret) og : hvis falsk (altså laver et nyt objekt med ekstra vægt)

//console.log(updatedDesserts1);


//den nemme måde
const biggerPortionedDesserts = desserts.map((dessert) => {
    if (dessert.name !== "brownie") {
        dessert.weightGrams += 400;
    }
    return dessert;
});
//console.log(biggerPortionedDesserts);

//i map ville vi gerne have et return
//når der ikke er {} er det et implicit return og man behøver ikke skrive return fx .map(x => x * 2)



//numbers.map((element, index, array) => console.log(element, index, array));

