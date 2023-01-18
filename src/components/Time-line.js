import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimeLine() {
  const iconStyle = {
    background: "var(--purple-navy)",
    color: "#000",
    scale: "0.8",
  };
  const contentStyle = {
    background: "var(--maximum-blue-purple)",
    color: "#000",
  };
  const contentArrowStyle = {
    borderRight: "7px solid  var(--maximum-blue-purple)",
  };
  return (
    <VerticalTimeline lineColor="var(--purple-navy)">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        iconStyle={iconStyle}
        date="sep 2019 - present"
      >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          - IT CAPACITIES -
        </h4>
        <p>
          Responsible for the design, development, testing and deployment of
          software solutions.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        iconStyle={iconStyle}
        date="jan 2017 - feb 2017"
      >
        <h3 className="vertical-timeline-element-title">
          Initiation internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          - GALACTECH STUDIO -
        </h4>
        <p>
          My first opportunity to experience working in a group and exploring
          new technologies like Angular Framework and Firebase.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        iconStyle={iconStyle}
        date="2016"
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor's degree in Information Technology
        </h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
