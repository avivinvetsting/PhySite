const fs = require('fs');
const path = require('path');

const basePath = __dirname;
const mechanicsTemplate = fs.readFileSync(path.join(basePath, 'mechanics.html'), 'utf8');

let electricityHTML = mechanicsTemplate.replace(/מכניקה למכינה/g, 'חשמל למכינה');
electricityHTML = electricityHTML.replace(/<ul class="chapter-list">[\s\S]*?<\/ul>/, `<ul class="chapter-list">
    <li><a href="#" class="chapter-link active" data-chapter="electrostatics">אלקטרוסטטיקה</a></li>
    <li><a href="#" class="chapter-link" data-chapter="circuits">מעגלים חשמליים</a></li>
    <li><a href="#" class="chapter-link" data-chapter="magnetism">מגנטיות</a></li>
    <li><a href="#" class="chapter-link" data-chapter="modern">מבנה האטום</a></li>
</ul>`);
fs.writeFileSync(path.join(basePath, 'electricity.html'), electricityHTML, 'utf8');

let wavesHTML = mechanicsTemplate.replace(/מכניקה למכינה/g, 'גלים');
wavesHTML = wavesHTML.replace(/<ul class="chapter-list">[\s\S]*?<\/ul>/, `<ul class="chapter-list">
    <li><a href="#" class="chapter-link active" data-chapter="mechanical_waves">גלים מכניים</a></li>
    <li><a href="#" class="chapter-link" data-chapter="interference">התאבכות ועקיפה</a></li>
</ul>`);
fs.writeFileSync(path.join(basePath, 'waves.html'), wavesHTML, 'utf8');

let opticsHTML = mechanicsTemplate.replace(/מכניקה למכינה/g, 'אופטיקה גיאומטרית');
opticsHTML = opticsHTML.replace(/<ul class="chapter-list">[\s\S]*?<\/ul>/, `<ul class="chapter-list">
    <li><a href="#" class="chapter-link active" data-chapter="refraction">שבירת אור ועדשות</a></li>
</ul>`);
fs.writeFileSync(path.join(basePath, 'optics.html'), opticsHTML, 'utf8');

let mathHTML = mechanicsTemplate.replace(/מכניקה למכינה/g, 'מתמטיקה למכינה');
mathHTML = mathHTML.replace(/<ul class="chapter-list">[\s\S]*?<\/ul>/, `<ul class="chapter-list">
    <li><a href="#" class="chapter-link active" data-chapter="functions">פונקציות ליניאריות וריבועיות</a></li>
    <li><a href="#" class="chapter-link" data-chapter="quadratic_equations">פתירת משוואות ריבועיות</a></li>
    <li><a href="#" class="chapter-link" data-chapter="vectors">חשבון וקטורי</a></li>
</ul>`);
fs.writeFileSync(path.join(basePath, 'math.html'), mathHTML, 'utf8');

console.log('Generated all HTML files successfully.');
