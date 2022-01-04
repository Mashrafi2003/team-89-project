import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Event.css";

const Event = () => {

  const [events, setEvents] = useState();
  useEffect(() => {
    fetch('./events.JSON')
      .then(response => response.json())
      .then(data => setEvents(data))
  }, [])

  return <Container sx={{ py: 8 }}>
    {/* component title and description here  */}
    <Box>
      <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#0E1133', fontSize: '40px' }}>
        Current Events
      </Typography>
      <Typography variant="p" sx={{ color: '#53545b' }}> We found 13 events available for you.</Typography>
    </Box>
    {/* events items start here  */}
    <Box>
      {/* {
        events.map(event => <Paper key={event.id} elevation={3}>

        </Paper>)
      } */}
    </Box>
  </Container>;
};

export default Event;
