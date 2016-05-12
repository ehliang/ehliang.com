var React = require('react');
var ReactDom = require('react-dom');


var Main = React.createClass({
	render: function()
	{
		return (
			<IntroScreen/>
			);
	}
}); 



var IntroScreen = React.createClass({
	getInitialState: function() {
			return {continueState: false}; 
		}, 

		handleClick: function(event) { 
			this.setState({continueState: true})
		}, 

	render: function(){


		return (

			<div className="introFloat">
				<p className="introFloatTitle"  onClick={this.handleClick}>Hey, I'm Ethan Liang {this.state.continueState}</p>


			</div> 



			); 
	}

}); 

ReactDom.render(
	<Main/>, 
	document.getElementById('main')
);