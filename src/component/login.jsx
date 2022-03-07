import {
    Avatar,
    Button,
    FormControl,
    Input,
    InputLabel,
    Paper,
    Typography,
  } from '@material-ui/core';
  import withStyles from '@material-ui/core/styles/withStyles';
  import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
  import React from 'react';
  import axios from 'axios';
  import swal from 'sweetalert';
   
  const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
       [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });
   
  function Login(props) {
    const { classes } = props;

    const onsubmit = (e)=>{
        e.preventDefault();
        let pass = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        var datos={  
              pass:pass,
              email:email
        }
        //console.log(datos)

        const request  = {
            method: 'post',
            url: 'http://localhost:9000/api',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: {
                datos: datos
            }
        };

        axios(request)
        .then(function (response) {

           if(response.data.success == true)
            {
              
              swal({

                text: response.data.message,
                icon: "success",
                button: "Aceptar"

                });            
            }
            else
            {
              swal({

                text: response.data.message,
                icon: "warning",
                button: "Aceptar"

                });
            }
        })
        .catch(function (error) {
            alert(error);
        }); 


    }
   
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} onSubmit={onsubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus required={true} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Contraseña</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" required={true} />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              //onClick={onsubmit}
              className={classes.submit}
            >
              INGRESAR
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
   
  export default withStyles(styles)(Login);