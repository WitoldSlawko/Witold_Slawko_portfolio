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
			<div id="home">Junior Web Developer Witold Sławko<span>&nbsp;</span></div>
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
						Hello! 
						<br><br>
						 I'm an ambitious code passionate, <br>
						 with strong analytical and problem solving skills. <br> 
						 Everyday I seek to improve myself. <br>
 						 Also, I'm a very communicative  and open minded person.
						<br><br>
						At the moment I'm learning more about ES6, Ruby on Rails, ReactJS & Vue.js.<br>
						Also currently participating in JS Up Skill<br>
						and other Front-End / JavaScript related meetings.
						<br><br>
						Also in future, beside JavaScipt, I plan to master Ruby with Ruby on Rails<br>
						becasue I am strongly focused on Object Oriented Programming.
						<br><br>
						<p :key="3">Check out my CV: <a href="./pdf/Witold_Sławko_CV.pdf" target="_blank">here</a></p>
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
					<img id="chrome" title="Chrome Dev Tools"  src="./images/chrome-min.png" />
				</div>
				<p id="learn" :key="4">At the moment, I'm learning:</p>
				<div id="learn_icons">
					<img id="ruby" title="Ruby" src="./images/ruby-logo.png" />
					<img id="rails" title="Rails" src="./images/rails-logo.png" />
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
			<div id="projects" :key="0">
					<div id="hangman" :key="1">
						<p>Open Shout Wall - a Ruby on Rails project</p>
						<div>
							<img src="./images/osw_ss.png" title="Press and hold for zoom" />
							<a href="https://ror1osw.herokuapp.com/" target="_blank">https://ror1osw.herokuapp.com/</a>
						</div>
					</div>
					<div id="PN2" :key="2">
						<p>Non-public Kindergarten No 2 in Zgorzelec - page made in ReactJS as SPA</p>
						<div>
							<img src="./images/pn2_ss.png" title="Press and hold for zoom" />
							<a href="https://pn-2-zgorzelec.herokuapp.com/#/ " target="_blank">https://pn-2-zgorzelec.herokuapp.com/#/</a>
						</div>
					</div>
					<div id="json_parser" :key="3">
						<p>JSON parser - React app for parsing JSON data to eye-friendly view. </p>
						<div>
							<img src="./images/json_parser_ss.png" title="Press and hold for zoom" />
							<a href="https://json-parser-beta.herokuapp.com" target="_blank">https://json-parser-beta.herokuapp.com</a>
						</div>
					</div>
					<div id="hangman" :key="4">
						<p>Hangman Game - project made for Coders Lab Front-End Course</p>
						<div>
							<img src="./images/hangman_ss.png" title="Press and hold for zoom" />
							<a href="https://witoldslawko.github.io/The_Hangman_CL_Project/" target="_blank">https://witoldslawko.github.io/The_Hangman_CL_Project/</a>
						</div>
					</div>
					<div id="vilb" :key="5">
						<p>Vanilla Image LightBox - a CDN tool made in pure JavaScript for fast images inspection</p>
						<div>
							<img src="./images/vilb_ss.png" title="Press and hold for zoom" />
							<a href="https://witoldslawko.github.io/Vanilla_Image_LightBox/" target="_blank">https://witoldslawko.github.io/Vanilla_Image_LightBox/</a>
						</div>
					</div>
					<div id="jsxgen" :key="6">
						<p>JSXGEN npm package - JSX generator for React projects.</p>
						<div>
							<img src="./images/jsxgen_ss.png" title="Press and hold for zoom" />
							<a href="https://www.npmjs.com/package/jsxgen" target="_blank">https://www.npmjs.com/package/jsxgen</a>
					</div>
				</div>
				<div id="eut" :key="7">
					<p>EUT - Elemantary Unit Testing - basic unit testing, based on goods of object prototyping.</p>
					<div>
						<img src="./images/eut_ss.png" title="Press and hold for zoom" />
						<a href="https://www.npmjs.com/package/eut" target="_blank">https://www.npmjs.com/package/eut</a>
					</div>
				</div>
				<div id="rft" :key="8">
					<p>RFT Ruby gem - a CLI Ruby Files Tamer for text files.</p>
					<div>
						<img src="./images/rft_ss.png" title="Press and hold for zoom" />
						<a href="https://rubygems.org/gems/rft" target="_blank">https://rubygems.org/gems/rft</a>
				</div>
			</div>
			</div>
		</transition>
	`
};
const Contact = {
	template: 
	`
		<transition name="bounce">
			<div id="contact" :key="0">
				<div id="phone" :key="1">
					<p>phone:&nbsp;&#9742;&nbsp;0048-609-929-730</p>
				</div>
				<div id="email" :key="2">
					<p>e-mail:&nbsp;&#9993;&nbsp;witold.slawko@gmail.com</p>
				</div>
				<div id="linkedin" :key="3">
					<p>Linkedin:&nbsp;</p>
					<img src="./images/linkedin-logo.png" />
					<a href="https://www.linkedin.com/in/witold-slawko/" target="_blank">https://www.linkedin.com/in/witold-slawko/</a>
				</div>
				<div id="github" :key="4">
					<p>Github:&nbsp;</p>
					<img src="./images/github-logo.png" />
					<a href = "https://github.com/WitoldSlawko" target="_blank">https://github.com/WitoldSlawko</a>
				</div>
			</div>
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
		info_out: ""
	}
})

time_date.info_out = time_date.info_in.slice(1,time_date.info_in.length-5);
time_date.info_out = time_date.info_out.replace('T', ' ');
/*
var plus2h = parseInt(time_date.info_out.charAt(12))+2;
var part_left = time_date.info_out.slice(0,12);
var part_right = time_date.info_out.slice(13,time_date.info_out.length);
time_date.info_out = part_left + plus2h + part_right;
*/
time_date.$el.innerHTML = 'Loaded at: ' + time_date.info_out;
/*
var napis = 'Junior Front-End Developer: Witold Sławko'
console.log(napis.length);
*/
