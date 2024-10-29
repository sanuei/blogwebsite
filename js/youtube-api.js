// ??øÙø¯ - ª»Õ— Unsplash ? “∫Ó?…ıÃÃ
const videos = [
    {
        id: 'video1',
        title: '∆¸À‹Œ±≥ÿ¿∏≥Ë | ?µ˛≈™∞Ï≈∑',
        description: '??∫ﬂ?µ˛≈™∆¸æÔ¿∏≥Ë°§ ¨µ˝Œ±≥ÿ??œ¬æÎª‘?∑ ',
        thumbnail: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_1'
    },
    {
        id: 'video2',
        title: '∆¸À‹»˛ø©√µ∫˜ | º˜ª ¿©∫Ó¬Œ?',
        description: '¬Œ?¿µ?≈™∆¸À‹º˜ª ¿©∫Ó?ƒ¯°§Œª≤Ú??»˛ø© ∏≤Ω',
        thumbnail: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_2'
    },
    {
        id: 'video3',
        title: '?µ˛≥π??±∆ | ÃÎ∑ ±‰??±∆',
        description: 'Õ—?????µ˛ÃÎ?≈™èÃÀèÃﬁ∑ øß°§≈∏?≈‘ª‘Ã•Œœ',
        thumbnail: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_3'
    },
    {
        id: 'video4',
        title: '∆¸À‹?? ∏≤Ω | √„∆ª¬Œ?',
        description: '√µ∫˜∆¸À‹√„∆ª ∏≤Ω°§¥∂ºı??ŒÈ?≈™¿∫ÒÚ',
        thumbnail: 'https://images.unsplash.com/photo-1545048702-79362596cdc9',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_4'
    }
];

// è«Ï¿˜??è¥ª “
function renderVideoCards() {
    const gallery = document.querySelector('.video-gallery');
    gallery.innerHTML = ''; // ¿∂∂ı?Õ≠∆‚Õ∆
    
    videos.forEach(video => {
        const videoCard = `
            <div class="video-item">
                <a href="${video.url}" target="_blank" class="video-link">
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                    </div>
                </a>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            </div>
        `;
        
        gallery.innerHTML += videoCard;
    });
}

// ?ÃÃ≤√?¥∞¿Æπ°è«Ï¿˜??è¥ª “
document.addEventListener('DOMContentLoaded', renderVideoCards); 