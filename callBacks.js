const register=(callback)=>{
    let isRegister=true;
    setTimeout(()=>{
        if(isRegister===true){
        console.log("You are already registered");
        callback();
    }
    else{
        console.log("You are not registered");
    }
    },2000);

}
     
const login=(callback)=>{
    let isLogin=true;
    setTimeout(()=>{
        if(isLogin===true){
        console.log("You are logged in");
        callback();
    }
    else{
        console.log("You are not logged in");
    }
    },3000)
}

const ThnakYou=()=>{
    setTimeout(()=>{
        console.log("Thank you for registering and logging in");
    }
    
    ,4000)
    
}

// register(()=>{
//     login(()=>{
//         ThnakYou();
//     })
// })


const arr=[12,34,56,78,90];

const filteredArr=arr.filter((num)=>{
    return num!==56;
})

console.log(filteredArr);
//-------------------------------------------
const mappedArray=arr.map((num)=>num +1);
console.log(mappedArray);
//-------------------------------------------
const ReducedValue=arr.reduce((acc,num)=>{
    return acc+num;
},0)
console.log(ReducedValue);
//-------------------------------------------

const findValue=arr.find((num)=>{
    return num===56;
})
console.log(findValue);
//-------------------------------------------

const forEachValue=arr.forEach((num)=>{
    console.log(num);
})
//-------------------------------------------