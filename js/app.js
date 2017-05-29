/*
const Home = {
	template: 
	`
		<transition name="bounce">
			<div id="home">Junior Front-End Developer:Witold Sławko<span>&nbsp;</span></div>
		</transition>
	`
};
*/

const Home = Vue.component('home', {
  template: 
	`
		<transition name="bounce">
			<div id="home">Junior Front-End Developer:Witold Sławko<span>&nbsp;</span></div>
		</transition>
	`
});

const About = {
	template: 
	`	
		<transition-group name="bounce">
			<div id="myself" :key="0">
				<div id="my_pic" :key="1"></div>
					<div id="about" :key="2">
						Hello! <br>
						I'm an ambitious code passionate who recently <br>
						graduated Coders Lab front-end bootcamp <br> 
						and is determinated to start working <br>
						as a junior front-end developer.
					</div>
			</div>
		</transition-group>
	`
};
const Skills = {
	template: 
		`
		<transition-group name="bounce">
			<div id="skills" :key="0">
				<p id="known" :key="1">I already know and use:</p>
				<div id="known_icons" :key="2">
					<img id="html5" title="HTML5" src="./images/html5-min.png" />
					<img id="css3" title="CSS3" src="./images/css3-min.png" />
					<img id="js" title="JavaScipt ES5 & ES6" src="./images/js-min.png" />
					<img id="sass" title="Sass" src="./images/sass-min.png" />
					<img id="jquery" title="jQuery" src="./images/jquery-min.png" />
					<img id="git" title="GIT" src="./images/git-min.png" />
					<img id="npm" title="NPM" src="./images/npm-min.png" />
					<img id="yarn" title="yarn" src="./images/yarn-min.png" />
					<img id="gulp" title="Gulp" src="./images/gulp-min.png" />
				</div>
				<p id="used" :key="3">Everyday I work with:</p>
				<div id="used_icons">
					<img id="vs_code" title="Visual Code Studio" src="./images/visual-studio-code-logo.png"/>
					<img id="avocode" title="Avocode" src="./images/avocode-logo.png"/>
					<img id="chrome" title="Chrom Dev Tools"  src="./images/chrome-min.png" />
				</div>
				<p id="learn" :key="4">At the moment, I'm learning:</p>
				<div id="learn_icons">
					<img id="react" title="ReactJS" src="./images/react-min.png" />
					<img id="vuejs" title="vueJS" src="./images/vuejs-logo.png"/>
				</div>
			</div>
		</transition-group>
`
};
const Projects = {
	template: 
	`
		<transition name="bounce">
			<div id="projects">projects</div>
		</transition>
	`
};
const Contact = {
	template: 
	`
		<transition name="bounce">
			<div id="contact">contact</div>
		</transition>
`
};

//``

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/skills',
		component: Skills
	},
	{
		path: '/projects',
		component: Projects
	},
	{
		path: '/contact',
		component: Contact
	}
];

const router = new VueRouter({
	routes
});

var routing = new Vue({
	el: '#routing',
	data: {
	},
	router,
}).$mount('#routing');

var time_date = new Vue({
	el: "#time_date",
	data: {
		info_in: JSON.stringify(new Date()),
		info_out: ''
	}
})

time_date.info_out = time_date.info_in.slice(1,time_date.info_in.length-5);
time_date.info_out = time_date.info_out.replace('T', ' ');
time_date.$el.innerHTML = 'Loaded at: ' + time_date.info_out;

var napis = 'Junior Front-End Developer: Witold Sławko'
console.log(napis.length);