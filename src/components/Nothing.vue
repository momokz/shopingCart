<template>
    <div class="nothing">
        <h1>404</h1>
    </div>
</template>
<script>
export default {
    data() {
            return {}
        },
        watch: {
            '$router': 'fetchData'
        }
};
</script>
<style>
.nothing {
    position: relative;
}

.nothing h1 {
    color: #333;
    text-align: center;
    margin-top: 20%;
    font-size: 40px;
    font-family: arial;
}
</style>
