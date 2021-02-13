import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero at esse adipisci eveniet. Repudiandae omnis iste tempore cupiditate, molestiae excepturi modi esse temporibus rerum quis dolorum. Veniam, beatae possimus.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>13th February, 18pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

