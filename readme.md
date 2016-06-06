# LessPass

LessPass open source password manager (https://lesspass.com)


## LessPass submodules

 - [frontend](https://github.com/lesspass/frontend) : frontend for LessPass with vuejs
 - [core](https://github.com/lesspass/core) : npm module with a clean api used to create passwords
 - [backend](https://github.com/lesspass/api) : backend api used to store information about passwords
 - [nginx](https://github.com/lesspass/nginx) : configuration for nginx
 - [web extension](https://github.com/lesspass/webextension) : chrome and firefox web extension for lesspass password manager


## Requirements

  * git
  * docker 1.10
  * docker-compose 1.6

## Try LessPass on local

clone application:

    git clone https://github.com/lesspass/lesspass.git

start docker containers

    cd lesspass
    git submodule update --init
    docker-compose up -d

open the application in a browser: [https://localhost](https://localhost)


## Status

| module | tests |
| --- | --- |
| [frontend](https://github.com/lesspass/frontend) | [![Build Status](https://travis-ci.org/lesspass/frontend.svg?branch=master)](https://travis-ci.org/lesspass/frontend) |
| [core](https://github.com/lesspass/core) | [![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core) |
| [backend](https://github.com/lesspass/api) | [![Build Status](https://travis-ci.org/lesspass/api.svg?branch=master)](https://travis-ci.org/lesspass/api) |
| [web extension](https://github.com/lesspass/webextension) | [![Build Status](https://travis-ci.org/lesspass/webextension.svg?branch=master)](https://travis-ci.org/lesspass/webextension) |
