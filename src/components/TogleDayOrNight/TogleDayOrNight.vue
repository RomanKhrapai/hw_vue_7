<template>
    <div class='toggle-switch'>
        <label>
            <input type='checkbox' :checked="modelValue" @click="$emit('update:modelValue', $event.target.checked)">
            <span class='slider'></span>
        </label>
    </div>
</template>
  
<script>

export default {

    props: { 'modelValue': Boolean },


};
</script>
  
<style lang="scss" scoped>
@import "./style.module.scss";
</style>