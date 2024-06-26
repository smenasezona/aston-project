import { Stack, Typography } from "@mui/material"
import ResponsiveListItem from "../../components/ResponsiveList/ResponsiveListItem"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { HistoryState } from "../../types/historyTypes"
import { useLanguage } from "../../i18n/LanguageContext"

function History() {
  const history = useSelector<RootState>((state)=>state.history) as HistoryState
  const {t} = useLanguage()

  return (
      <Stack flexGrow={1} maxWidth={"1200px"} alignItems={"center"} py={1} spacing={3} width={'80%'} mx={'auto'}>
        <Typography variant={'h3'}>{t('historyHeader')}</Typography>
        <Stack flexGrow={1} width={"100%"} spacing={1}>
          {history.queryList.length ? [...history.queryList].reverse().map(({params,date})=>{
            return (
              <ResponsiveListItem key={date} queryParams={params} date={date}/>
            )
          }) :
          <Typography
          flexGrow={1}
          sx={
            {
              color:'rgba(0,0,0,0.5)',
              display:'flex',
              justifyContent:"center",
              alignItems:'center',
              '.dark &':{color:'rgba(255,255,255,0.5)'}
            }
          }
          variant={"h4"}>{t('historyEmptyText')}</Typography>
        }      
        </Stack>
      </Stack>

  )
}

export default History
