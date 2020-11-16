import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import axios from 'axios'
import array from './Array/array';
import Swal from 'sweetalert2';
import '../style.css'


// Shoptrade header part...
export const Header=()=>{

    return(
        <div >
            <div className="d-flex flex-fill bd-highlight ">
                <div className="p-3 flex-fill bd-highlight ">
                    <img src="https://media.glassdoor.com/sqll/2930200/shop-trade-squarelogo-1568197033908.png"
                    // style={{"width":"40px"}}
                    className="logo"
                    />
                    
                </div>
                <div className="p-3 d-flex flex-fill bd-highlight">
                    <div className="title weig">
                        Shop Trade
                    </div>
                </div>
                <div className="p-2 headr flex-fill bd-highlight">
                    <div className=" d-flex bd-highlight">
                        <div className="p-3 bd-highlight weig">Shop</div>
                        <div className="p-3 bd-highlight weig">About us</div>
                        <div className="p-3 bd-highlight weig">Our Store</div>
                        <div className="p-3 bd-highlight weig">Contact us</div>
                    </div>
                </div>
               
                <div className="p-2 bd-highlight weig">
                    <div className="p-2">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton>
                            <PersonOutlineOutlinedIcon/>
                        </IconButton>
                        
                        <Link to='/cart'>
                        <IconButton>
                            <ShoppingCartOutlinedIcon/>
                        </IconButton>
                        </Link>
                       
                    </div> 
                    
                </div>
                
            </div>
            
        </div>
    )
}
// On mobile view Filter menu
const FilterNone=(props)=>{
    const [Show, setShow] = useState("none")
    
    const fun=()=>{
        
        setShow("block")
    }
    const fun1=(e)=>{
        props.filtr(e)
        setShow("none")
    }
    return(
        <>
            <IconButton onClick={fun}>
                <FilterNoneIcon  />
            </IconButton>
            <div className="drpdwn-content" style={{display:Show}}>
                <button className="btn btn1" value="" onClick={fun1}>All Products</button>
                <button className="btn btn1" value="T-shirt" onClick={fun1}>Tee Shirt</button>
                <button className="btn btn1" value="Denim" onClick={fun1}>Denim</button>
                <button className="btn btn1" value="jacket" onClick={fun1}>Jacket</button>
                <button className="btn btn1" value="shirt" onClick={fun1}>shirt</button>
            </div>
          </>  
    )
}
// ON mobile view dropdown menu
const MenuOutLine=()=>{
    const [ShowMenu,setShowMenu]=useState("none")
    const show=()=>{
        setShowMenu("block")
    }
    const hide=()=>{
        setShowMenu("none")
    }

    return(
        <>
            <IconButton onClick={show}>
                    <MenuOutlinedIcon/>
            </IconButton>
            <div className="drpdwn-contentMenu" style={{display:ShowMenu}}>
                <button className="btn btn1" onClick={hide}>Shop</button>
                <button className="btn btn1" onClick={hide}>About us</button>
                <button className="btn btn1" onClick={hide}>Our Stores</button>
                <button className="btn btn1" onClick={hide}>Contact us</button>
                
            </div>
        </>
    )
}
// product cards and list
export const Body=()=>{

    const [Data, setData] = useState()
    const [Filter,setFilter]=useState("")
    const [Product,setProduct]=useState()
    const [Sizee,setSizee]=useState("")

    useEffect( () => {
        Get()
      
    },[])
    
    const ncard=(val)=>{
        
        const setSize=(e)=>{
            var val=e.target.value
            setSizee(val)
    
    
        }
        
        const addCart={
            "img":val.image_src,
            "price":val.price,
            "vendor":val.vendor,
            "name":val.name,
            "size":Sizee
        }
        const cartIt=()=>{
            if(Sizee=="")
            {
                Swal.fire('Please select size')
            }
            else{
                
                array.push(addCart)
            console.log(array);
            }
            setSizee("")
        }
        return(
            <div className="container">
                <div className="card">
                   
                    <img src={val.image_src} alt="product" className="card_img"/>
                    <div className="card_title">{val.vendor} </div>
                    <div className="available">Available</div>
                    <div className="card_info">
                    <div className="card_category">
                        {val.name}
                    </div>
                    <div className="price">{`$${val.price}`} </div>
                    <div className="hovrDiv">
                    <select style={{"marginBottom":"2px"}} onChange={setSize}>
                        <option>--Size--</option>
                        {val.options.map(item=>{
                            return <option value={item.value}>{ item.value} </option>
                        })} 
                    </select>
                        {/* <IconButton onClick={cartIt}>
                            <AddShoppingCartIcon style={{"fontSize":"small","padding":"0px"}} />
                        </IconButton> */}
                    <button className="btnCart" onClick={cartIt}>cart</button>
                    </div>
                    </div>
                </div>
    
            </div>
        )
    
    }

    const Get=async ()=>{
       
        const data1= await axios.get("https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json").then(res =>
         {
            return res.data
         
         })
         setData(eval(data1))
     }
     
     const FunFilter=(e)=>{
        var val=e.target.value
        if(val=="")
        {
            setFilter("")
        }
        if(val=="T-shirt")
        {

            setFilter("/")
            var arr=[]
            Data.map(item=>{
                if(item.tag==val)
                {
                    arr.push(item)
                }
            })
            setProduct(arr)
        }
        if(val=="Denim")
        {

            setFilter("/")
            var arr1=[]
            Data.map(item=>{
                if(item.tag==val)
                {
                    arr1.push(item)
                }
            })
            setProduct(arr1)
        }
        if(val=="shirt")
        {

            setFilter("/")
            var arr2=[]
            Data.map(item=>{
                if(item.tag==val)
                {
                    arr2.push(item)
                }
            })
            setProduct(arr2)
        }
        if(val=="jacket")
        {

            setFilter("/")
            var arr3=[]
            Data.map(item=>{
                if(item.tag==val)
                {
                    arr3.push(item)
                }
            })
            setProduct(arr3)
        }
     }
    return(
        <>
        <div>
        <div style={{"float":"left","width":"100%"}} >
                {
                    array.length!=0?<div className=" p-2 cartStyle"  >{`Cart Items:${array.length}`} </div>:<div className="cartStyle  p-2">{`Cart Items:${array.length}`}</div> 
                }
                <div className="p-3 weig1">
                    FILTERS:
                </div>
                <div className="p-2 justify-content-start filtr">
                    <button className="btn butn" value="" onClick={FunFilter} >All Products</button>
                </div>
                <div className="p-2 justify-content-start filtr">
                    <button className="btn butn" value="T-shirt" onClick={FunFilter}>Tee Shirt</button>
                </div>
                <div className="p-2 justify-content-start filtr">
                    <button className="btn butn" value="Denim" onClick={FunFilter}>Denim</button>
                </div>
                <div className="p-2 justify-content-start filtr">
                    <button className="btn butn" value="jacket" onClick={FunFilter}>Jacket</button>
                </div>
                <div className="p-2 justify-content-start filtr">
                    <button className="btn butn" value="shirt" onClick={FunFilter}>Shirts</button>
                </div>
            </div>
            <div className="dropdwn ">
                
                    <MenuOutLine/>
                    
                    <Link to='/cart'>
                        <IconButton>
                            
                            <ShoppingCartOutlinedIcon/>
                            {
                                array.length!=0?<div className="cartStyle1">{array.length} </div>:""
                            }
                        </IconButton>
                        </Link>
            </div>
            
            <div className="dropdwn1">
                <FilterNone filtr={FunFilter} />
            </div>
            
        </div>
        
        
        <div className="card-div">
        {Data===undefined?<div>Loading</div>:Filter==""?Data.map(ncard):Product.map(ncard)}
        </div>
        </>
    )
}
// Add to cart component
export const Cart=()=>{
    const [CartProduct,setCardProduct]=useState(array);
    const cardCart=(val)=>{
        var index=null,arr=[...CartProduct]
        const DelProduct=(e)=>{
            
            array.map(item=>{
                if(item.vendor==e.target.value)
                {
                    index=arr.indexOf(item)
                    
                }
                
            })
            
            if(index!== -1)
                {
                    arr.splice(index,1)
                    setCardProduct(arr)
                    array.splice(index,1)
                }
                
        }
        const buy=()=>{
            Swal.fire("Thanks for shopping,product on the way")
        }
            return(
                <>
                
                <div className="cards cart-div">
                    <div className="Cartcards" >
                        <img src={val.img} alt="productIMG" className="cart_img"/>
                       <div className="card_info">
                           <div  style={{"fontWeight":"bold"}}>{val.vendor} </div>
                          
                           <div style={{"fontFamily":"monospace"}}>{val.name} </div>
                           <div style={{"fontFamily":"monospace"}}>{`Size:${val.size}`} </div>
                           <div style={{"fontFamily":"monospace"}}>{`$${val.price}`} </div>
                       </div>
                       <button className="btn btn-primary" onClick={buy} style={{"marginBottom":"1px"}}>Buy</button>
                       <button className="btn btn-danger" value={val.vendor} onClick={DelProduct}>Delete</button>
        
                    </div>
                </div>
                </>
            )
        }
    return(
        <>
        
            <div className="cartNav">
            <Link to='/' >  
            <i className="fa fa-angle-left p-2"></i>
            </Link>
            </div>
            <div className="pro">
            {CartProduct==""?<div className="empty"><img src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png"
            className="EmptyCartSize"
            /></div>:CartProduct.map(cardCart)}
            </div>
            
        </>
    )
}



