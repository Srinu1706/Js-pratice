
const makeeven = element =>{
    return element%2===0;
}
let number=[2,3,4,5,6,7,8];
let evennumbers=number.filter(makeeven)
console.log(evennumbers)



const isadult=element=>{
return element>18
}
const ages=[16,17,18,19,20,21]
const adultresult=ages.filter(isadult)
console.log(adultresult)


const ischild=element=>{
return element<18
}
const agess=[16,17,18,19,20,21]
const childResult=agess.filter(ischild)
console.log(childResult)



const isseniorCitizen=element=>{
return element>50
}
const agesss=[16,17,18,19,20,21,71,75]
const Senior=agesss.filter(isseniorCitizen)
console.log(Senior)



let tolower= element =>{   // map is used to transform the data
    return element.toLowerCase();
}

let names=["SRINIVAS","KUSU","RAJU","BHAVANI"];
let lowrcasenames=names.map(tolower)
console.log(lowrcasenames)



let toupper= element =>{
    return element.toUpperCase();
}

let Names=["srinivas","kusu","raju","bhavani"];
let touppernames=Names.map(toupper)
console.log(touppernames)


let dates=["2025-12-24","2025-11-24","2025-06-17","2025-02-04"];

const formatDates = element =>{
    let parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const datess = dates.map(formatDates);
console.log(datess);


let prices =[10,20,30,40,50];
let ReducePrice=(previouselement,nextelement)=>{
    return previouselement+nextelement
}
let singleValue =prices.reduce(ReducePrice)
console.log(singleValue)