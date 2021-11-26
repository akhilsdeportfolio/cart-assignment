import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import { cartContext, cartContextProvider } from './contexts/CartContext';
import { useState } from 'react';
import Items from './components/Items';
import CartDetails from './components/CartDetails';

function App() {
    const [items,setItems]=useState([]);
    const [cartDetails,setCartDetails]=useState([]);
    const dec_quantity =(id)=>{


        
        
        let data=items.map((el)=>{
          if(el.id===id)
          {
            if(el.quantity > 1)
            {
              el.quantity=el.quantity-1;
            };
    
            return el;
          }
          else{
            return el;
          }
        });

       setItems(data) ;
    }
    const inc_quantity =(id)=>{
        

        
        
      let data=items.map((el)=>{
        if(el.id===id)
        {
          
            el.quantity=el.quantity+1;          
  
          return el;
        }
        else{
          return el;
        }
      });

     setItems(data) ;
    }

    const addToCart = (data)=>{
        setCartDetails([...cartDetails,data]);
    }

  return (
    <cartContext.Provider value={{items,cartDetails,setItems,setCartDetails,dec_quantity,inc_quantity,addToCart}}>
    <Switch>
          <Route exact path="/">
              <Redirect to="/items"></Redirect>    
          </Route>
          <Route  path="/items">
              <Items/>
          </Route>
          <Route  path="/cartDetails">
              <CartDetails/>
          </Route>


    </Switch>
    </cartContext.Provider>
  );
}

export default App;
