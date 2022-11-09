import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(10, 0),
    },
    background: theme.palette.background.footer,
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return <div {...rest} className={clsx(classes.root, className)}></div>;
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
