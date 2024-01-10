import React from "react";
import { ContactWrapper } from "./ContactsItem.styled";

export const ContactsItem = ( {id, name, number, onDeleteContact} ) => (
    <ContactWrapper>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </ContactWrapper>
);