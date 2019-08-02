import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout'

const Index = () => {

  //Using hooks to set the textarea value and whether the form has been submitted.
  const [textareaValue, setTextareaValue] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [hasErrors, setHasErrors] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  //Creating a value change function which sets the state to the text area value
  const valueChange = (event) => {
    setTextareaValue(event.target.value);
  }
  
  const resetState = () => {
    setSubmitted(false);
    setHasErrors(false);
    setSelectedItem();
    setTextareaValue();
  }

  //Submit function that sets the submitted state to true
  const handleSubmit = () => {
    if(textareaValue){
      //Replace any line breaks and white spaces.
      const replaceWhiteSpace = textareaValue.replace(/(\r\n|\n|\r)/gm,',').replace(/ /g, '');

      //Create array from comma separated values
      const list = replaceWhiteSpace.split(',');

      //Get length of array
      const total = list.length;

      //Generate random number to select random item from array
      const randomNumber = Math.floor(Math.random() * Math.floor(total));
      
      //Set submitted state to true
      setSubmitted(true);

      //Set selected item to be displayed
      setSelectedItem(list[randomNumber]);
    } else {
      setHasErrors(true);
      return null;
    }
   
  }

  //If the form has been submitted, return this
  if(submitted && selectedItem){
    return(
      <Layout>
        <h2>Selected Item: {selectedItem}</h2>
        <button onClick={() => resetState()}>Reset</button>
      </Layout>
    )
  }

  return(
    <Layout>
      {hasErrors && <p>That didn't work, please try again (hint: you need to input a value)</p>}
      <textarea rows="4" cols="50" value={textareaValue} onChange={event => valueChange(event)}/>
      <button onClick={() => handleSubmit()}>Submit</button>
    </Layout>
  )
}

  ;
  
  export default Index;