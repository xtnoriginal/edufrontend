// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// component
import Iconify from '../../components/Iconify';
import GoogleLogin, {useGoogleLogin} from "react-google-login";

// ----------------------------------------------------------------------

export default function AuthSocial() {



    const clientId="714148240783-2hj1753285tmqlrgv1a2qlfr61g1nsm4.apps.googleusercontent.com";

    const onSuccess = (res)=>{
        console.log('Login Success');
    }

    const onFailure = (res) => {
        console.log('Login failure: res',res)
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn : true,
        accessType: 'offine',

    });





  return (
    <>
      <Stack direction="row" spacing={2}>


          <Button onClick={signIn} fullWidth size="large" color="inherit" variant="outlined">
              <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
          </Button>

          <Button  fullWidth size="large" color="inherit" variant="outlined">
              <Iconify icon="eva:facebook-fill" color="#1877F2" height={24} />
          </Button>



        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" height={24} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
