import { Grid, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { useSelector } from "react-redux"
import { selectedPageSelector } from "../../store/page"
import { NavigateLink } from "../atoms"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.dark,
      padding: theme.spacing(2),
      textAlign: "center",
      background: theme.palette.primary.light,
    },
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "16px",
      padding: theme.spacing(1),
      paddingLeft: 0,
      color: theme.palette.primary.dark,
    },
    paper: {
      padding: theme.spacing(2),
      minHeight: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.primary.dark,
    },
    gridItem: {
      textAlign: "left",
    },
    gridImage: {
      maxWidth: "120px",
      height: "auto",
    },
    description: {
      fontSize: "14px",
      color: theme.palette.primary.main,
    },
  })
)

type Props = {}

/**
 * Page header component
 * @param props Props
 */
export const HomeContainer = function(props: Props) {
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
  return (
    <Paper square={true} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs className={classes.gridItem}>
          <Typography
            variant="h3"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {selectedPage.pageTitle}
          </Typography>
          <Paper className={classes.paper}>
            <img
              className={classes.gridImage}
              alt="img"
              src="/static/images/placeholder.svg"
            />
          </Paper>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <Typography
            variant="h3"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Contatti
          </Typography>
          <Typography
            variant="subtitle2"
            color="inherit"
            className={classes.description}
          >
            {selectedPage.metaDescription}
          </Typography>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <Typography
            variant="h3"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Organizzazione
          </Typography>
          <NavigateLink href="/home">Go to home page</NavigateLink>
          <NavigateLink href="/about">Go to about page</NavigateLink>
          <NavigateLink href="/contact">Go to contact page</NavigateLink>
          <NavigateLink href="/error">Show Errors</NavigateLink>
          <NavigateLink href="/redux">Redux page</NavigateLink>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <Typography
            variant="h3"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dove trovarci
          </Typography>
          <Typography
            variant="subtitle2"
            color="inherit"
            className={classes.description}
          >
            Curabitur morbi ut eu fusce auctor, massa lorem enim ultricies
            bibendum massa sed orci bibendum vivamus nam quam porttitor, sed
            non. Lectus vitae duis porta quisque donec eget vitae maecenas nam,
            auctor.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
