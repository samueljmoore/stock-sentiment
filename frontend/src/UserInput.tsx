import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  width: '50%',
  rows: 5,
});

const StyledGrid = styled(Grid)({
  margin: '10px',
});
const UserInput = () => {
  return (
    <StyledGrid>
      <Typography variant="h6">User Input</Typography>
      <StyledTextField
        multiline
        maxRows={3}
        rows={3}
        inputProps={{ maxLength: 375 }}
      />
    </StyledGrid>
  );
};

export default UserInput;
