// כאשר הדף נטען, מריצים את הקוד בפונקציה
document.addEventListener("DOMContentLoaded", function () {
    // בחירת האלמנטים מה-HTML לתצוגת הסל, סכום ההזמנה, וכפתור התשלום
    const cartSummary = document.getElementById("cart-summary");
    const totalPriceElement = document.getElementById("total-price");
    const payButton = document.getElementById("pay-button"); // כפתור התשלום

    // קבלת הנתונים של הסל מה-localStorage (אם אין נתונים, מחזירים מערך ריק)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // פונקציה שמעדכנת את תצוגת הסל
    function updateCartUI() {
        // מנקים את תצוגת הסל לפני עדכון חדש
        cartSummary.innerHTML = "";
        let total = 0; // משתנה לאגירת סכום ההזמנה הכולל

        // אם הסל ריק, מציגים הודעה מתאימה ומפסיקים את הפעולה
        if (cart.length === 0) {
            cartSummary.innerHTML = "<p class='text-center'>🛒 הסל שלך ריק</p>";
            totalPriceElement.textContent = "₪0";
            return;
        }

        // מעבר על כל המוצרים בסל והוספתם לתצוגה
        cart.forEach((item, index) => {
            // יצירת אלמנט עבור כל פריט בסל
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item", "d-flex", "justify-content-between", "align-items-center", "border", "p-2", "mb-2");

            // הכנסת שם המוצר, מחירו וכפתור מחיקה לכל פריט
            itemElement.innerHTML = `
                <span>${item.name} - ₪${item.price}</span>
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">❌</button>
            `;

            // הוספת הפריט לתצוגת הסל
            cartSummary.appendChild(itemElement);

            // הוספת המחיר הכולל להזמנה
            total += item.price;
        });

        // עדכון סכום ההזמנה הכולל
        totalPriceElement.textContent = `₪${total}`;

        // הפעלת פונקציה שמוסיפה אירועים לכפתורי המחיקה
        addRemoveItemListeners();
    }

    // פונקציה שמוסיפה אירוע למחיקת פריט מהסל
    function addRemoveItemListeners() {
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index"); // קבלת האינדקס של הפריט
                cart.splice(index, 1); // מחיקת הפריט מהמערך
                localStorage.setItem("cart", JSON.stringify(cart)); // שמירת הסל המעודכן ב-localStorage
                updateCartUI(); // ריענון התצוגה של הסל
            });
        });
    }

    // הוספת אירוע לכפתור התשלום
    if (payButton) {
        payButton.addEventListener("click", function () {
            if (cart.length === 0) {
                alert("❌ לא ניתן להמשיך לתשלום, הסל שלך ריק.");
            } else {
                alert("📩 תודה על ההזמנה! יישלח אליך אישור תשלום למייל.");
                localStorage.removeItem("cart"); // מחיקת הסל לאחר ביצוע ההזמנה
                window.location.href = "products.html"; // ניווט חזרה לעמוד המוצרים
            }
        });
    } else {
        console.error("❌ כפתור התשלום לא נמצא! ודא שהכפתור עם id='pay-button' קיים ב-HTML.");
    }

    // קריאה ראשונית לפונקציה שתציג את הסל כאשר הדף נטען
    updateCartUI();
});
