import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardTitle: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  },
  // indentLvl0: {
  //   margin: "0 auto"
  // },
  // indentLvl1: {
  //   marginLeft: "50px"
  // }
};

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      // Filter must be integrated into
      filterText: ''
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.initProjList();
  }

  initProjList = () => {
    // Replace with call to endpoint
    const projArray = [];

    // Example data (endpoint will not return email of member)
    const firstProject = {
      projTitle: 'Past project 1',
      teamName: 'Test Team',
      groupMembers: [{ name: 'member1', email: 'member1@email.com' }, { name: 'member2', email: 'member2@email.com' }, { name: 'member3', email: 'member3@email.com' }],
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    const secondProject = {
      projTitle: 'Past project 2',
      teamName: 'Test Team',
      groupMembers: [{ name: 'member1', email: 'member1@email.com' }, { name: 'member2', email: 'member2@email.com' }, { name: 'member3', email: 'member3@email.com' }],
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    projArray.push(firstProject);
    projArray.push(secondProject);

    this.state.projectList = projArray;
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  render() {
    const { classes } = this.props;

    let projList = <Card><CardBody><h4>No Archived Projects</h4></CardBody></Card>;
    if (this.state.projectList.length > 0) {
      // Filter the results
      const filteredProjects = this.state.projectList.filter(element => element.projTitle.toLowerCase().search(this.state.filterText.toLowerCase()) !== -1);

      // Format the results
      projList = filteredProjects.map(project => (
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>{project.projTitle}</h3>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>{project.teamName}</h4>
              {project.groupMembers.map(memberSet => <p>{memberSet.name}</p>)}
              <p className={classes.cardCategory}>{project.description}</p>
              <Button color="primary">
                View Project Details
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      ));
    }

    return (
      <GridContainer>
        <GridItem xs={2} sm={2} md={2}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <SentimentSatisfiedAlt />
              </CardIcon>
              <p className={classes.cardCategory}>Past Projects</p>
              <h3 className={classes.cardTitle}> {this.state.projectList.length}</h3>
            </CardHeader>
          </Card>
        </GridItem>
        {projList}
      </GridContainer>
    );
  }
}
export default withStyles(styles)(TableList);
