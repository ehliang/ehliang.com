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


	<Navbar/>

	<About/>

    <Portfolio/> 

    <Resume/>

    <Contact/>

    </div>


			);
	}

});

var Navbar = React.createClass({
	render: function(){
		return(
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
		   	<li className="nav-item">
		      <a className="nav-link" href="https://github.com/ehliang">GitHub</a>
		    </li>
		   	<li className="nav-item">
		      <a className="nav-link" href="https://www.linkedin.com/in/ehliang">LinkedIn</a>
		    </li>
		  </ul>
		</nav>
		);
	}
});

var About = React.createClass({
	render:function(){
		return (		
			<header>
		        <div className="container-fluid">
		            <div className="row">
		                <div className="col-lg-12">
		                		<h1> About Me</h1>
		                		<h4>I'm Ethan, a Systems Design Engineering student at the University of Waterloo. Tech enthusiast who enjoys hackathon and side projects. Mainly focused on full-stack web and native Android development. Currently exploring data science and machine learning. Looking for part-time opportunities.</h4>
		                </div>
		            </div>
		        </div>
		    </header>
			);
	}
});


var IntroScreen = React.createClass({
	render: function(){
		return (

			<div className="introFloat">
			<div className="intro-block">
				<img className="profilePic" src="src/img/globe.png"/>
				<h1 className="introFloatTitle">Hey, I'm Ethan Liang.</h1>
				<h3 className="introFloatTitle">Developer, Designer, Entrepreneur.</h3>
				<h5 className="introFloatTitles">Check me out on </h5>

				<a className="introFloatTitle" href="https://github.com/ehliang">GitHub</a> 
				<h5 className="introFloatTitles"> and </h5>
				<a className="introFloatTitle" href="https://www.linkedin.com/in/ehliang">LinkedIn.</a> 
				</div>
			</div> 


			); 
	}

}); 


var Portfolio = React.createClass({
	getInitialState: function() { 
		return {description: "Click on any project to learn more.", initialClick:true, hack:true};
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
			<h4>Project Name:</h4>
			<div>{project.projectName}</div>
			<h4>Hackathon:</h4>
			<div>{project.hackathon}</div>
			<h4>Location:</h4> 
			<div>{project.location}</div>
			<h4>Time:</h4>
			<div>{project.time}</div> 
			<h4>Description:</h4>
			<div>{project.description}</div>
			<h4>Links</h4>
			<div>{project.link}</div>


		</div>:
		<div>
			<div>Project Name: {project.projectName}</div>

		</div>);

		return (
			<section> 
			<div className="container-fluid">
			<div className="row">
				<div className="col-md-8">
				<h1>Projects</h1>
				<div className="row">
				<h3>Hackathons</h3>
				</div>
				{hackProjects.map(function(hacks, i){

						return(<div className="row" key={i}>
							{hacks.map(function(proj,j){
								return (<PortfolioSquare key={j} data={proj} onClick={this.handleClick.bind(this, proj, true)}/>);
							}, this)}
							</div>);
				}, this)}
				<div className="row">
				<h3>Personal</h3>
				</div>
				{personalProjects.map(function(personal,i){
						return(<div className="row" key={i}>
							{personal.map(function(proj,j){
								return (<PortfolioSquare key={j} data={proj} onClick={this.handleClick.bind(this, proj, false)}/>);
							}, this)}
							</div>);
				}, this)}

				</div> 
				<div className="col-md-4">
				<h1>Info</h1>
				{infoText}
				</div>
				</div>
				</div>
			</section> 

			); 
	}

});




var PortfolioSquare = React.createClass({ 
	render: function(){
		return (
			<div className="col-md-4 panel panel-default" onClick={this.props.onClick}> 
				<div className="panel-body portfolio-square">
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
			<div className="container-fluid">
			<h1>Resume</h1>
			<a href="https://docs.google.com/viewer?url=https://github.com/ehliang/resume/raw/master/Resume.pdf">
			<img className="center-block downloadIcon" src="src/img/download.png"/>
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
			<div className="container-fluid">
			<h1>Contact Me</h1>
			<form>

			<fieldset className="form-group">
			    <label for="inputEmail">Email address</label>
    			<input type="email" className="form-control" id="inputEmail" placeholder="Enter email"/>
			</fieldset>

			<fieldset className="form-group">
    			<label for="textarea">Message</label>
    			<textarea className="form-control" id="textarea" rows="3" placeholder="Message"></textarea>
			</fieldset>

			  <Recaptcha
    			sitekey="6LcA8h8TAAAAAMf3AZfSM7aHZzCTBbg7Jx18wy8b"
          		size="normal"
          		render="explicit"
          		verifyCallback={this.verifyCallback}
          		onloadCallback={this.callback}
          		expiredCallback={this.expiredCallback}
  			/>
			<br/>

  			<button type="submit" value="submit" className="btn btn-primary">Submit</button>
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