Creating an Interface for a Student
📘 Project Overview

This task is the first part of the 0x04-TypeScript project in the ALX Frontend JavaScript curriculum.
The goal of this exercise is to introduce TypeScript interfaces, basic object typing, and DOM manipulation using Vanilla JavaScript bundled with Webpack.

🧩 Requirements
1. Configuration Files

Copy the following configuration files into your task_0 directory:

package.json

.eslintrc.js

tsconfig.json

webpack.config.js

These files ensure proper TypeScript compilation, linting, and module bundling.

2. Implementation (task_0/js/main.ts)

In the main.ts file:

Create an interface named Student with the following properties:

firstName: string

lastName: string

age: number

location: string

Create two student objects that conform to the Student interface.

Create an array named studentsList containing the two student objects.

Using Vanilla JavaScript, dynamically render a table in the browser that lists:

Each student’s first name

Each student’s location

Each student should appear in its own table row.

3. Example Output

When opened in the browser, the rendered HTML table should display something like this:

First Name	Location
John	Nairobi
Jane	Cape Town
4. TypeScript Requirements

Every variable should use explicit TypeScript typing where possible.

When building with Webpack, no TypeScript errors should be shown.

Webpack should compile successfully with the message:

No type errors found.

🧱 File Structure
0x04-TypeScript/
└── task_0/
    ├── js/
    │   └── main.ts
    ├── package.json
    ├── .eslintrc.js
    ├── tsconfig.json
    └── webpack.config.js
