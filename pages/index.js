import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout'

const Index = () => {

  //Using hooks to set the text area value and whether the form has been submitted.
  const [textareaValue, setTextareaValue] = useState();
  const [submitted, setSubmitted] = useState(false);
  
  //Creating a value change function which sets the state to the text area value
  const valueChange = (event) => {
    setTextareaValue(event.target.value);
  }
  
  //Submit function that sets the submitted state to true
  const handleSubmit = () => {
    setSubmitted(true);
  }

  //If the form has been submitted, return this
  if(submitted){
    return(
      <Layout>
        {textareaValue}
      </Layout>
    )
  }

  return(
    <Layout>
      <textarea rows="4" cols="50" value={textareaValue} onChange={event => valueChange(event)}/>
      <button onClick={() => handleSubmit()}>Submit</button>
    </Layout>
  )
}

  ;
  
  export default Index;