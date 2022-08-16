import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { BudgetTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
}

const Form = () => {
    const classes = useStyles();
    const [ formData, setFormData ] = useState(initialState);
    const { addTransaction } = useContext(BudgetTrackerContext);

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
        
        addTransaction(transaction);
        setFormData(initialState);
    }


  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
                ...
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid  item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            <MenuItem value="buisness">Buisness</MenuItem>
            <MenuItem value="salary">salary</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth/>
        </Grid>
        <Grid item xs={6}>
            <TextField type="date" label="Date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} fullWidth/>
        </Grid>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form