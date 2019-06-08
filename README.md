# JavaScript-and-DOM-Manipulation

In this project a basic HTML web page (index.html file) was created and integrated with a javascript file (app.js) to do the following functions:
* Append a table
* Add input options
* Filter the data according to the input data using buttons


Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.



Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

![Slack-Chatbot](Images/chatbot.png)

![Dashboard](Images/dashboard.png)


## Extract
For the extract phase two APIs were used the yahoo finance and Apha Vantage. 1 year of data was collected for more than 30 companies. (located in the  jupyter notebook file)

# Transform
A trading strategy was defined to transform the raw data to recommendation parameters. (Located in the jupyter notebook file)

# Load
The new data was stored in a new table in MongoDB and was used to feed the dashboard developed in Flask.

# Dashboard
The dashboard was developed using Flask, MongoDB and HTML. (Located in the Flask folder)

# Chatbot
The chatterbot librarie was used to train the bot, then it was connected to Slack using the Slackbot Tool and Slack Client. (botapp.py)



