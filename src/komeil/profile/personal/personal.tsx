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
<div className='col-10'>
    <div className='row'> 
    <div className='col-6 item-box-personal-box'>
        <h6> نام خانوادگی</h6>
        <input value='علی دوست'></input>
    </div>
    <div className='col-6 item-box-personal-box'>
        <h6>نام</h6>
        <input value='علی'></input>
    </div>
    <div className='col-6 item-box-personal-box'>
        <h6>شماره تلفن</h6>
        <input value='09901111111'></input>
    </div>
    <div className='col-6 item-box-personal-box'>
        <h6>ایمیل</h6>
        <input value='a@g.c'></input>
    </div>
    <div className='col-12 item-box-personal-box'>
        <h6>آدرس</h6>
        <input value='تهران - تهران'></input>
    </div>
 
    </div>
</div>
<div className='col-2'>
<i className="material-icons">account_circle</i>
</div>
</div>
        </div>
       
          <div className='col-md-2 col-xs-2'>
            <Menuprofile/>
        </div>
 <div className='col-md-1'></div>


    </div>
)
}
export default personal