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
  // indentLvl0: {
  //   margin: "0 auto"
  // },
  // indentLvl1: {
  //   marginLeft: "50px"
  // }
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

    // Example data
    var firstProject = {projTitle: "Current project 1", teamName: "Test Team",
    groupMembers: [{name: "member1", email: "member1@email.com"}, {name: "member2", email: "member2@email.com"}, {name: "member3", email: "member3@email.com"}],
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    var secondProject = {projTitle: "Current project 2", teamName: "Test Team",
    groupMembers: [{name: "member1", email: "member1@email.com"}, {name: "member2", email: "member2@email.com"}, {name: "member3", email: "member3@email.com"}],
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    projArray.push(firstProject);
    projArray.push(secondProject);
    
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
            <h3>{project.teamName}</h3>
              {project.groupMembers.map(function(memberSet){
                return <p>{memberSet.name}</p>;
              })}
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
      {projList}
    </GridContainer>
    );
    }


}
export default withStyles(styles)(TableList);
