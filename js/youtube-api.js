// ??���� - ���� Unsplash ?�Һ�?����
const videos = [
    {
        id: 'video1',
        title: '����α������ | ?��Ū��ŷ',
        description: '??��?��Ū�������衤ʬ��α��??�¾��?��',
        thumbnail: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_1'
    },
    {
        id: 'video2',
        title: '��������õ�� | ����������?',
        description: '��?��?Ū���ܼ�������?����λ��??����ʸ��',
        thumbnail: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_2'
    },
    {
        id: 'video3',
        title: '?����??�� | ��ʱ�??��',
        description: '��?????����?Ū��ˏ�޷ʿ���Ÿ?�Ի�̥��',
        thumbnail: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_3'
    },
    {
        id: 'video4',
        title: '����??ʸ�� | ��ƻ��?',
        description: 'õ��������ƻʸ��������??��?Ū����',
        thumbnail: 'https://images.unsplash.com/photo-1545048702-79362596cdc9',
        url: 'https://www.youtube.com/watch?v=VIDEO_ID_4'
    }
];

// �����??�����
function renderVideoCards() {
    const gallery = document.querySelector('.video-gallery');
    gallery.innerHTML = ''; // ����?ͭ����
    
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

// ?�̲�?�����������??�����
document.addEventListener('DOMContentLoaded', renderVideoCards); 