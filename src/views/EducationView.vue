<script setup>
</script>

<template>
    <div class="education-list">
        <div class="education-item">
            <h3>Sarjana Teknik Informatika</h3>
            <div class="education-meta">
                <span class="institution">Universitas Siliwangi, Tasikmalaya</span>
                <span class="date">2021 - 2025 (Diharapkan)</span>
            </div>
            <ul class="education-description">
                <li>IPK Saat Ini: 3.8 / 4.0</li>
                <li>Mata kuliah relevan: Keamanan Jaringan, Pengembangan Web Lanjut, Rekayasa Perangkat Lunak, Basis
                    Data Terdistribusi.</li>
                <li>Aktif di himpunan mahasiswa sebagai kepala divisi teknologi dan informasi.</li>
            </ul>
        </div>

        <div class="education-item">
            <h3>Sekolah Menengah Atas</h3>
            <div class="education-meta">
                <span class="institution">SMA Negeri 1 Tasikmalaya | Jurusan IPA</span>
                <span class="date">2018 - 2021</span>
            </div>
            <ul class="education-description">
                <li>Lulus dengan predikat sangat baik dan nilai rata-rata 90.</li>
                <li>Anggota ekstrakurikuler KIR (Kelompok Ilmiah Remaja) dengan fokus pada robotika sederhana.</li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.education-list {
    margin-top: 40px;
}

.education-item {
    margin-bottom: 35px;
    padding-bottom: 25px;
    border-bottom: 1px solid #eee;
}

.education-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.education-item h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-orange);
    margin-bottom: 5px;
}

.education-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 14px;
    color: var(--text-gray);
}

.education-meta .institution {
    font-weight: 500;
}

.education-description {
    font-size: 14px;
    line-height: 1.8;
    color: var(--text-gray);
    padding-left: 20px;
}
</style>