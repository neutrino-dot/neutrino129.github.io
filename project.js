    let catClickCount = 0;
    const secretCat = document.getElementById("secret-cat");
    const loginForm = document.getElementById("login-form");

    secretCat.addEventListener("click", () => {
      catClickCount++;
      if (catClickCount === 3) {
        loginForm.classList.remove("hidden");
        loginForm.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => { catClickCount = 0; }, 3000); // 3秒以内に3回クリック
    });