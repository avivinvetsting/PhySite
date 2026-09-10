// קובץ נתונים זה מכיל את התוכן של סקטור "מכניקה למכינה".
// כדי להוסיף סרטון או תרגיל, פשוט מוסיפים שורה לאחד המערכים כאן!

const mechanicsData = {
    "kinematics": {
        title: "קינמטיקה (תנועה במימד אחד)",
        summary: `
            <h3>מבוא לקינמטיקה</h3>
            <p>קינמטיקה היא הענף בפיזיקה המתאר את תנועתם של גופים, מבלי להתייחס לכוחות הגורמים לתנועה זו.</p>
            <p>בפרק זה נלמד על המושגים הבאים:</p>
            <ul>
                <li><strong>העתק ודרך:</strong> ההבדל בין מרחק כולל לבין שינוי המיקום.</li>
                <li><strong>מהירות ממוצעת ורגעית:</strong> קצב שינוי המיקום.</li>
                <li><strong>תאוצה:</strong> קצב שינוי המהירות.</li>
            </ul>
            <p>נכיר את משוואות התנועה הבסיסיות ונלמד כיצד לקרוא ולנתח גרפים של מקום-זמן, מהירות-זמן ותאוצה-זמן.</p>
        `,
        presentations: [
            { title: "מצגת 1: מבוא, מיקום והעתק (קובץ PDF)", link: "#" },
            { title: "מצגת 2: מהירות ותאוצה קבועה", link: "#" }
        ],
        exercises: [
            { title: "תרגיל 1 - מושגי יסוד ומהירות קבועה", link: "#" },
            { title: "תרגיל 2 - תאוצה קבועה ומשוואות תנועה", link: "#" },
            { title: "תרגיל 3 - נפילה חופשית וזריקה אנכית", link: "#" }
        ],
        exams: [
            { title: "שאלת בגרות לדוגמה 2018 - ניתוח גרפים", link: "#" },
            { title: "תרגיל מסכם ממתכונת 2021", link: "#" }
        ],
        videos: [
            { 
                title: "הסבר: מהירות מול תאוצה", 
                embed: '<iframe src="https://www.youtube.com/embed/Z0oE4EheV-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
            },
            {
                title: "סימולציה PhET: האיש הנע",
                embed: '<iframe src="https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html?simulation=moving-man&locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>'
            }
        ]
    },
    "newton": {
        title: "כוחות וחוקי ניוטון",
        summary: `
            <h3>הדינמיקה של תנועה</h3>
            <p>חוקי התנועה של ניוטון הם הבסיס למכניקה הקלאסית. הם מקשרים בין הכוחות הפועלים על גוף לבין השינוי במצב תנועתו.</p>
            <ul>
                <li><strong>החוק הראשון (התמדה):</strong> גוף יתמיד במנוחה או בתנועה במהירות קבועה כל עוד לא פועל עליו כוח שקול.</li>
                <li><strong>החוק השני (F=ma):</strong> תאוצתו של גוף עומדת ביחס ישר לכוח השקול וביחס הפוך למסתו.</li>
                <li><strong>החוק השלישי (פעולה ותגובה):</strong> כוחות בטבע מופיעים תמיד בזוגות.</li>
            </ul>
            <p>בפרק זה נלמד לשרטט תרשימי כוחות (תרשים גוף חופשי) ולפתור בעיות עם חיכוך, כוח נורמלי ומתיחות חוטים.</p>
        `,
        presentations: [
            { title: "מצגת: מבוא לכוחות ותרשים גוף חופשי", link: "#" },
            { title: "מצגת: חוקי ניוטון וכוח חיכוך", link: "#" }
        ],
        exercises: [
            { title: "תרגיל 1 - החוק הראשון ושיווי משקל", link: "#" },
            { title: "תרגיל 2 - החוק השני וגלגלות", link: "#" }
        ],
        exams: [],
        videos: [
            {
                title: "סימולציה PhET: כוחות ותנועה",
                embed: '<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_he.html" width="800" height="600" scrolling="no" allowfullscreen></iframe>'
            }
        ]
    }
    // ניתן להוסיף כאן בקלות את שאר הפרקים (energy, circular, momentum, gravity...)
};
