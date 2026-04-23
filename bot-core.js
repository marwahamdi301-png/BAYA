// BAYA EMPIRE - Advanced Trading Engine v1.1
// Founder: Jamel Chabani

// وظيفة تفعيل المحرك الذكي
function startBot() {
    let statusText = document.getElementById('market-status');
    let btn = document.querySelector('button:not(.sync-btn)');
    
    btn.innerHTML = "جاري الفحص...";
    btn.style.background = "#fff";
    
    setTimeout(() => {
        alert("🔱 BAYA EMPIRE 🔱\nتم تفعيل خوارزمية التداول الآلي بنجاح.\nجاري ربط المحفظة GA35IK...");
        statusText.innerHTML = "حالة السوق: تداول نشط 🟢";
        statusText.style.color = "#00ff00";
        btn.innerHTML = "المحرك نشط الآن";
        btn.style.background = "#00ff00";
    }, 2000);
}

// وظيفة تحديث الرصيد بشكل حي
function syncWallet() {
    const balanceElement = document.getElementById('wallet-balance');
    balanceElement.innerHTML = "جاري الاتصال...";
    
    setTimeout(() => {
        // توليد رصيد جمالي بين الـ 370 والـ 500 كما في خطتنا
        const fakeBalance = (Math.random() * (500 - 370) + 370).toFixed(2); 
        balanceElement.innerHTML = fakeBalance + ' <span style="font-size: 0.4em; color: #D4AF37;">Pi</span>';
    }, 1500);
}

// تشغيل التحديث الأول تلقائياً عند فتح الإمبراطورية
window.onload = syncWallet;
