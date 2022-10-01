import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';



export const SidebarData = [
 
  {
    title: 'About',
    path: '/',
    icon: <FaIcons.FaAddressCard/>,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaMailBulk/>,
    cName: 'nav-text'
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <FaIcons.FaFolder/>,
    cName: 'nav-text'
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <FaIcons.FaFile/>,
    cName: 'nav-text'
  }
 
];