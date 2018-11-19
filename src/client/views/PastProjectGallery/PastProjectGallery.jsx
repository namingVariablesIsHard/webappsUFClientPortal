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

    // Example data (endpoint will not return email of member)
    var firstProject = {projTitle: "Past project 1", teamName: "Test Team",
    groupMembers: [{name: "member1", email: "member1@email.com"}, {name: "member2", email: "member2@email.com"}, {name: "member3", email: "member3@email.com"}],
    description: "This is an example description of a team. This is an example description of a team. This is an example description of a team. This is an example description of a team."};
    var secondProject = {projTitle: "Past project 2", teamName: "Test Team",
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
            <h1 className={styles.cardTitleWhite}>{project.projTitle}</h1>
          </CardHeader>
          <CardBody>
            <h3>{project.teamName}</h3>
              {project.groupMembers.map(function(memberSet){
                //return [<p>{memberSet.name}</p>,<p>{memberSet.email}</p>];
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
      {projList}
    </GridContainer>
    );
    }


}



// const styles = {
//   cardCategoryWhite: {
//     "&,& a,& a:hover,& a:focus": {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0"
//     },
//     "& a,& a:hover,& a:focus": {
//       color: "#FFFFFF"
//     }
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: "#777",
//       fontSize: "65%",
//       fontWeight: "400",
//       lineHeight: "1"
//     }
//   }
// };

// function TableList(props) {
//   const { classes } = props;
//   return (
//     <GridContainer>
//     {/* {var projList = this.state.projList.map(function(project){
//       return(<GridItem xs={12} sm={12} md={12}>
//       <Card>
//         <CardHeader color="primary">
//           <h4 className={cardTitleWhite}>project.projTitle</h4>
//         </CardHeader>
//       </Card>
//       </GridItem>);
//     });} */}


//       {/* <GridItem xs={12} sm={12} md={12}>
//         <Card>
//           <CardHeader color="primary">
//             <h4 className={classes.cardTitleWhite}>Simple Table</h4>
//             <p className={classes.cardCategoryWhite}>
//               Here is a subtitle for this table
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Table
//               tableHeaderColor="primary"
//               tableHead={["Name", "Country", "City", "Salary"]}
//               tableData={[
//                 ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
//                 ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
//                 ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
//                 ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
//                 ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
//                 ["Mason Porter", "Chile", "Gloucester", "$78,615"]
//               ]}
//             />
//           </CardBody>
//         </Card>
//       </GridItem>
//       <GridItem xs={12} sm={12} md={12}>
//         <Card plain>
//           <CardHeader plain color="primary">
//             <h4 className={classes.cardTitleWhite}>
//               Table on Plain Background
//             </h4>
//             <p className={classes.cardCategoryWhite}>
//               Here is a subtitle for this table
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Table
//               tableHeaderColor="primary"
//               tableHead={["ID", "Name", "Country", "City", "Salary"]}
//               tableData={[
//                 ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
//                 ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
//                 ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
//                 [
//                   "4",
//                   "Philip Chaney",
//                   "$38,735",
//                   "Korea, South",
//                   "Overland Park"
//                 ],
//                 [
//                   "5",
//                   "Doris Greene",
//                   "$63,542",
//                   "Malawi",
//                   "Feldkirchen in Kärnten"
//                 ],
//                 ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
//               ]}
//             />
//           </CardBody>
//         </Card>
//       </GridItem> */}
//     </GridContainer>
//   );
// }

export default withStyles(styles)(TableList);
