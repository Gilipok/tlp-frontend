import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import React from "react"
import { SpacingPaper } from "../atoms"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
    table: {
      minWidth: 650,
    },
  })
)

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Nam", 159, 6.0, 24, 4.0),
  createData("Eros", 237, 9.0, 37, 4.3),
  createData("Urna", 262, 16.0, 24, 6.0),
]

export const HomeTable = props => {
  const classes = useStyles(props)
  return (
    <SpacingPaper>
      <Table className={classes.table} aria-label="caption table">
        <caption>
          Elementum gravida enim porttitor leo justo donec a leo
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>Lorem (100g serving)</TableCell>
            <TableCell align="right">Nulla</TableCell>
            <TableCell align="right">Curabitur&nbsp;(g)</TableCell>
            <TableCell align="right">Maecenas&nbsp;(g)</TableCell>
            <TableCell align="right">Congue&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SpacingPaper>
  )
}
