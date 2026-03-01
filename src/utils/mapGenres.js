// src/utils/mapGenres.js
import { genres } from '../data/data.js';

/**
 * Maps an array of genre IDs to their titles
 * @param {number[]} genreIds
 * @returns {string[]}
 */
export function mapGenreIdsToTitles(genreIds) {
  return genreIds.map(id => {
    const found = genres.find(g => g.id === id);
    return found ? found.title : 'Unknown';
  });
}