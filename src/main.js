var React = require('react');
var ReactDom = require('react-dom');
require('../build/main.css');
var json = require('json!./projects.json');
var Recaptcha = require('react-recaptcha');



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
		      <a className="nav-link" href="#about">About Me<span className="sr-only">(current)</span></a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#projects">Projects</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#resume">Resume</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#contact">Contact Me</a>
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

    <div className="container">
    <Portfolio/> 
    </div>

    <Resume/>

    <Contact/>

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



var Portfolio = React.createClass({
	getInitialState: function() { 
		return {description: "Click on any project to learn more", initialClick:true, hack:true};
	}, 

	handleClick: function(data, hack) {
		this.setState({initialClick:false});
		this.setState({description: data});
		this.setState({hack:hack});

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

		var personal = json.projects.personal; 

		var personalProjects = this.splitRows(personal);

		var project = this.state.description; 

		var infoText = this.state.initialClick ? this.state.description : 

		(this.state.hack ? 
		<div>

			<div>Project Name: {project.projectName}</div>
			<div>Hackathon: {project.hackathon}</div>
			<div>Hours: {project.time}</div> 
			<div>Location: {project.location}</div>
			<div>About: {project.description}</div>

		</div>:
		<div>
			<div>Project Name: {project.projectName}</div>

		</div>);

		return (
			<section> 
			<div className="row">
				<div className="col-md-8">
				<h1>Projects</h1>

				<h3>Hackathons</h3>

				{hackProjects.map(function(hacks, i){

						return(<div className="row" key={i}>
							<PortfolioSquare data={hacks[0]} onClick={this.handleClick.bind(this, hacks[0], true)}/>
							<PortfolioSquare data={hacks[1]} onClick={this.handleClick.bind(this, hacks[1], true)}/>
							<PortfolioSquare data={hacks[2]} onClick={this.handleClick.bind(this, hacks[2], true)}/>
							</div>);
				}, this)}

				<h3>Personal</h3>
				{personalProjects.map(function(personal,i){
						return(<div className="row" key={i}>
							<PortfolioSquare data={personal[0]} onClick={this.handleClick.bind(this, personal[0], false)}/>
							<PortfolioSquare data={personal[1]} onClick={this.handleClick.bind(this, personal[1], false)}/>
							<PortfolioSquare data={personal[2]} onClick={this.handleClick.bind(this, personal[2], false)}/>
							</div>);

				}, this)}

				</div> 




				<div className="col-md-4">
				<h1>Info</h1>
				{infoText}
				</div>
				</div>
			</section> 

			); 
	}

});




var PortfolioSquare = React.createClass({ 
	getInitialState: function(){
		return {hover:false};
	},

	onMouseOver: function(){
		this.setState({hover:true});
	}, 
	onMouseOut: function(){
		this.setState({hover:false});
	},

	render: function(){

		return (

			<div className="col-md-4 panel panel-default" onClick={this.props.onClick}> 
				<div className="panel-body portfolio-square" onMouseOver ={this.onMouseOver} onMouseOut ={this.onMouseOut}>
				{this.props.data.projectName} 
				</div>
			</div> 
		); 
	}

});

var Resume = React.createClass({ 
	render: function(){
		return (
			<section className="resume" id="resume"> 
			<div className="container">
			<h1>Resume</h1>
			<a href="https://github.com/ehliang/resume/raw/master/Resume.pdf">
			<img className="center-block downloadIcon" src="./img/download.png"/>
			</a>
				<h3 className="download">Download</h3>
			</div>
			</section> 

			);
	}

});


var Contact = React.createClass({
	verifyCallback:function(response){
		console.log(response);
	},
	callback:function(){
		console.log("ayyy");
	},
	expiredCallback:function(){
		console.log('expired');
	},

	render: function()
	{
		return (
			<section className="contact" id="contact">
			<div className="container">
			<h1>Contact Me</h1>
			<form>
			  <Recaptcha
    			sitekey="6LcA8h8TAAAAAMf3AZfSM7aHZzCTBbg7Jx18wy8b"
          		size="compact"
          		render="explicit"
          		verifyCallback={this.verifyCallback}
          		onloadCallback={this.callback}
          		expiredCallback={this.expiredCallback}
  			/>
			<br/>

      		<input type="submit" value="Submit"/>
			</form>
			</div>
			</section>
			);
	}
});



ReactDom.render(
	<Main/>, 
	document.getElementById('main')
);