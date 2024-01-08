import React from "react";
import shortid from "shortid";
import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup';
import { ButtonForm, FormWrapper, InputForm, LabelForm, MainTitle } from "./FormAddContacts.styled";

const initialValues = {
    name: '',
    number: '',
};

const phoneRegExp = /[0-9]{3}[-][0-9]{2}[-][0-9]{2}/;
const validationSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required().matches( phoneRegExp, "Телефон должен соответствовать виду: 111-11-11" ),
});

export const FormAddContacts = ({onSubmit}) => {
    let nameInputId = shortid.generate();
    let numberInputId = shortid.generate();

    let handleSubmit = (values, {resetForm}) => {
        onSubmit(values);
        resetForm();
    }
    return(
        <Formik initialValues={initialValues} schema={validationSchema} onSubmit={handleSubmit} >
            <FormWrapper autocomplete="off">
                <MainTitle>Phone book</MainTitle>
                <LabelForm htmlFor={nameInputId}>Name
                    <InputForm 
                        type="text"
                        name="name"
                        id={nameInputId}
                    />
                    <ErrorMessage name="name"/>
                </LabelForm>
                <LabelForm htmlFor={numberInputId}>
                    <InputForm 
                        type="tel"
                        name="number"
                        id={numberInputId}
                    />
                    <ErrorMessage name="number"/>
                </LabelForm>
                <ButtonForm type="submit">Add contact</ButtonForm>
            </FormWrapper>
        </Formik>
    );
}