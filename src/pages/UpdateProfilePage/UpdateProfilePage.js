import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BiChevronLeft } from 'react-icons/bi'
import { updateProfile } from '../../services/put'
import { Header, StyledBack, Form, InputsContainer, IconDiv } from './styled'
import { useHistory } from 'react-router-dom'
import OrderInProgress from '../../components/OrderInProgress/OrderInProgress';

const EditPage = () => {

    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({ name: "", email: "", cpf: "" })

    const goBackProfile = () => {
        history.push('/perfil')
    }

    const onClickSubmit = (event) => {
        event.preventDefault()
        updateProfile(form)
        cleanFields()
    }
    console.log(form)
    return (
        <div>
            <Header>
                <IconDiv>
                    <StyledBack> <BiChevronLeft onClick={goBackProfile} /> </StyledBack>

                    <h2>Editar</h2>
                </IconDiv>
            </Header>

            <Form onSubmit={onClickSubmit}>

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

            <OrderInProgress />
        </div>


    )
}

export default EditPage
