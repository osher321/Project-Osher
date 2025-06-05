// מאזין לטעינת הדף - כאשר הדף נטען, מפעיל את הפונקציה
document.addEventListener("DOMContentLoaded", function () {
    // שליפת המוצרים מהסל על ידי קריאה לפונקציה getCartItems()
    const cart = getCartItems();
    
    // בחירת אלמנטים מה-HTML להצגת הסל והמחיר הכולל
    const cartSummaryContainer = document.getElementById("cart-summary");
    const totalPriceContainer = document.getElementById("total-price");

    let total = 0; // משתנה לאגירת סכום ההזמנה הכולל

    // בדיקה האם יש מוצרים בסל
    if (cart.length > 0) {
        let html = '<ul class="list-group">'; // יצירת רשימה מסודרת להצגת המוצרים
        
        // מעבר על כל המוצרים בסל והוספתם לתצוגה
        cart.forEach(item => {
            html += `<li class="list-group-item d-flex justify-content-between align-items-center">
                        ${item.name} 
                        <span class="badge bg-primary rounded-pill">₪${item.price}</span>
                    </li>`;
            total += item.price; // חישוב סכום ההזמנה הכולל
        });

        html += '</ul>'; // סגירת הרשימה
        cartSummaryContainer.innerHTML = html; // הצגת הרשימה בעמוד
    } else {
        // אם אין מוצרים בסל, מציגים הודעה מתאימה
        cartSummaryContainer.innerHTML = '<p class="text-center text-danger">🛒 הסל שלך ריק.</p>';
    }

    // עדכון המחיר הכולל בעמוד
    totalPriceContainer.textContent = `₪${total}`;

    // הוספת מאזין לכפתור התשלום
    document.getElementById("pay-button").addEventListener("click", function () {
        if (cart.length === 0) {
            // אם הסל ריק, מציגים הודעה ולא מאפשרים המשך לתשלום
            alert("לא ניתן להמשיך לתשלום, הסל שלך ריק.");
        } else {
            // אם הסל לא ריק, מציגים הודעת אישור תשלום
            alert("📩 תודה על ההזמנה! יישלח אליך אישור תשלום למייל");

            // קריאה לפונקציה שמנקה את הסל לאחר ההזמנה
            clearCart();

            // ניווט חזרה לעמוד המוצרים
            window.location.href = "products.html";
        }
    });
});
