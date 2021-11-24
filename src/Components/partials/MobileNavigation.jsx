import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Buttons from "../elements/Buttons";
import Logo from "../elements/Logo";

import Styles from "../../styles/Navigation.module.css";

const MobileNavigation = () => {
  return (
    <>
      <div className={Styles.navigation}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item className={Styles.button}>
            <Buttons
              variant="contained"
              color="success"
              size="medium"
              text="ورود یا ثبت نام"
            />
          </Grid>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item className={Styles.icon}>
            <MenuIcon sx={{ fontSize: 60 }} color="success" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MobileNavigation;
