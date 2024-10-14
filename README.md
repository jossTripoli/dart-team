# dart-team

This repository contains the source code for the **Dart Academy Team Website**, built using **Next.js**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **React**. The website will be used to get familiar with this tech stack. I used chatgpt to help write this README.

## Due Date

Open a pull request on GitHub to get your code reviewed and merged when you're done. Please submit you pull request by **Sunday October 13 at 11:59**

## Requirements for your about page

- Include an image of yourself. Add it to public images
- Include a short bio about yourself
- Display additional information by **mapping over an array of objects**. This could include a list of your favorite things, hobbies, music you like, etc. Use a component like a **Card** or **List** to neatly display the items.
  - showcases our ability to dynamically insert data into templates, making it easy to display content like courses and lesson pages without repeating lots of code. For simplicity, we'll use arrays for now, but on the Dart Academy platform, we utilize a PostgreSQL database to manage and display real-time data for courses, lessons, and other educational content.
- **shadcn/ui components**: Use at lest **5** different shadcn components on your About page. [see directions at end on how to add them](#how-to-create-your-about-page)
- Make your page look unique and please feel free to explore the tech stack and add anything else you want to your page!

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React-based framework for building modern web applications with server-side rendering and static site generation.
- **TypeScript**: A statically typed programming language that builds on JavaScript, providing enhanced tooling and type safety.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling components with predefined classes.
- **shadcn/ui**: A collection of beautifully designed UI components for React applications.

## Getting Started

Before you begin, ensure that you have the following installed:

- **Node.js** (v14 or higher): Run the following command to check if Node.js is installed:
  ```
  node -v
  ```
  If Node.js is not installed, download and install it from [here](https://nodejs.org).

## Recommended VS Code Extensions

We recommend using Visual Studio Code (VS Code) as your code editor. You should also install the following VS Code extensions to improve productivity and development experience:

- **Tailwind CSS IntelliSense**: Provides autocomplete and suggestions for Tailwind classes.
- **Prettier**: For consistent code formatting.
- **TypeScript**: Provides IntelliSense and type-checking for TypeScript files.
- **ESLint**: Helps with identifying and fixing TypeScript/JavaScript linting issues.
- **JS JSX Snippets**: Handy snippets for JavaScript and JSX development.
- **Material Icon Theme**: A set of icons for your VS Code files and folders for better visual organization.
- **npm Intellisense**: Auto-imports for npm modules in JavaScript and TypeScript files.
- **JavaScript and TypeScript Nightly**: Get the latest TypeScript and JavaScript versions.
- **next.nav**: Visualizes Next.js file based routing.
- **GitHub Copilot**: AI-based code completion tool (Available for free for students through the [GitHub Student Developer Pack](https://education.github.com/pack/join)).

### Clone the Repository

Open your terminal and run the following command to clone the repository:

```
git clone https://github.com/jossTripoli/dart-team.git
```

Navigate to the project directory:

```
cd dart
```

### Create a New Branch

Before starting any work, create a new branch to keep the main branch clean and avoid conflicts:

```
git checkout -b [your-name]
```

Once you've finished working on your branch and are ready to merge your changes, push your branch to the remote repository:

```
git push origin [your-branch-name]
```

Open a pull request on GitHub to get your code reviewed and merged when you're done. Please submit you pull request by **Sunday October 13 at 11:59**

### Install Dependencies

After cloning and creating a branch to work off of, install the project's dependencies:

```
npm install
```

### Running the Application

Now that the dependencies are installed you can run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Project Structure

Note:
Next.js uses file-based routing, where the file and folder structure in the app directory automatically creates the app's routes. Each file corresponds to a specific route, like about/page.tsx becomes /about in the browser. Two key reserved files, page.tsx and layout.tsx, help define how pages are displayed. The page.tsx file renders the content for its route, while layout.tsx provides a shared layout (such as headers or footers) for pages in the same directory. You can use parentheses () around folder names to exclude them from the URL path, which is useful for organizing without affecting routing. Additionally, you can use an underscore \_ before folder or file names to organize local components or utilities that aren't meant to be part of the public URL structure. Layouts can also be nested, allowing different sections of the app to have unique layouts, making routing and structure management more intuitive.

| Name                       | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| public/                    | Static assets like images, CSS, JS, fonts, and JSON files.                   |
| public/images/             | Images used in the application.                                              |
| app/                       | Contains the main application logic and Next.js pages.                       |
| app/team/                  | Contains team member profile pages.                                          |
| app/team/layout.tsx        | Layout file that applies consistent structure to all team pages.             |
| app/team/joss/             | Joss's profile page as an example of how to structure your page.             |
| app/team/joss/\_components | Joss's local components that will only be used in the joss directory         |
| components/                | Contains reusable UI components such as buttons, cards, etc. for entire site |
| layout.tsx                 | sitewide layout                                                              |
| page.tsx                   | default home page                                                            |
| package.json               | Lists all the dependencies and scripts for the project.                      |
| tsconfig.json              | TypeScript configuration file.                                               |

## How to Create Your About Page

Each team member should create an individual About Me page under `app/team/`.

1. **Create your page and components folder**:
   Create a new folder in `app/team/` with your name, and add a TypeScript file, e.g., `app/team/[yourname]/page.tsx`.

2. **Install a Specific Component**:
   To add a specific **shadcn/ui** component (like Accordion, Button, etc.), run the following command that will add them to components/ui folder (I already have button, card, and scroll-area):

   ```bash
   npx shadcn-ui@latest add <component>
   ```

   For example, to install the **Accordion** component, use:

   ```bash
   npx shadcn-ui@latest add accordion
   ```

3. **Import the Component**:
   After installing the component, import it into your page or component file. For example, to use the Accordion:

   ```tsx
   import {
     Accordion,
     AccordionItem,
     AccordionTrigger,
     AccordionContent,
   } from "@/components/ui/accordion";
   ```

## Questions/Comments:

Please ask in slack if you have any questions or want to share something interesting you've learned etc.
