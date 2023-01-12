import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {InitialAuthStateType, loginTC} from "./auth-reducer";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../app/store";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Login = () => {

    const isLoggedIn = useSelector<AppRootStateType, InitialAuthStateType>(state => state.auth).isLoggedIn
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: 'rdm911@list.ru',
            password: '1234',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required password';
            } else if (values.password.length < 2) {
                errors.password = 'Must be 2 characters or less';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            /*console.log(values)*/
            /*alert(JSON.stringify(values));*/
            formik.resetForm(); // затираем поля после ввода
        },
    })

    if (isLoggedIn) {
        return <Navigate to={'/'} />
    }


    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: <i>free@samuraijs.com</i></p>
                    <p>Password: <i>free</i></p>
                </FormLabel>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')} // Reducing Boilerplate
                            // name={'email'}
                            // onChange={formik.handleChange}
                            // value={formik.values.email}
                        />
                        {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        {/*{formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}*/}
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   {...formik.getFieldProps('password')} // Reducing Boilerplate

                                    // запись Reducing Boilerplate значит, что мы используем getFieldProps
                                    // вместо name, onChange и value
                        />
                        {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                        {/*{formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}*/}

                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}
                                // name="rememberMe"
                                // onChange={formik.handleChange} // переключение чекбокса отправляется в formik
                                // checked={formik.values.rememberMe} // отображение галочки в чекбоксе приходит из formik`а
                            />}
                        />

                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>


                </form>
            </FormControl>
        </Grid>
    </Grid>
}
