console.log('Hello World!')

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        counter: 0
    },
    methods: {
        updateCounter: function() {
            this.counter++
        }
    },
    template: `
        <v-app>
        <v-card elevation="2" class="mx-auto">
            <v-card-title>My Counter</v-card-title>
            <v-card-text>
                <h1>{{ counter }}</h1>
            </v-card-text>
        </v-card>
        <v-btn @click="updateCounter" class="px-auto ma-10">click</v-btn>
        </v-app>
    `
})

console.log(app)