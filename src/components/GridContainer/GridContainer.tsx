import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

interface GridContainerProps {
  children: React.ReactNode;
}

function GridContainer({ children }: GridContainerProps) {
  const itemsRow1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={3} style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {itemsRow1.map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 200,
                  width: 150,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              />
              {children}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}


export default GridContainer