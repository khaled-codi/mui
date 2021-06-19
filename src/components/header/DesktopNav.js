import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    ul: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: 'flex',
    },
    a: {
        color: 'unset',
        textDecoration: 'none',
        padding: theme.spacing(0, 2),
        textTransform: 'uppercase'
    }
}));

export default function DesktopNav() {
    const classes = useStyles();
    
    return (
        <ul className={classes.ul}>
            <li><a className={classes.a} href="/">home</a></li>
            <li><a className={classes.a} href="/about">about</a></li>
            <li><a className={classes.a} href="/contact">contact</a></li>
        </ul>
    )
}