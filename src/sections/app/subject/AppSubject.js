// material
import { alpha, styled } from '@mui/material/styles';
import {Card, Link, Typography} from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
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

const TOTAL = 'Physics';

export default function AppSubject() {
    return (
        <RootStyle>

                <IconWrapperStyle>
                    <Iconify icon="ic:baseline-science" width={24} height={24} />
                </IconWrapperStyle>
                <Typography variant="h3">Physics</Typography>

        </RootStyle>
    );
}


