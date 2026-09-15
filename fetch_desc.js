const fetch = require('node-fetch'); // wait, fetch is built-in in node 18+
async function run() {
    const r1 = await fetch('https://www.youtube.com/watch?v=MkKEwrshYWs');
    const t1 = await r1.text();
    let m1 = t1.match(/<meta name="description" content="(.*?)"/);
    console.log('MkKEwrshYWs:', m1 ? m1[1] : 'No description');

    const r2 = await fetch('https://www.youtube.com/watch?v=77ZF50ve6rs');
    const t2 = await r2.text();
    let m2 = t2.match(/<meta name="description" content="(.*?)"/);
    console.log('77ZF50ve6rs:', m2 ? m2[1] : 'No description');
}
run();
