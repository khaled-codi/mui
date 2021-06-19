import { Fragment } from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Banner from '../components/Banner';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '3rem',
        margin: theme.spacing(8, 0)
    },
    section: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(8, 0),
        marginTop: theme.spacing(8),
        color: '#fff',
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: '2rem'
    },
    description: {
        maxWidth: '650px',
        margin: '16px auto 64px'
    },
    icon: {
        fontSize: 64
    },
    subtitle: {
        fontSize: '1.5rem',
        fontWeight: 700
    },
    itemDescription: {
        maxWidth: '250px',
        margin: '16px auto',
    },
    gridContainer: {
        display: 'grid',
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'auto auto auto auto',
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'auto auto',
        }
    },
    gridImage: {
        width: '100%',
        height: '100%'
    }
}))

export default function Home() {
    const classes = useStyles();
    let data = [
        { Icon: DoneAllIcon, title: 'Healthcare Building', desc: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { Icon: CheckCircleIcon, title: 'Education Building', desc: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { Icon: ShoppingCartIcon, title: 'Government Building', desc: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { Icon: DoneAllIcon, title: 'Commercial Building', desc: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { Icon: CheckCircleIcon, title: 'Residential Building', desc: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { Icon: ShoppingCartIcon, title: 'Restaurant Building', desc: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    ]
    return (
        <Fragment>
            <Typography component="h1" className={classes.title}>
                Business and <br />Industrial Parks
            </Typography>
            <Banner />

            <section className={classes.section}>
                <Container>
                    <Typography>
                        What we do
                    </Typography>
                    <Typography component="h2" className={classes.sectionTitle}>
                        Company Certifications
                    </Typography>
                    <Typography className={classes.description}>
                        Our company offers a variety of services to meet your project’s needs, to take you from collaboration meetings all the way to ribbon-cutting and beyond. We believe that every project is unique, and can customize our approach to fit your particular project.
                    </Typography>
                    <Grid container spacing={2}>
                        {data.map((item, i) => {
                            let { Icon, title, desc } = item;
                            return (
                                <Grid item key={i} xs={12} sm={4}>
                                    <div>
                                        <Icon className={classes.icon} />
                                        <Typography className={classes.subtitle}>{title}</Typography>
                                        <Typography className={classes.itemDescription}>{desc}</Typography>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </section>

            <section>
                <div className={classes.gridContainer}>
                    {Array(8).fill(0).map((v, i) => (
                        <div key={`grid-${i}`}>
                            <img
                                src={`/images/${i + 1}.png`}
                                className={classes.gridImage}
                            />
                        </div>
                    ))}
                </div>
            </section>

        </Fragment>
    )
}