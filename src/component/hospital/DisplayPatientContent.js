import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SimpleCard extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){

    

  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography style={styles.title} color="textSecondary" gutterBottom>
          Patient Details
        </Typography>
        <Typography variant="h5" component="h2">
         {this.props.patient.patientid}
        </Typography>
        <Typography style={styles.pos} color="textSecondary">
          {this.props.patient.patientname}
        </Typography>
        <Typography variant="h5" component="h2" style={styles.pos}>
          {this.props.patient.bloodgroup}
        </Typography>
        <Typography style={styles.pos} color="textSecondary">
          {this.props.patient.doctorname}
        </Typography>
      </CardContent>
       <CardActions>
        <Button >Search Donor</Button>
      </CardActions>
    </Card>
  );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);