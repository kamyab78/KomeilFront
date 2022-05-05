import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from 'assets/images/Logo.png';
import './login.scss';
import { useEffect, useState } from 'react';
// import { Config } from 'topnoor/config/config';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { Config } from 'komeil/config/config';
const Login = () => {
    const[step,setstep]=useState(0)
    const [phone,setphone]=useState('')
    const [otp,setotp]=useState('')
    const [oldpassword,setoldpassword]=useState('')
    const [password,setpassword]=useState('')
    const history = useHistory();
//     useEffect(() => {
// localStorage.clear()

//     }, []);
    function checkmobile(){
        const body={
            "mobile": phone
        }
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
            },
            body:JSON.stringify(body)
        };

        fetch(Config()['webapi'] + "/user/mobile", requestOptions)
            .then(response => {
                response.json().then(rep => {
                    console.log(rep)
                    if(rep.registered)
                    setstep(1)
                    else{
                       setstep(2)  
                       getotp()
                    }
                   
                })
            })
            .catch(error => console.log('error', error));
    }
    function getotp(){
        const body={
            "mobile": phone
        }
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
            },
            body:JSON.stringify(body)
        };

        fetch(Config()['webapi'] + "/user/otp", requestOptions)
            .then(response => {
                if(response.status===200){
                    //  setstep(2)  
                }
            })
            .catch(error => console.log('error', error));
    }

    function confirmpass(){
        const body={
            "mobile": phone,
            "password":oldpassword
        }
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
            },
            body:JSON.stringify(body)
        };

        fetch(Config()['webapi'] + "/user/confirmpass", requestOptions)
            .then(response => {
                response.json().then(rep => {
                    console.log(rep)
             if(rep.code===200){
              window.localStorage.setItem('phone',phone)  
              window.location.replace('/home')
             
             }
         
                   else{
                    toast.error(rep.message);
                   }
                })
            })
            .catch(error => console.log('error', error));
    }
    function confirmotp(){
        const body={
            "mobile": phone,
            "code":otp
        }
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
            },
            body:JSON.stringify(body)
        };

        fetch(Config()['webapi'] + "/user/confirmOtp", requestOptions)
            .then(response => {
                response.json().then(rep => {
                    console.log(rep)
             if(rep.code===200)
                   setstep(3)
                   else{
                    toast.error(rep.message);
                   }
                })
            })
            .catch(error => console.log('error', error));
    }
    function forgetpass(){
        setstep(2)
        getotp()
    }
    function setpass(){
        const body={
            "mobile": phone,
            "password":password
        }
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
            },
            body:JSON.stringify(body)
        };

        fetch(Config()['webapi'] + "/user/setpass", requestOptions)
            .then(response => {
                response.json().then(rep => {
                    console.log(rep)
             if(rep.code===200){
                window.localStorage.setItem('phone',phone)  
                 window.location.replace('/home')  
             }
           
                   else{
                    toast.error(rep.message);
                   }
                })
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div className='row komeil-login-page'>
  <div className='col col-login'>
      <div className='box-login'>
          <div className='boxcenter'>
              <img src={Logo} alt="" />
          </div>
          
{step===0?(
    <div className='stepenterphone'>
        <h2>ورود / ثبت نام</h2>
         <h6>شماره خود را وارد کنید</h6>
         <input value={phone} onChange={(e)=>setphone(e.target.value)}></input>
     
             <button onClick={checkmobile}>ورود به کمیل شاپ</button>
     <h3>.شما با ثبت نام و ادامه مراحل قوانین و مقررات را پذیرفته اید</h3>
     </div>
   
):step===1?(
    <div className='stepenterphone'>
    <h6>رمز خود را وارد کنید</h6>
    <input value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)}></input>
<h1 onClick={forgetpass}>فراموشی رمز</h1>
        <button onClick={confirmpass}>تایید</button>

</div>
):step===2?(
    <div className='stepenterphone'>
    <h6>کد تایید را وارد کنید</h6>
    <input value={otp} onChange={(e)=>setotp(e.target.value)}></input>
<h1 onClick={ ()=>setstep(0)}>اصلاح شماره</h1>
        <button onClick={confirmotp}>تایید</button>

</div>
):(
    <div className='stepenterphone'>
    <h6>رمز عبور خود را انتخاب کنید</h6>
    <input value={password} onChange={(e)=>setpassword(e.target.value)}></input>

        <button onClick={setpass}>تایید</button>

</div>
)}
      </div>
  </div>
        </div>
    )
}
export default Login