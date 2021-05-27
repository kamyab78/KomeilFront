import React, { useRef } from 'react';
import { ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';
import './landing.style.scss';
import Slider from 'react-slick';
import { Link, useHistory } from 'react-router-dom';
import { navigationAnim, RoutePath } from '../../data';
import Banner from '../../assets/images/landing/banner.png'
import Bazarcheimg from '../../assets/images/landing/shegeft.png'
import Mask from '../../assets/images/landing/mask.png'
import Brand from '../../assets/images/landing/brand.png'
import Mask1 from '../../assets/images/landing/mask1.png'
const Landing: React.FC<ConnectedProps<typeof connector>> = function () {
    const sliderRef = useRef<Slider | null>(null);
    const history = useHistory();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };
    return (
        <div className="topnoor-landing-page row">
            <div className='col'>
                <div className='row banner-row'>
                    <div className='col-1 '></div>
                    <div className='col-10 banner-big-box'>
                        <img src={Banner}></img>
                    </div>
                    <div className='col-1 '></div>
                </div>
                <div className='row banner-row'>
                    <div className='col-1 '></div>
                    <div className='col-5 banner-left-box'>
                        <img src={Banner}></img>

                    </div>
                    <div className='col-5 banner-right-box'>
                        <img src={Banner}></img>
                    </div>
                    <div className='col-1 '></div>
                </div>
                <div className='row bazarche-row'>
                    <div className='col-1 '></div>

                    <div className='col-10 bazarche-box'>
                        <div className='bazarche-box-main '>
                            <div className='col-10 item-bazarche-box-main'>
                                <div className='col-1'></div>
                                <div className='sub-item-bazarche-box-main col-3'>
                                <div className='div-img'>
                                        <img src={Mask} alt=''></img>  
                                    </div>
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h6>خیلی خوبه خیلی خوبه خیلی خوبه</h6>
                                    <h3>100T</h3>

                                    <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
                                </div>
                                <div className='sub-item-bazarche-box-main col-3'>
                                    <div className='div-img'>
                                        <img src={Mask} alt=''></img>  
                                    </div>
                                  
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h6>خیلی خوبه خیلی خوبه خیلی خوبه</h6>
                                    <h3>100T</h3>

                                    <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
                                </div>
                                <div className='sub-item-bazarche-box-main col-3'>
                                <div className='div-img'>
                                        <img src={Mask} alt=''></img>  
                                    </div>
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h6>خیلی خوبه خیلی خوبه خیلی خوبه</h6>
                                    <h3>100T</h3>

                                    <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
                                </div>
                                <div className='col-1'></div>
                            </div>
                            <div className='col-2 img-bazarche-box-main'>
                                <img src={Bazarcheimg} alt=''></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-1 '></div>
                </div>
                <div className='row brand-row'>
                    <div className='col-1 '></div>

                    <div className='col-10 brand-box'>
                        <div className='brand-box-main'>
                            <h1>برند ها</h1>
                            <div className='brands row'>

                                <div className='brands-items col-2'>
                                    <img src={Brand} alt=''></img>
                                    <h6>TPR</h6>
                                </div>
                                <div className='brands-items col-2'>
                                    <img src={Brand} alt=''></img>
                                    <h6>TPR</h6>
                                </div>
                                <div className='brands-items col-2'>
                                    <img src={Brand} alt=''></img>
                                    <h6>TPR</h6>
                                </div>
                                <div className='brands-items col-2'>
                                    <img src={Brand} alt=''></img>
                                    <h6>TPR</h6>
                                </div>
                                <div className='brands-items col-2'>
                                    <img src={Brand} alt=''></img>
                                    <h6>TPR</h6>
                                </div>
                                <div className='col-2'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1 '></div>
                </div>
                <div className='row product-row'>
                    <div className='col-1 '></div>

                    <div className='col-10 product-box'>
                        <div className='product-box-main'>
                            <h1>محصولات</h1>

                            <div className='product-items row'>

                                <div className=' col-1'></div>
                                <div className=' col-10'>
                                <div className='row'>
                                <div className=' col-3'>
                                    <div className='sub-product-items'>
                                        <div className='div-img'>
    <img src={Mask} alt=''></img>
                                        </div>

                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='div-btn'>
       <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
</div>
                                    </div>
                                
                                </div>
                                <div className=' col-3'>
                                    <div className='sub-product-items'>
                                    <div className='div-img'>
    <img src={Mask} alt=''></img>
                                        </div>
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='div-btn'>
       <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
</div>
                                    </div>
                                
                                </div>
                                <div className=' col-3'>
                                    <div className='sub-product-items'>
                                    <div className='div-img'>
    <img src={Mask} alt=''></img>
                                        </div>
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='div-btn'>
       <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
</div>
                                    </div>
                                
                                </div>
                                <div className=' col-3'>
                                    <div className='sub-product-items'>
                                    <div className='div-img'>
    <img src={Mask} alt=''></img>
                                        </div>
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>
<div className='div-btn'>
       <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
</div>
                             
                                    </div>
                                
                                </div>
                                </div>
                                </div>
<div className=' col-1'></div>

                   
                            </div>


                        </div>
                    </div>
                    <div className='col-1 '></div>
                </div>


            </div>

        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
});

const connector = connect(mapStateToProps);
export default connector(Landing);
