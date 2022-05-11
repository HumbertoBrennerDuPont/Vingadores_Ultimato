function toggleVideo() {
    const trailer = docment.querySelector('.trailer');
    const video = docment.querySelector('video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}