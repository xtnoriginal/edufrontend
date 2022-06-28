// material
import { alpha, styled } from '@mui/material/styles';
import {Card, Link, Typography} from '@mui/material';

// component
import Iconify from '../../../components/Iconify';
import {Link as RouterLink} from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.info.darker,
    backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.info.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
        theme.palette.info.dark,
        0.24
    )} 100%)`

}));

// ----------------------------------------------------------------------


/*const icons = {
    Chemistry : 'ic:baseline-science',
    Mathematics: 'tabler:numbers',
    Biology:'ic:outline-biotech',
    Physics: 'ic:baseline-science',
    PE: 'icon-park-outline:sport',
    Shona: 'icon-park-outline:traditional-chinese-medicine',
    VPA:'emojione-monotone:performing-arts',
    English: 'icon-park-outline:english',
    Computer_Science: 'charm:binary'
}*/


export default function AppSubject(props) {

    const subject = props.subject;
    const link = 'subject/' +subject.name;


    return (
        <Link underline='none' to={link} component={RouterLink}>
            <RootStyle >

                    <IconWrapperStyle>
                        <Iconify icon={subject.icon} width={24} height={24} />
                    </IconWrapperStyle>
                    <Typography variant="h3">{subject.name}</Typography>
                    <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                        {subject.board}
                    </Typography>

            </RootStyle>
        </Link>
    );
}


