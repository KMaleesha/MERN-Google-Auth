import * as React from 'react';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Home = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Login Success! Congratulations!!! Its Home</h1>
            <label>
                <input
                    style={{ display: 'none' }}
                    accept="image/*"
                    id="upload-button"
                    multiple
                    type="file"
                />
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                    style={{ backgroundColor: 'black', color: 'white' }}
                >
                    Upload
                </Button>
            </label>
        </div>
    )    
}

export default Home;