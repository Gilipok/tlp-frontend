import { Box, Divider, Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { NaturePeople } from "@material-ui/icons"
import { SpacingPaper } from "../atoms"
import { HomeTable } from "./HomeTable"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "16px",
      padding: theme.spacing(1),
      paddingLeft: 0,
      color: theme.palette.primary.contrastText,
    },
    divider: {
      margin: "15px 0",
    },
    paper: {
      padding: theme.spacing(2),
      minHeight: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.primary.contrastText,
    },
    gridItem: {
      textAlign: "left",
    },
    gridIcon: {
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& svg": {
        fontSize: "70px",
        color: theme.palette.primary.main,
      },
    },
    bottomTitle: {
      fontSize: "16px",
      color: theme.palette.primary.dark,
    },
    description: {
      fontSize: "14px",
      color: theme.palette.primary.main,
    },
    boxItem: {
      padding: theme.spacing(1),
      border: "1px solid lightgray",
    },
  })
)

type Props = {
  /**
   * children
   */
  children?: React.ReactNode
}

/**
 * Header and article container component
 * @param props Props
 */
export const HomeContent = function(props: Props) {
  const classes = useStyles(props)
  return (
    <>
      <SpacingPaper>
        <Grid container spacing={3}>
          <Grid item xs className={classes.gridItem}>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              STRANIERI
            </Typography>
            <Box className={classes.gridIcon}>
              <NaturePeople />
            </Box>
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
            <Typography variant="subtitle2" className={classes.description}>
              Lorem ipsum quam odio, nulla pellentesque lorem.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Organizzazione
            </Typography>
            <Typography variant="subtitle2" className={classes.description}>
              Curabitur morbi ut eu fusce auctor
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dove trovarci
            </Typography>
            <Typography variant="subtitle2" className={classes.description}>
              Cursus quam nam sagittis proin sodales sapien enim morbi sem odio
              at cursus justo morbi porta risus nam leo donec rutrum tellus.
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h5" className={classes.bottomTitle}>
          Lorem ipsum dolor sit amet, condimentum libero accumsan, elit diam a
          nibh rutrum erat convallis.
        </Typography>
      </SpacingPaper>
      <SpacingPaper>
        <Grid container spacing={3}>
          <Grid item xs>
            <Box className={classes.boxItem}>
              <Typography variant="h5" className={classes.bottomTitle}>
                Lorem ipsum.
              </Typography>
              <Typography variant="h5" className={classes.bottomTitle} noWrap>
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography variant="subtitle2" className={classes.description}>
                Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
                condimentum libero accumsan, elit diam a nibh rutrum erat
                convallis. Lorem ipsum dolor sit amet, condimentum libero
                accumsan, elit diam a nibh rutrum erat convallis. Lorem ipsum
                dolor sit amet, condimentum libero accumsan, elit diam a nibh
                rutrum erat convallis.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={classes.boxItem}>
              <Typography variant="h5" className={classes.bottomTitle}>
                Lorem ipsum.
              </Typography>
              <Typography variant="h5" className={classes.bottomTitle} noWrap>
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography variant="subtitle2" className={classes.description}>
                Lorem ipsum dolor sit amet, condimentum libero accumsan, elit
                diam a nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
                condimentum libero accumsan, elit diam a nibh rutrum erat
                convallis. Lorem ipsum dolor sit amet, condimentum libero
                accumsan, elit diam a nibh rutrum erat convallis. Lorem ipsum
                dolor sit amet, condimentum libero accumsan, elit diam a nibh
                rutrum erat convallis. Lorem ipsum dolor sit amet, condimentum
                libero accumsan, elit diam a nibh rutrum erat convallis.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </SpacingPaper>
      <HomeTable />
    </>
  )
}
