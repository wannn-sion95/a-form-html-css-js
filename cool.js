document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = form.querySelector("input[type='text']");
  const passwordInput = form.querySelector("input[type='password']");
  const button = form.querySelector(".btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validasi sederhana
    if (!username || !password) {
      alert("Username dan Password harus diisi!");
      return;
    }

    // Simulasi login
    if (username === "Ridwan" && password === "Anita") {
      alert("Login berhasil!");
      // Tambahkan logika setelah login berhasil, misalnya redirect
      window.location.href = "afterLogin.html"; // Contoh redirect
    } else {
      alert("Username atau Password salah!");
    }
  });
});
