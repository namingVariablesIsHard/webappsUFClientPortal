import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// core components
import Icon from '@material-ui/core/Icon';
import Create from '@material-ui/icons/Create';
import GridItem from '../../components/Grid/GridItem.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import CustomInput from '../../components/CustomInput/CustomInput.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import CardAvatar from '../../components/Card/CardAvatar.jsx';
import CardBody from '../../components/Card/CardBody.jsx';
import CardFooter from '../../components/Card/CardFooter.jsx';
import CardIcon from '../../components/Card/CardIcon.jsx';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import avatar from '../../assets/img/faces/tim.jpg';

import Message from './Message.js';
import ChatAppStyle from './ChatApp.css';

const styles = theme => ({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
    textDecoration: 'none'
  }
});

// function ContactTeam(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <Paper className={classes.root} elevation={1}>
//         <Typography variant="h5" component="h3">
//           This is a sheet of paper.
//         </Typography>
//         <Typography component="p">
//           Paper can be used to build surface or other elements for your application.
//         </Typography>
//         <div className="chatroom">
//                 <h3>Chilltime</h3>
//                 <ul className="chats" ref="chats">
//                     {
//                         chats.map((chat) => 
//                             <Message chat={chat} user={username} />
//                         )
//                     }
//                 </ul>
//                 <form className="input" onSubmit={(e) => this.submitMessage(e)}>
//                     <input type="text" ref="msg" />
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//       </Paper>
//     </div>
//   );
// }

// ContactTeam.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


class ContactTeam extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          chats: [{
              username: "Kevin Hsu",
              content: <p>Hello World!</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Alice Chen",
              content: <p>Love it! :heart:</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>Check out my Github at https://github.com/WigoHunter</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "KevHs",
              content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
              img: "http://i.imgur.com/ARbQZix.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>So</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>Chilltime is going to be an app for you to view videos with friends</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Kevin Hsu",
              content: <p>You can sign-up now to try out our private beta!</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }, {
              username: "Alice Chen",
              content: <p>Definitely! Sounds great!</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }]
      };

      this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
      this.scrollToBot();
  }

  componentDidUpdate() {
      this.scrollToBot();
  }

  scrollToBot() {
      ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
  }

  submitMessage(e) {
      e.preventDefault();

      this.setState({
          chats: this.state.chats.concat([{
              username: "Kevin Hsu",
              content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
              img: "http://i.imgur.com/Tj5DGiO.jpg",
          }])
      }, () => {
          ReactDOM.findDOMNode(this.refs.msg).value = "";
      });
  }

  render() {
    const { classes } = this.props;
    const username = "Kevin Hsu";
    const { chats } = this.state;

    return (
      
        <div className="chatroom">
            <h3>Project Development Chat</h3>
            <ul className="chats" ref="chats">
              {
                chats.map((chat) => 
                <Message chat={chat} user={username} />
                )
              }
            </ul>
            <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                <input type="text" ref="msg" />
                <input type="submit" value="Submit" />
            </form>
        </div>
        
      
      );
  }
}

export default withStyles(ChatAppStyle)(ContactTeam);
