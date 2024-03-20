// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, lastname, contact, perfil) {
  return { name, lastname, contact, perfil };
}

const rows = [
  createData('Oliver', 'Sanchez', '684656565', 4.0),
  createData('Marta', 'Sanchez', '684456565', 4.0),
  createData('David', 'Fernandez', '684656565', 4.0),
  createData('Jorge', 'Perez', '6846s6565', 4.0),
  createData('Oliver', 'Sanchez', '684656565', 4.0),
];

export default function ListMember() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >NOMBRE</TableCell>
            <TableCell align="right">APELLIDO</TableCell>
            <TableCell align="right">CONTACTO</TableCell>
            <TableCell align="right">IR A PERFIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ width: '80px' }}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right"><button className="buttonAddMember">Perfil</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
