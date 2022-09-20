import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import { removeCourses,getCourseList,removeFav,postFav,getFavList } from "../Slice"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import './Course.css'
const Course=()=>{
    const dispatch=useDispatch()
    const [flag,setFlag]=useState(false)
    const [renders,setRenders]=useState(false)
    const [flag2,setFlag2]=useState(false)
    const [renders2,setRenders2]=useState(false)
    const {myCourses,userid,favCourses}=useSelector((state)=>state.info.data)
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
        <div>
            <Navbar></Navbar>
            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '100px',marginRight: '100px',padding: '30px',marginTop: '140px',marginBottom: '140px'}}>
                <a style={{position: 'absolute',marginLeft: '900px'}}><Link className="back" to='/user_dashboard'><i className="fa-solid fa-arrow-left-long"></i><h8> Back</h8></Link></a>
                <h4 style={{fontSize: '18px',color: '#5a5a5a',alignSelf: 'flex-start',marginBottom: '40px',marginLeft: '10px'}}>Enrolled Courses</h4>
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
                    {
                        myCourses.map((item)=>(
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
                                <div style={{marginTop: '-60px',marginLeft: '470px'}}>
                                <button className="btn btn-warning" style={{width: '90px',height: '50px',position: 'absolute',marginLeft: '-6px',marginTop: '25px'}}>Start</button>
                                <a style={{marginLeft: '120px',position: 'absolute',marginTop: '45px',color: 'red',cursor: 'pointer'}} onClick={()=>handleDesenroll(item.id)}>Remove</a>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <br/>
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
    )
}
export default Course