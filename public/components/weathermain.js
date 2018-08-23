var React = require ('react');
var createReactClass = require('create-react-class');
var WeatherForm=require('weatherform');
var WeatherMesage=require('weathermsg');
var Api=require('api');






var WeatherMain=createReactClass({
    
    getInitialState:function(){
        return{
            isLoading: false
        }

    },
    handleSearch:function(location){
        var that =this;
        this.setState({isLoading:true})
        Api.getTemp(location).then(function(temp){
    
            that.setState({
                location:location,
                temp:temp,
                isLoading:false
            })
        },function(errorMessage){
            that.setState({isLoding:false});
            alert(errorMessage);

        });

    },
    render:function(){
        var {isLoading,temp,location}=this.state;
        function renderData(){
            if(isLoading){
                return <h3>Loading data.....</h3>

            }else if(temp && location){
                return  <WeatherMesage location={location} temp={temp}/>
            }
        }
        return(
            <div className="container">

                <div>
                <h1>Weather Appliction</h1>
                </div>
                <div>
                <WeatherForm onSearch={this.handleSearch} />
                </div>
                {renderData()}
            </div>

        )
    }
});
module.exports=WeatherMain;