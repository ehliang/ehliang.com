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
		<nav className="navbar navbar-default">
		  <a className="navbar-brand" href="#">Ethan Liang</a>
		  <ul className="nav navbar-nav">
		    <li className="nav-item">
		      <a className="nav-link" href="#about">About Me</a>
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
		                <div className="col-xs-9">
		                		<h1> About Me</h1>
		                		<h4 className="about-section-beginning">I'm Ethan, a Systems Design Engineering student at the University of Waterloo. I love hackathons and side projects. Currently working with data science and machine learning.</h4>
		                		<h4 className="about-section-middle">Researcher in the <a href="http://kimia.uwaterloo.ca">University of Waterloo KIMIA Lab</a>, Past Resident of <a href="http://velocity.uwaterloo.ca/about-us/">Velocity Startup Incubator</a>, Grand Finalist of <a href="https://hackthenorth.com">Hack the North 2016</a>.</h4>
		                		<h4 className="about-section-middle">Dog Person. Loves reading, photography, planes, running, foosball, DIY.</h4>
		                		<h4 className="about-section-end">Currently looking for software internship opportunities.<br/><br/> Let's Connect!</h4>
		                </div>
		                <div className="col-xs-2">
		                <img className="profilePic" src="src/img/photo.png"/>
		                </div>
		            </div>
		        </div>
		        <hr/>
		    </header>
			);
	}
});


var IntroScreen = React.createClass({
	render: function(){
		return (

			<div className="introFloat">
			<div className="intro-block">
				<h1 className="introFloatTitle">Hey, I'm Ethan!</h1>
				<h3 className="introFloatTitle">Software Engineer / Data Scientist</h3>
				<h5 className="introFloatTitles">Check me out on </h5>

				<a className="introFloatTitleLink" href="https://github.com/ehliang">GitHub</a> 
				<h5 className="introFloatTitles"> and </h5>
				<a className="introFloatTitleLink" href="https://www.linkedin.com/in/ehliang">LinkedIn</a>
				

				<h5 className="clickAnywhere">Click anywhere to find out more!</h5>
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
			<h4>Built With:</h4>

			{project.builtWith.map(function(built,i){
				return(<button key={i} className="btn-static">{built.tech}</button> ); 

			}, this)}

			<h4>Links</h4>
			{project.link.map(function(link,i){
				return(<div key={i}><a href={link.link}><h5>{link.linkName}</h5></a></div> ); 

			}, this)}

		</div>:
		<div>
			<h4>Project Name:</h4>
			<div>{project.projectName}</div>
			<h4>Description:</h4>
			<div>{project.description}</div>
			<h4>Built With:</h4>

			{project.builtWith.map(function(built,i){
				return(<button key={i} className="btn-static">{built.tech}</button> ); 

			}, this)}

			<h4>Links</h4>
			{project.link.map(function(link,i){
				return(<div key={i}><a href={link.link}><h5>{link.linkName}</h5></a></div> ); 

			}, this)}

		</div>);

		return (
			<section className="about-me-section"> 
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8">
						<h1>Projects</h1>
							<div className="project-section">
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
					</div>
					<div className="col-xs-4">
					<div className="row">
						<h1>Info</h1>
						{infoText}
						</div>
					</div>
				</div>
			</div>
			<hr/>
		</section> 

			); 
	}

});




var PortfolioSquare = React.createClass({ 
	render: function(){
		return (
			<div className="col-xs-4 panel panel-default" onClick={this.props.onClick}> 
				<div className="panel-body portfolio-square">
				<img className="square-image" src={this.props.data.image}/>
				<h4>{this.props.data.projectName}</h4>
				</div>
			</div> 
		); 
	}

});

var Resume = React.createClass({ 
	render: function(){
		return (
			<section className="about-me-section" id="resume"> 
			<div className="container-fluid">
		            <div className="row">
		                <div className="col-xs-9">
		                		<h1>Resume</h1>
		                		<a href="https://docs.google.com/viewer?url=https://github.com/ehliang/resume/raw/master/ResumeSE.pdf">
									<h3 className="about-section-beginning"> Software Engineering</h3>
								</a>
								<a href="https://docs.google.com/viewer?url=https://github.com/ehliang/resume/raw/master/ResumeDS.pdf">
									<h3 className="about-section-beginning">Data Science</h3>
								</a>
								<a href="https://docs.google.com/viewer?url=https://github.com/ehliang/resume/raw/master/ResumePM.pdf">
									<h3 className="about-section-beginning">Project Manager</h3>
								</a>
		                </div>
		    		</div>

			</div>
			<hr/>

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
			<div className="contact-section"> 

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
			</div>
			</section>
			);
	}
});



ReactDom.render(
	<Main/>, 
	document.getElementById('main')
);