import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './bazarche.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FirstBanner from '../../assets/images/bazarche/firstBanner.png'
import SeconndBanner from '../../assets/images/bazarche/seconndBanner.png'
import Mask from '../../assets/images/landing/mask.png'
import { Config } from 'komeil/config/config';
import React , {useEffect,useState} from 'react'
const Bazarche = () => {
    const [amazingofferlist,setamazingofferlist]=useState<any>([])
    const [productlist,setproductlist]=useState<any>([])
    const [firstBanner, setfirstBanner] = useState('')
    const [firstBannername, setfirstBannername] = useState('')
    const [firstBannerid, setfirstBannerid] = useState('')
    const history = useHistory();
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        getAmazingoffer()
       
        getBanner()
    }, []);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    function getAmazingoffer() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/amazing-offers?page=0&size=1000000", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    setamazingofferlist(rep)
                })





            })
            .catch(error => console.log('error', error));
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
                    console.log(rep)
                    for (var i = 0; i < rep.length; i++) {
                        if (rep[i].bannerType === 'firstbanner_stock'){
                            setfirstBanner(rep[i].imageUrl)
                            setfirstBannername(rep[i].categoryName)
                            setfirstBannerid(rep[i].categoryId)
                        }
       
                    }

                })





            })
            .catch(error => console.log('error', error));
    }
return(
    <div className='row koemil-bazarche-page'>
         <div className='col-12 title-bazarche'>
<h6>
    بازارچه
</h6>
         </div>
        <div className='col-12 first-banner'>
            <img alt='' src={firstBanner}></img>
        </div>
        <div className='col-12 '>
                    
                        <div className='row'>
   {amazingofferlist.map((index:any)=>(
        <div className='col-md-3 col-xs-6 '>
       <div className='subitem-box-result' onClick={()=>history.push('/detailproduct?hash='+index.hash+'?category='+index.categoryname)}>
            <div className='div-img-subitem-box-result'>
          <img src={index.imageUrl} alt=''></img>
      </div>
      <h6>{index.name}</h6>
      {index.stock === 0 ? (


<h6 className='simpletxt'>به زودی</h6>


) : (
index.have === true ? (


    <div className='div-price-subitem-box-result'>
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }} >

{index.discount !== 0 ? (
  <>
      <h3 className='amountafterdiscount'>{index.netPrice.toLocaleString()}</h3>

      <h3 >{(index.netPrice * ((100 - index.discount) / 100)).toLocaleString()}</h3>
  </>
) : (
  <h3 >{index.netPrice.toLocaleString()}</h3>
)}

<h3>تومان</h3>
</div>

<i></i>
{index.discount !== 0 ? (
                                            <div className='discount-subitem-box-result'>

                                            <h6 className='discounttxt'>{index.discount}%</h6>
                                        
</div>
                                          ) : null}

    </div> 
   

) : (


    <h6 className='simpletxt'>محصول ناموجود</h6>


)
)}
 
       </div>

    
   </div>  
   ))}


   
</div>
  
                        </div>
                    </div>
              

)
}
export default Bazarche