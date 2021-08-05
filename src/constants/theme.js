import { createTheme } from '@material-ui/core/styles';
import { primaryColor} from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'black'
        },
        text:{
            primary: '#000'
        }
    }
})
export default theme