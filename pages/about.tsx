import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { AboutContent } from "../components/molecules"
import { AboutHeaderContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

function About() {
  const classes = useStyles({})
  return (
    <Layout className={classes.root}>
      <AboutHeaderContainer>
        <AboutContent />
      </AboutHeaderContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
About.getInitialProps = async (ctx: AppContext) => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.ABOUT,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
}

export default About
