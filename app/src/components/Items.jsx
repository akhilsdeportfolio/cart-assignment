
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { cartContext } from "../contexts/CartContext"

export default()=>{

     const {items,setItems,dec_quantity,inc_quantity,cartDetails,setCartDetails,addToCart}=useContext(cartContext);


     useEffect(()=>{
          setItems([...items,{id:1,name:'biriyani',price:300,img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",quantity:1},{id:123,name:'biriyani',price:300,img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",quantity:3},{id:123243,name:'biriyani',price:300,img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",quantity:1}]);
          
     },[])
     
     
     //console.log(setItems);

     return(<>

               <div className="container-fluid" style={{margin:'auto',width:'70%'}}>
                    <div className="row">
                         {items.map((el)=>{
                              return <div className="col-lg-3" style={{display:'flex',flexDirection:'column',margin:'2px',backgroundColor:'whitesmoke',border:'1px solid white',padding:'0px'}}>                                        
                                             <img src={el.img} className="img-responsive" style={{width:'100%',maxHeight:'350px'}}/>
                                             <h5 style={{margin:'20px'}}>{el.name}</h5>
                                             <div style={{display:'flex',marginLeft:'20px',gap:'20px',textAlign:'right',float:'right'}}>
                                             <button className="btn btn-sm btn-secondary" onClick={()=>{
                                                  dec_quantity(el.id);
                                             }}>-</button>                                     
                                             {el.quantity}   
                                             <button className="btn btn-sm btn-secondary" onClick={()=>{
                                                  inc_quantity(el.id);
                                             }}>+</button>                                        
                                             <button className="btn btn-sm btn-primary" onClick={()=>{
                                                  addToCart(el);
                                             }}>Add to cart</button>                                        
                                             </div>                                    
                                             <div style={{clear:'both'}}/>
                                             <br/>              
                                             
                                   </div>
                         })}
                    </div>

                    <div className="container">
                         <Link to="/cartDetails"><button className="btn btn-secondary btn-block" >Checkout</button></Link>
                    </div>
               </div>
                    

          </>)
}