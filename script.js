const addressList = {};

addressList["Google Drive"] = "https://drive.google.com/drive/u/0/folders/1AiOacBgHuUoHDMmF8YirNNJh0WCXRYxE";
addressList["Github"] = "https://github.com/khja240624";
addressList["Zoom"] = "https://zoom.us/j/7652500624?pwd=dndW4u3ViOzaV8482AiT3X7flowHXl.1";
addressList["CodeTogether(Eclipse)"] = "https://live.codetogether.io/#/PFoAPW8OEANdR75RFcDcmW/i7fm521wypQHwu7kS7JgoD";

const btns = document.querySelectorAll('a.button');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const title = btn.innerText;

    const url = addressList[title];
    
    if(url === undefined){
      alert("등록된 주소가 없습니다");
      return;
    }

    window.open(addressList[title]);
  })
})