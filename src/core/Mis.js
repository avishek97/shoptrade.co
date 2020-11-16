
// Mislenous works

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

.cards{
    width:100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    /* display: contents; */
    
   
}

.card{
     margin:2%;
    transition: all 0.4s cubic-bezier(0.175,0.885,0,0);
    background-color: #fff;
    width:21%;
    border-radius: 5px;
    box-shadow: 0px 13px 10px -7px rgba(0,0,0,0.1);
    float: left; 
    
    /* margin:20px */
}



// cssssssss



/* Headers bro */
.weig{
    font-weight: bold ;
}
.weig1{
    font-weight: bold ;
    float: left;
}

.weig2{
    justify-content: end;
}

.butn{
    border-radius: 1rem;
    background-color: antiquewhite;
}
.filtr{
    opacity: 0.8;
    float: left;

}

.logo{
    width: 40px;
}
.dropdwn{
    color:black;
    font-size: 2rem;
    position: absolute;
    top: 5px;
    right: 20px;
    display: none;
    
}
.dropdwn1{
    display: none;
    color:black;
    font-size: 2rem;
    position: absolute;
}
.title{
    display: none;
}

.drpdwn {
    position: relative;
    display: inline-block;
  }
  
  .drpdwn-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    /* padding: 12px 16px; */
    z-index: 1;
  }
  .drpdwn-contentMenu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    right: 1px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    /* padding: 12px 16px; */
    z-index: 1;
  }
  .btn1{
    min-width: 120px;
    
  }

  .divider{
    border-top: 2px solid #bbb;
    
  }
  .fix{
      position: fixed;
      overflow: hidden;
      z-index: 1;
      top: 0;
  }
/* cart it bro */
  .cartStyle{
      float: right;
      background-color: darkkhaki;
      border-radius: 1rem;
      margin-right: 15px;
  }
 .cartStyle1{
     suffix: -o-linear-gradient();
     font-weight: bolder;
     font-size: small;
     color:maroon;
 }
.cartCards{
    width: 100%;
    height: auto;
}
.cart-div{
    margin-top: 15px;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
}

.cart_img{
    
    height: 50vh;
   max-width: 100%;
    margin: 5px ;
}
.cartDesp{
    margin: 5px;
    border-radius: 1rem;
    width: auto;
}
.cartNav{
    width: 100%;
    height: 5%;
    background-color: bisque;
    box-shadow: 5px 10px 8px #e7e6e6;
    position: fixed;
    overflow: hidden;
    top: 0;
    z-index: 5;
}
.pro{
  margin-top: 0px;  
}
.available{
    display: none;
}

.empty{
    /* margin: 30vh 30vw auto;
     */
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     transform: -webkit-translate(-50%, -50%);
     transform: -moz-translate(-50%, -50%);
     transform: -ms-translate(-50%, -50%);
     color:darkred;
}
.EmptyCartSize{
    width: 200px;
    height: auto;

    margin-left: 20px;
}
/* Cards */

.cards{
    width:100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    /* display: contents; */
    
   
}

.card{
     margin:2%;
    transition: all 0.4s cubic-bezier(0.175,0.885,0,0);
    background-color: #fff;
    width:21%;
    border-radius: 5px;
    box-shadow: 0px 13px 10px -7px rgba(0,0,0,0.1);
    float: left; 
    
    /* margin:20px */
}
.card button {
    display: none;
    /* margin-right: 1px; */
    /* background-color: gray; */
    
}

.card:hover button{
    display: inline;
    border-radius: 1rem;
    padding-left: 5px;
    padding-right: 5px;
    background-color: cornflowerblue;
}
.card:hover .available{
    display: inline;
    margin-top: 5px;
    margin-bottom: 0px;
    
    background-color:green;
    text-transform: capitalize;
    text-align: center;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.card:hover .card_title{
    display: none;
}
.hovrDiv{

    width: 100%;
    height: 20px;
    
}
.btnCart{
    font-size:small ;
    margin-left: 3px;
    
    
}
.card_img{
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.card_info{
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
    overflow: hidden;
}
.card_category{
    font-family: "Raleway",sans-serif;
    text-transform: uppercase;
    font-size: 9px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
    background-color: #fff;
    background:linear-gradient(rgba(0,0,0,0));
    overflow: hidden;

}
.card_title{
    margin-top: 5px;
    margin-bottom: 0px;
    
    background-color: #fff;
    text-transform: capitalize;
    text-align: center;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.price{
    font-weight: bolder;
}

/* Laptop */



@media (max-width:850px){
    .dropdwn{
        display: none;
    }
    .dropdwn1{
        display: none;
    }
}

/* mobile */
@media (max-width:810px){
    .weig{
        display: none;
    }
    .weig1{
        display: none;
    }
    .filtr{
        display: none;
    }
    .logo{
        width:30px;
    }
    .dropdwn{
        display: block;
    }
    .dropdwn1{
        display: block;
    }
    .title{
        display: block;
        float: left;
    }
    .card{
        width: 100%;
        margin-left: 2px;
        margin-right: 0px;
    }
    .card_img{
        width: 100%;
    height: 50vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    }
    .card button{
        display: inline;
        margin-right: 5px;
    }
    .card-div{
        left: 0px;
        margin-top: 50px;
        
    }
    .cartStyle{
        display: none;
    }
    .cart-div{
        margin-top: 40px;
    }
    
  
}