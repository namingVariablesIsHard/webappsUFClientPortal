import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  headerButton: {
    float: "right",
    marginLeft: "20000px",
    color: "#000000"
  }
};

class TableList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projectList: [],
      // Filter must be integrated into 
      filterText: ''
    }
    this.filterUpdate = this.filterUpdate.bind(this);
    this.initProjList();
  }

  initProjList = () => {
    // Replace with call to endpoint
    var projArray = [];

    // Example data (Note that the db should actually store as much info for the project as possible, but endpoints should only return what is necessary)
    var firstProject = {projTitle: "Proposed project 1", companyName: "Sample Inc",
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    var secondProject = {projTitle: "Proposed project 2", companyName: "Fake LLC",
    description: "This is an example description of a project. This is an example description of a project. This is an example description of a project. This is an example description of a project."};
    var thirdProject = {projTitle: "Proposed project 3", companyName: "Test Co.",
    description: "This is an example description of a project. This is an example description of a project. This is an example description of a project. This is an example description of a project."};
    projArray.push(firstProject);
    projArray.push(secondProject);
    projArray.push(thirdProject);
    
    this.state.projectList = projArray;
  }

  filterUpdate(value){
    this.setState({filterText: value});
  }

  render(){

    var projList = <Card><CardBody><h4>No Archived Projects</h4></CardBody></Card>;
    if(this.state.projectList.length > 0){

      // Filter the results
      var filteredProjects = this.state.projectList.filter(function(element){
        return element.projTitle.toLowerCase().search(this.state.filterText.toLowerCase()) !== -1;
      }.bind(this));

      // Format the results
      projList = filteredProjects.map(function(project){
        return(<GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
          <GridContainer>
            <GridItem>
              <h1 className={styles.cardTitleWhite}>{project.projTitle}</h1>
            </GridItem>
            <Grid>
              <Button>Edit Proposal
              <Icon>edit_icon</Icon>
              </Button>
            </Grid>
          </GridContainer>
          </CardHeader>
          <CardBody>
            <h3>{project.companyName}</h3>
            <p>{project.description}</p>
            <Button>
              Manage Project
            </Button>
          </CardBody>
        </Card>
        </GridItem>);
      });
    }

    return(
    <GridContainer>
      <Button variant="fab">
        <AddIcon/>
      </Button>
      {projList}
    </GridContainer>
    );
    }


}
export default withStyles(styles)(TableList);
