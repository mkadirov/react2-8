import {Box, Button, AppBar, Typography, Toolbar, Stack} from '@mui/material'
import { Email, Settings} from '@mui/icons-material';
import DropDown from './components/DropDown';



function App() {

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#4dd0e1'}}>
           <Button variant='text' sx={{color: 'white'}}>
            Navbar
           </Button>

           <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Button startIcon={<Email/>} sx={{color: 'white'}}>
                Contact
              </Button>
              <Button startIcon={<Settings/>} sx={{color: 'white'}}>
                Settings
              </Button>
              <DropDown/>
           </Box>
        </Toolbar>
      </AppBar>

      

      <Box sx={{ flexGrow: 1 }} marginTop={20}>
      <AppBar position="static">
         <Toolbar  sx={{display: 'flex', justifyContent: 'space-between'}} >
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Femmecubator
          </Typography>

          <Box>
             <Stack spacing={5} direction="row">
                 <Button color="inherit">Listings</Button>
                 <Button color="inherit">Mentors</Button>
                 <Button color="inherit">My Account</Button>
                 <Button color="inherit">Log out</Button>
             </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default App;
