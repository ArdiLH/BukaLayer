/* BukaLayer — inisialisasi & event */
function applyTheme(t){document.documentElement.dataset.theme=t;Store.setTheme(t);const b=$('#themeBtn');if(b)b.textContent=t==='dark'?'☀️':'🌙'}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2200)}
function confetti(){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const c=['#c6ff3d','#ff3df0','#ffe14d','#2f6bff','#ff6b4a'],b=document.createElement('div');b.className='confetti';
  for(let i=0;i<40;i++){const p=document.createElement('i');p.style.cssText=`left:${Math.random()*100}%;background:${c[i%5]};animation-delay:${Math.random()*.3}s;--x:${(Math.random()-.5)*220}px`;b.appendChild(p)}
  document.body.appendChild(b);setTimeout(()=>b.remove(),2000)}
function refreshQuiz(){const b=$('#quizbox');if(!b)return;b.innerHTML=Quiz.inner();if(Quiz.perfect())confetti()}
let lastSurprise=0;
function surprise(){
  const d=$('#dice'),r=$('#sres');d.classList.remove('roll');void d.offsetWidth;d.classList.add('roll');r.innerHTML='';
  setTimeout(()=>{let l;do{l=LESSONS[Math.floor(Math.random()*LESSONS.length)]}while(l.id===lastSurprise&&LESSONS.length>1);lastSurprise=l.id;r.innerHTML=card(l)},600)}
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-action]');if(!t)return;const a=t.dataset.action,id=+t.dataset.id;
  switch(a){
    case 'bookmark':{const on=Store.toggleBm(id);toast(on?'Disimpan ke Bookmark ★':'Dihapus dari Bookmark');Nav.render(true);break}
    case 'complete':Store.complete(id);confetti();toast('Keren! Materi selesai 🎉');Nav.render(true);break;
    case 'theme':applyTheme(Store.theme()==='dark'?'light':'dark');break;
    case 'set-theme':applyTheme(t.dataset.v);Nav.render(true);break;
    case 'answer':Quiz.answer(+t.dataset.i);refreshQuiz();break;
    case 'qnext':Quiz.next();refreshQuiz();break;
    case 'qretry':Quiz.restart();refreshQuiz();break;
    case 'surprise':surprise();break;
    case 'reset':if(confirm('Hapus semua progres, bookmark, dan skor? Tindakan ini tidak bisa dibatalkan.')){Store.reset();toast('Data berhasil direset');Nav.render(true)}break;
  }
});
document.addEventListener('input',e=>{if(e.target.id==='q'){Explore.q=e.target.value;$('#elist').innerHTML=Explore.list()}});
applyTheme(Store.theme());
Nav.init();
