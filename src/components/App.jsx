import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
// import css from './App.module.css'



export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

render () {
  return (
    <div>
      <ContactForm />
    </div>
    
  )
}
  

  
}
