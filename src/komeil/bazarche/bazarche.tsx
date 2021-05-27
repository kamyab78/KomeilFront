import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './bazarche.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FirstBanner from '../../assets/images/bazarche/firstBanner.png'
import SeconndBanner from '../../assets/images/bazarche/seconndBanner.png'
import Mask from '../../assets/images/landing/mask.png'
const bazarche = () => {
return(
    <div className='row topnoor-bazarche-page'>
         <div className='col-12 title-bazarche'>
<h6>
    بازارچه
</h6>
         </div>
        <div className='col-12 first-banner'>
            <img alt='' src={FirstBanner}></img>
        </div>
        <div className='col-12 bazarche-box'>
                        <div className='bazarche-box-main '>
                            <div className='row item-bazarche-box-main'>
                            <div className='col-12 title-best-offer'>
                                <h1>پیشنهاد های برتر</h1>
                            </div>
                            <div className='row row-subitem' >
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
                               
                            </div>
                          
                            </div>
                          
                        </div>
                    </div>
                    <div className='col-12 seconnd-banner'>
            <img alt='' src={SeconndBanner}></img>
        </div>    
        <div className='col-12 product-box'>
                        <div className='product-box-main'>
                            <h1>محصولات</h1>

                            <div className='product-items row'>

                               
                                <div className=' col-12'>
                                <div className='row'>
                                <div className=' col-3 col-sub-item'>
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
                                <div className=' col-3 col-sub-item'>
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
                                <div className=' col-3 col-sub-item'>
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
                                <div className=' col-3 col-sub-item'>
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
                                <div className=' col-3 col-sub-item'>
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


                   
                            </div>


                        </div>
                    </div>
                 
    </div>
)
}
export default bazarche