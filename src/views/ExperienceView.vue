<script setup>
</script>

<template>
    <div class="experience-list">

        <div class="experience-item">
            <h3>Fullstack Web Developer</h3>
            <div class="experience-meta">
                <span class="company">Tech Company Inc. | Jakarta</span>
                <span class="date">Jan 2024 - Sekarang</span>
            </div>
            <ul class="experience-description">
                <li>Mengembangkan dan memelihara fitur front-end dan back-end untuk aplikasi web utama perusahaan.
                </li>
                <li>Berkolaborasi dengan desainer UI/UX untuk menerjemahkan wireframe menjadi kode yang fungsional.
                </li>
                <li>Mengoptimalkan aplikasi untuk kecepatan dan skalabilitas maksimum.</li>
            </ul>
        </div>

        <div class="experience-item">
            <h3>Web Developer Intern</h3>
            <div class="experience-meta">
                <span class="company">Startup Maju | Bandung</span>
                <span class="date">Jun 2023 - Des 2023</span>
            </div>
            <ul class="experience-description">
                <li>Membantu tim senior dalam pengembangan website e-commerce menggunakan React dan Node.js.</li>
                <li>Melakukan perbaikan bug dan peningkatan minor pada codebase yang ada.</li>
                <li>Belajar dan menerapkan praktik terbaik dalam version control menggunakan Git.</li>
            </ul>
        </div>

        <div class="experience-item">
            <h3>Freelance Project: Portfolio Website</h3>
            <div class="experience-meta">
                <span class="company">Personal Project</span>
                <span class="date">Mar 2023</span>
            </div>
            <ul class="experience-description">
                <li>Merancang dan membangun website portofolio pribadi dari awal menggunakan HTML, CSS, dan
                    JavaScript.</li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.experience-list {
    margin-top: 40px;
}

.experience-item {
    margin-bottom: 35px;
    padding-bottom: 25px;
    border-bottom: 1px solid #eee;
}

.experience-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.experience-item h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-orange);
    margin-bottom: 5px;
}

.experience-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 14px;
    color: var(--text-gray);
}

.experience-meta .company {
    font-weight: 500;
}

.experience-description {
    font-size: 14px;
    line-height: 1.8;
    color: var(--text-gray);
    padding-left: 20px;
}
</style>