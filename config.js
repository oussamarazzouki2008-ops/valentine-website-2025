// ============================================
// 💖 CUSTOMIZE YOUR VALENTINE'S WEBSITE
// ============================================

const CONFIG = {
    // اسم صديقتك
    valentineName: "Firdaouss",

    // عنوان الصفحة
    pageTitle: "Pour ma vie Firdaouss 💕",

    // الرموز المائية
    floatingEmojis: {
        hearts: ['❤️', '🫶🏻', '😻', '💗', '🌸'],
        bears: ['😺', '✨']
    },

    // الأسئلة والرسائل بالدارجة بحروف فرنسية
    questions: {
        first: {
            text: "Ne3sti mqelqa lbareh... Kyn chi imkaniya nfarhek w nrsem dahka f wjhek lyouma? 🥺❤️",
            yesBtn: "Ouiii 💕",
            noBtn: "Non 🙈",
            secretAnswer: "Knbghik bzaf a Firdaouss, koulshe ghady ikoun mzyan! ✨"
        },
        second: {
            text: "Chhal d blassa wkhda f qalbi nti ? 💖",
            startText: "Had lqadr kamel, w mazal ktr!",
            nextBtn: "Suivant 💕"
        },
        third: {
            text: "Dima tfakri: Ana hdaak f ay wqt. n9dr nchof dhyka dialk db ? 🥺👉👈",
            yesBtn: "Ouiii ! 😊",
            noBtn: "Non 😜"
        }
    },

    // رسائل شريط الحب
    loveMessages: {
        extreme: "Nti hiyya kolchi andi , wfarhti hia tkoni nti frhanaa ... ✨💖",
        high: "Dima ghadi nbqa fjnbk w m3ak f ay wqt... 🚀💖",
        normal: "Knbghik bzaaf w qalbi w3inia n3tihom lik... 💕"
    },

    // الاحتفال الأخير
    celebration: {
        title: "hdchi drto ghi bch tfrhi hit mtstahlich tn3si m9l9a... ❤️",
        message: "Ntmna had l'page sghira tkhfeff 3lik w tfrahk a hyati . Knbghik bzaf! 💐✨",
        emojis: "💖🎉💐✨👑❤️"
    },

    // ألوان الموقع
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#affb78",
        textColor: "#ff4757"
    },

    // إعدادات الحركة
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // إعدادات الموسيقى
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
