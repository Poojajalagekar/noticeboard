import FormControl from '@mui/material/FormControl';
import { FormGroup } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsers } from '../Service/api';
import { editUser } from '../Service/api';


const initialValue = {
  name: ''
  
}

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name } = user;
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const loadUserData = async() => {
            const response = await getUsers(id);
            setUser(response.data);
        }
        loadUserData();
    },[id]);

    

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async () => {
        await editUser(id,user);
        navigate('/all');
    }
    
    return (
        <Box sx={{p: 15, margin: 'auto', maxWidth: 500,  }}>
            
        <FormGroup>
        <Typography variant="h4">Edit </Typography>
        <FormControl >
        <InputLabel htmlFor="my-input">MSG</InputLabel>
        <Input id="my-input" onChange={(e) => onValueChange(e)} name='name' value={name} />
        <FormHelperText id="my-helper-text">NEW MSG</FormHelperText>
        </FormControl>

       
      <Button variant="contained" color="primary" onClick={() => editUserDetails()}> EDIT</Button>
      </FormGroup>
    
      </Box>
    )
}

export default EditUser;