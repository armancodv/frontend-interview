# Contribution Guidelines

Welcome to the **Frontend Interview** repository! We appreciate your interest in contributing to our project. Please take a moment to review the following guidelines before making contributions.

## How to Contribute

1. **Fork the repository to your GitHub account.**
    - You can fork the repository by clicking the **Fork** button located at the top right corner of the [repository page](https://github.com/armancodv/frontend-interview).

2. **Clone the forked repository to your local machine:**
    ```bash
    git clone https://github.com/[your-username]/frontend-interview.git
    ```
    - Replace `[your-username]` with your GitHub username.

3. **Install the project dependencies:**
    ```bash
    yarn install
    ```
    - If you don't have Yarn installed, you can download it [here](https://yarnpkg.com/).

4. **Create a new branch for your contribution:**
    ```bash
    git checkout -b [feature-branch]
    ```
    - Replace `[feature-branch]` with a descriptive branch name reflecting the changes you plan to make.

5. **Make your changes and test them locally.**
    - Start the development server with:
    ```bash
    yarn dev
    ```
    - Open [http://localhost:5173/](http://localhost:5173/) in your browser to see the result.

6. **Commit your changes:**
    ```bash
    git add .
    git commit -m "feat: Add a concise commit message describing your changes"
    ```
    - Please use conventional commit messages. You can find more information about conventional commits [here](#using-conventional-commits).

7. **Push the changes to your forked repository:**
    ```bash
    git push origin [feature-branch]
    ```
    - Replace `[feature-branch]` with a descriptive branch name reflecting the changes you plan to make.

8. **Open a pull request on the [main repository](https://github.com/armancodv/frontend-interview/compare) from your feature branch on your forked repository.**
    - Provide a clear title and description for your pull request.
    - Include the related issue number in the PR description.
    - Utilize the PR template for your PR.

## Adding a New Question

To add a new question to the repository, follow these steps:

1. Navigate to the `docs` directory.
2. Find the appropriate category for your question.
3. Add a new question at the end of the file in the following format:
    ```markdown
    ## Question Title

    Answer to the question.


    ::: tip
    - Key point 1
    - Key point 2
    :::
    ```
   You can use the `tip` block to provide additional information or key points related to the question.
   Refer to the markdown guide [here](https://vitepress.dev/guide/markdown).

## Adding a New Topic

To add a new topic to the repository, follow these steps:

1. Navigate to the `docs` directory.
2. Create a new markdown file with the name of the topic in the appropriate directory.
3. Fill the file with content in the following format:
    ```markdown
    # Topic Title

    Introduction to the topic.
   
    ## Question Title

    Answer to the question.


    ::: tip
    - Key point 1
    - Key point 2
    :::
    ```

4. Add the path to the new file in the [navigation/sidebar.ts](https://github.com/armancodv/frontend-interview/blob/main/navigation/sidebar.ts) configuration.

## Adding a New Category

To add a new category to the repository, follow these steps:

1. Navigate to the `docs` directory.
2. Create a new directory with the name of the category.
3. Inside the new directory, create a markdown file named `index.md`.
4. Fill the `index.md` file with content similar to [Adding a New Topic](#adding-a-new-topic).

## Issues

If you encounter any issues or have suggestions for improvement, please don't hesitate to report them [here](https://github.com/armancodv/frontend-interview/issues/new).

Please use the issue template to report the issue. This helps us understand the problem and resolve it quickly.

Before creating a new issue, please check the existing ones [here](https://github.com/armancodv/frontend-interview/issues) to avoid duplicates.

## New Features

If you plan to work on a new feature, please open an issue beforehand to discuss the feature and get feedback from the maintainers and the community. This ensures that your contribution aligns with the project's goals and avoids duplication of efforts.

## Tech Stack

The project is built using the following technologies:

- [VitePress](https://vitepress.dev/)
- [Markdown](https://vitepress.dev/guide/markdown)
- [TypeScript](https://www.typescriptlang.org/)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Yarn](https://yarnpkg.com/)

## Using Conventional Commits

Conventional commits provide a structured way to format commit messages, making it easier to understand the purpose of each commit at a glance. Below is a breakdown of different conventional commit types and their meanings:

| Type     | Description                                                                                   |
|----------|-----------------------------------------------------------------------------------------------|
| feat     | Represents the addition of a new feature.                                                     |
| fix      | Indicates a bug fix.                                                                          |
| docs     | Pertains to documentation changes.                                                            |
| style    | Covers changes in code formatting, whitespace, or semicolons, without affecting code meaning. |
| refactor | Denotes code refactoring that neither fixes a bug nor adds a feature.                         |
| perf     | Signifies performance improvements.                                                           |
| test     | Involves adding or correcting tests.                                                          |
| build    | Relates to changes affecting the build system or external dependencies.                       |
| ci       | Involves changes to Continuous Integration configuration files and scripts.                   |
| chore    | Encompasses other changes that don't modify source or test files.                             |
| revert   | Reverts a previous commit.                                                                    |

When using conventional commits, it's essential to structure commit messages in a specific format. Here's an example of a conventional commit message:

```
feat: add user authentication functionality
```

In this example:
- `feat` represents the type of commit, which is adding a new feature.
- The message following the colon describes the feature added in a concise and descriptive manner.

By following the conventional commit format, it becomes easier to manage and track changes within a project, enhancing collaboration and communication among contributors.

For more information, refer to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Thank You

Thank you for contributing to this project! Your contributions are invaluable, and they help make this project better for everyone. 🚀
