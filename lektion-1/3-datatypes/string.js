// STRING - text

/* 
  let name = "Joakim"
  let name = 'Joakim'   - Denna brukar vi oftast använda
  let name = `Joakim`   - Används när vi vill göra en template literal (shift + ´, tryck mellanslag)

*/


let text = "Mitt namn är Joakim och jag är \"bäst\" i 'hela' världen"
text = 'Mitt namn är Joakim och jag är "bäst" i \'hela\' världen'

let name = 'Joakim';
let age = 36;

text = 'Jag heter ' + name + ' och jag är ' + age + ' år gammal';
text = "Jag heter " + name + " och jag är " + age + " år gammal";

// Template literal
text = `Jag heter ${name} 
och jag är ${age} år gammal`


// console.log(text)


let myName = 'Joakim Lindh'

// console.log(myName.length)
// console.log(myName[1])
// console.log(myName.indexOf('k'))

// console.log(myName.toUpperCase())
// console.log(myName.toLowerCase())


let names = myName.split(' ')
console.log(names)

let firstName = names[0]
let lastName = names[1]


let text2 = `                                mitt förnamn är ${firstName} och mitt efternamn är ${lastName}`
console.log(text2.trim())  


document.body.innerHTML = `Hej ${firstName}, Välkommen tillbaka! <img src="" onerror="alert('hahahaha')" />`