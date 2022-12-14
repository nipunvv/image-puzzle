import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

export default function NavBar() {
  return (
    <Box
      sx={{ backgroundColor: '#282c34', color: 'white', width: '100%', display: 'flex' }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1.5rem' }}>
        <Box>
          <Link to='/' style={{color: 'white', textDecoration: 'none'}}>PUZZLE</Link></Box>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to='/upload' style={{ fontSize: '1rem', color: 'white', textDecoration: 'none' }} >UPLOAD</Link>
        </Box>
      </Box>
    </Box>
  );
}