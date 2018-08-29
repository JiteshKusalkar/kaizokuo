import API from './instance'

export default {
    getPlayer: () => {
        return new Promise((resolve, reject) => {
            API.get('/mocks/player.json').then((player) => {
                resolve(player.data)
            })
        })
    }
}