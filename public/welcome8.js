var React = require ('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');


var WelcomeMesage = createReactClass({
    render:function(){
        var city=this.props.city;
        var state=this.props.state;
        return(
            <div>
                <h1>Welcome To My City is{" "} {city}{" "} And My State is{" "}{state}</h1>
                
            </div>
        )
    }
});

var WelcomeForm = createReactClass({
    onFormSubmit:function(e){
    e.preventDefault();
    var updates={};
    var city=this.refs.city.value;
    var state=this.refs.state.value;
    if(city.length>0){
        this.refs.city.value='';
        updates.city=city;
    }
    if(state.length>0){
        this.refs.state.value='';
        updates.state=state;
    }
    this.props.collectData(updates)
    },
    render:function(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                    Enter your city:<input type='text' ref='city' placeholder='enter city'/>{"  "}
                    Enter your state:<input type='text' ref='state' placeholder='enter state'/>{"  "}

                <button>submit</button>
                </div>
            </form>
        )
    }
});
var WelcomeMain=createReactClass({
    getDefaultProps:function(){
        return{
            city:'pune',
            state:'haryana'
        }
    },
    getInitialState:function(){
        return{
            city:this.props.city,
            state:this.props.state
        }

    },
    changeState:function(updates){
        this.setState(updates)

    },
    render:function(){
        var city=this.state.city;
        var state=this.state.state;
        return(
            <div>
                <WelcomeMesage city={city} state={state}/>{"    "}
                <WelcomeForm collectData={this.changeState}/>
            </div>

        )
    }
})
ReactDOM.render(
    <WelcomeMain/>,
    document.getElementById('app')
)