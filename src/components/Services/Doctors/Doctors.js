import React from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { HashLink } from 'react-router-hash-link';
import useDocData from '../../../Hooks/useDocData';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import swal from 'sweetalert';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';


const generateGoogleMeetLink = () => {
    const baseUrl = "https://meet.google.com/";
    const randomString = Math.random().toString(36).substring(2, 12).toUpperCase();
    return `${baseUrl}${randomString}`;
};

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

// Function to generate a random time (between 9 AM and 6 PM)
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

const Doctors = () => {
    const doctors = useDocData();


    // const swalAlert = () => {
    //     console.log('swal is clicked');
    //     return swal(
    //         "Phone:", {
    //         content: "input",
    //     },



    // )




    //         .then((value) => {
    //             swal(`Your registered number is :➥ ${value} You will get a confirmation Email soon if the slot is free. We are trying to make it automated asap. Till then be patient`);

    //         });






    // }


    const swalAlert = (doctorName) => {
        // return swal("Phone:", {
        //     content: "input",
        // })

        const form = document.createElement('div');
        form.innerHTML = `
        <div style="max-width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <label for="name" style="font-weight: bold; margin-bottom: 5px; display: block;"></label>
    <input id="name" type="text" placeholder="Enter your name" required 
           style="width: calc(100% - 20px); padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; outline: none; font-size: 16px; display: block; margin-left: auto; margin-right: auto;" />
    
    <label for="phone" style="font-weight: bold; margin-bottom: 5px; display: block;"></label>
    <input id="phone" type="tel" placeholder="Enter your phone number" required 
           style="width: calc(100% - 20px); padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; outline: none; font-size: 16px; display: block; margin-left: auto; margin-right: auto;" />

    <label for="problem" style="font-weight: bold; margin-bottom: 5px; display: block;"></label>
    <input id="problem" type="text" placeholder="Enter your Symptoms" required 
           style="width: calc(100% - 20px); padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; outline: none; font-size: 16px; display: block; margin-left: auto; margin-right: auto;" />
    
</div>

    `;

        swal({
            //     title: "Enter Your Details",
            //     content: {
            //         element: "div",
            //         attributes: {
            //             innerHTML: inputHtml,
            //         },
            //     },
            //     buttons: {
            //         cancel: "Cancel",
            //         confirm: {
            //             text: "Submit",
            //             closeModal: false, // Prevent closing modal on confirmation to handle validation
            //         },
            //     },
            // }).then((willSubmit) => {
            //     if (willSubmit) {
            //         // Retrieve values from input fields
            //         const name = document.getElementById('name').value;
            //         const email = document.getElementById('email').value;
            //         const phone = document.getElementById('phone').value;

            //         // Basic validation
            //         if (!name || !email || !phone) {
            //             swal("Please fill in all fields.", {
            //                 icon: "warning",
            //             });
            //             return; // Stop execution
            //         }

            //         // Proceed to submit the data
            //         swal(`Thank you, ${name}! Your details have been submitted.`);
            //         console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
            //         fetch('http://localhost:5000/send-sms', {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify({
            //                 to: phone,
            //                 body: `Thank you for booking an appointment ${doctorName}!`
            //             })
            //         })
            //         .then(response => response.text())
            //         .then(result => {
            //             swal(`SMS sent successfully to: ${phone}`);
            //         })
            //         .catch(error => {
            //             console.error('Error sending SMS:', error);
            //             swal("Failed to send SMS. Please try again.");
            //         });

            //         // Optionally, you can make a POST request here to send the data to your server
            //         // Example: 
            //         // await axios.post('/api/submit', { name, email, phone });

            //         // Close the modal
            //         swal.close();

            title: `Make an Appointment with Dr. ${doctorName}`,
            content: form,  // Use the DOM element
            buttons: {
                cancel: "Cancel",
                confirm: {
                    text: "Submit",
                    closeModal: false,  // Prevent closing modal on confirmation to handle validation
                },
            },
        }).then((willSubmit) => {
            if (willSubmit) {
                // Retrieve values from input fields
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const problem = document.getElementById('problem').value;

                // Basic validation
                if (!name || !problem || !phone) {
                    swal("Please fill in all fields.", {
                        icon: "warning",
                    });
                    return;  // Stop execution
                }
                const googleMeetLink = generateGoogleMeetLink();
                const appointmentDate = generateRandomAppointmentDate(); // Generate random date
                const appointmentTime = generateRandomAppointmentTime(); // Generate random time 
                // Proceed to submit the data
                swal(`Thank you, ${name}! Your details have been submitted for Dr. ${doctorName}.`);
                console.log(`Name: ${name}, Symptoms: ${problem}, Phone: ${phone}`);

                // Sending data to backend or sending SMS logic
                fetch('http://localhost:5000/send-sms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        to: phone,
                        body: `Thank you for booking an appointment with Dr. ${doctorName}! Your appointment for the provided symptoms (${problem}) is scheduled for ${appointmentDate} at ${appointmentTime}. Here is your Google Meet link: ${googleMeetLink}`
                    })
                })
                    .then(response => response.text())
                    .then(result => {
                        swal(`SMS sent successfully to: ${phone}`);
                    })
                    .catch(error => {
                        console.error('Error sending SMS:', error);
                        swal("Failed to send SMS. Please try again.");
                    });

                // Optionally close the modal after successful submission
                swal.close();
            }

        });


    };
    return (
        <div id='doctors'>
            {doctors[0].length !== 0 ? <>
                <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
                    <Container maxWidth="xl">
                        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                            variant='h5'
                        >Our team always ready to assist you
                        </Typography>

                        <Grid container spacing={3}>
                            {
                                doctors[0]?.map((doctor) => (
                                    <Grid key={doctor.doc_id} item xs={12} sm={6} md={4} lg={3} sx={{ mx: 'auto' }}>
                                        <Card sx={{
                                            mx: 'auto',
                                            boxShadow: 10,
                                            maxWidth: 345, transition: '0.5s all ease-in-out', ':hover': {
                                                color: '#e91e63',
                                                boxShadow: 1
                                            }
                                            , 'img': { transition: '0.5s all ease-in-out' },
                                            ':hover img': {
                                                transform: 'scale(1.1)'
                                            }
                                        }}>
                                            <CardActionArea>

                                                <Avatar
                                                    alt="doctor image"
                                                    src={doctor?.doc_img}
                                                    sx={{
                                                        width: 256, height: 256, mx: 'auto'
                                                    }}
                                                />

                                                <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>

                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Specialist in {doctor.specialize}
                                                    </Typography>
                                                </CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Dr. {doctor.name}
                                                </Typography>
                                            </CardActionArea>
                                            <CardActions sx={{ textAlign: "center" }} style={{ justifyContent: 'center' }}>
                                                <Button onClick={() => swalAlert(doctor.name)} sx={{ mt: 2, mb: 1 }} variant="contained" className="CheckButton">
                                                    Make an Appointment
                                                    <AddCircleIcon />
                                                </Button>
                                            </CardActions>
                                        </Card>



                                    </Grid>
                                ))
                            }


                        </Grid>

                        <HashLink smooth to="/home#home" className='text-style'> <Button variant="contained" startIcon={<HomeIcon />} sx={{ mb: 5, mt: 5 }}>
                            Back to Home
                        </Button></HashLink>

                    </Container>

                </Box> </> : <LoadingScreen></LoadingScreen>
            }
        </div>

    );
};

export default Doctors;