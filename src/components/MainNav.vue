<script setup>

</script>

<template>
    <div class="wrapper-center">
        <nav class="main-nav">
            <ul>
                <li>
                    <router-link to="/" exact-active-class="active">About</router-link>
                </li>
                <li>
                    <router-link to="/experiences" active-class="active">Experiences</router-link>
                </li>
                <li>
                    <router-link to="/educations" active-class="active">Educations</router-link>
                </li>
                <li>
                    <router-link to="/skills" active-class="active">Skills</router-link>
                </li>
                <li>
                    <router-link to="/projects" active-class="active">Projects</router-link>
                </li>
                <li>
                    <router-link to="/blogs" active-class="active">Blogs</router-link>
                </li>
                <li>
                    <router-link to="/guestbook" active-class="active">Guestbook</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.wrapper-center{
    display: flex;
    justify-content: center;
}

.main-nav {
    width: 80%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.main-nav::-webkit-scrollbar {
    display: none;
}

.main-nav ul {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    padding: 15px 30px;
}

.main-nav li {
    flex-shrink: 0;
}

.main-nav a {
    text-decoration: none;
    color: var(--text-gray);
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease;
    white-space: nowrap;
}

.main-nav a:hover {
    color: var(--text-dark);
}

.main-nav a.active {
    color: var(--text-orange);
    font-weight: 600;
}
</style>