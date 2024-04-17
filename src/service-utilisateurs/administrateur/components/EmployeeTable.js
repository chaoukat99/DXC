import { useState } from 'react';

import { Card, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { users } from '../../user';
import Iconify from './Iconfy';
import Scrollbar from './Scrollbar/Scrollbar';

import TableNoData from './Table/TableNoData';
import TableRow from './Table/TableRow';
import TableHead from './Table/TableHead';
import TableEmptyRows from './Table/TableEmptyRows';
import TableToolbar from './Table/TableToolbar';
import { emptyRows, applyFilter, getComparator } from './Table/utils';
import AddEmployeePage from '../pages/AddEmployeePage';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function EmployeeTable() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
     
     <Card sx={{ minWidth: 800, margin: 'auto', my: 1 }}>
  <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant="h4" sx={{ color: '#75356b', my: 1 }}>
      Liste des utilisateurs 
    </Typography>
    <Button
      variant="contained" 
      sx={{ 
        backgroundColor: '#75356b',
        '&:hover': {
          backgroundColor: '#ac85a6',
          color: 'white',
        },}} 
      startIcon={<Iconify icon="eva:plus-fill" />}
      component={Link} 
      to="/Add-Employee"
    >
      Ajouter utilisateur
    </Button>
  </CardContent>
</Card>

        
      

      <Card  sx={{margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        <TableToolbar
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar sx={{ minWidth: 800 }}>
          <TableContainer sx={{ overflow: 'unset', flexGrow: 1 }}>
            <Table sx={{ minWidth: 800 }}>
              <TableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'firstName', label: 'Prénom' },
                  { id: 'lastName', label: 'Nom' },
                  { id: 'email', label: 'E-mail' },
                  { id: 'password', label: 'Mot de passe', align: 'center' },
                  { id: 'role', label: 'Role' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      firstName={row.firstName}
                      role={row.role}
                      lastName={row.lastName}
                      email={row.email}
                      password={row.password}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))}

               
                {notFound && <TableNoData query={filterName} />}
               
              </TableBody>
            </Table>
            <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
          </TableContainer>
        </Scrollbar>
      
        
      </Card>
    </Container>
  );
}
