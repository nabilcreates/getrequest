let app = new Vue({
    el: ".app",
    data() {
        return {
            url: 'https://api.github.com/users/renabil',
            apidata: {
                body: '',
            }
        }
    },

    methods: {
        getApi(link, options = {
            method: 'GET',
        }) {
            
            // if http found in link
            if(link.indexOf('http') >= 0){
                fetch(`${link}`, options)
                .then(response => response.json())
                .then(json => this.apidata.body = json)
            }else{
                fetch(`https://${link}`, options)
                .then(response => response.json())
                .then(json => this.apidata.body = json)
            }
            
        }
    },

    created() {
        this.getApi(this.url)
    }
})