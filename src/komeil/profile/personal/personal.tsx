import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './personal.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Menuprofile from '../../Component/menuprofile/menuprofile'


const personal = () => {
return(
    <div className='row topnoor-personal-page' >
       
       <div className='col-md-1'></div>
        <div className='col-md-8 col-xs-10 personal-box'>
<div className='row box-personal-box'>
<div className='col-12'>
    <div className='row'> 
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
        <div className='col-item-box-personal-box'>
   <h1> اطلاعات کاربری من</h1>
        </div>
     
      
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
        <h6> نام خانوادگی</h6>
        <input value='علی دوست'></input>
    </div>
    <div className='col-md-6  col-xs-12 item-box-personal-box'>
        <h6>نام</h6>
        <input value='علی'></input>
    </div>
    <div className='col-md-6  col-xs-12 item-box-personal-box'>
        <h6>شماره تلفن</h6>
        <input value='09901111111'></input>
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
        <h6>ایمیل</h6>
        <input value='a@g.c'></input>
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
      
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
        <h6>کد پستی</h6>
        <input value='45345'></input>
    </div>
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
        <h6>آدرس</h6>
        <input value='تهران - تهران'></input>
    </div>
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
       <button>ثبت</button>
    </div>
    </div>
</div>

</div>
        </div>
       
          <div className='col-md-3 col-xs-2'>
            <Menuprofile/>
        </div>



    </div>
)
}
export default personal