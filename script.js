function tab(name, el){
  document.querySelectorAll('.side .item').forEach(i=>i.classList.remove('active'));
  if(el) el.classList.add('active');
  const m=document.getElementById('main');
  if(name==='recents'){
    m.innerHTML=`<h2 style="color:#fff">Recents</h2><p style="color:rgba(255,255,255,.4);font-size:12px">Recently opened</p><div class="card2"><p>📁 Projects<br>📄 About Me — just now</p></div>`;
  }else if(name==='projects'){
    m.innerHTML=`<h2 style="color:#fff">Projects</h2><div class="grid" style="margin-top:14px"><div class="card"><div class="box">🚀</div><h4>Miniblink Browser</h4><p>On Progress</p></div><div class="card"><div class="box">🖥️</div><h4>Mac Dock Setting</h4><p>Done</p></div><div class="card"><div class="box">🌸</div><h4>Portfolio Finder</h4><p>Live</p></div><div class="card"><div class="box">📚</div><h4>Study Log</h4><p>Ongoing</p></div></div>`;
  }else if(name==='about'){
    m.innerHTML=`<h2 style="color:#fff">About Me</h2><div class="card2"><h3>Yunia Rahmawati</h3><p>Dari Pangkalpinang, Babel.<br>Suka bikin web estetik ala MacOS Finder.</p></div>`;
  }else if(name==='resume'){
    m.innerHTML=`<h2 style="color:#fff">Resume</h2><div class="card2"><h3>Skills</h3><p>HTML, CSS, JS, GitHub Pages, UI Design</p></div>`;
  }else if(name==='contact'){
    m.innerHTML=`<h2 style="color:#fff">Contact</h2><div class="card2"><p>📧 yunia@example.com<br>📍 Pangkalpinang</p></div>`;
  }
}
tab('projects', document.querySelector('.side .item:nth-child(2)'));
