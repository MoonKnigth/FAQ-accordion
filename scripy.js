document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const thisContent = btn.closest(".content").querySelector(".body");
      const isOpening = !thisContent.classList.contains("show");

      // ปิดทั้งหมดก่อน
      document.querySelectorAll(".body").forEach((body) => {
        body.classList.remove("show");
      });

      // เปลี่ยนทุกไอคอนกลับเป็น plus
      toggleButtons.forEach((b) => {
        b.src = "assets/images/icon-plus.svg";
      });

      // ถ้าอันนี้กำลังจะเปิด ก็ค่อยเปิดมัน + เปลี่ยนไอคอน
      if (isOpening) {
        thisContent.classList.add("show");
        btn.src = "assets/images/icon-minus.svg";
        // console.log(isOpening);
      }
    });
  });
});
