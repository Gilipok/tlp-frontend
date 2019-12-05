import { Container } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      padding: 0,
    },
  })
)

type Props = {
  children: React.ReactNode
}

/**
 * Centred container md size without padding
 * @param props IProps
 */
export const CentredContainer = (props: Props) => {
  const { children } = props
  const classes = useStyles(props)
  return (
    <Container maxWidth={"md"} className={classes.root}>
      {children}
    </Container>
  )
}
