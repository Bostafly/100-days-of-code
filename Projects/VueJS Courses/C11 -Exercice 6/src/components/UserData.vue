<template>
    <section>
        <form @submit.prevent="updateUser">
        <label>Username:</label>
        <input type="text" placeholder="Username" v-model="enteredUsername"/>
         <label>Age:</label>
        <input type="number" placeholder="age" v-model="enteredAge"/>
         <button type="submit" >Update User</button>
         </form>
    </section>
   
</template>

<script>
export default {
    emits:['update-user'],
    data(){
        return {
            enteredUsername: '', 
            enteredAge:''
        }
    }, 
    methods :{
        updateUser(){
            const userToSend = {
                username: this.enteredUsername, 
                age: this.enteredAge
            }
              this.$emit('update-user', userToSend);
        }
    } 

}
</script>