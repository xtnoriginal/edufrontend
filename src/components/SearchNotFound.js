import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
         Coming Soon !!!
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try again later.
      </Typography>
    </Paper>
  );
}
