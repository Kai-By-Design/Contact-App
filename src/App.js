import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./components/App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contacts }]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    // Without the bang operator the useEffect caused the application to constantly refresh
    if (!retrieveContacts) setContacts(retrieveContacts);
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
// https://cdnjs.cloudflare.com/ajax/libs/semanti-ui/2.4.1/semantic.min.css
// https://github.com/Semantic-Org/Semantic-UI-CSS.git
