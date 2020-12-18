import React from 'react';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import ProjectCard from '../Cards/ProjectCard/ProjectCard';

const ProjectListPage = props => {
    return (
        <div>
            <div className="Profile-Section">
                <ProfileCard darkMode={props.darkMode} />
            </div>
            {
                props.list.map(project => (
                    <div key={project.id} className="Project-Section">
                        <ProjectCard
                            darkMode={props.darkMode}
                            lightPic={project.lightPic}
                            darkPic={project.darkPic}
                            title={project.title}
                            body={project.body}
                            hostedURL={project.hostedURL}
                            githubURL={project.githubURL} />
                    </div>
                ))
            }
        </div>
    );
};

export default ProjectListPage;