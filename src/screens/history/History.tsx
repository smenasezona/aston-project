import { Stack, Typography } from "@mui/material"
import ResponsiveListItem from "../../components/ResponsiveList/ResponsiveListItem"

function History() {

  return (
      <Stack maxWidth={"1200px"} alignItems={"center"} py={1} spacing={3} width={'80%'} mx={'auto'}>
        <Typography variant={'h3'}>Search History</Typography>
        <Stack width={"100%"} spacing={1}>
          <ResponsiveListItem queryParams={{ name: "Rick Sanchez", gender: 'Male', species: 'Human', page: "1", status: 'Unknown' }} date={Date.now()}></ResponsiveListItem>

          <ResponsiveListItem queryParams={{ name: "Alexander", gender: 'Male', species: 'Human', page: "99", status: 'Alive' }} date={Date.now()}></ResponsiveListItem>
        
          <ResponsiveListItem queryParams={{ name: "Alexsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssander", gender: 'Male', species: 'Human', page: "99", status: 'Alive' }} date={Date.now()}></ResponsiveListItem>
        </Stack>
      </Stack>

  )
}

export default History