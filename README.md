# Simple CRUD API

Simple CRUD API is a basic Node.js application built using Express and Mongoose that provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on a collection of articles stored in a MongoDB database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this API locally or deploy it on your own server, follow these steps:

1. Clone the repository to your local machine:
```bash
git clone https://github.com/sushruta19/simple-crud-api.git
```

2. Change to the project directory:
```bash
cd simple-crud-api
```

3. Install the dependencies:
```bash
npm install
```

4. Set up your MongoDB database:
- Make sure you have MongoDB installed and running.
- Update the `mongoURI` variable in `app.js` with your MongoDB connection string.

## Usage

To start the server and run the API, use the following command:
```bash
npm start
```

The API will be accessible at `http://localhost:3000` by default, unless you specify a different port using the `PORT` environment variable.

## Endpoints

The API provides the following endpoints:

- `GET /articles`: Retrieve all articles from the database.
- `POST /articles`: Create a new article with the provided title and content.
- `GET /articles/:articleTitle`: Retrieve a specific article by its title.
- `PUT /articles/:articleTitle`: Replace an existing article with new title and content.
- `PATCH /articles/:articleTitle`: Update the content of an existing article.
- `DELETE /articles`: Delete all articles from the database.
- `DELETE /articles/:articleTitle`: Delete a specific article by its title.

Please refer to the API code in `app.js` for more details on how each endpoint is implemented.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements for the simple-crud-api, please do the following steps : 
- **Fork** the repository. <br>![Fork Icon](https://i.imgur.com/an7hXVR.png)
- **Clone** the repository: Clone the forked repository to your local machine using the following command:
```bash
git clone <forked-repo-url>
```
This will create a local copy of the project that you can work on.
- **Create a new branch**: Before making any changes, create a new branch to work on your changes. Naming the branch based on the feature or bug fix you're working on is a good practice. For example:
```bash
git checkout -b improvement/ui-refactoring  #for improvements
git checkout -b bugfix/login-issue          #for bugfix
git checkout -b feature/user-registration   #for new features
git checkout -b hotfix/security-vulnerable  #for hotfix
```
Here the slash(/) doesn't denote any address but its a part of the new branch name "bugfix/anything", etc.
- **Make your changes**: Make the necessary changes or additions to the project
- Stage, commit and push your changes to **your** remote forked repo at the new branch(not the master branch of your remote forked repo)
```bash
git add .
git commit -m "Add a concise commit message describing the changes"
git push origin <new-branch-you-worked-on>
```
- **Create a pull request**: Then, from your forked repository's page on GitHub, click on the "New pull request" button to create a pull request (PR) to the original repository. Provide a clear description of the changes you've made and why they are valuable. It's also helpful to reference any relevant issues or feature requests.
- The project maintainers or other contributors may provide feedback or request changes on your pull request. Be responsive and address the feedback accordingly. This may involve making additional commits to your branch based on the feedback.
- Once your pull request is approved, the project maintainers will merge your changes into the main branch. At this point, your contributions are part of the project.

Please make sure to follow these guidelines to ensure a smooth and collaborative contribution process. If you have any questions or need further assistance, feel free to reach out to us.

#### ! Please put `node_modules/` in your `.gitignore` file. ! Do not push them in remote repo!
Thank you for your contribution!

## License

This project is licensed under the [MIT License](LICENSE).



