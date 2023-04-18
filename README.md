## Restaurant managing system 

### A Node.js web application with react frontend part and express/mongodb backend part. Existing functionalities: 
- getting orders and listing them as different tables with open, paid and close status as registered user.  
- listings of stock items grouped by general as food or drinks and by type - for examples wine, beer, burgers, salads, etc. Registered users could edit or delete items.
- message board for registered users, with edit and delete functionalities for message owners. 
- list of all users.
- account page with add/edit functionality for name and phone number after sign up.

### To run the project you need:
- the whole project repository. 
- installed Node.js and MongoDB on your machine##. 
- make a MongoDB database called restaurant with collect##ion named tables. In it Add data importing JSON file tables.json from the backend folder to hardcore some tables for taking orders functionality in Tables section of the project.
- open the master project folder with VS Code.
- in the integrated terminal in VS Code, in the backend directory as well as in the frontend one you should run npm i to download necessary npm packages.
- in separate terminals in the backend directory execute npm run nodemon for MongoDB server and in the frontend directory npm start for the frontend server.
