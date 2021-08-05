import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useProtectedPage } from '../../hooks/useProtectedPage';
import useForm from '../../hooks/useForm'
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import {MainContainer, ContainerHeader} from './style'
import { useHistory } from 'react-router-dom';
import {addAdress} from '../../services/put'
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

const SignupAddressPage = () => {
    useProtectedPage()
    const classes = useStyles()
    const {form, setForm, onChange, cleanFields} = useForm({
        street:'',
        number: '',
        complement:'',
        neighbourhood: '',
        city: '',
        state: '',
    })

    const history = useHistory()

    const onSubmitForm = (event) =>{
        event.preventDefault()

        const body = {
            street: form.street,
            number: form.number,
            complement: form.complement,
            neighbourhood: form.neighbourhood,
            city: form.city,
            state: form.state
        }

        addAdress(body, cleanFields, history)
    }

    return (
        <MainContainer>
            <ContainerHeader>
                <ButtonBack/>    
            </ContainerHeader>

            <p>Meu endereço</p>
            <Container>
            <form onSubmit={onSubmitForm}>
                    <TextField
                        fullWidth
                        className={classes.field}
                        label="Rua/Av"
                        variant="outlined"
                        name='street'
                        value={form.street}
                        onChange={onChange}
                        required
                    />

                    <TextField
                        fullWidth
                        className={classes.field}
                        label="Número"
                        variant="outlined"
                        name='number'
                        value={form.number}
                        onChange={onChange}
                        type='text'
                        required
                    />

                    <TextField
                        fullWidth
                        className={classes.field}
                        label="Complemento"
                        variant="outlined"
                        name='complement'
                        value={form.complement}
                        onChange={onChange}
                    />

                    <TextField
                        fullWidth
                        className={classes.field}
                        label="Bairro"
                        variant="outlined"
                        name='neighbourhood'
                        value={form.neighbourhood}
                        onChange={onChange}
                        required
                    />

                    <TextField
                        fullWidth
                        className={classes.field}
                        label="Cidade"
                        variant="outlined"
                        name='city'
                        value={form.city}
                        onChange={onChange}
                        required
                    />
                    
                    <TextField
                        fullWidth
                        className={classes.field}
                        label="Estado"
                        variant="outlined"
                        name='state'
                        value={form.state}
                        onChange={onChange}
                        required
                    />
                    
                    <Button 
                        className={classes.btn}
                        variant='contained'
                        color='primary' 
                        fullWidth
                        size="large"
                        type='submit'
                    >
                        Salvar
                    </Button>
                </form>
                        
            </Container>
        </MainContainer>
    )
}

export default SignupAddressPage
