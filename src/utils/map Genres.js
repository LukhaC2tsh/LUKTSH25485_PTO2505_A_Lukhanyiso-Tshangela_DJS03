import { genres } from '../../data/genres.js'

export function mapGenreIdsToTitles(genreIds) {
  return genreIds.map(id => {
    const found = genres.find(g => g.id === id)
    return found ? found.title : 'Unknown'
  })
}