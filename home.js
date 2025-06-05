// מוודא שהקוד ירוץ רק לאחר טעינת כל תוכן הדף
document.addEventListener("DOMContentLoaded", function () {

    // שליפת המוצרים מהסל (localStorage) באמצעות פונקציה חיצונית
    const cart = getCartItems();

    // שליפת האלמנטים שבהם יוצגו המוצרים והסכום הכולל בעמוד ה-HTML
    const cartPreviewContainer = document.getElementById("cart-items-preview"); // אזור רשימת המוצרים
    const totalPricePreview = document.getElementById("total-price-preview"); // אזור הצגת המחיר הכולל

    // אתחול משתנה לאחסון הסכום הכולל של הקנייה
    let total = 0;

    // בדיקה אם הסל מכיל מוצרים
    if (cart.length > 0) {
        let html = ""; // משתנה שישמש ליצירת רשימת הפריטים ב-HTML
        
        // מעבר על כל מוצר שנמצא בסל והוספתו לרשימה
        cart.forEach(item => {
            html += `<li>${item.name} - ₪${item.price}</li>`; // יצירת פריט ברשימה
            total += item.price; // הוספת מחיר המוצר לסכום הכולל
        });

        // הכנסת הרשימה שנבנתה לתוך ה-HTML
        cartPreviewContainer.innerHTML = html;
    } else {
        // אם אין מוצרים בסל, יציג הודעה שהסל ריק
        cartPreviewContainer.innerHTML = "<p class='text-danger'>🛒 הסל שלך ריק.</p>";
    }

    // עדכון התצוגה של הסכום הכולל
    totalPricePreview.textContent = `₪${total}`;
});
