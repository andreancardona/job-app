# Welcome to my `Job App` project!

Job App is a simple CRU (CRUD app...without the delete) that allows a user to add a job posting and edit an existing job.

## Get started - TLDR!

In the project directory, you can run:

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

--> Navigate to the home screen of the app [http://localhost:3000/home](http://localhost:3000/home)

## `yarn test`

This project uses [Jest Axe](https://www.npmjs.com/package/jest-axe) to catch any potential acceessibility violations and [Jest Snapshots](https://jestjs.io/docs/snapshot-testing) for our UI component testing.

## `sass --watch src/index.scss build/index.css`  

Run this command to compile your sass styling updates

Demo: 

https://user-images.githubusercontent.com/32720851/111165000-2e99fe80-8564-11eb-806c-a3caa1cd32c4.mov


-----------------------------------------------------------------------------

## Let's get started (the longer version)

There are a few key concepts I'd like to elaborate on
1. File structure
2. Code style && React Hooks
3. Accessibility 
4. Testing
5. SCSS Styles
6. A little reflection (an optional read..)

  ### File structure
  File structures can always get messy quickly, which is why I've tried to keep mine as simple as possible! 
  I've divided my project into 4 main groups: 
  
    1. Components 
    2. Images & SVGs
    3. Styles
    4. Tests

  I know there are many ways to group and structure files, but this is the way that has worked best for me. Having this structure allows each folder to house a single intention and functionality within the app (e.g. `styles` - holds all styling for the entirety of the app vs. mixing and matching component / test and style files).
  
   ### Code && React Hooks
   When thinking about how to write my code I wanted to keep it DRY, readable, effective and again as simple possible. And so, I decided to use [React Hooks](https://reactjs.org/docs/hooks-intro.html). The biggest reason I love using React Hooks is because both presentational & functional components can hold state...which is pretty awesome. And remember this and binding, and how confusing all that was, it get's rid of all that too :). Here is a great medium article that breaks down using state with Reacht Hooks - [React Hooks Understanding the Basics](https://medium.com/makemytrip-engineering/react-hooks-understanding-the-basics-d7f8290f445e)
   
   ### Accessbility
   Making this project Accessible was extremely important. I decide to use a few tools that would help me get there: 
     1. [Jest Axe](https://www.npmjs.com/package/jest-axe)
     2. Voice Over Screen Reader (imbedded in all Macs) - [to get started read this awesome medium article](https://medium.com/@lsnrae/how-to-use-the-voiceover-screen-reader-70699e2e0f8a#:~:text=Basic%20VoiceOver%20Commands%20(Safari),rotor%20%E2%80%94%20Ctrl%2BOpt%2BU)
   
  
  
