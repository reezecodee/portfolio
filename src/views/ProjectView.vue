<script setup>
</script>

<template>
    <div class="projects-list">

        <div class="project-category">
            <h2>Web Development</h2>
            <div class="projects-grid">
                <div class="project-item">
                    <div class="project-image">
                        <img src="https://via.placeholder.com/400x300.png/E8DED2/4B5563?text=E-Commerce"
                            alt="Gambar Proyek E-Commerce">
                    </div>
                    <div class="project-content">
                        <h3>Platform E-Commerce</h3>
                        <p class="project-tech"><strong>Teknologi:</strong> React, Node.js, Express,
                            PostgreSQL</p>
                        <p class="project-description">Sebuah platform e-commerce MERN stack dengan fitur
                            manajemen produk, keranjang belanja, dan sistem pembayaran.</p>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-image">
                        <img src="https://via.placeholder.com/400x300.png/E8DED2/4B5563?text=Blog"
                            alt="Gambar Proyek Blog">
                    </div>
                    <div class="project-content">
                        <h3>Sistem Manajemen Konten (CMS) Blog</h3>
                        <p class="project-tech"><strong>Teknologi:</strong> Django, HTML, CSS, JavaScript
                        </p>
                        <p class="project-description">Website blog pribadi dengan dashboard admin untuk
                            membuat, mengedit, dan menghapus post.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="project-category">
            <h2>Mobile Development</h2>
            <div class="projects-grid">
                <div class="project-item">
                    <div class="project-image">
                        <img src="https://via.placeholder.com/400x300.png/E8DED2/4B5563?text=Todo+App"
                            alt="Gambar Proyek Todo App">
                    </div>
                    <div class="project-content">
                        <h3>Aplikasi Todo List</h3>
                        <p class="project-tech"><strong>Teknologi:</strong> React Native, Firebase</p>
                        <p class="project-description">Aplikasi mobile cross-platform sederhana untuk
                            mencatat tugas harian dengan sinkronisasi real-time.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="project-category">
            <h2>Machine Learning</h2>
            <div class="projects-grid">
                <div class="project-item">
                    <div class="project-image">
                        <img src="https://via.placeholder.com/400x300.png/E8DED2/4B5563?text=Klasifikasi"
                            alt="Gambar Proyek Klasifikasi Gambar">
                    </div>
                    <div class="project-content">
                        <h3>Klasifikasi Gambar Bunga</h3>
                        <p class="project-tech"><strong>Teknologi:</strong> Python, TensorFlow, Keras,
                            Jupyter</p>
                        <p class="project-description">Model Convolutional Neural Network (CNN) untuk
                            mengklasifikasikan 5 jenis bunga yang berbeda dari gambar.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.projects-list {
    margin-top: 40px;
}

.project-category {
    margin-bottom: 50px;
}

.project-category h2 {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-gray);
    margin-bottom: 25px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.project-item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.project-image img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

.project-content {
    padding: 20px;
}

.project-item h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-orange);
    margin-bottom: 10px;
}

.project-tech {
    font-size: 12px;
    color: var(--text-gray);
    margin-bottom: 15px;
    font-weight: 500;
}

.project-description {
    font-size: 13px;
    line-height: 1.7;
    color: var(--text-gray);
}
</style>