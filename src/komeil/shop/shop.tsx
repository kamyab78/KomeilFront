import React, { useRef } from 'react';
import { ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';
import './shop.scss';
import Slider from 'react-slick';
import { Link, useHistory } from 'react-router-dom';
import { navigationAnim, RoutePath } from '../../data';
import Banner from '../../assets/images/landing/banner.png'
import Bazarcheimg from '../../assets/images/landing/shegeft.png'
import Mask from '../../assets/images/shop/mask.png'
import Brand from '../../assets/images/landing/brand.png'
import Mask1 from '../../assets/images/landing/mask1.png'
import Newproduct from '../../assets/images/landing/newpro.png'
import Banner1 from '../../assets/images/landing/banner1.png'
import Banner2 from '../../assets/images/landing/banner2.png'
import Banner3 from '../../assets/images/landing/banner3.png'
import Banner4 from '../../assets/images/landing/banner4.png'
const Shop: React.FC<ConnectedProps<typeof connector>> = function () {
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
        <div className="komeil-shop-page row">
            <div className='col'>
<div className='row row-category'>
    <div className='col-12 '>
        <div className='row'>
        <div className='col-12 col-title'>
            <h6>
               دسته بندی ها 
            </h6>
            </div>
    </div>
    <div className='row row-subitem-category'>
     <div className='col-md-2 col-xs-4'>
         <div className='subitem-category'>
             <div className='img-subitem-category'>
                 <img src={Mask} alt=''></img>
             </div>
             <h1>سرویس غذاخوری</h1>
         </div>
     </div>
     <div className='col-md-2 col-xs-4'>
         <div className='subitem-category'>
             <div className='img-subitem-category'>
                 <img src={Mask} alt=''></img>
             </div>
             <h1>سرویس غذاخوری</h1>
         </div>
     </div>
     <div className='col-md-2 col-xs-4'>
         <div className='subitem-category'>
             <div className='img-subitem-category'>
                 <img src={Mask} alt=''></img>
             </div>
             <h1>سرویس غذاخوری</h1>
         </div>
     </div>
     <div className='col-md-2 col-xs-4'>
         <div className='subitem-category'>
             <div className='img-subitem-category'>
                 <img src={Mask} alt=''></img>
             </div>
             <h1>سرویس غذاخوری</h1>
         </div>
     </div>
     <div className='col-md-2 col-xs-4'>
         <div className='subitem-category'>
             <div className='img-subitem-category'>
                 <img src={Mask} alt=''></img>
             </div>
             <h1>سرویس غذاخوری</h1>
         </div>
     </div>
     <div className='col-md-2 col-xs-4'>
         <div className='subitem-category'>
             <div className='img-subitem-category'>
                 <img src={Mask} alt=''></img>
             </div>
             <h1>سرویس غذاخوری</h1>
         </div>
     </div>
     <div className='col-md-2 col-xs-4'>
         <div className='subitem-category'>
             <div className='img-subitem-category'>
                 <img src={Mask} alt=''></img>
             </div>
             <h1>سرویس غذاخوری</h1>
         </div>
     </div>
    </div>  
    </div>
  
</div>
<div className='row row-result'>
    <div className='col-md-10 col-xs-12 box-result'>
<div className='row'>
   
    <div className='col-2 sortitem-box-result'>
        <h6>پربازدیدترین</h6>
    </div>
    <div className='col-2 sortitem-box-result'>
    <h6>محبوب ترین</h6>
    </div>
    <div className='col-2 sortitem-box-result'>
    <h6>ارزانترین</h6>
    </div>
    <div className='col-1 sortitem-box-result'>
    <h6>گرانترین</h6>
    </div>
    <div className='col-2 sortitem-box-result'>
    <h6>پرفروش ترین</h6>
    </div>
    <div className='col-3 sortitem-box-result'>
<h6> : مرتب سازی برا اساس</h6>
 
                        <i className="material-icons-outlined">
reorder
</i>
    </div>
    
</div>
<div className='row'>
   
   <div className='col-md-3 col-xs-6 subitem-box-result'>
      <div className='div-img-subitem-box-result'>
          <img src={Mask} alt=''></img>
      </div>
      <h6>سرویس چاقو آشپزخانه</h6>
      <div className='div-price-subitem-box-result'>
<h5>100T</h5>
<i></i>
<div className='discount-subitem-box-result'>
    <h3>60%</h3>
</div>
      </div>
   </div>
   <div className='col-md-3 col-xs-6 subitem-box-result'>
      <div className='div-img-subitem-box-result'>
          <img src={Mask} alt=''></img>
      </div>
      <h6>سرویس چاقو آشپزخانه</h6>
      <div className='div-price-subitem-box-result'>
<h5>100T</h5>
<i></i>
<div className='discount-subitem-box-result'>
    <h3>60%</h3>
</div>
      </div>
   </div>
   <div className='col-md-3 col-xs-6 subitem-box-result'>
      <div className='div-img-subitem-box-result'>
          <img src={Mask} alt=''></img>
      </div>
      <h6>سرویس چاقو آشپزخانه</h6>
      <div className='div-price-subitem-box-result'>
<h5>100T</h5>
<i></i>
<div className='discount-subitem-box-result'>
    <h3>60%</h3>
</div>
      </div>
   </div>
   <div className='col-md-3 col-xs-6 subitem-box-result'>
      <div className='div-img-subitem-box-result'>
          <img src={Mask} alt=''></img>
      </div>
      <h6>سرویس چاقو آشپزخانه</h6>
      <div className='div-price-subitem-box-result'>
<h5>100T</h5>
<i></i>
<div className='discount-subitem-box-result'>
    <h3>60%</h3>
</div>
      </div>
   </div>
   <div className='col-md-3 col-xs-6 subitem-box-result'>
      <div className='div-img-subitem-box-result'>
          <img src={Mask} alt=''></img>
      </div>
      <h6>سرویس چاقو آشپزخانه</h6>
      <div className='div-price-subitem-box-result'>
<h5>100T</h5>
<i></i>
<div className='discount-subitem-box-result'>
    <h3>60%</h3>
</div>
      </div>
   </div>
   <div className='col-md-3 col-xs-6 subitem-box-result'>
      <div className='div-img-subitem-box-result'>
          <img src={Mask} alt=''></img>
      </div>
      <h6>سرویس چاقو آشپزخانه</h6>
      <div className='div-price-subitem-box-result'>
<h5>100T</h5>
<i></i>
<div className='discount-subitem-box-result'>
    <h3>60%</h3>
</div>
      </div>
   </div>
   <div className='col-md-3 col-xs-6 subitem-box-result'>
      <div className='div-img-subitem-box-result'>
          <img src={Mask} alt=''></img>
      </div>
      <h6>سرویس چاقو آشپزخانه</h6>
      <div className='div-price-subitem-box-result'>
<h5>100T</h5>
<i></i>
<div className='discount-subitem-box-result'>
    <h3>60%</h3>
</div>
      </div>
   </div>

   
</div>
  
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
export default connector(Shop);
