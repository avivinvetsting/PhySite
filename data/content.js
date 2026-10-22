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
            { title: "הדגמה: הקוף והצייד", embed: '<iframe src="https://www.youtube.com/embed/HGpGbcHYA6I" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: תנועה אופקית נשארת קבועה", embed: '<iframe src="https://www.youtube.com/embed/KacTRPL1MtE" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: ירי מול הפלה חופשית (פרופ' הפנר)", embed: '<iframe src="https://www.youtube.com/embed/Z3BSfkoVfTI" frameborder="0" allowfullscreen></iframe>' },
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
            { title: "סימולציה: ניסוי החוק השני - עגלה על מסילה (Walter Fendt)", embed: '<iframe src="https://www.walter-fendt.de/html5/phen/newtonlaw2_en.htm" width="800" height="600" allowfullscreen></iframe>' },
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
