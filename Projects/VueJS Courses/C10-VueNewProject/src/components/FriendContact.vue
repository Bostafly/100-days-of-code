<template>
<li>
    <h2>{{ name }} {{isFavorite? '(favorite)' : ''}}</h2>
    <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <button @click="toggleFavorite"> Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
        <li><string>Phone: </string>{{phoneNumber}}</li>
        <li><string>Email: </string>{{emailAddress}}</li>
    </ul>
</li>
</template>
<script>
export default {
    // props:['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    props:{
        id:{
            type:String, 
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false, 
            default: false, 
            
        },
    },
    emits: {
        'toggle-favorite': function(id){
            if(id){
                return true;
            } else  {
                console.warn("Id is Missing!");
                return false;
            }
        }
    },
    data(){
        return {
            detailsAreVisible: false, 
        }
    }, 
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }, 
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id);
        }
    }
}
</script>