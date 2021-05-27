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
           <div className='row'>
<div className='col-1'></div>
<div className='col-4 '>
<div className='row ' >
        <div className='col-12 detail-txt-row'>
            <h6> لامپ دیواری</h6>
        </div>
    </div>
    <div className='row ' >
        <div className='col-12 detail-star-row'>
        <i className="material-icons-outlined detail-star-none-row">
star_border
</i>
<i className="material-icons-outlined detail-star-none-row">
star_border
</i>
        <i className="material-icons-outlined detail-star-active-row">
star
</i>
<i className="material-icons-outlined detail-star-active-row">
star
</i>
<i className="material-icons-outlined detail-star-active-row">
star
</i>


        </div>
    </div>
    <div className='row ' >
        <div className='col-12 detail-txt-row'>
            <h5> رنگ</h5>
        </div>
    </div>
    <div className='row ' >
        <div className='col-12 detail-color-row'>
            <div style={{width:'35px',height:'35px',backgroundColor:'black',borderRadius:'100%', marginRight:'10px'}}></div>
            <div style={{width:'35px',height:'35px',backgroundColor:'yellow',borderRadius:'100%', marginRight:'10px'}}></div>
            <div style={{width:'35px',height:'35px',backgroundColor:'orange',borderRadius:'100%', marginRight:'10px'}}></div>
        </div>
    </div>
    <div className='row ' >
        <div className='col-12 detail-txt-row'>
            <h1> 200$</h1>
        </div>
    </div>
    <div className='row ' >
        <div className='col-12 detail-number-row'>
        <i onClick={()=>setnumber(number+1)} className="material-icons-outlined plusicon">
add
</i>
 
<input  value={number}></input>
       <i onClick={clickonremove} className="material-icons-outlined minusicon">
remove
</i>

        </div>
    </div>
    <div className='row ' >
        <div className='col-12 detail-btn-row'>
        <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
        </div>
    </div>


</div>
<div className='col-4 row-item-right'>
    <div className='row big-img-row'>
<img alt='' src={Mask1}></img>
    </div>

</div>
<div className='col-2 row-item-center'>
    <div className='row small-img-row' >
        <div className='col-12'>
            <img alt='' src={Mask1}></img>
        </div>
        <div className='col-12'>
            <img alt='' src={Mask1}></img>
        </div>
        <div className='col-12'>
            <img alt='' src={Mask1}></img>
        </div>
    </div>
</div>
<div className='col-1'></div>

<div className='col-1'></div>
<div className='col-8 overviewtxt' >
     <h1>خلاصه محصول</h1>
     <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h2>
     </div>
<div className='col-3'></div>
               </div>
               <div className='row'>
                   <div className='col-1'></div>
                   <div className='col-10 txt-col-related'>
                       <h6>محصولات مشابه</h6></div>
                   <div className='col-1'></div>
<div className='col-2'></div>
<div className='col-8 '>
<div className='row ' style={{marginBottom:'20px'}} >
        <div className='col-4 row-item-center '>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
        </div>   
            </div>
    
            <div className='col-4 row-item-center'>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
                                    <h3>100T</h3>

                                    <div className='card-box'>
                                        <i className="material-icons-outlined bascket">
                                            shopping_cart
</i>
                                        <h6>افزودن به سبد خرید</h6>

                                    </div>
        </div>   
            </div>
            <div className='col-4 row-item-center'>
            <div className='item-related'>
                <div className='div-img'>
                          <img src={Mask1} alt=''></img>
                    </div> 
           
                                    <h1>چراغ پذیرایی حرفه ای</h1>
                                    <h5>خیلی خوبه خیلی خوبه خیلی خوبه</h5>
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


<div className='col-2'></div>
               </div>
             
               </div>
               </div>
)
}
export default Detailproduct