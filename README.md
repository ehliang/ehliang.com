# ehliang.com

##My Personal Website
No templates used. This personal website was written from scratch as a way to further explorations into several emerging web technologies. Includes more information about myself, a summary of my projects, a resume and a method for contact. 

##Stuff I Used
The website is written in ReactJS to allow for better functional integration. Most of the main content is JSX code which posed some unique challenges. The frontend fetches a json file with a list of projects which makes it easy to update in the future. There are custom mapping functions which dynamically organizes the project list. The site is styled with SASS and Bootstrap elements. Everything is run through webpack to reduce size and access times. During development, code is served dynamically from the build/assets folder using:
```
webpack-dev-server --content-base build/ --inline --hot
```
 while CSS is updated with: 
 ```
 sass --watch main.scss:main.css
 ```
 This automatically updates the file while working on it. 

