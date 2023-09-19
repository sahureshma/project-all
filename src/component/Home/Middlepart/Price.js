import { Link } from 'react-router-dom';
import {  AiOutlineMail  } from "react-icons/ai";
import { BsWhatsapp  } from "react-icons/bs";
const Pricing = () =>{
    return(
   
        <section class="membership container" id="pricing">
        <h3 class="section-title">choose a plan that is write for you!!</h3><br/><br/>
        <div class="row membership">
          <div class="col membership-card">
            <div>
              <span class="membership-plan">Basic Plan</span>
              <h4 class="card-title membership-title">$30</h4>
              <p class="card-description membership-description">per month</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 25 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 25gb storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                <a href='"#'>
                <AiOutlineMail  className='sup'/> 
                Email support
                </a>
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">
            <Link to="/plan" className='out'>
              GET STARTED
              </Link>
              </a>
          </div>
          <div class="col membership-card active">
            <div>
              <span class="membership-plan">Medium Plan</span>
              <h4 class="card-title membership-title">$60</h4>
              <p class="card-description membership-description">per month</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 50 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 60gb  storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                <a href='#'>
                <AiOutlineMail  className='sup'/>
                Email support + chat support
                </a>
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">
            <Link to="/plan" className='out'>
              GET STARTED
              </Link>
              </a>
          </div>
          <div class="col membership-card">
            <div>
              <span class="membership-plan">Premiere Plan</span>
              <h4 class="card-title membership-title">$90</h4>
              <p class="card-description membership-description">per month</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 75 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 100gb storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
               <a href='#' className='suppp'>
                <AiOutlineMail />
                Email + chat  
                </a>
                <a href='#' className='wha'>
                  <BsWhatsapp/>
                  whatsapp support
                </a>
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">
            <Link to="/plan" className='out'>
              GET STARTED
              </Link>
              </a>
          </div>
        </div>
      </section>
    

    );
};
export default Pricing;