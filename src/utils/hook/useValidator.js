import React, {createContext, useContext, useState} from 'react';

const ValidatorContext = createContext();

export const ValidatorProvider = ({children}) => {
    const validator = useContext(ValidatorContext);

    return (
        <ValidatorContext.Provider value={validator}>
            {children}
        </ValidatorContext.Provider>
    );
}

export const useValidator = () => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});


    const registerForm = (form) => {
        setForm({...form})
    }
    const validate = (name, value) => {
        let error = null;
        if (form[name].rules.required && !value) {
            error = 'Ce champ est obligatoire'
        }
        if (form[name].rules.minLength && value.length < form[name].rules.minLength) {
            error = `Ce champ doit être composé d'au moins ${form[name].rules.minLength} caractères`;
        }
        if (form[name].rules.maxLength && value.length > form[name].rules.maxLength) {
            error = `Ce champ doit faire moins de  ${form[name].rules.maxLength} caractères`;
        }
        if (form[name].rules.pattern && !form[name].rules.pattern.test(value)) {
            error = `Ce champ ne respecte pas le format attendu`;
        }
        if (form[name].rules.email) {
            const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (!pattern.test(value)) {
                error = 'L\'adresse email n\'est pas valide';
            }
        }
        if (form[name].rules.passwordPattern) {
            const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$.!%*?&])[A-Za-z\d@$.!%*?&]{12,}$/;
            if (!pattern.test(value)) {
                error = 'Le mot de passe doit contenir au moins \n\r12 caractères, \n\rune majuscule, \n\rune minuscule \n\r un chiffre et un caractère spécial'
            }
        }
        if (form[name].rules.passwordConfirm) {
            if (value !== form.password.value) {
                error = 'Les mots de passe ne correspondent pas';
            }
        }
        if(form[name].rules.siret){
            const pattern = /^[0-9]{14}$/;
            if(!pattern.test(value)){
                error = 'Le siret n\'est pas valide';
            }
        }
        if(form[name].rules.staff){
            const pattern = /^[0-9]+$/;
            if(!pattern.test(value)){
                error = 'Le nombre de salarié n\'est pas valide';
            }
        }
        setErrors({...errors, [name]: error});
    }
    return {
        errors,
        registerForm,
        validate
    };
}
