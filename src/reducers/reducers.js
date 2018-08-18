import { GET_PROJECTS} from "../actions/actionTypes";


const initialState = {
    projects: []
}

const projectReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_PROJECTS:
            state.projects.push({title: "MovieViz", course: "TNM048 - Information Visualization", image_id: "1oUbnevU1Si5sjqInOKfCpGCKHbiaNyHE", info: "A simulation of cloth done in a modelling project for the course TNM085. Developed skills in: OpenGL, C++", type: "type-webb"});
            state.projects.push({title: "TyglaDig", course: "TNM085 - Modelling Project", image_id: "1eOTQ2gQ-Z4lb_tSTyGADzbNVGfKRqYrZ", info: "A movie visualization tool for comparing your favourite movies. The project was done during the course TNM048 Information Visualization. The data used was from IMDb and contains around 4600 data points. Developed skills in: Javascript", type: "type-graphics"});
            state.projects.push({title: "DictatAR", course: "TDDD57 - Physical interaction and game programming", image_id: "1JIBoBuSva2fXf4bPQYv_uXz5Ql47cvWa", info: "An AR game developed during the course TDDD57 Physical Interaction and Game Programming. The goal is to keep the castle in the middle alive as long as possible. The user has to walk around the castle to be able to see the different enemies that are spawn in a large circle around it.  Developed skills: Unity, C#, Blender, ARkit", type: "type-game"});
            state.projects.push({title: "Face Recognition", course: "TNM034 - Advanced Image Processing", image_id: "1JIBoBuSva2fXf4bPQYv_uXz5Ql47cvWa", info: "Project done in the course Advanced Image Processing (TNM034). Both face detection and face recognition implemented in Matlab. Developed skills in: Matlab", type: "type-imaging"});
            state.projects.push({title: "DMA", course: "TNM061 - 3D Computer Graphics", image_id: "1cDtABog3WHsuFE5WSbHc9elLGuypfcr6", info: "A web application visualizing a MIDI-file in 3D made for the 3D Computer Graphics course. The programming languages used were javascript together with the library three.js. Developed skills in: JavaScript, three.js, webGL.", type: "type-webb"});
            state.projects.push({title: "Medical Test Data Application", course: "TNM094 - Bachelor Project", image_id: "1JIBoBuSva2fXf4bPQYv_uXz5Ql47cvWa", info: "A bachelor project. The group created a way to interact with a database of medical test data. A user is able to add, remove and search for testdata in a user-friendly web application. Developed skills in: JavaScript (AngularJS), HTML, CSS", type: "type-webb"})
            state.projects.push({title: "A Study in Pitch", course: "TFYA65 - Physics of Sound", image_id: "1JIBoBuSva2fXf4bPQYv_uXz5Ql47cvWa", info: "A project made entirely in MATLAB. The program detects the pitch you are singing/talking in real time. Developed skills in: MATLAB", type: "type-graphics"});
            state.projects.push({title: "SenApp", course: "TNM040 - Communication and User Interfaces", image_id: "1JIBoBuSva2fXf4bPQYv_uXz5Ql47cvWa", info: "In this course the main focus was to learn what a good user interface looks like. Our project was to make an application that helped the user to keep track of their upcoming meetings and how late the user and its team members are totally at the various meetings. Developed skills in: Android Application Development, Android Studios", type: "type-graphics"});
            state.projects.push({title: "LEGO", course: "TNMK30 - Electronic Publishing", image_id: "1JIBoBuSva2fXf4bPQYv_uXz5Ql47cvWa", info: "Electronic publishing, year one, is the introduction course to web programming. The project of the course was to make a website with the help of a LEGO database, where the user would be able to search for Lego sets and see which pieces it contained, and some brief information about the kit. Developed skills in: HTML, CSS, JavaScript, PHP, MySQL", type: "type-webb"});
            state.projects.push({title: "Mellan Husen", course: "TNM088 - Digital Media", image_id: "1JIBoBuSva2fXf4bPQYv_uXz5Ql47cvWa", info: "A 2D animated shortfilm about the introduction weeks 2014 with a lot of inside jokes where I was the illustrator. Developed skills in: Adobe Photoshop, Adobe Illustrator, Adobe Flash", type: "type-game"});
            
            return state;
        default:
            return state;
    }
}

export default projectReducer;