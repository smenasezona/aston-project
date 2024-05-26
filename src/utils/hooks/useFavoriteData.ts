import { useMemo, useState } from 'react'
import { Character } from '../../types/queryTypes'

export const useFavoriteData = (postList: Character[], idList: number[], initialPage: number) => {
	const [page, setPage] = useState(initialPage)

	const filteredArr = useMemo(() => {
		return idList
			.map(id => postList.find((item: Character) => item.id === id))
			.filter((item): item is Character => Boolean(item))
	}, [idList, postList])

	const maxPage = useMemo(() => Math.ceil(idList.length / 20), [idList.length])

	return { filteredArr, page, setPage, maxPage }
}
