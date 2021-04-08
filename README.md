# Welcome to my `Job App` project!

Job App is a simple CRU (CRUD app...without the delete) that allows a user to add a job posting and edit an existing job.

## Get started - TLDR!

In your terminal run: 

## `git clone https://github.com/andreancardona/job-app` 

To clone the app

## `cd job-app`

CD into the project `job-app`

In the project directory, you can run:

## `yarn install`

To download all the packages

## `yarn start`

Navigate to the home screen of the app [http://localhost:3000](http://localhost:3000)

## `yarn test`

This project uses [Jest Axe](https://www.npmjs.com/package/jest-axe) to catch any potential acceessibility violations and [Jest Snapshots](https://jestjs.io/docs/snapshot-testing) for our UI component testing.

## `sass --watch src/index.scss build/index.css`  

Run the above command to compile your sass styling changes

## Technologies used
  - [Create React App](https://github.com/facebook/create-react-app)
  - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [Mac Voice Over](https://medium.com/@lsnrae/how-to-use-the-voiceover-screen-reader-70699e2e0f8a#:~:text=Basic%20VoiceOver%20Commands%20(Safari),rotor%20%E2%80%94%20Ctrl%2BOpt%2BU)
  - [Jest Axe](https://www.npmjs.com/package/jest-axe)
  - [Jest Snapshots](https://jestjs.io/docs/snapshot-testing)
  - [Node SASS](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
  - [Yarn Package Manager](https://yarnpkg.com/)

### It should look like this: 

<img width="1680" alt="Screen Shot 2021-04-07 at 8 59 12 PM" src="https://user-images.githubusercontent.com/32720851/113962017-2f7d2380-97e4-11eb-9092-aa955f68709a.png">

-----------------------------------------------------------------------------

## Let's get started - the longer version...

There are a few key concepts I'd like to elaborate on:
1. [File structure](https://github.com/andreancardona/job-app/blob/main/README.md#file-structure)
2. [Code style && React Hooks](https://github.com/andreancardona/job-app/blob/main/README.md#code--react-hooks)
3. [Accessibility](https://github.com/andreancardona/job-app/blob/main/README.md#accessibility)
4. [Testing](https://github.com/andreancardona/job-app/blob/main/README.md#testing)
5. [Styles](https://github.com/andreancardona/job-app/blob/main/README.md#styles)
6. [A little reflection (an optional read..)](https://github.com/andreancardona/job-app/blob/main/README.md#a-little-reflection)

  ### File structure
  File structures can get messy quickly, which is why I've tried to keep mine as simple as possible! 
  I've divided my project into 4 main groups: 
  
    1. Components 
    2. Images & SVGs
    3. Styles
    4. Tests

  I know there are many ways to group and structure files, but this is the way that has worked best for me. Having this structure allows each folder to house a single intention and functionality within the app (e.g. `styles` - holds all styling for the entirety of the app vs. mixing and matching component / test and style files).
  
   ### Code && React Hooks
   
   When thinking about how to write my code I wanted to keep it DRY, readable, effective and again as simple possible. And so, I decided to use [React Hooks](https://reactjs.org/docs/hooks-intro.html). The biggest reason I love using React Hooks is because both presentational & functional components can hold state...which is pretty awesome. And remember this and binding, and how confusing all that was, it get's rid of all that too :). Here is a great medium article that breaks down using state with Reacht Hooks - [React Hooks Understanding the Basics](https://medium.com/makemytrip-engineering/react-hooks-understanding-the-basics-d7f8290f445e)
   
    To see this in action run the following at the root of the app:
      - `yarn start`
      - then navigatate to `http://localhost:3000/home`
   
   ### Accessbility
   
   Making this project Accessible was extremely important. I decide to use a few tools that would help me get there:
   1. [Jest Axe](https://www.npmjs.com/package/jest-axe). This is the jest testing package that will run test on your components to check for any accessibility violations. As noted on the npm site - it does not mean your app is accessible, it's just a tool to help get you there. 
   
    To see this in action run the following at the root of the app:
      - `yarn test`
     
   2. Voice Over Screen Reader (imbedded in all Macs) - [to get started read this awesome medium article](https://medium.com/@lsnrae/how-to-use-the-voiceover-screen-reader-70699e2e0f8a#:~:text=Basic%20VoiceOver%20Commands%20(Safari),rotor%20%E2%80%94%20Ctrl%2BOpt%2BU)
   3. IBM Accessibility Checker - [Chrome extension](https://chrome.google.com/webstore/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp)
      - Learn more about the [IBM Accessibility Checker](https://www.ibm.com/able/toolkit/tools/)
      - This is an awesome tool to catch any obvious a11y issues
  
  Please note - I am not an accessibility expert, just a developer trying to make more inclusive apps, and I'm still learning, so all feedback to make this app more accessible is welcome!
  
  ### Testing [ IN PROGRESS ]
  For this project I chose to use [Jest Axe](https://www.npmjs.com/package/jest-axe) to catch any potential acceessibility violations (as mentioned above) and [Jest Snapshots](https://jestjs.io/docs/snapshot-testing) for our UI component testing.
     
    To see this in action run the following at the root of the app:
      - `yarn test`
  
  ### Styles
  For this project, if you take a look at my commit history, I started using pure css, and then...I switched it up! My over all approach to this project, was keep it simple *and then* enhance. I love using scss, mainly because it does a lot of the guess work for you! SCSS allows you to define style variables at the top level, making them accessbile throughout every part of your project. An amazing resource to understand how you might want to think about approaching styles is this article [Style React Components: 7 Ways Compared](https://www.sitepoint.com/react-components-styling-options/#usingscsswithreact)
     
      To see this in action run the following at the root of the app: 
      - `sass --watch src/index.scss build/index.css`
      - make some changes: navigate to `_colors/scss` file and change `$background-blue: #085ff7;` to `$background-blue: #fa4525;` 
      and you should see all the once blue button background change to red - pretty cool, right? :)


 ### A little reflection
 With personal projects I've realized it's hard to not want to keep *working* to improve it. If you look at my commit history I changed many major parts of the project multiple times - from switching css to scss, creating and adding components to changing the file structure of my app. What's cool about coding is, there are so many different ways to achieve the same intention - and that's pretty awesome. I think looking forward, I would have taken more time to understand how I wanted to structure my components. I think that would've helped me define a clearer vision of how I wanted to develop this project. But, we live and learn. And so looking forward this is something I want to remember, and keep in mind. Whether it's through sudo code, hand drawings or just notes - taking the time to outline the flow of componoents and their functionalities is extrelemely important (p.s. I did thesee things I just wished I had taken more time on it before jumping straight into coding).

Well as some final thougths, this project was really fun to work on. All comments and feedback is welcome. I'm learning everyday and trying to become a better developer in the process. :) 
  
  
