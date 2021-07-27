import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BiChevronLeft } from 'react-icons/bi'
/* import { updateProfile } from '../../services/put' */
import { /* Container, */ Header, StyledBack, Form, InputsContainer, IconDiv } from './styled'
import OrderInProgress from '../../components/OrderInProgress/OrderInProgress';

const EditPage = () => {


    const { form, onChange } = useForm({ name: "", email: "", cpf: "" })



    /* const onClickSubmit = (body) =>{
        updateProfile(form)
    } */

    return (
        <div>
            <Header>
                <IconDiv>
                <StyledBack> <BiChevronLeft /> </StyledBack>
                
                <h2>Editar</h2>
                </IconDiv>
            </Header>

            <Form /* onSubmit={onClickSubmit} */>

                <InputsContainer>
                    <TextField
                        required
                        label="Nome"
                        name={'name'}
                        value={form.name}
                        onChange={onChange}
                        defaultValue="Fulano"
                        variant="outlined"
                        fullWidth
                    />

                </InputsContainer>
                <InputsContainer>
                    <TextField
                        required
                        label="E-mail"
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        defaultValue="fulano@fulano.com"
                        variant="outlined"
                        type='email'
                        fullWidth
                    />

                </InputsContainer>
                <InputsContainer>

                    <TextField
                        required
                        label="CPF"
                        name={'cpf'}
                        value={form.cpf}
                        onChange={onChange}
                        defaultValue="133.367.908.01"
                        variant="outlined"
                        fullWidth
                    />

                </InputsContainer>
                <InputsContainer>
                    <Button
                        type={'submit'}
                        variant="contained"
                        color="primary"
                        disableElevation
                        fullWidth
                    >Salvar</Button>
                </InputsContainer>
            </Form>

        <OrderInProgress/>
        </div>


    )
}

export default EditPage
