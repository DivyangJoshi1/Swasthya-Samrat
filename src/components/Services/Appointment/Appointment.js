// import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
// // import { DateTimePicker } from '@mui/x-date-pickers';
// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import swal from "sweetalert";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import useAuth from "../../../Hooks/useAuth";

// const Appointment = () => {
//   const { user } = useAuth();

//   // <DateTimePicker label="Basic date time picker" />
//   // const [clearedDate, setClearedDate] = React.useState(null);
//   const [value, setValue] = React.useState(new Date());

//   // doctor name function
//   const [docName, setDocName] = React.useState("");

//   const handleChange = (event) => {
//     setDocName(event.target.value);
//   };

//   //swal alert
//   const swalAlert = () => {
//     return swal("Your Appointment is Done You will Receive a mail ASAP.", {
//       button: false,
//       icon: "success",
//     });
//   };
//   return (
//     <Box
//       id="appointment"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Container style={{ justifyContent: "center" }}>
//           <Typography
//             variant="h5"
//             sx={{
//               mt: 5,
//               mb: 5,
//             }}
//           >
//             Select your time and data for Appointment
//           </Typography>
//         </Container>
//         {/* set doctor name */}
//         <FormControl sx={{ mb: 5, minWidth: "50%" }}>
//           <InputLabel id="demo-simple-select-autowidth-label">
//             Select Doctor Name
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-autowidth-label"
//             id="demo-simple-select-autowidth"
//             value={docName}
//             onChange={handleChange}
//             autoWidth
//             label="Select Doctor Name"
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Dr. Neha A Agrawal.</MenuItem>
//             <MenuItem value={11}>Dr. Vrushali Naik</MenuItem>
//             <MenuItem value={12}>Dr. Tejaswini Manogna</MenuItem>
//             <MenuItem value={13}>Dr. Aditya Gupta</MenuItem>
//             <MenuItem value={14}>Dr. Vivek k Bansode</MenuItem>
//             <MenuItem value={16}>Dr. Pratima J Singh</MenuItem>
//             <MenuItem value={17}>Dr. Amit Lanke</MenuItem>
//             <MenuItem value={18}>Dr. Johnny Pandit</MenuItem>
//             <MenuItem value={19}>Dr. Sandip Nehe</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           sx={{ mb: 2 }}
//           value={user.displayName}
//           fullWidth
//           label="Your Name"
//           id="fullWidth"
//         />
//         <TextField
//           sx={{ mb: 2 }}
//           value={user.email}
//           fullWidth
//           label="Your Mail"
//           id="fullWidth"
//         />

//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <Stack spacing={3}>
//             <MobileDateTimePicker
//               value={value}
//               onChange={(newValue) => {
//                 setValue(newValue);
//               }}
//               label="Appointment Date"
//               onError={console.log}
//               minDate={new Date("2024-01-01T00:00")}
//               inputFormat="yyyy/MM/dd hh:mm a"
//               mask="___/__/__ __:__ _M"
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </Stack>
//         </LocalizationProvider>

//         <TextField
//           sx={{ mt: 2, mb: 2 }}
//           fullWidth
//           label="Problem type"
//           id="fullWidth"
//         />

//         <Button
//           sx={{ p: 1, mt: 2, mb: 5 }}
//           onClick={swalAlert}
//           fullWidth
//           variant="contained"
//         >
//           <AddCircleIcon /> Confirm
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default Appointment;
// import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
// // import { DateTimePicker } from '@mui/x-date-pickers';
// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import swal from "sweetalert";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import useAuth from "../../../Hooks/useAuth";

// import { useState } from "react";

// const Appointment = () => {
//   // const { user } = useAuth();

//   // // <DateTimePicker label="Basic date time picker" />
//   // // const [clearedDate, setClearedDate] = React.useState(null);
//   // const [value, setValue] = React.useState(new Date());

//   // // doctor name function
//   // const [docName, setDocName] = React.useState("");

//   // const handleChange = (event) => {
//   //   setDocName(event.target.value);
//   // };

//   // //swal alert
//   // const swalAlert = () => {
//   //   return swal("Your Appointment is Done You will Receive a mail ASAP.", {
//   //     button: false,
//   //     icon: "success",
//   //   });

//   const { user } = useAuth();
//   const [value, setValue] = useState(new Date()); // appointment date
//   const [docName, setDocName] = useState(""); // doctor name
//   const [problemType, setProblemType] = useState(""); // problem description

//   const handleChange = (event) => {
//     setDocName(event.target.value);
//   };

//   const swalAlert = () => {
//     // Construct the message content
//     const messageBody = `Appointment confirmed with Dr. ${docName} for ${user.displayName}. Date: ${value.toLocaleString()}. Problem: ${problemType}`;

//     // Send the request to the backend for SMS
//     fetch("http://localhost:5001/confirmation-msg", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         to: user.phoneNumber, // assuming you have the user's phone number
//         body: messageBody,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           swal("Your appointment is confirmed! You will receive an SMS shortly.", {
//             icon: "success",
//             button: false,
//             timer: 3000,
//           });
//         } else {
//           swal("Failed to send SMS. Please try again later.", {
//             icon: "error",
//             button: "Ok",
//           });
//         }
//       })
//       .catch((error) => {
//         swal("Error occurred while sending SMS.", {
//           icon: "error",
//           button: "Ok",
//         });
//         console.error("Error sending SMS:", error);
//       });
//   };
//   return (
//     <Box
//       id="appointment"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Container style={{ justifyContent: "center" }}>
//           <Typography
//             variant="h5"
//             sx={{
//               mt: 5,
//               mb: 5,
//             }}
//           >
//             Select your time and data for Appointment
//           </Typography>
//         </Container>
//         {/* set doctor name */}
//         <FormControl sx={{ mb: 5, minWidth: "50%" }}>
//           <InputLabel id="demo-simple-select-autowidth-label">
//             Select Doctor Name
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-autowidth-label"
//             id="demo-simple-select-autowidth"
//             value={docName}
//             onChange={handleChange}
//             autoWidth
//             label="Select Doctor Name"
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Dr. Neha A Agrawal.</MenuItem>
//             <MenuItem value={11}>Dr. Vrushali Naik</MenuItem>
//             <MenuItem value={12}>Dr. Tejaswini Manogna</MenuItem>
//             <MenuItem value={13}>Dr. Aditya Gupta</MenuItem>
//             <MenuItem value={14}>Dr. Vivek k Bansode</MenuItem>
//             <MenuItem value={16}>Dr. Pratima J Singh</MenuItem>
//             <MenuItem value={17}>Dr. Amit Lanke</MenuItem>
//             <MenuItem value={18}>Dr. Johnny Pandit</MenuItem>
//             <MenuItem value={19}>Dr. Sandip Nehe</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           sx={{ mb: 2 }}
//           value={user.displayName}
//           fullWidth
//           label="Your Name"
//           id="fullWidth"
//         />
//         <TextField
//           sx={{ mb: 2 }}
//           value={phoneNumber}
//           onChange={handlePhoneChange}
//           fullWidth
//           label="Your Phone Number"
//           id="phoneNumber"
//         />

//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <Stack spacing={3}>
//             <MobileDateTimePicker
//               value={value}
//               onChange={(newValue) => {
//                 setValue(newValue);
//               }}
//               label="Appointment Date"
//               onError={console.log}
//               minDate={new Date("2024-01-01T00:00")}
//               inputFormat="yyyy/MM/dd hh:mm a"
//               mask="___/__/__ __:__ _M"
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </Stack>
//         </LocalizationProvider>

//         <TextField
//           sx={{ mt: 2, mb: 2 }}
//           fullWidth
//           label="Problem type"
//           id="fullWidth"
//         />

//         <Button
//           sx={{ p: 1, mt: 2, mb: 5 }}
//           onClick={swalAlert}
//           fullWidth
//           variant="contained"
//         >
//           <AddCircleIcon /> Confirm
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default Appointment;


import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios"; // Axios for HTTP requests

const generateRandomAppointmentDate = () => {
  const start = new Date('2024-10-20').getTime();
  const end = new Date('2024-11-20').getTime(); // 30 days range after 20th October
  const randomTimestamp = Math.random() * (end - start) + start;
  const randomDate = new Date(randomTimestamp);

  // Format the date to 'DD/MM/YYYY'
  const day = randomDate.getDate().toString().padStart(2, '0');
  const month = (randomDate.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const year = randomDate.getFullYear();
  return `${day}/${month}/${year}`;
};



const generateGoogleMeetLink = () => {
  const baseUrl = "https://meet.google.com/";
  const randomString = Math.random().toString(36).substring(2, 12).toUpperCase();
  return `${baseUrl}${randomString}`;
};


const generateRandomAppointmentTime = () => {
  const startHour = 9; // 9 AM
  const endHour = 18; // 6 PM
  const randomHour = Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
  const randomMinutes = Math.floor(Math.random() * 60);

  // Format time as HH:MM (24-hour format)
  const hour = randomHour.toString().padStart(2, '0');
  const minutes = randomMinutes.toString().padStart(2, '0');
  return `${hour}:${minutes}`;
};

const Appointment = () => {
  const { user } = useAuth();
  const [value, setValue] = React.useState(new Date());
  const [docName, setDocName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState(""); // Phone number state
  const [problem, setProblem] = React.useState(""); // Phone number state

  const handleChange = (event) => {
    setDocName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
  };

  const appointmentDate = generateRandomAppointmentDate(); 
  const googleMeetLink = generateGoogleMeetLink();
  const appointmentTime = generateRandomAppointmentTime();

  // Function to send SMS by making API request to the backend
  const sendSMS = () => {
    // const appointmentTime = value.toLocaleString(); // Format date
    fetch('http://localhost:5001/confirmation-msg', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          to: phoneNumber,
          body: `Thank you for booking an appointment with ${docName}! Your appointment for the provided symptoms (${problem}) is scheduled for ${appointmentDate} at ${appointmentTime}. Here is your Google Meet link: ${googleMeetLink}`
      })
  })
      .then(response => response.text())
      .then(result => {
          swal(`SMS sent successfully to: ${phoneNumber}`);
      })
      .catch(error => {
          console.error('Error sending SMS:', error);
          swal("Failed to send SMS. Please try again.");
      });

  };

  // swal alert
  const swalAlert = () => {
    sendSMS(); // Call the SMS sending function
    return swal("Your Appointment is Done! You will receive an SMS shortly.", {
      button: false,
      icon: "success",
    });
  };

  return (
    <Box
      id="appointment"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Container style={{ justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{
              mt: 5,
              mb: 5,
            }}
          >
            Select your time and data for Appointment
          </Typography>
        </Container>

        {/* Set doctor name */}
        <FormControl sx={{ mb: 5, minWidth: "50%" }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select Doctor Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={docName}
            onChange={handleChange}
            autoWidth
            label="Select Doctor Name"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Dr. Neha A Agrawal">Dr. Neha A Agrawal.</MenuItem>
            <MenuItem value="Dr. Vrushali Naik">Dr. Vrushali Naik</MenuItem>
            <MenuItem value="Dr. Tejaswini Manogna">Dr. Tejaswini Manogna</MenuItem>
            <MenuItem value="Dr. Aditya Gupta">Dr. Aditya Gupta</MenuItem>
            <MenuItem value="Dr. Vivek k Bansode">Dr. Vivek k Bansode</MenuItem>
            <MenuItem value="Dr. Pratima J Singh">Dr. Pratima J Singh</MenuItem>
            <MenuItem value="Dr. Amit Lanke">Dr. Amit Lanke</MenuItem>
            <MenuItem value="Dr. Johnny Pandit">Dr. Johnny Pandit</MenuItem>
            <MenuItem value="Dr. Sandip Nehe">Dr. Sandip Nehe</MenuItem>
          </Select>
        </FormControl>

        {/* User Name */}
        <TextField
          sx={{ mb: 2 }}
          value={user.displayName}
          fullWidth
          label="Your Name"
          id="fullWidth"
        />

        {/* User Phone Number */}
        <TextField
          sx={{ mb: 2 }}
          value={phoneNumber}
          onChange={handlePhoneChange}
          fullWidth
          label="Your Phone Number"
          id="phoneNumber"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <MobileDateTimePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              label="Appointment Date"
              onError={console.log}
              minDate={new Date("2024-01-01T00:00")}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <TextField
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          label="Problem type"
          id="fullWidth"
          onChange={handleProblemChange}
          value={problem}
        />

        <Button
          sx={{ p: 1, mt: 2, mb: 5 }}
          onClick={swalAlert}
          fullWidth
          variant="contained"
        >
          <AddCircleIcon /> Confirm
        </Button>
      </Container>
    </Box>
  );
};

export default Appointment;

