import axios from 'axios';

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        key: "AIzaSyCHLZyjXsgcZOylTw-SzFtkUXQuiFKQQ8I"
    }
    // AIzaSyAHhoj6ef3Tml7R0GP5VDJf3txNuKI2_Qg
    // AIzaSyB56QEfnyqZ2uAAaAt8FnOIZs6RNEQarAQ
    // AIzaSyDo6cbc-EgqGvcLzxSz_0-pFwhsnhhgBns
    // AIzaSyBM4kbwzeH_dTg-Yn045tCD62E3xZcjKvw
    // AIzaSyCHLZyjXsgcZOylTw-SzFtkUXQuiFKQQ8I
})

export default request;