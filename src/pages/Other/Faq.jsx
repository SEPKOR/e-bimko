export default function Faq() {
    return (
        <div>
            <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-200"
            >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Apa itu E-bimko
                </div>
                <div className="collapse-content">
                    <p>
                        E-Bimko adalah layanan Bimbingan Konseling (BK) online
                        yang dibuat oleh SMP Negeri 1 Karangmoncol untuk
                        membantu siswa mengatasi berbagai masalah, seperti rasa
                        percaya diri rendah, perundungan, dan masalah keluarga,
                        dengan cara yang mudah diakses dan tanpa stigma negatif.
                        E-Bimko menawarkan informasi tentang masalah remaja dan
                        tips mengatasinya, serta konsultasi dengan konselor
                        pilihan. Layanan ini diharapkan dapat membantu siswa
                        merasa lebih baik, meningkatkan rasa percaya diri,
                        prestasi belajar, dan membangun hubungan yang lebih
                        baik.
                    </p>
                </div>
            </div>
        </div>
    )
}