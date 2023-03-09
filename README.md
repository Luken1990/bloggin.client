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
2. Alternatively clone the repository:

   - Create a two folders in your local machine to clone the client and server repositories
   - Using using Gitbash / terminal navigate to the folder.
   - Enter the following Client folder: git clone https://github.com/Luken1990/bloggin.client.git
   - Enter the following Server folder: git clone https://github.com/Luken1990/bloggin.server.git

<img src="https://user-images.githubusercontent.com/23103970/223166424-89204247-9d01-4883-9ae3-bd41bbf81900.png" width="350">

3. Install NodeJs: https://nodejs.org/en/download/
4. Open your IDE, navigate to the folder/file.
5. Install all dependencies enter: npm install
6. Navigate to the server folder create a .env (environment variable) and input MONGO_URL: you api key and JWT_SECRET: your secret key
7. Start your server: npm start
8. Start your client: npm start

## Deployment

Deployed using: https://render.com/

Link to deployed application: https://bloggin-ncif.onrender.com/

1. Deployed the client and server separately, enabling us to update one without affecting the other.
2. Easier to debug.
3. more secure.

https://user-images.githubusercontent.com/23103970/223166797-9fc53bc0-8c4e-4762-af1a-bad3fc138343.mp4


