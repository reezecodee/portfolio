<script setup>
</script>

<template>
    <div class="skills-list">

        <div class="skill-category">
            <h2>Languages</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <i class="devicon-html5-plain-wordmark"></i>
                    <p>HTML5</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-css3-plain-wordmark"></i>
                    <p>CSS3</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-javascript-plain"></i>
                    <p>JavaScript</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-python-plain-wordmark"></i>
                    <p>Python</p>
                </div>
            </div>
        </div>

        <div class="skill-category">
            <h2>Frameworks</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <i class="devicon-nodejs-plain-wordmark"></i>
                    <p>Node.js</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-express-original-wordmark"></i>
                    <p>Express</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-django-plain-wordmark"></i>
                    <p>Django</p>
                </div>
            </div>
        </div>

        <div class="skill-category">
            <h2>Libraries</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <i class="devicon-react-original-wordmark"></i>
                    <p>React</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-tailwindcss-plain-wordmark"></i>
                    <p>TailwindCSS</p>
                </div>
            </div>
        </div>

        <div class="skill-category">
            <h2>Databases</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <i class="devicon-mysql-plain-wordmark"></i>
                    <p>MySQL</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-postgresql-plain-wordmark"></i>
                    <p>PostgreSQL</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.skills-list {
    margin-top: 40px;
}

.skill-category {
    margin-bottom: 40px;
}

.skill-category h2 {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-gray);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 25px;
}

.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.skill-item:hover {
    background-color: #f0ebe2;
    transform: translateY(-5px);
}

.skill-item i {
    font-size: 3rem;
    color: var(--text-dark);
}

.skill-item p {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-gray);
}
</style>