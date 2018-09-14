import { GET_PROJECTS } from "../actions/actionTypes";

const initialState = {
    projects: []
}

const projectReducer = (state = initialState, action) => {


    switch(action.type){
        case GET_PROJECTS: 
            var projects = [];
            for(var i in action.payload)
                projects.push(action.payload[i]);
                
            return { 
                ...state,
                projects: state.projects.concat(projects)
            }  
        default:
            return state;
    }
}

export default projectReducer;