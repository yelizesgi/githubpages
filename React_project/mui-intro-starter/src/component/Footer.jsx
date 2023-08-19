import { teal } from '@mui/material/colors';
import { Typography } from '@mui/material';

const Footer = () => {



    return(
        <div sx={{ marginTop: "10rem", backgroundColor: teal[900]}}>
      <Typography variant='h6' sx={{justifyContent:"center",  p:4, backgroundColor: teal[900]}}>
        
          Copyright {new Date().getFullYear()}
        
      </Typography>
    </div>
    )
}



export default Footer