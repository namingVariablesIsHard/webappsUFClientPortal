// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Book from "@material-ui/icons/Book";
import Propose from "@material-ui/icons/NoteAdd";
import Find from "@material-ui/icons/FindInPage";
import PastProj from "@material-ui/icons/ViewCarousel";
import Survey from "@material-ui/icons/Assessment";
// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Typography from "../views/Typography/Typography.jsx";
import Icons from "../views/Icons/Icons.jsx";
import Maps from "../views/Maps/Maps.jsx";
import NotificationsPage from "../views/Notifications/Notifications.jsx";
import UpgradeToPro from "../views/UpgradeToPro/UpgradeToPro.jsx";
import CurrentProjects from "../views/CurrentProjects/CurrentProjects.jsx";
import ProjectManagement from "../views/CurrentProjects/ProjectManagement.jsx";
import ProjectProposals from "../views/ProjectProposals/ProjectProposals.jsx";
import NewProposal from "../views/ProjectProposals/NewProposal.jsx";
import EditProposal from "../views/ProjectProposals/EditProposal.jsx";
import FindATeam from "../views/FindATeam/FindATeam.jsx";
import ContactTeam from "../views/ContactTeam/ContactTeam.jsx";
import PastProjectGallery from "../views/PastProjectGallery/PastProjectGallery.jsx";
import ViewPastProject from "../views/PastProjectGallery/ViewPastProject.jsx";
import Surveys from "../views/Surveys/Surveys.jsx";
import NewSurvey from "../views/Surveys/NewSurvey.jsx";
import SurveyResults from "../views/Surveys/SurveyResults.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Client Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/currentprojects",
    sidebarName: "Current Projects",
    navbarName: "Currently Active Projects",
    icon: Book,
    component: CurrentProjects
  },
  {
    path: "/projectmanagement",
    sidebarName: "Project Management",
    navbarName: "Manage Project",
    icon: Book,
    component: ProjectManagement
  },
  {
    path: "/projectmanagement:ID",
    sidebarName: "Project Management",
    navbarName: "Manage Project",
    icon: Book,
    component: ProjectManagement
  },
  {
    path: "/projectproposals",
    sidebarName: "Project Proposals",
    navbarName: "Propose a Project",
    icon: Propose,
    component: ProjectProposals
  },
  {
    path: "/newproposal",
    sidebarName: "New Proposal",
    navbarName: "Create a New Proposal",
    icon: Propose,
    component: NewProposal
  },
  {
    path: "/editproposal",
    sidebarName: "Edit Proposal",
    navbarName: "Edit a Proposal",
    icon: Propose,
    component: EditProposal
  },
  {
    path: "/findateam",
    sidebarName: "Find a team",
    navbarName: "Find a team for a project",
    icon: Find,
    component: FindATeam
  },
  {
    path: "/contactteam",
    sidebarName: "Contact Team",
    navbarName: "Contact a Team",
    icon: Find,
    component: ContactTeam
  },
  {
    path: "/pastprojectgallery",
    sidebarName: "Past Projects",
    navbarName: "Gallery of Past Projects",
    icon: PastProj,
    component: PastProjectGallery
  },
  {
    path: "/viewpastproject",
    sidebarName: "View Past Project",
    navbarName: "View Past Project",
    icon: PastProj,
    component: ViewPastProject
  },
  {
    path: "/newsurvey",
    sidebarName: "Complete a Survey",
    navbarName: "Complete a Survey",
    icon: BubbleChart,
    component: NewSurvey
  },
  {
    path: "/surveys",
    sidebarName: "Surveys",
    navbarName: "Survey Management",
    icon: Survey,
    component: Surveys
  },
  {
    path: "/surveyresults",
    sidebarName: "Survey Results",
    navbarName: "Results of Submitted Surveys",
    icon: Survey,
    component: SurveyResults
  },
  // {
  //   path: "/table",
  //   sidebarName: "Table List",
  //   navbarName: "Table List",
  //   icon: "content_paste",
  //   component: TableList
  // },
  // {
  //   path: "/typography",
  //   sidebarName: "Typography",
  //   navbarName: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography
  // },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  // {
  //   path: "/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  // {
  //   path: "/notifications",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   sidebarName: "Upgrade To PRO",
  //   navbarName: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro
  // },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
