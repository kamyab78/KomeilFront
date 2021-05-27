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
import Newproduct from '../../assets/images/landing/newpro.png'
import Banner1 from '../../assets/images/landing/banner1.png'
import Banner2 from '../../assets/images/landing/banner2.png'
import Banner3 from '../../assets/images/landing/banner3.png'
import Banner4 from '../../assets/images/landing/banner4.png'
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
        <div className="komeil-landing-page row">
            <div className='col'>
                <div className='row banner-row'>
                  
                    <div className='col-12 banner-big-box'>
                        <img src={Banner}></img>
                    </div>
                    
                </div>
         
                <div className='row bazarche-row'>
                   

                    <div className='col-12 bazarche-box'>
                        <div className='bazarche-box-main '>
                            <div className='col-10 item-bazarche-box-main'>
                                <div className='col-1'></div>
                                <div className='show-more-sub-item-bazarche-box-main col-3'>
                     <h1>نمایش همه کالای شگفت انگیز</h1>
                                </div>
                                <div className='sub-item-bazarche-box-main col-3'>
                                <div className='div-img'>
                                   
                                        <img src={Mask} alt=''></img>  
                                    </div>
                                    <h1>سرویس چاقو آشپزخانه</h1>
                                 
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
                                    <h1>سرویس چاقو آشپزخانه</h1>
                                 
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
                            <h4>کالا های شگفت انگیز</h4>
                                <img src={Bazarcheimg} alt=''></img>
                            </div>
                        </div>
                    </div>
                 
                </div>
                <div className='row newproduct-row'>
                 
                    <div className='col-md-6 col-xs-12 '>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            <div className='subitem-newproduct'>
                   
                           <div className='div-img-new'>
                               <img src={Mask} alt=''></img>
                           </div>
                           <h1>سرویس چاقو آشپزخانه</h1>
                           <h2>200T</h2>
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <div className='subitem-newproduct'>
                   
                           <div className='div-img-new'>
                               <img src={Mask} alt=''></img>
                           </div>
                           <h1>سرویس چاقو آشپزخانه</h1>
                           <h2>200T</h2>
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <div className='subitem-newproduct'>
                   
                           <div className='div-img-new'>
                               <img src={Mask} alt=''></img>
                           </div>
                           <h1>سرویس چاقو آشپزخانه</h1>
                           <h2>200T</h2>
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <div className='subitem-newproduct-more'>
                   
                         <h6>نمایش همه محصولات جدید</h6>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-6 col-xs-12 imagebox-newproduct'>
                        <img src={Newproduct} alt=''></img>
                        <h6>محصولات جدید کمیل</h6>
                    </div>
                </div>
                <div className='row bannerads-row'>
            <div className='col-md-4 col-xs-12'>
                <img src={Banner1} alt=''></img>
            </div>
            <div className='col-md-4 col-xs-12'>
            <img src={Banner2} alt=''></img>
            </div>
            <div className='col-md-4 col-xs-12'>
            <img src={Banner3} alt=''></img>
            </div>
                </div>
<div className='row row-service'>
    <div className='col-12 box-service'>
        <div className='row'>
            <div className='col-12 box-title'>
                <h6>سرویس غذاخوری</h6>
            </div>
        </div>
        <div className='row'>
        <div className='col-3'>
            <div className='subitem-service'>
                   
                   <div className='div-img-service'>
                       <img src={Mask} alt=''></img>
                   </div>
                   <h1>سرویس چاقو آشپزخانه</h1>
                   <h2>200T</h2>
                    </div>
            </div>
            <div className='col-3'>
            <div className='subitem-service'>
                   
                   <div className='div-img-service'>
                       <img src={Mask} alt=''></img>
                   </div>
                   <h1>سرویس چاقو آشپزخانه</h1>
                   <h2>200T</h2>
                    </div>
            </div>
            <div className='col-3'>
            <div className='subitem-service'>
                   
                   <div className='div-img-service'>
                       <img src={Mask} alt=''></img>
                   </div>
                   <h1>سرویس چاقو آشپزخانه</h1>
                   <h2>200T</h2>
                    </div>
            </div>
            <div className='col-3'>
            <div className='subitem-service'>
                   
                   <div className='div-img-service'>
                       <img src={Mask} alt=''></img>
                   </div>
                   <h1>سرویس چاقو آشپزخانه</h1>
                   <h2>200T</h2>
                    </div>
            </div>
        </div>
    </div>
</div>

<div className='row bannerads-row'>
            <div className='col-md-6 col-xs-12'>
                <img src={Banner4} alt=''></img>
            </div>
            <div className='col-md-6 col-xs-12'>
            <img src={Banner4} alt=''></img>
            </div>
       
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
