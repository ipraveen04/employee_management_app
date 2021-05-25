import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Avatar, CssBaseline, Typography, Grid, TextField, Button, makeStyles } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login() {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),

        password: Yup.string().min(8, 'Password should be minimum 8 char length').required("Required")
    })

    const [state, setState] = useState(false);

    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
        }, 2000)
        console.log(props);
        setState(true)
    }



    const classes = useStyles();
    return (
        <>
            {state && <Redirect
                to="/employeeDetails"
            />}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (

                            <Form className={classes.form} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field as={TextField}
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            label="Email Address"
                                            name="email"
                                            helperText={<ErrorMessage name='email' />}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field as={TextField}
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            label="Password"
                                            name="password"
                                            helperText={<ErrorMessage name='password' />}
                                        />
                                    </Grid>
                                </Grid>
                                <Button className={classes.submit}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={props.isSubmitting}
                                >Sign In</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        </>
    )
}

export default Login;
