import React from "react";
import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { ContactsListWrapper, ContactsTitle } from "./ContactList.styled";

export const ContactList = ({contacts, onDeleteContact}) => (
    <ContactsListWrapper>
        <ContactsTitle>
            {contacts.map(({id, name, number}) => (
                <li key={id}>
                    <ContactsItem id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>
                </li>
            ))}
        </ContactsTitle>
    </ContactsListWrapper>
);