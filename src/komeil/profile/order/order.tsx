import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './order.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Menuprofile from '../../Component/menuprofile/menuprofile'
import Mask1 from '../../../assets/images/landing/mask.png'
import React, { useEffect,useState ,useCallback} from 'react';
import { Config } from 'komeil/config/config';

const Order = () => {
    const [logList,setlogList]=useState<any>([])
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    getlogList()
    }, []);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    function getlogList(){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
    
            }
    
    
        };
    
        fetch(Config()['webapi'] + "/order/Alllog/"+window.localStorage.getItem('phone'), requestOptions)
            .then(response => {
    
    
    
                response.json().then(rep => {
    setlogList(rep)
   console.log(rep)
                })
    
    
    
    
    
            })
            .catch(error => console.log('error', error));
    }
    function caltotal(rep){
        var total=0
        for(var i=0;i<rep.length;i++){
if(rep[i].productItemResponseDTO.discount===0){
total+=(rep[i].productItemResponseDTO.netPrice)*rep[i].count
}
else{
total+=(rep[i].productItemResponseDTO.netPrice * ((100 - rep[i].productItemResponseDTO.discount) / 100))*rep[i].count
}
        }
        return total
    }
    return (
        <div className='row topnoor-order-page' >
            <div className='col-12'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 col-xs-10 order-box'>
                    <div className='row box-order-box'>
                        <div className='col-md-12 col-xs-12 box-order-box'>
                            <div className='row'>
                              <div className='col-12 col-box-order-box'>
   <h1>سفارشات</h1>
        </div>  
                            </div>
 
                            <div className='row'>



                              <div className='col-12 box-order-box'>
                              {logList.map((index:any)=>(
  <div className='item-box-order'>
<div className='firstRow-item-box-order'>
<h6> </h6>

<i></i>
<h5>:وضعیت</h5>
{index.orderList.orderStatus === "NOT_PAID" ?(
 <h6>پرداخت نشده</h6>   
):index.orderList.orderStatus === "PAID" ?(
    <h6>پرداخت شده</h6>   
):index.orderList.orderStatus === "FAIL" ?(
    <h6>ناموفق</h6>   
):(
    <h6>دریافت شده</h6>   
)}

</div>
<div className='secondRow-item-box-order'>
    {index.productItemResponseDTOS.map((res:any)=>(
        <div className='item-secondRow-item-box-order'>
    <img src={res.productItemResponseDTO.imageUrl}></img>
<h2>{res.productItemResponseDTO.name}</h2>
</div>
    ))}

</div>
<div className='thirdRow-item-box-order'>
    <h6>تومان</h6>
   <h5>{caltotal(index.productItemResponseDTOS).toLocaleString()}</h5> 
<h6>مبلغ کل</h6>

</div>
                                  </div>
))}
                                
                        
  
        </div>  
                            </div>
                        </div>
       
     
      
    </div>
                   
                    </div>
                    <div className='col-md-3 col-xs-2'>
                        <Menuprofile />
                    </div>
             

                </div>

            </div>


        </div>
    )
}
export default Order