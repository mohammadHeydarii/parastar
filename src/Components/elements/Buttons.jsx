import Button from "@mui/material/Button";

// Style with makeStyle (material ui)
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  CButton: {
    fontWeight: "bold",
  },
});
// End Styles

const Buttons = ({ variant, size, color, text }) => {
  const classes = useStyle();
  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        className={classes.CButton}
      >
        {text}
      </Button>
    </>
  );
};

export default Buttons;
