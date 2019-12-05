import { AppBar, Box, Drawer, Hidden, Link, Toolbar, Typography } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectedPageSelector } from "../../store/page"
import { CentredContainer } from "../atoms"
import { Sidenavi } from "../organisms"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    appBar: {
      position: "relative",
      padding: 0,
      backgroundColor: "white",
      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
    },
    toolBar: {
      padding: 0,
      minHeight: "55px",
      display: "flex",
      justifyContent: "space-beetwen",
    },
    toolBox: {
      display: "flex",
      width: "50%",
    },
    rightToolBox: {
      justifyContent: "flex-end",
    },
    logoIcon: {
      height: "50px",
      width: "auto",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    logoBox: {
      minHeight: "55px",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
    },
    topButton: {
      height: "55px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.dark,
      paddingLeft: "15px",
      paddingRight: "10px",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },

      "&::after": {
        content: '""',
        display: "block",
        width: 0,
        height: 0,
        borderTop: "29px solid transparent",
        borderBottom: "29px solid transparent",
        borderLeft: "10px solid #fff",
        position: "absolute",
        top: "44%",
        marginTop: "-25px",
        left: "100%",
        zIndex: 2,
      },
      "&::before": {
        content: '""',
        display: "block",
        width: 0,
        height: 0,
        borderTop: "29px solid transparent",
        borderBottom: "29px solid transparent",
        borderLeft: "10px solid #ccc",
        position: "absolute",
        top: "44%",
        marginTop: "-25px",
        marginLeft: "1px",
        left: "100%",
        zIndex: 1,
      },
      "&:hover:after": {
        borderLeft: "10px solid lightgray",
      },
      "&:hover": {
        backgroundColor: "lightgray",
        color: "white",
        textDecoration: "none",
      },
    },
    navIconHide: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    drawerPaper: {
      [theme.breakpoints.up("md")]: {
        position: "relative",
      },
    },
    content: {
      flexGrow: 1,
    },
    title: {
      paddingLeft: "5px",
      paddingRight: "5px",
      fontSize: 25,
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
    },
  })
)

type Props = {
  children: React.ReactNode
}

/**
 * Responsive drawer
 * @see https://material-ui.com/demos/drawers/#responsive-drawer
 */
export const ResponsiveDrawer = function(props: Props) {
  const { children } = props
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  /**
   * Toggle drawer
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <CentredContainer>
          <Toolbar className={classes.toolBar}>
            <Box className={classes.toolBox}>
              <Box className={classes.logoBox}>
                <img
                  className={classes.logoIcon}
                  alt="icon"
                  src="/static/icons/logo/logo.jpg"
                />
              </Box>
              <Link className={classes.topButton} href="/contact">
                Dipartimento delle istituzioni
              </Link>
            </Box>
            <Box className={`${classes.toolBox} ${classes.rightToolBox}`}>
              <Typography
                variant="h2"
                noWrap
                align={"right"}
                className={classes.title}
              >
                {selectedPage.pageTitle}
              </Typography>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </CentredContainer>
      </AppBar>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Sidenavi />
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={"top"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Sidenavi />
        </Drawer>
      </Hidden>
      <main className={classes.content}>{children}</main>
    </div>
  )
}
