import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './purchase.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask from '../../assets/images/landing/mask.png'
import React, { useEffect,useState ,useCallback} from 'react';
import { Config } from 'komeil/config/config';


const Purchase = () => {
    const [Orderlist,setOrderlist]=useState<any>([])
    const [cost,setcost]=useState<any>(0)
    useEffect(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
  getorderlist()
  }, []);
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
    function getorderlist(){
      var requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': '*/*',
              // "Authorization": "Basic " + window.localStorage.getItem('basic')
  
          }
  
  
      };
  
      fetch(Config()['webapi'] + "/order/log/"+window.localStorage.getItem('phone')+"/NOT_PAID", requestOptions)
          .then(response => {
            if(response.status===200){
                response.json().then(rep => {
  
                 console.log(rep)
                 var total=0
                 for(var i=0;i<rep.length;i++){
  if(rep[i].productItemResponseDTO.discount===0){
  total+=(rep[i].productItemResponseDTO.netPrice)*rep[i].count
  }
  else{
  total+=(rep[i].productItemResponseDTO.netPrice * ((100 - rep[i].productItemResponseDTO.discount) / 100))*rep[i].count
  }
                 }
                 setcost(total)
                 setOrderlist(rep)
              })
            }
            
  
  
  
  
  
          })
          .catch(error => console.log('error', error));
  
  }
    return (
        <div className='row topnoor-purchase-page'>
            <div className='col-12 col-title'>
                <h1>پرداخت نهایی</h1>
            </div>
            <div className='col-1'></div>

            <div className='col-5 ' style={{marginTop:'40px',display:'flex',flexDirection:'column'}}>
                {Orderlist.map((index:any)=>(
                    <div className='row col-items'>
<div className='sub-img-col-items'>
<img alt='' src={index.productItemResponseDTO.imageUrl}></img>
        </div>
<div className='sub-description-col-items'>
<h1>{index.productItemResponseDTO.name}</h1>
{index.colorname!=="0"?(
  <h2>رنگ :{index.colorname}</h2>
):null}

<h2>تعداد: {index.count}</h2>



{index.productItemResponseDTO.discount===0?(
     <div className=' col-items'>
      
       <h1>{((index.productItemResponseDTO.netPrice)*index.count).toLocaleString()}</h1>
   <h6>تومان</h6>
     </div>
  ):(
    <div className=' col-items'>
       
      <h1>{((index.productItemResponseDTO.netPrice * ((100 - index.productItemResponseDTO.discount) / 100))*index.count).toLocaleString()}  </h1>
  <h6>تومان</h6>
      </div>
  )}
</div>
     
  
</div>
                ))}


<div style={{flex:'1'}}>


      
  
</div>
    <div className='row box-price'>
    <div className='itemtotal-box-price'>
        <h1>جمع محصولات</h1>
        <i></i>
        
    <h1> {cost.toLocaleString()} </h1>
    <h6>تومان</h6>
    </div>
<div className='shiping-box-price'>
<h1>هزینه ارسال</h1>
        <i></i>
        <h6>0</h6>
</div>

<div className='total-box-price'>
<h1>مجموع</h1>
        <i></i>
        <h2> {cost.toLocaleString()} </h2>
    <h6>تومان</h6>
</div>
  
</div>
                  
            </div>
            <div className='col-5 col-data'>
                <div className='row'>
                    <div className='col-12 col-email'>
                        <h6>
                            شماره تلفن
                        </h6>
                        <input></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-address'>
                        <h6>
                           آدرس
                        </h6>
                        <div className='col-name-fname'>
                          <input placeholder="نام خانوادگی" style={{marginRight:'10px'}}></input>  
                          <input placeholder="نام" ></input>  
                        </div>
                        <input placeholder="شهر"></input>  
                        <input placeholder="آدرس"></input>  
                        <div className='col-name-fname'>
                          <input placeholder="کشور" style={{marginRight:'10px'}}></input>  
                          <input placeholder="استان" ></input>  
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 col-method'>
                        <h6>
                           نحوه ارسال
                        </h6>
                        <input></input>
                    </div>
                    <div className='col-6 col-date'>
                        <h6>
                          تاریخ ارسال
                        </h6>
                        <input></input>
                    </div>
                </div>
            </div>
            <div className='col-1'></div>

            <div className='col-1'></div>
            <div className='col-5'></div>
            <div className='col-5 col-btn'>
                <div className='row'>
                <div className='col-6 item-col-btn'>
                    <button className='buybutton'>خرید</button>
                </div>
                <div className='col-6 item-col-btn'>
                <button className='cancelbutton'>لغو</button>
                </div>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    )
}
export default Purchase