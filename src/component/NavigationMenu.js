import { ArrowBack, PersonAdd } from '@material-ui/icons';
import BookIcon from '@mui/icons-material/Book';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Drawer from '@mui/material/Drawer';
import PrintIcon from '@mui/icons-material/Print';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { languages } from '../helper/Language';

function NavigationMenu(navigationValue) {
    const buttonListStyling = {
        display: "flex", justifyContent: "space-between", width: "100%"
    };
    const listMenu = <List>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon style={buttonListStyling} onClick={() => navigationValue.setValue(false)}>
                    <ArrowBack />
                    <Typography >{languages["Close"]["EN"]}</Typography>
                </ListItemIcon>
                <ListItemText />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon style={buttonListStyling} onClick={() => navigationValue.setValue(false)}>
                    <MiscellaneousServicesIcon />
                    <Typography>{languages["One Time Visit"]["EN"]}</Typography>
                </ListItemIcon>
                <ListItemText />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon style={buttonListStyling} onClick={() => navigationValue.setValue(false)}>
                    <PersonAdd />
                    <Typography>{languages["Add Member"]["EN"]}</Typography>
                </ListItemIcon>
                <ListItemText />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon style={buttonListStyling} onClick={() => navigationValue.setValue(false)}>
                    <BookIcon />
                    <Typography>{languages["View Member"]["EN"]}</Typography>
                </ListItemIcon>
                <ListItemText />
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon style={buttonListStyling} onClick={() => navigationValue.setValue(false)}>
                    <PrintIcon />
                    <Typography>{languages["Generate Report"]["EN"]}</Typography>
                </ListItemIcon>
                <ListItemText />
            </ListItemButton>
        </ListItem>
    </List>

    return (
        <Drawer
            anchor={'left'}
            PaperProps={{ style: { width: "30vh" } }}
            open={navigationValue.value}
        >
            {listMenu}
        </Drawer>
    )
}

export default NavigationMenu;