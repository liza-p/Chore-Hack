import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import API from '../../utils/API';
import { Container } from "react-bootstrap";
import "./demo.css";

import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import Home from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/core/styles';

const appointments = [
  // {
  //   id: 9,
  //   title: 'August Event',
  //   startDate: new Date(2020, 7, 23, 11, 0),
  //   endDate: new Date(2020, 7, 23, 12, 0),
  //   allDay: true,
  //   ownerId: 3,
  // },
];

const owners = [
  // {state.members.map((member, i) => <option value={member.id} key={i}>{member.name}</option>)}
  {
    text: 'Otis',
    id: 1,
    color: '#FFA726',
  }, {
    text: 'Liza',
    id: 2,
    color: '#FF7043',
  }, {
    text: 'Ayla',
    id: 3,
    color: '#E91E63',
  }, {
    text: 'Hannah',
    id: 4,
    color: '#AB47BC',
  }
];

// export const priorities = [
//   { id: 1, text: 'Low Priority', color: green },
//   { id: 2, text: 'Medium Priority', color: lightBlue },
//   { id: 3, text: 'High Priority', color: deepOrange },
// ];

const resources = [{
  fieldName: 'ownerId',
  title: 'Owners',
  instances: owners,
}];

const getBorder = theme => (`1px solid ${
  theme.palette.type === 'light'
    ? lighten(fade(theme.palette.divider, 1), 0.88)
    : darken(fade(theme.palette.divider, 1), 0.68)
  }`);

const DayScaleCell = props => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

const styles = theme => ({
  cell: {
    color: '#78909C!important',
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'top',
    padding: 0,
    height: 100,
    borderLeft: getBorder(theme),
    '&:first-child': {
      borderLeft: 'none',
    },
    '&:last-child': {
      paddingRight: 0,
    },
    'tr:last-child &': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
      outline: 0,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
  text: {
    padding: '0.5em',
    textAlign: 'center',
  },
  opacity: {
    opacity: '0.5',
  },
  appointment: {
    borderRadius: '10px',
    '&:hover': {
      opacity: 0.6,
    },
  },
  apptContent: {
    '&>div>div': {
      whiteSpace: 'normal !important',
      lineHeight: 1.2,
    },
  },
  flexibleSpace: {
    flex: 'none',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  tooltipContent: {
    padding: theme.spacing(3, 1),
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
    boxSizing: 'border-box',
    width: '400px',
  },
  tooltipText: {
    ...theme.typography.body2,
    display: 'inline-block',
  },
  title: {
    ...theme.typography.h6,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  icon: {
    color: theme.palette.action.active,
    verticalAlign: 'middle',
  },
  textCenter: {
    textAlign: 'center',
  },
  dateAndTitle: {
    lineHeight: 1.1,
  },
  titleContainer: {
    paddingBottom: theme.spacing(2),
  },
  container: {
    paddingBottom: theme.spacing(1.5),
  },
});


// #FOLD_BLOCK
const CellBase = React.memo(({
  classes,
  startDate,
  formatDate,
  otherMonth,
  // #FOLD_BLOCK
}) => {
  // const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
  const isFirstMonthDay = startDate.getDate() === 1;
  const formatOptions = isFirstMonthDay
    ? { day: 'numeric', month: 'long' }
    : { day: 'numeric' };
  return (
    <TableCell
      tabIndex={0}
      className={classNames({
        [classes.cell]: true,
        [classes.opacity]: otherMonth,
      })}
    >
      <div className={classes.content}>
      </div>
      <div className={classes.text}>
        {formatDate(startDate, formatOptions)}
      </div>
    </TableCell>
  );
});

const TimeTableCell = withStyles(styles, { name: 'Cell' })(CellBase);

const Appointment = withStyles(styles, { name: 'Appointment' })(({ classes, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    className={classes.appointment}
  />
));

const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({ classes, ...restProps }) => (
  <Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
));

const FlexibleSpace = withStyles(styles, { name: 'ToolbarRoot' })(({ classes, ...restProps }) => (
  <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <div className={classes.flexContainer}>
      <Home fontSize="large" htmlColor="#03a9f4" />
      <Typography variant="h5" style={{ marginLeft: '10px' }}>Chore Chart</Typography>
    </div>
  </Toolbar.FlexibleSpace>
));

export default class Demo extends React.PureComponent {
  // #FOLD_BLOCK
  constructor(props) {
    super(props);

    this.state = {
      // data: appointments,
      data: [], 
      // {
      //   fieldName: 'ownerId',
      //   title: 'Owners',
      //   instances: owners,
      // }];
      
      // resources: resources
      resources:[]
    };

    this.commitChanges = this.commitChanges.bind(this);
  }
  componentDidMount() {
    var self = this;
    API.getAllHouseholdChores().then(resp => { 
// create empty array and map through repititions (then you will do the set state on this new array)

      var choresApt = resp.data.map(chore => ({
        id: chore.Repetitions[0]?.ChoreId,
        title: chore.chore,
        startDate: new Date(chore.Repetitions[0]?.due_date),
        endDate: new Date (new Date(chore.Repetitions[0]?.due_date).setHours(new Date (chore.Repetitions[0]?.due_date).getHours()+1)),
        ownerId: chore.UserId ,


      }))
      // console.log(choresApt, appointments);
      // self.setState({ data: appointments })
      self.setState({data:choresApt});
      })
      API.getMembers().then(resp => {
        // console.log("members", resp);
        var owners = resp.data.map (user => ({
          text: user.name,
          id: user.id,
          color: user.color,
        }))
        console.log(owners);
        self.setState({resources:[{
          fieldName: 'ownerId',
          title: 'Owners',
          instances: owners,
        }]});
      })
      

    // setTimeout(function () {
    //   self.setState({resources })
    // }, 3000)
    // console.log("updated")
  }



  // #FOLD_BLOCK
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, resources } = this.state;

    return (
    <Container style={{ marginBottom: 20 }} >
      <Paper>
        <Scheduler
          data={data}
        >
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <ViewState
            defaultCurrentDate={new Date()}
          />

          <MonthView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />

          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <Resources
            data={resources}
          />

          <Toolbar
            flexibleSpaceComponent={FlexibleSpace}
          />
          <DateNavigator />

          <EditRecurrenceMenu />
          <AppointmentTooltip
            showCloseButton
            showDeleteButton
            showOpenButton
          />
          <AppointmentForm />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    </Container>
    );
  }
}
