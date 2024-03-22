// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDataContext } from '../DataContext/DataContest';

export default function ListMember() {
 const { member } = useDataContext();

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
          {member.map((member) => (
            <TableRow
              key={member.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ width: '80px' }}>
                {member.name}
              </TableCell>
              <TableCell align="right">{member.lastName}</TableCell>
              <TableCell align="right">{member.contact}</TableCell>
              <TableCell align="right"><button className="buttonAddMember">Perfil</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
