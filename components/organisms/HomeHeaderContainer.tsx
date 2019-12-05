import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { HomeContainer } from "../molecules"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
    contentsContainer: {
      paddingTop: "15px",
    },
  })
)

type Props = {
  /**
   * children
   */
  children: React.ReactNode
}

/**
 * Header and article container component
 * @param props Props
 */
export const HomeHeaderContainer = function(props: Props) {
  const { children } = props
  const classes = useStyles(props)
  return (
    <>
      <HomeContainer />
      <section className={classes.contentsContainer}>{children}</section>
    </>
  )
}
