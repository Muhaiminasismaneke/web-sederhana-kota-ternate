/*==================== SHOW LOADER ====================*/
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

/*==================== PESAN SALAM ====================*/
async function getGreeting() {
  try {
    const greetings = [
      "Mutiara Terpendam di Maluku Utara",
      "Ini 7 Tempat Wisata Ternate yang Pas untuk Menikmati Hidup",
      "jangan lupa mengunjungi Pantai Sulamadaha yang memiliki pasir putih. Ombak di pantai ini terbilang kecil, sehingga membuat tempat ini nyaman untuk disinggahi.",
      "Benteng Kastela menyuguhkan keindahan arsitektur yang dibangun oleh Portugis.",
      "Pulau Maitara dan Tidore merupakan pulau yang tergambar di uang pecahan seribu rupiah.",
    ]; // daftar kata atau kalimat sapaan yang ingin ditampilkan
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)]; // ambil kata atau kalimat sapaan secara acak dari daftar
    const message = `${randomGreeting}`; // gabungkan kata atau kalimat sapaan dengan data API
    document.getElementById("greeting-message").innerText = message; // tampilkan kata atau kalimat sapaan di elemen HTML
  } catch (error) {
    console.error(error);
  }
}

async function getGreet() {
  try {
    const greet = ["Maluku Utara", "Kota Rempah", "Kota Ternate"]; // daftar kata atau kalimat sapaan yang ingin ditampilkan
    const randomGreet = greet[Math.floor(Math.random() * greet.length)]; // ambil kata atau kalimat sapaan secara acak dari daftar
    const message = `> ${randomGreet} <`; // gabungkan kata atau kalimat sapaan dengan data API
    document.getElementById("greet-message").innerText = message; // tampilkan kata atau kalimat sapaan di elemen HTML
  } catch (error) {
    console.error(error);
  }
}
