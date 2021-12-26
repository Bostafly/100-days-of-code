<template>
    <section>
        <h2><label>Username:</label>{{ username}}</h2>
        <h3><label>Age:</label> {{age}}</h3>
    </section>
</template>

<script>
export default {
    props:{
        username: {
            type: String, 
            required:false
        },
        age: {
            type: Number, 
            required: false
        }
    }
}
</script>