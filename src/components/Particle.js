import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	const particlesLoaded = (container) => {};
	return (
		// <Particles
		//   id="tsparticles"
		//   init={particlesInit}
		//   loaded={particlesLoaded}
		//   options={{
		//     background: {
		//       color: {
		//         value: "orange",
		//       },
		//     },
		//     fpsLimit: 120,
		//     interactivity: {
		//     },
		//     particles: {
		//       color: {
		//         value: "#ffffff",
		//       },
		//       links: {
		//         color: "#orange",
		//         distance: 150,
		//         enable: true,
		//         opacity: 0.7,
		//         width: 1,
		//       },
		//       collisions: {
		//         enable: true,
		//       },
		//       move: {
		//         direction: "none",
		//         enable: true,
		//         outModes: {
		//           default: "bounce",
		//         },
		//         random: true,
		//         speed: 1,
		//         straight: false,
		//       },
		//       number: {
		//         density: {
		//           enable: true,
		//           area: 400,
		//         },
		//         value: 80,
		//       },
		//       opacity: {
		//         value: 0.5,
		//       },
		//       shape: {
		//         type: "triangle",
		//       },
		//       size: {
		//         value: { min: 1, max: 5 },
		//       },
		//     },
		//     detectRetina: true,
		//   }}
		// />
		<div></div>
	);
};
export default Particle;
// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               value_area: 1500,
//             },
//           },
//           line_linked: {
//             enable: false,
//             opacity: 0.03,
//           },
//           move: {
//             direction: "right",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               particles_nb: 1,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default Particle;
