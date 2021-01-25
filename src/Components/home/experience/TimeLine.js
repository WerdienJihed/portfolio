import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import bachelorsDegreeIcon from "../../../assets/bachelors-degree.svg";
import suitcaseIcon from "../../../assets/work.svg";
import internship from "../../../assets/internship.svg";
import "../../../Styles/home/experience/timeLine.css";

export function TimeLine(props) {
  return (
    <VerticalTimeline className="VerticalTimeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="sep 2019 - present"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        icon={<img src={suitcaseIcon} alt="work icon" className="icon" />}
      >
        <h3 className="vertical-timeline-element-title">
          Developer in the CRM domain
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          - CAPTAIN CONSULTING -
        </h4>
        <p>
          .NET Developer (c#/WPF/ASP.NET) , integrating business processes and
          web API’s into Creatio platform , Working with Talend software (A
          Cloud Data Integration tool)
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="jan 2017 - feb 2017"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={internship} alt="intership Icon" className="icon" />}
      >
        <h3 className="vertical-timeline-element-title">
          Initiation intership
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          - GALACTECH STUDIO -
        </h4>
        <p>
          My first opportunity to experience working in a group and exploring
          new technologies like Angular.js Framework and firebase.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={
          <img
            src={bachelorsDegreeIcon}
            alt="bachelors Degree Icon"
            className="icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor's degree in Information Technology
        </h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
