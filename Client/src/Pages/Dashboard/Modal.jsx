import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ReusableModal = ({ open, onClose, title, content }) => {
    return (
        <Modal open={open} onClose={onClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
        {title}
        </Typography>
        <Typography variant="body2" component="p">
        {content}
        </Typography>
        <Button onClick={onClose}>Cerrar</Button>
        </Box>
        </Modal>
        );
    };
    
    export default ReusableModal;
    