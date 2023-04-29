
import React, { useState,useContext } from 'react';
import { Box,TextField,styled,FormControl,Grid,Button, Typography} from '@mui/material';
import { healthcare } from '../images/index';
import { RegisterUser } from '../services/api';
import { DataContext } from './context';


const OuterBox=styled(Box)`
display:flex;
margin:-32px auto;
`
const RightBox=styled(Box)`
margin:25px;
`
const Inputs=styled(TextField)`
margin:10px;
`
const LeftBox=styled(Box)`
background-color:blue;
opacity:0.8;
margin-right:20px;
`
const Image=styled('img')({
  height:'42rem',
  width:'75rem'
})
const InBox=styled(Box)`
margin-top:2rem;
`
const Heads=styled(Typography)`
font-weight:600;
margin-top:10px;
`
const StyleButton=styled(Button)`
margin-left:10px;
background-color:#0F5BFF;
padding:auto 25px;
`

export default function FormComponent() {

  const{unique,setUnique}=useContext(DataContext);
  const [values,setValues]=useState(
    {
      fname:'',
      lname:'',
      phone:'',
      uname:'',
      place:'',
      height:'',
      weight:'',
      blood:'',
      age:''
  }
  );

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }

  const handleClick=async()=>{
    values.userid=unique;
    const respond=await RegisterUser(values);
    if(!respond)
    return;
    console.log(respond);
  }

  
  return (
    <OuterBox>
      <LeftBox>
        <Image src={healthcare} alt='bg'/>
      </LeftBox>
      <RightBox>
        <Typography variant='h4'>Register</Typography>
        <InBox>
          <Heads>Your basic information</Heads>
          <Inputs id="outlined-basic" label="First Name" variant="standard" name='fname' onChange={(e)=>handleChange(e)}/>
          <Inputs id="outlined-basic" label="Last Name" variant="standard" name='lname' onChange={(e)=>handleChange(e)}/>
          {/* <Inputs id="outlined-basic" label="Email" variant="standard" name='email' onChange={(e)=>handleChange(e)}/> */}
          <Inputs id="outlined-basic" label="Phone-No." variant="standard" name='phone' onChange={(e)=>handleChange(e)}/>
          <Inputs id="outlined-basic" label="User Name" variant="standard" name='uname' onChange={(e)=>handleChange(e)}/>
          <Inputs id="outlined-basic" label="Place" variant="standard" name='place' onChange={(e)=>handleChange(e)}/>
        </InBox>
        <InBox>
          <Heads>Some body information</Heads>
          <Inputs id="outlined-basic" label="Height" variant="standard" name='height' onChange={(e)=>handleChange(e)}/>
          <Inputs id="outlined-basic" label="Weight" variant="standard" name='weight' onChange={(e)=>handleChange(e)}/>
         
          <Inputs id="outlined-basic" label="Blood-Group" variant="standard" name='blood' onChange={(e)=>handleChange(e)}/>
          <Inputs id="outlined-basic" label="Age" variant="standard" name='age' onChange={(e)=>handleChange(e)}/>
         
        </InBox>
        
        <StyleButton variant="contained" onClick={handleClick}>Submit</StyleButton>
      </RightBox>
    </OuterBox>
  );
}
