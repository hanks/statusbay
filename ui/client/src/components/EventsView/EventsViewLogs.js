import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Timeline from '../Timeline/Timeline';

const useStyles = makeStyles(() => ({
  cell: {
    borderBottom: 0,
    padding: 0
  },
}));

const EventsViewLogs = ({ logs }) => {
  const classes = useStyles();
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Events</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell classes={{ root: classes.cell }}>
            <Timeline items={logs} maxHeight={400} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

EventsViewLogs.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    time: PropTypes.number,
    error: PropTypes.bool,
    content: PropTypes.string,
  })),
};

EventsViewLogs.defaultProps = {
  logs: [],
};

export default EventsViewLogs;