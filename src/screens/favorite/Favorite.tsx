import { ReactNode, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { fetchCharactersById } from "../../api/api"
import GridContainer from "../../components/GridContainer/GridContainer"
import { fillingIdList, updatePostList } from "../../store/actions/favoriteActions"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"


function Favorite() {
  const [filteredArr,setFilteredArr] = useState<any[]>([])
  const postList = useSelector((state:any) => state.favorite.postList)
  const idList = useSelector((state:any) => state.favorite.idList)

  useEffect(() => {
    setFilteredArr([]);
    for (let id of idList){
      let match = postList.find((item:any) => item.id == id)
      if (match){
        setFilteredArr((prev) => [...prev, match ])
      }
    }
  },[idList,postList])
  

  return (
    <GridContainer characters={filteredArr}/>
  )
}

export default Favorite