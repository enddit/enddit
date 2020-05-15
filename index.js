const express = require('express');
const ejs = require('ejs')
//Define the package we use to host da website
const app = express();
//Create the application we are hosting
app.get('/profileDemo', (req, res) => {
    ejs.renderFile('views/profile.ejs', {user:{username:'TestUsername'}, posts: [{title: 'This may not look like much,', content:"And you'd be right. This is pretty terrible looking, but this is constructed using ejs."}, {title:'This is just an array', content:"injected into a template that then includes another template for each post, and adds each post with code inside the template file"}]}, {delimiter: '%'}, (err, str) => {
      if(err) {
        console.error(err)
      }
      res.send(str);
    })

    //This is a simple button to view our plans - this should be changed to an EJS template later
});
app.get('/', (req, res) => {
    res.send(`<title>this is title</title>Hey There! I know this isn't the enddit you were looking for, but thanks to aws it took 2 days to make this! Not even sure if it can connect to a db, but we'll burn that bridge when we come to it. I couldn't get all that stuff done with literally nothing, and I forgot that I deleted the original enddit's environment, so I couldn't do it there either. All this code is commented and here are the plans though, so thats 2 out of three done somehow.<br><ul><li>Figure out if we should develop backend or frontend first</li><li>Use EJS instead of literally rendering the html manually like neanderthals</li><li>Actually comment code as we're writing it</li><li>Try to restore enddit to its former glory and beyond</li><li>Do all of the above a day before it's due and instead spend 2 weeks trying to get that scroll bar for horizontal scrolling to go away</li><li>Spend a lot of time researching NoSQL then realize it's not worth it and go back to SQL</li></ul> Remember to smash like and subscribe and hit that little bell notification to know when there's a new unstyled block of text thats not worth reading.<br><a href='profileDemo'>Here's a cool demo on EJS!</a><br>Ok time for requirements this week. The final version of enddit was hopefully gonna look similar to reddit, but that was more of a test to see if we could make a forum-like thing. I'm not sure what we want seconddit to be, I think we should stick with the same style but since we are doing the frontend first it will look much better. Maybe we can turn it into a demo to show other people how to make a forum-like program with node by having the code open source and making it easy to clone it and use the developer tools. It would help my teammates and maybe the whole class if they were interested in nodejs. The nice thing about having limited time and people is it hopefully won't get too complicated and it will stay easy to understand. If I had plenty of time and people working on it, it would probably just be another forum or blog, albeit a bit of a sarcastic one.<br><ul><li>I would hire a UX designer because everything looks terrible</li><li>I would hire a server admin who would fix the EC2 server dying every 30 minutes</li><li>I would hire someone who knows how to sql</li><li>I would hire someone to hire more people because I can't think of any more</li></ul>`);
    //sends the plans on link
});

app.listen(8080, () => {
    //listen for requests on port 8080
  console.log('server started');
});
