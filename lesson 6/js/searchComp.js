Vue.component('search', {
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartUrl: '/getSearch.json',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
        
    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div>
            <form action="#" class="search-form" @submit.prevent="filter">
            <input type="text" class="search-field" v-model="userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
    </form>
        </div>`
});

