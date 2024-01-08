<template>
    <!-- <div>
        <router-link :to="{name: 'Home'}">Home</router-link> | 
        <router-link to="/login">Login</router-link> | 
        <router-link to="/register">Register</router-link>
    </div>
    <router-view></router-view> -->

    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link :to="{name: 'Home'}" class="navbar-brand">Laravel VUE CRUD Application</router-link>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" exact-active-class="active">
                            <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item" exact-active-class="active">
                            <router-link :to="{name: 'categoryList'}" class=" nav-link">Category</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {}
</script>