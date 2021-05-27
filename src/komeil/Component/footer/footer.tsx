import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/Logosmall.png';
import './footer.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Log1 from '../../../assets/images/footer/log1.png'
import Log2 from '../../../assets/images/footer/log2.png'
const footer = () => {
return(
    <div className='row komeil-footer-page'>
        <div className='col-12'>
            <div className='row '>
               
            <div className='col-4 logo-enamad-box'>
        <img src={Log1} alt=''></img>
        <img src={Log2} alt='' style={{position:'absolute',right:'0'}}></img>   
            
                </div>
                <div className='col-4 community-box'>
                <h6>تماس با ما</h6>
                <h6>تماس با ما</h6>
                <h6>تماس با ما</h6>
                <h6>تماس با ما</h6>
               
            
                </div>
                <div className='col-4 community-box'>
                <h1>تهران - تهران - تهران - تهران</h1>
              
                               <h6>021-1212123  -  021-23123123</h6>
                    <h6>kodmd@jfjfjf.kdkd</h6>
               
            
                </div>
         
            </div>
       
        </div>
    </div>
)
}
export default footer