import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logosmall.png';
import './footer.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Log1 from '../../../assets/images/footer/log1.png'
import Log2 from '../../../assets/images/footer/log2.png'
const footer = () => {
return(
    <div className='row komeil-footer-page'>
        <div className='col-12'>
            <div className='row '>
               
            <div className='col-4 logo-enamad-box'>
<img src={Log2} alt="" style={{cursor:"pointer"}} onClick={()=>window.location.replace('https://trustseal.enamad.ir/?id=240900&code=RrAWJv6lLOywkvHWQLL6')} />

                </div>
                <div className='col-4 community-box'>
                <h6 onClick={()=>window.location.replace('/terms')}>قوانین مقررات</h6>
                <h6>تماس با ما</h6>
                <h6>تماس با ما</h6>
                <h6>تماس با ما</h6>
               
            
                </div>
                <div className='col-4 community-box'>
                <h1 style={{direction:'rtl'}}>آدرس : تهران میدان شوش خیابان صابونیان مجتمع پرنسا طبقه همکف پلاک G8</h1>
              
                               <h6>021-55322525  -  021-23123123</h6>
                    <h6>pasargadshop681@yahoo.com</h6>
               
            
                </div>
         
            </div>
       
        </div>
    </div>
)
}
export default footer