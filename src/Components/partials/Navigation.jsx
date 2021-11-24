import { Grid } from "@mui/material";

import Styles from "../../styles/Navigation.module.css";

import Logo from "../elements/Logo";
import Buttons from "../elements/Buttons";

const Navigation = () => {
  return (
    <>
      <nav className={Styles.navigation}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Buttons
              variant="contained"
              color="success"
              size="medium"
              text="ورود یا ثبت نام"
            />
          </Grid>
          <Grid item>
            <a>مشاوره روانشناسی</a>
          </Grid>
          <Grid item>
            <a>خدمات پزشکی در منزل</a>
          </Grid>
          <Grid item>
            <a>خدمات پرستاری</a>
          </Grid>
          <Grid item>
            <a>خانه</a>
          </Grid>
          <Grid item>
            <Logo />
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default Navigation;
