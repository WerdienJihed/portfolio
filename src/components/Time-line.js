import React from "react";
import SectionHeader from "./SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimeLine() {
  const iconStyle = {
    background: "var(--purple-navy)",
    scale: "0.8",
  };
  const contentStyle = {
    background: "var(--maximum-blue-purple)",
  };
  const contentArrowStyle = {
    borderRight: "7px solid  var(--maximum-blue-purple)",
  };

  return (
    <div>
      <SectionHeader
        title="Experience"
        subtitle="Past and current jobs"
        switchColors={false}
      />
      <div>
        <VerticalTimeline lineColor="var(--purple-navy)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} color="#fff" />}
            iconStyle={iconStyle}
            date="sep 2019 - present"
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
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
            icon={<FontAwesomeIcon icon={faBriefcase} color="#fff" />}
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
              My first opportunity to experience working in a group and
              exploring new technologies like Angular Framework and Firebase.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} color="#fff" />}
            iconStyle={iconStyle}
            date="2016"
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's degree in Information Technology
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
