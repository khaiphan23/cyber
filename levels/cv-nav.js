/* CYBERVERSE shared nav: floating "all levels" pill + level switcher. Self-contained, prefixed, touches no game state. */
(function(){
  var m=location.pathname.match(/level(\d)/),cur=m?+m[1]:0;
  var css=document.createElement('style');
  css.textContent='#cvx-nav{position:fixed;left:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:2147483000;display:flex;gap:6px;align-items:center;font:600 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em}'+
  '#cvx-nav a{color:#e8e8e8;background:rgba(14,14,14,.92);border:1px solid #2a2a2a;padding:8px 10px;border-radius:8px;text-decoration:none;backdrop-filter:blur(8px);transition:border-color .2s,color .2s}'+
  '#cvx-nav a:hover,#cvx-nav a:focus-visible{border-color:#3FD6C6;color:#3FD6C6;outline:none}'+
  '#cvx-nav a.cvx-cur{color:#3FD6C6;border-color:#3FD6C6}'+
  '@media(max-width:600px){#cvx-nav a.cvx-n{display:none}#cvx-nav{left:8px;bottom:calc(8px + env(safe-area-inset-bottom,0px))}}';
  document.head.appendChild(css);
  var d=document.createElement('nav');d.id='cvx-nav';d.setAttribute('aria-label','CYBERVERSE navigation');
  var h='<a href="/">← ALL LEVELS</a>';
  for(var i=1;i<=5;i++)h+='<a class="cvx-n'+(i===cur?' cvx-cur':'')+'" href="/levels/level'+i+'.html" aria-label="Level '+i+'">'+i+'</a>';
  d.innerHTML=h;document.body.appendChild(d);
})();
