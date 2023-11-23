// API base URL
const API_BASE = 'http://localhost:5173';

// Constants for API calls
export const FETCH_USERS = `${API_BASE}/Get/User`;

export const FETCH_GENRES_BY_USER_ID = (userId) =>
    `${API_BASE}/Get/UserGenres?userId=${userId}`;

export const FETCH_MOVIES_BY_USER_ID = (userId) =>
    `${API_BASE}/Get/UserMovies?userId=${userId}`;

export const FETCH_MOVIES_AND_RATINGS_BY_USER_ID = (userId) =>
    `${API_BASE}/Get/MoviesRatings?userId=${userId}`;

export const ADD_GENRE_FOR_USER = (userId, genreId) =>
    `${API_BASE}/Post/AddGenre?userId=${userId}&genreId=${genreId}`;

export const ADD_MOVIE_FOR_USER_AND_GENRE = (
    userId,
    genreId,
    movieName
) =>
    `${API_BASE}/Post/AddMovie?userId=${userId}&genreId=${genreId}&movieName=${movieName}`;

export const ADD_RATING_FOR_USER_MOVIE = (
    userId,
    rating,
    movieName
) =>
    `${API_BASE}/Post/AddRating?userId=${userId}&rating=${rating}&movieName=${movieName}`;
