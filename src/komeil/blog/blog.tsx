import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './blog.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Bigbanner from '../../assets/images/blog/firstB.png'
import SecondBanner from '../../assets/images/blog/secondB.png'
import Image2 from '../../assets/images/blog/Mask.png'
import { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
return(
    <div className='row topnoor-blog-page'>
       <div className='col-12'>
<div className='row'>
    <div className='col-12 bigbanner'>
        <img src={Bigbanner} alt=''></img>
        <div className='box-txt-blog-bigbanner'>
            <h1>اخبار</h1>
            <h6>سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</h6>
        
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

<div className='row row5'>
    <div className='col-md-1'></div>
    <div className='col-md-10  col-xs-12 box-txt-row5 '>
        <div className='row row-news'>
            <div className='col-4 item-news'>
<div className='img-item-news'>
    <img alt='' src={Image2}></img>
</div>
<h6>تایتل اول</h6>
<h1>موضوع</h1>
<h5>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.
</h5>
<div className='btn-more-box'>
<button>خواندن بیشتر</button>
</div>
            </div>
            <div className='col-4 item-news'>
<div className='img-item-news'>
    <img alt='' src={Image2}></img>
</div>
<h6>تایتل اول</h6>
<h1>موضوع</h1>
<h5>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.
</h5>
<div className='btn-more-box'>
<button>خواندن بیشتر</button>
</div>
            </div>
      
            <div className='col-4 item-news'>
<div className='img-item-news'>
    <img alt='' src={Image2}></img>
</div>
<h6>تایتل اول</h6>
<h1>موضوع</h1>
<h5>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.
</h5>
<div className='btn-more-box'>
<button>خواندن بیشتر</button>
</div>
            </div>
            <div className='col-4 item-news'>
<div className='img-item-news'>
    <img alt='' src={Image2}></img>
</div>
<h6>تایتل اول</h6>
<h1>موضوع</h1>
<h5>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.
</h5>
<div className='btn-more-box'>
<button>خواندن بیشتر</button>
</div>
            </div>
      
        </div>
  </div>
    <div className='col-md-1'></div>
</div>
   
     
       </div>
    </div>
)
}
export default Blog