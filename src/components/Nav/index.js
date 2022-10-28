import React  from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import * as AiIcons from 'react-icons/ai';
// import { IconContext } from 'react-icons';
import './nav.css'
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import { Component } from "react";
// import 'font-awesome/css/font-awesome.min.css';



class Navigation extends Component {
  state= {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
       <Link style={{textDecoration: 'none'}} to="/DowntonAbe"> <h1
        className="myname">mackenzie giesler-abe
        </h1>
        </Link>
        <div className="menu-icons"
        onClick={this.handleClick}>
        <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {SidebarData.map((item, index) => {
            return(
              <li key={index}>
              <a href={item.url}
              className={item.cName}>
               <i className={item.icon}></i>{item.title}
               </a>
               </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

// function Navigation() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>

//           <Link to='#' className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//           <div className="name-header">
//             <p className="name">mackenzie giesler-abe</p>
//           </div>
//         </div>
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

export default Navigation;