const addressList = {};

addressList["Google Drive"] = "https://drive.google.com/drive/u/0/folders/1AiOacBgHuUoHDMmF8YirNNJh0WCXRYxE";
addressList["Github"] = "https://github.com/khja240624";
addressList["Zoom"] = "https://zoom.us/j/7652500624?pwd=dndW4u3ViOzaV8482AiT3X7flowHXl.1";
addressList["KH 정보교육원"] = "https://kh-academy.co.kr/";
addressList["CodeTogether(Eclipse)"] = "";
addressList["CodeTogether(VSCode)"]  = "https://live.codetogether.io/#/a255191c-52a0-4f83-867c-b96081e59725/HOfwo6SIOsnMuAcIjQJRVW";
addressList["ERD CLOUD"] = "https://www.erdcloud.com/d/EZYqkPxgWt249r5MA";

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
