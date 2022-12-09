import sendRequest from './send-request';
const BASE_URL = '/api/villagers';

export function getFavorites(userId) {
    return sendRequest(`${BASE_URL}/${userId}`, 'GET');
}
export function deleteFavorite(userId) {
    console.log("deletestart")
    return sendRequest(`${BASE_URL}/${userId}/delete`, 'DELETE', userId)
}
