// import React from "react";
// import styled from 'styled-components';


// const PreloadWrapper = styled.nav`
// .preloader {
//   position: fixed;
//   top: 10px;
//   left: 10px;
//   width: 100%;
//   height: 100%;
//   z-index: 999999;
//   background-color: #0c0513;
//   background-image: url(./Assets/pre.svg);
//   background-repeat: no-repeat;
//   background-position: center;
// }

// .preloader-none {
//   opacity: 0;
// }
// `;

// const Pre = ({load}) => {
//   return <PreloadWrapper className={load ? "preloader" : "preloader-none"}></PreloadWrapper>;
// }

// export default Pre;
import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
