# bloggin.client



##### Table of Contents  
- [General information](#general-information)
- [Planning](#planning)
- [Built With](#built-with)
- [Security](#security)
- [Installation](#installation)
- [Deployment](#deployment)

## General information

Full MERN Stack application. Bloggin is a community site where web development enthusiasts can share knowledge and information with each other.
Log in or sign up, create, edit, share, and like blogs. Users will have their own personal profiles where they can add additional information and manage their posts. 

Editing and deletion of ANY post will be possible only by admin. User will be able to delete their own post however they will not be permitted to delete others.

## Planning

Functional Requirements:

* User should be able to view blog content even if they are not registered
* User should be able to Sign up and Login once registered.
* Registered users can create and edit their blog posts.
* Registered users should be able to like and share posts
* Only the admin should be able to delete or edit any users' blog posts.
* Users should not be able to delete other users' blog posts.

Non-functional Requirements:

* Usability: The user interface should be easy to understand and navigate without many instructions. 
* Reliability: The System must perform without failure in 80 per cent of use cases. In the unlikely case of failure, the system should be operational within 36 hours. 
* Performance: The system should be able to support multiple users simultaneously.
* Security: All data within the system should be protected against any unauthorized access. All data passed to the database should have secure endpoints. The user password will be encrypted. 
* Supportability:  Software must be cross-platform, and able to run on both Mac and Windows. Cross-browsing and mobile responsive. 

User Stories:

1. As a student I want to be able to view blog postings to learn JavaScript fundamentals
2. As a teacher, I want to be able to share my knowledge with my students by posting blog articles on the fundamentals of web development. 
3. It is important for you to adopt a student mindset as a junior developer. It's therefore ideal to have a community of like-minded individuals where we can share and learn from one another
4. As a senior developer, I want to contribute my knowledge and experience to new aspiring young developers.

System architecture:

ExpressJS:

* The reason I chose express is that it is written in javascript, which is simple to learn even if you have never used it before.
* Express was developed to make building web apps and APIs simple.
* Fast
* It is time-efficient.
* Asynchronous 


Create React App:

* You can concentrate on development thanks to the "Quick reloads". Your bundles are automatically optimised throughout the deployment.
* React apps only need one build dependency.
* The application automatically reloads, saving you time from having to stop and start it again.
* Launches in seconds

TailWindCSS:

* It is straightforward to create appealing layouts because of the fast framework and style components.
* Pre-defined styles can be easily overridden 
* Tailwind has countless built-in classes that remove the need to start from scratch.
* Remove any styles that are not needed or are not being used.


Layout: [Wireframe.pdf](https://github.com/Luken1990/bloggin.client/files/10901937/Wireframe.pdf)


## Security
* JWT is used to securely transmit information between the client and server during authentication. 
* API keys are stored as environment variables.


## Built With
<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
</p>


## Installation

1. DownLoad zipped file to your local machine.
2. Alternatively clone the repository using the follow url: https://github.com/Luken1990/CarApi.git

   - Create a two folders in your local machine to clone the client and server repositories
   - Using using Gitbash / terminal navigate to the folder.
   - Enter the following Client folder: git clone https://github.com/Luken1990/bloggin.client.git
   - Enter the following Server folder: git clone https://github.com/Luken1990/bloggin.server.git

<img src="https://user-images.githubusercontent.com/23103970/223166424-89204247-9d01-4883-9ae3-bd41bbf81900.png" width="350">

3. Install NodeJs: https://nodejs.org/en/download/
4. Open your IDE, navigate to the folder/file.
5. Install all dependencies enter: npm install
6. Start your server: npm start
7. Start your client: npm start

## Deployment

Deployed using: https://render.com/

Link to deployed application: https://bloggin-ncif.onrender.com/

1. Deployed the client and server separately, enabling us to update one without affecting the other.
2. Easier to debug.
3. more secure.

https://user-images.githubusercontent.com/23103970/223166797-9fc53bc0-8c4e-4762-af1a-bad3fc138343.mp4


