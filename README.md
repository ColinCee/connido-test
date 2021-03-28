<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the connido-test and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** ColinCee, connido-test, twitter_handle, email, connido-test, Tech test for connido
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


### Built With

* [Typescript](https://www.typescriptlang.org/)
* [MongoDb](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Express.js](https://expressjs.com/)
* [Express-Validator](https://express-validator.github.io/docs/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Node](https://nodejs.org/en/) (For local development only)
### Installation

1. Clone the connido-test project (using SSH key)
    ```sh
    git clone git@github.com:ColinCee/connido-test.git
    ```
2. Start using docker
    ```sh
    docker-compose up --build
    ```
3. Make calls to endpoint `localhost:3000/article` using your API client of choice (Recommend [insomnia](https://github.com/Kong/insomnia))
    - `POST localhost:3000/article`
        ```json
        {
            "title": "my first article",
            "content": "content",
            "author": {"name": "test1"}
        }
        ```
    - `GET localhost:3000/article` - optional query params you can supply
        - page
        - title
        - authorName
        - Example `http://localhost:3000/article?title=my%20first%20article&authorName=test1`

### Developing

When running the project using docker-compose, the volumes will automatically mount the `src` folder into the container.

This means you can install dependencies on the host machine:
```sh
npm install
```

- Then you can use your IDE or text editor of choice and still get intellisense.
    - Recommend using [VSCode](https://code.visualstudio.com/) as I've setup auto-formatting.
- Any changes on the host machine will hot reload the server thanks to [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ColinCee/connido-test.svg?style=for-the-badge
[contributors-url]: https://github.com/ColinCee/connido-test/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ColinCee/connido-test.svg?style=for-the-badge
[forks-url]: https://github.com/ColinCee/connido-test/network/members
[stars-shield]: https://img.shields.io/github/stars/ColinCee/connido-test.svg?style=for-the-badge
[stars-url]: https://github.com/ColinCee/connido-test/stargazers
[issues-shield]: https://img.shields.io/github/issues/ColinCee/connido-test.svg?style=for-the-badge
[issues-url]: https://github.com/ColinCee/connido-test/issues
[license-shield]: https://img.shields.io/github/license/ColinCee/connido-test.svg?style=for-the-badge
[license-url]: https://github.com/ColinCee/connido-test/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/colin-cheung/
