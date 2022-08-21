import { useSelector } from "react-redux"
import './Home.css'
import { useDispatch } from "react-redux/es/exports"
import { cartData, delCartData } from "../Slice"
const Cart=()=>{
    const dispatch=useDispatch()
    const {productsData,elecProductsData,clothProductsData,cartProductsData,loading,mar,cartLoad}=useSelector((state)=>state.productsinfo.data)
    const clsName=()=>{
        if(mar) {
            return 'n'
        } else return 'm'
    }
    const handleCart=(item)=>{
        dispatch(cartData(item))
    }
    const handleCartDel=(item)=>{
        dispatch(delCartData(item))
    }
    return(
        <div style={{marginTop: '100px'}}>
            {
                cartLoad ? <><h1 style={{textAlign: 'center',color: 'red',marginTop: '300px'}}>Your cart is empty!</h1></> : <>
                <div className={`row ${clsName()}`}>
                    {
                    cartProductsData.map((item)=>(
                        <div className="col-sm-12 col-lg-4">
                            <div className="card k1" style={{width: '300px', margin: '7px', borderRadius: '6px'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{border: 'solid', height: '225px',borderRadius: '6px'}}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '90%'}}>{item.pName}</h2>
                                    <p className="card-text">Price: {item.price}
                                    <br/> Manufacturer: {item.manufacturer}
                                    <br/> Expected Delivery Date: {item.expectedDelivery}
                                    <br/> <div style={{textAlign: 'center',marginTop:'20px'}}><button style={{width: '30px',height: '30px',marginRight: '10px'}} onClick={()=>handleCart(item)}>+</button> <b style={{fontSize: '25px'}}>{item.quantity}</b> <button style={{width: '30px',height: '30px',marginLeft: '10px'}} onClick={()=>handleCartDel(item)}>-</button></div>
                                    </p>
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
export default Cart