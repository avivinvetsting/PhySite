document.addEventListener('DOMContentLoaded', () => {
    const chapterLinks = document.querySelectorAll('.chapter-link');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const chapterTitle = document.getElementById('current-chapter-title');

    // Default chapter loaded when page opens
    let currentChapter = 'kinematics';

    // Initialize content
    if(chapterLinks.length > 0) {
        loadChapter(currentChapter);
    }

    // Handle Sidebar Chapter Clicks
    chapterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Update active state in sidebar
            chapterLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Load new data
            currentChapter = link.dataset.chapter;
            loadChapter(currentChapter);
        });
    });

    // Handle Tab Clicks
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state in tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetId = btn.dataset.tab;
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Function to load and render data from content.js
    function loadChapter(chapterId) {
        const data = mechanicsData[chapterId];
        if (!data) {
            console.error("No data found for chapter:", chapterId);
            return;
        }

        // Update Title
        chapterTitle.textContent = data.title;

        // Render Summary
        document.getElementById('summary-content').innerHTML = `<div class="prose">${data.summary}</div>`;

        // Render Lists (Presentations, Exercises, Exams)
        renderList('presentations-content', data.presentations);
        renderList('exercises-content', data.exercises);
        renderList('exams-content', data.exams);

        // Render Videos & Simulations
        renderVideos('videos-content', data.videos);
    }

    // Helper to render standard links lists
    function renderList(containerId, items) {
        const container = document.getElementById(containerId);
        if (!items || items.length === 0) {
            container.innerHTML = '<p class="empty-state">אין כרגע חומר מעודכן בחלק זה. יתווסף בקרוב.</p>';
            return;
        }
        
        const ul = document.createElement('ul');
        ul.className = 'content-list';
        
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
            ul.appendChild(li);
        });
        
        container.innerHTML = '';
        container.appendChild(ul);
    }

    // Helper to render videos/iframes
    function renderVideos(containerId, videos) {
        const container = document.getElementById(containerId);
        if (!videos || videos.length === 0) {
            container.innerHTML = '<p class="empty-state">אין סרטונים או סימולציות זמינים כרגע.</p>';
            return;
        }
        
        container.innerHTML = '';
        videos.forEach(vid => {
            const div = document.createElement('div');
            div.className = 'video-card';
            div.innerHTML = `
                <h3>${vid.title}</h3>
                <div class="video-wrapper">
                    ${vid.embed}
                </div>
            `;
            container.appendChild(div);
        });
    }
});
