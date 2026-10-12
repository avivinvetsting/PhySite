# סקירת פרויקט (Project Overview)

## מהות הפרויקט
פורטל פיזיקה למכינה - מכיל חומרי לימוד, תרגולים וסימולציות בנושאי מכניקה, חשמל, אופטיקה וגלים.

## טכנולוגיות
- הפרויקט הנוכחי מבוסס על HTML ו-CSS סטטיים.
- אין כרגע שימוש ב-Backend או Framework צד-לקוח.

## הרצה מקומית
ניתן לפתוח את הקבצים ישירות או להריץ שרת HTTP סטטי בתיקיית השורש, לדוגמה:
`python3 -m http.server 8000`

## מבנה נתונים (data/content.js)
כל פרק: `title, summary, presentations, exercises, exams, activities, videos`. הרשימות (`presentations/exercises/exams/activities`) הן `{title, link, note?}` — `note` אופציונלי ומוצג מתחת לקישור. `videos` הוא `{title, embed}` (iframe מלא, גם לסימולציות).
אחרי שינוי ב-content.js או app.js — להעלות את `?v=` בכל ארבעת קבצי ה-HTML (אחרת הדפדפן מציג גרסה ישנה).

## בדיקת קישורים לפני הוספה
- יוטיוב: `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json` — מחזיר 200 + כותרת וערוץ אם הסרטון קיים, 404 אם נמחק. (200 לא מבטיח שההטמעה מותרת — למשל ערוץ וולטר לוין; בשביל זה יש כפתור ⛶.)
- PhET: כתובת לא קיימת מחזירה 404 גם ב-`sims/html` וגם ב-`sims/cheerpj`, כך ש-curl מספיק.
