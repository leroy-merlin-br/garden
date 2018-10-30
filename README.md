<img src="docs/images/garden.png" alt="Garden">

![CodeShip](https://codeship.com/projects/7aa22b80-d3f1-0133-7a36-1e4d5c815c8f/status?branch=master)
[![codecov.io](https://codecov.io/github/leroy-merlin-br/garden/coverage.svg?branch=master)](https://codecov.io/github/leroy-merlin-br/garden?branch=master)
[![npm version](https://badge.fury.io/js/garden.svg)](https://badge.fury.io/js/garden)


A front end library to help you make *​your*​ grass greener than the other side


## Contents

[![Greenkeeper badge](https://badges.greenkeeper.io/leroy-merlin-br/garden.svg)](https://greenkeeper.io/)

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Install
You can manually [download our latest release](#latest-release-link), or install with npm:

### NPM
```sh
npm install garden
```

### CDN

CSS

```html
<link href="https://unpkg.com/garden/dist/css/garden.min.css" rel="stylesheet">
```

JavaScript

```html
<script scr="https://unpkg.com/garden/dist/js/garden.min.js"></script>
```

## Documentation
Garden documentation is built with [Metalsmith](http://www.metalsmith.io/) and publicly hosted on Github Pages at [http://styleguide.leroymerlin.com.br](http://styleguide.leroymerlin.com.br)

### Running locally

1. Run `npm install`.
2. Run `npm run gulp`.
3. Open `http://localhost:3000` in your browser.

### Using Docker
Alternatively, you can install and run the application using a docker container.

#### Installing Docker

##### On Ubuntu
- [Install Docker Engine](https://docs.docker.com/engine/installation/linux/ubuntulinux/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

##### On macOS
- [Installation on macOS](https://docs.docker.com/engine/installation/mac/)

##### On Windows
- [Installation on Windows](https://docs.docker.com/engine/installation/windows/)

#### Testing docker installation
Docker version:
```console
docker --version
```
Docker-compose version:
```console
docker-compose --version
```

#### Development
After having  `docker` and `docker-compose` setup on your machine you can simply run these commands to run the project:

1. Run `docker-compose build` (Setup container)
2. Run `docker-compose run --rm web npm install` (Install dependencies)
3. Run `docker-compose up` (Run webserver)

## Contributing
Checkout the [contributing section](https://github.com/leroy-merlin-br/garden/blob/master/CONTRIBUTING.md) to learn more on how to open issues, create pull requests, commit standards and more.

## Versioning
Garden follows [SEMVER standards](http://semver.org/)

## License
[MIT License](https://github.com/leroy-merlin-br/garden/blob/master/LICENSE)
