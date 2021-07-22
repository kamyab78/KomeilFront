import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './order.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Menuprofile from '../../Component/menuprofile/menuprofile'
import Mask1 from '../../../assets/images/landing/mask.png'


const order = () => {
    return (
        <div className='row topnoor-order-page' >
            <div className='col-12'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 col-xs-10 order-box'>
                    <div className='row box-order-box'>
                        <div className='col-md-12 col-xs-12 box-order-box'>
                            <div className='row'>
                              <div className='col-12 col-box-order-box'>
   <h1>سفارشات</h1>
        </div>  
                            </div>
 
                            <div className='row'>
                              <div className='col-12 box-order-box'>
                                  <div className='item-box-order'>
<div className='firstRow-item-box-order'>
<h6> :تاریخ خرید</h6>
<h5>۲۵ اردیبهشت</h5>
<h6>:شماره سفارش</h6>
<h5>2342342</h5>
<i></i>
<h5>:وضعیت</h5>
<h6>تحویل شده</h6>
</div>
<div className='secondRow-item-box-order'>
<div className='item-secondRow-item-box-order'>
    <img src={Mask1}></img>
<h2>سرویس کارد چنگال</h2>
</div>
</div>
<div className='thirdRow-item-box-order'>
    <h6>تومان</h6>
   <h5>۶۰۰ </h5> 
<h6>مبلغ کل</h6>

</div>
                                  </div>
                                  <div className='item-box-order'>
<div className='firstRow-item-box-order'>
<h6> :تاریخ خرید</h6>
<h5>۲۵ اردیبهشت</h5>
<h6>:شماره سفارش</h6>
<h5>2342342</h5>
<i></i>
<h5>:وضعیت</h5>
<h6>تحویل شده</h6>
</div>
<div className='secondRow-item-box-order'>
<div className='item-secondRow-item-box-order'>
    <img src={Mask1}></img>
<h2>سرویس کارد چنگال</h2>
</div>
</div>
<div className='thirdRow-item-box-order'>
    <h6>تومان</h6>
   <h5>۶۰۰ </h5> 
<h6>مبلغ کل</h6>

</div>
                                  </div>
  
        </div>  
                            </div>
                        </div>
       
     
      
    </div>
                   
                    </div>
                    <div className='col-md-3 col-xs-2'>
                        <Menuprofile />
                    </div>
             

                </div>

            </div>


        </div>
    )
}
export default order