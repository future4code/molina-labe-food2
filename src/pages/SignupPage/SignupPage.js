import React from 'react'
import {MainContainer, ImgContainer, ContainerHeader} from './style'
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
// import useForm from '../../hooks/useForm'
import { useHistory } from "react-router-dom";
import { signup } from "../../services/post";
import useForm from '../../hooks/useForm'
import { useUnprotectedPage } from '../../hooks/useUnProtectedPage';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    field:{
        marginBottom: 16,
    },
    btn:{
        marginBottom: 28,
        padding: '12px 0' 
    }
});

const SignupPage = () => {
    useUnprotectedPage()
    const classes = useStyles()
    const {form, setForm, onChange, cleanFields} = useForm({
        nome:'',
        email: '',
        cpf:'',
        password: '',
        showPassword: false,
        confirmPassword: '',
        showConfirmPassword: false
    })
    
    const history = useHistory()   

    const handleClickShowPassword = () => {
        setForm({ ...form, showPassword: !form.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowConfirmPassword = () => {
        setForm({ ...form, showConfirmPassword: !form.showConfirmPassword });
    };

    const onSubmitForm = (event) =>{
        event.preventDefault()

        const body = {
            name: form.nome,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }

        if(form.confirmPassword === form.password){
            signup(body, cleanFields, history)
        }else{
            alert('Senha diferentes')
        }
        
        
    }
    return (
        <MainContainer>
            <ContainerHeader>
                <ButtonBack/>
            </ContainerHeader>
              
            <ImgContainer>
                <img src={logoFutureEatsInvert} alt='Imagem da logo'/>
            </ImgContainer>

            <p>Cadastrar</p>
            <Container component="main" maxWidth="xs">
                <form onSubmit={onSubmitForm}>
                    <TextField
                        className={classes.field}
                        fullWidth
                        label="Nome"
                        variant="outlined"
                        name='nome'
                        value={form.nome}
                        onChange={onChange}
                        required
                    />

                    <TextField
                        className={classes.field}
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name='email'
                        value={form.email}
                        onChange={onChange}
                        type='email'
                        required
                    />

                    <TextField
                        className={classes.field}
                        fullWidth
                        label="CPF"
                        variant="outlined"
                        name='cpf'
                        value={form.cpf}
                        onChange={onChange}
                        pattern='[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}'
                        title='CPF inválido'
                        required
                    />

                    <FormControl fullWidth variant="outlined" className={classes.field} required>   
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            name='password'
                            type={form.showPassword ? 'text' : 'password'}
                            value={form.password}
                            onChange={onChange}
                            required
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
                            labelWidth={55}
                        />
                    </FormControl>

                    <FormControl fullWidth variant="outlined" className={classes.field} required>   
                        <InputLabel htmlFor="outlined-adornment-password">Confirmar senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            name='confirmPassword'
                            type={form.showConfirmPassword ? 'text' : 'password'}
                            value={form.confirmPassword}
                            onChange={onChange}
                            required
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {form.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={130}
                        />
                    </FormControl>
                    
                    <Button 
                        className={classes.btn}
                        variant='contained'
                        color='primary' 
                        fullWidth
                        size="large"
                        type='submit'
                    >
                        Criar
                    </Button>
                </form>
                        
            </Container>
        </MainContainer>
    )
}

export default SignupPage
