import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.scss'
import SearchIcon from '@mui/icons-material/Search';

type SelfProps = {
  queryParams: Record<string,string>,
  date: number
}

function ResponsiveListItem(props: SelfProps) {
  const dateFromString = new Date(props.date)
  const displayedDate = dateFromString.toLocaleTimeString('ru', {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
  const stringifiedParams = Object.entries(props.queryParams).map(([key, value]) => `${key}: ${value}`).join(', ')


  return (
    <Accordion sx={{ color: 'inherit' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'black', '.dark &': { color: 'white' } }} />}
        sx={{ '.dark &': { bgcolor: styles.primarySummaryBGDarkTheme } }}
        classes={{ content: styles.content, expandIconWrapper: styles.expandIconWrapper }}
      >
        <Typography noWrap sx={{ alignSelf: 'center' }}>{stringifiedParams}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
          <Typography
            sx={{
              textWrap: 'nowrap', pl: '0.5rem',
              borderLeft: '1px solid'
            }}
          >at: {displayedDate}</Typography>
          <IconButton
            sx={{ color: 'black', '.dark &': { color: 'white' } }} classes={{ root: styles.button }}
            onClick={(event) => {
              event.stopPropagation()
            }}
          >
            <SearchIcon color='inherit' />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{ '.dark &': { bgcolor: styles.primaryDetailsBGDarkTheme } }}
        classes={{ root: styles.details }}
      >
        <Typography variant='h6' sx={{ textAlign: 'center' }}>Параметры запроса</Typography>
        {Object.entries(props.queryParams)
          .map(([qKey, qValue]) =>
            <Typography
              sx={{ wordWrap: 'break-word' }}
              key={qKey + dateFromString.getTime()}
            >{qKey} : {qValue}</Typography>)}
      </AccordionDetails>
    </Accordion>
  )
}

export default ResponsiveListItem;