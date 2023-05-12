import React from "react";
import styled from "styled-components";
import HeroImage from "../../Assets/Hero.png";
import Type from "./Type";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 inner" id="hero">
            <div className="circle">
              <div className="w-1 sm:h-80 h-40 line violet-gradient"></div>
            </div>
            <div className="text">
              <h1 className="heroHeadText">
                Hi{" "}
                <span className="wave" role="img" aria-label="wave">
                  {"\uD83D\uDC4B"}
                </span>{" "}
                <br />
                I'm &nbsp;
                <span className="text-[#915eff]">Sisay</span>
              </h1>
              <Type />
            </div>
          </div>
          <div className="col-lg-6 HeroImage">
            <img src={HeroImage} alt="heroimage" className="img-fluid" />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.section`
  width: 90%;
  height: 100vh;
  margin: 80px auto 0; /* Added top margin of 80px */
  display: flex;
  align-items: center;
  position: relative;

  .inner {
    display: flex;
    align-items: start;
    gap: 20px;

    .circle {
      width: 20px;
      height: 20px;
      background-color: #915eff;
      border-radius: 50%;

      .line {
        width: 4px;
        height: 320px;
      }
    }
  }

  .text {
    h1 {
      font-weight: 600;
      font-size: 4rem;
      color: white;

      span {
        color: #915eff;
      }
    }
  }

  .HeroImage {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  @media (max-width: 576px) {
    .inner {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .circle {
      width: 8px;
      height: 8px;

      .line {
        height: 160px;
      }
    }

    .text {
      text-align: center;

      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;
