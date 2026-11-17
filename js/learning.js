/* BukaLayer — tampilan & logika belajar */
const $=(q,r=document)=>r.querySelector(q);
const byId=id=>LESSONS.find(l=>l.id===+id);
const catOf=l=>CATS.find(c=>c.id===l.cat);
const STAT={new:'Belum dibaca',reading:'Sedang dipelajari',done:'Selesai'};
const dayNum=()=>{const d=new Date();return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5)};
/* Daily 10: 1 materi dari tiap kategori, berotasi tiap hari, urutan ikut bergeser */
function dailyList(){const d=dayNum();const a=CATS.map(c=>{const it=LESSONS.filter(l=>l.cat===c.id);return it[d%it.length]});return a.map((_,i)=>a[(i+d)%a.length])}
const status=(id,daily)=>(daily?Store.doneToday(id):Store.doneEver(id))?'done':Store.isReading(id)?'reading':'new';

function card(l,n,daily){
  const c=catOf(l),s=status(l.id,daily),bm=Store.isBm(l.id);
  return `<article class="lcard" style="--c:${c.color}"><a class="lart" href="#/materi/${l.id}" aria-label="Buka materi ${l.title}"><span class="num">${n||''}</span><span class="emo" aria-hidden="true">${c.icon}</span></a>
  <div class="lbody"><div class="meta"><span class="chip">${c.name}</span><span>⏱ ${l.min} menit</span></div>
  <h3><a href="#/materi/${l.id}">${l.title}</a></h3><p>${l.summary}</p>
  <div class="lfoot"><span class="st st-${s}">${STAT[s]}</span><div><button class="ibtn ${bm?'on':''}" data-action="bookmark" data-id="${l.id}" aria-pressed="${bm}" aria-label="${bm?'Hapus dari bookmark':'Simpan ke bookmark'}">${bm?'★':'☆'}</button><a class="btn sm" href="#/materi/${l.id}">Read More</a></div></div></div></article>`;
}
const empty=(icon,t,p,link)=>`<div class="empty"><big aria-hidden="true">${icon}</big><h2>${t}</h2><p>${p}</p>${link?`<p style="margin-top:14px"><a class="btn" href="${link[0]}">${link[1]}</a></p>`:''}</div>`;
const mascot=()=>`<div class="mascot-wrap" aria-hidden="true"><svg class="mascot" viewBox="0 0 240 240"><circle cx="120" cy="125" r="92" fill="#fff" stroke="#111" stroke-width="5"/><circle cx="120" cy="125" r="64" fill="#ffe14d" stroke="#111" stroke-width="5"/><circle cx="120" cy="125" r="36" fill="#ff3df0" stroke="#111" stroke-width="5"/><circle cx="108" cy="119" r="6" fill="#111"/><circle cx="134" cy="119" r="6" fill="#111"/><path d="M106 136q14 13 28 0" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/><path d="M205 30l6 15 15 6-15 6-6 15-6-15-15-6 15-6z" fill="#2f6bff" stroke="#111" stroke-width="3"/></svg>
<span class="deco" style="left:2%;top:8%">🚀</span><span class="deco" style="right:4%;top:2%;animation-delay:-1s">⚛️</span><span class="deco" style="left:6%;bottom:8%;animation-delay:-2s">💡</span><span class="deco" style="right:2%;bottom:14%;animation-delay:-3s">🪐</span></div>`;

const Explore={q:'',cat:'',
  list(){const q=this.q.trim().toLowerCase();
    const r=LESSONS.filter(l=>(!this.cat||l.cat===this.cat)&&(!q||(l.title+' '+l.summary+' '+l.body.join(' ')+' '+catOf(l).name).toLowerCase().includes(q)));
    if(!r.length)return empty('🔍','Tidak ada materi yang cocok',q?`Tidak ada hasil untuk "${q.replace(/</g,'&lt;')}". Coba kata kunci lain atau pilih kategori berbeda.`:'Belum ada materi di kategori ini.');
    return `<p class="note" style="margin-bottom:12px">${r.length} materi ditemukan</p><div class="grid">${r.map(l=>card(l)).join('')}</div>`}};

const Views={
home(){
  const d=dailyList(),done=d.filter(l=>Store.doneToday(l.id)).length,next=d.find(l=>!Store.doneToday(l.id));
  return `<section class="hero" aria-labelledby="h1"><div class="hero-in"><div><span class="tag">⚡ Daily Knowledge Discovery</span>
  <h1 id="h1">Buka Satu <mark>Layer.</mark> Temukan <mark>Dunia Baru.</mark></h1>
  <p>10 hal baru setiap hari. Jelajahi sains, luar angkasa, sejarah, matematika, teknologi, dan berbagai pengetahuan menarik lainnya.</p>
  <div class="cta"><a class="btn" href="#/daily">Mulai Daily 10</a><a class="btn alt" href="#/surprise">🎲 Surprise Me!</a></div>
  <p class="en">Unlock a New Layer of Knowledge.</p></div>${mascot()}</div>
  <div class="hero-panels"><div class="panel"><h2>Daily 10 hari ini</h2><div class="dots">${d.map((l,i)=>`<a class="dot ${Store.doneToday(l.id)?'on':''}" href="#/materi/${l.id}" title="${l.title}" aria-label="Materi ${i+1}: ${l.title}${Store.doneToday(l.id)?' (selesai)':''}">${i+1}</a>`).join('')}</div></div>
  <div class="total"><span class="lbl">Progres hari ini</span><strong>${done}/10</strong><div class="bar" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="10"><i style="width:${done*10}%"></i></div>
  <a class="btn mag" href="${next?'#/materi/'+next.id:'#/progres'}">${done===0?'Mulai belajar':next?'Lanjut belajar':'Lihat progres'}</a></div></div></section>
  <section class="sec"><h2>Daily 10 pilihan hari ini</h2><p class="sub">Satu materi dari tiap kategori, berganti setiap hari.</p><div class="grid">${d.slice(0,6).map((l,i)=>card(l,i+1,true)).join('')}</div><p style="text-align:center;margin-top:24px"><a class="btn" href="#/daily">Lihat semua 10 materi</a></p></section>
  <section class="sec"><h2>Pilih kategori</h2><p class="sub">10 bidang ilmu untuk dijelajahi.</p><div class="cgrid">${CATS.map(c=>`<a class="ccard" style="--c:${c.color}" href="#/jelajah/${c.id}"><span class="emo" aria-hidden="true">${c.icon}</span><h3>${c.name}</h3><p>${c.desc}</p><small>${LESSONS.filter(l=>l.cat===c.id).length} materi</small></a>`).join('')}</div></section>
  <section class="sec"><h2>BukaLayer vs scroll biasa</h2><p class="sub">Cara belajar singkat yang lebih terarah.</p><div class="cmp">
  <div></div><div class="h us">BukaLayer</div><div class="h them">Scroll biasa</div>
  ${[['Materi terstruktur','✔ Ya','✕ Acak'],['10 topik beragam per hari','✔ Ya','✕ Tidak pasti'],['Kuis + penjelasan','✔ Ya','✕ Jarang'],['Progres & streak tercatat','✔ Ya','✕ Tidak ada'],['Simpan materi favorit','✔ Ya','✕ Sulit dicari']].map((r,i,a)=>`<div>${r[0]}</div><div class="us ${i===a.length-1?'last':''}">${r[1]}</div><div class="them">${r[2]}</div>`).join('')}</div></section>
  <section class="sec"><h2>Fakta hari ini</h2><p class="sub">Geser untuk melihat potongan fakta dari materi hari ini.</p><div class="carousel" tabindex="0" aria-label="Fakta hari ini">${d.map(l=>`<article class="rev" style="--c:${catOf(l).color}"><header>${catOf(l).icon} ${catOf(l).name}</header><h3>${l.title}</h3><p>${l.fact}</p><a href="#/materi/${l.id}">Baca materi →</a></article>`).join('')}</div></section>`;
},
daily(){
  const d=dailyList(),done=d.filter(l=>Store.doneToday(l.id)).length;
  return `<div class="ph"><h1>Daily <mark>10</mark></h1><p>${new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</p>
  <div class="prog"><div class="bar" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="10"><i style="width:${done*10}%"></i></div><b>${done}/10</b></div>${done===10?'<p style="margin-top:10px"><b>🎉 Semua materi hari ini selesai! Kembali lagi besok.</b></p>':''}</div>
  <div class="grid">${d.map((l,i)=>card(l,i+1,true)).join('')}</div>`;
},
materi(id){
  const l=byId(id);if(!l)return Views.notfound();
  const c=catOf(l),done=Store.doneToday(l.id),bm=Store.isBm(l.id),ever=Store.doneEver(l.id);
  if(!done)Store.setReading(l.id);
  const idx=LESSONS.indexOf(l),nx=LESSONS[(idx+1)%LESSONS.length],sc=Store.score(l.id);
  return `<a class="back" href="#/daily">← Kembali</a>
  <div class="dhero" style="--c:${c.color}"><div><span class="chip">${c.name}</span><h1>${l.title}</h1><p>⏱ ${l.min} menit baca · ${STAT[done?'done':'reading']}</p></div><div class="big" aria-hidden="true">${c.icon}</div></div>
  <article class="read"><p><b>${l.summary}</b></p>${l.body.map(p=>`<p>${p}</p>`).join('')}
  <div class="box fact"><h2>💡 Fakta menarik</h2><p>${l.fact}</p></div>
  <h2>Contoh dalam kehidupan sehari-hari</h2><p>${l.example}</p>
  <div class="box"><h2>➕ Informasi tambahan</h2><p>${l.extra}</p></div>
  <h2>Mini quiz</h2><p>Uji pemahamanmu dengan ${l.quiz.length} pertanyaan pilihan ganda.${sc!==undefined?` Skor terbaikmu: <b>${sc}/${l.quiz.length}</b>.`:''}</p>
  <div class="actions"><button class="btn mag" data-action="complete" data-id="${l.id}" ${done?'disabled':''}>${done?'✔ Selesai hari ini':'Mark as Completed'}</button><a class="btn" href="#/quiz/${l.id}">Kerjakan Quiz</a><button class="btn alt" data-action="bookmark" data-id="${l.id}" aria-pressed="${bm}">${bm?'★ Tersimpan':'☆ Bookmark'}</button></div>
  ${ever&&!done?'<p class="note">Kamu pernah menyelesaikan materi ini sebelumnya. Tandai lagi untuk menambah progres hari ini.</p>':''}
  <p><a href="#/materi/${nx.id}"><b>Materi berikutnya: ${nx.title} →</b></a></p></article>`;
},
jelajah(cat){
  Explore.cat=CATS.some(c=>c.id===cat)?cat:'';
  return `<div class="ph"><h1>Jelajah <mark>Kategori</mark></h1><p>Cari berdasarkan judul, kata kunci, atau pilih kategori.</p></div>
  <label class="sr" for="q" style="position:absolute;left:-999px">Cari materi</label><input id="q" class="search" type="search" placeholder="🔍 Cari materi, mis. 'otak' atau 'inflasi'" value="${Explore.q.replace(/"/g,'&quot;')}" autocomplete="off">
  <div class="cgrid">${CATS.map(c=>`<a class="ccard ${Explore.cat===c.id?'sel':''}" style="--c:${c.color}" href="#/jelajah/${c.id}" ${Explore.cat===c.id?'aria-current="true"':''}><span class="emo" aria-hidden="true">${c.icon}</span><h3>${c.name}</h3><p>${c.desc}</p><small>${LESSONS.filter(l=>l.cat===c.id).length} materi</small></a>`).join('')}</div>
  <div class="rowhead"><h2>${Explore.cat?CATS.find(c=>c.id===Explore.cat).name:'Semua materi'}</h2>${Explore.cat?'<a class="btn sm alt" href="#/jelajah">Tampilkan semua</a>':''}</div><div id="elist">${Explore.list()}</div>`;
},
surprise(){return `<div class="surp"><div class="ph"><h1>Random <mark>Discovery</mark></h1><p>Biarkan BukaLayer memilihkan satu materi acak dari semua kategori.</p></div><div class="dice" id="dice" aria-hidden="true">🎲</div><br><button class="btn mag" data-action="surprise">Surprise Me!</button><div id="sres" aria-live="polite"></div></div>`},
bookmark(){
  const l=Store.bms().map(byId).filter(Boolean);
  return `<div class="ph"><h1><mark>Bookmark</mark></h1><p>${l.length} materi tersimpan</p></div>${l.length?`<div class="grid">${l.map(x=>card(x)).join('')}</div>`:empty('☆','Belum ada bookmark','Tekan ikon bintang pada materi untuk menyimpannya di sini.',['#/daily','Lihat Daily 10'])}`;
},
progres(){
  const u=Store.uniqueDone(),d=dailyList(),dn=d.filter(l=>Store.doneToday(l.id)).length;
  const cnt=CATS.map(c=>({c,n:u.filter(id=>byId(id)&&byId(id).cat===c.id).length})).sort((a,b)=>b.n-a.n);
  const days=[...Array(7)].map((_,i)=>{const x=new Date();x.setDate(x.getDate()-(6-i));return {x,n:Store.countOn(x)}});
  return `<div class="ph"><h1>Learning <mark>Progress</mark></h1><p>Statistik ini dihitung dari data di browser kamu.</p></div>
  <div class="stats"><div class="stat" style="--c:#c6ff3d"><span>Materi diselesaikan</span><strong>${u.length}/${LESSONS.length}</strong></div><div class="stat" style="--c:#ffe14d"><span>Total hari belajar</span><strong>${Store.studyDays()}</strong></div><div class="stat" style="--c:#ff3df0"><span>Daily hari ini</span><strong>${dn}/10</strong></div><div class="stat" style="--c:#5cc8ff"><span>Learning streak 🔥</span><strong>${Store.streak()} hari</strong></div></div>
  <div class="panelbox"><h2>Selesai 7 hari terakhir</h2><div class="cols">${days.map(o=>`<div class="col"><span>${o.n}</span><i style="height:${Math.min(o.n,10)*10}%"></i><span>${o.x.toLocaleDateString('id-ID',{weekday:'short'})}</span></div>`).join('')}</div></div>
  <div class="panelbox"><h2>Kategori yang paling sering dipelajari</h2>${u.length?cnt.map(o=>`<div class="hrow" style="--c:${o.c.color}"><span>${o.c.icon} ${o.c.name.split(' & ')[0]}</span><div class="bar"><i style="width:${o.n/3*100}%"></i></div><span>${o.n}</span></div>`).join(''):empty('📈','Belum ada data','Selesaikan satu materi untuk mulai melihat statistikmu.',['#/daily','Mulai Daily 10'])}</div>`;
},
settings(){
  const t=Store.theme();
  return `<div class="ph"><h1><mark>Settings</mark></h1></div><div class="panelbox" style="max-width:640px;margin:0 auto"><div class="srow"><div><b>Tema tampilan</b><p class="note">Pilih mode terang atau gelap.</p></div><div class="seg"><button class="btn sm ${t==='light'?'on':''}" data-action="set-theme" data-v="light">☀️ Terang</button><button class="btn sm ${t==='dark'?'on':''}" data-action="set-theme" data-v="dark">🌙 Gelap</button></div></div>
  <div class="srow"><div><b>Reset data</b><p class="note">Hapus progres, bookmark, streak, dan skor kuis.</p></div><button class="btn sm" style="background:#ff6b4a" data-action="reset">Reset semua</button></div>
  <div class="srow"><div><b>Tentang</b><p class="note">BukaLayer menyimpan semua data hanya di browser ini (LocalStorage). Tidak ada akun, database online, atau AI di versi ini.</p></div></div></div>`;
},
notfound(){return empty('🧭','Halaman tidak ditemukan','Materi atau halaman yang kamu cari tidak ada.',['#/home','Kembali ke Home'])}
};
