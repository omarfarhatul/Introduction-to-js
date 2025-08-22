// Ternary -->three parts
const age = 12;
// if(age >= 18){
//     console.log('You can vote.');
// }
// else{
//     console.log('Not vote.');
// }

age >=18 ? console.log('Voter') : console.log('Not Voter')



let price = 500;
const isLeader=true;
// if(isLeader === true){
//     price=0;
// }
// else{
//     price=price+100;
// }
// console.log(price);
price = isLeader === true  ? console.log(0) : console.log(price+100);

// optional: semi-advance ternary
if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price=0;
    }
}
else{
        price=price+1000;
}
console.log(price);
price =isLeader === true ? 
        price > 1000 ? 
            price /2 : 0 : price+1000;