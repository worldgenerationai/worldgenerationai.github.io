import React from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import childrenWaving from "../../assets/lottie/childrenWaving";
import childrenWavingStill from "../../assets/images/childrenWaving.svg";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Button from "../../components/button/Button";
import { greeting, skillsSection } from "../../portfolio";

export default function Greeting() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <section
      className="greet-main fade-in-up"
      id="greeting"
      aria-labelledby="greeting-heading"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              id="greeting-heading"
              className="greeting-text"
            >
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            {skillsSection.display && (
              <div id="skills" className="greeting-missions">
                <h2 className="greeting-missions-heading">
                  {skillsSection.title}
                </h2>
                <ul className="greeting-missions-list">
                  {skillsSection.skills.map((skill, i) => (
                    <li key={i} className="greeting-mission">
                      <span aria-hidden="true">{emoji("⚡ ")}</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="button-greeting-div">
              {greeting.resumeLink && (
                <Button
                  text="Read our whitepaper"
                  href="/static/media/CHAILD-white-paper-1.pdf"
                  newTab={true}
                  className="download-link-button"
                />
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div" aria-hidden="true">
          {prefersReducedMotion ? (
            <img alt="" src={childrenWavingStill} />
          ) : (
            <DisplayLottie animationData={childrenWaving} />
          )}
        </div>
      </div>
    </section>
  );
}
