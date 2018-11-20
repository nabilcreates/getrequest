let app = new Vue({
    el: ".app",
    data(){
        return{
            url: 'https://api.github.com/users/renabil',
            apidata: {
                body: '',
            }
        }
    },

    methods: {
        getApi(link){
            fetch(link)
            .then(response => response.json())
            .then(json => this.apidata.body = json)
        }
    },

    created(){
        this.getApi(this.url)
    }
})