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

				<Content/>

				</div>
				</div>
			);
		}
		else
		{
			return (
				<Content/>			
					);
		}
	}
}); 


var Content = React.createClass({
	render:function(){
		return (
		<div>


		<nav className="navbar navbar-dark">
		  <a className="navbar-brand" href="#">Ethan Liang</a>
		  <ul className="nav navbar-nav">
		    <li className="nav-item active">
		      <a className="nav-link" href="#">About Me<span className="sr-only">(current)</span></a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#">Projects</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#">Resume</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#">Contact Me</a>
		    </li>
		  </ul>
		</nav>


	<header>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                		<h1> About Me</h1>

                </div>
            </div>
        </div>
    </header>


    <Portfolio/> 



    </div>


			);
	}

});




// var Portfolio = React.createClass({
// 	getInitialState: function() { 
// 		return {items: ['abc', 'def', 'ghi']};
// 	}, 

// 	handleClick: function(index) {

// 	}, 

// 	render:function(){
// 		return 
// 	}

// });




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