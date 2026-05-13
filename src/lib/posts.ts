export type PostContent = {
  title: string;
  date: string;
  tag: string;
  readTime: string;
  excerpt: string;
  content: string;
  highlight: string;
  ctaTitle: string;
  ctaDesc: string;
};

export type Post = {
  slug: string;
  cover: string;
  en: PostContent;
  id: PostContent;
};

export const posts: Post[] = [
  {
    slug: "growth-is-quiet",
    cover: "/images/blog_cover_1.jpg",
    en: {
      title: "The Quiet Nature of Growth",
      date: "January 22, 2026",
      tag: "Reflection",
      readTime: "2 min read",
      excerpt:
        "Real progress is rarely loud. It builds in the silence of small, daily decisions rather than the dramatic milestones we often celebrate.",
      content: `
Growth is rarely dramatic. Most of the time, it feels ordinary, even boring. It’s the quiet repetition of showing up when nobody is watching and when there is no immediate reward in sight.

You wake up. You try again. You fail at something small, you fix it, and you repeat the process. In our world of instant notifications and viral success, this slow burn can feel like failure. We expect growth to be a vertical line, an announcement, a visible milestone. But progress does not always feel like progress. Often, it feels like routine.

But growth is not built in the highlights we share. It is built in the habits we keep. It is the extra hour you spend refining a design when you could have stopped. It is the decision to continue debugging a complex system when you’re tired. It is the conscious choice to improve 1% today instead of staying in the comfort of what you already know.

The world celebrates visible success, the finished product, the "overnight" breakthrough. But invisible consistency is what creates it. If your progress feels slow, that does not mean you are stuck. It may mean you are building something with a foundation so stable that it doesn't need to shout to be noticed.

True depth takes time to form. Don't rush the silence.
`,
      highlight: "Invisible consistency creates visible results.",
      ctaTitle: "Stay consistent.",
      ctaDesc: "What feels small today compounds tomorrow.",
    },
    id: {
      title: "Sifat Pertumbuhan yang Diam",
      date: "22 Januari 2026",
      tag: "Refleksi",
      readTime: "2 mnt baca",
      excerpt:
        "Kemajuan nyata jarang sekali terdengar riuh. Ia terbangun dalam kesunyian keputusan kecil setiap hari, bukan dalam pencapaian dramatis yang sering kita rayakan.",
      content: `
Pertumbuhan jarang sekali terasa dramatis. Sebagian besar waktu, ia terasa biasa saja, bahkan membosankan. Ia adalah pengulangan sunyi dari kehadiran kita saat tidak ada yang melihat dan saat tidak ada imbalan instan yang terlihat.

Anda bangun. Anda mencoba lagi. Anda gagal dalam sesuatu yang kecil, Anda memperbaikinya, dan Anda mengulangi prosesnya. Di dunia kita yang penuh dengan notifikasi instan dan kesuksesan viral, proses yang lambat ini bisa terasa seperti kegagalan. Kita mengharapkan pertumbuhan menjadi garis vertikal, sebuah pengumuman, sebuah pencapaian yang terlihat. Namun kemajuan tidak selalu terasa seperti kemajuan. Seringkali, ia terasa seperti rutinitas.

Namun pertumbuhan tidak dibangun dalam sorotan yang kita bagikan. Ia dibangun dalam kebiasaan yang kita jaga. Ia adalah jam tambahan yang Anda habiskan untuk menyempurnakan desain saat Anda bisa saja berhenti. Ia adalah keputusan untuk terus memperbaiki sistem yang kompleks saat Anda lelah. Ia adalah pilihan sadar untuk berkembang 1% hari ini daripada tetap berada dalam kenyamanan apa yang sudah Anda ketahui.

Dunia merayakan kesuksesan yang terlihat, produk jadi, terobosan yang seolah terjadi "semalam". Namun konsistensi yang tak terlihatlah yang menciptakannya. Jika kemajuan Anda terasa lambat, itu tidak berarti Anda tertahan. Itu mungkin berarti Anda sedang membangun sesuatu dengan fondasi yang begitu stabil sehingga tidak perlu berteriak untuk diperhatikan.

Kedalaman sejati membutuhkan waktu untuk terbentuk. Jangan terburu-buru dalam kesunyian.
`,
      highlight: "Konsistensi yang tidak terlihat menciptakan hasil yang terlihat.",
      ctaTitle: "Tetaplah konsisten.",
      ctaDesc: "Apa yang terasa kecil hari ini akan berlipat ganda besok.",
    },
  },
  {
    slug: "discipline-over-motivation",
    cover: "/images/blog_cover_2.webp",
    en: {
      title: "On Discipline and the Fading of Motivation",
      date: "February 21, 2026",
      tag: "Mindset",
      readTime: "3 min read",
      excerpt:
        "Motivation serves as a spark, but discipline is the steady flame that sustains movement when the initial excitement inevitably cools.",
      content: `
Motivation is emotional, and like all emotions, it is fleeting. It feels powerful when it first arrives—that surge of inspiration that makes a new project feel effortless. But motivation is a fair-weather friend. It disappears the moment things get difficult, tedious, or repetitive.

Discipline is fundamentally different. It does not depend on your mood, the weather, or your level of inspiration. It is a decision you made yesterday that you honor today. Discipline shows up on the normal days—the days you feel tired, the days you feel doubtful, and the days you question whether the effort is even worth it.

While motivation might start a journey, discipline is what finishes it. People often stall because they are waiting to “feel ready” or “feel inspired.” But professional work—and meaningful growth—is often the result of action taken before you feel ready. Readiness is a byproduct of movement, not a prerequisite for it.

If you only move when you are inspired, you will find yourself stopping often. You will be at the mercy of your internal state. But if you move because you decided that this is what you do, you will move regardless of how you feel. That difference, though small on any single day, compounds into the gap between those who dream and those who build.

Don't wait for the spark. Build the fireplace.
`,
      highlight: "Discipline protects your progress when motivation disappears.",
      ctaTitle: "Do it anyway.",
      ctaDesc: "Action creates momentum. Not the other way around.",
    },
    id: {
      title: "Tentang Disiplin dan Memudarnya Motivasi",
      date: "21 Februari 2026",
      tag: "Pola Pikir",
      readTime: "3 mnt baca",
      excerpt:
        "Motivasi berfungsi sebagai percikan, namun disiplin adalah api stabil yang menjaga pergerakan saat kegembiraan awal mulai mendingin.",
      content: `
Motivasi itu emosional, dan seperti semua emosi, ia bersifat fana. Ia terasa kuat saat pertama kali datang—lonjakan inspirasi yang membuat proyek baru terasa tanpa beban. Namun motivasi adalah teman di saat senang saja. Ia menghilang saat keadaan menjadi sulit, membosankan, atau berulang.

Disiplin secara mendasar berbeda. Ia tidak bergantung pada suasana hati Anda, cuaca, atau tingkat inspirasi Anda. Ia adalah keputusan yang Anda buat kemarin yang Anda hormati hari ini. Disiplin muncul di hari-hari biasa—hari-hari saat Anda merasa lelah, hari-hari saat Anda merasa ragu, dan hari-hari saat Anda mempertanyakan apakah usaha itu sepadan.

Meskipun motivasi mungkin memulai sebuah perjalanan, disiplinlah yang menyelesaikannya. Orang sering kali terhenti karena mereka menunggu untuk "merasa siap" atau "merasa terinspirasi". Namun pekerjaan profesional—dan pertumbuhan yang bermakna—seringkali merupakan hasil dari tindakan yang diambil sebelum Anda merasa siap. Kesiapan adalah produk sampingan dari pergerakan, bukan prasyarat untuk itu.

Jika Anda hanya bergerak saat terinspirasi, Anda akan sering berhenti. Anda akan berada di bawah kendali keadaan internal Anda. Namun jika Anda bergerak karena Anda memutuskan bahwa inilah yang Anda lakukan, Anda akan bergerak terlepas dari bagaimana perasaan Anda. Perbedaan itu, meskipun kecil di satu hari saja, akan berlipat ganda menjadi celah antara mereka yang bermimpi dan mereka yang membangun.

Jangan menunggu percikan api. Bangunlah perapiannya.
`,
      highlight: "Disiplin menjaga kemajuan Anda saat motivasi menghilang.",
      ctaTitle: "Lakukan saja.",
      ctaDesc: "Tindakan menciptakan momentum. Bukan sebaliknya.",
    },
  },
  {
    slug: "you-dont-need-to-prove-yourself",
    cover: "/images/blog_cover_3.webp",
    en: {
      title: "The Burden of Performance",
      date: "February 20, 2026",
      tag: "Perspective",
      readTime: "2 min read",
      excerpt:
        "In a world of constant visibility, choosing to grow in private is an act of quiet rebellion that preserves the substance of our work.",
      content: `
There is a silent, pervasive pressure in the modern world to constantly prove yourself. We feel the need to show that we are improving, that we are productive, and that we are always ahead of the curve. Every skill we learn and every project we start feels like it needs to be documented and shared.

But not all progress needs to be public. In fact, some of the most profound growth is meant to be deeply personal. When everything we do becomes a performance for an audience, we risk losing the very depth we are trying to build. We start building for visibility rather than substance.

Visibility is tempting because it provides immediate validation. It’s the "likes" and the "congrats" that make us feel like we’ve arrived. Substance, on the other hand, is much slower and often invisible for a long time. But substance is what lasts. It is the internal architecture of your character and your craft that remains when the spotlight moves elsewhere.

You don’t need to convince everyone of your value. You don’t need to win every comparison. You only need to be focused on becoming a more refined version of yourself than you were yesterday. Choosing substance over visibility is an act of quiet rebellion—one that ensures your work has a soul.

Substance is quiet. Visibility is loud. Choose what lasts.
`,
      highlight: "Substance outlasts visibility.",
      ctaTitle: "Focus on depth.",
      ctaDesc: "Build what lasts, not what trends.",
    },
    id: {
      title: "Beban Performa",
      date: "20 Februari 2026",
      tag: "Perspektif",
      readTime: "2 mnt baca",
      excerpt:
        "Di dunia yang menuntut visibilitas konstan, memilih untuk tumbuh secara pribadi adalah bentuk pemberontakan sunyi yang menjaga substansi dari karya kita.",
      content: `
Ada tekanan yang sunyi namun meresap di dunia modern untuk terus-menerus membuktikan diri. Kita merasa perlu menunjukkan bahwa kita sedang berkembang, bahwa kita produktif, dan bahwa kita selalu berada di depan. Setiap keahlian yang kita pelajari dan setiap proyek yang kita mulai terasa seperti perlu didokumentasikan dan dibagikan.

Namun tidak semua kemajuan perlu dipublikasikan. Faktanya, beberapa pertumbuhan yang paling mendalam dimaksudkan untuk menjadi sangat pribadi. Saat semua yang kita lakukan menjadi pertunjukan bagi penonton, kita berisiko kehilangan kedalaman yang sedang kita coba bangun. Kita mulai membangun demi visibilitas daripada substansi.

Visibilitas menggoda karena ia memberikan validasi instan. Ia adalah "suka" dan "selamat" yang membuat kita merasa telah sampai. Substansi, di sisi lain, jauh lebih lambat dan seringkali tidak terlihat untuk waktu yang lama. Namun substansilah yang bertahan lama. Ia adalah arsitektur internal dari karakter dan keahlian Anda yang tetap ada saat sorotan berpindah ke tempat lain.

Anda tidak perlu meyakinkan semua orang tentang nilai Anda. Anda tidak perlu memenangkan setiap perbandingan. Anda hanya perlu fokus untuk menjadi versi diri yang lebih halus daripada kemarin. Memilih substansi di atas visibilitas adalah tindakan pemberontakan yang tenang—yang memastikan karya Anda memiliki jiwa.

Substansi itu tenang. Visibilitas itu riuh. Pilih apa yang bertahan lama.
`,
      highlight: "Substansi bertahan lebih lama dari visibilitas.",
      ctaTitle: "Fokus pada kedalaman.",
      ctaDesc: "Bangun apa yang bertahan lama, bukan apa yang sedang tren.",
    },
  },
  {
    slug: "starting-without-certainty",
    cover: "/images/blog_cover_4.webp",
    en: {
      title: "Movement Before Clarity",
      date: "February 15, 2026",
      tag: "Journey",
      readTime: "3 min read",
      excerpt:
        "We often wait for the full map before taking a step, forgetting that clarity is usually earned through the act of moving forward.",
      content: `
We are conditioned to believe that confidence must precede action. We wait for the "right moment," the perfect plan, or the absolute certainty that we won't fail. But for most meaningful endeavors, confidence is not the input—it is the output. It is something you earn through the act of doing.

When you start something new, you will rarely feel fully ready. You will doubt your skills, you will question your direction, and you will worry about the potential outcomes. Certainty is comfortable, but growth rarely starts from a place of comfort. It starts from the awkward, uncertain first steps into the unknown.

Clarity is a reward for movement. You decide to begin even without the full map, even without guarantees of success. As you move, the fog slowly lifts. You see the next step, then the one after that. You learn what works by doing what doesn't. The full plan almost never survives the first week of reality anyway.

What you actually need is not a perfect plan, but the willingness to take the next logical step. Courage is not the absence of doubt or fear; it is the decision that something is more important than that fear. It is the decision to continue despite the uncertainty.

Stop waiting for the map. Start walking and let the terrain teach you.
`,
      highlight: "Clarity often follows movement.",
      ctaTitle: "Start anyway.",
      ctaDesc: "Confidence grows after you move.",
    },
    id: {
      title: "Melangkah Sebelum Kejelasan",
      date: "15 Februari 2026",
      tag: "Perjalanan",
      readTime: "3 mnt baca",
      excerpt:
        "Kita sering menunggu peta lengkap sebelum melangkah, lupa bahwa kejelasan biasanya didapatkan melalui tindakan untuk terus maju.",
      content: `
Kita dikondisikan untuk percaya bahwa kepercayaan diri harus mendahului tindakan. Kita menunggu "momen yang tepat", rencana yang sempurna, atau kepastian mutlak bahwa kita tidak akan gagal. Namun untuk sebagian besar upaya yang bermakna, kepercayaan diri bukanlah masukan—ia adalah keluaran. Ia adalah sesuatu yang Anda dapatkan melalui tindakan melakukannya.

Saat Anda memulai sesuatu yang baru, Anda jarang akan merasa sepenuhnya siap. Anda akan meragukan keahlian Anda, Anda akan mempertanyakan arah Anda, dan Anda akan khawatir tentang hasil yang potensial. Kepastian itu nyaman, namun pertumbuhan jarang dimulai dari tempat yang nyaman. Ia dimulai dari langkah-langkah pertama yang canggung dan tidak pasti ke dalam ketidaktahuan.

Kejelasan adalah hadiah dari pergerakan. Anda memutuskan untuk memulai bahkan tanpa peta lengkap, bahkan tanpa jaminan kesuksesan. Saat Anda bergerak, kabut perlahan menghilang. Anda melihat langkah berikutnya, lalu langkah setelah itu. Anda belajar apa yang berhasil dengan melakukan apa yang tidak berhasil. Rencana lengkap hampir tidak pernah bertahan di minggu pertama realitas.

Apa yang sebenarnya Anda butuhkan bukanlah rencana yang sempurna, melainkan kesediaan untuk mengambil langkah logis berikutnya. Keberanian bukanlah ketiadaan keraguan atau rasa takut; ia adalah keputusan bahwa sesuatu lebih penting daripada rasa takut itu. Ia adalah keputusan untuk terus berlanjut meskipun ada ketidakpastian.

Berhenti menunggu peta. Mulailah berjalan dan biarkan medannya mengajarimu.
`,
      highlight: "Kejelasan seringkali mengikuti pergerakan.",
      ctaTitle: "Mulailah saja.",
      ctaDesc: "Kepercayaan diri tumbuh setelah Anda melangkah.",
    },
  },
  {
    slug: "building-your-own-pace",
    cover: "/images/blog_cover_5.webp",
    en: {
      title: "The Sustainability of Rhythm",
      date: "February 10, 2026",
      tag: "Perspective",
      readTime: "2 min read",
      excerpt:
        "Comparison creates a false sense of urgency. Real transformation happens at the intersection of steady focus and personal alignment.",
      content: `
In a hyper-connected world, it is easier than ever to feel behind. You look around and see others moving fast, achieving major milestones, and announcing progress that seems to dwarf your own. Comparison is a loud, persistent voice that tries to convince you that your progress is too slow or insignificant.

But growth is not a race against others; it is an alignment with yourself. Moving fast without a clear direction only creates instability and burnout. Moving steadily with intention, however, creates a depth and resilience that can't be rushed. Your pace might look slower from the outside, but it may also be the only pace that is truly sustainable for you.

Speed impresses in the short term, but consistency transforms in the long term. You are not "late" to some imaginary deadline. You are simply building in your own rhythm, according to your own internal clock. Rhythm matters infinitely more than rush. A rushed success is often fragile, while a rhythmic, steady growth is unbreakable.

Ignore the noise of the crowd. Focus on the steady beat of your own progress. You are exactly where you need to be to build what you were meant to build.

Speed is a distraction. Rhythm is a foundation.
`,
      highlight: "Sustainable progress beats rushed success.",
      ctaTitle: "Move at your rhythm.",
      ctaDesc: "Steady growth is stronger than fast validation.",
    },
    id: {
      title: "Keberlanjutan dalam Ritme",
      date: "10 Februari 2026",
      tag: "Perspektif",
      readTime: "2 mnt baca",
      excerpt:
        "Perbandingan menciptakan rasa urgensi yang salah. Transformasi nyata terjadi di persimpangan antara fokus yang stabil dan penyelarasan pribadi.",
      content: `
Di dunia yang sangat terhubung, lebih mudah dari sebelumnya untuk merasa tertinggal. Anda melihat sekeliling dan melihat orang lain bergerak cepat, mencapai tonggak sejarah besar, dan mengumumkan kemajuan yang seolah-olah mengerdilkan kemajuan Anda sendiri. Perbandingan adalah suara yang riuh dan gigih yang mencoba meyakinkan Anda bahwa kemajuan Anda terlalu lambat atau tidak berarti.

Namun pertumbuhan bukanlah perlombaan melawan orang lain; ia adalah penyelarasan dengan diri sendiri. Bergerak cepat tanpa arah yang jelas hanya menciptakan ketidakstabilan dan kelelahan. Namun, bergerak secara stabil dengan niat menciptakan kedalaman dan ketahanan yang tidak bisa diburu-buru. Langkah Anda mungkin terlihat lebih lambat dari luar, namun ia mungkin juga merupakan satu-satunya langkah yang benar-benar berkelanjutan bagi Anda.

Kecepatan mengesankan dalam jangka pendek, namun konsistensi bertransformasi dalam jangka panjang. Anda tidak "terlambat" mencapai tenggat waktu imajiner tertentu. Anda hanya membangun dalam ritme Anda sendiri, menurut jam internal Anda sendiri. Ritme jauh lebih penting daripada ketergesa-gesaan. Kesuksesan yang terburu-buru seringkali rapuh, sedangkan pertumbuhan yang berirama dan stabil tidak akan terpatahkan.

Abaikan kebisingan orang banyak. Fokuslah pada detak stabil kemajuan Anda sendiri. Anda berada tepat di tempat yang Anda butuhkan untuk membangun apa yang seharusnya Anda bangun.

Kecepatan adalah gangguan. Ritme adalah fondasi.
`,
      highlight: "Kemajuan yang berkelanjutan mengalahkan kesuksesan yang terburu-buru.",
      ctaTitle: "Bergeraklah sesuai ritme Anda.",
      ctaDesc: "Pertumbuhan yang stabil lebih kuat daripada validasi yang cepat.",
    },
  },
];
