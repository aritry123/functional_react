import React from 'react';
import Navbar from "./Navbar"
import './User.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { get, getCourseList, getCourses, getFavList, postCourses, postFav, removeCourses, removeFav, setuserid } from "../Slice"
const User=()=>{
    const dispatch=useDispatch()
    const location=useLocation()
    const {courseDetails,loadCourses,users,myCourses,userid,favCourses}=useSelector((state)=>state.info.data)
    const [flag,setFlag]=useState(false)
    const [renders,setRenders]=useState(false)
    const [flag2,setFlag2]=useState(false)
    const [renders2,setRenders2]=useState(false)
    const [sorted,setSorted]=useState([])
    const [active,setActive]=useState(false)
    const [selected,setSelected]=useState("All Courses")
    const [search,setSearch]=useState('')
    const [searched,setSearched]=useState(false)
    const [searchList,setSearchList]=useState([])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    useEffect(()=>{
        dispatch(getCourses())
        // dispatch(setuserid(location.state.id))
        axios.get('http://localhost:3001/empDetails').then((res)=>setSorted(res.data)).catch((err)=>console.log(err))
    },[])
    useEffect(()=>{
        // dispatch(getCourseList(userid))
        dispatch(getCourseList(localStorage.getItem('userid')))
        setRenders(!renders)
    },[flag])
    useEffect(()=>{
        // dispatch(getFavList(userid))
        dispatch(getFavList(localStorage.getItem('userid')))
        setRenders2(!renders2)
    },[flag2])
    const handleChoose=()=>{
        setActive(!active)
    }
    const handleItem=(e)=>{
        setSearched(false)
        setSelected(e.target.textContent)
        if(e.target.textContent==='Ratings') {
            setSorted(sorted.sort((a,b)=>Number(b.rating)-Number(a.rating)))
        }
        if(e.target.textContent==='Names') {
            setSorted(sorted.sort((a,b)=>a.title.localeCompare(b.title)))
        }
        setActive(!active)
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        if(!search) return alert("Empty field!")
        else {
            setSearched(true)
            setSearchList(courseDetails.filter((item)=>item.title===search))
            setSearch('')
        }
    }
    const handleKey=(e)=>{
        if(e.key==='Enter') {
            e.preventDefault()
            if(!search) return alert("Empty field!")
            else {
                setSearched(true)
                setSearchList(courseDetails.filter((item)=>item.title===search))
                setSearch('')
            }
        }
    }
    const handleEnroll=(item)=>{
        setFlag(!flag)
        // dispatch(postCourses({id:userid,item:item}))
        dispatch(postCourses({id:localStorage.getItem('userid'),item:item}))
    }
    const handleDesenroll=(itemid)=>{
        setFlag(!flag)
        // dispatch(removeCourses({id:userid,itemid:itemid}))
        dispatch(removeCourses({id:localStorage.getItem('userid'),itemid:itemid}))
    }
    const handleLove=(item)=>{
        setFlag2(!flag2)
        // dispatch(postFav({id:userid,item:item}))
        dispatch(postFav({id:localStorage.getItem('userid'),item:item}))
        // toast("Added to your favourites!",{
        //     className: "custom-toast",
        //     draggable: true,
        //     position: toast.POSITION.BOTTOM_CENTER
        // })
    }
    const handleUnlove=(itemid)=>{
        setFlag2(!flag2)
        // dispatch(removeFav({id:userid,itemid:itemid}))
        dispatch(removeFav({id:localStorage.getItem('userid'),itemid:itemid}))
    }
    return(
        <div className="over">
            <Navbar></Navbar>
            <div style={{marginTop: '140px'}}>
                <h2 style={{fontSize: '28px',marginLeft: '120px',marginBottom: '10px',textShadow: '1px 1px #888888'}}><b>Dashboard</b></h2>
                <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '100px',marginRight: '100px',padding: '30px'}}>
                    <div style={{display: 'flex'}}>
                        <h4 style={{fontSize: '18px',color: '#5a5a5a',alignSelf: 'flex-start'}}>Enrolled Courses</h4>
                        <div style={{alignSelf: 'flex-start',marginLeft: '750px',cursor: 'pointer'}}>
                        <Link className="link" to='/user_courses'><h4 style={{fontSize: '15px'}}>See All <i className="fa fa-thin fa-angles-right"></i></h4></Link>
                        </div>
                    </div>
                    <hr
                        style={{
                            color: 'grey',
                            backgroundColor: 'grey',
                            height: 1
                        }}
                    />
                    {
                        myCourses.length===0?<>
                        <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                            <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                            <br></br>
                            <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                        </div>
                        </>:<>
                        <div style={{display: 'flex'}}>
                        {
                        myCourses.map((item,index)=>(
                            <>
                            {
                                index<4?<>
                                <div className="col-sm-12 col-lg-3">
                                <div className="card b" style={{width: '220px',height: '340px', margin: '7px', marginRight: '100px'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{minHeight: '140px'}}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '100%',fontFamily: 'serif'}}><b>{item.title}</b></h2>
                                    <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">{item.teacher}</h8>
                                    <br/>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star" style={{color: '#ffa700'}}></i>
                                    {
                                        favCourses.find((i)=>i.id===item.id)!==undefined?<i onClick={()=>handleUnlove(item.id)} style={{position: 'absolute',marginLeft: '10px',fontSize: '150%',color: 'red',cursor: 'pointer'}} className="fa-solid fa-heart"></i>:<i onClick={()=>handleLove(item)} style={{position: 'absolute',marginLeft: '10px',fontSize: '150%',cursor: 'pointer'}} className="fa-regular fa-heart"></i>
                                    }
                                    <br/>
                                    <button className="btn btn-warning" style={{width: '90px',height: '50px',position: 'absolute',marginLeft: '-6px',marginTop: '10px'}}>Start</button>
                                    <a style={{marginLeft: '120px',position: 'absolute',marginTop: '30px',color: 'red',cursor: 'pointer'}} onClick={()=>handleDesenroll(item.id)}>Remove</a>
                                </div>
                                </div>
                                </div>
                                </>:<></>
                            }
                            </>
                        ))
                        }
                        </div>
                        </>
                    }
                </div>
                {/* <i style={{marginLeft: '14px',position: 'absolute',marginTop: '312px',fontSize: '25px',color: '#888888'}} className="fa fa-solid fa-circle"></i>
                <i style={{marginLeft: '1236px',position: 'absolute',marginTop: '311px',fontSize: '26px',color: '#888888'}} className="fa fa-solid fa-circle"></i> */}
                <div style={{marginLeft: '12px',marginTop: '80px'}}>
                    <h3 style={{marginLeft: '40px'}}><b>Courses to get you started</b></h3>
                    <div style={{margin: '30px'}}>
                    <Slider {...settings}>
                    {
                        courseDetails.map((item)=>(
                            <div className="col-sm-12 col-lg-3">
                            <div className="card b" style={{width: '220px',height: '370px', margin: '7px', marginRight: '100px'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{minHeight: '140px'}}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '100%',fontFamily: 'serif'}}><b>{item.title}</b></h2>
                                    <a style={{fontSize: '74%',color: '#107869'}}>Updated {item.date}</a>
                                    <br/>
                                    <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">{item.teacher}</h8>
                                    <br/>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star" style={{color: '#ffa700'}}></i>
                                    <br/>
                                    {/* <p className="hell"><h3 className="clr" style={{fontSize: '15px'}}>See More <i className="fa-sharp fa-solid fa-chevron-up"></i></h3></p> */}
                                    {/* favourite button */}
                                    {/* <button className="btn btn-warning" style={{width: '130px',height: '50px'}}>Enroll Now</button> */}
                                    {/* <i style={{marginLeft: '160px',fontSize: '130%',color: 'grey'}} className="fa-solid fa-comments"></i> */}
                                </div>
                                <div>
                                {
                                    myCourses.find((i)=>i.id===item.id)!==undefined?<button className="btn btn-warning" style={{width: '130px',height: '50px',marginLeft: '10px',marginBottom: '10px'}} onClick={()=>handleDesenroll(item.id)}>Desenroll</button>:<button className="btn btn-warning" style={{width: '130px',height: '50px',marginLeft: '10px',marginBottom: '10px'}} onClick={()=>handleEnroll(item)}>Enroll</button>
                                }
                                {
                                    favCourses.find((i)=>i.id===item.id)!==undefined?<i onClick={()=>handleUnlove(item.id)} style={{marginLeft: '42px',position: 'absolute',zIndex: '1',marginTop: '15px',fontSize: '150%',color: 'red',cursor: 'pointer'}} className="fa-solid fa-heart"></i>:<i onClick={()=>handleLove(item)} style={{marginLeft: '42px',position: 'absolute',zIndex: '1',marginTop: '15px',fontSize: '150%',cursor: 'pointer'}} className="fa-regular fa-heart"></i>
                                }
                                </div>
                                {/* <button className="btn btn-warning" style={{width: '130px',height: '50px',marginLeft: '10px',marginBottom: '10px'}} onClick={()=>handleEnroll(item)}>Enroll</button> */}
                            </div>
                        </div>
                        ))
                    }
                    </Slider>
                    </div>
                </div>
                <div style={{marginTop: '60px'}}>
                    <div className="dropdown">
                        <h5>Sort by <i className="fa-solid fa-angles-right"></i></h5>
                        <div className="dropdown-btn" onClick={handleChoose}>{selected} <span className="fas fa-caret-down"></span></div>
                        {active&&(
                            <div className="dropdown-content">
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    Names
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    Ratings
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    All Courses
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="search" style={{marginLeft: '450px',width: '500px',position: 'absolute',marginTop: '-58px'}}>
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" placeholder="Search courses here" onChange={(e)=>handleChange(e)} value={search} onKeyDown={(e)=>handleKey(e)}/>
                        <button className="btn btn-success" onClick={(e)=>handleSearch(e)}>Search</button>
                    </div>
                    <h5 style={{marginLeft: '1100px',color: 'grey'}}><b>{searched?searchList.length:courseDetails.length} results</b></h5>
                </div>
                <div style={{margin: '30px'}}>
                    {
                        searched?<>
                        {
                            searchList.length!==0?<>
                            {
                            searchList.map((item)=>(
                            <>
                            <div style={{display: 'flex'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{height: '220px',width: '305px',margin: '10px'}}></img>
                                <div style={{margin: '10px'}}>
                                    <div style={{display: 'flex'}}>
                                    <h5><b>{item.title}</b></h5>
                                    {
                                        favCourses.find((i)=>i.id===item.id)!==undefined?<i onClick={()=>handleUnlove(item.id)} style={{marginLeft: '15px',fontSize: '150%',color: 'red',cursor: 'pointer'}} className="fa-solid fa-heart"></i>:<i onClick={()=>handleLove(item)} style={{marginLeft: '15px',fontSize: '150%',cursor: 'pointer'}} className="fa-regular fa-heart"></i>
                                    }
                                    </div>
                                    <a>{item.description} <a style={{fontSize: '74%',color: '#107869'}}>(Updated {item.date})</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}>{item.teacher}</a>
                                    <br/>
                                    <a style={{fontSize: '70%'}}><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point1}<br/><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point2}<br/><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point3}</a>
                                    <br/>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star" style={{color: '#ffa700'}}></i>
                                    <a style={{fontSize: '80%',color: 'grey'}}> ({item.rating})</a>
                                    <br/>
                                    <a style={{fontSize: '80%'}}>Live sessions are available!</a>
                                    {
                                        myCourses.find((i)=>i.id===item.id)!==undefined?<button onClick={()=>handleDesenroll(item.id)} style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '130px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Desenroll</button>:<button onClick={()=>handleEnroll(item)} style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '115px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Enroll</button>
                                    }
                                    {/* <button style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '115px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Enroll</button> */}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <hr
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'grey',
                                    height: 1
                                }}
                                />
                            </div>
                            </>
                            ))
                            }
                            </>:<>
                            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '100px',marginRight: '100px',padding: '30px'}}>
                                <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                                    <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                                    <br></br>
                                    <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                                </div>
                            </div>
                            </>
                        }
                        </>:<>
                        {
                        selected==='All Courses'?<>
                        {
                            courseDetails.map((item)=>(
                            <>
                            <div style={{display: 'flex'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{height: '220px',width: '305px',margin: '10px'}}></img>
                                <div style={{margin: '10px'}}>
                                    <div style={{display: 'flex'}}>
                                    <h5><b>{item.title}</b></h5>
                                    {
                                        favCourses.find((i)=>i.id===item.id)!==undefined?<i onClick={()=>handleUnlove(item.id)} style={{marginLeft: '15px',fontSize: '150%',color: 'red',cursor: 'pointer'}} className="fa-solid fa-heart"></i>:<i onClick={()=>handleLove(item)} style={{marginLeft: '15px',fontSize: '150%',cursor: 'pointer'}} className="fa-regular fa-heart"></i>
                                    }
                                    </div>
                                    <a>{item.description} <a style={{fontSize: '74%',color: '#107869'}}>(Updated {item.date})</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}>{item.teacher}</a>
                                    <br/>
                                    <a style={{fontSize: '70%'}}><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point1}<br/><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point2}<br/><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point3}</a>
                                    <br/>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star" style={{color: '#ffa700'}}></i>
                                    <a style={{fontSize: '80%',color: 'grey'}}> ({item.rating})</a>
                                    <br/>
                                    <a style={{fontSize: '80%'}}>Live sessions are available!</a>
                                    {
                                        myCourses.find((i)=>i.id===item.id)!==undefined?<button onClick={()=>handleDesenroll(item.id)} style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '130px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Desenroll</button>:<button onClick={()=>handleEnroll(item)} style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '115px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Enroll</button>
                                    }
                                    {/* <button style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '115px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Enroll</button> */}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <hr
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'grey',
                                    height: 1
                                }}
                                />
                            </div>
                            </>
                            ))
                        }
                        </>:<>
                        {
                            sorted.map((item)=>(
                            <>
                            <div style={{display: 'flex'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{height: '220px',width: '305px',margin: '10px'}}></img>
                                <div style={{margin: '10px'}}>
                                    <div style={{display: 'flex'}}>
                                    <h5><b>{item.title}</b></h5>
                                    {
                                        favCourses.find((i)=>i.id===item.id)!==undefined?<i onClick={()=>handleUnlove(item.id)} style={{marginLeft: '15px',fontSize: '150%',color: 'red',cursor: 'pointer'}} className="fa-solid fa-heart"></i>:<i onClick={()=>handleLove(item)} style={{marginLeft: '15px',fontSize: '150%',cursor: 'pointer'}} className="fa-regular fa-heart"></i>
                                    }
                                    </div>
                                    <a>{item.description} <a style={{fontSize: '74%',color: '#107869'}}>(Updated {item.date})</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}>{item.teacher}</a>
                                    <br/>
                                    <a style={{fontSize: '70%'}}><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point1}<br/><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point2}<br/><i style={{fontSize: '50%'}} className="fa-solid fa-circle"></i> {item.point3}</a>
                                    <br/>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star" style={{color: '#ffa700'}}></i>
                                    <a style={{fontSize: '80%',color: 'grey'}}> ({item.rating})</a>
                                    <br/>
                                    <a style={{fontSize: '80%'}}>Live sessions are available!</a>
                                    {
                                        myCourses.find((i)=>i.id===item.id)!==undefined?<button onClick={()=>handleDesenroll(item.id)} style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '130px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Desenroll</button>:<button onClick={()=>handleEnroll(item)} style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '115px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Enroll</button>
                                    }
                                    {/* <button style={{marginLeft: '550px',marginTop: '-30px',height: '55px',width: '115px'}} className="btn btn-outline-warning"><i className="fa-solid fa-plus"></i> Enroll</button> */}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <hr
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'grey',
                                    height: 1
                                }}
                                />
                            </div>
                            </>
                            ))
                        }
                        </>
                        }
                        </>
                    }
                </div>
                <div style={{backgroundColor: 'black',width: '100%',height: '100px',boxShadow: '0px 0px 5px 0px #888888'}}>
                    <div style={{display: 'flex'}}>
                        <img style={{marginTop: '32px',marginLeft: '10px'}} src="https://learnifyme.com/pluginfile.php/1/core_admin/logocompact/300x300/1658463070/Group%203%403x.png"></img>
                        <a style={{marginTop: '40px',marginLeft: '20px',color: 'white'}}><img style={{width: '20px',height: '20px'}} src="https://i.pinimg.com/originals/2b/dc/78/2bdc78b6c227760fca29334de506d739.png"></img> aritrysamaddar@gmail.com</a>
                        <a style={{marginTop: '40px',marginLeft: '20px',color: 'white'}}><img style={{width: '20px',height: '20px'}} src="https://www.pngitem.com/pimgs/m/217-2172854_transparent-telephone-icon-png-phone-vector-icon-png.png"></img> 7005687322 / 9345627345</a>
                        <a style={{marginTop: '40px',marginLeft: '20px',color: 'white'}}><img style={{width: '20px',height: '20px'}} src="https://www.kindpng.com/picc/m/35-350659_linkedin-icon-vector-png-linkedin-logo-circle-transparent.png"></img> https://www.linkedin.com/in/aritry-334a111ba</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User