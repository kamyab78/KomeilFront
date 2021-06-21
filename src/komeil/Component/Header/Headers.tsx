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
            

<div className='col-2 profile-card-div'>
<div className='shoping-div'>
       <i className="material-icons-outlined">
shopping_bag
</i>
       </div>
   <div className='profile-div'>
   <i className="material-icons-outlined">
person
</i>
       </div>
    
</div>
                    <Link to='/' className=" col-5 logo-div" >
                        <img alt="" src={Logo}/>
                       
                    </Link>
                    <div className="col-4 search-div ">
                        <div className='box'>
                            <input placeholder='جستجوی محصولات در کمیل شاپ'></input>
                            <SearchIcon className='seachIcon' />
                        </div>


                    </div>
                    <div className="col-1">
                    

                    </div>
                </div>
                <div className='row bottom-box'>

                    <div className='col-4 prof-box'>
<h6>کمترین قیمت، بهترین کیفیت</h6>
                    </div>
               <div className='col-2'></div>
                    <Link to='/aboutus' className="col-1 item-box" ><h5>درباره ما</h5></Link>
                   <Link to='/contactus' className="col-1 item-box" ><h5>تماس با ما</h5></Link>
                    <Link to='/bazarche' className="col-2 item-box" >
                        <div className='promotion-box'>
                                               <h6>
                          کالاهای تخفیف دار
                          
                          </h6>  
                          <i className="material-icons-outlined">
local_offer
</i> 
                        </div>
  
                        </Link>
                   
                    <Link to='/' className="col-2 category-box" >

                        دسته بندی
                        <i className="material-icons-outlined">
reorder
</i>
                    </Link>
                    


                </div>
            </div>


        </div>
    );

}
export default Headers;
