import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Home = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [file , setFile] = React.useState('');
    const [version, setVersion] = React.useState('');

    function uploadFile(){
        setOpen(true);
    }

    function closePage(){
        setOpen(false);
    }

    function handleClose(){
        setOpen(false);
    }

    const submitFile = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("version", version);
        formData.append("file", file);
        console.log(title, file);

        try {
            const result = await axios.post(
                "http://localhost:5000/upload-files",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                }
            );
            console.log(result);
            navigate('/home/fileupload');
        } catch (error) {
            console.error("Error uploading file:", error);
        }
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
                    <form  onSubmit={submitFile}>
                        <DialogContent>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                                >
                                <TextField fullWidth label="Title" id="fullWidth" 
                                    required 
                                    onChange={(e) => setTitle(e.target.value)} />
                                <br></br>
                                <br></br>
                                <TextField fullWidth label="Version" id="fullWidth" 
                                    required 
                                    onChange={(e) => setVersion(e.target.value)} />
                            </Box>
                            <br></br>
                            <br></br>
                            <input type="file" accept="application/pdf" 
                                required
                                onChange={(e)=> setFile(e.target.files[0])} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closePage} color="secondary">
                                Close
                            </Button>
                            <Button color="black" type='submit'>
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
        </div>
    )    
}

export default Home;
