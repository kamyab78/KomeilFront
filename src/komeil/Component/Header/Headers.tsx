import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './Header.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';



const Headers = () => {





    return (
        <div className="row main-div-header">
            <div className='col'>
                <div className='row'>
                    <div className="col-7 search-div ">
                        <div className='box'>
                            <input></input>
                            <SearchIcon className='seachIcon' />
                        </div>


                    </div>


                    <Link to='/' className=" col-5 logo-div" >
                        <img src={Logo} alt="" />
                        <h1>تاپ نور</h1>
                    </Link>
                </div>
                <div className='row bottom-box'>

                    <div className='col-3 prof-box'>
                        <Dropdown className="dropdownClasss">
                            <Dropdown.Toggle variant="none" className="dropdownToggleClasss">
                                <i className="material-icons">account_circle</i>
                                <h6 className="d-none d-md-block">علی</h6>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link
to='/profile/personal'
                                        className="dropdowm-item"
                                    >
                                        <i className="material-icons">account_circle</i>
                                        <h6>پروفایل</h6>
                                    </Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <div className="dropdowm-item">
                                        <i className="material-icons">logout</i>
                                        <h6>خروج</h6>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link className="material-icons-outlined bascket" to='/cart'>
                            shopping_cart
</Link>
                    </div>
                    <Link to='/contactus' className="col-1 item-box" >تماس با ما</Link>
                    <Link to='/aboutus' className="col-1 item-box" >درباره ما</Link>
                    <Link to='/blog' className="col-1 item-box" >بلاگ</Link>
                    <Link to='/moshavere' className="col-1 item-box" >مشاوره</Link>
                    <Link to='/bazarche' className="col-1 item-box" >بازارچه</Link>
                    <Link to='/home' className="col-1 item-box" >خانه</Link>
                    <Link to='/bazarche' className="col-2 category-box" >دسته بندی</Link>
                    <div className='col-1'></div>


                </div>
            </div>


        </div>
    );

}
export default Headers;
