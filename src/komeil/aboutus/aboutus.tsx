import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './aboutus.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import BannerImg from '../../assets/images/aboutus/bannerimg.png'
import GoogleMap from '../../assets/images/aboutus/googlemaps.png'
import { useState,useEffect } from 'react';
import { Config } from 'komeil/config/config';
const Aboutus = () => {
  
    const [firstbanner,setfirstbanner]=useState('')
    const [secondBanner,setsecondBanner]=useState('')
    const [thirdbanner,setthirdbanner]=useState('')
    const [fourthbanner,setfourthbanner]=useState('')
    const [fifthbanner,setfifthbanner]=useState('')
    const [sixthbanner,setsixthbanner]=useState('')
    const [seventhbanner,setseventhbanner]=useState('')
    const [configitem,setconfigitem]=useState<any>({})

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        getBanner()
        getConfig()
    }, []);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    function getBanner(){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/banners", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    for(var i=0;i<rep.length;i++){
                        if(rep[i].bannerType==='fisrtbanner_aboutus')
                            setfirstbanner(rep[i].imageUrl)   
                            if(rep[i].bannerType==='secondbanner_aboutus')
                            setsecondBanner(rep[i].imageUrl)  
                            if(rep[i].bannerType==='thirdbanner_aboutus')
                            setthirdbanner(rep[i].imageUrl)  
                            if(rep[i].bannerType==='fourthbanner_aboutus')
                            setfourthbanner(rep[i].imageUrl)  
                            if(rep[i].bannerType==='fifthbanner_aboutus')
                            setfifthbanner(rep[i].imageUrl)  
                            if(rep[i].bannerType==='sixthbanner_aboutus')
                            setsixthbanner(rep[i].imageUrl)      
                            if(rep[i].bannerType==='seventhbanner_aboutus')
                            setseventhbanner(rep[i].imageUrl)  

                    }


                })





            })
            .catch(error => console.log('error', error));
    }
    function getConfig(){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/config", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
            setconfigitem(rep)


                })





            })
            .catch(error => console.log('error', error));
    }
return(
 <div className='komeil-aboutus-page row'>
<div className='col'>
    <div className='row row-description'>
        <div className='col-md-6 col-xs-12 col-img-description'>
<img src={firstbanner}></img>
        </div>
        <div className='col-md-6 col-xs-12 col-txt-description'>
<h1>{configitem.aboutUsPartOne}</h1>
<h6>{configitem.aboutUsPartTwo}</h6>
</div>
    </div>
    <div className='row row-img'>
        <div className='col-xs-12 col-md-12 col-txt-img'>
<h1>فروشگاه ما را تماشا کنید</h1>
        </div>
        <div className='col-md-2 col-xs-12 col-img-img'>
<img src={secondBanner}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={thirdbanner}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={fourthbanner}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={fifthbanner}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={sixthbanner}></img>
</div>
<div className='col-md-2 col-xs-12 col-img-img'>
<img src={seventhbanner}></img>
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
    <h6 style={{direction:'rtl'}}>آدرس : تهران میدان شوش خیابان صابونیان مجتمع پرنسا طبقه همکف پلاک G8</h6>
    <h6>تلفن تماس : 02155322525</h6>
    <h6>ساعات کاری فروشگاه: 8 الی 23 هر روز هفته</h6>
    <h6>pasargadshop681@yahoo.com :ایمیل فروشگاه </h6>
</div>
</div>
</div>
 </div>
)
}
export default Aboutus