const initState = {
    projects: [
        {id: '1', title: 'Project 1', content:'Lorem ipsum dolor set amet'},
        {id: '2', title: 'Project 2', content:'Lorem ipsum dolor set amet'},
        {id: '3', title: 'Project 2', content:'Lorem ipsum dolor set amet'},
    ]
}

const projectReducer = (state=initState, action) => {
    return state;
}

export default projectReducer;