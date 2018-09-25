import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function ButtonAdd(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          className={classes.button}
        >
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

ButtonAdd.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAdd);
