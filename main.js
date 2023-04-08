const pan=document.querySelector('.pan');
const img='pan.jpeg';
const panoroma=new Panolens.ImagePanorama(img);

const viewer=new PANOLENS.Viewer({
 container:pan;
autoRotate:true;
autoRotateSpeed:.5
});
viewer.add(panorama);
