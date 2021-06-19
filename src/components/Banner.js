import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    banner: {
        width: '100%',
        height: 400,
        objectFit: 'cover'
    },
    woman: {
        height: 350,
        backgroundImage: `url("/images/woman.jpg")`,
        backgroundPositionY: 'top',
        backgroundPositionX: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    title: {
        marginBottom: theme.spacing(2),
        fontSize: '1.5rem'
    },
    container: {
        marginTop: '-250px'
    }
}))

export default function Banner() {
    const classes = useStyles();
    return (
        <Container>
            <img
                src="/images/banner.jpg"
                className={classes.banner}
            />
            <div className={classes.container}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={false} sm={1} />
                        <Grid item xs={12} sm={5}>
                            <div className={classes.woman} />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Paper className={classes.paper}>
                                <div>
                                    <Typography className={classes.title}>
                                        We have several business and industrial
                                        parks with available space for yourbusiness
                                    </Typography>
                                    <Button variant="outlined" color="primary">read more</Button>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={false} sm={1} />
                    </Grid>
                </Container>
            </div>
        </Container>
    )
}