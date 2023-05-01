import React from "react";
import {
	SiJavascript,
	SiHtml5,
	SiNodedotjs,
	SiGit,
	SiCss3,
	SiReact,
	SiTypescript,
	SiVisualstudiocode,
	SiPostman,
	SiFigma,
	SiDocker,
	SiKubernetes,
} from "react-icons/si";
import {
	weatherForeCaster,
	numberGuesser,
	emloyee,
	restaurant,
	coffeeExport,
	majicball,
	amazon,
} from "../Assets/Projects";
const TechStack = [
	{
		title: "Javascript",
		icon: <SiJavascript size={25} style={{ color: "yellow" }} />,
	},
	{
		title: "React",
		icon: <SiReact size={25} style={{ color: "cyan" }} />,
	},
	{
		title: "HTML",
		icon: <SiHtml5 size={25} style={{ color: "orange" }} />,
	},
	{
		title: "NodeJS",
		icon: <SiNodedotjs size={25} style={{ color: "light-green" }} />,
	},
	{
		title: "Git",
		icon: <SiGit size={25} style={{ color: "red" }} />,
	},
	{
		title: "CSS",
		icon: <SiCss3 size={25} style={{ color: "yellow" }} />,
	},
	{
		title: "Type script",
		icon: <SiTypescript size={25} style={{ color: "cyan" }} />,
	},
];

const project = [
	{
		imgPath: weatherForeCaster,

		title: "Weather-Forecaster-App",
		// description:
		// 	" This app build with React, ErrorBoundaries, PropTypes, ESLint with the Airbnb style guide, Prettier and devDependencies installed.Utilize eslintignore, .eslintrc.json, and .prettierrc", 
		ghLink: "https://github.com/sisay2405/Weather-Forecaster-App",
		demoLink: "https://sisay-weather-forecaster-app.netlify.app/",
	},
	{
		imgPath: numberGuesser,
		title: "Number-Guesser-React-Project",
		// description:
		// 	"A simple React game build understanding of components, JSX, props, state, and events.Use state (the useState() hook) when needed to store data within a component. ES6 syntax(arrow functions, destructuring, the spread operator, object property value shorthand, template literals.",
		ghLink: "https://github.com/sisay2405/Number-Guesser-React-Project",
		demoLink: "https://number-guesser-react.netlify.app/",
	},
	{
		imgPath: emloyee,
		title: "Employee-Directory",
		// description:
		// 	"Employee Directory app  Utilize controlled forms, custom component methods, the useEffect() hook, Tailwind Css and API calls. UseState, ES6 syntax(arrow functions, destructuring, the spread operator, object property value shorthand, template literals, etc.",
		ghLink: "https://github.com/sisay2405/Employee-Directory",
		demoLink: "https://sisay-wosen-react-betwise-project.netlify.app/",
	},
	{
		imgPath: restaurant,
		title: "restaurant-locator-project",
		// description:
		// 	// "The app that initially loads Yelp restaurant data for a hardcoded location (Jacksonville), and  build on (components, JSX, props, event handling, using forms, making API calls, basic hooks) and also utilize using styled-components and conditionally rendering components using react-router-dom."
		ghLink: "https://github.com/sisay2405/restaurant-locator-project",
		demoLink: "https://abel-sisay-hotel-map.netlify.app/",
	},
	{
		imgPath: coffeeExport,
		title: "Coffee Export",
		// description:
		// 	"Coffee Export app  is a free Bootstrap 4 HTML5 coffee website template for almost any kind of coffee-based business. It is a responsive and mobile-ready , following multi-page design. Loads content on scroll, fun fact counters, on-hover effect, filterable menu, and a blog section are some of the handy options.Drop-down menu,On scroll reveal animation, Fun fact counters, Google map, Shopping cart, Ghost button, Animated sticky top navigation bar, Multi-page template ",
		ghLink: "https://github.com/sisay2405/sisay2405.github.io",
		demoLink: "https://coffee-export.netlify.app/",
	},
	{
		imgPath: majicball,
		title: "A Magic 8 Ball",
		// description:
		// 	"Creating a Magic 8 Ball in HTML5 with JavaScript. Eight ball Majic Ball app  is HTML5 and css, Javascript. It is a responsive and mobile-ready.We will use a simple answers array. When the window is loaded,  a click listener on the eight-ball div. So, when the user click on the Magic 8 Ball the function will be called and check if a question has been entered. If not, we display an alert to the user indicating that he must enter a question.",
		ghLink: "https://github.com/sisay2405/sisay2405.github.io",
		demoLink: "https://coffee-export.netlify.app/",
	},
	{
		imgPath: amazon,
		title: "Amazon",
		// description:
		// 	"Amazone Clone app that allows searching and sorting of a list of staffs. Utilize controlled forms, custom component methods, the useEffect() hook and API calls. Use state (the useState() hook) when needed to store data within a component. ES6 syntax(arrow functions, destructuring, the spread operator, object property value shorthand, template literals. Utilize using styled-components and conditionally rendering components using react-router-dom.",
		ghLink: "",
		demoLink: "",
	},
];

const tools = [
	{
		title: "VS Code",
		icon: <SiVisualstudiocode size={25} style={{ color: "yellow" }} />,
	},
	{
		title: "Postman",
		icon: <SiPostman size={25} style={{ color: "cyan" }} />,
	},
	{
		title: "Docker",
		icon: <SiDocker size={25} style={{ color: "orange" }} />,
	},
	{
		title: "Figma",
		icon: <SiFigma size={25} style={{ color: "light-green" }} />,
	},
	{
		title: "Kubernets",
		icon: <SiKubernetes size={25} style={{ color: "red" }} />,
	},
];
export { project, TechStack, tools };
