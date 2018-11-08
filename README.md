# A6structure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To use lodash npm i lodash
##   npm i --save-dev @types/lodash

## Install bootstrap and ngx-bootstrap for Modals etc.


## First command 
ng new --routing true del --style=scss

## To Create project folder with Module 

1st step
ng g module --routing true auth/login 

2nd step
ng g component auth/login/login-layout --module=auth/login/login.module.ts

3rd step
ng g module --routing true auth/login/login-page 

4th step
ng g component --flat auth/login/login-page/login-page --module=auth/login/login-page/login-page.module.ts


