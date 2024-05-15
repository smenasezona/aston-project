import * as React from 'react';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import styles from './ButtonMUI.module.scss';

function ButtonMUI(props:any) {
  
  return (
    <div className={styles.button}>
      <Stack spacing={2} direction="row">
        <Button {...props}>{props.children}</Button>
      </Stack>
    </div>
  );
}

const green = {
  200: '#CCFFCC',
  300: '#B3FFB3',
  400: '#99FF99',
  500: '#80FF80',
  600: '#66FF66',
  700: '#4DFF4D',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration: none;
  background-color: ${green[500]};
  padding: 8px 16px;
  border-radius: 8px;
  margin-top: 20px;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${green[500]};
  display: inline-block;
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${green[400]}, inset 0 -2px 1px ${green[600]};

  &:hover {
    background-color: ${green[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${green[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? green[300] : green[200]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
);


export default ButtonMUI;