import React from 'react';
import styled from 'styled-components';


const Form = styled.div `
  margin: 2em 8em;

  select{
    width:130px;
    height: 40px;
    border-radius: 7px;
    border: 2px solid #0E4D92;
    background-color: #fff;
    color: #0E4D92;
    outline: none;
    transition: 1s ease-in;
    padding: 0.5em 2em 0.5em 0.5em;
  }
  
  
  

`;


const updateChart = (e) =>{
  
    console.log(e.target.value); 
}





const Selection = ({ ok }) => {

  if (updateChart === ok){
    console.log('object');
}


  return (
    <Form>
      <form>
        <div className="select">
          <select onChange={updateChart}>            
            <option value="1" >This Month</option>
            <option value="2" >Last Month</option>
            <option value="3" >2 Months</option>
            <option value="4" >3 Months</option>
            <option value="5" >4 Months</option>
            <option value="6" >5 Months</option>
            <option value="7" >6 Months</option>
          </select>
        </div>
      </form>
    </Form>
  );
}

export default Selection
