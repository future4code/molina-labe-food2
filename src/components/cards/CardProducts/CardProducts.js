import React, { useContext } from 'react'
import { Container } from './styles'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { placeOrder } from '../../../services/post';
import { GlobalContext } from '../../../global/GlobalContext';
import { useParams } from 'react-router-dom'

const CardProducts = (props) => {
    const params = useParams()
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const global = useContext(GlobalContext)
    const handleChange = (event) => {
        // global.setProducts({
        //     id: props.id,
        //     quantity: Number(event.target.value) || ''
        // })

        const product = {
            id: props.id,
            quantity: Number(event.target.value) || ''
        }

        const newProducts = [...global.products, product]
        global.setProducts(newProducts)
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
        props.onClick()
        global.setRestaurantId(params.restauranteId)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()    
    }

    return (
        <Container>
            <div className='image'>
                <img src={props.image} alt="restaurante" />
            </div>
            <div className='main'>
                <div className='text'>
                    <h4>{props.name}</h4>
                    <p>{props.ingred}</p>
                    <p>R${props.price}</p>
                </div>
                <div className='button'>
                    <span>
                        <Button>0</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Selecione a quantidade desejada:</DialogTitle>
                            <DialogContent>
                                <form
                                    onSubmit={onSubmitForm}
                                    className={classes.container}>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            native
                                            id={props.id}
                                            onChange={handleChange}
                                            input={<Input id="demo-dialog-native"
                                            />}
                                            value={global.quantity}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                        </Select>
                                        <Button  onClick={handleClose} color="primary">
                                            Adicionar ao carrinho
                                        </Button>
                                    </FormControl>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </span>
                    <button onClick={handleClickOpen}>Adicionar</button>
                </div>
            </div>
        </Container>
    )

}

export default CardProducts
