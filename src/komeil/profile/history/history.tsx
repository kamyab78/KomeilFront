import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './history.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Menuprofile from '../../Component/menuprofile/menuprofile'
import Mask1 from '../../../assets/images/landing/mask.png'
import React, { useEffect,useState ,useCallback} from 'react';
import { Config } from 'komeil/config/config';


const History = () => {
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
    
   console.log(rep)
                })
    
    
    
    
    
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div className='row topnoor-history-page' >
            <div className='col-12'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 col-xs-10 history-box'>
                        <div className='row box-history-box'>
                            <div className='col-6 date-box'>
                                <h6>تاریخ ارسال : نیبنبسنیب </h6>
                            </div>
                            <div className='col-6 code-box'>
                                <h6>کد ارسال : ۱۲۱۲۳</h6>
                            </div>
                            <div className='col-12 product-box'>
                                <div className='row'>
                                    <div className='col-2 item-price-product-box'>
                                        <h6> 200$</h6>
                                    </div>

                                    <div className='col-8 item-name-product-box'>
                                        <h6>لامپ دیواری</h6>
                                        <h6>رنگ : سفید</h6>
                                    </div>
                                    <div className='col-2 item-img-product-box'>
                                        <img src={Mask1} alt=''></img>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2 item-price-product-box'>
                                        <h6> 200$</h6>
                                    </div>

                                    <div className='col-8 item-name-product-box'>
                                        <h6>لامپ دیواری</h6>
                                        <h6>رنگ : سفید</h6>
                                    </div>
                                    <div className='col-2 item-img-product-box'>
                                        <img src={Mask1} alt=''></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 sum-box'>
                                <h6> 200$</h6>
                            </div>
                            <div className='col-8 '>

                            </div>
                            <div className='col-2 sum-box'>
                                <h6>مجموع</h6>
                            </div>
                            <div className='col-2 sum-box'>
                                <h6> 200$</h6>
                            </div>
                            <div className='col-8 '>

                            </div>
                            <div className='col-2 sum-box'>
                                <h6>هزینه ارسال</h6>
                            </div>
                            <div className='col-2 price-total-sum-box'>
                                <h6> 200$</h6>
                            </div>
                            <div className='col-8 '>

                            </div>
                            <div className='col-2 txt-total-sum-box'>
                                <h6>مجموع کل</h6>
                            </div>

                        </div>
                        <div className='row box-history-box'>
                            <div className='col-6 date-box'>
                                <h6>تاریخ ارسال : نیبنبسنیب </h6>
                            </div>
                            <div className='col-6 code-box'>
                                <h6>کد ارسال : ۱۲۱۲۳</h6>
                            </div>
                            <div className='col-12 product-box'>
                                <div className='row'>
                                    <div className='col-2 item-price-product-box'>
                                        <h6> 200$</h6>
                                    </div>

                                    <div className='col-8 item-name-product-box'>
                                        <h6>لامپ دیواری</h6>
                                        <h6>رنگ : سفید</h6>
                                    </div>
                                    <div className='col-2 item-img-product-box'>
                                        <img src={Mask1} alt=''></img>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2 item-price-product-box'>
                                        <h6> 200$</h6>
                                    </div>

                                    <div className='col-8 item-name-product-box'>
                                        <h6>لامپ دیواری</h6>
                                        <h6>رنگ : سفید</h6>
                                    </div>
                                    <div className='col-2 item-img-product-box'>
                                        <img src={Mask1} alt=''></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 sum-box'>
                                <h6> 200$</h6>
                            </div>
                            <div className='col-8 '>

                            </div>
                            <div className='col-2 sum-box'>
                                <h6>مجموع</h6>
                            </div>
                            <div className='col-2 sum-box'>
                                <h6> 200$</h6>
                            </div>
                            <div className='col-8 '>

                            </div>
                            <div className='col-2 sum-box'>
                                <h6>هزینه ارسال</h6>
                            </div>
                            <div className='col-2 price-total-sum-box'>
                                <h6> 200$</h6>
                            </div>
                            <div className='col-8 '>

                            </div>
                            <div className='col-2 txt-total-sum-box'>
                                <h6>مجموع کل</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-2 col-xs-2'>
                        <Menuprofile />
                    </div>
                    <div className='col-md-1'></div>

                </div>

            </div>


        </div>
    )
}
export default History