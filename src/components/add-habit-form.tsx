import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addHabit } from '../store/habit-slice'

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [frequency, setFrequency] = useState<"daily" | "weekly">('daily')
    const dispatch = useDispatch()
    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault()
        if(name.trim()){
            dispatch(addHabit({name, frequency}))
            console.log('hello world');
        }
        setName("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{display: 'flex', flexDirection: "column", gap: 2}}>
            <TextField label="Habit Name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Habit Name' fullWidth>

            </TextField>
       
        <FormControl fullWidth>
            <InputLabel style={{marginBottom: 2}}>Frequency</InputLabel>
            <Select value={frequency} onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}>
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
        </FormControl>
        <Button type='submit' variant='contained' color='primary' fullWidth>
            Add Habit
        </Button>
         </Box>
    </form>
  )
}

export default AddHabitForm