<template>
<div>
<h2>manage Goals</h2>
<input type="text"  ref="goal"/>
<button @click="setGoal">Set Goal</button>
<teleport to="body">
    <error-alert v-if="inputIsinvalid">
        <h2>Input is invalid!</h2>
        <p>please entere at least a few caracters...</p>
        <button @click="confirmError">Okay</button>
    </error-alert>
</teleport>
</div>
    
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data(){
        return {
            inputIsinvalid: false
        };
    },
    methods: {
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === ''){
                this.inputIsinvalid = true
            }
        }, 
        confirmError(){
            this.inputIsinvalid = false;
        }
    }
}
</script>