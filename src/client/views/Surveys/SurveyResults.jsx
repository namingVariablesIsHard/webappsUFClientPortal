/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import Create from '@material-ui/icons/Create';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
import FindInPage from '@material-ui/icons/FindInPage';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';
import Clear from '@material-ui/icons/Clear';
import Archive from '@material-ui/icons/Archive';
// core components
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Table from '../../components/Table/Table.jsx';
import Tasks from '../../components/Tasks/Tasks.jsx';
import CustomTabs from '../../components/CustomTabs/CustomTabs.jsx';
import Danger from '../../components/Typography/Danger.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';

import { bugs, website, server } from '../../variables/general.jsx';

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

class Surveys extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Surveys to complete</p>
                <h3 className={classes.cardTitle}> 4</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Create />
                  <a href="surveys">Complete pending surveys</a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <SentimentSatisfiedAlt />
                </CardIcon>
                <p className={classes.cardCategory}>Review Student Surveys</p>
                <h3 className={classes.cardTitle}>3</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <FindInPage />  
                  <a href="surveys"> View Student Surveys</a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                <Button color="default" className={classes.title}>
                  <a href="currentprojects">
                    <h3 className={classes.cardTitleWhite}>Completed Projects</h3>
                  </a>
                </Button>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['#', 'Name', 'Team Members', 'Completed on', 'Complete Survey', 'View Project', 'Archive']}
                  tableData={[
                    ['1', 'Candy Labeling Visualizer', '3', 'October 15th, 2018', <ArrowUpward />, <KeyboardArrowRight />, <Archive />],
                    ['2', 'Marble Table Local Polishing Service', '4', 'May 1st, 2018', <ArrowUpward />, <KeyboardArrowRight />, <Archive />],
                    ['3', 'Bandwith Reduction Test', '2','June 1st, 2018', <ArrowUpward />, <KeyboardArrowRight />, <Archive />],
                    ['4', 'National Defense Spending Tracker', '2', 'January 15th, 2018', <ArrowUpward />, <KeyboardArrowRight />, <Archive />]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <Button color="default" className={classes.title}>
                  <a href="projectproposals">
                    <h3 className={classes.cardTitleWhite}>Review Student Surveys</h3>
                  </a>
                </Button>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={['#', 'Name', 'Project Name', 'Submitted on', 'Go to', 'Delete']}
                  tableData={[
                    ['1', 'Christopher Nolan', 'Candy Labeling Visualizer', 'October 21st @ 21:34 GMT', <KeyboardArrowRight />, <Clear />],
                    ['2', 'Hussan Keibotep', 'Marble Table Local Polishing Service', 'May 13th @ 14:22 GMT', <KeyboardArrowRight />, <Clear />],
                    ['3', 'Rachel Knowlingsby', 'Bandwith Reduction Test', 'June 14th @ 4:33 GMT', <KeyboardArrowRight />, <Clear />]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Surveys.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Surveys);
