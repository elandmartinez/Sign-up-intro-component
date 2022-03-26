import * as Yup from 'yup';

const signUpSchema = () => Yup.object().shape({
    name: Yup.string()
        .min(3, "too short!")
        .max(30, "too long!")
        .required("Required!"),
    lastName: Yup.string()
        .min(3, "too short!")
        .max(40, "too long!")
        .required("Required!"),
    email: Yup.string()
        .email("invalid email address!")
        .required("Required!"),
    password: Yup.string()
        .min(6, "too short!")
        .max(20, "too long!")
        .required("Required")
});

const inputsInitialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
}

let inputNames = {}

Object.keys(inputsInitialValues).forEach(key => {
    inputNames[key] = key
})

export { inputsInitialValues, signUpSchema, inputNames };