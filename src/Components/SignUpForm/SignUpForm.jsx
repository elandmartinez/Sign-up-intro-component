import "../../styles/SignUpForm.css";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { inputsInitialValues, signUpSchema, inputNames } from "../../utils.js"

const SignUpForm  = () => {

    return (
        <div className="sign-up-form">
            <Formik
                initialValues={inputsInitialValues}
                validationSchema={signUpSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-input-cont" >
                            <Field
                                className="form-input"
                                type="name"
                                name="name"
                                placeholder={inputNames.name}
                            />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div className="form-input-cont" >
                            <Field
                                className="form-input"
                                type="lastName"
                                name="lastName"
                                placeholder={inputNames.lastName}
                            />
                            <ErrorMessage
                                className="error-message"
                                name="lastName"
                                component="div"
                            />
                        </div>
                        <div className="form-input-cont" >
                            <Field
                                className="form-input"
                                type="email"
                                name={inputNames.email}
                                placeholder="Email address"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                            />
                        </div>
                        <div className="form-input-cont" >
                            <Field
                                className="form-input"
                                type="password"
                                name={inputNames.password}
                                placeholder="Password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                            />
                        </div>

                        <button
                            className="submit-button"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            CLAIM YOUR FREE TRIAL
                        </button>
                        <p className="terms-services-alert">
                            By clicking the button, you are agreeing to our
                            <a
                                href="https://www.google.com/search?q=terms+and+conditions
                                &rlz=1C5CHFA_enCO976CO976&oq=terms+&aqs=chrome.1.69i57j0i512l9
                                .4090j0j1&sourceid=chrome&ie=UTF-8"
                                target="_blank" rel="noreferrer"
                            >
                                Terms and services
                            </a>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}




export default SignUpForm;