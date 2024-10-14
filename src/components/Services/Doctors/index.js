// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const twilio = require('twilio');

// // // Create an instance of the Express app
// // const app = express();
// // const port = process.env.PORT || 3000;

// // // Twilio Account SID and Auth Token
// // const accountSid = 'AC84171305011bf1ef9f53cd511610b8cd';
// // const authToken = 'dafb6a534ef702a165fcdc431c1f57ef';
// // const client = require('twilio')(accountSid, authToken);

// // // Middleware to parse request bodies
// // app.use(bodyParser.urlencoded({ extended: false }));

// // // Endpoint to send SMS
// // app.post('/send-sms', (req, res) => {
// //   const { to, body } = req.body;

// //   // Send the SMS
// //   client.messages
// //   .create({
// //     body: body,
// //     to: to,
// //     from: '+18643653129',
  
// // })
// // .then(message => console.log(message.sid))
// //     .catch((err) => {
// //       console.error('Error sending SMS:', err.message);
// //       res.status(500).send('Failed to send SMS');
// //     });
// // });

// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });


// const express = require('express');
// const bodyParser = require('body-parser');
// const twilio = require('twilio');

// // Create an instance of the Express app
// const app = express();
// const port = process.env.PORT || 3000;

// // Twilio Account SID and Auth Token
// const accountSid = 'AC84171305011bf1ef9f53cd511610b8cd';
// const authToken = 'dafb6a534ef702a165fcdc431c1f57ef';
// const client = require('twilio')(accountSid, authToken);

// // Middleware to parse request bodies
// app.use(bodyParser.urlencoded({ extended: false }));

// // Endpoint to send SMS
// app.post('/send-sms', (req, res) => {
//   const { to, body } = req.body;

//   // Validate input
//   if (!to || !body) {
//     return res.status(400).send('Missing "to" or "body" in request');
//   }

//   // Send the SMS
//   client.messages
//     .create({
//       body: "hello",
//       to: '+919714483484',  // The recipient's phone number
//       from: '+18643653129'  // Your Twilio number
//     })
//     .then(message => {
//       console.log(`SMS sent successfully. Message SID: ${message.sid}`);
//       res.send(`SMS sent successfully to ${to}. Message SID: ${message.sid}`);
//     })
//     .catch((err) => {
//       console.error('Error sending SMS:', err.message);
//       res.status(500).send(`Failed to send SMS: ${err.message}`);
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Twilio Account SID and Auth Token
const accountSid = 'AC2e4ab1d3c0341c0adcc63fa27d54a878';
const authToken = '620b3193f862909a28251f2184347e23';
const client = require('twilio')(accountSid, authToken);


app.use(cors()); 
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to send SMS
app.post('/send-sms', (req, res) => {
  const { to, body } = req.body;

  // Validate input
  if (!to || !body) {
    return res.status(400).send('Missing "to" or "body" in request');
  }

  // Send the SMS via Twilio
  client.messages
    .create({
      body: body,
      to: to,           // The phone number entered by the user
      from: '+12028757072'  // Your Twilio number
    })
    .then(message => {
      console.log(`SMS sent successfully. Message SID: ${message.sid}`);
      res.send(`SMS sent successfully to ${to}`);
    })
    .catch((err) => {
      console.error('Error sending SMS:', err.message);
      res.status(500).send(`Failed to send SMS: ${err.message}`);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




