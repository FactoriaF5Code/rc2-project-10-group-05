import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, day, members, check) {
  return { name, day, members, check };
}

const rows = [
  createData('Pilates', 'Lunes', 8, 4.0),
  createData('Spinning', 'Martes', 5, 4.0),
  createData('CrossFit', 'Miercoles y Viernes', 10, 4.0),
  createData('Yoga', 'Jueves', 1, 4.0),
];

export default function ListMember() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >ACTIVIDAD</TableCell>
            <TableCell align="right">DIA SEMANAL</TableCell>
            <TableCell align="right">MIEMBROS APUNTADOS</TableCell>
            <TableCell align="right">AÑADIR MIEMBRO</TableCell>
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
              <TableCell align="right">{row.day}</TableCell>
              <TableCell align="right">{row.members}</TableCell>
              <TableCell align="right"><button className="buttonAddMember">Añadir Miembro</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
