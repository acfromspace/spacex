<!-- HEADING -->

<p align="center">
  <img src="https://user-images.githubusercontent.com/10361542/71635438-7e97da00-2bd9-11ea-9940-8a42bd798a00.png" width="60">
</p>
<h1 align="center">️acfromspacex</h1>

<!-- DESCRIPTION -->

<h3 align="center">
  <span role="img" aria-label="Rocket">🚀</span>
</h3>
<p align="center">
  <strong>SpaceX contributed data that is digestable.</strong><br>
  Created with <a href="https://reactjs.org/" target="_blank">React.js</a>, <a href="https://graphql.org/" target="_blank">GraphQL</a>, and <a href="https://www.apollographql.com/" target="_blank">Apollo</a> that uses the <a href="https://github.com/r-spacex/SpaceX-API" target="_blank">SpaceX API</a> to display data.
</p>

<!-- BADGES -->

<p align="center">
    <a href="https://github.com/acfromspace/spacex/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg"
            alt="License: MIT"></a>
    <a href="https://www.repostatus.org/#unsupported">
        <img src="https://www.repostatus.org/badges/latest/unsupported.svg" alt="Project Status: Unsupported – The project has reached a stable, usable state but the author(s) have ceased all work on it. A new maintainer may be desired." /></a>
</p>

<!-- FEATURES -->

<p align="center">
  <img src="https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">
</p>

[_acfromspacex_](https://github.com/acfromspace/acfromspacex) is a website with the following features:

- **Launch data.** Data pertaining to the specific projects of launching objects into space.
- **Rocket data.** Data pertaining to the specific launch.
- **Outer space.** See future projects that SpaceX has for the community of Earth.

<!-- QUICK INSTALLATION -->

## <span role="img" aria-label="Sparkles">✨</span> Quick Installation

```sh
# Clone the repo
git clone https://github.com/acfromspace/acfromspacex

# Change directory
cd acfromspacex

# Install dependencies (server & client respectively)
npm install
cd client && npm install

# Run server & client (:5000 & :3000)
# cd .. dependent on where you are
npm run dev

# Server only (:5000)
npm run server

# Client only (:3000)
npm run client

# Build for production (Builds into server ./public)
cd client && npm run build

# To build new productions, return to root then
npm run clean
cd client && npm run build

# GraphiQL - http://localhost:5000/graphql
```

<!-- WHAT'S INSIDE? -->

## <span role="img" aria-label="Thinking Face">🤔</span> What's inside?

A quick look at the top-level files and directories you'll see in this project.

```
   .
1  ├── client/
2  ├── public/
3  ├── .gitignore
4  ├── LICENSE
5  ├── package-lock.json
6  ├── package.json
7  ├── README.md
8  ├── schema.js
9  └── server.js
```

1. **`client/`**: Frontend development here.
2. **`public/`**: What is distributed to the viewing software so everyone can see your greatest creation!
3. **`.gitignore`**: This file tells `.git` which files it should not track nor maintain a version history for. For instance, you shouldn't let anyone get your `.env` files. (These usually contain your API keys)
4. **`LICENSE`**: An open source license that protects contributors and users depending on the license chosen.
5. **`package-lock.json`**: This is an automatically generated file based on the exact versions of your package manager dependencies that were installed for your project. (You won’t change this file directly)
6. **`package.json`**: A manifest file for [Node.js](https://nodejs.org/en/) projects, which includes metadata (the project’s name, author, package names, etc.). This manifest is how [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/) knows which packages to install for your project.
7. **`README.md`**: A markdown file containing useful reference information about your project. The file you're reading right now!
8. **`schema.js`**: Contains the [axios](https://github.com/axios/axios) calls to fetch the data we need to create the application.
9. **`server.js`**: Middleware area where the frontend speaks with the backend.

<!-- LICENSE -->

## <span role="img" aria-label="Oncoming Police Car">🚔</span> [License](LICENSE)

The code in this project is under a specific open source license.
