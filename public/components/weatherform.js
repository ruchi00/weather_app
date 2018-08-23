var React = require ('react');
var createReactClass = require('create-react-class');




var WeatherForm = createReactClass({
    onFormSubmit:function(e){
        e.preventDefault();
        var location= this.refs.city.value;
        if(location.length>0){
            this.refs.city.value='';
            this.props.onSearch(location);
        }
    },

    render:function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                
                <input type="text" className="form-control" ref="city" placeholder="Enter City"/>
                </div>
                <button type="button" className="btn btn-success">Check Weather</button>
                </form>
            </div>
        )
    }
})
module.exports=WeatherForm ;