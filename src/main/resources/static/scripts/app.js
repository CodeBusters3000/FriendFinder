
const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        isLoggedIn: false,
    },
    template: `
        <v-app>
        <ff-topnav></ff-topnav>
        <ff-content></ff-content>
        <ff-footer></ff-footer>
        </v-app>
    `
})

console.log(app)