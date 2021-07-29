import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BiChevronLeft } from 'react-icons/bi'
import { addAdress } from '../../services/put'
import { Header, StyledBack, Form, InputsContainer, IconDiv } from './styled'
import { useHistory } from 'react-router-dom'
import OrderInProgress from '../../components/OrderInProgress/OrderInProgress';

const UpdateAdressPage = () => {

    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        neighbourhood: "",
        city: "",
        street: "",
        number: "",
        state: "",
        complement: ""
    })

    const goBackProfile = () => {
        history.push('/perfil')
    }

    const onClickSubmit = (event) => {
        event.preventDefault()
        addAdress(form)
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
                        label="Logradouro"
                        name={'street'}
                        value={form.street}
                        onChange={onChange}
                        variant="outlined"
                        fullWidth
                    />

                </InputsContainer>
                <InputsContainer>
                    <TextField
                        required
                        label="Número"
                        name={'number'}
                        value={form.number}
                        onChange={onChange}
                        variant="outlined"
                        fullWidth
                    />

                </InputsContainer>
                <InputsContainer>

                    <TextField
                        required
                        label="Bairro"
                        name={'neighbourhood'}
                        value={form.neighbourhood}
                        onChange={onChange}
                        variant="outlined"
                        fullWidth
                    />

                </InputsContainer>

                <InputsContainer>

                    <TextField
                        required
                        label="Cidade"
                        name={'city'}
                        value={form.city}
                        onChange={onChange}
                        variant="outlined"
                        fullWidth
                    />

                </InputsContainer>
                <InputsContainer>

                    <TextField
                        required
                        label="Estado"
                        name={'state'}
                        value={form.state}
                        onChange={onChange}
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

export default UpdateAdressPage
