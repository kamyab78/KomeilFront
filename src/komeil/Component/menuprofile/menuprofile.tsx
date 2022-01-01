import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './menuprofile.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { Config } from 'komeil/config/config';
const Menuprofile = () => {
    const [userdata,setuserdata]=useState<any>({})
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
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
 
   
                    setuserdata(rep)
                })
    
    
    
    
    
            })
            .catch(error => console.log('error', error));
    }
return(
    <div className='row topnoor-menuprofile-page'>
        <div className='col-12'>
            <div className='box-info'>
            <i className="material-icons">account_circle</i>
            <div className='info'>
 <h1>{firstName} {lastName}</h1>
 <h6>{userdata.mobile}</h6>
            </div>
            </div>
           
            <div className='box-link'>
            <Link to='/profile/personal' className=" item-box-link" >اطلاعات شخصی</Link>
            <Link to='/profile/order' className=" item-box-link" >سفارشات</Link>
       
            <Link to='/profile/ticket' className=" item-box-link" >تیکت</Link>
            <h6 className=" item-box-link" onClick={()=>{localStorage.clear();window.location.replace('/')}} >خروج</h6>
            </div>
        </div>
       
    </div>
)
}
export default Menuprofile