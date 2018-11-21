let app = new Vue({
    el: ".app",
    data() {
        return {
            url: '',
            api_body: {},
            history: [],
            bodyoptions: '',
        }
    },

    methods: {
        getApi(link, options = {
            method: 'GET',
        }) {

            // if http found in link
            if (link.indexOf('http') >= 0) {
                fetch(`${link}`, options)
                    .then(response => response.json())
                    .then(json => this.api_body = json)
            } else {
                fetch(`https://${link}`, options)
                    .then(response => response.json())
                    .then(json => this.api_body = json)
            }

            this.history.push(link)

        }
    },

    created(){
        this.url = `https://swapi.co/api/people/${Math.floor(Math.random() * 40)}/`
        this.getApi(this.url,{
            method: 'GET',
        })
    }

})