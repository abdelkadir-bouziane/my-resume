function Projects({ projectsInfos }) {
  const handleProjectClick = (project) => {
    if (project?.link1) window.open(project.link1);
    if (project?.link2) window.open(project.link2);
  };

  return (
    <article className="projects">
      <h2>4. {projectsInfos.field}</h2>
      {projectsInfos.content.map((projectItem, index) => (
        <div key={index} className="project-item">
          <div className="head">
            <div className="project-title">
              <h3>
                {projectItem.link1 === "" && projectItem.link2 === "" ? (
                  projectItem.title
                ) : (
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleProjectClick(projectItem)}
                  >
                    {projectItem.title}
                  </a>
                )}
              </h3>
            </div>
            <div className="date-address">
              <span>{projectItem.date}</span>
            </div>
          </div>
          <div className="content">
            <p>{projectItem.description}</p>
            {projectItem.tools.map((tool, index) => (
              <span key={index} className="tool">
                {tool.certificateLink === "" ? (
                  <span>{tool.name}</span>
                ) : (
                  <a href={tool.certificateLink} target="_blanc">
                    {tool.name}
                  </a>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

export default Projects;
