import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;  
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit consequuntur totam doloremque numquam placeat odio rerum ducimus aliquid aut. Fugiat maiores aperiam commodi, unde autem possimus saepe numquam inventore id?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Ashwin Bordoloi</div>
            <div>4th May 2019</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
