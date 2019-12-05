import { Box, Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { SpacingPaper } from "../atoms"
import { ViewMap } from "./ViewMap"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    boxItem: {
      padding: theme.spacing(1),
    },
    bottomTitle: {
      fontSize: "16px",
      color: theme.palette.primary.dark,
    },
    description: {
      fontSize: "14px",
      color: theme.palette.primary.main,
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
export const ContactContent = function(props: Props) {
  const classes = useStyles(props)
  return (
    <>
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
                rutrum erat convallis. Lorem ipsum dolor sit amet, condimentum
                libero accumsan, elit diam a nibh rutrum erat convallis.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <ViewMap />
          </Grid>
        </Grid>
      </SpacingPaper>
    </>
  )
}
