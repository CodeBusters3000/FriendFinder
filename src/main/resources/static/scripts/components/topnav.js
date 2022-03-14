
Vue.component('ff-topnav', {
    data: function () {
        return {
            user: {
                name: '',
                avatarUrl: '',
            },
        }
    },
    methods: {
        logout: function () {
            // logout
        },
        login: function () {
            // login
            // request oauth github login
        },
    },
    template: `
    <div class="topnav">
        <div class="topnav-right">
            <div class="logged-in" v-if="$parent.isLoggedIn">
                <v-avatar :size="40" color="blue">
                    <img :src="user.avatarUrl" :alt="user.name" />
                </v-avatar>
            </div>
            <div class="logged-out" v-else>
                <button class="btn btn-primary" @click="login">Login</button>
                <v-btn class="btn btn-primary" @click="login">
                    Login
                    <v-icon right dark>mdi-github</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
    `
})