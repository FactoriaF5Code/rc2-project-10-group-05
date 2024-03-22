import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDataContextActivity } from '../DataContext/DataContextActivity';

export default function ActivitiesListTable() {
  
  const { activity } = useDataContextActivity();

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
          {activity.map((activity) => (
            <TableRow
              key={activity.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ width: '80px' }}>
                {activity.name}
              </TableCell>
              <TableCell align="right">{activity.day}</TableCell>
              <TableCell align="right">{activity.max_member}</TableCell>
              <TableCell align="right"><button className="buttonAddMember">Añadir Miembro</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
