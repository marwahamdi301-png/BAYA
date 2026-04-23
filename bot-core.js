// BAYA EMPIRE - Global Intelligence Engine
// Founder: Jamel Chabani

// 1. وظيفة الرصيد الحي
function syncWallet() {
    const balanceElement = document.getElementById('wallet-balance');
    balanceElement.innerHTML = "جاري المزامنة...";
    
    setTimeout(() => {
        // توليد رصيد ملكي بين 370 و 500
        const randomBalance = (Math.random() * (500 - 370) + 370).toFixed(2);
        balanceElement.innerHTML = randomBalance + ' <span style="font-size: 0.4em; color: #D4AF37;">Pi</span>';
    }, 1500);
}

// 2. وظيفة تفعيل المحرك
function startBot() {
    const statusText = document.getElementById('market-status');
    alert("🔱 BAYA EMPIRE 🔱\nتم تفعيل خوارزمية التداول العالمية.\nالقائد: جمال شعباني");
    statusText.innerHTML = "حالة السوق: تداول نشط 🟢";
    statusText.style.color = "#00ff00";
}

// 3. وظيفة شريط الأخبار المتحرك
function updateNews() {
    const newsContent = document.getElementById('news-text');
    const newsList = [
        "🔥 سعر Pi يسجل قمة جديدة عالمياً",
        "⚡ إمبراطورية BAYA تطلق نظام التشفير الفيدرالي",
        "🌐 القائد جمال شعباني يشرف على تحديثات النظام",
        "🚀 نظام BAYA مؤمن بالكامل عبر البلوكشين"
    ];
    let index = 0;
    setInterval(() => {
        newsContent.style.opacity = 0;
        setTimeout(() => {
            newsContent.innerHTML = newsList[index];
            newsContent.style.opacity = 1;
            index = (index + 1) % newsList.length;
        }, 500);
    }, 5000);
}

// 4. تشغيل الكل عند فتح التطبيق
window.onload = function() {
    syncWallet();
    updateNews();
};
