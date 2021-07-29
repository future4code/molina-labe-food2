import React from "react";
import logoFutureEatsInvert from "../../assets/logoFutureEatsInvert.svg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControl, OutlinedInput } from "@material-ui/core";
import useForm from '../../hooks/useForm'
import { Link, useHistory } from "react-router-dom";
import { login } from "../../services/post";
import {MainContainer, ImgContainer} from './style'
import {useUnprotectedPage} from '../../hooks/useUnProtectedPage'

const LoginPage = () => {
    useUnprotectedPage()
    const {form, setForm, onChange, cleanFields} = useForm({
        email: '',
        password: '',
        showPassword: false
    })
    const history = useHistory()   

    const handleClickShowPassword = () => {
        setForm({ ...form, showPassword: !form.showPassword });
    };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmitForm = (event) =>{
        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password
        }

        login(body, cleanFields, history)
        
    }

    return (
        <MainContainer>
            <ImgContainer>
            <img src={logoFutureEatsInvert} alt='Imagem da logo'/>
            </ImgContainer>

            <p>Entrar</p>
            <Container component="main" maxWidth="xs">
                <form onSubmit={onSubmitForm}>
                    <TextField
                        fullWidth
                        margin='normal'
                        id="outlined-read-only-input"
                        label="Email"
                        variant="outlined"
                        name='email'
                        value={form.email}
                        onChange={onChange}
                        type='email'
                        required
                    />

                    <FormControl fullWidth variant="outlined">   
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            name='password'
                            type={form.showPassword ? 'text' : 'password'}
                            value={form.password}
                            onChange={onChange}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {form.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    
                    <Button 
                        variant='contained'
                        color='primary' 
                        fullWidth
                        size="medium"
                        type='submit'
                    >
                        Entrar
                    </Button>
                </form>
                <Link to={'/cadastrar'}>
                    <Button 
                        color="primary"
                    >
                        Não possui cadastro? Clique aqui.
                    </Button>
                </Link>
           
            </Container>
        </MainContainer>
  );
};

export default LoginPage;
