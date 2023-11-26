"use strict";
/*Close and open the information large window*/
let btn_kaka = document.querySelector(".button-kaka");
let btn_figo = document.querySelector('.button-figo');
let overlay = document.querySelector(".overlay");
let times = document.querySelector('.toast__times');
let info = document.querySelector(".info-zoom");
const openModal = function () {
  info.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
/*create data structure*/
let legendList = [
  ['kaka','Kaka Ricardo',
  {
    fullname: "Kaka Ricardo Izecson Dos Santos Leite",
    name: "kaka",
    birth: "22/04/1982",
    general: "la nguoi gioi nhat",
    national: "brazil",
    general: 'A spectacular player with goalscoring ability, technical skills and elegance. He arrived in the 2009/10 season and along with Cristiano Ronaldo and Benzema he formed one of the most formidable attacks in world football.',
    appearance: 120,
    goal: 29,
    title: {
        laliga: 1,
        ChampionLeague: 1,
        SpanishSuper: 2,
        CopaDelRey: 2,
  
    }
  }],
  ['figo','LUIS FIGO',{
    fullname: "Luis Filipe Madeira Caeiro",
    name: "figo",
    birth: "04/11/1972",
    general: "Figo was peerless at dribbling and taking on opponents, and his perfect assists were a luxury for all of the forwards who played with him. He was a leader on the pitch who helped Real Madrid to win honours and further their legendary status. Along with Hierro, Raúl, Zidane and Ronaldo (enlazar fichas), among others, he was part of a true dream team.",
    national: "portugal",
    appearance: 163,
    goal: 38,
    title: {
        laliga: 2,
        ChampionLeague: 1,
        SpanishSuper: 2,
        Intercontinent: 1,
        EuropeanSuper: 1,
  }
  }],
  ['ronaldo','RONALDO DE LIMA',
  {
    fullname: "Ronaldo Luis Nazario De lima",
    name: "ronaldo",
    birth: "22/09/1976",
    national: "brazil",
    general: 'A goal-scoring phenomenon He was endowed with physical attributes and skill only available to those truly blessed..',
    appearance: 177,
    goal: 104,
    title: {
        Intercontinent: 1,
        laliga: 2,
        SpanishSuper: 1, 
  
    }
  }],['casillas','Iker Casillas',
  {
    fullname: "Iker Casillas Fernandez",
    name: "casillas",
    birth: "11/10/1937",
    national: "spain",
    general: 'A Madrid legend, Iker Casillas is the best goalkeeper in Real Madrid s history and in the history of Spanish football. He arrived at the club aged 9 and wore the Whites shirt for 25 years.',
    appearance: 725,
    goal: 0,
    title: {
       EuropeanCup: 3,
       Intercontinent: 2,
       EuropeanSuper: 1, 
       laliga: 5,
       CopaDelRey: 2,
       SpanishSuper: 3, 
       ClubWC: 3,
  
    }
  }],['carlos','ROBERTO CARLOS DA SILVA',
  {
    fullname: "Roberto Carlos Da Silva",
    name: "carlos",
    birth: "10/04/1973",
    national: "brazil",
    general: `His left foot was essential in Real Madrid’s conquest of more than ten titles. The Brazilian ace will always be remembered for his friendly nature, regularity, prodigious speed (he ran 100 metres in 10.9 seconds) and his tremendous power (his shots reached a speed of 140 km/h).
    `,
    appearance: 527,
    goal: 68,
    title: {
       EuropeanCup: 3,
       Intercontinent: 2,
       EuropeanSuper: 1, 
       laliga: 4,
       SpanishSuper: 3, 
  
    }
  }],['owen','MICHAEL OWEN',
  {
    fullname: "Michael Owen",
    name: "owen",
    birth: "16/11/1974",
    national: "england",
    general: `A hero and legend at Liverpool and in English football, Michael Owen arrived at Real Madrid in the summer of 2004. `,
    appearance: 45,
    goal: 16,
    title: {
        
    }
  }],['ozil','MESUT ÖZIL',
  {
    fullname: "MESUT ÖZIL",
    name: "ozil",
    birth: "26/02/1973",
    national: "germany",
    general: `From 2010 to 2013, Madrid fans were treated to the magic of one of the best midfielders in the world. `,
    appearance: 159,
    goal: 27,
    title: {
        CopaDelRey:1,
       laliga: 1,
       SpanishSuper: 1, 
        
  
    }
  }],['cronaldo','Cristiano Ronaldo',
  {
    fullname: "Cristiano Ronaldo",
    name: "cronaldo",
    birth: "26/02/1973",
    national: "portugal",
    general: `Cristiano Ronaldo is a part of Real Madrid's legacy and will forever be remember as one of the great icons throughout the club's history. He was unveiled at the Santiago Bernabéu on 6 July 2009, where he was joined by Eusebio and Alfredo Di Stéfano, and since that day, the goals just kept coming. `,
    appearance: 438,
    goal: 451,
    title: {
        laliga: 2,
        ChampionLeague: 3,
        SpanishSuper: 2,
        EuropeanCup: 3,
        ClubWC: 3,
        EuropeanCup: 4,
        CopaDelRey: 2,

        
  
    }
  }],['cesar','CÉSAR SÁNCHEZ DOMÍNGUEZ',
  {
    fullname: "Cesar Sanchez Dominguez",
    name: "cesar",
    birth: "02/09/1971",
    national: "spain",
    general: `César signed for Real Madrid in the summer of 2000 from Valladolid after impressing for several seasons as one of the best goalkeepers in the Primera División. In his first year with our team, he lifted the league title, but his most memorable moment would come in the following season. 
    `,
    appearance: 59,
    goal: 0,
    title: {
       EuropeanCup: 1,
       Intercontinent: 1, 
       UEFASuper: 1, 
       laliga: 2, 
       SpanishSuper: 2, 
        
        
  
    }
}],['beckham','David Beckham',
{
  fullname: "David Beckham",
  name: "beckham",
  birth: "02/05/1975",
  national: "england",
  general: 'Sir Alexander Chapman Ferguson CBE former football manager and player, widely known for managing Manchester United from 1986 to 2013. He is considered by many to be one of the greatest managers of all time and he has won more trophies than any other manager in the history of football. As a player, he is best known for his stint with Rangers.',
  appearance: 159,
  goal: 20,
  title: {
    laliga: 1,
    SpanishSuper: 1,

  }
}]
];

console.log(legendList);

/*=====================
sub-buton(click to show the large window
=======================================*/
let btnSet = document.querySelector('.sub-button');
for(let [legend,fullName,info] of legendList){
  let btn=document.createElement("DIV");
  btn.classList.add('btn');
  let img = document.createElement("IMG");
  img.setAttribute('src', `pic/btnImage/${legend}.png`);
  img.classList.add('btn-image');
  let name = document.createElement("DIV");
  name.classList.add('btn-name');
  name.textContent = `${fullName}`;
  btn.appendChild(img);
  btn.appendChild(name);
  btn.addEventListener("click", function () {
    openModal();
    upload_info(info);
  });
  btnSet.appendChild(btn);
}
const closeModal = function () {
  info.classList.add("hidden");
  overlay.classList.add("hidden");
  deletingtitle();
};

times.addEventListener('click',closeModal);
overlay.addEventListener("click", closeModal);

/*Convert tab between general and title*/
let general = document.querySelector(".general");
let title = document.querySelector(".title");
let iGeneral = document.querySelector(".info-general");
let iTitle = document.querySelector(".info-title");
general.addEventListener("click", function () {
  iTitle.classList.add("hidden");
  title.classList.remove("info-items--background");
  general.classList.add("info-items--background");
  iGeneral.classList.remove("hidden");
});
title.addEventListener("click", function () {
  iGeneral.classList.add("hidden");
  general.classList.remove("info-items--background");
  title.classList.add("info-items--background");
  iTitle.classList.remove("hidden");
});

/*function that make the legend infomation automatically*/
let upload_info = function ({
  fullname,
  name,
  birth,
  national,
  general,
  appearance,
  goal,
  title,
}) {
  /*image*/
  let image = document.querySelector(".image");
  image.setAttribute("src", `pic/LegendName/${name}.png`);
  /*name*/
  let LegendName = document.querySelector(".legend-name");
  LegendName.textContent = `${fullname}`;
  /*birth*/
  let legendBirth = document.querySelector(".legend-birth");
  legendBirth.textContent = `Birth: ${birth}`;
  /*nation*/
  let nation = document.querySelector(".nation-image");
  nation.setAttribute("src", `pic/Nationality/${national}.png`);
  document.querySelector('.nation-name').textContent = `${national}`
  /*general text*/
  document.querySelector('.general-text').textContent=
  `${general}`;
  document.querySelector('.appearance').textContent = `${appearance}`;
  document.querySelector('.goal').textContent = `${goal}`;
  /*title*/
  let infoTitle = document.querySelector('.info-title');
  for(let cup of Object.keys(title)){
    let wrap = document.createElement("P");
    wrap.classList.add('wrap');
    infoTitle.appendChild(wrap);     
      
      for(let i = 0; i< title[cup];i++){
        let temp = document.createElement("IMG");
        temp.classList.add('legendCup');
        temp.setAttribute('src',`pic/Cup/${cup}.png`);
        wrap.appendChild(temp);
      }
      
  }

}
/*DELETING ALL THE INFOMATION AUTOMATICALLY;*/
function  deletingtitle(){
 
  let dat = document.querySelectorAll('.wrap');
  for(let p of dat) p.classList.add('hidden');
}

