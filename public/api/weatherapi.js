

var axios=require('axios');
const WEATHER_URL='http://api.openweathermap.org/data/2.5/weather?appid=4e56e3653c10becccac876ff12ad6ff8';
module.exports={
                getTemp:function(location){
                              var el=encodeURIComponent(location);
                              var url=`${WEATHER_URL}&q=${el})`;
                                return axios.get(url).then(function(res){
                                         if(res.data.cod && res.data.message)
                                         {
                                                 throw new Error(res.data.messege);
                                         }
                                        else
                                        {
                                                  return res.data.main.temp;
                                        }
                                  },function(res){
                                        throw new Error(res.data.message);
                                            })
        
    }
}