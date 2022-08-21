import React from "react";
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as CgIcons from 'react-icons/cg';
export const SidebarData=[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Electronics',
        path: '/electronics',
        icon: <MdIcons.MdOutlineLaptopWindows/>,
        cName: 'nav-text'
    },
    {
        title: 'Cloths',
        path: '/cloths',
        icon: <GiIcons.GiClothes/>,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
    },
    {
        title: 'Your Cart',
        path: '/cart',
        icon: <AiIcons.AiOutlineShoppingCart/>,
        cName: 'nav-text'
    }
]