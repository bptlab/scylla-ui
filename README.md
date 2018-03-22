# ScyllaUi 

[![Build Status](https://travis-ci.org/bptlab/scylla-ui.svg?branch=master)](https://travis-ci.org/bptlab/scylla-ui)[![Maintainability](https://api.codeclimate.com/v1/badges/0ae17f1eb85a228f53dd/maintainability)](https://codeclimate.com/github/bptlab/scylla-ui/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/0ae17f1eb85a228f53dd/test_coverage)](https://codeclimate.com/github/bptlab/scylla-ui/test_coverage)

## Prerequisites

This project is developed using Angular CLI. In order to run and this project or develop on your own, you need to setup the following:

* [Angular CLI (^1.5.0)](https://github.com/angular/angular-cli)
* Optional: [Docker](https://docs.docker.com/install/)

## Table of Contents

* [Setup](https://github.com/bptlab/scylla-ui#setup)
* [Development server](https://github.com/bptlab/scylla-ui#development-server)
* [Build](https://github.com/bptlab/scylla-ui#build)
* [Running unit tests](https://github.com/bptlab/scylla-ui#running-unit-tests)
* [Docker](https://github.com/bptlab/scylla-ui#docker)
* [Documentation](https://github.com/bptlab/scylla-ui#documentation)
* [License](https://github.com/bptlab/scylla-ui#license)

## Setup

Angular is based on [nodejs](https://nodejs.org/en/) and [npm](https://github.com/npm/npm). In order to run the project locally on your machine, you need to install it's dependencies. You can achieve that by running `npm install`.
After execution, you will see a folder called `node_modules` containing all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Docker

Scylla UI is dockerized. Our deployment process is completly based on Docker and Jenkis CI (deploying the image to [our website](https://bpt-lab.org/scylla-ui/)) as well as Travis CI (running the tests and building the image).

### Build the image on your own

You can build the image by running `docker build -t bptlab/scylla-ui .`. This will build the image based on our [Dockerfile](Dockerfile).

### Pull image from [hub.docker.com](https://hub.docker.com/r/bptlab/scylla-ui/)

As an alternative, you can pull our image from Docker Hub by running `docker pull bptlab/scylla-ui`.

### Running a container

In order to run the app, we suggest the following command `docker run -p "8080:4200" --rm -d bptlab/scylla-ui`.

## Documentation

The documentation for the Scylla UI is located in this repo's [wiki](https://github.com/bptlab/scylla-ui/wiki).

## License

MIT
