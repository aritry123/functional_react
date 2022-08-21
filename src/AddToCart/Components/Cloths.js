import { useSelector } from "react-redux"
import { useDispatch } from "react-redux/es/exports"
import { cartData } from "../Slice"
import './Home.css'
const Cloths=()=>{
    const dispatch=useDispatch()
    const {productsData,elecProductsData,clothProductsData,cartProductsData,loading,mar,cartLoad}=useSelector((state)=>state.productsinfo.data)
    const clsName=()=>{
        if(mar) {
            return 'n'
        } else return 'm'
    }
    const handleCart=(item)=>{
        dispatch(cartData(item))
        alert("Product is added to your cart!")
    }
    return(
        <div style={{marginTop: '100px'}}>
            {
                loading ? <></> : <>
                <div className={`row ${clsName()}`}>
                    {
                    clothProductsData.map((item)=>(
                        <div className="col-sm-12 col-lg-4">
                            <div className="card k1" style={{width: '300px', margin: '7px', borderRadius: '6px'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{border: 'solid', height: '225px',borderRadius: '6px'}}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '90%'}}>{item.pName}</h2>
                                    <p className="card-text">Price: {item.price}
                                    <br/> Manufacturer: {item.manufacturer}
                                    <br/> Expected Delivery Date: {item.expectedDelivery}
                                    </p>
                                </div>
                                <button className="k btn btn-primary" type="button" style={{width: '150px', marginLeft: '65px', backgroundColor: '#ffa700'}} onClick={()=>handleCart(item)}>
                                Add To Cart
                                </button>
                                <div className="card-body x" style={{textAlign: 'center'}}>
                                <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" style={{width: '100px'}}><p className="d k"><u>See More</u><i className="fa-solid fa-angle-up"></i></p></a>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                </>
            }
        </div>
    )
}
export default Cloths