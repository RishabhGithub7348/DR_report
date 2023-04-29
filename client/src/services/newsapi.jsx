
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Box,Typography,Grid,styled} from "@mui/material"
import Card from '../components/Card';


const Feeds = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
const Url='https://newsapi.org/v2/everything?q=health&apiKey=659a0231369049de951e8bdbdc7c33c5'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        setData(response.data.articles);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Typography variant='h3'>Latest Health Related News Updates</Typography>
      <Box >
              <Card data={data}/>
      </Box>
    </div>
  ); 
  
};

export default Feeds;