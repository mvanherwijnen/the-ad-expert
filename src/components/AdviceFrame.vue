<template>
    <div id="adviceItemFrame">
        <h1>{{adviceItem.fields.content}}</h1>
    </div>
</template>

<script>
    export default {
        name: "AdviceFrame",
        props: ['adviceItem']
    }
</script>

<style scoped>

</style>
