import { ListItem, ListItemText } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Link from "next/link"
import React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    anchorLink: {
      width: "100%",
      textDecoration: "none",
    },
    listItemPrimary: {
      color: theme.palette.primary.contrastText,
      fontSize: "18px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    listItemSecondary: {
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  })
)

type Props = {
  /**
   * <Link href="/">
   */
  href: string
  /**
   * <ListItemText primary="redux"/>
   */
  primary: React.ReactNode
  /**
   *
   */
  textColor?: string
  /**
   * <ListItemText secondary="description"/>
   */
  secondary?: React.ReactNode
  /**
   * class
   */
  className?: string
  /**
   * onClick event
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/**
 * Next.js optimized <ListItem>
 * @param props Props
 */
export const NextListItem = function(props: Props) {
  const { className, href, primary, secondary, onClick } = props
  const classes = useStyles(props)
  // const AvatorIcon = () => icon
  return (
    <Link href={href}>
      <a className={classes.anchorLink} onClick={onClick}>
        <ListItem alignItems="center" divider={true} className={className}>
          <ListItemText
            primary={<span className={classes.listItemPrimary}>{primary}</span>}
            secondary={
              <span className={classes.listItemSecondary}>{secondary}</span>
            }
          />
        </ListItem>
      </a>
    </Link>
  )
}
