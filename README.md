# Excursion Project - Admin & Client Panel

## About the project:
The aim of this project was created multi step form with styling using Styled Components. Design is based on Neumorphism style. Creating this form I focus on writing a small components, which I can use to build my application and using in another project in the future - reusable code.

My form contains 3 step, simulating register to the shop. Each step is in a separated files and inputs are created based on a JSON file. Additionally I am using information from those files to check data in the form. Functions and state are transferred to another component using props.

My form contains elements like:
* inputs type: text, number
* inputs radio
* input checkbox
* buttons
* progress bar

The data in form are checked in two place:
* when user clicked button "Next Step",
* when user left active input - user see the error (if exist) immediately

User can go to next step if all required data are correct. I wanted to limit as possible using if..else statement, so I used data from JSON file like: required: true and pattern to check data.

```
if(input.required){
            if(value.length === 0){
                errors[input.name]= `${input.label} is required `
            }
        }
        if(input.pattern){
            const reg = new RegExp(input.pattern);
            if(!reg.test(value)){
                errors[input.name] = `${input.label} contains invalid data`
            }
        }
```


## How to use it
Download the data, clone my project
```
git clone <url>
```

Type into the terminal
```
npm i
```

Next, to run, type into the terminal:
```
npm start
```

## Technologies:
* JavaScript
* React
* Styled Components
* HTML
* CSS
* Desktop only version


## Solutions
By creating this project I had an opportunity to practice/learn:
* using Styled Components
* how to style inputs like radio and checkbox
* how to style progress bar to works on each browser in a correct way
* creating inputs elements based on data in JSON file
* another way to check if data in inputs is correct before sending the form
* to build reusable code by splitting it in a small chunks
* using enum object



### Project preview
Step one
![Project-preview](./preview/screen1.png)

Step two
![Project-preview](./preview/screen2.png)

Step three
![Project-preview](./preview/screen3.png)



### Feel free to contact me:
* [Linkedin](https://www.linkedin.com/in/ewelina-kopacz-929559100/) - Ewelina Kopacz


### Sources:
* [Devmentor](https://devmentor.pl/b/mniej-instrukcji-warunkowych)
* [Devmentor](https://devmentor.pl/b/walidacja-formularza-w-javascript)
* [Nikita Hlopov](https://nikitahl.com/progress-bar-css)
* [Neumorphism](https://neumorphism.io/#1251af)

### Thanks for project and support to Mateusz Bogolubow:
* Mentor i Trener Programowania JavaScript - [DevMentor](https://devmentor.pl/) - Mateusz Bogolubow