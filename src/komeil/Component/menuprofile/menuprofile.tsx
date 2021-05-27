import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './menuprofile.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const menuprofile = () => {
return(
    <div className='row topnoor-menuprofile-page'>
        <div className='col-12'>
            <h1>پروفایل</h1>
            <div className='box-link'>
            <Link to='/profile/personal' className=" item-box-link" >اطلاعات شخصی</Link>
            <Link to='/profile/order' className=" item-box-link" >سفارشات</Link>
            <Link to='/profile/history' className=" item-box-link" >تاریخچه خرید</Link>
            <Link to='/profile/ticket' className=" item-box-link" >تیکت</Link>

            </div>
        </div>
       
    </div>
)
}
export default menuprofile