import React from "react";
import styled from "styled-components";
import logoFutureEatsInvert from "../../assets/logoFutureEatsInvert.svg";
import { createGlobalStyle } from "styled-components";
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

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 16px;
        letter-spacing: -0.39px;
        margin-bottom: 20px;
    }
  
    a{
        text-decoration: none;
    }
`;

const ImgContainer = styled.div`
  margin: 88px 0 28px 0;
  max-width: 100%;
  width: 104px;
  height: 58px;

  img {
    width: 100%;
  }
`;

const LoginPage = () => {
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
        <>
        <GlobalStyle />
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
    </>
  );
};

export default LoginPage;
