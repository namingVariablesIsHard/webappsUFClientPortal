import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';
import Button from '../../components/CustomButtons/Button.jsx';

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
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
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
  headerButton: {
    float: 'right',
    marginLeft: '20000px',
    color: '#000000'
  }
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

    // Example data (Note that the db should actually store as much info for the project as possible, but endpoints should only return what is necessary)
    const firstProject = {
      projTitle: 'Proposed project 1',
      companyName: 'Sample Inc',
      description: 'This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team.'
    };
    const secondProject = {
      projTitle: 'Proposed project 2',
      companyName: 'Fake LLC',
      description: 'This is an example description of a project. This is an example description of a project. This is an example description of a project. This is an example description of a project.'
    };
    const thirdProject = {
      projTitle: 'Proposed project 3',
      companyName: 'Test Co.',
      description: 'This is an example description of a project. This is an example description of a project. This is an example description of a project. This is an example description of a project.'
    };
    projArray.push(firstProject);
    projArray.push(secondProject);
    projArray.push(thirdProject);

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
            <CardHeader color="primary">
              <GridContainer>
                <GridItem>
                  <h3 className={classes.cardTitleWhite}>{project.projTitle}</h3>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>{project.companyName}</h4>
              <p>{project.description}</p>
              <Button color="rose">
                Edit Proposal
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
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <a href="user">
                  <Icon>add</Icon>
                </a>
              </CardIcon>
              <p className={classes.cardCategory}>Propose a Project</p>
              <h3 className={classes.cardTitle}>
                {' '}
                <a href="user">New</a>
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
        {projList}
      </GridContainer>
    );
  }
}
export default withStyles(styles)(TableList);
