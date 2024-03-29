const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const pictures = (picture) => {
  return `<li><img src="${picture.url}" alt="${picture.alt}"></li>`;
};
const list = document.querySelector(".gallery");
const makeImgCollection = images.map(pictures);
const createListOfImages = (list.innerHTML = makeImgCollection);

const galleryStyle = document.querySelector(".gallery");
galleryStyle.style.listStyle = "none";
galleryStyle.style.display = "flex";
galleryStyle.style.flexDirection = "column";
galleryStyle.style.justifyContent = "center";
galleryStyle.style.alignItems = "center";
galleryStyle.style.marginBottom = "10px";
