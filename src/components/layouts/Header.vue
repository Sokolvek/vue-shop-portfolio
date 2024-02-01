<template>
    <header >
        <nav>
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link to="/">
                        <span>MAROON</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/catalog">Каталог</router-link>
                    <router-link to="#">О нас</router-link>
                    <router-link to="#">Контакты</router-link>
                    <router-link to="/cart">Корзина</router-link>
                </li>
            </ul>
        </nav>
    </header>    
</template>

<script lang="ts" setup>

</script>

<style scoped>
header{
    padding: 20px 100px;
}

span{
    font-size: 32px;
    font-weight: 500;
}

.nav-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-item{
    display: flex;
    gap: 10px;
}

</style>