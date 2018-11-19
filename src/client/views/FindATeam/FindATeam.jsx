import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

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
  }
};

class TableList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      teamList: [],
      // Filter must be integrated into 
      filterText: ''
    }
    this.filterUpdate = this.filterUpdate.bind(this);
    this.initTeamList();
  }

  initTeamList = () => {
    // Replace with call to endpoint
    var teamArray = [];

    // Example data (endpoint will not return email of member)
    var firstTeam = {teamName: "Team 1",
    groupMembers: [{name: "member1", email: "member1@email.com"}, {name: "member2", email: "member2@email.com"}, {name: "member3", email: "member3@email.com"}],
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    var secondTeam = {teamName: "Team 2",
    groupMembers: [{name: "member1", email: "member1@email.com"}, {name: "member2", email: "member2@email.com"}, {name: "member3", email: "member3@email.com"}],
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    var thirdTeam = {teamName: "Team 3",
    groupMembers: [{name: "member1", email: "member1@email.com"}, {name: "member2", email: "member2@email.com"}, {name: "member3", email: "member3@email.com"}],
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    var fourthTeam = {teamName: "Team 4",
    groupMembers: [{name: "member1", email: "member1@email.com"}, {name: "member2", email: "member2@email.com"}, {name: "member3", email: "member3@email.com"}],
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    teamArray.push(firstTeam);
    teamArray.push(secondTeam);
    teamArray.push(thirdTeam);
    teamArray.push(fourthTeam);
    
    this.state.teamList = teamArray;
  }

  filterUpdate(value){
    this.setState({filterText: value});
  }

  render(){

    var teamList = <Card><CardBody><h4>No Archived Projects</h4></CardBody></Card>;
    if(this.state.teamList.length > 0){

      // Filter the results
      var filteredTeams = this.state.teamList.filter(function(element){
        return element.teamName.toLowerCase().search(this.state.filterText.toLowerCase()) !== -1;
      }.bind(this));

      // Format the results
      teamList = filteredTeams.map(function(project){
        return(<GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h1 className={styles.cardTitleWhite}>{project.teamName}</h1>
          </CardHeader>
          <CardBody>
              {project.groupMembers.map(function(memberSet){
                return <p>{memberSet.name}</p>;
              })}
            <p>{project.description}</p>
          </CardBody>
        </Card>
        </GridItem>);
      });
    }

    return(
    <GridContainer>
      {teamList}
    </GridContainer>
    );
    }


}
export default withStyles(styles)(TableList);
