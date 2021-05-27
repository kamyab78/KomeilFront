import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logosmall.png';
import './footer.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Insta from  '../../../assets/images/footer/in.png';
import Twiteer from  '../../../assets/images/footer/tw.png';
import Facebook from  '../../../assets/images/footer/fb.png';
import Linkdin from  '../../../assets/images/footer/lin.png';
const footer = () => {
return(
    <div className='row topnoor-footer-page'>
        <div className='col-12'>
            <div className='row '>
                <div className='col-2'></div>
                <div className='col-2 logo-address-box'>
<img src={Logo} alt=''></img>
<div className='item-logo-address-box'>
<h6>اتوبان نیایش - جنت آباد شمالی</h6>
            <h6>خیابان گلزار شمالی</h6>
            <h6>پلاک ۲ - واحد ۲</h6>
<div className='itemlogo-logo-address-box'>
    <div className='logo-virtual'>
    <div className='box-logo-virtual'>
    <img src={Insta} alt=''></img>
</div>    
    </div>
    <div className='logo-virtual'>
<div className='box-logo-virtual'>
    <img src={Linkdin} alt=''></img>
</div>
</div>
<div className='logo-virtual'>
<div className='box-logo-virtual'>
    <img src={Facebook} alt=''></img>
</div>
</div>
<div className='logo-virtual'>
<div className='box-logo-virtual'>
    <img src={Twiteer} alt=''></img>
</div>
</div>
</div>
</div>
                </div>
                <div className='col-2 ertebat-box'>
                <h1> ارتباطی</h1>
                    <div className='item-ertebat-box'>
                               <h6>فکس</h6>
                    <h6>ارتباط</h6>
                    <h6>تماس</h6>
             </div>
                </div>
                <div className='col-2 community-box'>
                <h1>راه های ارتباطی</h1>
                    <div className='item-community-box'>
                               <h6>تلگرام</h6>
                    <h6>واتساپ</h6>
                    <h6>فیسبوک</h6>
             </div>
                </div>
                <div className='col-2 company-box'>
                    <h1>شرکت</h1>
                    <div className='item-company-box'>
                               <h6>پروفایل</h6>
                    <h6>درباره ما</h6>
                    <h6>تماس با ما</h6>
                    <h6>آدرس</h6>
                    </div>
             
                </div>
                <div className='col-2 '></div>
            </div>
            <div className='row '>
                <div className='col-2'></div>
                <div className='col-8 box-copy'>
                    <div className='row'>
                        <div className='col-2'>
                            <h1>
                               status 
                            </h1>
                            </div>
                        <div className='col-7'>  <h1>contact</h1></div>
                        <div className='col-3'>  <h1>Copyright@2020</h1></div>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    </div>
)
}
export default footer