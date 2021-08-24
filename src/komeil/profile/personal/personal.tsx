import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './personal.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Menuprofile from '../../Component/menuprofile/menuprofile'
import { Config } from 'komeil/config/config';
import { toast } from 'react-toastify';
import React, { useState,useEffect } from 'react';
const Personal = () => {
    const [userdata,setuserdata]=useState<any>({})
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [email,setemail]=useState('')
    const [address,setaddress]=useState('')
    const [codeposti,setcodeposti]=useState('')
    useEffect(() => {
        getuserdata()



    }, []);
    function getuserdata(){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
    
            }
    
    
        };
    
        fetch(Config()['webapi'] + "/user/detail?mobile="+window.localStorage.getItem('phone'), requestOptions)
            .then(response => {
    
    
    
                response.json().then(rep => {
    
    setfirstName(rep.firstName)
    setlastName(rep.lastName)
    setemail(rep.email)
    if(rep.addresses.length!==0){
        setaddress(rep.addresses[0].des)
        setcodeposti(rep.addresses[0].postalcode) 
    }
   
                    setuserdata(rep)
                })
    
    
    
    
    
            })
            .catch(error => console.log('error', error));
    }
   function editdata(){
     const body ={
        "email": email,
        "firstName": firstName,
        "lastName": lastName,
        "mobile": window.localStorage.getItem('phone')
     }
     var requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            // "Authorization": "Basic " + window.localStorage.getItem('basic')

        },
        body:JSON.stringify(body)


    };

    fetch(Config()['webapi'] + "/user/edit", requestOptions)
        .then(response => {

console.log(response)
if(response.status===200){
const bodyaddress = {
   
        "des":address,
     
        "codeposti": codeposti
    
   
  }
  var requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // "Authorization": "Basic " + window.localStorage.getItem('basic')

    },
    body:JSON.stringify(bodyaddress)


};

fetch(Config()['webapi'] + "/user/address?mobile="+window.localStorage.getItem('phone'), requestOptions)
    .then(response => {


if(response.status===200){
    toast.success('با موفقیت ثبت شد')
}
 





    })
    .catch(error => console.log('error', error));

}
       




        })
        .catch(error => console.log('error', error));

   }
return(
    <div className='row topnoor-personal-page' >
       
       <div className='col-md-1'></div>
        <div className='col-md-8 col-xs-10 personal-box'>
<div className='row box-personal-box'>
<div className='col-12'>
    <div className='row'> 
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
        <div className='col-item-box-personal-box'>
   <h1> اطلاعات کاربری من</h1>
        </div>
     
      
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
        <h6> نام خانوادگی</h6>
        <input value={lastName} onChange={(e)=>setlastName(e.target.value)}></input>
    </div>
    <div className='col-md-6  col-xs-12 item-box-personal-box'>
        <h6>نام</h6>
        <input value={firstName} onChange={(e)=>setfirstName(e.target.value)}></input>
    </div>
    <div className='col-md-6  col-xs-12 item-box-personal-box'>
        <h6>شماره تلفن</h6>
        <input value={userdata.mobile} disabled={true}></input>
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
        <h6>ایمیل</h6>
        <input value={email} onChange={(e)=>setemail(e.target.value)}></input>
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
      
    </div>
    <div className='col-md-6 col-xs-12 item-box-personal-box'>
        <h6>کد پستی</h6>
        <input value={codeposti} onChange={(e)=>setcodeposti(e.target.value)}></input>
    </div>
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
        <h6>آدرس</h6>
        <input value={address} onChange={(e)=>setaddress(e.target.value)}></input>
    </div>
    <div className='col-md-12 col-xs-12 item-box-personal-box'>
       <button onClick={editdata}>ثبت</button>
    </div>
    </div>
</div>

</div>
        </div>
       
          <div className='col-md-3 col-xs-2'>
            <Menuprofile/>
        </div>



    </div>
)
}
export default Personal