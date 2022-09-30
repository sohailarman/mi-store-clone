import React from 'react'
import '../styles/PreNavbar.css'


const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z"/></svg>
const dropDown = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 14.7 6.7 9.4l.7-.725 4.6 4.6 4.6-4.6.7.725Z"/></svg>

const PreNavbar = () => {
  return (
    <div className='preNav'>
      <div className='preContainer'>
        <div>
              <a href="https://www.mi.com/in/">XIAOMI UNITED STATES</a> <span> | </span>
              <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span> | </span>
              <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span> | </span>
              <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE {dropDown}</a>
          </div>
          <div className='right'>
              <a href="https://www.mi.com/us">SIGNIN</a> <span> | </span>
              <a href="https://en.miui.com">SIGNUP</a> <span> | </span>
              <a className='icon' href="https://www.facebook.com/xiaomiusa"> {cartIcon} CART (0)</a>
          </div>
      </div>
       

    </div>
  )
} 

export default PreNavbar