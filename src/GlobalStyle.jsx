import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: #050816 !important;
}
html {
    background-color: "#050816";;
  
    --image-gradient: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.678),
      rgba(12, 10, 22, 0.863)
    );
  
    --imp-text-color: #f0aa70;
  }
  .logo {
    width: 1.5rem;
    height: 1.5rem;
  }
  .purple {
    color: var(--imp-text-color);
  }
  
  button:focus {
    box-shadow: none;
  }
  .tech-icons{
    font-size: 4.5em;
    font-size: 4.5em ;
    margin: 15px ;
    padding: 10px ;
    opacity: 0.93 ;
    border: 1.7px solid rgba(237, 153, 63, 0.637) ;
    vertical-align: middle ;
    text-align: center ;
    border-radius: 5px ;
    display: table ;
    box-shadow: 4px 5px 4px 3px #e08716 ;
    overflow: hidden ;
    transition: all 0.4s ease 0s;
}
@media (max-width: 767px) {
  .tech-icons {
    margin: 10px ;
  }
}

.tech-icons:hover {
  transform: scale(1.05) ;
  overflow: hidden ;
  border: 2.2px solid rgba(240, 167, 65, 0.883) ;
}
.tech-icon-images {
  padding: 20px ;
  line-height: 1.6 ;
}
.sticky {
  background-color: #1b1a2ea9 ;
  transition: all 0.3s ease-out 0s ;
  box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171) ;
  backdrop-filter: blur(15px) ;
}

.navbar {
  position: fixed ;
  transition: all 0.3s ease-out 0s ;
  padding: 0.3rem 2rem ;
  font-size: 1.2rem ;
}
.contactEmail{
  background-color: rgb(10, 4, 22);
}
.footer {
  background-color: rgb(10, 4, 22);
  bottom: 0 ;
  padding-top: 10px ;
  padding-bottom: 8px  ;
}
.social-icons {
    display: inline-block ;
    padding-right: 15px;
    padding-left: 15px;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
  color-scheme: dark;

}
.App{
  max-width: 1180px;
  margin: 0 auto;;
}

#preloader {
  position: relative;
  display: flex;
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  overflow: hidden;
animation: text-color 2s ease-in-out infinite alternate;
}
.logo{
  border: 3px solid #804dee;
}
.violet-gradient {
  background: #804dee;
  background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
  background: -webkit-linear-gradient(
    -90deg,
    #804dee 0%,
    rgba(60, 51, 80, 0) 100%
  );
}
.green-text-gradient {
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #11998e,
    #38ef7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #11998e,
    #38ef7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
};

/* .green-pink-gradient {
  background: "#00cea8";
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
} */

.paddingX{
  padding: 0px 16px;
}
.paddingY{
  padding: 16px 0px;
}
.heroHeadText{
  font-size: 80px;
}
.heroSubText{
  font-size: 30px ;

}
.sectionHeadText{
  font-size: 45px;
  font-weight: 600;
  border-left: 6px solid #915eff;
  padding-left: 20px;
  border-radius: 15px;
  margin-bottom: 45px;
  color:#915eff;
  text-transform: uppercase;
}
.sectionSubText{
  font-size: 16px ;
  text-transform: uppercase;
}
.navbar-nav{
  display: flex;
  align-items: flex-end;
}
.nav-item a{
   text-decoration: none;
   color: white;
}
#preloader::before,
#preloader::after{
content: "";
position: absolute;
width: 100%;
height: 100%;
border-radius: 50%;
border: 15px solid transparent;
mix-blend-mode: overlay;
animation: rotate var(--duration) var(--timing) infinite;
pointer-events: none;
}
#preload::before{
  border-left-color: lightseagreen;
  --duration:2s;
  --timing: ease-in;
}
#preload::after{
  border-left-color: rgb(178, 98, 32);
  --duration:2s;
  --timing: ease-in;
}
.navbar{
  height: 100px;
  background-color: #050816;
}
@keyframes rotate{
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes text-color{
  0%{
    color:rgba(0, 0, 0, 1)
  }
  50%{
    color:rgba(0, 0, 0, .5)
  }
  100%{
    color:rgba(0, 0, 0, .1)
  }
}
/* #preloader-none {
  opacity: 0;
} */

#no-scroll {
  overflow: hidden;
  height: 100vh;
}

/* --------- */
/*Scrollbar   */
/* --------- */

::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #503619;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(216, 173, 121, 0.959);
  border-radius: 12px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(235, 177, 130, 0.911);
  border-radius: 12px;
}

.navbar-toggler {
  position: relative !important;
  background-color: transparent !important;
  border-color: transparent !important;
}

.navbar-toggler span {
  display: block !important;
  background-color: #d9f450;
  height: 4px !important;
  width: 27px !important;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  transform: rotate(0deg) !important;
  left: 0 !important;
  opacity: 1 !important;
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: 0 !important;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
  transition: transform 0.35s ease-in-out !important;
  transition: transform 0.35s ease-in-out !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
  position: absolute !important;
  left: 12px !important;
  top: 10px !important;
  transform: rotate(135deg) !important;
  opacity: 0.9 !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
  height: 12px !important;
  visibility: hidden !important;
  background-color: transparent !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
  position: absolute !important;
  left: 12px !important;
  top: 10px !important;
  transform: rotate(-135deg) !important;
  opacity: 0.9 !important;
}

@media (max-width: 767px) {
  .navbar {
    padding: 1rem 2rem !important;
    font-size: 1.4rem !important;
    background-color: #181a27 !important;
  }
  .navbar-nav .nav-item a::after {
    display: none !important;
  }
}
.navbar-brand {
  color: rgb(250, 250, 250) !important;
}



.navbar-nav .nav-link {
  color: white !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.nav-link {
  padding: 0.8rem 1rem !important;
}

@media (max-width: 767px) {
  .nav-link {
    padding: 0.7rem 1rem !important;
  }
}

.navbar-nav .nav-item {
  position: relative;
  margin-left: 20px;
}

.navbar-nav .nav-item a {
  font-weight: 400;
  transition: all 0.3s ease-out 0s;
  position: relative;
  z-index: 1;
}
.navbar-nav .nav-item a::after {
  content: "";
  position: relative;
  display: block;
  height: 5px;
  width: 0;
  border-radius: 16px;
  background: #915eff;
  bottom: 1px;
  left: 0;
  z-index: -1;
  transition: all 0.3s ease-out 0s;
}

.navbar-nav .nav-item a:hover::after {
  height: 2px;
  width: 100%;
}
.nav-item:hover{
  transform: scale(1.05);
}

/* --------- */
/* Home section */
/* --------- */
.wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.1s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}
.tsparticles {
  position: fixed !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100%;
  height: 100%;
}
.Typewriter__wrapper {
  font-size: 2.2em !important;
  color:  #915eff !important;
  font-weight: 600 !important;
}
.Typewriter__cursor {
  font-size: 2.4em !important;
  color: white !important;
}

@media (max-width: 767px) {
  .Typewriter__wrapper {
    font-size: 1.4em !important;
    font-weight: 500 !important;
    position: absolute !important;
  }
  .Typewriter__cursor {
    display: none !important;
  }
}

.myAvtar {
  justify-content: center !important;
  padding-top: 9em !important;
}

@media (max-width: 767px) {
  .myAvtar {
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }
}

.project-section {
  position: relative !important;
  padding-top: 150px !important;
  padding-bottom: 30px !important;
  background-image: var(--section-background-color) !important;
}

.project-card {
  padding-top: 50px !important;
  padding-bottom: 50px !important;
  padding-left: 25px !important;
  padding-right: 25px !important;
  height: auto !important;
}

.project-card-view {
  box-shadow: 0 4px 5px 3px rgba(232, 125, 24, 0.459) !important;
  color: white !important;
  background-color: transparent !important;
  opacity: 0.9 !important;
  transition: all 0.5s ease 0s !important;
  height: 100% !important;
}
.project-card-view:hover {
  transform: scale(1.02) !important;
  overflow: hidden !important;
  box-shadow: 0 4px 4px 5px rgba(181, 191, 42, 0.561) !important;
}

.blog-card {
  padding-top: 50px !important;
  padding-bottom: 50px !important;
  padding-left: 25px !important;
  padding-right: 25px !important;
  height: auto !important;
}

.blog-card-view {
  background-color: transparent !important;
  box-shadow: 0 3px 3px 2px rgba(161, 108, 77, 0.459) !important;
  color: white !important;
  transition: all 0.5s ease 0s !important;
  height: 100% !important;
}

.blog-link {
  color: white !important;
  text-decoration: none !important;
}

.blog-link:hover {
  cursor: pointer !important;
}

.blog-card-view:hover {
  transform: scale(1.02) !important;
  overflow: hidden !important;
  box-shadow: 0 3px 3px 5px rgba(218, 141, 48, 0.65) !important;
}

.card-img-top {
  padding: 20px !important;
  opacity: 0.8 !important;
  border-radius: 10px !important;
}

.blog-img {
  padding: 0px !important;
  opacity: 0.8 !important;
  border-radius: 0px !important;
}

.btn-primary {
  color: #fff !important;
  background-color: #92593d !important;
  border-color: #886134 !important;
}

.btn-primary:hover {
  color: #fff !important;
  background-color: #c57e20d7 !important;
  border-color: #c56520d7 !important;
}
.btn:focus {
  outline: none !important;
  box-shadow: none !important;
}

@media (max-width: 767px) {
  .about-img {
    padding-top: 0 !important;
  }
}

.resume-section {
  position: relative !important;
  padding-top: 110px !important;
  padding-bottom: 30px !important;
  background-image: var(--section-background-color) !important;
  color: white !important;
}

.resume {
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
}

.resume-left {
  padding-right: 80px !important;
}

.resume-right {
  padding-left: 80px !important;
}

@media (max-width: 767px) {
  .resume-left {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }

  .resume-right {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
}
.resume .resume-title {
  font-size: 2em;
  font-weight: 700;
  padding-top: 30px;
  padding-bottom: 30px;
}

.resume .resume-item {
  padding: 0 0 10px 25px;
  margin-top: -2px;
  border-left: 2px solid #ea9e3b;
  position: relative;
}

.resume .resume-item .resume-title {
  line-height: 18px;
  font-size: 0.9em;
  background: #5234795d;
  padding: 8px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
  text-align: justify;
}

.resume .resume-item ul li {
  padding-bottom: 10px;
  list-style: none;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #d87f36;
}

.like-item {
  padding-top: 10px !important;
  font-size: 1.1em !important;
  font-family: sans-serif !important;
}

.like-btn {
  background-color: #de6c25 !important;
  border-color: #de6c25 !important;
  padding: 0.25rem 0.98rem !important;
  border-radius: 5px !important;
  line-height: 1.4 !important;
  transition: 0.3s ease !important;
}

.like-btn:hover {
  transform: translateY(-2px) !important;
  background-color: #df803786 !important;
  border-color: #eebc3d86 !important;
}

.animate-like {
  animation-name: likeAnimation;
  animation-fill-mode: forwards;
  animation-duration: 0.85s;
}
@keyframes likeAnimation {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.fork-btn {
  font-size: 1.1em !important;
  padding-top: 10px !important;
}

.fork-btn-inner {
  line-height: 1.4em !important;
  background-color: #e1802b !important;
  padding: 0.25rem 1.1rem !important;
  vertical-align: middle !important;
  text-align: center !important;
}

.fork-btn-inner:hover {
  transform: translateY(-2px) !important;
  background-color: #d3a04d86 !important;
  border-color: #d3924d86 !important;
}
.fork-btn-inner::after {
  display: none !important;
}
.footer{
  margin-top: 100px;
  background-color: #55496f;
  margin-bottom: 50px;
}
.footer-icons{
  display: flex;
  list-style: none;
}
.social-icons{
  width: 50px;
  list-style: none;
  border: 1px solid white;
  margin: 10px;
  border-radius: 8px;
  padding: 4px;
  
  
}
.footer-row{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
`;

export default GlobalStyle;
