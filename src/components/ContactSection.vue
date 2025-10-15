<script setup>

</script>

<template>
    <div class="contact-section">
        <ul>
            <li>
                <div class="icon"><i class="fas fa-envelope"></i></div>
                <div class="text">
                    <h5>Email</h5>
                    <a href="mailto:azfaalharits25@gmail.com">azfaalharits25@gmail.com</a>
                </div>
            </li>
            <li>
                <div class="icon"><i class="fab fa-linkedin"></i></div>
                <div class="text">
                    <h5>LinkedIn</h5>
                    <a href="https://www.linkedin.com/in/atyla-azfa-al-harits/"
                        target="_blank">linkedin.com/in/atyla-azfa-al-harits</a>
                </div>
            </li>
            <li>
                <div class="icon"><i class="fab fa-github"></i></div>
                <div class="text">
                    <h5>Github</h5>
                    <a href="https://github.com/reezecodee" target="_blank">www.github.com/reezecodee</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.contact-section {
    padding: 20px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-section ul {
    list-style: none;
}

.contact-section li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
}

.contact-section li:last-child {
    margin-bottom: 0;
}

.contact-section .icon {
    font-size: 20px;
    margin-right: 15px;
    width: 25px;
    text-align: center;
    color: var(--text-dark);
    margin-top: 2px;
}

.contact-section .text h5 {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 3px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.contact-section .text p,
.contact-section .text a {
    font-size: 13px;
    color: var(--text-dark);
    text-decoration: none;
    word-break: break-all;
    line-height: 1.4;
    font-weight: 400;
}

.contact-section .text a:hover {
    text-decoration: underline;
}
</style>