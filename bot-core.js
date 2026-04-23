// وظيفة تحديث شريط الأخبار
function updateNews() {
    const news = [
        "🔥 سعر Pi Network يسجل مستويات قياسية جديدة اليوم",
        "⚡ إمبراطورية BAYA تطلق تحديث المحفظة الذكية",
        "🌐 شبكة Pi تقترب من مرحلة الشبكة المفتوحة (Open Mainnet)",
        "🔱 القائد جمال شعباني يشرف على تطوير المحرك الذكي"
    ];
    let i = 0;
    setInterval(() => {
        document.getElementById('news-text').innerHTML = news[i];
        i = (i + 1) % news.length;
    }, 5000);
}
window.onload = function() {
    syncWallet();
    updateNews();
};
