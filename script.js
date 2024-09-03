const addressList = {};

addressList["Google Drive"] = "https://drive.google.com/drive/u/0/folders/1AiOacBgHuUoHDMmF8YirNNJh0WCXRYxE";
addressList["Github"] = "https://github.com/khja240624";
addressList["Zoom"] = "https://zoom.us/j/7652500624?pwd=dndW4u3ViOzaV8482AiT3X7flowHXl.1";
addressList["KH 정보교육원"] = "https://kh-academy.co.kr/";
addressList["CodeTogether(Eclipse)"] = "https://live.codetogether.io/#/xyCt8IX0McFbf1d6H6SkDx/u2MsYsPYbK2JHaZUI5j4nU";
addressList["CodeTogether(VSCode)"] = "https://live.codetogether.io/#/fde26dab-f124-4297-a832-b2be8f4f9704/9tjOUQixynR4p3z4ieMNRK";
addressList["CodeTogether(DBeaver)"] = "";

const btns = document.querySelectorAll('a.button');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const title = btn.innerText;

    const url = addressList[title];
    
    if(url === undefined || url === "") {
      alert("등록된 주소가 없습니다");
      return;
    }

    window.open(addressList[title]);
  })
})
