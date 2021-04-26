*README*

how to run: 
1. ensure both server and client are running using "npm start"
2. use the command "npx cypress open" to open cypress
3. open the post_test.js file in cypress

the test file post_test.js has 6 test cases that checks to make sure the application:
1. Loads the site and checks if posts are being retrieved from the server correctly
2. Finds and clicks on the like button
3. Creates a post (reflected in the database)
4. Deletes a post (reflected in the database)
5. Can navigate to the sign in page
6. Can navigate to the main page