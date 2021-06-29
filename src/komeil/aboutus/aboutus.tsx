import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './aboutus.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import BannerImg from '../../assets/images/aboutus/bannerimg.png'
import GoogleMap from '../../assets/images/aboutus/googlemaps.png'
const Aboutus = () => {
return(
 <div className='komeil-aboutus-page row'>
<div className='col'>
    <div className='row row-description'>
        <div className='col-md-6 col-xs-12 col-img-description'>
<img src={BannerImg}></img>
        </div>
        <div className='col-md-6 col-xs-12 col-txt-description'>
<h1>کمیل شاپ را بیشتر بشناسید</h1>
<h6>کمیل شاپ در سال 1400 شروع به فعالیت کرد کمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کردکمیل شاپ در سال 1400 شروع به فعالیت کرد</h6>
</div>
    </div>
    <div className='row row-img'>
        <div className='col-xs-12 col-md-12 col-txt-img'>
<h1>فروشگاه ما را تماشا کنید</h1>
        </div>
        <div className='col-md-2 col-xs-12 col-img-img'>
<img src={BannerImg}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={BannerImg}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={BannerImg}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={BannerImg}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={BannerImg}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={BannerImg}></img>
</div>
    </div>
<div className='row row-contact'>
    <div className='col-xs-12 col-md-12 col-contact-title'>
        <h1>
            راه های ارتباطی ما
        </h1>
    </div>
<div className='col-md-6 col-xs-12 col-contact-input'>
    <h6>نام کامل</h6>
    <div className='col-contact-input-input'>
 <input></input>
    </div>
    <h6>آدرس ایمیل</h6>
    <div className='col-contact-input-input'>
 <input></input>
    </div>
    <h6>پیام شما به ما</h6>
    <div className='col-contact-input-input'>
    <textarea></textarea>
    </div>

    <div className='col-contact-input-btn'>
         <button>ارسال پیام</button> 
    </div>
  
</div>
<div className='col-md-6 col-xs-12 col-contact-txt'>
    <img src={GoogleMap}></img>
    <h6>آدرس : میدان شوش خ صابونیان پاساژ شهرداری طبقه منفی ۲ پلاک ۶۰</h6>
    <h6>تلفن تماس : ۲۳۲۳۲۳۲۳</h6>
    <h6>ساعات کاری فروشگاه: 8 الی 23 هر روز هفته</h6>
    <h6>info@komeilshop.com :ایمیل فروشگاه </h6>
</div>
</div>
</div>
 </div>
)
}
export default Aboutus