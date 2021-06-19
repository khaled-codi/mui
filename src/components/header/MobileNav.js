import { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
        width: 250
    }
});

export default function MobileNav() {

    const classes = useStyles();
    const [open, toggleDrawer] = useState(false);

    const list = (
        <div
            role="presentation"
            className={classes.list}
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                {[
                    { Icon: InboxIcon, text: 'Inbox', link: '/' },
                    { Icon: MailIcon, text: 'Starred', link: '/about' },
                    { Icon: InboxIcon, text: 'Send email', link: '/contact' },
                    { Icon: MailIcon, text: 'Drafts', link: '/contact' },
                ].map((item, index) => {
                    let { Icon, text, link } = item;
                    return (
                        <ListItem button key={text}>
                            <a href={link}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                            </a>
                            <a href={link}>
                                <ListItemText primary={text} />
                            </a>
                        </ListItem>
                    )
                })}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <Fragment>

            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={() => toggleDrawer(false)}
            >
                {list}
            </Drawer>

        </Fragment>
    )
}