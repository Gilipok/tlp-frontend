import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {
  httpStatusCode: number
}

function Error(props: Props) {
  const { httpStatusCode } = props
  const classes = useStyles(props)
  return (
    <Layout className={classes.root}>
      <SpacingPaper>
        <Typography variant="h5">
          Http status code {httpStatusCode} error !
        </Typography>
      </SpacingPaper>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Error.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.ERROR,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {
    httpStatusCode: ctx.res.statusCode,
  }
}

export default Error
