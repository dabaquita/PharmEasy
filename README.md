# **PharmEasy**

![Register Page](https://i.imgur.com/dB1zIm4.gif)

## Summary

Our group desired to create an application that could facilitate pharmaceutiacal proccesses, boost medication adherance, raise customer satisfaction, and promote healthier communities. 
PharmEasy aims to eliminate obstacles that may stand in the way of a person taking care of their health in regards to their perscribed medications. 

## Meet the Team

- Ashley Hart (Front-End)
- Denielle Abaquita (Full-Stack)
- Justin Esguerra (Front-End, Designer)
- Jon Abrigo (Back-End)

## Motivation
We developed this application after a period of extensive research consisting of two user studies with a pharmacy tech and a professional pharmacist, we also consulted health and pharmecutical professionals to find out what was standard in the industry. 

This project stands as an opprotunity to explore new technologies and to revisit ones that we have not used in a long time.

## What We Learned

We learned A LOT! We are still fairly novice in the world of web development, but through this project, we were able to solidify concepts like user authentication, React hooks, Material UI, and Routes! We believe that this project was made with lots of love and caffeine ❤️. So please do enjoy it and add onto it! **Go Knights, Charge On!**

Additionally, we did lots of work in doing market research to get this on the ground running. Below, we outlined our user study to define the requirements of the application. In doing so, we created our database schema, hand-drawn mockups, and coded up the rest! Thanks for the taking the time to read this. 

## User Study

### Sample Size
5 Total:
3 Pharmacists
2 Pharmacy Techs

### Questions
1. What pharmaceutical process(es) did you want to improve upon?
2. What challenges do you think the application will face?
3. What challenges do you face on a daily basis with prescriptions and medications?
4. What are some of your favorite websites or mobile applications?
5. In light of the COVID-19 pandemic, how would you prefer to assist your patients while adhering to CDC guidelines?

## Client Side
### Technology
- React.js
- Material UI
- Lottie

### Pharmacy Side
Administration focused web app for pharmacies

Users can navigate from our Home page to the Login/Register pages 

We utilized React and MaterialUI and a  to create a responsive layout that would be accessibile for our users. We have created high constrast designs so that the website is easily viewable and easy to navigate.

![Login Page](https://i.imgur.com/siQ2NiP.gif)

![Home Page](https://i.imgur.com/1PwZqRV.gif)

### Patient Side

- Mobile First Design 
- Priority of the best user experience for patients
- Tab Bars to control the 4 main views:
    - Home (patient information, billing information)
    - Prescriptions (list of all active prescriptions)
    - Transfer (prescription transfer)
    - QR Scanner (scan prescriptions at counters)

![Mobile](https://i.imgur.com/DxuOCwO.png)

## Server Side
### Technology
- Express.js
- Node.js
- Mongoose
- JSON Web Token (JWT)
- Axios

### Overview

We have used JSON Web Token (JWT) to ensure secure user authentication. 

## Database 
### Entity-Relationship Diagram
![](https://i.imgur.com/TcppeQl.png)

We have optimized the schema for this project. A pharmacist is the main user for this project and they have access to creating patients using the fields above in a one-to-many relationship. Additionally, multiple patients can have multiple allergies and vice versa; therefore, they have a many-to-many relationship. Furthermore, each patient will have access to their prescriptions (one-to-many), and each prescription is mapped to medications (one-to-many). 

### HIPAA Regulations 

For organizations and applications in healthcare and related fields subject to the requirements of the Health Insurance Portability and Accountability Act (HIPAA), MongoDB Cloud is HIPAA-ready and enables covered entities and ensures the use of a secure cloud database environment to process, maintain, and store protected health information.
