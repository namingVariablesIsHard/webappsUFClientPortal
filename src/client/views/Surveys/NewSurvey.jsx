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
import AppBar from "@material-ui/core/AppBar";
import TextField from '@material-ui/core/TextField';

import InputLabel from "@material-ui/core/InputLabel";
// core components
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";


import avatar from "../../assets/img/faces/tim.jpg";

import { bugs, website, server } from '../../variables/general.jsx';

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

class NewSurvey extends React.Component {
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
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h2 className={classes.cardTitleWhite}>Project Satisfaction Survey</h2>
            </CardHeader>
            <CardBody>
              
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Describe your satisfaction"
                    id="satisfaction"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Satisfaction of time to completion"
                    id="timing"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Overall impression of look"
                    id="look"
                    formControlProps={{
                      fullWidth: true
                    }}
                    // inputProps={{
                    //   disabled: true
                    // }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Ease of Communication"
                    id="communication"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Rating out of 10"
                    id="rating"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Look out of 10"
                    id="look"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Completion out of 10"
                    id="completion"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Functionality out of 10"
                    id="functionality"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Completed by"
                    id="completion"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}></InputLabel>
                  <CustomInput
                    labelText="Additional Comments (Optional)"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
              
            </CardBody>
            <CardFooter>
              <Button color="info">Submit Survey</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO, Apple Inc</h6>
              <h4 className={classes.cardTitle}>Tim Cook</h4>
              <p className={classes.description}>
              Timothy Donald Cook (born November 1, 1960) is an American business executive and industrial engineer. 
              Cook is the Chief Executive Officer of Apple Inc., and previously served as the company's Chief 
              Operating Officer under its founder Steve Jobs. Cook joined Apple in March 1998 as a senior 
              vice president for worldwide operations, and then served as the Executive Vice President for 
              worldwide sales and operations. He was made the Chief Executive on August 24, 2011, prior to 
              Jobs' death in October of that year. During his tenure as the Chief Executive, he has advocated 
              for the political reformation of international and domestic surveillance, cybersecurity, 
              corporate taxation, American manufacturing, and environmental preservation.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        </GridContainer>
      </div>
           

    );
  }
}

NewSurvey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(NewSurvey);
