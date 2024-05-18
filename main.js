function updateCountdown() {
    // 设置目标日期，例如2024年5月20日
    var targetDate = new Date('June 13, 2024 00:00:00').getTime();

    // 获取当前日期
    var now = new Date().getTime();

    // 计算时间差（毫秒）
    var timeDiff = targetDate - now;

    // 计算天数差
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // 获取div元素
    var countdownDiv = document.getElementById('time');

    // 设置div内容
    countdownDiv.innerHTML = '离 ' + '中考' + new Date(targetDate).toLocaleDateString() + ' 还有 ' + days + ' 天';
}
setInterval(updateCountdown, 1000);
// 每秒更新时间

    document.getElementById('model').addEventListener('wheel', function(e) {
    e.preventDefault();
    // 假设model内部有一个滚动容器，我们监听这个容器的wheel事件
    var scrollContainer = this.querySelector('.scroll-container'); // 假设滚动容器有特定的类名
    if (scrollContainer) {
        scrollContainer.scrollLeft += e.deltaY;
    }
});