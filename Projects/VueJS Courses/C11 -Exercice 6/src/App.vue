<template>
<section id="container-global">
    <div class="user-input-panel">
        <user-data @update-user="updateUser"></user-data>
    </div>
    <div class="user-output-panel">
        <active-user 
            :username="user.username"
            :age="user.age"></active-user>
    </div>
</section>

</template>

<script>

import ActiveUser  from "./components/ActiveUser.vue";
import UserData  from "./components/UserData.vue";

export default {
    components:[ActiveUser, UserData],
    data(){
        return {
            user:{
                username:'', 
                age:''
            }
        }
    },
    methods: {
        updateUser(receiveUser){
            this.user.username = receiveUser.username;
            this.user.age =  receiveUser.age;
        }
    }

}
</script>

<style>
#container-global {
    display: flex;
    flex-direction: row;
}
.user-input-panel {
width: 50%;
}
.user-output-panel {
width: 50%;
}

</style>