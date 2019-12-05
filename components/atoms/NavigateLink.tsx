import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import NavigateNext from "@material-ui/icons/NavigateNext"
import Link from "next/link"
import React from "react"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
    link: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      textDecoration: "none",
    },
  })
)

type Props = {
  /**
   * <Link href="/">
   */
  href?: string
  /**
   * Text children
   */
  children?: string
}

/**
 *  Navigate Link with label
 * @param props Props
 */
export const NavigateLink = function(props: Props) {
  const { href, children } = props
  const classes = useStyles(props)
  return (
    <Link href={href}>
      <a className={classes.link}>
        <NavigateNext />
        {children}
      </a>
    </Link>
  )
}
