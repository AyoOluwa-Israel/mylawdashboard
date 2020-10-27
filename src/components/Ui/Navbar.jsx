import React from 'react'
import styled from 'styled-components'


const Nav = styled.div `
  width: 100%;
  height: 70px;
  background-color: #0E4D92;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    margin-left: 4em
  }

  p{
    font-size: 24px;
    font-weight: 700;
  }
  p span{
    color: #fff;
  }

  .burger{
    width: 25px;
    height: 20px;
    ${'' /* background-color: black; */}
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-right: 4em
  }
 .burger span{
    width: 100%;
    background-color: #fff;
    height: 3px;
    border-radius: 10px;
  }


`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <p>MY<span>LAW</span>LEGAL</p>
      </div>
        
      
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </Nav>
  )
}

export default Navbar
