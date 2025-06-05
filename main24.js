// פונקציה שמופעלת כאשר לוחצים על כפתור במחשבון
function onKeyPressed(event) {
    // קבלת הטקסט מהכפתור שנלחץ
    const value = event.target.innerText;
    // מאחזר את האלמנט שמציג את התוצאה
    const screen = document.getElementById('screen');

    // בדיקה איזה כפתור נלחץ וביצוע הפעולה המתאימה
    if (value === 'C') {
        // ניקוי המסך כאשר לוחצים על C
        screen.value = ''; 
    } else if (value === '=') {
        // חישוב הביטוי כאשר לוחצים על =
        try {
            screen.value = eval(screen.value); // שימוש ב-eval() לחישוב
        } catch (e) {
            screen.value = 'Error'; // אם יש שגיאה, מציג "Error"
        }
    } else if (value === '←') { 
        // מחיקת התו האחרון כאשר לוחצים על כפתור המחיקה (Backspace)
        screen.value = screen.value.slice(0, -1);
    } else {
        // הוספת הספרה או האופרטור שנלחץ לתצוגה
        screen.value += value;
    }
}

// מאזין לאירוע טעינת המסמך
document.addEventListener("DOMContentLoaded", () => {
    // מאחזר את כל הכפתורים בדף והופך אותם למערך
    const buttons = [...document.getElementsByTagName('button')];

    // עובר על כל כפתור ומוסיף לו אירוע לחיצה
    for (const button of buttons) {
        button.addEventListener('click', onKeyPressed);
    }
});
