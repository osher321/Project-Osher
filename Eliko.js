document.addEventListener("DOMContentLoaded", function () {
    // 🌟 תפריט ההמבורגר במובייל
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("show"); // פותח וסוגר את התפריט
        });
    }

    // 🌟 הפעלת כרטיסיות (Tabs)
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    if (tabs.length > 0 && contents.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener("click", function () {
                tabs.forEach(t => t.classList.remove("active"));
                contents.forEach(c => c.classList.remove("active"));

                this.classList.add("active");
                document.getElementById(this.dataset.tab).classList.add("active");
            });
        });
    }

    // 🌟 ניווט ה-NAVBAR לתוך הכרטיסיות
    const navLinks = document.querySelectorAll(".nav-link");

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                const targetId = this.getAttribute("href").substring(1); // מסיר את ה-#
                const targetTab = document.querySelector(`.tab-button[data-tab="${targetId}"]`);
                
                if (targetTab) {
                    // מסיר 'active' מכל הכרטיסיות
                    tabs.forEach(t => t.classList.remove("active"));
                    contents.forEach(tc => tc.classList.remove("active"));

                    // מפעיל את הכרטיסייה הנכונה
                    targetTab.classList.add("active");
                    document.getElementById(targetId).classList.add("active");
                }
            });
        });
    }
});
