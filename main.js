// main.js
document.addEventListener('DOMContentLoaded', () => {

    // ==================== Thème ====================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
        if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                if (themeIcon) { themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon'); }
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
            }
        });
    }

    // ==================== Protection des liens ====================
    // assistant.html → محمي (يتطلب تسجيل دخول)
    // services.html → مفتوح للجميع (بدون حماية)

    function checkAndRedirectForAssistant(e, page) {
        e.preventDefault();
        const studentId = localStorage.getItem('student_id');
        if (!studentId) {
            localStorage.setItem('redirect_after_login', page);
            window.location.href = 'login.html';
        } else {
            window.location.href = page;
        }
    }

    const btnAssistant = document.getElementById('btnAssistant');
    const btnServices = document.getElementById('btnServices');

    // فقط assistant هو المحمي
    if (btnAssistant) {
        btnAssistant.addEventListener('click', (e) => checkAndRedirectForAssistant(e, 'assistant.html'));
    }

    // services مفتوح للجميع - لا حماية
    if (btnServices) {
        btnServices.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'services.html';
        });
    }

    // --- كود النافذة المنبثقة (يوضع في نهاية ملف main.js) ---
    const studentId = localStorage.getItem('student_id');
    const authZone = document.getElementById('auth-zone');

    if (studentId && authZone) {
        const firstName = localStorage.getItem('first_name') || 'Student';
        const email = localStorage.getItem('email') || '';

       // main.js
document.addEventListener('DOMContentLoaded', () => {

    // ==================== Thème ====================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
        if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                if (themeIcon) { themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon'); }
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
            }
        });
    }

    // ==================== Protection des liens ====================
    function checkAndRedirectForAssistant(e, page) {
        e.preventDefault();
        const studentId = localStorage.getItem('student_id');
        if (!studentId) {
            localStorage.setItem('redirect_after_login', page);
            window.location.href = 'login.html';
        } else {
            window.location.href = page;
        }
    }

    const btnAssistant = document.getElementById('btnAssistant');
    const btnServices = document.getElementById('btnServices');

    if (btnAssistant) {
        btnAssistant.addEventListener('click', (e) => checkAndRedirectForAssistant(e, 'assistant.html'));
    }

    if (btnServices) {
        btnServices.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'services.html';
        });
    }

    // ==================== كود النافذة المنبثقة الجديد ====================
    const studentId = localStorage.getItem('student_id');
    const authZone = document.getElementById('auth-zone');

    if (studentId && authZone) {
        const firstName = localStorage.getItem('first_name') || 'Student';
        const lastName = localStorage.getItem('last_name') || '';
        const email = localStorage.getItem('email') || '';
        
        authZone.innerHTML = `
            <div class="relative">
                <button id="profileButton" class="flex items-center gap-3 w-full p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <div class="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        <i class="fa-solid fa-user text-sm"></i>
                    </div>
                    <div class="text-left">
                        <p class="text-sm font-medium text-slate-800 dark:text-slate-200">${firstName} ${lastName}</p>
                        <p class="text-[11px] text-slate-400 dark:text-slate-500">student</p>
                    </div>
                    <i class="fa-solid fa-chevron-up ml-auto text-xs text-slate-400"></i>
                </button>

                <div id="profilePopover" class="absolute bottom-full left-0 mb-2 w-full max-w-[230px] p-4 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 hidden" style="z-index: 9999;">
                    <div class="absolute -bottom-2 left-6 w-4 h-4 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700 transform rotate-45"></div>
                    <div class="text-center">
                        <p class="text-xs text-slate-600 dark:text-slate-300 break-all mb-3 font-medium">${email}</p>
                        <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 mx-auto flex items-center justify-center text-blue-700 dark:text-blue-300 text-lg border-2 border-white dark:border-slate-700 mb-2">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <p class="text-sm font-medium text-slate-800 dark:text-slate-200 mb-3">hello, ${firstName}</p>
                        <hr class="my-3 border-slate-200 dark:border-slate-700">
                        <button id="logoutBtn" class="w-full py-2 text-sm text-red-600 dark:text-red-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg transition flex items-center justify-center gap-2">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i> Log out
                        </button>
                    </div>
                </div>
            </div>
        `;

        const profileBtn = document.getElementById('profileButton');
        const popover = document.getElementById('profilePopover');

        if (profileBtn && popover) {
            profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                popover.classList.toggle('hidden');
            });
            document.addEventListener('click', (e) => {
                if (!profileBtn.contains(e.target) && !popover.contains(e.target)) {
                    popover.classList.add('hidden');
                }
            });
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.onclick = () => {
                localStorage.clear();
                window.location.reload();
            };
        }
    }
});
        // إغلاق القائمة إذا ضغط المستخدم في أي مكان خارجها
        document.addEventListener('click', () => {
            if (dropdown) dropdown.classList.add('hidden');
        });

        // منطق زر تسجيل الخروج
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.onclick = () => {
                localStorage.clear(); // مسح بيانات المستخدم
                window.location.reload(); // إعادة تحميل الصفحة لإظهار زر Login مجدداً
            };
        }
    }
});
function checkAndRedirectForAssistant(e, page) {
    e.preventDefault();
    const studentId = localStorage.getItem('student_id');
    if (!studentId) {
        localStorage.setItem('redirect_after_login', page);
        window.location.href = 'login.html';
    } else {
        window.location.href = page;
    }
}

const btnAssistant = document.getElementById('btnAssistant');
if (btnAssistant) {
    btnAssistant.addEventListener('click', (e) => 
        checkAndRedirectForAssistant(e, 'assistant.html')
    );
}