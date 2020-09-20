import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to recieve our best deals
                </p>

                <p className="footer-subscription-text">
                    You can unsubscribe anytime
                </p>

                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Enter Email Addresss" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>

            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
<h2>About Us</h2>
<Link>How We Fly </Link>
<Link to='/'>Testimonials</Link>
            <Link to='/'>Advertising</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
                </div>
                <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
            </div>
            
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PLANET
              <i class='fa fa-circle-o-notch fa-spin' />
            </Link>
          </div>
          <small class='website-rights'>PLANET O © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
