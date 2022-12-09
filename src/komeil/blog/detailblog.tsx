import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './detailblog.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Bigbanner from '../../assets/images/blog/firstB.png'
import SecondBanner from '../../assets/images/blog/secondB.png'
import Image2 from '../../assets/images/blog/Mask.png'
import { useEffect, useState } from 'react';
import {Config} from '../config/config'
import MetaTags from 'react-meta-tags';

const Detailblog = () => {
    const [Detailblog,setDetailblog]= useState<any>({})
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
getDetailblog()

    }, []);
    function getDetailblog(){
     
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/detailblogs?id="+window.localStorage.getItem('blogid'), requestOptions)
            .then(response => {


           
                response.json().then(rep => {
                    console.log(rep)
                    document.title = rep.titleMetatag

setDetailblog(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
   
return(
    <div className='row komeil-Detailblog-page'>
                    <MetaTags>

<meta property="canonical" content={Detailblog.canonicalMetatag} />
<meta name="description" content={Detailblog.descriptionMetatag} />
<meta property="og:title" content={Detailblog.titleMetatag} />
<meta property="og:image" content="%PUBLIC_URL%/Logo.png" />
</MetaTags>
       <div className='col-12'>
 
<div className='row2'>
    <div className='col-12 titlecol'>
       <h6>{Detailblog.topic}</h6>
   
    </div>
</div>
<div className='row row3'>
    <div className='col-xs-12 col-md-4 smallbanner'>
        <img src={Detailblog.firstadditionalimage} alt=''></img>
        <img className='imgmargin' src={Detailblog.secondadditionalimage} alt=''></img>
   <img className='imgmargin' src={Detailblog.thirdadditionalimage} alt=''></img>
    </div>
   <div className='col-xs-12 col-md-8 descol'>
    <div style={{direction:'rtl',textAlign:'right',paddingRight:'10px'}} dangerouslySetInnerHTML={{ __html: Detailblog.description }}></div>
  
   
    </div>
</div>

       </div>
    </div>
)
}
export default Detailblog