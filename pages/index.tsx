import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { HomeContent } from "../components/molecules"
import { HomeHeaderContainer } from "../components/organisms"
import { Layout } from "../components/templates"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

function Index() {
  const classes = useStyles({})
  return (
    <Layout className={classes.root}>
      <HomeHeaderContainer>
        <HomeContent />
      </HomeHeaderContainer>
    </Layout>
  )
}

export default Index
