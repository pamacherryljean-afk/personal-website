const images = [
  { src: "0x0.jpg", caption: "Lisa" },
  { src: "images(1).jpeg", caption: "Rosé" },
  { src: "images(2).jpeg", caption: "Jisoo" },
  { src: "images(3).jpeg", caption: "Jennie" }
];

const galleryContainer = document.getElementById("galleryContainer");
if (galleryContainer) {
  images.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");

    const link = document.createElement("a");
    link.href = item.src;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption;

    const caption = document.createElement("p");
    caption.textContent = item.caption;

    link.appendChild(img);
    div.appendChild(link);
    div.appendChild(caption);

    galleryContainer.appendChild(div);
  });
}
