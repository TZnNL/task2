const menu = document.getElementById('headernav');
const btnmenu = document.getElementById('btnmenu');
let check = false;

function updateMenuDisplay() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 620) {
        menu.style.display = "flex";
    } else {
        if (check) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }
}

// Bắt sự kiện thay đổi kích thước màn hình
window.addEventListener('resize', updateMenuDisplay);

// Bắt sự kiện click
btnmenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    check = !check;
    updateMenuDisplay();
}
