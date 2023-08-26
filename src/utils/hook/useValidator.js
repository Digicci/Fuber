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
        let isSafe = true;
        if(!form[name]) return true;
        if (form[name].rules.required && !value) {
            isSafe = false;
            console.log('required')
            error = 'Ce champ est obligatoire'
        }
        if (form[name].rules.minLength && value.length < form[name].rules.minLength) {
            isSafe = false;
            console.log('min')
            error = `Ce champ doit être composé d'au moins ${form[name].rules.minLength} caractères`;
        }
        if (form[name].rules.maxLength && value.length > form[name].rules.maxLength) {
            isSafe = false;
            console.log('max')
            error = `Ce champ doit faire moins de  ${form[name].rules.maxLength} caractères`;
        }
        if (form[name].rules.pattern && !form[name].rules.pattern.test(value)) {
            isSafe = false;
            error = `Ce champ ne respecte pas le format attendu`;
        }
        if (form[name].rules.email) {
            const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (!pattern.test(value)) {
                isSafe = false;
                error = 'L\'adresse email n\'est pas valide';
            }
        }
        if (form[name].rules.passwordPattern) {
            const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$.!%*?&])[A-Za-z\d@$.!%*?&]{12,}$/;
            if (!pattern.test(value)) {
                console.log(name, value)
                isSafe = false;
                error = 'Le mot de passe doit contenir au moins \n\r12 caractères, \n\rune majuscule, \n\rune minuscule \n\r un chiffre et un caractère spécial'
            }
        }
        if (form[name].rules.passwordConfirm) {
            if (value !== form.password.value) {
                console.log(name, value , form.password.value)
                isSafe = false;
                error = 'Les mots de passe ne correspondent pas';
            }
        }
        if(form[name].rules.siret){
            const pattern = /^[0-9]{14}$/;
            if(!pattern.test(value)){
                isSafe = false;
                error = 'Le siret n\'est pas valide';
            }
        }

        setErrors({...errors, [name]: error});
        return isSafe;
    }
    return {
        errors,
        registerForm,
        validate
    };
}
