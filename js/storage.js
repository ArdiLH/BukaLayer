/* BukaLayer — penyimpanan LocalStorage (aman jika storage diblokir) */
const Store=(()=>{
  const K='bukalayer.v1';
  let s={log:{},reading:{},bm:[],theme:'light',scores:{}};
  try{Object.assign(s,JSON.parse(localStorage.getItem(K)||'{}'))}catch(e){}
  const save=()=>{try{localStorage.setItem(K,JSON.stringify(s))}catch(e){}};
  const dk=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  const today=()=>dk(new Date());
  const days=()=>Object.keys(s.log).filter(k=>s.log[k].length);
  return {
    dk,today,
    doneToday:id=>(s.log[today()]||[]).includes(id),
    doneEver:id=>Object.values(s.log).some(a=>a.includes(id)),
    complete(id){const t=today();s.log[t]=s.log[t]||[];if(!s.log[t].includes(id))s.log[t].push(id);delete s.reading[id];save()},
    isReading:id=>!!s.reading[id],
    setReading(id){if(!s.reading[id]){s.reading[id]=1;save()}},
    isBm:id=>s.bm.includes(id),
    toggleBm(id){const i=s.bm.indexOf(id);i<0?s.bm.push(id):s.bm.splice(i,1);save();return i<0},
    bms:()=>s.bm.slice(),
    uniqueDone:()=>[...new Set(Object.values(s.log).flat())],
    studyDays:()=>days().length,
    countOn:d=>(s.log[dk(d)]||[]).length,
    streak(){const d=new Date();if(!(s.log[dk(d)]||[]).length)d.setDate(d.getDate()-1);let n=0;while((s.log[dk(d)]||[]).length){n++;d.setDate(d.getDate()-1)}return n},
    setScore(id,v){s.scores[id]=Math.max(s.scores[id]||0,v);save()},
    score:id=>s.scores[id],
    theme:()=>s.theme,
    setTheme(t){s.theme=t;save()},
    reset(){const t=s.theme;s={log:{},reading:{},bm:[],theme:t,scores:{}};save()}
  };
})();
