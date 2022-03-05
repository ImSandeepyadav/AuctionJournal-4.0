import { Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    text: {
        padding: 0,
        color : "#000",
        textTransform : "none",
        '&:hover': {
            background: "transparent",
        }
    },
    contained: {
        background: '#000',
        borderRadius: 4,
        textTransform: "none",
        color: '#fff',
        '&:hover': {
            background: '#000',
        }
    },
    outlined: {
        background: "transparent",
        borderColor: "#000",
        borderRadius: 4,
        textTransform: "none",
        color: '#000',
        '&:hover': {
            background: "transparent",
            borderColor: "#000",
        }
    },
    tab: {
        backgroundColor: "#000",
        borderRadius: 0,
        textTransform: "none",
        color: "#fff",
        margin: "8px 0px",
        padding: "8px 50px",
        ["@media (max-width:780px)"]: {
            margin: "4px 0",
            padding: "8px 10px",
            fontSize: "14px",
        },
        justifyContent: "start",
        "&:hover": {
            backgroundColor: "#000",
        },
    },
    textTab: {
        backgroundColor: "#fff",
        borderRadius: 0,
        textTransform: "none",
        color: "#000",
        margin: "5px 0px",
        padding: "8px 50px",
        ["@media (max-width:780px)"]: {
            margin: "4px 0",
            padding: "8px 10px",
            fontSize: "14px",
        },
        justifyContent: "start",
        "&:hover": {
            backgroundColor: "#fff",
        },
    }
}))

const CustomButton = props => {
    const local_classes = useStyles();

    const { classes, btntype, children, ...rest } = props;

    let btnStyles = null;
    let btnVariant = null;

    const generateBtn = (customClasses, customVariant) => {
        return [clsx(customClasses, classes), customVariant];
    }

    switch(btntype) {
        case 'text' : [btnStyles, btnVariant] = generateBtn(local_classes.text, 'text');
            break;
        case 'contained' : [btnStyles, btnVariant] = generateBtn(local_classes.contained, 'contained');
            break;
        case 'outlined' : [btnStyles, btnVariant] = generateBtn(local_classes.outlined, 'outlined');
            break;
        case 'tab' : [btnStyles, btnVariant] = generateBtn(local_classes.tab, 'contained');
            break;
        case 'textTab' : [btnStyles, btnVariant] = generateBtn(local_classes.textTab, 'text');
            break;
        default: [btnStyles, btnVariant] = generateBtn(local_classes.text, 'text');
    }

    return <Button className={btnStyles} variant={btnVariant} {...rest}>{children}</Button>;

}

export default CustomButton;