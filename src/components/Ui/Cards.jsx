import React from 'react'
import styled from 'styled-components'
import {IconContext} from "react-icons";
import { BsCheckAll } from 'react-icons/bs';
import { ImSpinner9 } from 'react-icons/im';
import { MdEventAvailable } from 'react-icons/md';
import { GiNetworkBars } from 'react-icons/gi';
import { GoTasklist } from 'react-icons/go';


const Card = styled.div `

  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2em;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  
  
  .cards{
    width: 250px;
    height: 130px;
    color: #FFFFFF;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 4px -1px rgba(117,117,117,1);
  }
  .card-1{
    background-color: #87cEEB;
  }
  
  .card-2{
    background-color: #87CEFF;
  }

  .card-3{
    background-color: #7EC0EE;
  }

  .card-4{
    background-color: #6CA6CB;
  }

  .card-5{
    background-color: #4A708B;
  }

  .icons{
    color: white;
    width: 20px;
    height: 30px;
  }

  .card-number{
    font-size: 24px;
    font-weight: 700;
  }

  @media(max-width:768px){
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
  }
  @media(max-width:425px){
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
  }
`;

const Cards = () => {
  return (
    <Card>
      <div className="cards card-1">
        <IconContext.Provider value={{ className: "icons"}}>
          <BsCheckAll/>
        </IconContext.Provider>
        
        <p className="card-text">Total No. of Request</p>
        <p className="card-number">29</p>
      </div>

      <div className="cards card-2">
      <IconContext.Provider value={{ className:"icons"}}>
        <ImSpinner9/>
      </IconContext.Provider>
        
        <p className="card-text">No. of Request in Progress</p>
        <p className="card-number">29</p>
      </div>


      <div className="cards card-3">
      <IconContext.Provider value={{ className:"icons"}}>
        <MdEventAvailable/>
      </IconContext.Provider>
        
        <p className="card-text">Lawyers available</p>
        <p className="card-number">29</p>
      </div>

      <div className="cards card-4">
        <IconContext.Provider value={{ className:"icons"}}>
          <GoTasklist/>
        </IconContext.Provider>
        
        <p className="card-text">Request per Lawyer</p>
        <p className="card-number">29</p>
      </div>

      <div className="cards card-5">
      <IconContext.Provider value={{ className:"icons"}}>
        <GiNetworkBars/>
      </IconContext.Provider>
        
        <p className="card-text">New Cases Today</p>
        <p className="card-number">29</p>
      </div>
    </Card>
  )
}

export default Cards
