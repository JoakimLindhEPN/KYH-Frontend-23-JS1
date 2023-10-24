/* 
  Variabler

  variabel = någonting som vi lagrar information i

  variabelnamn: ska vara på engelska
  camelCase   =   JavaScript, Java, C, C++
  Pascal      =   C#, Pascal
  _private    =   en variabel som bara lever inom ett viss scope.

  API_KEY   =   Brukar användas när värdet är konstant och aldrig kommer ändras

  Exempel: firstName, lastName, email,
*/

firstName = 'Joakim';         // global deklarering (Gör INTE såhär)
var firstName = 'Joakim';     // global deklarering (Gör INTE såhär)

let lastName = 'Lindh'        // lokal (scopad) deklarering (Gör såhär!)
// let lastName = 'Andersson'
// console.log(lastName)
lastName = 'Andersson'
// console.log(lastName)

const PI = 3.14 

// PI = 5


/* 
    Deklarera variabler
    ---------------------------------------------------------
    var = global variabel - accessbas öevrallt i koden
    let = lokal variabel  - accessbas inom det givna området
    const = konstant - kan inte skrivas över (undantag finns)


    C# exempel.
      string name = "Joakim";
      int age = 36;

    JS exempel.
      let name = 'Joakim';
      let age = 36;
*/



/* 
  JavaScript Datatyper
  ------------------------------------------------------------

  String      =   Text, 'abc', '123'
  Number      =   Heltal, decimaltal
  Boolean     =   Sant/Falskt,  true/false
  null        =   Tomt, manuellt satt värde
  undefined   =   Odefinierat, tomt (automatiskt)
  Object      =   innehåller ett eller flera andra värden
  Array       =   en lista med värden, Array är av datatyper Object

*/


let datatype;

console.log(typeof datatype);
datatype = 'en text'
console.log(typeof datatype);
datatype = 3
console.log(typeof datatype);
datatype = false
console.log(typeof datatype);
datatype = {}
console.log(typeof datatype);
datatype = []
console.log(typeof datatype);
datatype = null
console.log(typeof datatype);