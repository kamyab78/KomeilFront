import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './blog.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Bigbanner from '../../assets/images/blog/firstB.png'
import SecondBanner from '../../assets/images/blog/secondB.png'
import Image2 from '../../assets/images/blog/Mask.png'
import { useEffect,useState } from 'react';
import { Config } from '../config/config'
const Blog = () => {
    const [firstBannerBlog,setfirstBannerBlog]=useState('')
    const [blog,setblog]=useState([])
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        getBanner()
        getblog()
    }, []);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      function getBanner() {
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
                    console.log(rep)
                    for (var i = 0; i < rep.length; i++) {
                        if (rep[i].bannerType === 'firstbanner_blog') {
                            setfirstBannerBlog(rep[i].imageUrl)
                     
                        }

                    }

                })





            })
            .catch(error => console.log('error', error));
    }
function getblog(){
    var requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            // "Authorization": "Basic " + window.localStorage.getItem('basic')

        }


    };

    fetch(Config()['webapi'] + "/landing/blogs", requestOptions)
        .then(response => {


       
            response.json().then(rep => {
                console.log(rep)
setblog(rep)
            })





        })
        .catch(error => console.log('error', error));
}
return(
    <div className='row topnoor-blog-page'>
       <div className='col-12'>
<div className='row'>
    <div className='col-12 bigbanner'>
        <img src={firstBannerBlog} alt=''></img>
        <div className='box-txt-blog-bigbanner'>
            <h1>اخبار</h1>
            
        
        </div>
    </div>
</div>

<div className='row row3'>
    <div className='col-md-1'></div>
    <div className='col-md-10  col-xs-12 '>
        <div className='row row-news'>
        {blog.map((item:any)=>(
   <div className='col-md-4 col-xs-12 '>
       <div className="item-news">
              <div className='img-item-news'>
       <img alt='' src={item.imageurl}></img>
   </div>

   <h6>{item.topic}</h6>
 
   <h5>
     
     </h5>
  
         
        <div className='btn-more-box'>
   <button onClick={()=>{window.localStorage.setItem('blogid',item.id)}}>
       <Link to='/detailblog'>
       خواندن بیشتر
   </Link>
   </button>
   </div> 
  
       </div>

   
               </div>
            ))}
            </div>
  
    </div>
    <div className='col-md-1'></div>
</div>
   
     
       </div>
    </div>
)
}
export default Blog