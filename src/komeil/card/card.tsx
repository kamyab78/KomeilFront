import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './card.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Mask from '../../assets/images/landing/mask.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Config } from 'komeil/config/config';
import Emptybas from '../../assets/images/emptybascket.png'
const Card = () => {
  const [Orderlist,setOrderlist]=useState<any>([])
  useEffect(() => {
getorderlist()
}, []);
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
               setOrderlist(rep)
            })
          }
          





        })
        .catch(error => console.log('error', error));

}
return(
    <div className='row topnoor-card-page'>
         <div className='col-1'/>
        <div className='col-10 title-box'>
<h1>سبد خرید</h1>
        </div>
        {Orderlist.length===0?(
            <>
          <div className='col-1'/>
        <div className='col-1'/>
        <div className='col-10'>
     <div className='row row-empty'>
<div className='box-row-empty'>
  <img src={Emptybas}></img>
  <h1>سبد خرید شما خالی است</h1>
  <Link className='txtback' to="/">بازگشت</Link>
</div>
            </div>
        </div>
        <div className='col-1'/>
            </>
          ):null}
     
    </div>
)
}
export default Card