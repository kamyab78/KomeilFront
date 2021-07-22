import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './detailproduct.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask1 from '../../assets/images/landing/mask.png'


const Detailproduct = () => {
    const [number, setnumber] = useState<any>(1);
    function clickonremove(){
        if(number!==0){
            setnumber(number-1)
        }
    }
return(
    <div className='row topnoor-detailproduct-page' >
       <div className='col-12'>
           <div className='row row-base'>
<div className='col-md-9 col-xs-12 col-desc'>
<div className='firstRow-col-desc'>
    <h1>سرویس قاشق چنگال ۱۲ پارچه مدل بزرگ</h1>
    <span></span>

<h6>3.2</h6>
<i className="material-icons-outlined detail-star-active-row">
star
</i>
</div>
<div className='secondRow-col-desc'>
    <h6>رنگ</h6>
    <div style={{width:'35px',height:'35px',backgroundColor:'black',borderRadius:'100%', marginRight:'10px'}}> </div>   
    <div style={{width:'35px',height:'35px',backgroundColor:'blue',borderRadius:'100%', marginRight:'10px'}}> </div>   
    <div style={{width:'35px',height:'35px',backgroundColor:'pink',borderRadius:'100%', marginRight:'10px'}}> </div>   
    <div style={{width:'35px',height:'35px',backgroundColor:'red',borderRadius:'100%', marginRight:'10px'}}> </div>   
</div>
<div className='thirdRow-col-desc'>
    <div className='col-price-and-add'>

    <div className='item-col-price-and-add-title'>
          <h5>قیمت کالا</h5>
    </div>
      
        <div className='item-col-price-and-add'>
        <div className='discount-item-col-price-and-add'>
    <h3>60%</h3>
</div>
<h2>600/000</h2>
        </div>
        <div className='item-col-price-and-add'>
           
            <h4>تومان</h4>
            <h3>355/000</h3>
        </div>
     
     
     
              <div className='detail-number-row'> 
                    <i onClick={()=>setnumber(number+1)} className="material-icons-outlined plusicon">
add
</i>
 
<input  value={number}></input>
       <i onClick={clickonremove} className="material-icons-outlined minusicon">
remove
</i>

        </div>
        <button className='card-box' >

افزودن به سبد خرید

                                    </button>
      
       
  
    </div>
    <i></i>
    <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</h6>
</div>
</div>
<div className='col-md-3 col-xs-12 col-img'>
<img src={Mask1}></img>
<div className='additional-img'>
<img src={Mask1}></img>
<img src={Mask1}></img>
<img src={Mask1}></img>
</div>
</div>
               </div>
               <div className='row'>
                   <div className='col-1'></div>
                   <div className='col-10 txt-col-related'>
                       <h6>محصولات مشابه</h6></div>
                   <div className='col-1'></div>
<div className='col-2'></div>
<div className='col-8 '>
<div className='row ' style={{marginBottom:'20px'}} >
        <div className='col-md-4 col-xs-12 row-item-center '>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>
<div className='btn-show-more'>
                                      <button className='card-box'>

<h6>مشاهده بیشتر</h6>

</button>
</div>
  
        </div>   
            </div>
    
            <div className='col-md-4 col-xs-12 row-item-center'>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='btn-show-more'>
                                      <button className='card-box'>

<h6>مشاهده بیشتر</h6>

</button>
</div>
        </div>   
            </div>
            <div className='col-md-4 col-xs-12 row-item-center'>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='btn-show-more'>
                                      <button className='card-box'>

<h6>مشاهده بیشتر</h6>

</button>
</div>
        </div>   
            </div>
    </div>


</div>


<div className='col-2'></div>
               </div>
             
               </div>
               </div>
)
}
export default Detailproduct