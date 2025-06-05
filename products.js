// כאשר הדף נטען, מפעילים את הקוד
document.addEventListener("DOMContentLoaded", function () {
    // שליפת הנתונים מה- localStorage (אם אין נתונים, מחזירים מערך ריק)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // פונקציה ששומרת את הסל ב- localStorage
    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // ✅ מאזין ללחיצות על כפתורי "הוסף לסל"
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name"); // שליפת שם המוצר מהכפתור
            const price = parseFloat(this.getAttribute("data-price")); // שליפת המחיר והמרתו למספר

            // הוספת המוצר לסל
            cart.push({ name, price });
            updateCart(); // עדכון הסל ב- localStorage

            // הצגת הודעה למשתמש
            alert(`${name} נוסף לסל!`);
        });
    });

    // ✅ מאזין ללחיצות על תמונות מוצרים כדי להגדיל אותן
    document.querySelectorAll(".product-img").forEach(image => {
        image.addEventListener("click", function () {
            openModal(this.src); // קריאה לפונקציה שמציגה את התמונה בפופ-אפ
        });
    });
});

// ✅ פונקציה שמציגה את התמונה המוגדלת בפופ-אפ
function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "flex"; // הצגת הפופ-אפ
    document.getElementById("modalImg").src = imageSrc; // שינוי מקור התמונה שבתוך הפופ-אפ
}

// ✅ פונקציה לסגירת המודל (פופ-אפ)
function closeModal() {
    document.getElementById("imageModal").style.display = "none"; // הסתרת הפופ-אפ
}
