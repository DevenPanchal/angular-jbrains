# tryAngular
Working through the JavaBrains.io Angular course found here: [https://www.youtube.com/watch?v=-mMzQoj8bG4&list=PLqq-6Pq4lTTb7JGBTogaJ8bm7f8VCvFkj]

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

## first-project

Contains a hello world component describing the minimum files structure needed for an Angular component. 
Contains a component called "date" to display a date and time which updates automatically on each second using the angular ngInterval registered callback function / lambda.

Contains a component called "address-card" to display class member data about an address, telephone number etc (e.g. directory services). The module uses ng directives like ngFor and ngIf, tag inputs (e.g. page-specified name on the address card), and .

## 
