import { Box, Modal, Typography, Backdrop, Fade, Button, LinearProgress, Tooltip } from "@mui/material"
import { useState } from "react"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#aebcc9',
  borderRadius: '10px',
  p: 3,
};

export const Habilidades = ({hability}) => {
  
  const [open, setOpen] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  
  const handleOpen = () => {
    setOpen(true);
    const interval = setInterval(() => {
      setProgressValue((prevValue) => {
        if (prevValue < hability.progress) {
          return prevValue + 1; 
        } else {
          clearInterval(interval); 
          return hability.progress;
        }
      });
    }, 10); 
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setProgressValue(0);
    }, 1000);
  }
  
  return (
    <Box  className="mt-4 mb-4" >
      <Tooltip title={hability.description}>
        <Button onClick={handleOpen} sx={{
          color: 'white', '&:hover': {color: '#03abf2'}}}
          >
          <i className={hability.icon}></i>
        </Button>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{display:'flex'}}>
              <Typography id="transition-modal-title" variant="h6" component="h2" fontWeight="bold" sx={{paddingRight:'10px', fontFamily: 'Josefin Sans, sans-serif'}}>
                {hability.title}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                <i className={hability.icon_exp}></i>
              </Typography>
            </Box>
            <Typography id="transition-modal-description" sx={{ mt: 2, fontFamily: 'Josefin Sans, sans-serif' }}>
              {hability.exp}
            </Typography>
            <Typography id="transition-modal-description" fontWeight="bold" sx={{ mt: 2, fontFamily: 'Josefin Sans, sans-serif' }}>
              Años de experiencia: {hability.years_exp}
            </Typography>
            <Box sx={{ width: '100%', position: 'relative' }}>
              <LinearProgress variant="determinate" value={progressValue} sx={{ height: 18, borderRadius: '10px' }}/>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'black',
                  fontFamily: 'Josefin Sans, sans-serif'
                }}
              >
                {hability.level_exp}
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}
