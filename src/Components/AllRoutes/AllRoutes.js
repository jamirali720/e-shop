import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import ProductDetails from '../Products/ProductDetails';
import Footer from '../Shared/Footer/Footer';
import MiddleHeader from '../Shared/Header/MiddleHeader';
import TopHeader from '../Shared/Header/TopHeader';



const AllRoutes = () => {    


    return (
        <div>
            <TopHeader/>
            <MiddleHeader/>            
            <Routes>                
                <Route path="/" element={< Home />} />
                <Route path="/product/:productId" element={< ProductDetails />} />
                <Route  path="/footer" element={<Footer />} />
                <Route  path="/cart" element={<Cart />} />
            </Routes>
            
        </div>
    );
};

export default AllRoutes;