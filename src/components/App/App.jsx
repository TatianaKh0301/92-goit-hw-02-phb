import React, {Component} from "react";
import shortid from "shortid";
import toast, { Toaster } from 'react-hot-toast';
import { AppWrapper } from "./App.styled";
import { FormAddContacts } from "components/FormAddContacts";
import { ContactList } from "components/ContactList/ContactList";


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
    };

    changeFilter = event => {
        this.setState({filter: event.currentTarget.value});
    };

    getVisibleContacts = () => {
        const {filter, contacts} = this.state;
        const normalizedFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId ),
        }));
    };


    render() { 
        const visibleContacts = this.getVisibleContacts();
         return (
                <AppWrapper>
                    <FormAddContacts onSubmit={this.addContacts} />
                    <Toaster />
                    <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>

                </AppWrapper>
        );
    }  
};
