import React, {Component} from "react";
import shortid from "shortid";
import toast from 'react-hot-toast';
import { AppWrapper } from "./App.styled";
import { FormAddContacts } from "components/FormAddContacts";


export class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        filter:'',
    }

    addContacts = (values) => {
        const { name, number } = values;
        const { contacts } = this.state;
        const normalizedName = name.toLowerCase();
        const findName = contacts.find(contact => contact.name.toLowerCase() === normalizedName);
        
        if (findName !== undefined) {
            toast.error(`{name} is already in contacts`);
        }
        else {
            const contact = {
                id: shortid.generate(),
                name,
                number,
            }

            this.setState(({contacts}) => (
                {contacts: [contact, ...contacts]}
            ));
        }
    }


    render() { 
         return (
                <AppWrapper>
                    <FormAddContacts onSubmit={this.addContacts} />
                </AppWrapper>
        );
    }  
};
