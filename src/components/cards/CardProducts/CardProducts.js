import React from 'react'
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

const CardProducts = (props) => {

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

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        <Button onClick={handleClickOpen}>{props.quantity}</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Selecione a quantidade desejada:</DialogTitle>
                            <DialogContent>
                                <form className={classes.container}>
                                    <FormControl className={classes.formControl}>
                                        {/* <InputLabel htmlFor="demo-dialog-native"></InputLabel> */}
                                        <Select
                                            native
                                            id={props.id}
                                            quantytite={props.quantity}
                                            onChange={handleChange}
                                            input={<Input id="demo-dialog-native"
                                            />}
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
                                    </FormControl>
                                </form>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Adicionar ao carrinho
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </span>
                    <button>{props.addButton}Adicionar</button>
                </div>
            </div>
        </Container>
    )

}

export default CardProducts
