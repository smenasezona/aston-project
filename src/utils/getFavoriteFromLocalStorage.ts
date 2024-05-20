export function getFavoriteFromLocalStorage(): Record<string, any> {
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