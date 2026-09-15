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
        videos: [
            { title: "הדגמה: חוק שלישי של ניוטון בחלל (נאס\"א)", embed: '<iframe src="https://www.youtube.com/embed/ZkVU-bj9bDk" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: פיזיקה זה כיף!", embed: '<iframe src="https://www.youtube.com/embed/MkKEwrshYWs" frameborder="0" allowfullscreen></iframe>' },
            { title: "סימולציה PhET: כוחות ותנועה", embed: '<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html?locale=he" width="800" height="600" scrolling="no" allowfullscreen></iframe>' }
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
            { title: "שדה חשמלי מומחש באמצעות גבישים", embed: '<iframe src="https://www.youtube.com/embed/63FnT0W-Hxc" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: משיכה ודחייה אלקטרוסטטית", embed: '<iframe src="https://www.youtube.com/embed/ceUApJ_LUzU" frameborder="0" allowfullscreen></iframe>' },
            { title: "הדגמה: מחולל ואן דר גראף (חשמל סטטי)", embed: '<iframe src="https://www.youtube.com/embed/Ii1UifBoTb0" frameborder="0" allowfullscreen></iframe>' },
            { title: "9 טריקים מדעיים לחשמל סטטי", embed: '<iframe src="https://www.youtube.com/embed/ViZNgU-Yt-Y" frameborder="0" allowfullscreen></iframe>' }
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
