** Hello, welcome to my test app **

DEPLOYED APP: ()

I have spent a total of 8.15 hours on this app.
I can proudly say that my CSS ended up looking great for a quick app! (CSS is indeed my weakness)

Things to note:
1) It's responsive, so please try it in your phone as well.
2)  I deviated from the image instructions because I wanted to go above and beyond.

It would be far too simple to store the images in a folder, and then .git-ignore them.
I decided to instead show off some of my AWS Bucket skills!
A user profile on my AWS account has been created just for you. 

You have the following permissions: GetObject, PutObject.

All images are stored on an AWS bucket! :) What an amazing AWS feature!

However the URL's to the AWS bucket are stored within the SQL DB.

3) I upped the ante again: I decided to display the list of created user profiles to showcase my new-found React "skills" (first time using it)

The list is populated via a fetch request AFTER the page loads, && then populated. I think I did this portion properly react-style but please do let me know what I could do better.

4) The passwords SHOULD be hashed! Therefore, they ARE. (would of done it in a real app)

5) I could make the POST request on Submit a fetch request that then causes the Users component to re-populate. This would keep it all on the page && silky smooth. For time's sake, let's pretend I did that task.

6) I'm 100% certain that more type checking is necessary for fields such as the email etc. Kept that tedium out. Assume it's done, similar to password hashes.


I decided to "merge" the server and the client into one folder for convenience sake.

LAUNCHING IT YOURSELF:
1) npm install, of course (in ./client folder for REACT, in base folder for SERVER)
2) have MYSQL hosted on your PC
3) plug in DB info into .env file
4) run db_queries.js
5) navigate to ./client folder, type npm start
6) in another console, navigate to ./ and type "npm run server"
7) If you have issues on your own SQL server, be sure to run prisma generate commands

** New Tech Skills Learned **
1) Prisma

In some respects? Really, really cool. Wasn't quite as neat as I initially anticipated, as SQL queries to create the tables are still necessary whereas I was under the impression that Prisma would renovate SQL. However, I'm sure there's a mountain of features within Prisma I'm not aware of yet. How useful it is in comparison to regular SQL queries isn't certain.

2) React

It's in demand, and it's cool. I can definitely see how code maintainability would be A+ with React. It's marketability is also a great plus. Backed by a Monopolist, so it's got the funding it needs to stay ahead of the curve.

** Wrapping up **

Thanks for giving me the opportunity to introduce myself to React. It's bare-bones close-to-javascript style makes me already like it more than Angular, which just feels bloated.