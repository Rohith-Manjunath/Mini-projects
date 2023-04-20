const promise=new Promise((resolve,reject)=>{
    const isLogin=false;

    isLogin?resolve("successfully logged in"):reject("failed to login");

})

promise
.then(data=>console.log(data))
.catch(data=>console.log(data))
.finally(console.log("Mujhe ghanta farak nhi padtha..."))