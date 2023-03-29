import React from 'react'
import { Link } from 'react-router-dom'
//import styled from 'styled-components'
import '../AdminStyle/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faBox, faClipboardList, faPlus } from '@fortawesome/free-solid-svg-icons';

export const SideBar = () => {
  return (
    
    <div className="sidebar">
      
      <h5>Menu</h5>
        <Link  to={"/admin"}>
        
          <div className="sen">
            <div>
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div>
               Home
            </div>
            
          </div>
        </Link>
        <Link  to={"/admin_login"}>
          <div className="sen">
            <div>
            <FontAwesomeIcon icon={faSignInAlt} />
            </div>
            <div>
            Log In
            </div>
          </div>
          
        </Link>
        {/* <Link to ={"/admin"}>Admin</Link> */}
        <Link  to={"/admin_products"}>
          <div className="sen">
            <div>
            <FontAwesomeIcon icon={faBox} />
            </div>
            <div className="decoration">
            Products
            </div>
          </div>
          
        </Link>
        <Link  to={"/admin_orders"}>
          <div className="sen">
            <div>
            <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <div>
            Orders
            </div>
          </div>
          </Link>
        <Link  to={"/admin_add-Product"}>
          <div className="sen">
            <div>
            <FontAwesomeIcon icon={faPlus} />
            </div>
            <div>
            Add Product
            </div>
          </div>
          
        </Link>
       
    </div>
  )
}

