import axios from 'axios';
import React, { useContext,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../App';
import Footer from '../Shared/Footer/Footer';
import MainHeader from '../Shared/Header/MainHeader';


const Home =()=> {
    const [carryProduct, setCarryProduct] = useContext(productContext);
    const [cart, setCart] = useState([]);
    const [products, setProducts ] = useState([]);
   

    useEffect(() => {
           const fetchProducts = async () => {
            const url =  'https://fakestoreapi.com/products';
            const response = await axios.get(url);            
            setProducts(response.data);
            
           }
           fetchProducts();

    }, [])

   useEffect(()=> {
       setCarryProduct({allProducts: products, cart: cart})
   } ,[setCarryProduct, products, cart])
   
    
    const  handleAddToCart =(product)=> {
        setCart([...cart, {...product, quantity: 1}]);
            
    }

    console.log(carryProduct)

    const renderProducts = products.map(product => {
        const {id, title, image, category,  price} = product;
        return (
            <div className="card mt-3 me-3 p-3 rounded-3" style={{width: '18rem'}} key={product.id}>
                <img src= { image} className="card-img-top" alt={category} style={{width: 260, height:200}} />
                <div className="card-body">
                    <h6 className="card-title"> Title : {title} </h6>
                    <p className="card-text"> <span className="text-warning fs-5">Price</span>: $ {price} </p>
                    <div className="btn-container d-flex">
                    <button className="btn btn-info me-2">
                     <Link className="text-decoration-none" to={`/product/${id}`}> Details </Link>
                     </button>
                    <button  className="btn btn-outline-primary" onClick={()=> handleAddToCart(product) }> Add To Cart </button>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
       <div className="main">
           <MainHeader/>     
            <div className="products-container">
            <h1 className="text-center text-info" style={{paddingTop: '50px'}}> Our Online Products  </h1>
                <div className="d-flex justify-content-center flex-wrap mt-2 ms-3" >
                    {renderProducts}
                </div>
            </div>
            <Footer/>
       </div>
    )
}
export default Home;