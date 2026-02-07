const images = [
  { src: "images/lisa.jpg", caption: "Lisa" },
  { src: "images/rose.jpg", caption: "Rosé" },
  { src: "images/jisoo.jpg", caption: "Jisoo" },
  { src: "images/jennie.jpg", caption: "Jennie" }
];

const galleryContainer = document.getElementById("galleryContainer");

if (galleryContainer) {
  images.forEach(item => {
    const div = document.createElement("div");
    div.className = "gallery-item";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption;

    const p = document.createElement("p");
    p.textContent = item.caption;

    div.appendChild(img);
    div.appendChild(p);
    galleryContainer.appendChild(div);
  });
}
