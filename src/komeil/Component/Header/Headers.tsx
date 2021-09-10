import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logo.png';
import './Header.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Config } from 'komeil/config/config';


const Headers = () => {
    const history = useHistory();
    const [stylecategory, setstylecategory] = useState({ display: 'none' });
    const [resSearch, setresSearch] = useState({ display: 'none' });
    const [categorylist, setcategorylist] = useState([])
    const [resultsearchlist, setresultsearchlist] = useState([])
    const [isLogin, setisLogin] = useState(false)
    const [searchtxt, setsearchtxt] = useState('')
    const [userdata, setuserdata] = useState<any>({})
    const [cartitemcount, setcartitemcount] = useState(-1)
    const [flag, setflag] = useState(0)
    useEffect(() => {
        getuserdata()
        console.log(window.localStorage.getItem('phone'))
        if (window.localStorage.getItem('phone') === null)
            setisLogin(false)
        else
            setisLogin(true)

        getCategory()
        getorderlist()

    }, []);
    function getCategory() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/landing/categories", requestOptions)
            .then(response => {



                response.json().then(rep => {
                    console.log(rep)
                    console.log(Math.floor(rep.length / 24))
                    setflag(Math.floor(rep.length / 24))

                    setcategorylist(rep)
                })





            })
            .catch(error => console.log('error', error));


    }
    function getuserdata() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/user/detail?mobile=" + window.localStorage.getItem('phone'), requestOptions)
            .then(response => {



                response.json().then(rep => {

                    setuserdata(rep)
                })





            })
            .catch(error => console.log('error', error));
    }
    function gotopage(id: any) {
        console.log(id)
        window.localStorage.setItem('categoryid', id)
        history.push('/shop')
    }
    function getorderlist() {
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                // "Authorization": "Basic " + window.localStorage.getItem('basic')

            }


        };

        fetch(Config()['webapi'] + "/order/log/" + window.localStorage.getItem('phone') + "/NOT_PAID", requestOptions)
            .then(response => {
                console.log(response)
                response.json().then(rep => {

                    console.log(rep)
                    setcartitemcount(rep.length)
                })





            })
            .catch(error => console.log('error', error));

    }
    function searchsome(value: any) {
        setsearchtxt(value)

        if (value === "") {
            setresSearch({ display: 'none' })
        }
        else {
            var requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    // "Authorization": "Basic " + window.localStorage.getItem('basic')

                }


            };

            fetch(Config()['webapi'] + "/landing/search-drop-down/" + value, requestOptions)
                .then(response => {



                    response.json().then(rep => {
                        console.log(rep)
                        setresultsearchlist(rep)
                        setresSearch({ display: 'block' })
                    })





                })
                .catch(error => console.log('error', error));

        }

    }
    function clickonsearchres(hash: any,categoryname:any) {
        setresSearch({ display: 'none' })
        setsearchtxt('')
        history.push('/detailproduct?hash=' + hash+'?category='+categoryname)
    }
    function pressenter(e: any) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            setresSearch({ display: 'none' })
            window.localStorage.setItem('searchkeyword', searchtxt)
            setsearchtxt('')
            history.push('/shopsearch')
        }

    }


    return (
        <div className="row main-div-header">
            <div className='col-12'>
                <div className='row'>


                    <div className='col-3 profile-card-div'>
                        <div className='shoping-div' onClick={()=>history.push('/cart')}>
                            <i className="material-icons-outlined">
                                shopping_bag
                            </i>
                            {cartitemcount>=1?(
   <h6>{cartitemcount}</h6>
                            ):null}
                         
                        </div>

                       
                            {isLogin?(
                                <div className='profile-div' onClick={()=>history.push('/profile/personal')}>
     <i style={{cursor:"pointer"}} className="material-icons-outlined" >
     person
 </i>  
 {userdata.firstName === null ? (
                                        <h6 className="d-none d-md-block">سلام کاربر محترم</h6>
                                    ) : (
                                        <h6 className="d-none d-md-block">سلام {userdata.firstName}</h6>
                                    )}
     </div>
                            ):(
                                <div className='profile-div' onClick={()=>history.push('/login')}>
                                    <i style={{cursor:"pointer"}} className="material-icons-outlined" >
                                person
                            </i>  
 <h6>ورود</h6>
                                </div>
                             
                            )}
                         
                        </div>

                 
                 <div className='col-2'></div>
                    <div className="col-4 search-div ">
                        <div className='box'>
                            <input placeholder='جستجوی محصولات در کمیل شاپ' onKeyUp={pressenter} value={searchtxt} onChange={(e) => searchsome(e.target.value)}></input>
                            <SearchIcon className='seachIcon' />
                            <div className='box-result' style={resSearch}>
                                {resultsearchlist.map((result: any) => (
                                    <div className=' item-box-result' onClick={() => clickonsearchres(result.productHash,result.categoryname)}>
                                        <h6 >
                                            {result.productName}
                                        </h6>
                                        <h1>
                                            در دسته بندی
                                        </h1>
                                        <h6>
                                            {result.categoryName}
                                        </h6>

                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                    <Link to='/' className=" col-2 logo-div" >
                        <img alt="" src={Logo} />

                    </Link>
                    <div className="col-1">


                    </div>
                </div>
                <div className='row bottom-box'>

                    <div className='col-4 prof-box'>
                        <h6>کمترین قیمت، بهترین کیفیت</h6>
                    </div>
                    <div className='col-1'></div>
                    <Link to='/aboutus' className="col-1 item-box" ><h5>درباره ما</h5></Link>
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
                    <Link to='/' className='col-1 item-box'>
                        <h5>خانه</h5>
                        <i className="material-icons-outlined">
home
</i>
                    </Link>
                    <div  className="col-2 category-box" onMouseEnter={e => {
                        setstylecategory({ display: 'block' });
                    }}
                        onMouseLeave={e => {
                            setstylecategory({ display: 'none' })
                        }} >

                        دسته بندی
                        <i className="material-icons-outlined">
                            reorder
                        </i>
                    </div>



                </div>
            </div>
            <div className='col-12 div-show-category' style={stylecategory} onMouseEnter={e => {
                                    setstylecategory({ display: 'block' });
                                }}
                                    onMouseLeave={e => {
                                        setstylecategory({ display: 'none' })
                                    }} >
                <div className='row row-result-category'>
                    {/* <div className=''>  */}
                    
                        {flag === 0 ? (
                                <div className="col-md-2 col-row-result-category" >
                        {categorylist.map((result: any, i) => (

                            <div className='col-item-category'>
                                   <img src={result.imageUrl}></img>
                                <h6 onClick={() => gotopage(result.id)}>
                                {result.name}
                            </h6>
                         
                       
                            </div>


                        ))}
                        </div>
                    ) : flag === 1 ? (
                        <>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(0, 23).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(23).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                             <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                        </>
                    ) : flag === 2 ? (
                        <>
                            <div className="col-md-2 col-row-result-category">
                                {categorylist.slice(0, 23).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(23, 47).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(47).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                        </>
                    ) : flag === 3 ? (
                        <>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(0, 23).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(23, 47).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(47, 81).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(81).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                        </>
                    ) : flag === 4 ? (
                        <>
                            <div className="col-md-2 col-row-result-category">
                                {categorylist.slice(0, 23).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(23, 47).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(47, 81).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(81, 105).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category" >
                                {categorylist.slice(105).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>

                        </>
                    ) : flag === 5 ? (
                        <>
                            <div className="col-md-2 col-row-result-category"  >
                                {categorylist.slice(0, 23).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category"  >
                                {categorylist.slice(23, 47).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category"  >
                                {categorylist.slice(47, 81).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category"  >
                                {categorylist.slice(81, 105).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category"  >
                                {categorylist.slice(105, 129).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>
                            <div className="col-md-2 col-row-result-category"  >
                                {categorylist.slice(129).map((result: any) => (
                                    <div className=' col-item-category'>
                                             <img src={result.imageUrl}></img>
                                        <h6 onClick={() => gotopage(result.id)}>
                                        {result.name}
                                    </h6></div>
                                ))}
                            </div>

                        </>
                    ) : flag === 6 ? (
                        <>
                        
                                <div className="col-md-2 col-row-result-category" >
                                    {categorylist.slice(0, 23).map((result: any) => (
                                        <div className=' col-item-category'>
                                                 <img src={result.imageUrl}></img>
                                            <h6 onClick={() => gotopage(result.id)}>
                                            {result.name}
                                        </h6></div>
                                    ))}
                                </div>
                                <div className="col-md-2 col-row-result-category" >
                                    {categorylist.slice(23, 47).map((result: any) => (
                                        <div className=' col-item-category'>
                                                 <img src={result.imageUrl}></img>
                                            <h6 onClick={() => gotopage(result.id)}>
                                            {result.name}
                                        </h6></div>
                                    ))}
                                </div>
                                <div className="col-md-2 col-row-result-category">
                                    {categorylist.slice(47, 81).map((result: any) => (
                                        <div className=' col-item-category'>
                                                 <img src={result.imageUrl}></img>
                                            <h6 onClick={() => gotopage(result.id)}>
                                            {result.name}
                                        </h6></div>
                                    ))}
                                </div>
                                <div className="col-md-2 col-row-result-category" >
                                    {categorylist.slice(81, 105).map((result: any) => (
                                        <div className=' col-item-category'>
                                                 <img src={result.imageUrl}></img>
                                            <h6 onClick={() => gotopage(result.id)}>
                                            {result.name}
                                        </h6></div>
                                    ))}
                                </div>
                                <div className="col-md-2 col-row-result-category" >
                                    {categorylist.slice(105, 129).map((result: any) => (
                                        <div className=' col-item-category'>
                                                 <img src={result.imageUrl}></img>
                                            <h6 onClick={() => gotopage(result.id)}>
                                            {result.name}
                                        </h6></div>
                                    ))}
                                </div>
                                <div className="col-md-2 col-row-result-category" >
                                    {categorylist.slice(129, 143).map((result: any) => (
                                        <div className=' col-item-category'>
                                                 <img src={result.imageUrl}></img>
                                            <h6 onClick={() => gotopage(result.id)}>
                                            {result.name}
                                        </h6></div>
                                    ))}
                                </div>
                                <div className="col-md-2 col-row-result-category" >
                                    {categorylist.slice(143).map((result: any) => (
                                        <div className=' col-item-category'>
                                                 <img src={result.imageUrl}></img>
                                            <h6 onClick={() => gotopage(result.id)}>
                                            {result.name}
                                        </h6></div>
                                    ))}
                                </div>

                            </>
                                    ): 
                  null} 
                    </div>
                   

                        {/* </div> */}
            </div>


        </div>
    );

}
export default Headers;
