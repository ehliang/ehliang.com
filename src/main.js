var React = require('react');
var ReactDom = require('react-dom');
require('../build/main.css');
var json = require('json!./projects.json');



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

    <Resume/>



    </div>


			);
	}

});




var Portfolio = React.createClass({
	getInitialState: function() { 
		return {description: "Click on any project to learn more"};
	}, 

	handleClick: function(data) {
		console.log(data.projectName);

	}, 

	splitRows: function(inputJson){
		var rowCol = []; 

			inputJson.forEach(function(project, i){
				var row = Math.floor(i/3),
					col = i%3; 

				if(!rowCol[row])
				{
					rowCol[row] = [];
				}
				rowCol[row][col] = project;

			}); 
			return rowCol;

	},

	render:function(){
		var hacks = json.projects.hackathons; 
		var hackProjects = this.splitRows(hacks); 

		return (
			<section> 
			<div className="row">
				<div className="col-md-8">
				Projects
				{hackProjects.map(function(hacks, i){

						return(<div className="row"><PortfolioSquare data={hacks[0]} onClick={this.handleClick.bind(this, hacks[0])}/><PortfolioSquare data={hacks[1]} onClick={this.handleClick.bind(this, hacks[1])}/><PortfolioSquare data={hacks[2]} onClick={this.handleClick.bind(this, hacks[2])}/></div>);
				}, this)}

				</div> 
				<div className="col-md-4">
				{this.state.description}
				</div>
				</div>
			</section> 

			); 
	}

});




var PortfolioSquare = React.createClass({ 
	render: function(){
		return (
			<div className="col-md-4" onClick={this.props.onClick}> 
				{this.props.data.projectName} 
			</div> 
		); 
	}

});

var Resume = React.createClass({ 
	render: function(){
		return (
			<section> 
			<div className="container">
			<p>Resume</p>
			</div>
			</section> 

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