/* BukaLayer — router berbasis hash (aman untuk GitHub Pages) */
const Nav={
  parse(){const h=location.hash.replace(/^#\/?/,'')||'home';const [name,...args]=h.split('/');return {name,args}},
  render(keep){
    const y=window.scrollY,{name,args}=this.parse(),view=$('#view');
    const fn=Object.prototype.hasOwnProperty.call(Views,name)?Views[name]:Views.notfound;
    view.classList.remove('in');view.innerHTML=fn(...args);void view.offsetWidth;view.classList.add('in');
    window.scrollTo(0,keep?y:0);
    const group={materi:'daily',quiz:'daily'}[name]||name;
    document.querySelectorAll('[data-route]').forEach(a=>{const on=a.dataset.route===group;a.classList.toggle('active',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
    document.title=(name==='materi'&&byId(args[0])?byId(args[0]).title+' — ':'')+'BukaLayer';
    if(!keep)view.focus({preventScroll:true});
  },
  init(){addEventListener('hashchange',()=>this.render());this.render()}
};
