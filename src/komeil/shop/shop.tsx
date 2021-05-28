import React, { useRef } from 'react';
import { ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';
import './shop.scss';
// import Slider from 'react-slick';
import { Link, useHistory } from 'react-router-dom';
import { navigationAnim, RoutePath } from '../../data';
import Banner from '../../assets/images/landing/banner.png'
import Bazarcheimg from '../../assets/images/landing/shegeft.png'
import Mask from '../../assets/images/shop/mask.png'
import { Checkbox ,Switch,Slider } from '@material-ui/core';

const Shop: React.FC<ConnectedProps<typeof connector>> = function () {
 
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
    <div className='col-md-9 col-xs-12 box-result'>
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
    <div className='col-md-2 col-xs-12 box-filter'>
        <div className='row '>
            <div className='col-12 box-col-filter'>
                <div className='row'>
                    <div className='col-12 title-list-of-filter-col' >
                        <h6>حذف همه</h6>
<i></i>
<h1>فیلتر های اعمال شده</h1>
                    </div>
                    <div className='col-12 list-of-filter-col' >
              
                    </div>
                </div>

            </div>
        </div>
        <div className='row'>
        <div className='col-12 box-col-brand-filter'>
                <div className='row'>
                    <div className='col-12 title-list-of-brand-filter-col' >
                        <h6>برند ها </h6>

                    </div>
                    <div className='col-12 list-of-brand-filter-col' >
              <div className='sub-list-of-brand-filter-col'>

                  <h1>iran</h1>
                  <i></i>
                    <h6>ایران</h6>
                  <Checkbox className='check-classs'></Checkbox>
                
              </div>
              <div className='sub-list-of-brand-filter-col'>

<h1>iran</h1>
<i></i>
  <h6>ایران</h6>
<Checkbox className='check-classs'></Checkbox>

</div>
<div className='sub-list-of-brand-filter-col'>

<h1>iran</h1>
<i></i>
  <h6>ایران</h6>
<Checkbox className='check-classs'></Checkbox>

</div>
                    </div>
                </div>

            </div>
        </div>
        <div className='row'>
        <div className='col-12 box-col-available-filter'>
                <div className='row'>
                    <div className='col-12 available-filter-col' >
                        <h6>نمایش  کالاهای موجود </h6>
<Switch className='swich-class' color='primary'/>
                    </div>
          

            </div>
     
        </div>
        </div>
        <div className='row'>
        <div className='col-12 box-col-price-filter'>
                <div className='row'>
                    <div className='col-12 title-price-filter-col' >
                        <h6>محدوده قیمت</h6>

                    </div>
                    <div className='col-12 price-filter-col' >
                        <h6>از قیمت</h6>
<div className='div-input'>
    <input></input>
    <h6>تا</h6>
    <input></input>
</div>
<Slider/>
<div className='div-btn'>
  <button>تایید</button>  
</div>

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
