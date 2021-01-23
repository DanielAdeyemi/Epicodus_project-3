# Mr. Roboger's Neighborhood Project 

#### *by* ***Daniel Adeyemi*** *(01/22/2021)*
* * *
## *Description:*   
#### *Want to play some number game? With a click of a button some of your numbers will be replaced with phrases. It's up to you how far you want to go!*   
This project conclude my third week at Epicodus as a full-time student. **The goal** of the project is to build an application that takes a number from a user and returns a range of numbers from 0 to the user inputted number (or from the input down to 0 for reverse method) with the following exceptions:
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
* Exceptions for 3 have the highest priority, for 2 - second priority, and for 1 - last priority.

## *Software Requirements:*
* up to date internet browser ([Safari](https://www.apple.com/safari/), [Mozzila](https://www.mozilla.org/en-US/), [Chrome](https://www.google.com/intl/en/chrome/))
* (***optional***) code editor like [VSCode](https://code.visualstudio.com/) to view my code 

## *Setup instructions:*
#### From the web:
* Go to my GitHub repository, using following [URL](https://github.com/DanielAdeyemi/Epicodus_project-3.git).
* Click the "Code" and click the 'Download zip' option.
* Unzip the file, navigate to the root directory (project3 folder).
* open ***'index.html'*** file with your web browser.
#### From the terminal: 
* Clone my repository from GitHub using `git clone https://github.com/DanielAdeyemi/Epicodus_project-3.git`
* Navigate to the downloaded folder using ***cd*** command
* Execute **code .** command in your terminal and it will open all source code in your code editor.    
*Note: please, make sure that you are inside project directory!*
#### GitHub pages:
* If you just want to check my page without open your editor/ terminal - click on this [GitHub page link](https://danieladeyemi.github.io/Epicodus_project-3/)

## *Tests:*
**Describe:** `roboger()`   
|  # | Test  | Expect  |  
|:---:|:---:|:---|
|  1 |  should return numbers from 0 to input (included) | roboger(5).toEqual(0, 1, 2, 3, 4, 5)  | 
|  2 | if number contains 1(as a digit) - replace it with "Beep!"  | roboger(10).toEqual(0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!")  | 
|  3 | if number contains 2(as a digit) - replace it with "Boop!"   |  roboger(12).toEqual(0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9 "Beep!", "Beep!", "Boop!") | 
|  4 | if number contains 3(as a digit) - replace it with "Won't you be my neighbor?"  |  roboger(13).toEqual(0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9 "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?") | 
***
***
**Describe:** `robogerReverse()`   
|  # | Test  | Expect  |  
|:---:|:---:|:---|
|  1 |  should return numbers from input to 0 | robogerReverse(5).toEqual(5, 4, 3, 2, 1, 0)  | 
|  2 | if number contains 1(as a digit) - replace it with "Beep!"  | robogerReverse(10).toEqual("Beep!", 9, 8, 7, 6, 5, 4, 3, 2 "Beep!", 0)  | 
|  3 | if number contains 2(as a digit) - replace it with "Boop!"   |  robogerReverse(12).toEqual("Boop!", "Beep!", "Beep!", 9, 8, 7, 6, 5, 4, 3 "Boop!", "Beep!", 0) | 
|  4 | if number contains 3(as a digit) - replace it with "Won't you be my neighbor?"  |  robogerReverse(13).toEqual("Won't you be my neighbor?", "Boop!", "Beep!", "Beep!", 9, 8, 7, 6, 5, 4, "Won't you be my neighbor?" , "Boop!", "Beep!", 0) | 
***

## *Technologies used:*
* HTML
* CSS 
* Bootstrap *v5.0.0.beta1*
* JavaScript
* jQuery
* Git and GitHub

## *Known bugs and contact information:*
No bugs have been discovered. Web-page downloads and executes as intended.   
If you have ideas how to improve my project or just want to contact me, please send [email](mailto:adeyemidany@gmail.com).

---
## *License and copiright:*
> © Daniel Adeyemi, 2021   
> *Licensed under [MIT](https://mit-license.org) license*
