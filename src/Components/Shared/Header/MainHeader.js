import React, { Component } from 'react'
import Slider from "react-slick";

export class MainHeader extends Component {
    constructor(props) {
        super(props) ;
        this.state ={
            products: [],
            slides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12, 13, 14, 15, 16,17,18,19,20],
        }
     
    }
    
  

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => this.setState({products}))
    }
    render() {

        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
           
          };

        const { products } = this.state;
      
      
        return (
            <div className='bg-primary  mt-3 m-auto rounded-2' style={{width: '95%'}}>             
                <Slider {...settings}>
                    {this.state.slides.map(function(slide) {                       
                        return (
                        <div key={slide} className="container mt-5 d-flex justify-content-between ">
                            <div className="product-info me-4 bg-info mb-4 rounded-3 p-3">
                                <h4> {products[slide]?.title} </h4>
                                <h5> {products[slide]?.category} </h5>
                                <h5> {products[slide]?.price} </h5>
                                <p> {products[slide]?.description} </p>
                            </div>
                            <div className=" ">
                               <div className="card bg-secondary mb-3">
                               <img className='m-auto p-3' src={products[slide]?.image} alt= {products[slide]?.category} style={{width: '16rem', height: 340}} />
                               </div>
                            </div>
                        </div>
                        );
                    })}
                </Slider>
            </div>
        )
    }
}

export default MainHeader
