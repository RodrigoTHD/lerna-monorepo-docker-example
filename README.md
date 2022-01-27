# React project with Typescript, Monorepo, Lerna and Docker

## Pre-requisites

- Install Docker Desktop for Windows. [Link to install](https://docs.docker.com/docker-for-windows/install/).
- Install [lerna](https://lerna.js.org/): `yarn global add lerna`
- Run `yarn bootstrap` to install all dependencies and link any cross-dependencies using lerna.

## Launch the environment

In the project's root directory, run the command below to start the application.

```sh
docker-compose up -d
```

It runs the application in the developtment mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
