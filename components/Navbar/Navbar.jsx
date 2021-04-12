import { Page, Text, Card, Grid, Button, Spacer } from '@geist-ui/react'
import react from 'react'


const navBarStyle = {
  height: '80px',
  margin: 'auto',
  textAlign: 'center',
  transition: 'all .7s ease-in',
  fontFamily: ''
};

const NavBar = () => (
  <div className="NavBar" style={navBarStyle}>
    <div>
      <h1 >
      Mr Investor
      </h1>
    </div>
  </div>
);

export default NavBar;
