<template>
<div class="container-fluid" v-if="showAll">
    <div class="row justify-content-center">
        <div v-for="game in juegos" :key="game.id" class="col-md-2">
                    <div class="card">
                        <img :src='game.image_url' class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{game.name}}</h5>
                            <p class="card-text">{{game.description}}</p>
                            <div class="h-100 d-flex flex-row">
                                <a href="#" class="btn btn-primary me-2" @click="mostrar(game)">View</a>
                                <button type="button" class="btn btn-warning position-end" @click="borrar(game.id)">Delete</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    <div class="container-fluid" v-if="!showAll">
    <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8 col-xl-7">
            <div class="card mb-5">
                <div class="row g-0">
                    <div class="col-md-6 text-center">
                        <img :src='juego.image_url' class="img-fluid p-4" alt="">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body py-4">
                            <h2 class="card-title">{{juego.name}}</h2>
                            <div class="mb-2">
                                <h4>Platform</h4>
                                <p>{{juego.platform}}</p>
                            </div>
                            <div class="mb-2">
                                <h4>Description</h4>
                                <p class="card-text">{{juego.description}}</p>
                            </div>
                            <div class="mb-2">
                                <h4>Release date</h4>
                                <p>{{juego.release_date}}</p>
                            </div>
                            <div class="mb-2">
                                <h4>Nintendo eShop price</h4>
                                <p>{{juego.price}} €</p>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="btn btn-dark" @click="showAll=!showAll">Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





</template>

<script>
    export default {

       data () {
            return {
                games: [],
                showAll : true, 
                selected : {}          
            }
        },
        computed: {

            juegos() {

                return this.games.map( item => {

                 let description = item.description.substring(0,100)

                 return {...item, description}
                })
           },
           juego(){

                console.log(this.selected)
 
                let release_date = this.selected.release_date.split('-').reverse().join('-')

                return {...this.selected, release_date}
                }
           
        },
        methods: {
            borrar(id) {
              this.games.splice(id-1,1)
            },
            mostrar(game){
                
                this.selected = Object.assign({}, this.selected, this.games[game.id-1]) 
                this.showAll = false
            }

        },
        mounted() {

            axios.get('api/games').then(response => {this.games = response.data})

            console.log('Game List mounted.')
        }
    }
</script>