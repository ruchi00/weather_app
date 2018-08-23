var React = require ('react');
var createReactClass = require('create-react-class');



var WeatherMesage = createReactClass({
    render:function(){
        var {location,temp}=this.props;
        return(
            <div>
                <h1>Welcome To My City is{" "} {location}{" "} And temp is{" "}{temp}</h1>
                
            </div>
        )
    }
});
module.exports=WeatherMesage;