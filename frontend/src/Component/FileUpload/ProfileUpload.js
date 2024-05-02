import * as React from 'react';
import './ProfileUpload.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

const ProfileUpload = () => {

    const navigate = useNavigate();

    function navigateHome(){
        navigate('../home');
    }

    return(
        <div style={{ textAlign: 'center' }}>
            <h1>Successfully Submit Your File!!</h1>
            <Button onClick={navigateHome} 
                style={{ backgroundColor: 'black', color: 'white' }}
            >
                            Home
                        </Button>
        </div>
    )
};
export default ProfileUpload; 

