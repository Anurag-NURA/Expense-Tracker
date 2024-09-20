import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";
import { FaHandHoldingDollar } from "react-icons/fa6";

const links = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Expenses',
    link: '/Expenses'
  },
  {
    id: 3,
    name: 'About',
    link: '/About',
  }
]

export const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          Expense Tracker
          <FaHandHoldingDollar />
        </Link>
      </div>
      <ul>
        {
          links.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  )
}
