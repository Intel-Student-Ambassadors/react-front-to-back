# Props Drilling

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

Props drilling in React refers to the process of passing data from a parent component down to its child components through props. This is done when a child component needs access to data or functions that are stored in a higher-level parent component. Props drilling can become cumbersome when you have deeply nested components, as you would need to pass the props through each intermediate component even if they are not directly using it.

In the provided code, props drilling is used to pass the `handleDelete` function from the `App` component to the `FeedbackList` component, and then from the `FeedbackList` component to the `FeedbackItem` component. The `handleDelete` function is used to remove an item from the `feedback` state array in the `App` component when the user clicks the delete button in a `FeedbackItem`.

Now let's explain the comments in the `FeedbackItem` component:

1. `// feedback state is not found here but in App.js`: This comment mentions that the `feedback` state is not directly available in the `FeedbackItem` component, but it is coming from the `App` component and passed as props.

2. `// clickButtonHandler`: This comment describes the purpose of the `handleClickButton` function, which is used to handle the click event of the delete button. When the button is clicked, it calls the `handleDelete` function passed as a prop, passing the `id` of the current feedback item as an argument. `clickButtonHandler` is an alternative function name to `handleClickButton`.

Below is a quick summary:

The `Props Drilling` technique is demonstrated in this project to efficiently pass the `handleDelete` function from the `App` component to the `FeedbackItem` component, which allows for interactive deletion of feedback items. To use the `Props Drilling` technique in your own projects, follow these steps:

1. Identify the data or functions that need to be passed down to child components.

2. Pass the required data or functions as props to the child components when rendering them in the parent component.

3. In the child components, access the props passed from the parent component and use them as needed.

By utilizing props drilling, you can create a data flow between components, enabling communication and interaction in your React applications.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The code snippet below illustrates the process of acquiring the identical code from this repository onto your local machine.

```bash
# Clone the remote Git repository
git clone https://github.com/techstackmedia/react-front-to-back.git

# Change the current directory to the cloned repository's directory
cd react-front-to-back

# Install project dependencies using npm
npm install

# Start the application server
npm start

# List all remote branches
git branch -r

# Switch to a specific branch (replace <branch-name> with the desired branch name)
git checkout <branch-name> # for example: git checkout 35-refactor
```

The provided commands are used to clone a remote Git repository, navigate to the cloned repository's directory, install its dependencies, start the application server, list remote branches, and switch to a specific branch.

Here's a breakdown of each command:

1. `git clone https://github.com/techstackmedia/react-front-to-back.git`: This command clones the remote Git repository from the URL `https://github.com/techstackmedia/react-front-to-back` to your local machine. It creates a new directory named `react-front-to-back.git` and copies the entire repository contents into that directory.

2. `cd react-front-to-back.git`: This command changes the current working directory to the `react-front-to-back.git` directory. After executing this command, you will be inside the project directory.

3. `npm install`: This command installs the dependencies required by the application. It reads the `package.json` file in the project directory and installs all the packages listed in the `dependencies` and `devDependencies` sections.

4. `npm start`: This command starts the application server. The specific behavior of this command depends on how it is configured in the `package.json` file. Typically, it will run the application server and make it accessible at a specific port, allowing you to interact with the application in your web browser.

5. `git branch -r`: This command lists all the remote branches in the Git repository. Remote branches are branches that exist on the remote repository (in this case, on GitHub) and not on your local machine.

6. `git checkout <branch-name>`: This command is used to switch to a specific branch. Replace `<branch-name>` with the name of the branch you want to switch to. After executing this command, you will be on the specified branch, and you can start working on that branch.

In summary, these commands are commonly used to clone a Git repository, set up a local development environment by installing dependencies, start the application server, and switch to a specific branch to work on a particular feature or bug fix.

## Issue

In case you come across the error "Module not found: Error: Can't resolve 'package name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
