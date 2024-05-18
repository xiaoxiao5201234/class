 document.getElementById('toggleButton').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认的链接跳转行为
    var table = document.getElementById('memb');
    if (table.style.display === 'none') {
        table.style.display = 'block'; // 显示表格
    } else {
        table.style.display = 'none'; // 隐藏表格
    }
});
