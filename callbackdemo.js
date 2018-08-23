


function getTempCallback(location,callback){
    callback(false,80);
    callback("hey",undefined);
}
getTempCallback("pune",function(err,temp){
    if(err){
        console.log("error",err);
    }
    else{
        console.log("success",temp);

    }

})
