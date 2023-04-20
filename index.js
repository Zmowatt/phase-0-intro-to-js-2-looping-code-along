
let names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names) {
    let i = 0;
    while (i < names.length) {
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++;
    }

    return names;
}

writeCards(names);




function countDown(){
    let num = 10
    while (num >= 0) {
        console.log(--num);
    }
    return num;
}

countDown();
