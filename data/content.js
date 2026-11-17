// קובץ נתונים זה מכיל את התוכן של הפורטל
// ערוך באמצעות write_to_file כדי לשמור על הקידוד!

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
            { title: "תרגול - תנועה במהירות קבועה (PDF)", link: "files/kinematics/constant-velocity-exercises.pdf", note: '<strong style="color: #c0392b;">⭐ חשוב מאוד לשיעור הראשון!</strong> דף התרגול המרכזי של השיעור - מיקום, העתק ומהירות קבועה.' },
            { title: "פתרונות - תנועה במהירות קבועה (PDF)", link: "files/kinematics/constant-velocity-solutions.pdf" },
            { title: "תרגיל 1 - מושגי יסוד ומהירות קבועה", link: "#" },
            { title: "תרגיל 2 - תאוצה קבועה ומשוואות תנועה", link: "#" },
            { title: "תרגיל 3 - נפילה חופשית וזריקה אנכית", link: "#" }
        ],
        exams: [
            { title: "שאלת בגרות לדוגמה 2018 - ניתוח גרפים", link: "#" },
            { title: "תרגיל מסכם ממתכונת 2021", link: "#" }
        ],
        videos: [
            { title: "הדגמה: נפילה חופשית בוואקום (כדור באולינג ונוצות)", embed: '<iframe src="https://www.youtube.com/embed/E43-CfukEgs" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: האם גופים כבדים נופלים מהר יותר? (Brainiac)", embed: '<iframe src="https://www.youtube.com/embed/jme_vSj5wRo" frameborder="0" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: האיש הנע", embed: '<iframe src="https://phet.colorado.edu/sims/cheerpj/moving-man/latest/moving-man.html?simulation=moving-man&locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
        ]
    },
    "kinematics2d": {
        title: "קינמטיקה דו-מימדית (זריקות)",
        summary: `<p>תנועה בשני מימדים.</p>`,
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "הדגמה: הקוף והצייד", embed: '<iframe src="https://www.youtube.com/embed/MkKEwrshYWs" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: ירי מול הפלה חופשית (Shoot-n-Drop, Harvard)", embed: '<iframe src="https://www.youtube.com/embed/zMF4CD7i3hg" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: תנועה אופקית נשארת קבועה", embed: '<iframe src="https://www.youtube.com/embed/KacTRPL1MtE" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: ירי מול הפלה חופשית (פרופ\' הפנר)", embed: '<iframe src="https://www.youtube.com/embed/Z3BSfkoVfTI" frameborder="0" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: זריקה משופעת", embed: '<iframe src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
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
        activities: [
            { title: "מעבדת מכונת אטווד אינטראקטיבית - Atwood Lab (מעבדה מקומית)", link: "Atwood/atwood-lab.html?v=2", note: "⭐ סימולציה אינטראקטיבית מלאה: שני גופים, חוט וגלגלת, גרפים בזמן אמת ותכנון ניסוי." },
            { title: "משוך בחבל: חוקי ניוטון - דף למורה (מכון דוידסון, PDF)", link: "https://davidson.org.il/vod/wp-content/uploads/sites/2/2022/01/Masuch-bahaval_-huki-Newton_teacher_0-4.pdf", note: "שיעור אחד. צפייה בסרטון + עבודה עצמית בסימולציית PhET (משיכה בחבל) - החוק הראשון והשני. כולל תשובות." },
            { title: "משוך בחבל: חוקי ניוטון - דף לתלמיד (מכון דוידסון, PDF)", link: "https://davidson.org.il/vod/wp-content/uploads/sites/2/2011/07/Masuch-bahaval_-huki-Newton_student-4.pdf", note: "גרסת התלמיד של הפעילות. מיועד במקור לחטיבת ביניים - טוב כפתיחה/חזרה." },
            { title: "Physics Classroom: תרגול אינטראקטיבי - תרשימי גוף חופשי (אנגלית)", link: "https://www.physicsclassroom.com/Physics-Interactives/Newtons-Laws/Free-Body-Diagrams", note: "התלמיד בוחר את הכוחות הנכונים לכל מצב ומקבל משוב מיידי." },
            { title: "Physics Classroom: סימולציה - החוק השני של ניוטון (אנגלית)", link: "https://www.physicsclassroom.com/Physics-Interactives/Newtons-Laws/Force", note: "משנים כוח, מסה וחיכוך ובודקים את התאוצה." },
            { title: "Physics Classroom: כל האינטראקטיבים בנושא חוקי ניוטון (אנגלית)", link: "https://www.physicsclassroom.com/Physics-Interactives/Newtons-Laws" },
            { title: "Physics Classroom: תרגול זיהוי כוחות (אנגלית)", link: "https://www.physicsclassroom.com/morehelp/recforce", note: "מצבים מוחשיים - התלמיד מזהה אילו כוחות פועלים על הגוף. הכנה טובה לתרשים כוחות." },
            { title: "הדגמת כיתה: שליפת מפה מתחת לכלים (התמדה) - סרטון הדרכה", link: "https://www.youtube.com/watch?v=PcGIUZzWoVc", note: "גרסה פשוטה לכיתה: כרטיס מעל כוס ועליו מטבע - מעיפים את הכרטיס והמטבע נופל לכוס." },
            { title: "הדגמת כיתה: טיל בלון על חוט (פעולה ותגובה) - סרטון הדרכה", link: "https://www.youtube.com/watch?v=iV3NXFkdUyw", note: "צריך: בלון, קש, חוט ונייר דבק." }
        ],
        videos: [
            { title: "סימולציה: מכונת אטווד - שני גופים, חוט וגלגלת (מעבדה מקומית)", embed: '<iframe src="Atwood/atwood-lab.html?v=2" width="800" height="600" allowfullscreen></iframe>' },
            { title: "שלושת חוקי התנועה של ניוטון (מכון דוידסון)", embed: '<iframe src="https://www.youtube.com/embed/zCNSO002jfI" frameborder="0" allowfullscreen></iframe>' },
            { title: "הכוחות הבסיסיים: כובד, נורמל ומתיחות (מבוא לפיזיקה, בר-אילן)", embed: '<iframe src="https://www.youtube.com/embed/LzHgQTUegQI" frameborder="0" allowfullscreen></iframe>' },
            { title: "כוח ושקול כוחות (מבוא לפיזיקה, בר-אילן)", embed: '<iframe src="https://www.youtube.com/embed/CBPr-_Xizng" frameborder="0" allowfullscreen></iframe>' },
            { title: "כוח החיכוך (מבוא לפיזיקה, בר-אילן)", embed: '<iframe src="https://www.youtube.com/embed/ST-AZ2qD24s" frameborder="0" allowfullscreen></iframe>' },
            { title: "עריכת תרשים כוחות (אריאל ליבזון)", embed: '<iframe src="https://www.youtube.com/embed/FLBD9DuOkAM" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: חוק ההתמדה - שליפת מפה מתחת לכלים", embed: '<iframe src="https://www.youtube.com/embed/PcGIUZzWoVc" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: חוק שלישי של ניוטון בחלל (נאס\"א)", embed: '<iframe src="https://www.youtube.com/embed/ZkVU-bj9bDk" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: החוק השלישי - הדגמות של נאס\"א (STEMonstrations)", embed: '<iframe src="https://www.youtube.com/embed/dCF--YOjiOw" frameborder="0" allowfullscreen></iframe>' },
            { title: "מהו כוח? (Veritasium, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/GmlMV7bA0TM" frameborder="0" allowfullscreen></iframe>' },
            { title: "החוק השלישי - הסרט הטוב ביותר (Veritasium, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/8bTdMmNZm2M" frameborder="0" allowfullscreen></iframe>' },
            { title: "שלושת חוקי ניוטון עם אופניים (TED-Ed, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/JGO_zDWmkvk" frameborder="0" allowfullscreen></iframe>' },
            { title: "האם שוקלים פחות במעלית? (TED-Ed, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/2k-2IlJcaHg" frameborder="0" allowfullscreen></iframe>' },
            { title: "חוקי ניוטון (Crash Course Physics #5, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/kKKM8Y-u7ds" frameborder="0" allowfullscreen></iframe>' },
            { title: "הרצאה מלאה: חוקי ניוטון (וולטר לוין, MIT 8.01 הרצאה 6)", embed: '<iframe src="https://www.youtube.com/embed/oduZsA0Tk58" frameborder="0" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: כוחות ותנועה", embed: '<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: חיכוך", embed: '<iframe src="https://phet.colorado.edu/sims/html/friction/latest/friction_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: כוחות במימד אחד (כולל תרשים גוף חופשי)", embed: '<iframe src="https://phet.colorado.edu/sims/cheerpj/forces-1d/latest/forces-1d.html?simulation=forces-1d&locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: מישור משופע - כוחות ותנועה", embed: '<iframe src="https://phet.colorado.edu/sims/cheerpj/motion-series/latest/motion-series.html?simulation=ramp-forces-and-motion&locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
        ]
    },
    "energy": {
        title: "עבודה ואנרגיה",
        summary: `<p>שימור אנרגיה ועבודה.</p>`,
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "הדגמה: שימור אנרגיה - המטוטלת של וולטר לוין", embed: '<iframe src="https://www.youtube.com/embed/o7aGI7C0MSs" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה מפורסמת: פרופסור מסכן חיים? (וולטר לוין)", embed: '<iframe src="https://www.youtube.com/embed/wbfOc3EFXhk" frameborder="0" allowfullscreen></iframe>' },
            { title: "כשהמורה לפיזיקה מבין עניין (וולטר לוין)", embed: '<iframe src="https://www.youtube.com/embed/77ZF50ve6rs" frameborder="0" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: פארק האנרגיה", embed: '<iframe src="https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
        ]
    },
    "circular": {
        title: "תנועה מעגלית",
        summary: `<p>כוח צנטריפטלי.</p>`,
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "הדגמה מפורסמת: מים מחוץ לכוח המשיכה? (וולטר לוין)", embed: '<iframe src="https://www.youtube.com/embed/1U6bQFMdMBg" frameborder="0" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: חיפושית בתנועה מעגלית", embed: '<iframe src="https://phet.colorado.edu/sims/cheerpj/ladybug-motion-2d/latest/ladybug-motion-2d.html?simulation=ladybug-motion-2d&locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
        ]
    },
    "momentum": {
        title: "מתקף ותנע",
        summary: `<p>התנגשויות.</p>`,
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "הדגמה מטורפת: שימור תנע וטיל מטפה כיבוי אש (וולטר לוין)", embed: '<iframe src="https://www.youtube.com/embed/W1TMZASCR-I" frameborder="0" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: מעבדת התנגשויות", embed: '<iframe src="https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
        ]
    },
    "gravity": {
        title: "כבידה",
        summary: `<p>כבידה של ניוטון.</p>`,
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "סימולציה PhET: כבידה ומסלולים", embed: '<iframe src="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
        ]
    },
    "harmonic": {
        title: "תנועה הרמונית",
        summary: `<p>מטוטלות וקפיצים.</p>`,
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "סימולציה PhET: מעבדת מטוטלת", embed: '<iframe src="https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
        ]
    }
};

const electricityData = {
    "electrostatics": {
        title: "אלקטרוסטטיקה",
        summary: "<p>מטענים, שדות חשמליים ופוטנציאל.</p>",
        presentations: [], exercises: [], exams: [],
        videos: [
            { group: "מטען חשמלי וטעינה", title: "אלקטרוסטטיקה - מבוא (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/ojPN4S_ONfc" frameborder="0" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "הדגמות: טעינה ופריקה של גופים (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/0DJO4p0_vYI" frameborder="0" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "הדגמה: משיכה ודחייה אלקטרוסטטית", embed: '<iframe src="https://www.youtube.com/embed/ceUApJ_LUzU" frameborder="0" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "הדגמה: טעינה ופריקה של אלקטרוסקופ", embed: '<iframe src="https://www.youtube.com/embed/kY4CiziBDv4" frameborder="0" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "מוליכים ומבודדים", embed: '<iframe src="https://www.youtube.com/embed/qDvdZZYoFXE" frameborder="0" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "הדגמה: הזזת זרם מים בחשמל סטטי (מכון דוידסון)", embed: '<iframe src="https://www.youtube.com/embed/Fd8JigRWbQ4" frameborder="0" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "המדע של החשמל הסטטי (TED-Ed, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/yc2-363MIQs" frameborder="0" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "סימולציה PhET: בלונים וחשמל סטטי", embed: '<iframe src="https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { group: "מטען חשמלי וטעינה", title: "סימולציה PhET: ג'ון טרבולטאז' (טעינה ופריקה)", embed: '<iframe src="https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },

            { group: "חוק קולון", title: "הסבר חוק קולון ב-3 דקות (חנה קדמי)", embed: '<iframe src="https://www.youtube.com/embed/sqQ0dNGb01I" frameborder="0" allowfullscreen></iframe>' },
            { group: "חוק קולון", title: "הכוח החשמלי: חוק קולון (אריאל ליבזון)", embed: '<iframe src="https://www.youtube.com/embed/FmPH9O28mbc" frameborder="0" allowfullscreen></iframe>' },
            { group: "חוק קולון", title: "מטענים נקודתיים - תרגול חוק קולון (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/6a8fhZYih4A" frameborder="0" allowfullscreen></iframe>' },
            { group: "חוק קולון", title: "הרצאה מלאה: מטענים, חוק קולון וקיטוב (וולטר לוין, MIT 8.02, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/x1-SibwIPM4" frameborder="0" allowfullscreen></iframe>' },
            { group: "חוק קולון", title: "סימולציה PhET: חוק קולון", embed: '<iframe src="https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },

            { group: "שדה חשמלי וקווי שדה", title: "ניסוי: המחשת קווי שדה חשמלי (אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/IoaPm-VTtCM" frameborder="0" allowfullscreen></iframe>' },
            { group: "שדה חשמלי וקווי שדה", title: "שדה חשמלי מומחש באמצעות גבישים", embed: '<iframe src="https://www.youtube.com/embed/63FnT0W-Hxc" frameborder="0" allowfullscreen></iframe>' },
            { group: "שדה חשמלי וקווי שדה", title: "מיפוי קווי שדה של מטען נקודתי", embed: '<iframe src="https://www.youtube.com/embed/uB-rB1r561w" frameborder="0" allowfullscreen></iframe>' },
            { group: "שדה חשמלי וקווי שדה", title: "חוק קולון והשדה החשמלי - מרתון לבגרות (אריאל ליבזון)", embed: '<iframe src="https://www.youtube.com/embed/j8OclInR9yU" frameborder="0" allowfullscreen></iframe>' },
            { group: "שדה חשמלי וקווי שדה", title: "סימולציה PhET: מטענים ושדות (קווי שדה של מטענים נקודתיים)", embed: '<iframe src="https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { group: "שדה חשמלי וקווי שדה", title: "סימולציה PhET: הוקי חשמלי", embed: '<iframe src="https://phet.colorado.edu/sims/cheerpj/electric-hockey/latest/electric-hockey.html?simulation=electric-hockey&locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },

            { group: "פוטנציאל חשמלי ומתח", title: "הקשר בין מתח חשמלי לשדה חשמלי (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/-W3hzRfxihQ" frameborder="0" allowfullscreen></iframe>' },
            { group: "פוטנציאל חשמלי ומתח", title: "הקשר בין שדה חשמלי לפוטנציאל (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/v19izyD8GdA" frameborder="0" allowfullscreen></iframe>' },
            { group: "פוטנציאל חשמלי ומתח", title: "משטחים שווי פוטנציאל (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/lezHfJFCrrM" frameborder="0" allowfullscreen></iframe>' },
            { group: "פוטנציאל חשמלי ומתח", title: "עבודת השדה החשמלי ואנרגיה פוטנציאלית חשמלית (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/6MQ2jdoIxqQ" frameborder="0" allowfullscreen></iframe>' },
            { group: "פוטנציאל חשמלי ומתח", title: "שדה במוליכים, פוטנציאל ומתח - הרצאה (גדי פרנקל)", embed: '<iframe src="https://www.youtube.com/embed/BdwPoUZr8Yo" frameborder="0" allowfullscreen></iframe>' },

            { group: "קבלים", title: "קיבול וקבלים - מרתון לבגרות (אריאל ליבזון)", embed: '<iframe src="https://www.youtube.com/embed/0G8Ai-Diceo" frameborder="0" allowfullscreen></iframe>' },
            { group: "קבלים", title: "קיבול וקבלים 1: הגדרות הקבל והקיבול (גדי פרנקל)", embed: '<iframe src="https://www.youtube.com/embed/LtwnubjScM4" frameborder="0" allowfullscreen></iframe>' },
            { group: "קבלים", title: "קיבול וקבלים 3: חיבור בטור ובמקביל (גדי פרנקל)", embed: '<iframe src="https://www.youtube.com/embed/_KYzrQSrcbc" frameborder="0" allowfullscreen></iframe>' },
            { group: "קבלים", title: "קיבול וקבלים 4: האנרגיה האגורה בקבל (גדי פרנקל)", embed: '<iframe src="https://www.youtube.com/embed/_XBgkSYaWS8" frameborder="0" allowfullscreen></iframe>' },
            { group: "קבלים", title: "סימולציה PhET: מעבדת קבלים", embed: '<iframe src="https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },

            { group: "הדגמות ותופעות", title: "הדגמות: מכונת ואן דה גראף (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/BPicQM1c9uw" frameborder="0" allowfullscreen></iframe>' },
            { group: "הדגמות ותופעות", title: "הדגמה: מחולל ואן דר גראף (חשמל סטטי)", embed: '<iframe src="https://www.youtube.com/embed/Ii1UifBoTb0" frameborder="0" allowfullscreen></iframe>' },
            { group: "הדגמות ותופעות", title: "איך עובד מחולל ואן דה גראף - הדגמות והסברים (RimstarOrg, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/Gf6EbRmYImI" frameborder="0" allowfullscreen></iframe>' },
            { group: "הדגמות ותופעות", title: "כלוב פאראדיי (מרכז שוורץ/רייסמן)", embed: '<iframe src="https://www.youtube.com/embed/WdbYj_IDdtI" frameborder="0" allowfullscreen></iframe>' },
            { group: "הדגמות ותופעות", title: "כלוב פאראדיי וניסוי דלי הקרח (Kathy Loves Physics, אנגלית)", embed: '<iframe src="https://www.youtube.com/embed/KVDCf9sz3fw" frameborder="0" allowfullscreen></iframe>' },
            { group: "הדגמות ותופעות", title: "9 טריקים מדעיים לחשמל סטטי", embed: '<iframe src="https://www.youtube.com/embed/ViZNgU-Yt-Y" frameborder="0" allowfullscreen></iframe>' },
            { group: "הדגמות ותופעות", title: "לראות פיזיקה - מנועים אלקטרוסטטיים", embed: '<iframe src="https://www.youtube.com/embed/ng7YMF-NNZs" frameborder="0" allowfullscreen></iframe>' }
        ]
    },
    "circuits": {
        title: "מעגלים חשמליים",
        summary: "<p>זרם, התנגדות ומעגלי זרם ישר.</p>",
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "זרם חשמלי בצילום איטי - חצי מיליארד פריימים בשנייה", embed: '<iframe src="https://www.youtube.com/embed/2AXv49dDQJw" frameborder="0" allowfullscreen></iframe>' }
        ]
    },
    "magnetism": {
        title: "מגנטיות",
        summary: "<p>שדות מגנטיים וכאמ מושרה.</p>",
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "הדגמת חוק לנץ", embed: '<iframe src="https://www.youtube.com/embed/pE-5AmDBH9U" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמת יחס מטען למסה (e/m) - צינור קתודה", embed: '<iframe src="https://www.youtube.com/embed/H3cLnSrjOPA" frameborder="0" allowfullscreen></iframe>' }
        ]
    },
    "modern": {
        title: "מבנה האטום",
        summary: "<p>מודל האטום, רמות אנרגיה ופיזיקה מודרנית.</p>",
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "מבנה האטום (אנימציה)", embed: '<iframe src="https://www.youtube.com/embed/03iWCjxjCdA" frameborder="0" allowfullscreen></iframe>' }
        ]
    }
};

const wavesData = {
    "mechanical_waves": {
        title: "גלים מכניים",
        summary: "<p>יסודות תנועת גלים במרחב.</p>",
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "התנהגות גלים במעבר בין תווכים", embed: '<iframe src="https://www.youtube.com/embed/InIApf8s1KA" frameborder="0" allowfullscreen></iframe>' }
        ]
    },
    "interference": {
        title: "התאבכות ועקיפה",
        summary: "<p>התאבכות שני מקורות ואמבט גלים.</p>",
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "הדגמת התאבכות באמבט גלים מישור", embed: '<iframe src="https://www.youtube.com/embed/Iuv6hY6zsd0?start=280" frameborder="0" allowfullscreen></iframe>' },
            { title: "ניסוי שני הסדקים המקורי במים (ריפל טנק)", embed: '<iframe src="https://www.youtube.com/embed/Jqm4f55soJQ" frameborder="0" allowfullscreen></iframe>' }
        ]
    }
};

const opticsData = {
    "refraction": {
        title: "שבירת אור ועדשות",
        summary: "<p>חוק סנל, עדשות ומראות.</p>",
        presentations: [], exercises: [], exams: [],
        videos: [
            { title: "עדשות, שבירת אור ואשליות אופטיות", embed: '<iframe src="https://www.youtube.com/embed/GE-VeEQFqX4" frameborder="0" allowfullscreen></iframe>' }
        ]
    }
};


const mathData = {
    "functions": {
        title: "פונקציות: ליניאריות וריבועיות",
        summary: `
            <h3>מבוא לפונקציות בפיזיקה</h3>
            <p>השפה המתמטית של הפיזיקה מתארת כיצד גדלים פיזיקליים משתנים ביחס לגדלים אחרים (למשל מיקום, מהירות או אנרגיה כפונקציה של הזמן).</p>
            
            <h3>1. פונקציה ליניארית (קווית)</h3>
            <p>המשוואה הכללית: <code>y = mx + b</code></p>
            <ul>
                <li><strong>שיפוע הישר (m):</strong> מוגדר כשיעור השינוי <code>m = &Delta;y / &Delta;x = (y₂ - y₁) / (x₂ - x₁)</code>. בפיזיקה: שיפוע גרף מקום-זמן הוא המהירות (<code>v = &Delta;x / &Delta;t</code>), ושיפוע גרף מהירות-זמן הוא התאוצה (<code>a = &Delta;v / &Delta;t</code>).</li>
                <li><strong>נקודת חיתוך עם ציר y (ערך b):</strong> ערך ה-y כאשר x=0. בפיזיקה מייצג את תנאי ההתחלה: מקום התחלתי <code>x₀</code> או מהירות התחלתית <code>v₀</code>.</li>
                <li><strong>משוואת הישר לפי נקודה ושיפוע:</strong> <code>y - y₁ = m(x - x₁)</code>.</li>
            </ul>

            <h3>2. פונקציה ריבועית (פרבולה)</h3>
            <p>המשוואה הכללית: <code>y = ax² + bx + c</code> (כאשר a &ne; 0)</p>
            <ul>
                <li><strong>צורת הגרף:</strong> פרבולה. אם <code>a > 0</code> הפרבולה "מחייכת" (קמורה כלפי מטה, נקודת מינימום). אם <code>a < 0</code> הפרבולה "בוכה" (קעורה כלפי מטה, נקודת מקסימום).</li>
                <li><strong>קודקוד הפרבולה:</strong> נקודת הקיצון מתקבלת בשיעור <code>x_v = -b / (2a)</code>. הצבת x_v במשוואה נותנת את ה-y המקסימלי/מינימלי. בפיזיקה, שיא הגובה בזריקה אנכית מתקבל בדיוק ברגע בו המהירות מתאפסת (בקודקוד הפרבולה של <code>y(t)</code>).</li>
                <li><strong>משמעות פיזיקלית:</strong> בתנועה שוות תאוצה, משוואת המקום-זמן היא פונקציה ריבועית של הזמן: <code>x(t) = x₀ + v₀t + &frac12;at²</code>.</li>
            </ul>
        `,
        presentations: [
            { title: "מצגת: פונקציות ליניאריות ומשמעותן הגרפית בפיזיקה (PDF)", link: "#" },
            { title: "מצגת: הפונקציה הריבועית ופרבולות בקינמטיקה (PDF)", link: "#" }
        ],
        exercises: [
            { title: "דף תרגול: מציאת שיפוע ומשוואת ישר מגרפים בפיזיקה", link: "#", note: "תרגול קריאת גרפי מקום-זמן ומהירות-זמן, מציאת שיפוע והסקת מהירות ותאוצה." },
            { title: "דף תרגול: חקירת פרבולה של תנועה שוות תאוצה", link: "#", note: "מציאת קודקוד, נקודות חיתוך ושיא גובה." }
        ],
        exams: [
            { title: "שאלת בגרות לדוגמה: ניתוח גרפים ליניאריים וריבועיים במכניקה", link: "#" }
        ],
        activities: [
            { title: "PhET: חקירת גרף של קו ישר (שיפוע ונקודת חיתוך)", link: "https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_all.html?locale=he", note: "חקירה אינטראקטיבית של שינוי השיפוע m ונקודת החיתוך b עם משוב מיידי." },
            { title: "PhET: חקירת פונקציה ריבועית (פרבולה)", link: "https://phet.colorado.edu/sims/html/graphing-quadratics/latest/graphing-quadratics_all.html?locale=he", note: "משחקים עם המקדמים a, b, c ורואים את השינוי בקודקוד, בצירי הסימטריה ובנקודות האפס." }
        ],
        videos: [
            { group: "סימולציות אינטראקטיביות", title: "סימולציה PhET: חקירת גרף של קו ישר (Graphing Lines)", embed: '<iframe src="https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { group: "סימולציות אינטראקטיביות", title: "סימולציה PhET: חקירת פונקציה ריבועית ופרבולה (Graphing Quadratics)", embed: '<iframe src="https://phet.colorado.edu/sims/html/graphing-quadratics/latest/graphing-quadratics_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { group: "פונקציה ליניארית (קווית)", title: "פונקציות ליניאריות - היכרות (הטכניון, ד\"ר אביב צנזור)", embed: '<iframe src="https://www.youtube.com/embed/TDa1uoZjA30" frameborder="0" allowfullscreen></iframe>' },
            { group: "פונקציה ליניארית (קווית)", title: "פונקציות וגרפים: פונקציות לינאריות (הטכניון, ד\"ר אביב צנזור)", embed: '<iframe src="https://www.youtube.com/embed/Qjb0QN4TeXA" frameborder="0" allowfullscreen></iframe>' },
            { group: "פונקציה ריבועית", title: "הפונקציה הריבועית - הגדרה (הטכניון, ד\"ר אביב צנזור)", embed: '<iframe src="https://www.youtube.com/embed/Fla2OGUOG64" frameborder="0" allowfullscreen></iframe>' },
            { group: "פונקציה ריבועית", title: "הפונקציה הריבועית - הגרף (הטכניון, ד\"ר אביב צנזור)", embed: '<iframe src="https://www.youtube.com/embed/4AC1ROsrouY" frameborder="0" allowfullscreen></iframe>' },
            { group: "פונקציה ריבועית", title: "משוואות ריבועיות: קודקוד הפרבולה (הטכניון, ד\"ר אביב צנזור)", embed: '<iframe src="https://www.youtube.com/embed/-mZhuCo7sJQ" frameborder="0" allowfullscreen></iframe>' }
        ]
    },
    "quadratic_equations": {
        title: "פתירת משוואות ריבועיות",
        summary: `
            <h3>פתרון משוואות ריבועיות והקשר לפיזיקה</h3>
            <p>משוואה ריבועית בצורתה הסטנדרטית נראית כך: <code>ax² + bx + c = 0</code> (כאשר <code>a &ne; 0</code>).</p>
            
            <h3>1. נוסחת השורשים</h3>
            <p>פתרונות המשוואה נתונים על ידי הנוסחה:</p>
            <p style="text-align: center; font-size: 1.2rem; font-weight: bold; direction: ltr; margin: 10px 0;">
                x₁,₂ = (-b &plusmn; &radic;(b² - 4ac)) / (2a)
            </p>

            <h3>2. המבחין (דיסקרימיננטה: &Delta; = b² - 4ac)</h3>
            <ul>
                <li><strong>&Delta; > 0:</strong> קיימים שני פתרונות ממשיים שונים. בפיזיקה: למשל גוף שנזרק למעלה חוצה גובה נתון פעמיים (פעם בעלייה ופעם בירידה).</li>
                <li><strong>&Delta; = 0:</strong> קיים פתרון יחיד (שורש כפול). בפיזיקה: הגוף מגיע בדיוק לשיא הגובה בנקודה זו.</li>
                <li><strong>&Delta; < 0:</strong> אין פתרונות ממשיים. בפיזיקה: הגוף אינו מגיע לגובה זה כלל באנרגיה הנתונה.</li>
            </ul>

            <h3>3. מקרים מנוונים ופישוטים נפוצים בפיזיקה</h3>
            <ul>
                <li><strong>כאשר c = 0 (ללא איבר חופשי):</strong> <code>ax² + bx = 0 &rArr; x(ax + b) = 0</code>. הפתרונות הם <code>x₁ = 0</code> ו-<code>x₂ = -b/a</code>. שימושי מאוד במציאת זמן מעוף של גוף הנזרק מהקרקע וחוזר לקרקע (ב-t=0 וב-t=זמן מעוף).</li>
                <li><strong>כאשר b = 0 (ללא איבר ליניארי):</strong> <code>ax² + c = 0 &rArr; x² = -c/a &rArr; x = &plusmn;&radic;(-c/a)</code>. שימושי בנפילה חופשית ממנוחה (<code>h = &frac12;gt² &rArr; t = &radic;(2h/g)</code>).</li>
            </ul>

            <h3>4. בחירת הפתרון הפיזיקלי</h3>
            <p>בבעיות פיזיקליות של תנועה (זמן <code>t</code>), לעיתים מתקבל פתרון חיובי ופתרון שלילי. ברוב המקרים נפסול את הפתרון השלילי (כי האירוע התרחש לאחר תחילת המדידה <code>t &ge; 0</code>), אלא אם כן מדובר בשאלה של "מה קרה לפני כן".</p>
        `,
        presentations: [
            { title: "מצגת: שיטות לפתרון משוואות ריבועיות בפיזיקה (PDF)", link: "#" }
        ],
        exercises: [
            { title: "דף תרגול: פתרון משוואות ריבועיות בקינמטיקה", link: "#", note: "משוואות תנועה, מציאת זמני פגיעה בקרקע וזמני מפגש בין גופים." },
            { title: "דף תרגול: מקרים מנוונים (הוצאת גורם משותף ובידוד משתנה)", link: "#" }
        ],
        exams: [
            { title: "שאלת בגרות לדוגמה: שימוש בנוסחת השורשים בפתרון תרגיל מכניקה", link: "#" }
        ],
        activities: [
            { title: "Wolfram Alpha / Mathway: כלי לפתרון משוואות עם שלבים", link: "https://www.wolframalpha.com/input?i=solve+quadratic+equation", note: "מחשבון אלגברי המציג את שלבי פתרון נוסחת השורשים והפירוק לגורמים." }
        ],
        videos: [
            { title: "פתרון משוואה ריבועית – כל השיטות: נוסחת השורשים ופירוק לגורמים (Level Up)", embed: '<iframe src="https://www.youtube.com/embed/PqJx1u7juG0" frameborder="0" allowfullscreen></iframe>' },
            { title: "נוסחת השורשים והמבחין (הטכניון, ד\"ר אביב צנזור)", embed: '<iframe src="https://www.youtube.com/embed/tyKwlClBVyo" frameborder="0" allowfullscreen></iframe>' },
            { title: "הוכחת נוסחת השורשים (הטכניון, ד\"ר אביב צנזור)", embed: '<iframe src="https://www.youtube.com/embed/WmbUMFMIf0g" frameborder="0" allowfullscreen></iframe>' }
        ]
    },
    "vectors": {
        title: "חשבון וקטורי",
        summary: `
            <h3>מבוא לוקטורים בפיזיקה</h3>
            <p>בטבע ישנם שני סוגי גדלים עיקריים:</p>
            <ul>
                <li><strong>סקלר (Scalar):</strong> גודל מספרי בלבד בעל יחידות מידה (מסה, זמן, טמפרטורה, אנרגיה).</li>
                <li><strong>וקטור (Vector):</strong> גודל בעל עוצמה (אורך/ערך חיובי) ו<strong>כיוון במרחב</strong> (העתק, מהירות, תאוצה, כוח, תנע).</li>
            </ul>

            <h3>1. פירוק וקטור לרכיבים במערכת צירים קרטזית</h3>
            <p>בהינתן וקטור בעל גודל <code>V</code> היוצר זווית <code>&theta;</code> ביחס לציר האופקי (ציר x):</p>
            <ul>
                <li>רכיב אופקי: <code>V_x = V &middot; cos(&theta;)</code></li>
                <li>רכיב אנכי: <code>V_y = V &middot; sin(&theta;)</code></li>
            </ul>
            <p>ובכיוון ההפוך (שחזור גודל וכיוון מתוך רכיבים):</p>
            <ul>
                <li>גודל הוקטור (משפט פיתגורס): <code>V = &radic;(V_x² + V_y²)</code></li>
                <li>זווית הנטייה: <code>tan(&theta;) = V_y / V_x &rArr; &theta; = arctan(V_y / V_x)</code> (תוך תשומת לב לרביע הנכון).</li>
            </ul>

            <h3>2. פעולות בוקטורים</h3>
            <ul>
                <li><strong>חיבור וקטורים:</strong>
                    <ul>
                        <li><em>שיטה גרפית:</em> חיבור "ראש לזנב" או שיטת המקבילית.</li>
                        <li><em>שיטה אלגברית (רכיבים):</em> סוכמים את הרכיבים בנפרד: <code>R_x = A_x + B_x</code>, <code>R_y = A_y + B_y</code>.</li>
                    </ul>
                </li>
                <li><strong>חיסור וקטורים:</strong> <code>A - B = A + (-B)</code>, כאשר <code>-B</code> הוא וקטור בעל אותו גודל אך בכיוון הפוך בדיוק (180&deg;). שימושי לחישוב שינוי במהירות <code>&Delta;v = v_final - v_initial</code>.</li>
                <li><strong>כפל בסקלר:</strong> כפל וקטור במספר חיובי מגדיל/מקטין את אורכו מבלי לשנות את כיוונו. כפל במספר שלילי הופך גם את כיוונו.</li>
            </ul>

            <h3>3. מעבדת הוקטורים האינטראקטיבית (VecMath)</h3>
            <p>לרשותכם סימולציית <strong>VecMath</strong> בלשונית 'סרטונים וסימולציות' וב'פעילויות'. הסימולציה מאפשרת התנסות חיה בחיבור, חיסור, כפל בסקלר, פירוק לרכיבים ובדיקת זוויות בזמן אמת.</p>
        `,
        presentations: [
            { title: "מצגת: מבוא לוקטורים ופירוק לרכיבים (PDF)", link: "#" },
            { title: "מצגת: חיבור, חיסור וצירופים ליניאריים של וקטורים (PDF)", link: "#" }
        ],
        exercises: [
            { title: "דף תרגול: חישוב רכיבי וקטור ומציאת שקול כוחות", link: "#", note: "תרגול פירוק כוחות במישור ומציאת גודל וכיוון השקול." },
            { title: "דף תרגול: חיבור וחיסור וקטורי בקינמטיקה דו-מימדית", link: "#" }
        ],
        exams: [
            { title: "שאלת בגרות לדוגמה: שקול כוחות ותרשים גוף חופשי דו-מימדי", link: "#" }
        ],
        activities: [
            { title: "מעבדת וקטורים אינטראקטיבית - VecMath (מעבדה מקומית)", link: "VecMath/vec-math.html", note: "⭐ סימולציה אינטראקטיבית מלאה (פתיחה במסך מלא): הצגת וקטור בודד, פירוק לרכיבים, חיבור, חיסור, כפל בסקלר וצירופים ליניאריים." },
            { title: "Physics Classroom: תרגול חיבור וקטורים אינטראקטיבי (אנגלית)", link: "https://www.physicsclassroom.com/Physics-Interactives/Vectors-and-Projectiles/Vector-Addition", note: "תרגול חיבור וקטורים ומציאת שקול." }
        ],
        videos: [
            { group: "מעבדות וסימולציות אינטראקטיביות", title: "סימולציה: מעבדת וקטורים אינטראקטיבית (VecMath)", embed: '<iframe src="VecMath/vec-math.html" width="800" height="600" allowfullscreen></iframe>' },
            { group: "מעבדות וסימולציות אינטראקטיביות", title: "סימולציה PhET: חיבור וקטורים (Vector Addition)", embed: '<iframe src="https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' },
            { group: "הסברים והרצאות בפיזיקה", title: "פיזיקה שאפשר להבין: פירוק וקטור לרכיבים", embed: '<iframe src="https://www.youtube.com/embed/-m1TBt9iYNc" frameborder="0" allowfullscreen></iframe>' },
            { group: "הסברים והרצאות בפיזיקה", title: "וקטורים במכניקה - מרתון לבגרות בפיזיקה (אריאל ליבזון)", embed: '<iframe src="https://www.youtube.com/embed/zSnxWlGmKjc" frameborder="0" allowfullscreen></iframe>' },
            { group: "הסברים והרצאות בפיזיקה", title: "פירוק וקטור לרכיבים על צירים XY (MATIMATIX)", embed: '<iframe src="https://www.youtube.com/embed/yRZEVjTUHnQ" frameborder="0" allowfullscreen></iframe>' }
        ]
    }
};
