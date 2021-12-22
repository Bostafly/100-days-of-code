<template>
<li>
    <h2>{{ friend.name}}</h2>
    <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
        <li><string>Phone: </string>{{friend.phone}}</li>
        <li><string>Email: </string>{{friend.email}}</li>
    </ul>
</li>
</template>
<script>
export default {
    data(){
        return {
            detailsAreVisible: false, 
            friend: {
                    id:'manuel', 
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 90',
                    email:'manuel@localhost.com'
                },
        }
    }, 
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>