<template>
    <header class="flex">
        <div class="branding flex">
        <img src="../assets/file-invoice-dollar-solid.png" alt="">
            
        </div>
    </header>
</template>

<script>
    export default {
        name: "navigation",
    }
</script>

<style lang="scss" scoped>
    header{
        z-index: 99;
        flex-direction: row;
        background-color: #1e2139;
        @media(min-width: 900px){
            min-height: 100%;
            min-width: 90px;
            flex-direction: column;
            border-radius: 0 20px 0 20px;
        }
    }
    .branding{
        border-radius: 0 20px 0 20px;
        background-color: #7c5dfa;
        padding: 24px;
        justify-content: center;
        @media(min-width: 900px){
            min-height: 100%,;
        }
        img{
            width: auto;
            height: 30px;
        }
    }
</style>