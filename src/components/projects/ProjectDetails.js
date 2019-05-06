import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    // const id = props.match.params.id;  
    // console.log(props)
    const { project } = props;
    if(project) {
      return(
        <div>
          <div className="container section project-details">
          <div className="card z-depth-0" style={{marginBottom: 0}}>
              <span className="card-title">{project.title}</span>
              <p style={{marginBottom: 0}}>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
              <div>4th May 2019</div>
          </div>
        </div>
       </div>
      )
    } else {
      return (
        <div className="container center">
          <p>Loading...</p>
        </div>
      )
    }
 
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;  
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  // console.log(state)
  return {
    project: project
  }
};

export default compose(
  firestoreConnect(()=>['projects']),
  connect(mapStateToProps)
)(ProjectDetails)
