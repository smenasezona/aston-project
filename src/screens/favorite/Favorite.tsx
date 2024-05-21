import { ReactNode, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { fetchCharactersById } from "../../api/api"
import GridContainer from "../../components/GridContainer/GridContainer"
import { fillingIdList, updatePostList } from "../../store/actions/favoriteActions"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import CustomPagination from "../../components/CustomPagination/CustomPagination"
import { useLocation, useNavigate } from "react-router-dom"


function Favorite() {
  const [filteredArr,setFilteredArr] = useState<any[]>([])
  const postList = useSelector((state:any) => state.favorite.postList)
  const idList = useSelector((state:any) => state.favorite.idList)
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const pageQuery = query.get('page');
  const initialPage = pageQuery ? parseInt(pageQuery, 10) : 1;

  const [page, setPage] = useState<number>(initialPage);
  const [maxPage, setMaxPage] = useState<number>(Math.ceil(idList.length / 20));

  useEffect(() => {
    setMaxPage(Math.ceil(idList.length / 20))
    setFilteredArr([]);
    for (let id of idList){
      let match = postList.find((item:any) => item.id == id)
      if (match){
        setFilteredArr((prev) => [...prev, match ])
      }
    }
  },[idList,postList])
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    navigate(`/favorite?page=${newPage}`);
  };


  return (
    <>
      <GridContainer characters={filteredArr.slice(page * 20 - 20,page * 20)} />
      {maxPage > 1&& <CustomPagination pageCount={maxPage} currentPage={page} onPageChange={handlePageChange} />}
    </>
  )
}

export default Favorite