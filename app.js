'use strict';
let form = document.getElementById('form');
let article = document.getElementById('article');
let articlesArray=[];


function Articles(name,title,content,day,month,year,subject){
  this.name=name;
  this.title=title;
  this.content=content;
  this.day=day;
  this.month=month;
  this.year=year;
  this.subject=subject;
  this.id=ranodmid();
  function ranodmid(){
    return Math.floor(Math.random() * (500 - 1) + 1);
  }
  articlesArray.push(this);
}
Articles.prototype.liFunction=function(){
  let ul =document.createElement('ul');
  ul.id='ul';
  article.appendChild(ul);
  let lititle= document.createElement('li');
  lititle.innerText=this.title;
  ul.appendChild(lititle);
  let liPic= document.createElement('li');
  liPic.innerHTML='<img src="./asac_ltuc.jpg" alt="">';
  ul.appendChild(liPic);
  let liName= document.createElement('li');
  liName.innerText='Author: '+this.name;
  ul.appendChild(liName);
  let liDate= document.createElement('li');
  liDate.innerText='Date: '+this.day+'-'+this.month+'-'+this.year;
  ul.appendChild(liDate);
  let liRandomSubject= document.createElement('li');
  liRandomSubject.id='liRandomSubject';
  liRandomSubject.innerHTML='<h2>'+this.id+'</h2>'+'<h2>'+this.subject+'</h2>';
  ul.appendChild(liRandomSubject);
  let liContent= document.createElement('li');
  liContent.innerText=this.content;
  ul.appendChild(liContent);

};

if(JSON.parse(localStorage.getItem('dataStorage'))){
  let data = JSON.parse(localStorage.getItem('dataStorage'));
  for(let i=0 ;i<data.length;i++){
    new Articles(data[i].name,data[i].title,data[i].content,data[i].day,data[i].month,data[i].year,data[i].subject);
    ulFunction();
  }
}


form.addEventListener('submit',newArticles);

function newArticles(event){
  event.preventDefault();
  new Articles(event.target.name.value,event.target.title.value,event.target.content.value,event.target.day.value,event.target.month.value,event.target.year.value,event.target.subject.value);
  localStorage.setItem('dataStorage',JSON.stringify(articlesArray));
  ulFunction();
}

function ulFunction(){
  article.innerText='';

  for(let i=0;i<articlesArray.length;i++){
    articlesArray[i].liFunction();

  }
}
