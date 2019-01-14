# tryAngular
Working through the JavaBrains.io Angular 6 Basics course found here: [http://javabrains.io]

## Prerequisites

I am using Node.js v10.15.0 (in January 2019). 

Install mode.js, then install the angular2+ family's command-line interface (CLI) with 
```
npm install @angular/cli
```

## Usage

In a command prompt, cd into one of the projects such as first-project, then
```
ng serve
```

You should then be able to find the Angular application in a test web server at [http://localhost:4200]

# Contents

There are three practice angular projects defined here: first-project, project, and routing.

## first-project

Contains a hello world component describing the minimum files structure needed for an Angular component. 


Contains a component called "date" to display a date and time which updates automatically on each second using the angular ngInterval registered callback function / lambda.

Contains a component called "address-card" to display class member data about an address, telephone number etc (directory services type information). The module uses ng directives like ngFor and ngIf, tag inputs (e.g. page-specified name on the address card), and CSS stying.

![Screenshot](first-project/snips/address-card-collapse.png)

Contains a demonstration of how to use two-way data binding with ngModule to change the contents of a simple data field.

## project

Contains an example module/component breakdown to show how to organize multiple modules each containing components.

Contains an example "injectable" angular service for printing to the developer web-console.

Contains an example for sending REST API calls using HttpClient to the GitHub API. The results are displayed within an angular component.

![Screenshot](first-project/snips/github-request-component.png)


## routing

