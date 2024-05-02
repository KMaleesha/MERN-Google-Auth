import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useNavigate } from 'react-router-dom';
import ProfileUpload from '../Component/FileUpload/ProfileUpload'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Home = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    function uploadFile(){
        setOpen(true);
    }

    function closePage(){
        setOpen(false);
    }

    function saveDataToDB(){

    }

    function handleClose(){
        // Save data to the database
        // Assuming you have a function saveDataToDB() that handles saving data to the database
        saveDataToDB();
    
        // Navigate to another page
        navigate('/home/fileupload');
    
        // Close the dialog
        setOpen(false);
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

                <Dialog open={open} onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: '80vh',
                                width: '400px',
                                minWidth: '300px',
                                textAlign: 'center'
                            }
                        }}
                >
                    <DialogTitle><h4>Upload File</h4></DialogTitle>
                    <DialogContent>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                            >
                            <TextField fullWidth label="File Name" id="fullWidth" />
                        </Box>
                        <br></br>
                        <br></br>
                        <input type="file" accept="application/pdf" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closePage} color="secondary">
                            Close
                        </Button>
                        <Button onClick={handleClose} color="black">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
        </div>
    )    
}

export default Home;
