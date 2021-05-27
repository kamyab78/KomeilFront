import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './aboutus.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Bigbanner from '../../assets/images/aboutus/banner.png'
import SecondBanner from '../../assets/images/aboutus/secondbanner1.png'
import Image2 from '../../assets/images/aboutus/b2.png'
import Image3 from '../../assets/images/aboutus/b3.png'
const aboutus = () => {
return(
    <div className='row topnoor-aboutus-page'>
       <div className='col-12'>
<div className='row'>
    <div className='col-12 bigbanner'>
        <img src={Bigbanner} alt=''></img>
        <div className='box-txt-about-bigbanner'>
            <h1>درباره ما</h1>
            <h6>اتوبان نیایش - جنت آباد شمالی</h6>
            <h6>خیابان گلزار شمالی</h6>
            <h6>پلاک ۲ - واحد ۲</h6>
        </div>
    </div>
</div>
<div className='row row2'>
    <div className='col-md-1'></div>
    <div className='col-md-10  col-xs -12 scondbanner'>
        <img src={SecondBanner} alt=''></img>
  
    </div>
    <div className='col-md-1'></div>
</div>
<div className='row row3'>
    <div className='col-md-1'></div>
    <div className='col-md-10  col-xs-12 '>
        <div className='row'>
            <div className='col-md-6 col-xs-12 '>
                <img src={Image2} alt=''></img>
            </div>
            <div className='col-md-6 col-xs-12 txt-box-row3'>
<h1>تایتل۱</h1>
<h2>تایتل2</h2>
<h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
            </div>
            </div>
  
    </div>
    <div className='col-md-1'></div>
</div>
<div className='row row4'>
    <div className='col-md-1'></div>
    <div className='col-md-10  col-xs-12 '>
        <div className='row'>
           
            <div className='col-md-6 col-xs-12 txt-box-row3'>
<h1>تایتل۱</h1>
<h2>تایتل2</h2>
<h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
            </div>
            <div className='col-md-6 col-xs-12 '>
                <img src={Image3} alt=''></img>
            </div>
            </div>
  
    </div>
    <div className='col-md-1'></div>
</div>
<div className='row row5'>
    <div className='col-md-1'></div>
    <div className='col-md-10  col-xs-12 box-txt-row5 '>
     <h1>لورم ایپسوم متن ساختگی با تولید سادگی</h1>
<h6> و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</h6> 
<h2>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز</h2> 
    </div>
    <div className='col-md-1'></div>
</div>
   
     
       </div>
    </div>
)
}
export default aboutus