const fs = require('fs');

const mechanicsTemplate = fs.readFileSync('z:/Cursor_apps/PhysSite/mechanics.html', 'utf8');

let electricityHTML = mechanicsTemplate.replace(/מכניקה למכינה/g, 'חשמל למכינה');
electricityHTML = electricityHTML.replace(/<ul class="chapter-list">[\s\S]*?<\/ul>/, `<ul class="chapter-list">
    <li><a href="#" class="chapter-link active" data-chapter="electrostatics">אלקטרוסטטיקה</a></li>
    <li><a href="#" class="chapter-link" data-chapter="circuits">מעגלים חשמליים</a></li>
    <li><a href="#" class="chapter-link" data-chapter="magnetism">מגנטיות</a></li>
    <li><a href="#" class="chapter-link" data-chapter="modern">מבנה האטום</a></li>
</ul>`);
fs.writeFileSync('z:/Cursor_apps/PhysSite/electricity.html', electricityHTML, 'utf8');

let wavesHTML = mechanicsTemplate.replace(/מכניקה למכינה/g, 'גלים');
wavesHTML = wavesHTML.replace(/<ul class="chapter-list">[\s\S]*?<\/ul>/, `<ul class="chapter-list">
    <li><a href="#" class="chapter-link active" data-chapter="mechanical_waves">גלים מכניים</a></li>
    <li><a href="#" class="chapter-link" data-chapter="interference">התאבכות ועקיפה</a></li>
</ul>`);
fs.writeFileSync('z:/Cursor_apps/PhysSite/waves.html', wavesHTML, 'utf8');

let opticsHTML = mechanicsTemplate.replace(/מכניקה למכינה/g, 'אופטיקה גיאומטרית');
opticsHTML = opticsHTML.replace(/<ul class="chapter-list">[\s\S]*?<\/ul>/, `<ul class="chapter-list">
    <li><a href="#" class="chapter-link active" data-chapter="refraction">שבירת אור ועדשות</a></li>
</ul>`);
fs.writeFileSync('z:/Cursor_apps/PhysSite/optics.html', opticsHTML, 'utf8');




