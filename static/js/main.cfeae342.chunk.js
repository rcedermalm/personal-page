(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"projects":[{"title":"Real-time Fur Deformations for Films","course":"TQME33 - Degree Project - Master\'s Thesis","year":5,"duration":"Feb 2019 - Jun 2019","nr_collabs":0,"image_id":"1c_mlpULtsqvsg3xnOdTr225IImtpXW3A","info":["Thesis title: Real-time Fur Deformations for Film-Quality Characters","In my thesis, the goal was to get a production ready fur groom to deform with the underlying subdivided and animated surface in real-time. The thesis investigated how to import a fur groom into Unity, how to render it, how to deform it and how to remove the most obvious of artefacts.","When it came to rendering the fur, two different methods were investigated: rendering it as poly lines and as view facing triangle strips. Rendering the fur as view facing triangle strips was proven to be slower but the visual quality was a lot better. The deforming of the fur was done as transformations following the underlying subdivided surface. The subdivision of the surface was done using the open-source project OpenSubdiv which was found to be a very helpful tool when finding the hair strands positions on the surface. The methods of volumetric velocity smoothing together with Extended Position Based Dynamics were used to add hair-to-hair interactions and to simulate the stiffness of the fur. This removed artefacts of when for example bending an arm or a leg and the hair crashed into each other at the cost of performance.","The performance of having 0.9 million hairs, built using 10.2 million hair vertices, deforming with the underlying surface was measured to be around 10ms depending on the way it was chosen to be rendered. Adding hair-to-hair interactions to that dragged the performance down to 332ms.","As a conclusion, having a production ready fur groom deform with the underlying surface in real-time is possible. The hair-to-hair interactions part looks promising but will need further improvements and investigations to work in real-time for characters with a lot of fur.","During my thesis I worked with the Virtual Production team at Moving Picture Company (MPC) in London. It was an amazing experience!"],"skills_developed":"HLSL, C#, Unity","type":"type-graphics","movie":"","homepage":"","github":""},{"title":"Procedural Trees","course":"TNM084 - Procedural Methods for Images","year":5,"duration":"Jan 2019","nr_collabs":0,"image_id":"1jZ78Dpu_cxV6BD3W114ZGV4Ooi9M5qh7","info":["Project in the course Procedural Methods for Images. The chosen project was to generate trees prodecurally using L-system and some randomizations.","The way trees and plants grow follows a natural fractal system called a Lindenmayer-system, or L-system for short. L-systems are strings where characters gets substituted iteratively by longer strings depending on some predefined production rules. After a few iterations the string is very long and can be interpreted graphically using a chosen alphabet.","The project have used L-systems to procedurally generate trees successfully. Some randomizations were added to the L-system to make the trees look different even though they are generated using the same L-system. The final result is a low poly version of pretty realistic looking trees. "],"skills_developed":"C++, OpenGL","type":"type-graphics","movie":"","homepage":"","github":"https://github.com/rcedermalm/Procedural-Trees"},{"title":"Position Based Fluid Simulation","course":"TNCG13 - SFX, Tricks of the Trade","year":5,"duration":"Nov 2018 \u2013 Dec 2018","nr_collabs":1,"image_id":"1XSwyzPO29tYu8U_WKU41r_ooubzG6N5T","info":["Project in the course SFX - Tricks of the Trade. The project is a fluid simulation written as a script for Maya.","Fluid simulations are important components for effects in film and games. In nature almost all fluids are viscous which makes viscoelastic fluids especially interesting to simulate.","This project uses the Position Based Fluid method to simulate how honey moves and acts when falling into a box. The Position Based Fluid simulation method is an integration of the Smoothed Particle Hydrodynamics method into the Particle Based Dynamics framework. Materials, lights and environments were added to the simulation to make the it look visually pleasing. The result is stable and realistically simulates the motion of honey."],"skills_developed":"Python","type":"type-graphics","movie":"https://www.youtube.com/watch?v=uxZReNpv4zQ","homepage":"","github":"https://github.com/karsa755/TNCG13--fluid-based-dynamics"},{"title":"Real-Time Rendering of Fur","course":"TSBK03 - Advanced Game Programming","year":5,"duration":"Okt 2018 \u2013 Dec 2018","nr_collabs":0,"image_id":"1y6ACtW55Sig0AkuO2CjBTELmyAdCIWEe","info":["Project in the course Advanced Game Programming or according to the examinator, Advanced techniques for Game Programming.","The project is a real-time rendering and simulation of hair/fur. It uses a method where master hair strands are created and simulated. These are then interpolated to become more hairs. The project uses the method proposed by Han and Harada in 2012 to simulate the hair strands of the fur. This method is stable enough for real-time purposes and preserves the initial style of the fur. The method worked very well and the result looks pretty good.","This was the first project where I took the chance to play around with tesselation, geometry and compute shaders. It was a lot of fun and I am pleased with the result."],"skills_developed":"C++, OpenGL, GLSL","type":"type-graphics","movie":"https://www.youtube.com/watch?v=UTkMCiZSpkA&t=7s","homepage":"","github":"https://github.com/rcedermalm/Realtime-Rendering-of-Fur"},{"title":"Monte-Carlo Ray-Tracer","course":"TNCG15 - Adv. Global Illumination and Rendering","year":5,"duration":"Sep 2018 \u2013 Okt 2018","nr_collabs":1,"image_id":"1g0tryMzsjyPeRPANZ_5qmP7MWQSHexyA","info":["Project in the course Global Illumination and Rendering","A Whitted Ray Tracer with Monte Carlo integration was implemented in C++. The ray-tracer was implemented to be able to handle scenes including objects which materials were perfect reflectors or Lambertian reflectors.","The results of the renderer using only the Whitted ray tracing algorithm were compared with those of the Whitted Ray Tracer with Monte Carlo Integration. It could be seen that the Monte Carlo integration gave a grainier result in the case of few rays per pixel. When more rays were introduced the result became better."],"skills_developed":"C++","type":"type-graphics","movie":"","homepage":"","github":"https://github.com/rcedermalm/Monte-Carlo-ray-tracer"},{"title":"Run dAIno run","course":"TNM095 - AI for interactive media","year":5,"duration":"Sep 2018 \u2013 Okt 2018","nr_collabs":0,"image_id":"1cgCGDh9RnUOWMunoOllCZPupg6x_ygib","info":["This project was made during the course TNM095 Artificial Intelligence in Interactive Media.","A version of the game created as an offline game for Google Chrome was implemented using Javascript and the framework Phaser.io. The game is an endless runner where the player plays a dinosaur trying to survive in the desert. This is done by jumping over or moving below different kinds of obstacles.","An AI agent was trained to play the game using reinforcement learning and Q-learning. Q-learning is a part of machine learning where the agent learns to optimize the policy by the rewards given. It explores the world by doing an action and seeing what reward it gets. The world is represented as different states and for each state the agent can make a few actions. In this case the state is represented by the distance to the closest obstacle, the distance to the end of the closest obstacle, the y-value of the closest obstacle and if the player is in the air or not. The actions possible are jumping or doing nothing. ","Q-learning has been proved to be a good method for this kind of problem. The agent was able to learn the game very good and could possible survive in it forever. The agent also handles a change in velocity of the game pretty well but to really make it work, another action, like being able to duck and therefore fall faster to the ground, needs to be introduced."],"skills_developed":"Javascript, Reinforcement learning, Q-learning","type":"type-game","movie":"","homepage":"https://rcedermalm.github.io/run-dAIno-run/","github":"https://github.com/rcedermalm/run-dAIno-run"},{"title":"MovieViz","course":"TNM048 - Information Visualization","year":4,"duration":"Feb 2018 \u2013 Mar 2018","nr_collabs":1,"image_id":"1uaDwZ-Z8WoGIXFCV5q5qZB8fp7ODM9aX","info":["A movie visualization tool for comparing your favourite movies. The project was done during the course TNM048 Information Visualization. The data used came from the Internet Movie Database (IMDb) and contained around 4600 data points.","The visualization method is a self made method where each movie is represented as a star. The number of spikes represents how much the movie earned. The size of the star represents how high the movie scored. The colours in the background represents which genres the movie is in and the number of circles around the star represents how long the movie is, where each circle represents 30 minutes.","My contribution to this project was the implementation of the stars. Since the details of each star represents different parts of the data, there were no shortcuts to be made which meant that each detail had to be implemented separately. It is possible to see how I chose to implement it at GitHub.","The idea behind the project was to make it easier for a person to be able to compare a movie to another in a fast way. The project got nominated for Best Research Potential in CAwards 2018."],"skills_developed":"Javascript","type":"type-webb","movie":"","homepage":"https://rcedermalm.github.io/movieViz/","github":"https://github.com/rcedermalm/movieViz"},{"title":"DictatAR","course":"TDDD57 - Phys. interaction and game programming","year":4,"duration":"Jan 2018 \u2013 Feb 2018","nr_collabs":2,"image_id":"1j1Ozvj9QwJHYHiWFWtOLFS9AWZ_IEyPk","info":["An mobile AR game developed during the course TDDD57 Physical Interaction and Game Programming.","Imagine you are a dictator sitting inside your castle hating all your subjects. One day all your subjects decide to come up to your gate with swords and axes demanding changes. It is now your job to end the rebellion.","The goal of the game is to keep the castle in the middle of the screen alive as long as possible. The user has to walk around the castle in real life to be able to see the different enemies that are spawned in a large circle around the castle. Shooting enemies are done by aiming at the enemy and touching the screen.","The implementation of the project was mostly done in the whole group. In addition to that, I was also responsible for the making of the models used (castle and clouds)."],"skills_developed":"Unity, C#, Blender, ARkit","type":"type-game","movie":"","homepage":"","github":""},{"title":"Face Recognition","course":"TNM034 - Advanced Image Processing","year":4,"duration":"Nov 2017 \u2013 Dec 2017","nr_collabs":1,"image_id":"133uPtgxjCyoqI9MtLPssBjmVC5FDk2P0","info":["A project done in the course Advanced Image Processing (TNM034). Face detection and face recognition implemented in Matlab. ","It was implemented as follows. First finding the face in the image, by looking at face colour, eyes and so on. After that a face alignment was made so that the eyes and mouth of all the people would be placed in the same place. The faces was then normalized before being described in a chosen feature space. The feature vectors for each person was then saved in a database.","The face reconition part followed the PCA algorithm. It was made by taking the image you want to compare and making it go through the exact same procedure as when we created the faces in the database. By comparing the final feature vector for the new face and the feature vectors in the database we could find if the person\'s face was in the database already.","Regarding the implementation of the project we started out with pair programming. The early detections of the face and eyes were implemented together. After that my project partner, Jacob, continued refining the detection and feature extraction while I implemented the PCA algorithm for the recognition part of the project."],"skills_developed":"Matlab, Image-processing","type":"type-signal-processing","movie":"","homepage":"","github":"https://github.com/rcedermalm/TNM034_Face_Recognition"},{"title":"Medical Test Data Application","course":"TNM094 - Bachelor Project","year":3,"duration":"Jan 2017 \u2013 Jul 2017","nr_collabs":5,"image_id":"14_UXfNE7eYyRhwWaDkee8ddo7xpcHF1e","info":["A bachelor project. The project group developed a web interface for managing medical data for the company that mainly develops software systems for various healthcare professionals, using an agile development method. The customer\'s desires was to be able to work with their database in a simple and easy way, collecting all test data they use to test their systems before a delivery. The interface would primarily make it possible for a user to add new data to the database and to see what data is already contained there.","The system was chosen to be implemented with HTML, CSS and JavaScript. The frameworks used were AngularJS, ExpressJS and Bootstrap. Because the project required writing to files, a web server was built using Node.js. The interface development took place through various HTTP requests to an API that the customer itself created for communication with the database.","The result of the project became a web application where the user can import medical data into the database and display the available data in a table. During import, the user can tag the data with different types of tags that make it easier to find the data later. In the view where the user can see the table with the test data, there are also functionalities for searching for data, sorting data in alphabetical order, deleting specific data and adding data that can later be sent to testing.","The project was divided into three smaller parts: adding new data to the database, searching for data and displaying the data. Together with one of my project partners I was responsible for the displaying of the data. I was also resonsible for the overall design and colour scheme of the page. "],"skills_developed":"JavaScript (AngularJS), HTML, CSS","type":"type-webb","movie":"","homepage":"","github":"https://github.com/rcedermalm/ProjectH"},{"title":"TyglaDig","course":"TNM085 - Modelling Project","year":3,"duration":"Jan 2017 \u2013 Mar 2017","nr_collabs":3,"image_id":"1eOTQ2gQ-Z4lb_tSTyGADzbNVGfKRqYrZ","info":["A simulation of cloth done in a modelling project for the course TNM085.","The project dealt with how fabric can be simulated in a realistic manner by calculating how real fabric moves. The equations used in the calculations were determined by modeling a mass-spring damping system where the fabric was represented by several masses that were connected by means of springs and dampers.","This is one of my favourite projects made. It was the first time I really got to use OpenGL (apart from short labs) and I thought it was super nice to actually work with vertices and so on. Unfortunately the rest of my project team had some problems with getting it to work on their computers and/or understanding how it worked which meant that the large majority of the code was implemented by me. We did however implement a basic version of the simulation in Matlab before starting on the OpenGl and C++ simulation which we all helped out with."],"skills_developed":"OpenGL, C++","type":"type-graphics","movie":"https://www.youtube.com/embed/mx1k_C8rC9Y","homepage":"","github":"https://github.com/rcedermalm/TYGlaDig"},{"title":"A Study in Pitch","course":"TFYA65 - Physics of Sound","year":3,"duration":"Sep 2016 \u2013 Oct 2016","nr_collabs":2,"image_id":"133uPtgxjCyoqI9MtLPssBjmVC5FDk2P0","info":["A mini-project made entirely in MATLAB. The program detects the pitch you are singing/talking in real time using the algorithm Harmonic Product Spectrum"],"skills_developed":"Matlab","type":"type-signal-processing","movie":"","homepage":"","github":""},{"title":"DMA","course":"TNM061 - 3D Computer Graphics","year":2,"duration":"Apr 2016 \u2013 May 2016","nr_collabs":3,"image_id":"1cDtABog3WHsuFE5WSbHc9elLGuypfcr6","info":["A web application visualizing a MIDI-file in WebGl. The project was done in the 3D Computer Graphics course.","The application reads in a midi-file and visualizes the information in 3D. When a note is played a sphere is created somewhere on a circle\'s perimeter depending on what note it is. The colour of the sphere also depends on what note it is. The sphere then follows a spiraling path with increasing depth.","My focus in this project was mostly to make it look good and that the different notes was visualized in a somewhat understandable way. The way we chose to visualize them was to use different colours and initial positions."],"skills_developed":"JavaScript, three.js, webGL","type":"type-graphics","movie":"","homepage":"https://rcedermalm.github.io/3D-MIDI-visualizer/","github":"https://github.com/rcedermalm/3D-MIDI-visualizer"},{"title":"SenApp","course":"TNM040 - Communication and User Interfaces","year":2,"duration":"Oct 2015 \u2013 Dec 2015","nr_collabs":3,"image_id":"1oqfAeq8hnP6r9pTta5Y0WQ_bP__olhwU","info":["An Android mobile application to help a user to handle his or hers meetings. It is possible to get information such as time, location, a brief description of the purpose of the meeting as well as check in at the meeting to be able to check which members of the group that were present at the meeting. Since each member has to check in to each meeting it is possible to see statistics for each member in the group of how late they have been. The user can also book new meetings.","In addition to the application\'s primary features, there is also a secondary function to provide the user a deeper insight into his or hers different groups.","Principles such as Norman\'s Design Principles was considered for each part of the application."],"skills_developed":"Android Application Development, Android Studios","type":"type-other","movie":"","homepage":"","github":"https://github.com/rcedermalm/SenApp"},{"title":"LEGO","course":"TNMK30 - Electronic Publishing","year":1,"duration":"Nov 2014 \u2013 Jan 2015","nr_collabs":3,"image_id":"1oaMq4Spn9cj4wFsAE5exo_f92qWGMI-7","info":["Electronic publishing, year one, is the introduction course to web programming. The project of the course was to make a website with the help of a LEGO database, where the user would be able to search for Lego sets and see which pieces it contained, and some brief information about the kit."],"skills_developed":"HTML, CSS, JavaScript, PHP, MySQL","type":"type-webb","movie":"","homepage":"","github":""},{"title":"Mellan Husen","course":"TNM088 - Digital Media","year":1,"duration":"Oct 2014 \u2013 Dec 2014","nr_collabs":3,"image_id":"1J6FkMCIUH7Vh-LhsoieODJvOQA2r9Rm1","info":["A 2D animated shortfilm about the introduction weeks 2014 with a lot of inside jokes. During the project I acted as the illustrator."],"skills_developed":"Adobe Photoshop, Adobe Illustrator, Adobe Flash","type":"type-other","movie":"https://www.youtube.com/embed/Nh1Iijx6tUw","homepage":"","github":""}]}')},27:function(e,t,a){e.exports=a.p+"static/media/profile_image.a7a143ee.png"},28:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var o={};a.r(o),a.d(o,"getProjects",(function(){return N}));var n=a(1),i=a.n(n),r=a(11),s=a(13),c=a(10),l=a(12);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={projects:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":var a=[];for(var o in t.payload)a.push(t.payload[o]);return d({},e,{projects:e.projects.concat(a)});default:return e}},u=Object(c.c)({projectReducer:p}),f=a(24);var g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=a(4),w=a(5),v=a(7),j=a(6),k=a(8),E=a(3),T=a(25);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(){return{type:"GET_PROJECTS",payload:_({},T.projects)}},P=(a(37),function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.info;return i.a.createElement("div",{className:"w3-card-4 w3-hover-shadow own-card "+e.type,onClick:this.props.handleOnClick},i.a.createElement("img",{className:"card-image",src:"https://drive.google.com/uc?id="+e.image_id,alt:""}),i.a.createElement("div",{className:"w3-container w3-center"},i.a.createElement("p",{className:"card-title"},e.title),i.a.createElement("p",{className:"card-info"},e.course)))}}]),t}(n.Component)),I=(a(38),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(v.a)(this,Object(j.a)(t).call(this,e))).state={width:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(E.a)(a)),a.handleClick=a.handleClick.bind(Object(E.a)(a)),a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),document.addEventListener("mousedown",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions),document.removeEventListener("mousedown",this.handleClick,!1)}},{key:"handleClick",value:function(e){this.node.contains(e.target)||this.props.handleClose()}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth})}},{key:"render",value:function(){var e=this,t=this.props.show_modal?"display-block":"display-none";return i.a.createElement("div",{className:"modal "+t},i.a.createElement("div",{className:"outer"},i.a.createElement("div",{className:"middle"},i.a.createElement("div",{ref:function(t){return e.node=t},className:"modal-main "+this.props.type},i.a.createElement("p",{className:"close-btn",onClick:this.props.handleClose},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("p",{className:"modal-title"},this.props.title),i.a.createElement("div",{className:"modal-short-info"}," ",this.props.short_info," "),i.a.createElement("hr",{className:"modal-separator"}),i.a.createElement("div",{className:"modal-info"},this.props.info)))))}}]),t}(n.Component));a(39);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(v.a)(this,Object(j.a)(t).call(this,e))).props.actions.getProjects(),a.state={shows_project_info:!1,current_project_in_modal:null,width:0},a.showProjectInfo=a.showProjectInfo.bind(Object(E.a)(a)),a.hideProjectInfo=a.hideProjectInfo.bind(Object(E.a)(a)),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(E.a)(a)),a.getProjectShortInfo=a.getProjectShortInfo.bind(Object(E.a)(a)),a.getProjectInfo=a.getProjectInfo.bind(Object(E.a)(a)),a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState(M({},this.state,{width:window.innerWidth}))}},{key:"showProjectInfo",value:function(e){document.documentElement.classList.add("modal-open"),this.setState(M({},this.state,{shows_project_info:!0,current_project_in_modal:e}))}},{key:"hideProjectInfo",value:function(){document.documentElement.classList.remove("modal-open"),this.setState(M({},this.state,{shows_project_info:!1}))}},{key:"getProjectShortInfo",value:function(){var e=this.state.current_project_in_modal,t=null!==e.year?i.a.createElement("p",{className:"short-project-info"},e.course,", year ",e.year):i.a.createElement("p",{className:"short-project-info"},e.course);return i.a.createElement("div",null,t,i.a.createElement("p",{className:"short-project-info"},e.duration," | Collaborators: ",e.nr_collabs))}},{key:"getProjectInfo",value:function(){var e=this.state.current_project_in_modal,t=this.state.width<768,a=""!==e.github,o=""!==e.homepage,n=""!==e.movie,r=0;a&&r++,o&&r++,n&&t&&r++;var s={maxHeight:"65vh"};switch(r){case 2:s={maxHeight:"60vh"};break;case 3:s={maxHeight:"55vh"}}var c=a||o||n&&t,l=[],h=0;for(var d in e.info)l.push(i.a.createElement("p",{key:"info"+h++},e.info[d]));var m=i.a.createElement("div",{className:"project-info"},l);return i.a.createElement("div",null,i.a.createElement("div",{className:"project-body",style:s},i.a.createElement("div",{className:"project-info"},m),i.a.createElement("p",null,"Developed skills in: ",e.skills_developed),n?i.a.createElement("iframe",{className:"project-iframe-movie",title:"Movie: "+e.title,type:"text/html",src:e.movie,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}):null),i.a.createElement("div",{className:c?"project-links":""},n?i.a.createElement("span",{className:"project-link mobile-movie"},i.a.createElement("i",{className:"fas fa-film project-link-icon"}),"  ",i.a.createElement("a",{target:"_blank",className:e.type,href:e.movie},"See movie")):null,a?i.a.createElement("span",{className:"project-link"},i.a.createElement("i",{className:"fab fa-github-square project-link-icon"}),"  ",i.a.createElement("a",{target:"_blank",className:e.type,href:e.github},"Go to repository")):null,o?i.a.createElement("span",{className:"project-link"},i.a.createElement("i",{className:"fas fa-at project-link-icon"}),"  ",i.a.createElement("a",{target:"_blank",className:e.type,href:e.homepage},"Go to homepage")):null))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"projects"},i.a.createElement("h1",{className:"projects-large-title"},"Projects"),i.a.createElement("div",{className:"types-of-projects"},i.a.createElement("div",{className:"colour-descriptions"},i.a.createElement("svg",{className:"desc-center",height:"30",width:"30"},i.a.createElement("circle",{className:"type-graphics",cx:"15",cy:"15",r:"10"})),i.a.createElement("p",{className:"desc-center"},"- Graphics")),i.a.createElement("div",{className:"colour-descriptions"},i.a.createElement("svg",{className:"desc-center",height:"30",width:"30"},i.a.createElement("circle",{className:"type-webb",cx:"15",cy:"15",r:"10"})),i.a.createElement("p",{className:"desc-center"},"- Webb")),i.a.createElement("div",{className:"colour-descriptions"},i.a.createElement("svg",{className:"desc-center",height:"30",width:"30"},i.a.createElement("circle",{className:"type-game",cx:"15",cy:"15",r:"10"})),i.a.createElement("p",{className:"desc-center"},"- Game")),i.a.createElement("div",{className:"colour-descriptions"},i.a.createElement("svg",{className:"desc-center",height:"30",width:"30"},i.a.createElement("circle",{className:"type-signal-processing",cx:"15",cy:"15",r:"10"})),i.a.createElement("p",{className:"desc-center"},"- Signal Processing")),i.a.createElement("div",{className:"colour-descriptions"},i.a.createElement("svg",{className:"desc-center",height:"30",width:"30"},i.a.createElement("circle",{className:"type-other",cx:"15",cy:"15",r:"10"})),i.a.createElement("p",{className:"desc-center"},"- Other"))),this.props.projects.map((function(t){return i.a.createElement(P,{key:t.title,info:t,handleOnClick:function(){return e.showProjectInfo(t)}})})),null!==this.state.current_project_in_modal?i.a.createElement(I,{handleClose:this.hideProjectInfo,short_info:this.getProjectShortInfo(),info:this.getProjectInfo(),show_modal:this.state.shows_project_info,title:this.state.current_project_in_modal.title,type:this.state.current_project_in_modal.type}):null)}}]),t}(n.Component);var S=Object(s.b)((function(e){return{projects:e.projectReducer.projects}}),(function(e){return{actions:Object(c.b)(o,e)}}))(A),C=(a(40),a(9)),L=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"general-info-body"},i.a.createElement(C.b,null,i.a.createElement(C.c,null,i.a.createElement(C.a,{className:"info-block"},i.a.createElement("i",{className:"fas fa-user-circle fa-icon"}),i.a.createElement("div",{className:"info-text"},i.a.createElement("p",null,"My name is Rebecca Cedermalm and I am a girl born 1995 with a passion for computer graphics. I am an alumni from the Master of Science program of Media Technology at Linkoping University in Sweden. The short version of what the program contains is: programming, computer graphics and information visualization combined with the regular engineering parts. The reason I chose Media Technology is the unique combination of maths and creative visualisations."),i.a.createElement("p",null,"During my free time I love to spend my time reading, hiking, exploring my surroundings, watching movies or creating something fun visually. The fun part can be everything between a splash of paint on a canvas to hobby projects using code."),i.a.createElement("p",null,"My dream work place is at a company where I have the change to learn and implement new techniques, preferably in the film or game industry."))),i.a.createElement(C.a,{className:"info-block"},i.a.createElement("i",{className:"fas fa-question-circle fa-icon"}),i.a.createElement("div",{className:"info-text"},i.a.createElement("p",null,"So, what is this page? My intentions with this page is a way for myself and my future employers to keep track on what I have done during my years in the technology field. A trip down memory lane in the form of an extended resum\xe9, so to speak.")),i.a.createElement("i",{className:"fas fa-address-card fa-icon"}),i.a.createElement("div",{className:"info-text"},i.a.createElement("p",null,"If you find anything here interesting or just want to chat, you can reach me in the following ways:"),i.a.createElement("div",{className:"general-links"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-envelope fa-small-i-icon"})," ",i.a.createElement("a",{className:"info-link",href:"mailto:rebecca@cedermalm.se"},"rebecca@cedermalm.se")),i.a.createElement("p",null,i.a.createElement("i",{className:"fab fa-linkedin fa-small-i-icon"})," ",i.a.createElement("a",{className:"info-link",href:"https://se.linkedin.com/in/rebecca-cedermalm-76a769113",target:"_blank",rel:"noopener noreferrer"},"Rebecca Cedermalm")),i.a.createElement("p",null,i.a.createElement("i",{className:"fab fa-github-square fa-small-i-icon"})," ",i.a.createElement("a",{className:"info-link",href:"https://github.com/rcedermalm",target:"_blank",rel:"noopener noreferrer"},"rcedermalm"))))))))}}]),t}(n.Component),W=(a(41),a(27)),x=a.n(W),G=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header jumbotron"},i.a.createElement("img",{src:x.a,alt:"",className:"profile-image"}),i.a.createElement("h1",null,"Rebecca Cedermalm")),i.a.createElement(L,null),i.a.createElement(S,null),i.a.createElement("div",{className:"footer"},i.a.createElement(C.b,{className:"footer-body"},i.a.createElement(C.c,null,i.a.createElement(C.a,{className:"footer-column"},i.a.createElement("p",null,"Great work! You have made it to the end of my homepage. Have some cake to celebrate!"),i.a.createElement("p",null,"Hopefully you learned something new about me and I am thanking you for taking your time looking though all of this. Feel free to contact me if you have any questions.")),i.a.createElement(C.a,{className:"footer-column"},i.a.createElement("i",{className:"fas fa-birthday-cake cake-icon align-middle"})))),i.a.createElement("p",{className:"copyright"},"\xa9 Rebecca Cedermalm")))}}]),t}(n.Component),R=(a(42),a(43),Object(c.d)(u,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(c.a)(f.a)));Object(r.render)(i.a.createElement(s.a,{store:R},i.a.createElement(G,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/personal-page",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/personal-page","/service-worker.js");g?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):b(e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.cfeae342.chunk.js.map