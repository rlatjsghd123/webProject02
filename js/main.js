// main.js

// Auto banner

function autoBanner(){
  bannerNum++;
  if(banners.length-1 < bannerNum) bannerNum = 0;
  bannerFrame.style.left = `${-bannerNum * 100}%`;
  secWhite(bannerNum);
  autoBn = setTimeout(autoBanner,5000);
}

let autoBn = setTimeout(autoBanner,5000);

// 퀵메뉴 이미지

const quickSpan = document.querySelectorAll(".content1 span");
for (let j = 0; j < quickSpan.length; j++) {
  for (let i = 0; i < 20; i++) {
    if (i < 10) {
      quickSpan[j].innerHTML += `<img src="images/quick0${j + 1}/quick0${
        j + 1
      }_0000${i}.png" />`;
    } else {
      quickSpan[j].innerHTML += `<img src="images/quick0${j + 1}/quick0${
        j + 1
      }_000${i}.png" />`;
    }
  }
}

// 로그인

const appear = document.querySelector(".appear");
const loop = document.querySelector(".loop");

for (let i = 0; i < 57; i++) {
  if (i < 10) {
    appear.innerHTML += `<img src="images/appear/appear_0000${i}.png" />`;
  } else {
    appear.innerHTML += `<img src="images/appear/appear_000${i}.png" />`;
  }
}
for (let i = 0; i < 82; i++) {
  if (i < 10) {
    loop.innerHTML += `<img src="images/loop/loop_0000${i}.png" />`;
  } else {
    loop.innerHTML += `<img src="images/loop/loop_000${i}.png" />`;
  }
}

// 로그인 애니매이션
//anination: ani 2.75s linear 0s 1 normal;
//anination: ani 4.1s linear 0s 2.85s in;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for (let i = 0; i < appearImgs.length; i++) {
  appearImgs[i].style.animation = `ani 2.85s linear ${i * delay}s 1`;
}
for (let j = 0; j < loopImgs.length; j++) {
  loopImgs[j].style.animation = `ani 4.1s linear ${2.85 + j * delay}s`;
  loopImgs[j].style.animationIterationCount =  "infinite";
}

// 고객센터 bar

const cs = document.querySelector(".cs");

cs.addEventListener("click", () => {
  cs.classList.toggle("on");
  if (cs.classList.contains("on")) {
    cs.children[0].setAttribute("title", "고객센터 닫기");
  } else {
    cs.children[0].setAttribute("title", "고객센터 열기");
  }
});

// 검색박스

const srchBtn = document.querySelector(".srch_open");
const srchBox = document.querySelector(".srch");
srchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  srchBox.classList.toggle("on");
  srchBtn.classList.toggle("on");
  if (srchBtn.classList.contains("on")) {
    srchBtn.children[0].setAttribute("title", "검색입력서식 닫기");
  } else {
    srchBtn.children[0].setAttribute("title", "검색입력서식 열기");
  }
});

// header_wrap

const headerWrap = document.querySelector(".header_wrap");
const gnbList = document.querySelectorAll(".gnb >ul > li");
const subList = document.querySelectorAll(".gnb >ul > li > ul");
for (let i = 0; i < gnbList.length; i++) {
  gnbList[i].addEventListener("mouseover", (e) => {
    headerWrap.classList.add("on");
    subList.forEach((list) => {
      list.classList.add("on");
    });

    if (cs.classList.contains("on") || srchBox.classList.contains("on")) {
      srchBox.classList.remove("on");
      srchBtn.classList.remove("on");
      cs.classList.remove("on");
    }
  });
  gnbList[i].addEventListener("mouseout", (e) => {
    headerWrap.classList.remove("on");
    subList.forEach((list) => {
      list.classList.remove("on");
    });
  });
  gnbList[i].children[0].addEventListener("focus", (e) => {
    headerWrap.classList.add("on");
    subList.forEach((list) => {
      list.classList.add("on");
    });
  });
  gnbList[i].children[0].addEventListener("blur", (e) => {
    headerWrap.classList.remove("on");
    subList.forEach((list) => {
      list.classList.remove("on");
    });
  });
}

// banner
const banners = document.querySelectorAll(".banner>.banner_frame>section");
const bannerFrame = document.querySelector(".banner>.banner_frame");
// arrow
const nextBtn = document.querySelector(".btn_next");
const prevBtn = document.querySelector(".btn_prev");

// roll
const bannerRoll = document.querySelectorAll(".banner_roll>ul>li>a");
const arrowA = document.querySelectorAll(".banner_arrow a");
const rollingA = document.querySelectorAll(".banner_roll a");


let bannerNum = 0;
const lastNum = banners.length-1;

let secWhite = (nums) =>{
    // roll
    bannerRoll.forEach(roll => {
        roll.classList.remove("on");
    });
    bannerRoll[nums].classList.add("on");

    if(banners[nums].classList.contains("white")){
        arrowA.forEach(arrow => {
            arrow.classList.add("white");
        });
        rollingA.forEach(roll => {
            roll.classList.add("white");
        });
    } else{
        arrowA.forEach(arrow => {
            arrow.classList.remove("white");
        });
        rollingA.forEach(roll => {
            roll.classList.remove("white");
        });
    }
}

secWhite(0);

// next button
nextBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    bannerNum++;
        if(lastNum < bannerNum) bannerNum = 0;
            bannerFrame.style.left = `${-bannerNum * 100}%`;
            secWhite(bannerNum);
})
// prev button
console.log(prevBtn)
prevBtn.addEventListener("click",(e)=>{
    e.preventDefault();
        bannerNum--;
        if(bannerNum < 0) bannerNum = lastNum;
            bannerFrame.style.left = `${-bannerNum * 100}%`; 
            secWhite(bannerNum);
})


// play,pause

const btnPlay = document.querySelector(".btn_play");
let flag = true;
btnPlay.addEventListener("click",(e)=>{
    e.preventDefault();
    if(flag){
        clearTimeout(autoBn);
        autoBn = "";
        btnPlay.classList.add("pause");
        flag = false;
    } else{
        autoBn = setTimeout(autoBanner,5000);
        btnPlay.classList.remove("pause");
        flag = true;
    }
})


// 롤링 클릭

for(let i=0; i<bannerRoll.length; i++){
  bannerRoll[i].addEventListener("click", ()=>{
    clearTimeout(autoBn);
    autoBn = "";
    bannerFrame.style.left = `${-i * 100}%`;
    secWhite(i);
    btnPlay.classList.add("pause");
  })
}

// content1 animation
// 마우스들어올때
const content1List = document.querySelectorAll(".content1>ul>li");
const quickImgs = document.querySelectorAll(".content1>ul>li>a>span>img ")

for(let i=0; i<content1List.length; i++){
  content1List[i].addEventListener("mouseover",(e)=>{
    for(let j=0; j<20; j++){
      const imgList = e.currentTarget.children[0].children[0].children;
      imgList[j].style.animation = `ani 1s linear ${j * delay}s 1`;
    }
  })
}

// 마우스나갈때
for(let i=0; i<content1List.length; i++){
  content1List[i].addEventListener("mouseout",(e)=>{
    for(let j=0; j<20; j++){
      const imgList = e.currentTarget.children[0].children[0].children;
      imgList[j].style.animation = `ani 1s linear ${j * delay}s 1`;
    }
  })
}


// 스크롤 이벤트

window.addEventListener("scroll", ()=>{
  let scroll = document.querySelector("html").scrollTop;
  console.log(scroll);
  //도넛
   // left
  const doughnutLeftL = document.querySelector(".doughnut_left_L");
  const doughnutLeftS = document.querySelector(".doughnut_left_s");
  const combineLeft = document.querySelector(".combine_left");

  combineLeft.style.top = `${scroll*0.7}px`;
  doughnutLeftS.style.top = `${scroll*0.5}px`;
  doughnutLeftL.style.top = `${1310-scroll*0.8}px`;

  // center
  const doughnutCenterM= document.querySelector(".doughnut_Center_M");

  doughnutCenterM.style.top = `${1600-scroll*0.8}px`;

  // right
  const doughnutRightM = document.querySelector(".doughnut_right_M");
  const combineRight = document.querySelector(".combine_right");

  doughnutRightM.style.top = `${scroll*0.7}px`;
  combineRight.style.top = `${scroll*0.7}px`;

//   // top

// if(scroll < 0){
//   top.classList.add("ad");
// } else{
//   top.classList.remove("ad");
// }



})




// content3
// 마우스 오버 하면 .on 각각의 li 모든 li의 .on은 지우기

const content3List = document.querySelectorAll(".content3_inner>div>ul>li");



content3List.forEach(list => {
  list.addEventListener("mouseover",(e)=>{
    e.currentTarget.classList.add("on");
  });
  list.addEventListener("mouseout",(e)=>{
    e.currentTarget.classList.remove("on");
  });
});

// li 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 swich case
// 해당 클래스 이름에 해당되는 li만 보이게 설정한다. - 각 클래스이름에 해당되는 li만 따로 모아서 저장
const group = document.querySelectorAll(".content3_inner>ul>li>a");
const all = document.querySelectorAll(".content3_inner>div>ul>li");
const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box")

for(let i=0; i<group.length; i++){
  group[i].addEventListener("click", e =>{
    e.preventDefault();

    group.forEach(idx =>{
      idx.classList.remove("on");
    })
    e.currentTarget.classList.add("on");

    const className = e.currentTarget.parentElement.getAttribute("class");
    console.log(className)
    all.forEach(list=>{
      list.style.display = "none"
    })
    switch(className){
      case "all": 
      all.forEach(list=>{
        list.style.display = "block"
      });
        break;
      case "ent":
        ent.forEach(list=>{
          list.style.display = "block"
        });
        break;
      case "shop":
        shop.forEach(list=>{
          list.style.display = "block"
          console.log(list);
        });
        break;
      case "diner":
        diner.forEach(list=>{
          list.style.display = "block"
        });
        break;
      case "box":
        box.forEach(list=>{
          list.style.display = "block"
        });
        break;
      default :
      break;
    }
  })
}

// footer

const site = document.querySelector(".family_site");
const sites = document.querySelector(".family_site>ul");

site.addEventListener("click", (e)=>{
  e.preventDefault();
  sites.classList.toggle("on");

  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0].setAttribute("title", "닫기");
  } else{
    e.currentTarget.children[0].setAttribute("title", "열기");
  }
})

const topBtn = document.querySelector(".top");
// top
topBtn.addEventListener("click",()=>{
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
  
})


// 모바일 서브메뉴

const mobBtn = document.querySelector(".mob_btn");
const mobBtnClose = document.querySelector(".mob_btn_close")
const body = document.querySelector("body");
const bg = document.querySelector(".bg");
const mob = document.querySelector(".mob");

mobBtn.addEventListener("click",(e)=>{
   e.preventDefault();
   body.classList.add("on");
   bg.classList.add("on");
   mob.classList.add("on");
   mobBtnClose.classList.add("on");
})
mobBtnClose.addEventListener("click",(e)=>{
  e.preventDefault();
    body.classList.remove("on");
   bg.classList.remove("on");
   mob.classList.remove("on");
   mobBtnClose.classList.remove("on");
})

// 모바일 서브메뉴 클릭시
const Cs = document.querySelector(".mob_top_menu>dd>.cs");
const CsList =  document.querySelector(".mob_top_menu>dd>ul");
const Clicks = document.querySelectorAll(".clicks");
const mobGnbList = document.querySelectorAll(".mob_gnb>li>ul")

Cs.addEventListener("click",(e)=>{
  e.preventDefault();
  CsList.classList.toggle("on");
})
for(let i=0; i<Clicks.length; i++){
    Clicks[i].addEventListener("click",(e)=>{
      e.preventDefault();
      e.currentTarget.parentElement.children[1].classList.toggle("on")
    })
}


