function tab(name, el){
  document.querySelectorAll('.side .item').forEach(i=>i.classList.remove('active'));
  if(el) el.classList.add('active');
  const m=document.getElementById('main');
  if(name==='projects' || name==='recents'){
    m.innerHTML=`<h2 style="color:#fff">Projects</h2><p style="color:rgba(255,255,255,.4);font-size:12px;margin-top:2px">4 items • Creative Development Portfolio</p><div class="grid" style="margin-top:16px">
    <div class="card"><div class="box">🚀</div><h4>Miniblink Browser</h4><p>On Progress</p></div>
    <div class="card"><div class="box">🖥️</div><h4>Mac Dock Setup</h4><p>Selesai</p></div>
    <div class="card"><div class="box">🌸</div><h4>Portfolio Finder</h4><p>Live</p></div>
    <div class="card"><div class="box">📚</div><h4>Log Belajar</h4><p>Ongoing</p></div></div>`;
  }else if(name==='about'){
    m.innerHTML=`<h2 style="color:#fff">About Me</h2><div class="card2"><h3>Yunia Rahmawati</h3><p>Calon Software Engineer dari Pangkalpinang, Bangka Belitung.<br><br>Suka bikin web estetik ala MacOS, belajar HTML/CSS/JS.<br><br><b>Hobi:</b> Ngoding, Desain.</p></div>`;
  }else if(name==='resume'){
    m.innerHTML=`<h2 style="color:#fff">Resume</h2><div class="card2"><h3>Skills</h3><p>HTML, CSS, JavaScript, GitHub Pages<br><br><b>Projects:</b><br>- Portfolio Finder<br>- Dock Mac<br>- Miniblink Browser</p></div>`;
  }else if(name==='contact'){
    m.innerHTML=`<h2 style="color:#fff">Contact</h2><div class="card2"><h3>Hubungi Aku</h3><p>📧 yunia@example.com<br>💻 GitHub: floryniayun<br>📍 Pangkalpinang, Babel</p></div>`;
  }
}
tab('recents', document.querySelector('.side .item'));
