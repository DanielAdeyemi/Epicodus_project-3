# Mr. Roboger's Neighborhood Project 
---
#### *by* ***Daniel Adeyemi*** *(01/22/2021)*
* * *
## *Description:*   
This project conclude my third week at Epicodus as a full-time student. **The goal** of the project is to build an application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
* Exceptions for 3 have the highest priority, for 2 - second priority, and for 1 - last priority.

## *Tests:*
**Describe:** `roboger()`   
|  # | Test  | Expect  |  
|:---:|:---:|:---|
|  1 |  should return numbers from 0 to input (included) | roboger(5).toEqual(0, 1, 2, 3, 4, 5)  | 
|  2 | if number contains 1(as a digit) - replace it with "Beep!"  | roboger(10).toEqual(0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9 "Beep!")  | 
|  3 | if number contains 2(as a digit) - replace it with "Boop!"   |  roboger(12).toEqual(0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9 "Beep!", "Beep!", "Boop!") | 
|  4 | if number contains 3(as a digit) - replace it with "Won't you be my neighbor?"  |  roboger(13).toEqual(0, "Beep!", 2, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9 "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?") | 


## *Setup instructions:*
* Clone my repository from GitHub, using following [URL](https://github.com/DanielAdeyemi/Epicodus_project_2.git)
* If you want to see any specific part of my code, go to ***index.html*** or ***any folder/file you find interesting***
* If you want just open my web-page in your browser, execute **open index.html** command in your terminal.    
*Note: please, make sure that you are inside project directory!*
* If you just want to check my page without open your editor/ terminal - click on this [GitHub page](https://danieladeyemi.github.io/Epicodus_project_2/) link

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
