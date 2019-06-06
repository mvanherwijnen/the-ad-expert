<template>
    <div id="adviceItemFrame">
        <h3>{{adviceItem.fields.content}}</h3>
    </div>
</template>

<script>
    export default {
        name: "AdviceFrame",
        props: ['adviceItem']
    }
</script>

<style scoped>
    #adviceItemFrame {
        background-color: black;
        color: white;
        padding: 40px;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        border-radius: 16px;
    }

    #adviceItemFrame:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top-color: black;
        border-bottom: 0;
        border-right: 0;
        margin-left: -10px;
        margin-bottom: -20px;
    }
</style>
