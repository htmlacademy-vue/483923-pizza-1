<template>
    <label :class="radio">
        <input type="radio" name="name" :value="value" :checked="checked" class="visually-hidden"
            @change="$emit('changeRadio', $event.target.value)" />
        <span>{{ title }}</span>
    </label>
</template>

<script>
    export default {
        name: "RadioButton",
        props:{
            name:{
                type: String,
                required: true,
                validator: v => v.length,
            },
            value:{
                type: String,
                required: true,
                validator: v => v.length,
            },
            title:{
                type: String,
                required: true,
                validator: v => v.length,
            },
            checked:{
                type: Boolean,
                default: false,
            },
        },
    };
</script>