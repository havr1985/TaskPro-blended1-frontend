const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: 'dtvze3qy8',
  api_key: '592834823753327',
  api_secret: 'shUoLIVFxKk7aa9rqjrJ8zPcxCg' 
});

async function getUrlsForFolder(folder) {
  try {
    const result = await cloudinary.api.resources({ type: 'upload', prefix: folder });
    const urls = {};

    result.resources.forEach(item => {
      const public_id = item.public_id;
      const url = cloudinary.url(public_id);
      urls[public_id] = url;
    });

    return urls;
  } catch (error) {
    console.error('Помилка під час отримання ресурсів з Cloudinary:', error);
    throw error;
  }
}

Promise.all([
  getUrlsForFolder('bg-image-mobile-webp'),
  getUrlsForFolder('bg-image-tablet-webp'),
  getUrlsForFolder('bg-img-desktop-webp')
]).then(urls => {
  const combinedUrls = Object.assign({}, ...urls);
  console.log("URLs:", combinedUrls);

 
  const jsonContent = JSON.stringify(combinedUrls, null, 2);

  
  fs.writeFileSync('urls.json', jsonContent);

  console.log("URLs записано  файл 'urls.json'");
}).catch(error => {
  console.error('Помилка під час отримання URL-адрес з папок:', error);
});