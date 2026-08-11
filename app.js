(function () {
  'use strict';
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  var term = $('term'), body = $('termBody'), input = $('termIn'), hist = null;
  var C = { p: '#302d27', e: '#c0392b', g: '#3f7d4e', d: '#6b675d' };

  function welcome() {
    return [
      { c: 'd', s: 'sean-kim05 — portfolio shell' },
      { c: 'd', s: 'type `help` to look around.' },
      { c: 'd', s: '' }
    ];
  }
  function render() {
    if (!body) return;
    var h = hist || [], out = '';
    for (var i = 0; i < h.length; i++) {
      var l = h[i], col = C[l.c] || C.d, w = l.c === 'p' ? '500' : '400';
      out += '<div style="color:' + col + ';white-space:pre-wrap;font-weight:' + w + '">' + (l.s === '' ? '&nbsp;' : esc(l.s)) + '</div>';
    }
    body.innerHTML = out;
    body.scrollTop = body.scrollHeight;
  }
  function open() {
    if (!term) return;
    if (!hist) hist = welcome();
    term.hidden = false; render();
    setTimeout(function () { if (input) input.focus(); }, 60);
  }
  function close() { if (term) term.hidden = true; }
  function toggle() { if (term && term.hidden) open(); else close(); }

  var PAGES = { home: 'index.html', '~': 'index.html', experience: 'experience.html', work: 'experience.html', projects: 'projects.html' };

  function run(raw) {
    var h = (hist || welcome()).slice();
    h.push({ c: 'p', s: 'sean@portfolio:~$ ' + raw });
    var cmd = raw.toLowerCase().trim();
    function push(lines, c) { lines.forEach(function (s) { h.push({ c: c || 'd', s: s }); }); }

    if (cmd === '') { /* noop */ }
    else if (cmd === 'help') {
      push([
        'available commands:',
        '  whoami      who is this guy',
        '  projects    what he\'s built',
        '  experience  where he\'s worked',
        '  skills      the stack',
        '  cd <page>   home · experience · projects',
        '  resume      download the pdf',
        '  contact     get in touch',
        '  github      open the profile',
        '  date        local time in irvine',
        '  ls          look around',
        '  clear       wipe the screen',
        '  exit        close terminal'
      ]);
    }
    else if (cmd === 'whoami') {
      push([
        'Sean Kim — software engineer. systems & interfaces.',
        'CS @ UC Irvine, class of June 2027.',
        'Real-time infrastructure · production apps · AI in the product.'
      ]);
    }
    else if (cmd === 'projects') {
      push([
        '01  collabcode   real-time collaborative editor — 17ms p95, 50 clients/room',
        '02  ada          personal agent OS — plan · act · observe',
        '03  docent       agentic research assistant — cited, multi-source',
        '04  briefly      AI standups at the edge — workers + llama 3.3',
        '',
        'full write-ups → `cd projects`'
      ]);
    }
    else if (cmd === 'experience') {
      push([
        'miadvg      software engineer intern      jun–sep 2025',
        'calit2      software developer intern     jan–may 2025',
        'uc irvine   undergraduate researcher      jan–jun 2024',
        '',
        'details → `cd experience`'
      ]);
    }
    else if (cmd === 'skills') {
      push([
        'languages    python · typescript · javascript · java · c++ · sql',
        'frameworks   react · next.js · node/express · flask · fastapi · tailwind',
        'data         postgresql · mysql · redis · pinecone · qdrant',
        'infra/ai     aws ec2 · cloudflare workers · docker · rabbitmq · rag · claude · pytorch'
      ]);
    }
    else if (cmd.indexOf('cd ') === 0 || cmd === 'cd') {
      var t = cmd.slice(2).trim().replace(/^\.?\//, '').replace(/\/$/, '') || 'home';
      if (PAGES[t]) { push(['→ ' + t], 'g'); render(); window.location.href = PAGES[t]; return; }
      push(['cd: no such page: ' + t], 'e');
      push(['pages: home · experience · projects']);
    }
    else if (cmd === 'resume') {
      push(['fetching Sean_Kim_Resume.pdf … done ✓'], 'g');
      var a = document.createElement('a');
      a.href = 'assets/Sean_Kim_Resume.pdf';
      a.download = 'Sean_Kim_Resume.pdf';
      document.body.appendChild(a); a.click(); a.remove();
    }
    else if (cmd === 'contact') {
      push([
        'email     skim8705@gmail.com',
        'github    github.com/sean-kim05',
        'linkedin  linkedin.com/in/seankim08'
      ]);
    }
    else if (cmd === 'github') {
      push(['opening github.com/sean-kim05 ↗'], 'g');
      window.open('https://github.com/sean-kim05', '_blank');
    }
    else if (cmd === 'ls') {
      push(['index.html   experience.html   projects.html   assets/Sean_Kim_Resume.pdf']);
    }
    else if (cmd === 'date') {
      push([new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) + ' (Irvine, PT)']);
    }
    else if (cmd === 'sudo hire sean' || cmd === 'hire sean') {
      push(['[sudo] password for recruiter: ********']);
      push(['access granted ✓ — skim8705@gmail.com is expecting you'], 'g');
    }
    else if (cmd === 'clear') { hist = []; render(); return; }
    else if (cmd === 'exit') { close(); return; }
    else {
      push(['zsh: command not found: ' + cmd], 'e');
      push(['try `help`']);
    }
    hist = h; render();
  }

  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { var v = e.target.value; e.target.value = ''; run(v.trim()); }
      else if (e.key === 'Escape') { close(); }
    });
  }
  if (term) term.addEventListener('click', function () { if (input) input.focus(); });
  var tc = $('termClose');
  if (tc) tc.addEventListener('click', function (e) { e.stopPropagation(); close(); });
  var cta = $('termCta');
  if (cta) cta.addEventListener('click', toggle);

  window.addEventListener('keydown', function (e) {
    var t = e.target;
    var typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); toggle(); return; }
    if (e.key === 'Escape' && term && !term.hidden) { close(); return; }
    if (typing) return;
    if (e.key === '`') { e.preventDefault(); open(); }
  });
})();
