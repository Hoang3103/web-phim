document.getElementById("reload").addEventListener("click", function() {
    location.reload();
});


// Lấy phần tử tooltip
var tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

// Xử lý sự kiện hover
document.querySelector(".des").addEventListener("mouseover", function(event) {
    var title = event.target.getAttribute("title");
    if (title) {
        tooltip.innerText = title;
        tooltip.style.display = "block";
        tooltip.style.top = (event.clientY + 10) + "px"; // Thêm 10px để tooltip không chạm vào con trỏ
        tooltip.style.left = (event.clientX + 10) + "px"; // Thêm 10px để tooltip không chạm vào con trỏ
    }
});

document.querySelector(".des").addEventListener("mouseout", function() {
    tooltip.style.display = "none";
});
