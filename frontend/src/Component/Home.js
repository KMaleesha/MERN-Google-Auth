import * as React from 'react';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    function uploadFile(){
        navigate("./fileupload");
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Login Success! Congratulations!!! Its Home</h1>
                <Button
                    startIcon={<CloudUploadIcon />}
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onClick={uploadFile}
                >
                    Upload
                </Button>
        </div>
    )    
}

export default Home;