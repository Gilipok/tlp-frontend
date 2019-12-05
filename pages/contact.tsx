import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { ContactContent } from "../components/molecules"
import { ContactHeaderContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

function Contact() {
  const classes = useStyles({})
  return (
    <Layout className={classes.root}>
      <ContactHeaderContainer>
        <ContactContent />
      </ContactHeaderContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Contact.getInitialProps = async (ctx: AppContext) => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.CONTACT,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
}

export default Contact
