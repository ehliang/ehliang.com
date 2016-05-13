var React = require('react');
var ReactDom = require('react-dom');
require('../build/main.css');


var Main = React.createClass({
		getInitialState: function() {
			return {continueState: true}; 
		}, 

		handleClick: function(event) { 
			this.setState({continueState: false})
		}, 


	render: function()
	{
		if (this.state.continueState){

			return (
				<div onClick={this.handleClick}>
				<IntroScreen/>
				<div className="blurBack">

				<PortfolioSquare/>

				</div>
				</div>
			);
		}
		else
		{
			return (
				<PortfolioSquare/>
				);
		}
	}
}); 


var PortfolioSquare = React.createClass({ 
	render: function(){
		return (
			<div className="abcd">
				AYYY LMAO
			</div> 


		); 
	}

});





var IntroScreen = React.createClass({
	render: function(){
		return (

			<div className="introFloat">

				<img className="profilePic" src="/img/globe.png"/>
				<h1 className="introFloatTitle">Hey, I'm Ethan Liang.</h1>
				<h3 className="introFloatTitle">Developer, Designer, Entrepreneur.</h3>
				<h5 className="introFloatTitle">Check me out on </h5>

				<a className="introFloatTitle" href="https://github.com/ehliang">GitHub</a> 
				<h5 className="introFloatTitle"> and </h5>
				<a className="introFloatTitle" href="https://www.linkedin.com/in/ehliang">LinkedIn.</a> 

			</div> 


			); 
	}

}); 

ReactDom.render(
	<Main/>, 
	document.getElementById('main')
);