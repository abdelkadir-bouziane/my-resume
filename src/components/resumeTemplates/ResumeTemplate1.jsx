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
import { themes } from "../../themes.js";

const getPageMargins = () => `
  @page {
    margin: 4rem 0 !important;
  }

  @page :first {
    margin-top: 0 !important;
  }

  @media print {
    * {
      color: ${themes.light.text};
    }

    .main-content {
      box-shadow: none;
      background-color: ${themes.light.elementsBackground};
    }

    .name img {
      box-shadow: 0 0 10px ${themes.light.imgShaddow};
    }

    .profile h2,
    .education h2,
    .experiences h2,
    .certificates h2,
    .skills h2,
    .projects h2,
    .languages h2 {
      border-bottom: solid 0.4rem ${themes.light.text};
    }

    .skill > *,
    .tool > *,
    .language > * {
      border: solid 1.5px ${themes.light.text};
    }

    a::after{
      background-image: url("data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 15 15'><g fill='${themes.light.text}'><path d='M9 .75A.75.75 0 019.75 0h4.5c.206 0 .393.083.529.218l.001.002.002.001A.748.748 0 0115 .75v4.5a.75.75 0 01-1.5 0V2.56L7.28 8.78a.75.75 0 01-1.06-1.06l6.22-6.22H9.75A.75.75 0 019 .75z' /><path d='M3.25 3.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0110.75 14h-7.5A2.25 2.25 0 011 11.75v-7.5A2.25 2.25 0 013.25 2h4a.75.75 0 010 1.5h-4z' /></g></svg>");
    }
  }
  `;

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
          language={props.language}
        />
        <Education
          educationInfos={props.informations.education}
          language={props.language}
        />
        <Projects projectsInfos={props.informations.projects} />
        <Certificates certificatesInfos={props.informations.certificates} />
        <Skills skillsInfos={props.informations.skills} />
        <Languages languagesInfos={props.informations.languages} />
      </div>
    </main>
  );
});
