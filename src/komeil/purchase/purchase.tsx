import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './purchase.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask from '../../assets/images/landing/mask.png'


const purchase = () => {
    return (
        <div className='row topnoor-purchase-page'>
            <div className='col-12 col-title'>
                <h1>پرداخت نهایی</h1>
            </div>
            <div className='col-1'></div>

            <div className='col-5 ' style={{marginTop:'40px',display:'flex',flexDirection:'column'}}>
<div className='row col-items'>
<div className='sub-img-col-items'>
<img alt='' src={Mask}></img>
        </div>
<div className='sub-description-col-items'>
<h1>محصول حرفه</h1>
<h1>رنگ : بنفش</h1>
<i ></i>
<h6>100T</h6>
        </div>
  
</div>
<div className='row col-items'>
<div className='sub-img-col-items'>
<img alt='' src={Mask}></img>
        </div>
<div className='sub-description-col-items'>
<h1>محصول حرفه</h1>
<h1>رنگ : بنفش</h1>
<i ></i>
<h6>100T</h6>
        </div>
  
</div>

<div style={{flex:'1'}}>


      
  
</div>
    <div className='row box-price'>
    <div className='itemtotal-box-price'>
        <h1>جمع محصولات</h1>
        <i></i>
        <h6>100T</h6>
    </div>
<div className='shiping-box-price'>
<h1>هزینه ارسال</h1>
        <i></i>
        <h6>100T</h6>
</div>

<div className='total-box-price'>
<h1>مجموع</h1>
        <i></i>
        <h6>100T</h6>
</div>
  
</div>
                  
            </div>
            <div className='col-5 col-data'>
                <div className='row'>
                    <div className='col-12 col-email'>
                        <h6>
                            شماره تلفن
                        </h6>
                        <input></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-address'>
                        <h6>
                           آدرس
                        </h6>
                        <div className='col-name-fname'>
                          <input placeholder="نام خانوادگی" style={{marginRight:'10px'}}></input>  
                          <input placeholder="نام" ></input>  
                        </div>
                        <input placeholder="شهر"></input>  
                        <input placeholder="آدرس"></input>  
                        <div className='col-name-fname'>
                          <input placeholder="کشور" style={{marginRight:'10px'}}></input>  
                          <input placeholder="استان" ></input>  
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 col-method'>
                        <h6>
                           نحوه ارسال
                        </h6>
                        <input></input>
                    </div>
                    <div className='col-6 col-date'>
                        <h6>
                          تاریخ ارسال
                        </h6>
                        <input></input>
                    </div>
                </div>
            </div>
            <div className='col-1'></div>

            <div className='col-1'></div>
            <div className='col-5'></div>
            <div className='col-5 col-btn'>
                <div className='row'>
                <div className='col-6 item-col-btn'>
                    <button className='buybutton'>خرید</button>
                </div>
                <div className='col-6 item-col-btn'>
                <button className='cancelbutton'>لغو</button>
                </div>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    )
}
export default purchase