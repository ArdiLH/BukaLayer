/* BukaLayer — kuis pilihan ganda */
const Quiz={s:null,
  start(id){const l=byId(id);if(!l)return Views.notfound();this.s={id:l.id,i:0,score:0,ans:null};
    return `<section class="qwrap"><a class="back" href="#/materi/${l.id}">← Kembali ke materi</a><div class="ph" style="text-align:left"><h1 style="font-size:28px">Quiz: ${l.title}</h1></div><div id="quizbox">${this.inner()}</div></section>`},
  restart(){this.s={id:this.s.id,i:0,score:0,ans:null}},
  answer(i){const s=this.s;if(s.ans!==null)return;s.ans=i;if(i===byId(s.id).quiz[s.i][2])s.score++},
  next(){const s=this.s,n=byId(s.id).quiz.length;s.i++;s.ans=null;if(s.i>=n)Store.setScore(s.id,s.score)},
  finished(){return this.s.i>=byId(this.s.id).quiz.length},
  perfect(){return this.finished()&&this.s.score===byId(this.s.id).quiz.length},
  inner(){
    const s=this.s,l=byId(s.id),q=l.quiz;if(s.i>=q.length)return this.result(l);
    const [t,o,a,e]=q[s.i],ans=s.ans!==null;
    return `<div class="qhead"><span>Soal ${s.i+1} dari ${q.length}</span><div class="bar"><i style="width:${s.i/q.length*100}%"></i></div></div><h2>${t}</h2>
    <div class="opts">${o.map((x,i)=>`<button class="opt ${ans?(i===a?'ok':i===s.ans?'bad':''):''}" data-action="answer" data-i="${i}" ${ans?'disabled':''}><b>${'ABCD'[i]}</b><span>${x}</span></button>`).join('')}</div>
    ${ans?`<div class="expl"><strong>${s.ans===a?'Benar! ✅':'Belum tepat ❌'}</strong><p>${e}</p><button class="btn" data-action="qnext">${s.i+1<q.length?'Soal berikutnya →':'Lihat skor'}</button></div>`:''}`;
  },
  result(l){
    const n=l.quiz.length,sc=this.s.score,m=sc===n?'Sempurna! 🎉':sc>=n/2?'Bagus! Sedikit lagi.':'Yuk baca ulang materinya.';
    const nx=LESSONS[(LESSONS.indexOf(l)+1)%LESSONS.length];
    return `<div class="score"><span>Skor akhir</span><strong>${sc}/${n}</strong><p>${m}</p></div><div class="actions" style="justify-content:center"><button class="btn" data-action="qretry">Ulangi quiz</button><a class="btn alt" href="#/materi/${l.id}">Kembali ke materi</a><a class="btn mag" href="#/materi/${nx.id}">Materi berikutnya</a></div>`;
  }};
Views.quiz=id=>Quiz.start(id);
