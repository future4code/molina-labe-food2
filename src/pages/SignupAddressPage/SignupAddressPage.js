import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useProtectedPage } from '../../hooks/useProtectedPage';
import useForm from '../../hooks/useForm'
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import {MainContainer} from './style'
import { useHistory } from 'react-router-dom';
import {addAdress} from '../../services/put'

const SignupAddressPage = () => {
    useProtectedPage()
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
            <ButtonBack value={'30px'}/>  

            <p>Meu endereço</p>
            <Container>
            <form onSubmit={onSubmitForm}>
                    <TextField
                        fullWidth
                        margin='normal'
                        label="Rua/Av"
                        variant="outlined"
                        name='street'
                        value={form.street}
                        onChange={onChange}
                        required
                    />

                    <TextField
                        fullWidth
                        margin='normal'
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
                        margin='normal'
                        label="Complemento"
                        variant="outlined"
                        name='complement'
                        value={form.complement}
                        onChange={onChange}
                    />

                    <TextField
                        fullWidth
                        margin='normal'
                        label="Bairro"
                        variant="outlined"
                        name='neighbourhood'
                        value={form.neighbourhood}
                        onChange={onChange}
                        required
                    />

                    <TextField
                        fullWidth
                        margin='normal'
                        label="Cidade"
                        variant="outlined"
                        name='city'
                        value={form.city}
                        onChange={onChange}
                        required
                    />
                    
                    <TextField
                        fullWidth
                        margin='normal'
                        label="Estado"
                        variant="outlined"
                        name='state'
                        value={form.state}
                        onChange={onChange}
                        required
                    />
                    
                    <Button 
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
