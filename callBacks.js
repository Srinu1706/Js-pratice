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

register(()=>{
    login(()=>{
        ThnakYou();
    })
})