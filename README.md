# TS Bakery: TypeScript Introduction

<div>
	<code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" title="TypeScript"/></code>
</div>

## Intro

### What

This is a React project created by Niamh Doyle (Github: [@niamh-d](https://github.com/niamh-d)) to introduce creating types in TypeScript (TS) and using these types to faciliate the passing of data in a simple front-end single page application (SPA) for React/JavaScript developers who are new to TS.

#### Noteable packages used in the project

- [React hook form](https://react-hook-form.com/) – form handling
- [DaisyUI](https://daisyui.com/) for fast component development
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Vitest](https://vitest.dev/) for testing

### Note

This project is not intended to be an example of best practice for structuring a React SPA nor is it intended to be an exhaustive overview of the features of TS or TS best practices. The React app is there to given context to using TS types. This introduction expects the user to have prior experience with React and JavaScript.

### Images and names

No rights are claimed to any of the images and names of places or characters used in this project. These belong to Studio Ghibli, Inc. and are used here for flavour only.

## Branches

- main: Starter code and starting point for the tutorial (this code is intentionally broken)
- final: [Final code](https://github.com/niamh-d/ts-bakery/tree/final) to see solution to the challenge

## Copy code to local machine

```bash
cd desktop # or path to wherever you want to save the project
git clone https://github.com/niamh-d/ts-bakery.git
# open in VSCode
cd ts-bakery
code .
# download final code to local machine
git checkout origin/final # This allows you to explore the final code
git checkout final # This creates a local copy of the final code
# switch back to main branch (starter code)
git checkout main
```

## Installation

```bash
npm install
```

## Run the dummy JSON Server

Serves the json file to be found in `data/data.json` at port `3001`. This mimics the fetching of data from an API.

```bash
npm start
```

## Development

```bash
npm run dev
```

## Architecture

- API directory: contains the API class that fetches the data from the dummy JSON server.
- PricingCalculator directory: contains the PricingCalculator class that calculates the order pricing data used in the Pricing component.
- types directory: contains the types used in the application.
- utils directory: contains the utility functions used in the application – `maths.utils.ts`, `order.utils.ts`, and `string.utils.ts`.
- constants directory: contains the constants used in the application
- src directory: contains App.tsx, components directory
- \_playground directory: contains the files used in the initial tasks

### Components

- reusuable button component
- reusuable product component – one for each product
- products component (displays the products)
- pricing component (displays the order pricing data)
- success component (displays the order success messaging)
- form component (captures user input and submits the order)

## INITIAL TASKS

Writing TypeScript code and manually compling it to JavaScript. Testing output with Vitest to ensure everything works as expected.

- [] Inspect file `_playground/start.js` (JS file!)
- [] Run the file with command `node _playground/start.js` – the output is not as one would expect
- [] Run tests with Vitest using command `npm test` – all tests will fail (this is expected)
- [] Copy all contents of the file to BOTH empty files – `start-original.js` and `start.ts` (TS file). Open the TS file. You can ignore the other file for now.
- [] Notice how there are loads of warnings in the TS file.
- [] Fix these warnings using TypeScript
- [] Once the file is free of TS warnings, in a fresh terminal, run command `tsc \_playground/start.ts` to compile the file to JS
- [] Open the JS file `start.js`. You will notice that it has been overwritten by TS with complied JS code. It is different from the code we wrote (contrast with the code you copied to `start-original.js`). You will also notice that all our TS extras are no longer to be seen. This is because we have compiled the file to vanilla JS.
- [] Return to the terminal that Vitest is running and voilà all your tests are passing! Congrats! Now move on the the next tasks.

## MAIN ACTIVITY

### Prep

- [] Inspect the json file `data/data.json` to understand its structure and the data it contains.
- [] Have a look at the application to understand how it works and the data flows.
- [] Uncomment the code in the file `types/types.ts`.
- [] Fix the TS warnings in the files `utils/maths.utils.ts` and `utils/order.utils.ts`.

### Scenario

DISASTER HAS STRUCK!

Your housemate converted from JS to TS an order checkout application she worked hard on for the famous Gütiokipänjä bakery in Koriko, and she was going to commit her changes but she wanted to show them to you first. You sat down to have through her types file and she left to grab some things from the shop, completely fogotting she had forgoten to save her work. And as you were looking through her types file her naughty cat jumped on the keyboard and deleted all the contents of the types file she has worked so hard on! Oh no! Now you must replace her work before she returns from the shop. Are you up for the task?

### Instructions

The React code and business logic has already been written for you. Your task is to add the missing types. The only React component you need to work on is the reusable button component. All other components can be left alone.

- [] Write the missing types in file `types/types.ts`. The names of the types have already been provided for you. It is very important that you keep the same names, as these are used throughout the rest of the application.
- [] Create the enums in file `constants/constants.ts`. The names of the enums have already been provided for you.

You breathe a sigh of relief as you finish the fixes and your housemate has yet to return from the shop. You made it! But, wait, as you look through the app you notice in horror that the code from the reusable button component file is mysteriously missing. That naughty cat! Hopefully this is the final fix. Luckily your housemate keeps excellent design notes:

> simple reusable button component building upon button element –
> props object of type ButtonPropsType containing properties: text, handler, styles, type, isDisabled bool
> default style is primary (type), type is submit (enum), isDisabled is false, text is Submit (enum)

- [] Repair the button component. The file already exists. You must use the ButtonPropsType and the enums ButtonTypes and ButtonTexts to fix the component.

### If you get stuck

If you get stuck you can always check out the solution on the final code branch ([here](https://github.com/niamh-d/ts-bakery/tree/final)).

### When you know you've completed the challenge

- [] Buttons (form component, success component) are appearing as expected using the prop type and enums
- [] App is working as expected and no errors in the terminal
- [] No file contains any errors or warnings (underlined text)
- [] You can run the below two commmands and everything returns clean:

```bash
npm run check
npm run lint
```

## If you got this far

If you got this far, congratulations! This was a tough one! Take a deep breathe and pat yourself on the back. You've done it! I hope you had fun being introduced to TypeScript and now feel comfortable taking the next step of using it in your own projects.

## Where to go next

- [Official TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Tips and Tricks from Matt Pocock](https://www.youtube.com/@mattpocockuk/videos)
- [Total TypeScript Essentials online book](https://www.totaltypescript.com/books/total-typescript-essentials)
- [Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript)

## Licence

Licence: Attribution-NonCommercial-NoDerivatives 4.0 International [(CC-BY-NC-ND-4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Technology icons by [Marwin1991](https://github.com/marwin1991/profile-technology-icons)

Names of places or characters used in this project belong to Studio Ghibli, Inc. and are used here for flavour only. No rights are claimed.
