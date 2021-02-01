import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';


const StyledTableHeadCell = styled(TableCell)({
  backgroundColor: '#000000',
  color: '#FFFFFF',
});

const StyledTableCell = styled(TableCell)({
  fontSize: 14,
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F0F0F0',
  },
});

const propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTripClick: PropTypes.func,
};

const defaultProps = {
  onTripClick: null,
}

const Lister = ({ headers, rows, onTripClick }) => {

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 700}}>
        <TableHead>
          <TableRow>
            {headers.map(header => <StyledTableHeadCell align="left">{header}</StyledTableHeadCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => 
            <StyledTableRow key={row._id}>
              {headers.map(header => 
                <StyledTableCell>
                  {
                    onTripClick ?
                      <Link onClick={() => onTripClick(row)}>
                        {row[header]}
                      </Link> :
                      row[header]         
                  }
                  
                </StyledTableCell>
              )}
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
};


Lister.propTypes = propTypes;
Lister.defaultProps = defaultProps;

export default Lister;