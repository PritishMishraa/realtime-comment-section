<p align="center">
  <img src="./public/img/working-screencapture.png" />
</p>

<h1 align="center"> realtime-comment-section </h1>
<h4 align="center"> a simulation of a real-world comment section where different users can simultaneously type, read and post comments </h4>

### About
The **comment section** is built using various technologies. The front-end section is made using **HTML, Tailwind CSS, and JavaScript**. It also includes plain **CSS animations** customized with Tailwind. The back-end is constructed using **Node.js, and Express.js**. Real-time communication is achieved with the help of **Socket.IO**. All the comments are **saved and synchronized** using **Mongo DB**.

### Technologies

[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) </br>
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) </br>
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/) </br>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) </br>
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) </br>

### Features
- does not allow the user to write comments unless they provide a proper username
- retrieves the comments from the database and displays them on the feed
- notifies other users about the user which is currently typing
- updates the comment in realtime across all the sockets

### Installation
clone the repository
```sh
gh repo clone PritishMishraa/realtime-comment-section
```
install the dependencies
```sh
npm install
```
run 
```sh
npm run dev
```
