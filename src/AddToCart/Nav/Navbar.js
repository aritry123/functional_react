import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { searchData, setMar } from "../Slice";
const Navbar=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [sidebar,setSidebar]=useState(false)
    const [inp,setInp]=useState('')
    const showSidebar=()=>{
        setSidebar(!sidebar)
        dispatch(setMar(sidebar))
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        if(inp==='') return alert("Field empty!")
        dispatch(searchData(inp))
        setInp('')
        navigate('/search')
    }
    const handleChange=(e)=>{
        setInp(e.target.value)
    }
    const handleKey=(e)=>{
        if(e.key==='Enter') {
            e.preventDefault()
            dispatch(searchData(inp))
            setInp('')
            navigate('/search')
        }
    }
    return(
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
            {/* <h1>Hello</h1> */}
            {/* <nav className="navbar navbar-expand-lg navbar-mainbg">
                <NavLink className="navbar-brand navbar-logo">Home</NavLink>
            </nav> */}
            <div className="navbar">
                <Link to='#' className="menu-bars"><FaIcons.FaBars onClick={showSidebar}/></Link>
                {/* <Link to='#' className="menu-bars-two"><GoIcons.GoKebabVertical/></Link> */}
                <div className="search" style={{marginLeft: '300px',width: '500px'}}>
                    <i className="fa fa-search"></i>
                    <input type="text" className="form-control" placeholder="Search products here" onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKey(e)} value={inp}/>
                    <button className="btn btn-primary" onClick={(e)=>handleSearch(e)}>Search</button>
                </div>
                <button className="menu-bars-two btn btn-outline-danger"><MdIcons.MdLogout style={{marginRight: '10px'}}/>Logout</button>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className="menu-bars"><AiIcons.AiOutlineClose/></Link>
                    </li>
                    {
                        SidebarData.map((item,index)=>{
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            </IconContext.Provider>
        </div>
    )
}
export default Navbar