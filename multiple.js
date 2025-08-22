const salary = 25000;
const isBCS = true;
const height = 160;
const hasCar = false;

if(salary > 20000 && height > 160){
    console.log('Accept for jamai');
}
else{
    console.log('Reject for jamai');
}


if(salary > 25001 || height > 160 || isBCS == true){
    console.log('Accept for jamai');
}
else{
    console.log('Reject for jamai');
}


if((salary > 22000 && hasCar == true) || isBCS == true){
    console.log('Accept for jamai');
}
else{
    console.log('Reject for jamai');
}