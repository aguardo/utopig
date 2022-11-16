require('./bootstrap');


import { createApp } from 'vue'


import GameList from './components/GameList'


const app = createApp({})

app.component('game-list',GameList)

app.mount('#app')
