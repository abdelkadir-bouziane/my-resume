import React from "react";
import Name from "../Name";
import Contact from "../Contact";
import Profile from "../Profile";
import Education from "../Education";
import ProfessionalExperiences from "../ProfessionalExperiences";
import Certificates from "../Certificates";
import Skills from "../Skills";
import Projects from "../Projects";
import Languages from "../Languages";
import AdditionalInformation from "../AdditionalInformation";

const getPageMargins = () => {
  return `@page { margin: 2rem 0 !important; }`;
};

export const ResumeTemplate1 = React.forwardRef((props, ref) => {
  return (
    <main>
      <div ref={ref} className="main-content">
        <style>{getPageMargins()}</style>
        <Name
          firstName={props.informations.firstName}
          familyName={props.informations.familyName}
          photo={props.photo}
        />
        <Contact contactInfos={props.informations.contact} />
        <Profile profileInfo={props.informations.profile} />
        <ProfessionalExperiences
          experiencesInfos={props.informations.professionalExperiences}
        />
        <Education educationInfos={props.informations.education} />
        <Projects projectsInfos={props.informations.projects} />
        <Certificates certificatesInfos={props.informations.certificates} />
        <Skills skillsInfos={props.informations.skills} />
        <Languages languagesInfos={props.informations.languages} />
        {/* <AdditionalInformation
          additionalInformation={props.informations.additionalInformation}
        /> */}
      </div>
    </main>
  );
});
