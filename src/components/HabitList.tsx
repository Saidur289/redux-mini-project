import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';


const HabitList = () => {
    const {habits} = useSelector((state: RootState) => state.habits) 
    const today = new Date().toString().split("T")[0]
  return (
   <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
  {habits.map((habit) => (
    <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
      <Grid container alignItems="center">
        {/* First Column */}
        <Grid >
          <Typography variant="h6">{habit.name}</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textTransform: "capitalize" }}
          >
            {habit.frequency}
          </Typography>
        </Grid>

        {/* Second Column */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button startIcon={<CheckIcon></CheckIcon>} variant="outlined" color={habit.completedDates.includes(today)? "success": "primary"}>Mark Complete</Button>
           <Button startIcon={<DeleteIcon/>} color="error"variant="outlined">Remove</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  ))}
</Box>

   
  )
}

export default HabitList