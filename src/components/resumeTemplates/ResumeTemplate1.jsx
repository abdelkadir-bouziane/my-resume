import Name from "../Name";
import Contact from "../Contact";
import Profile from "../Profile";
import Education from "../Education";
import ProfessionalExperiences from "../ProfessionalExperiences";
import Certificates from "../Certificates";
import Skills from "../Skills";
import Projects from "../Projects";
import Languages from "../Languages";

function ResumeTemplate1({ informations, photo }) {
  return (
    <main>
      <div className="main-content">
        <Name firstName={informations.firstName} familyName={informations.familyName} photo={photo}/>
        <Contact contactInfos={informations.contact} />
        <Profile profileInfo={informations.profile} />
        <Education educationInfos={informations.education} />
        <ProfessionalExperiences experiencesInfos={informations.professionalExperiences} />
        <Certificates certificatesInfos={informations.certificates}/>
        <Skills skillsInfos={informations.skills}/>
        <Projects projectsInfos={informations.projects}/>
        <Languages languagesInfos={informations.languages}/>
      </div>
    </main>
  );
}

export default ResumeTemplate1;
