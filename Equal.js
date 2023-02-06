let varA = 1;
let varB = '2';
let varC = 2;

if (varA == varB) {

    console.log('A = B')
}

else {
    console.log('A er ikke lig med B')
}


if (varA == varB && varA == varC) {

    console.log('A og B skal ens, og A og C skal være ens')

}

if (varB == varC || varA == varC) {

    console.log('enten A eller C skal være rigtig')

}