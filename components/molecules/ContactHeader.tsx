import { Box, Divider, Grid, Typography } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import React from "react"
import { SpacingPaper } from "../atoms"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    id: `about-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  appBar: {
    marginTop: "23px",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
  boxItem: {
    padding: theme.spacing(1),
    border: "1px solid lightgray",
    textAlign: "left",
  },
  bottomTitle: {
    textAlign: "left",
    fontSize: "16px",
    color: theme.palette.primary.dark,
  },
  description: {
    textAlign: "left",
    fontSize: "14px",
    color: theme.palette.primary.main,
  },
}))

export const ContactHeader = props => {
  const classes = useStyles(props)
  const [value, setValue] = React.useState(0)

  const handleChange = (_, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <AppBar position="static" className={classes.appBar}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Lorem ipsum" {...a11yProps(0)} />
              <Tab label="Nulla fusce" {...a11yProps(1)} />
              <Tab label="Curabitur morbi" {...a11yProps(2)} />
              <Tab label="Elementum risus" {...a11yProps(3)} />
              <Tab label="Nam enim" {...a11yProps(4)} />
              <Tab label="Mauris" {...a11yProps(5)} />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={9}>
          <TabPanel value={value} index={0}>
            <SpacingPaper>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Typography variant="h5" className={classes.bottomTitle}>
                    Lorem ipsum.
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.bottomTitle}
                    noWrap
                  >
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.description}
                  >
                    Lorem ipsum dolor sit amet, condimentum libero accumsan,
                    elit diam a nibh rutrum erat convallis. Lorem ipsum dolor
                    sit amet, condimentum libero accumsan, elit diam a nibh
                    rutrum erat convallis. Lorem ipsum dolor sit amet,
                    condimentum libero accumsan.
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" className={classes.bottomTitle}>
                    Lorem ipsum.
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.bottomTitle}
                    noWrap
                  >
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.description}
                  >
                    Lorem ipsum dolor sit amet, condimentum libero accumsan,
                    elit diam a nibh rutrum erat convallis. Lorem ipsum dolor
                    sit amet, condimentum libero accumsan, elit diam a nibh
                    rutrum erat convallis.
                  </Typography>
                </Grid>
              </Grid>
            </SpacingPaper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SpacingPaper>
              <Typography variant="h5" className={classes.bottomTitle}>
                Faucibus eget, accumsan nibh pede pretium sodales, aliquam
                pellentesque morbi at a vel.
              </Typography>
              <Typography variant="subtitle2" className={classes.description}>
                Congue fugiat libero repudiandae at semper suscipit.
              </Typography>
            </SpacingPaper>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SpacingPaper>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Typography
                    variant="h5"
                    className={classes.bottomTitle}
                    noWrap
                  >
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.description}
                  >
                    Lorem ipsum dolor sit amet, condimentum libero accumsan,
                    elit diam a nibh rutrum erat convallis. Lorem ipsum dolor
                    sit amet, condimentum libero accumsan.
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" className={classes.bottomTitle}>
                    Lorem ipsum.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.description}
                  >
                    Lorem ipsum dolor sit amet, condimentum libero accumsan,
                    elit diam a nibh rutrum erat convallis. Lorem ipsum dolor
                    sit amet, condimentum libero accumsan, elit diam a nibh
                    rutrum erat convallis. Lorem ipsum dolor sit amet. libero
                    accumsan.
                  </Typography>
                </Grid>
              </Grid>
            </SpacingPaper>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography variant="subtitle2" className={classes.description}>
              Lorem ipsum dolor sit amet, condimentum libero accumsan, elit diam
              a nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
              condimentum libero accumsan, elit diam a nibh rutrum erat
              convallis. Lorem ipsum dolor sit amet, condimentum libero
              accumsan, elit diam a nibh rutrum erat convallis. Lorem ipsum
              dolor sit amet, condimentum libero accumsan, elit diam a nibh
              rutrum erat convallis. Lorem ipsum dolor sit amet, condimentum
              libero accumsan, elit diam a nibh rutrum erat convallis. Lorem
              ipsum dolor sit amet, condimentum libero accumsan, elit diam a
              nibh rutrum erat convallis. Lorem ipsum dolor sit amet,
              condimentum libero accumsan.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid item xs>
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
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Typography variant="subtitle2" className={classes.description}>
              Lorem ipsum dolor sit amet, condimentum libero accumsan
              condimentum libero accumsan.
            </Typography>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  )
}
