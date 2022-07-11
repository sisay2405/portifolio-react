import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    --section-background-color: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.582),
      rgba(12, 8, 24, 0.904)
    );
  
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
`;

export default GlobalStyle;
