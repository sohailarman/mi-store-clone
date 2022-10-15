import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"


const youtubeIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/></svg>
const twitterIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
const facebooIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/></svg>
const instagramIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>


const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="m18.208 25.667 9.459-9.459-1.959-1.958-7.416 7.458-4-4-2 2.042ZM20 36.625q-5.833-1.458-9.583-6.729t-3.75-11.604v-10l13.333-5 13.333 5v10q0 6.333-3.75 11.604-3.75 5.271-9.583 6.729Zm0-2.875q4.625-1.5 7.583-5.812 2.959-4.313 2.959-9.646V10.25L20 6.25l-10.542 4v8.042q0 5.333 2.959 9.646Q15.375 32.25 20 33.75ZM20 20Z"/></svg>
const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M18.625 34.917q-5.083-.5-8.521-4.271-3.437-3.771-3.437-8.938 0-3.083 1.354-5.812t3.771-4.521l2 1.958q-2.084 1.417-3.209 3.625-1.125 2.209-1.125 4.75 0 4 2.604 6.959 2.605 2.958 6.563 3.458Zm2.792 0v-2.792q4-.542 6.583-3.479 2.583-2.938 2.583-6.938 0-4.416-3.062-7.5-3.063-3.083-7.479-3.083h-.625l2.291 2.292-1.958 1.958-5.667-5.625 5.667-5.625 1.958 1.958-2.291 2.292h.625q5.583 0 9.458 3.875t3.875 9.458q0 5.125-3.437 8.917-3.438 3.792-8.521 4.292Z"/></svg>
const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="m25.333 35-10.625-3.75-7.583 2.958q-.75.375-1.437-.083Q5 33.667 5 32.833V9.542q0-.542.312-.959.313-.416.813-.625L14.708 5l10.625 3.708 7.542-2.958q.75-.333 1.437.104.688.438.688 1.271v23.5q0 .458-.312.833-.313.375-.813.542Zm-1.5-3.458v-20.5l-7.666-2.625v20.541Zm2.792 0 5.583-1.834V8.875l-5.583 2.167Zm-18.833-.459 5.583-2.125V8.417l-5.583 1.875Zm18.833-20.041v20.5Zm-13.25-2.625v20.541Z"/></svg>



const Footer = ({footer}) => {
  return (
    <div>
        <div className='WrapAroudPreFooter'>
        <div className='PreFooter'>
            <div>
                {repeatIcon}
                <p><b>Hassle-free replacement</b><br />10-day ease replacement policy on mi.com</p>
            </div>
            <div>
                {shieldIcon}
                <p><b>100% Secure Payment</b><br />We Support Cards, Wallets, EMI and COD</p>

            </div>
            <div>
                {mapIcon}
                <p><b>Vast Service Network</b><br />1000 Mi service-centers across 600 cities</p>

            </div>
        </div>
        </div>

        <div className='PreFooter2'>
            <div className='leftDiv'>
            <div>
                <p>LET'S STAY IN TOUCH</p>
                <span>Get updates on sales specials and more</span>
            </div>
            <div>
                <div>
                    <input type="email" name='email' placeholder='Enter Email Address' />
                    <button>></button>
                </div>
            </div>
            </div>
            <div className='rightDiv'>
            <div>
                <p>FOLLOW MI</p>
                <span>We want to hear from you!</span>
            </div>

            <div>
                {facebooIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
            </div>
            </div>


        </div>
        <div className='WrapperFooter'>
        <div className='Footer'>
            <div>
                <p>SUPPORT</p>
                {footer.support.map((item, index) => (
                    <a key={item.url} href={item.url} index={index}>{item.name}</a>
                ))}
            </div>
            <div>
                <p>SHOP AND LEARN</p>
                {footer.shopAndLearn.map((item, index) => (
                    <a key={item.url} href={item.url} index={index}>{item.name}</a>
                ))}
            </div>
            <div>
                <p>RETAIL STORE</p>
                {footer.retailStore.map((item, index) => (
                    <a key={item.url} href={item.url} index={index}>{item.name}</a>
                ))}
            </div>
            <div>
                <p>ABOUT US</p>
                {footer.aboutUS.map((item, index) => (
                    <a key={item.url} href={item.url} index={index}>{item.name}</a>
                ))}
            </div>
            <div>
                <p>CONTACT US</p>
                {footer.contactUs.map((item, index) => (
                    <a key={item.url} href={item.url} index={index}>{item.name}</a>
                ))}
            </div>
            <div>
                <div>Chat with our Virtual AI Bot - Now in English</div>
                <button>CHAT NOW</button>
            </div>

            
        </div>

        <div className='footerBorder'>
            <div>Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</div>

        </div>
        </div>


    </div>
  )
}

export default Footer