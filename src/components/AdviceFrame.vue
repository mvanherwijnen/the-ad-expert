<template>
    <div id="adviceItemFrame">
        <p>{{adviceItem.fields.content}}</p>
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
        padding: 14px;
        font-size: 14px;
        line-height: 18px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
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
        margin-bottom: -12px;
    }
</style>
