import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link className="small-link" to="/">Home</Link></li>
        <li><Link className="small-link" to="/mailboxes">Mailboxes</Link></li>
        <li><Link className="small-link" to="/new-mailbox">New Mailbox</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

