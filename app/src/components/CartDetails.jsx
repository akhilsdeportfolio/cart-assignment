import { useContext } from "react"
import { cartContext } from "../contexts/CartContext"


export default ()=>{

     let {cartDetails} = useContext(cartContext);


     console.log(cartDetails);

     return(<div style={{width:'100%',margin:'auto'}}>

          <h1 style={{textAlign:'center'}}>Invoice</h1>
          <table className="table table-bordered" style={{width:'100%'}}>
               <thead>
                    <tr>
                         <td>ID</td>
                         <td>Name</td>
                         <td>Quantity</td>
                         <td>Price</td>
                    </tr>
               </thead>

               <tbody>                    
                    {cartDetails.map((el)=>{
                         return <tr>
                                   <td>{el.id}</td>
                                   <td>{el.name}</td>
                                   <td>{el.quantity}</td>
                                   <td>{el.price}</td>

                              </tr>
                    })}

                    <tr>
                         <td colSpan="2">Total</td>
                         <td colSpan="1">{cartDetails.map((el)=>el.quantity).reduce((ac,el)=>ac+el)}</td>
                         <td>{cartDetails.map((el)=>el.price).reduce((ac,el)=>ac+el)}</td>
                    </tr>
               </tbody>
          </table>
     </div>)
}