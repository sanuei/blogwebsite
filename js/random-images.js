// ?±ÆÁê?Åª?ÊÒ½¸¹ç
const filmImages = [
    'photo-1511818966892-d7d671e672a2',
    'photo-1495562569060-2eec283d3391',
    'photo-1472214103451-9374bd1c798e',
    'photo-1682687220742-aba13b6e50ba',
    'photo-1485846234645-a62644f84728',
    'photo-1536440136628-849c177e76a1',
    'photo-1440404653325-ab127d49abc1',
    'photo-1500462918059-b1a0cb512f1d',
    'photo-1517604931442-7e0c8ed2963c',
    'photo-1574267432553-4b4628081c31'
];

// ?¼è¿ï´ù?ÊÒID
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * filmImages.length);
    return `https://images.unsplash.com/${filmImages[randomIndex]}?w=800&q=80`;
}

// ?ÌÌ²Ã??¿ï´ù?ÃÖ?ÊÒ
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.video-thumbnail img');
    thumbnails.forEach(img => {
        img.src = getRandomImage();
    });
}); 