import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { ContactHeader } from "../molecules"

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
export const ContactHeaderContainer = function(props: Props) {
  const { children } = props
  const classes = useStyles(props)
  return (
    <>
      <ContactHeader />
      <section className={classes.contentsContainer}>{children}</section>
    </>
  )
}
