import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/images/logowithbg.jpg';
import './ticket.scss';
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Menuprofile from '../../Component/menuprofile/menuprofile'


const ticket = () => {
return(
    <div className='row topnoor-ticket-page' >
       <div className='col-12'>
           <div className='row'>
                      <div className='col-md-1'></div>
        <div className='col-md-8 col-xs-10 ticket-box'>
        <div className='row box-ticket-box'>
<div className='col-12'>
    <div className='row'> 
<div className='col-12 question-box'>
<i className="material-icons">account_circle</i>
<h6>سلام سوال داشتم</h6>
</div>
<div className='col-12 answer-box'>
<img src={Logo}></img>
<h6>سلام سوال بگو</h6>
</div>
    </div>
</div>
<div className='col-12 type-ticket-box'>
    <div className='row'> 
    <div className='col-2 col-type-ticket-box'>
<button>ارسال</button>
</div>
  
<div className='col-8 col-type-ticket-box'>
<input></input>
</div>
<div className='col-2 col-type-ticket-box'>
    <i className="material-icons">account_circle</i>
</div>
    </div>
</div>
</div>

        </div>
       
          <div className='col-md-3 col-xs-2'>
            <Menuprofile/>
        </div>


           </div>
           <div className='row'>
           <div className='col-md-1'></div>
           <div className='col-md-10 col-xs-12'>
               <div className='row row-yourquestion'>
               <div className='col-12 box-title-yourquestion'>
                   <h1>سوالات متداول</h1>
                   <h6>سوالات متدوال شما اینجاست</h6>
               </div>
               <div className='col-4 '>
                   <div className='yourquestion'>
       <h5>سوال اول؟</h5>
                   <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
             
                   </div>
              </div>
               <div className='col-4 '>
               <div className='yourquestion'>
       <h5>سوال اول؟</h5>
                   <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
             
                   </div>  </div>
               <div className='col-4 '>
               <div className='yourquestion'>
       <h5>سوال اول؟</h5>
                   <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
             
                   </div>      </div>
               <div className='col-4 '>
               <div className='yourquestion'>
       <h5>سوال اول؟</h5>
                   <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
             
                   </div>  </div>
               <div className='col-4 '>
               <div className='yourquestion'>
       <h5>سوال اول؟</h5>
                   <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
             
                   </div>  </div>
               <div className='col-4 '>
               <div className='yourquestion'>
       <h5>سوال اول؟</h5>
                   <h6>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،.</h6>
             
                   </div> </div>
               </div>
           </div>
           <div className='col-md-1'></div>
        

           </div>
       </div>


    </div>
)
}
export default ticket