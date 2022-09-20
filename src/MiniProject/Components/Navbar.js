import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signoutUsers } from '../Slice'
import './Navbar.css'
const Navbar=()=>{
    const [flag,setFlag]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleProfile=()=>{
        setFlag(!flag)
    }
    const handleFav=(e)=>{
        setFlag(!flag)
        if(e.target.textContent==='Favourite List') navigate('/favourite_list')
        if(e.target.textContent==='Enrolled Courses') navigate('/user_courses')
        if(e.target.textContent==='Dashboard') navigate('/user_dashboard')
        if(e.target.textContent==='Home') navigate('/user_home')
        if(e.target.textContent==='Log Out') {
            dispatch(signoutUsers())
            localStorage.removeItem('userid')
            navigate('/')
        }
    }
    const navLinkStyles = ({isActive})=>{
        return {
            // fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            color: isActive ? 'violet' : 'black',
            fontSize: isActive ? '13px' : '13px',
            // borderStyle: isActive ? 'solid' : '',
            padding: isActive ? '20px' : '20px',
            // boxShadow: isActive ? '0px 0px 5px 0px #888888' : '',
            // borderRadius: isActive ? '5px' : '',
            borderBottom: isActive ? '3px solid #5A0C5A' : '',
            backgroundColor: isActive ? '#E6E6E6' : ''
        }
    }
    return(
        <div>
            <div className="navbar">
                <img className='image' src='https://learnifyme.com/pluginfile.php/1/core_admin/logocompact/300x300/1658463070/Group%203%403x.png' alt='img'></img>
                <NavLink to='/user_home' style={navLinkStyles} className="n m"><b>Home</b></NavLink>
                <NavLink to='/user_dashboard' style={navLinkStyles} className="n m"><b>Dashboard</b></NavLink>
                <NavLink to='/user_courses' style={navLinkStyles} className='n m'><b>My Courses</b></NavLink>
                <div onClick={handleProfile} style={{cursor: 'pointer'}}>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt='img' style={{borderRadius: '50%',width: '40px',height: '40px',marginLeft: '520px'}}></img><i style={{color: 'black',margin: '10px',fontSize: '18px'}} className="fa-solid fa-caret-down"></i>
                </div>
            </div>
            {
                flag&&(
                    <div className='profile-dropdown'>
                        <div className='profile-dropdown-items'>
                            {/* theme,popout/toast,yes/no,edit mode on profile */}
                            Profile
                        </div>
                        <div onClick={(e)=>handleFav(e)} className='profile-dropdown-items'>
                            Favourite List
                        </div>
                        <div onClick={(e)=>handleFav(e)} className='profile-dropdown-items'>
                            Enrolled Courses
                        </div>
                        <div onClick={(e)=>handleFav(e)} className='profile-dropdown-items'>
                            Dashboard
                        </div>
                        <div onClick={(e)=>handleFav(e)} className='profile-dropdown-items'>
                            Home
                        </div>
                        <hr
                            style={{
                                color: '#999',
                                backgroundColor: '#999',
                                height: 1
                            }}
                        />
                        <div onClick={(e)=>handleFav(e)} className='profile-dropdown-items'>
                            Log Out
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Navbar