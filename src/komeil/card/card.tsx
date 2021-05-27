import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './card.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask from '../../assets/images/landing/mask.png'


const card = () => {
return(
    <div className='row topnoor-card-page'>
         <div className='col-1'/>
        <div className='col-10 title-box'>
<h1>سبد خرید</h1>
        </div>
        <div className='col-1'/>
        <div className='col-1'/>
        <div className='col-10'>
<div className='row row-titles'>
  
    <div className='col-1 col-titles'></div>
    <div className='col-3 col-titles'><h1>قیمت</h1></div>
    <div className='col-1 col-titles'><h1>تعداد</h1></div>
    <div className='col-2 col-titles'><h1>فی</h1></div>
      <div className='col-5 col-titles'><h1>نام محصول</h1></div>
</div>
<div className='row row-items'>
  
    <div className='col-1 col-items'><i className="material-icons-outlined">
delete_outline
</i></div>
    <div className='col-3 col-items'><h1>100T</h1></div>
    <div className='col-1 col-items'><h1>1</h1></div>
    <div className='col-2 col-items'><h1>100T</h1></div>
      <div className='col-5 col-items'>
        
          <div className='sub-description-col-items'>
<h1>محصول حرفه</h1>
<h1>رنگ : بنفش</h1>
          </div>
          <div className='sub-img-col-items'>
 <img alt='' src={Mask}></img>
          </div>
      </div>
</div>
<div className='row row-items'>
  
  <div className='col-1 col-items'><i className="material-icons-outlined">
delete_outline
</i></div>
  <div className='col-3 col-items'><h1>100T</h1></div>
  <div className='col-1 col-items'><h1>1</h1></div>
  <div className='col-2 col-items'><h1>100T</h1></div>
    <div className='col-5 col-items'>
      
        <div className='sub-description-col-items'>
<h1>محصول حرفه</h1>
<h1>رنگ : بنفش</h1>
        </div>
        <div className='sub-img-col-items'>
<img alt='' src={Mask}></img>
        </div>
    </div>
</div>

  <div className='row row-items'>
  
    <div className='col-1 col-items'><i className="material-icons-outlined">
delete_outline
</i></div>
    <div className='col-3 col-items'><h1>100T</h1></div>
    <div className='col-1 col-items'><h1>1</h1></div>
    <div className='col-2 col-items'><h1>100T</h1></div>
      <div className='col-5 col-items'>
        
          <div className='sub-description-col-items'>
<h1>محصول حرفه</h1>
<h1>رنگ : بنفش</h1>
          </div>
          <div className='sub-img-col-items'>
 <img alt='' src={Mask}></img>
          </div>
      </div>
</div>
<div className='row row-amount'>
  

  <div className='col-4 col-amount'><h1>600T</h1></div>
  <div className='col-8 total-col-amount'><h1>مجموع</h1></div>

</div>
<div className='row row-btn'>
  

  <div className='col-3 col-btn'>
      <Link className='checkoutbtn' to='/purchase'>ثبت نهایی</Link>
  </div>
  <div className='col-3 col-btn'>
  <Link className='continuebtn' to='/'>ادامه خرید</Link>
  </div>
  <div className='col-6 '></div>

</div>
   
        </div>
        <div className='col-1'/>
    </div>
)
}
export default card