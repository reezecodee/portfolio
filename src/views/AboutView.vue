<script setup>
</script>

<template>
    <div class="about">
        <div class="title-name">
            <h2>Madoka Yuzuhara</h2>
            <h3>Backend Developer | Information System Student</h3>
        </div>

        <p>
            Yahoo! I'm a <strong>Backend Developer</strong> and an <strong>Undergraduate Student</strong>.
            I've built websites, broken things, and learned a ton along the way—mostly by figuring stuff out myself
            online. I pick up new tech fast, and if I don't know something, give me a bit, and I'll learn it. Let's
            build something cool ~.
        </p>
        <p>
            Let's connect through <a href="https://linkedin.com/in/madoka-yuzuhara" target="_blank">LinkedIn</a>, we
            can
            share insights, innovative ideas and valuable collaboration opportunities!
        </p>
    </div>
</template>

<style scoped>
.title-name {
    margin-top: 50px;
    margin-bottom: 20px;
}

.title-name h2 {
    font-size: 36px;
    font-weight: 600;
    color: var(--text-orange);
    margin-bottom: 5px;
}

.title-name h3 {
    font-size: 13px;
    font-weight: 400;
    color: #888;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.about p {
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: 25px;
    color: var(--text-gray);
    font-weight: 400;
    max-width: 700px;
}

.about p strong {
    font-weight: 600;
    color: var(--text-dark);
}

.about p a {
    color: var(--text-orange);
    text-decoration: none;
    font-weight: 600;
}

.about p a:hover {
    text-decoration: underline;
}
</style>