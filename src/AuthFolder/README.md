# Getting Started with Auth0 

Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications and is what our team decided to implement with 
this application.

[Quick Start for Single Page Apps](https://auth0.com/blog/complete-guide-to-react-user-authentication/)git 



# Running the application in development mode

Start the front end of the application with 
# npm start
in the main directory

Start the authServer.js  located in /userAuth-Backend/
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.
You should see user profile information populated in the table
We grab the unique userId to make appropiate fetch calls to grab user specific information


# Technologies/Libraries
    Auth0
    parallax.js
    react-strap
    react-strap-DOM



 # Parallax js read me
 1.1 a) Using the CDN
Add <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script> to your markup
Done!
Many thanks to the fine folks over at cdnjs for hosting our library.

1.1 b) Beginners
Head over to the releases Section
Download compiled.zip from the latest release
Extract the ZIP archive and locate the parallax.js and parallax.min.js files
Use parallax.js if you want to snoop around in the code
Use parallax.min.js for deployment, because it has a smaller file size
Copy the file of your choice into your project directory
So far, so good!
1.1 c) Professionals
npm i -s parallax-js

You will then find the source code in node_modules/parallax-js/src/parallax.js and the browserified, babelified, uglified, production-ready version in node_modules/parallax-js/dist/parallax.min.js

1.2 Preparations
Include the Script
If you use the compiled version, either downloaded from the releases page, or copied from the dist folder, include the script like any other Javascript library:
<script src="path/to/parallax.js"></script>

Of course, when you've installed via npm, and use browserify/babel, you can also simply do:
import Parallax from 'parallax-js' or
const Parallax = require('parallax-js')

Create your HTML elements
Each Parallax.js instance needs a container element, the scene. You're free to identify it by any means you want, but for now, let's use an ID:

<div id="scene">
</div>
Per default, all direct child elements of the scene will become moving objects, the layers. You can change this to a custom query selector, but again, we're going with the easiest approach for now:

<div id="scene">
  <div>My first Layer!</div>
  <div>My second Layer!</div>
</div>
While all other options and parameters are optional, with sane defaults, and can be set programatically, each layer needs a data-depth attribute. The movement applied to each layer will be multiplied by its depth attribute.

<div id="scene">
  <div data-depth="0.2">My first Layer!</div>
  <div data-depth="0.6">My second Layer!</div>
</div>
1.3 Run Parallax
As soon as your DOM is ready and loaded, you can create a new Parallax.js instance, providing your scene element as first parameter.

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
That's it, you're running Parallax.js now!