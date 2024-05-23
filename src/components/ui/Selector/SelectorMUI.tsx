import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Box, NativeSelect } from '@mui/material';

export default function SelectorMUI() {
  const {language,switchLanguage,t} = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== 'ru' && event.target.value !== 'eng'){
        throw new Error('Неверное значение')
    }
    switchLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{color:'#fff'}}>
          {language == 'ru' ? 'Язык' : 'Language'}
        </InputLabel>
        <NativeSelect
          style={{color:'#fff'}}
          defaultValue={language ? language : 'ru'}
          onChange={handleChange}
          inputProps={{
            name: 'language',
            id: 'uncontrolled-native',
          }}
        >
          <option style={{color:'#000'}} value={'ru'}>Русский</option>
          <option style={{color:'#000'}} value={'eng'}>English</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}