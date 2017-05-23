<template>
    <div class="main">
        <div class="router-link">
            <router-link to="/shoppingCart">shoppingCart</router-link>
            <router-link to="/address">address</router-link>
        </div>
        <!-- view -->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'app'
};
</script>
<style scoped>
.router-link {
    width: 1280px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
    background: #605F5F;
    border-radius: 2px;
    box-shadow: 5px 2px 5px #eee;
}

.router-link a {
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    color: #fff;
}

.router-link a:hover {
    color: #EE7A23;
}
.router-link a.router-link-active{
    color: #f00;
}
</style>


