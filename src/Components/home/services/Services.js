import { SectionHeader } from "../../reusable/SectionHeader.js";
import { Service } from "./Service.js";
import styles from "../../../Styles/home/services/services.module.css";

const services = [
  {
    id: 0,
    title: "DEVELOPEMENT",
    subTitle: "I build websites and applications",
    icon: "fas fa-code",
  },
  {
    id: 1,
    title: "DESIGN",
    subTitle: "I design my projects before i start coding",
    icon: "fas fa-layer-group",
  },
  {
    id: 2,
    title: "DIGITAL MARKETING",
    subTitle: "I make my projects have strong online presence",
    icon: "far fa-chart-bar",
  },
];

export function Services() {
  const servivesArray = services.map((service, index) => (
    <Service
      key={service.id}
      title={service.title}
      subTitle={service.subTitle}
      icon={service.icon}
      dataAos="fade-up"
      dataAosDelay={index * 200}
      dataAosDuration="1000"
    />
  ));

  return (
    <div className={styles.wrapper} id="Services">
      <SectionHeader title="Services" subTitle="what i do" dark="true" />
      <div className={styles.services}>{servivesArray}</div>
    </div>
  );
}
