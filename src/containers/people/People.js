import React from "react";
import "./People.scss";
import emoji from "react-easy-emoji";
import { peopleSection } from "../../portfolio";
import Sparkles from "../../components/sparkles/Sparkles";

export default function People() {
  if (!peopleSection.display) {
    return null;
  }

  const renderGroup = (group) => (
    <div key={group.title}>
      <h3 className="subTitle people-text people-group-title">
        {group.title}
      </h3>
      <ul className="people-list">
        {group.members.map((member, i) => (
          <li key={i} className="subTitle people-text">
            <span aria-hidden="true">{emoji("⚡ ")}</span>
            {member}
          </li>
        ))}
      </ul>
    </div>
  );

  const [firstGroup, ...otherGroups] = peopleSection.peopleGroups;

  return (
    <section
      className="main"
      id="people"
      aria-labelledby="people-heading"
    >
      <div className="people-main-div">
        <div className="people-text-div fade-in-up">
          <h2
            id="people-heading"
            className="people-heading"
          >
            {peopleSection.title}{" "}
            <Sparkles />
          </h2>
          <p className="subTitle people-text-subtitle">
            {peopleSection.subTitle}
          </p>
          <div className="people-text-row-div">
            <div className="people-text-col-div">{renderGroup(firstGroup)}</div>
            <div>{otherGroups.map(renderGroup)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
