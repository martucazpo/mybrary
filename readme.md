## Mybrary

This full stack web course from [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) was another great tutorial! For the most part it was a review, however I learned a lot of CSS. I especially liked the use of one variable to change the hue used in the app. It allowed everything to change color with just the change of one number. The tutorial is [Full Stack Web Course](https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH9xx-RRVNG187ETT2ekWFsq&index=32&t=0s) and I would recommend it to anybody. Other than rearranging the file structure, none of the below is my own code, I just followed along with the tutorial.

Here is the main entrance to the app:
![portada](public/readme/images/1portada.png)
This page displays the authors and allows the user to search for an author.
![authors page heroku](public/readme/images/2authors.png)
Here is the books page. The flower picture is supposed to be a book cover.
![books page heroku](public/readme/images/3books.png)
Here one can add a book, the  library used  for the uploading and storing of the images is called [filepond](https://pqina.nl/filepond/):
![add book heroku](public/readme/images/4addbook.png)
This page displays the Author and his or her works:
![about author heroku](public/readme/images/5about-author.png)
One comes to this edit Author form when one presses the edit button:
![edit author heroku](public/readme/images/6edit-author.png)
The user arrives at the display book page by clicking on the book or by pressing 'view':
![author book heroku](public/readme/images/7book-by-author.png)
Here one can edit the books information:
![edit book heroku](public/readme/images/8edit-book.png)
This is the part that I thought was really cool, by just changing one variable, one can change the color family used in the whole app.
This hue is 000:
![red](public/readme/images/9hue000.png)
Here is the code for that change:
![hue changes](public/readme/images/10var-change-hue.png)
Here is 100:
![green](public/readme/images/11hue100.png)
Here is 300:
![purple](public/readme/images/12hue300.png)
Finally here is 400:
![golden](public/readme/images/13hue400.png)
The preceeding screenshots were from the deployed app on Heroku. Here I had switched off to live editor to take a shot of the color changes. I am adding a book, but notice that the flower book is nowhere to be found as it is on the database of the Heroku site. Also notice that on the pulldown menu the innactive choices are in black while the active ones are a bright blue color:
![adding book](public/readme/images/14addbook-author.png)
Here I am adding the cover using filepond:
![adding cover](public/readme/images/15addbook-cover.png)
The book has been added and here is its information:
![book added](public/readme/images/16book-added.png)
In this shot I go back and edit, adding 'perfect in the morning':
![editing](public/readme/images/17addbook-edit.png)
Edit was a success!:
![success](public/readme/images/18bookedited.png)
And here are the books -- on live server, not Heroku.
![books](public/readme/images/20books-not heroku.png)

This app is [deployed on Heroku](https://marco-mybrary.herokuapp.com/). Thank you Web Dev Simplified!