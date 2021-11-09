import React, { useRef } from 'react';
import { ReduxState } from 'interface';
import { connect, ConnectedProps } from 'react-redux';
import './shopsearch.scss';
// import Slider from 'react-slick';
import { Link, useHistory } from 'react-router-dom';
import { navigationAnim, RoutePath } from '../../data';
import Banner from '../../assets/images/landing/banner.png'
import Bazarcheimg from '../../assets/images/landing/shegeft.png'
import Mask from '../../assets/images/shop/mask.png'
import { Checkbox ,Switch,Slider } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { Config } from 'komeil/config/config';
const ShopSearch: React.FC<ConnectedProps<typeof connector>> = function () {
    const [productlist,setproductlist]=useState<any>([])
    useEffect(() => {
        getlist(window.localStorage.getItem('searchkeyword'))
    }, [window.localStorage.getItem('categoryid')]);
    function getlist(keyword:any){
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')
    
            }
    
    
        };
    
        fetch(Config()['webapi'] + "/landing/search-enter/"+keyword+"?page=0&size=10000", requestOptions)
            .then(response => {
    
    
    
                response.json().then(rep => {
    console.log(rep)
                    setproductlist(rep)
                })
    
    
    
    
    
            })
            .catch(error => console.log('error', error));
    }
    const history = useHistory();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };
    return (
        <div className="komeil-shopsearch-page row">
            <div className='col'>

<div className='row row-result'>
    <div className='col-md-9 col-xs-12 box-result'>
<div className='row'>
   
    <div className='col-2 sortitem-box-result'>
        <h6>پربازدیدترین</h6>
    </div>
    <div className='col-2 sortitem-box-result'>
    <h6>محبوب ترین</h6>
    </div>
    <div className='col-2 sortitem-box-result'>
    <h6>ارزانترین</h6>
    </div>
    <div className='col-1 sortitem-box-result'>
    <h6>گرانترین</h6>
    </div>
    <div className='col-2 sortitem-box-result'>
    <h6>پرفروش ترین</h6>
    </div>
    <div className='col-3 sortitem-box-result'>
<h6> : مرتب سازی برا اساس</h6>
 
                        <i className="material-icons-outlined">
reorder
</i>
    </div>
    
</div>
<div className='row' style={{minHeight:'600px'}}>
{productlist.map((index:any)=>(
   <div className='col-md-3 col-xs-6 '>
       <div className='subitem-box-result' onClick={()=>history.push('/detailproduct?hash='+index.hash+'?category='+index.categoryname)}>
           <Link to={'/detailproduct?hash='+index.hash+'?category='+index.categoryname}>
                  <div className='div-img-subitem-box-result' >
       <img src={index.imageUrl} alt=''></img>
   </div>
   <h6>{index.name}</h6>
   {index.stock === 0 ? (


<h6 className='simpletxt'>به زودی</h6>


) : (
index.have === true ? (


    <div className='div-price-subitem-box-result'>
    <div className="div-price-subitem-box-result-price-amount">
 {index.discount!==0?(
        <>
      <h5 className="firstprice">
      {index.netPrice.toLocaleString()}
      </h5>
<h5>{(index.netPrice * ((100 - index.discount) / 100)).toLocaleString()} </h5>  
<h5>تومان</h5>
        </>
       
    ):(
      <h5>{index.netPrice.toLocaleString()} تومان</h5>  
    )}
    </div>


<i></i>
{index.discount!==0?(
<div className='discount-subitem-box-result'>
<h3>{index.discount}%</h3>
</div>   
):null}

</div>



) : (


<h6 className='simpletxt'>محصول ناموجود</h6>


)
)}
           </Link>
           
            </div>

</div>

   ))}

</div>
  
    </div>
    <div className='col-md-2 col-xs-12 box-filter'>
        <div className='row '>
            <div className='col-12 box-col-filter'>
                <div className='row'>
                    <div className='col-12 title-list-of-filter-col' >
                        <h6>حذف همه</h6>
<i></i>
<h1>فیلتر های اعمال شده</h1>
                    </div>
                    <div className='col-12 list-of-filter-col' >
              
                    </div>
                </div>

            </div>
        </div>
        <div className='row'>
        <div className='col-12 box-col-brand-filter'>
                <div className='row'>
                    <div className='col-12 title-list-of-brand-filter-col' >
                        <h6>برند ها </h6>

                    </div>
                    <div className='col-12 list-of-brand-filter-col' >
              <div className='sub-list-of-brand-filter-col'>

                  <h1>iran</h1>
                  <i></i>
                    <h6>ایران</h6>
                  <Checkbox className='check-classs'></Checkbox>
                
              </div>
              <div className='sub-list-of-brand-filter-col'>

<h1>iran</h1>
<i></i>
  <h6>ایران</h6>
<Checkbox className='check-classs'></Checkbox>

</div>
<div className='sub-list-of-brand-filter-col'>

<h1>iran</h1>
<i></i>
  <h6>ایران</h6>
<Checkbox className='check-classs'></Checkbox>

</div>
                    </div>
                </div>

            </div>
        </div>
        <div className='row'>
        <div className='col-12 box-col-available-filter'>
                <div className='row'>
                    <div className='col-12 available-filter-col' >
                        <h6>نمایش  کالاهای موجود </h6>
<Switch className='swich-class' color='primary'/>
                    </div>
          

            </div>
     
        </div>
        </div>
        <div className='row'>
        <div className='col-12 box-col-price-filter'>
                <div className='row'>
                    <div className='col-12 title-price-filter-col' >
                        <h6>محدوده قیمت</h6>

                    </div>
                    <div className='col-12 price-filter-col' >
                        <h6>از قیمت</h6>
<div className='div-input'>
    <input></input>
    <h6>تا</h6>
    <input></input>
</div>
<Slider/>
<div className='div-btn'>
  <button>تایید</button>  
</div>

                    </div>

            </div>
     
        </div>
        </div>
        
    </div>
    </div>   
          
            </div>

        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    text: state.language,
});

const connector = connect(mapStateToProps);
export default connector(ShopSearch);
