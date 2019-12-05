import { Box, List, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux"
import { Page, SiteInfo } from "../../constants"
import { PageActions, selectedPageSelector } from "../../store/page"
import { CentredContainer } from "../atoms"
import { NextListItem } from "../molecules"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    navHeaderContainer: {
      [theme.breakpoints.up("md")]: {
        minHeight: "55px",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[2],
      zIndex: theme.zIndex.drawer + 1,
    },
    navHeaderText: {
      fontWeight: "bold",
      fontSize: "18px",
      color: theme.palette.common.white,
      paddingLeft: "15px",
    },
    toolbar: theme.mixins.toolbar,
    list: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      border: 0,
    },
    listItem: {
      boxShadow:
        "0px 4px 0px 0px rgba(0,0,0,0.2), 0px 3px 1px 0px rgba(0,0,0,0.14), 0px 3px 3px 0px rgba(0,0,0,0.12)",
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
      border: "none",
      paddingTop: 0,
      paddingBottom: 0,
    },
    deactive: {
      transition: "background-color 1.2s", // mouse out
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        transition: "background-color 0.4s", // mouse over
      },
    },
    active: {
      backgroundColor: theme.palette.secondary.main,
      "& span": {
        color: theme.palette.common.white,
      },
    },
  })
)

type Props = {}

/**
 * Side navigation component
 * @param props Props
 */
export const Sidenavi = function(props: Props) {
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
  const dispatch = useDispatch()

  const handleChangePage = (page: Page) => () =>
    dispatch(PageActions.changePage({ selectedPage: page }))

  return (
    <div className={classes.root}>
      <Box className={classes.navHeaderContainer}>
        <CentredContainer>
          <Typography variant="h6" className={classes.navHeaderText}>
            {SiteInfo.SITE_NAME}
          </Typography>
        </CentredContainer>
      </Box>
      <CentredContainer>
        <List className={classes.list}>
          {Page.values.map(page => {
            return (
              <NextListItem
                key={page.id}
                className={
                  page.id === selectedPage.id
                    ? `${classes.listItem} ${classes.active}`
                    : `${classes.listItem} ${classes.deactive}`
                }
                textColor={
                  page.id === selectedPage.id
                    ? "theme.palette.common.white"
                    : "theme.palette.secondary.contrastText,"
                }
                href={page.relativeUrl}
                primary={page.pageTitle}
                secondary={page.pageDescription}
                onClick={handleChangePage(page)}
              />
            )
          })}
        </List>
      </CentredContainer>
    </div>
  )
}
