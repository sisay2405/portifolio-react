import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import majicball from "../../Assets/Projects/8majicball.png";
import Amazon from "../../Assets/Projects/Amazon.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import Numberguesser from "../../Assets/Projects/Numberguesser.png";
import coffeeExport from "../../Assets/Projects/coffeeExport.png";
import employee from "../../Assets/Projects/employee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <h4 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather-Forecaster-App"
              description=" This app build with knowledge of the React basics (components, JSX, props, event handling, using forms, making API calls, basic hooks) and allow you to practice with React best practices like an ErrorBoundaries, PropTypes, ESLint (to enforce code style consistency), and writing component and unit tests. The app use ESLint with the Airbnb style guide, Prettier and devDependencies installed.Utilize eslintignore, .eslintrc.json, and .prettierrc"
              ghLink="https://github.com/sisay2405/Weather-Forecaster-App"
              demoLink="https://sisay-weather-forecaster-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Numberguesser}
              isBlog={false}
              title="Number-Guesser-React-Project"
              description="A simple React game build understanding of components, JSX, props, state, and events. Practiceing writingcomponent rendering logic both within the JSX (for example, using .map()) AND within component methods that call within the JSX. Use state (the useState() hook) when needed to store data within a component. ES6 syntax(arrow functions, destructuring, the spread operator, object property value shorthand, template literals."
              ghLink="https://github.com/sisay2405/Number-Guesser-React-Project"
              demoLink="https://number-guesser-react.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee-Directory"
              description="Employee Directory app that allows searching and sorting of a list of employees, and the ability to add a new employee to the list. Utilize controlled forms, custom component methods, the useEffect() hook, Tailwind Css and API calls. Use state (the useState() hook) when needed to store data within a component. ES6 syntax(arrow functions, destructuring, the spread operator, object property value shorthand, template literals, etc."
              ghLink="https://github.com/sisay2405/Employee-Directory"
              demoLink="https://sisay-wosen-react-betwise-project.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="restaurant-locator-project"
              description="The app that initially loads Yelp restaurant data for a hardcoded location (Jacksonville), and shows both as restaurant list items and as pushpins on a Leaflet map. A user can then click on individual restaurants to be directed to that restaurant's details page, and build on (components, JSX, props, event handling, using forms, making API calls, basic hooks) and also utilize using styled-components and conditionally rendering components using react-router-dom."
              ghLink="https://github.com/sisay2405/restaurant-locator-project"
              demoLink="https://abel-sisay-hotel-map.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffeeExport}
              isBlog={false}
              title="Coffee Export"
              description="Coffee Export app  is a free Bootstrap 4 HTML5 coffee website template for almost any kind of coffee-based business. It is a responsive and mobile-ready , following multi-page design. Loads content on scroll, fun fact counters, on-hover effect, filterable menu, and a blog section are some of the handy options.Drop-down menu,On scroll reveal animation, Fun fact counters, Google map, Shopping cart, Ghost button, Animated sticky top navigation bar, Multi-page template "
              ghLink="https://github.com/sisay2405/sisay2405.github.io"
              demoLink="https://coffee-export.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={majicball}
              isBlog={false}
              title="A Magic 8 Ball"
              description="Creating a Magic 8 Ball in HTML5 with JavaScript. Eight ball Majic Ball app  is HTML5 and css, Javascript. It is a responsive and mobile-ready.We will use a simple answers array. When the window is loaded,  a click listener on the eight-ball div. So, when the user click on the Magic 8 Ball the function will be called and check if a question has been entered. If not, we display an alert to the user indicating that he must enter a question."
              ghLink="https://github.com/sisay2405/sisay2405.github.io"
              demoLink="https://coffee-export.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon"
              description="Amazone Clone app that allows searching and sorting of a list of staffs. Utilize controlled forms, custom component methods, the useEffect() hook and API calls. Use state (the useState() hook) when needed to store data within a component. ES6 syntax(arrow functions, destructuring, the spread operator, object property value shorthand, template literals. Utilize using styled-components and conditionally rendering components using react-router-dom."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
