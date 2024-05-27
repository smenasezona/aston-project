type FavoriteData = {
    [key: string]: number[];
}

export function getFavoriteFromLocalStorage(): FavoriteData {
	const favorite = localStorage.getItem('favorite')
	if (favorite) {
	  try {
		return JSON.parse(favorite)
	  } catch (error) {
		console.error('Error parsing JSON from localStorage', error)
		return {}
	  }
	}
	return {}
  }