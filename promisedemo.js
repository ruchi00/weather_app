


function promisedemo(location){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(80);
            reject('city not found');

        },1000);
    })
}
promisedemo().then(function(temp){
    console.log("promise is succes",temp);
},function(err){
    console.log("error",err)
})