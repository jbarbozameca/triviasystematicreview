/* ============================================================
   Trivia RS/MA — lógica de la aplicación
   ============================================================ */
(function(){
  "use strict";
  const { SECTIONS, QUESTIONS, SCREENING } = window.TRIVIA_DATA;
  const LETTERS = ["A","B","C","D","E","F"];
  const $ = (s,root)=> (root||document).querySelector(s);
  const el = (tag,cls,html)=>{ const e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; };
  const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
  const LV = {basico:"Básico",intermedio:"Intermedio",avanzado:"Avanzado"};

  // ---- estado ----
  let selSections = new Set(SECTIONS.map(s=>s.id)); // por defecto todas
  let selLevels   = new Set(["basico","intermedio","avanzado"]);
  let numQ = 12;
  let quiz = [];      // preguntas de la ronda
  let qi = 0;         // índice
  let answers = [];   // respuesta elegida por pregunta (índice o null)
  let perSection = {}; // {secId:{ok,total}}

  // ---- vistas ----
  const views = {
    home:    $("#view-home"),
    quiz:    $("#view-quiz"),
    score:   $("#view-score"),
    scnList: $("#view-screening-list"),
    scn:     $("#view-screening")
  };
  function show(name){
    Object.values(views).forEach(v=>v.classList.add("hidden"));
    views[name].classList.remove("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
  }

  /* ===================== HOME ===================== */
  function renderHome(){
    // secciones
    const grid = $("#sec-grid"); grid.innerHTML="";
    SECTIONS.forEach(s=>{
      const count = QUESTIONS.filter(q=>q.sec===s.id).length;
      const b = el("button","sec-btn"+(selSections.has(s.id)?" on":""));
      b.innerHTML = `<span class="ic">${s.icon}</span><span><span class="nm">${s.name}</span><span class="ct">${count} preguntas</span></span>`;
      b.onclick=()=>{ selSections.has(s.id)?selSections.delete(s.id):selSections.add(s.id); b.classList.toggle("on"); updateAvail(); };
      grid.appendChild(b);
    });
    // niveles
    $$(".lvl-chip").forEach(c=>{
      c.classList.toggle("on", selLevels.has(c.dataset.lvl));
      c.onclick=()=>{ const l=c.dataset.lvl; selLevels.has(l)?selLevels.delete(l):selLevels.add(l); c.classList.toggle("on"); updateAvail(); };
    });
    // cantidad
    $$(".num-chip").forEach(c=>{
      c.classList.toggle("on", +c.dataset.n===numQ);
      c.onclick=()=>{ numQ=+c.dataset.n; $$(".num-chip").forEach(x=>x.classList.toggle("on",x===c)); updateAvail(); };
    });
    updateAvail();
  }
  function $$(s){return Array.prototype.slice.call(document.querySelectorAll(s));}
  function pool(){
    return QUESTIONS.filter(q=>selSections.has(q.sec)&&selLevels.has(q.lvl));
  }
  function updateAvail(){
    const n = pool().length;
    $("#avail").textContent = n;
    const start = $("#btn-start");
    start.disabled = n===0 || selSections.size===0 || selLevels.size===0;
    $("#start-note").textContent = n===0
      ? "No hay preguntas con esa combinación. Activa más secciones o niveles."
      : `Se elegirán ${Math.min(numQ,n)} preguntas al azar de ${n} disponibles.`;
  }

  /* ===================== QUIZ ===================== */
  function startQuiz(){
    const p = shuffle(pool());
    quiz = p.slice(0, Math.min(numQ, p.length)).map(q=>{
      // barajar opciones manteniendo el mapeo correcto
      const order = shuffle(q.opts.map((_,i)=>i));
      return {
        base:q,
        opts: order.map(i=>q.opts[i]),
        fb:   order.map(i=>q.fb[i]),
        correct: order.indexOf(q.correct)
      };
    });
    qi=0; answers = new Array(quiz.length).fill(null);
    show("quiz"); renderQ();
  }
  function renderQ(){
    const item = quiz[qi];
    const q = item.base;
    const sec = SECTIONS.find(s=>s.id===q.sec);
    $("#progress-bar").style.width = (qi/quiz.length*100)+"%";
    const meta = $("#q-meta");
    meta.innerHTML =
      `<span class="tag count">Pregunta ${qi+1} / ${quiz.length}</span>`+
      `<span class="tag sec">${sec.icon} ${sec.name}</span>`+
      `<span class="tag ${q.lvl}">${LV[q.lvl]}</span>`;
    $("#q-text").textContent = q.q;

    const wrap = $("#q-opts"); wrap.innerHTML="";
    const answered = answers[qi]!==null;
    item.opts.forEach((txt,i)=>{
      const o = el("div","opt");
      o.innerHTML = `<span class="key">${LETTERS[i]}</span><span>${txt}</span>`;
      if(answered){
        o.classList.add("disabled");
        if(i===item.correct) o.classList.add("correct");
        else if(i===answers[qi]) o.classList.add("wrong");
        else o.classList.add("dim");
      } else {
        o.onclick=()=>choose(i);
      }
      wrap.appendChild(o);
    });

    const fb = $("#q-fb");
    if(answered){ showFeedback(); } else { fb.className="fb"; fb.innerHTML=""; }
    // nav
    $("#btn-prev").disabled = qi===0;
    const last = qi===quiz.length-1;
    $("#btn-next").textContent = last ? "Ver resultados ▸" : "Siguiente ▸";
    $("#btn-next").disabled = !answered;
  }
  function choose(i){
    if(answers[qi]!==null) return;
    answers[qi]=i;
    renderQ();
  }
  function showFeedback(){
    const item=quiz[qi], q=item.base, chosen=answers[qi], ok=chosen===item.correct;
    const fb=$("#q-fb");
    fb.className="fb show "+(ok?"good":"bad");
    let html = `<h4>${ok?"✅ ¡Correcto!":"❌ Incorrecto"}</h4>`;
    if(!ok){
      html += `<div><b>Tu respuesta (${LETTERS[chosen]}):</b> ${item.fb[chosen]}</div>`;
      html += `<div style="margin-top:8px"><b>Respuesta correcta (${LETTERS[item.correct]}):</b> ${item.fb[item.correct]}</div>`;
    } else {
      html += `<div>${item.fb[item.correct]}</div>`;
    }
    if(q.why) html += `<div class="why"><b>💡 Para aprender:</b> ${q.why}</div>`;
    if(q.src) html += `<div class="src">Referencia: ${q.src}</div>`;
    fb.innerHTML=html;
    $("#btn-next").disabled=false;
  }
  function nav(d){
    if(d>0 && qi===quiz.length-1){ finish(); return; }
    qi=Math.min(Math.max(qi+d,0),quiz.length-1); renderQ();
  }

  /* ===================== SCORE ===================== */
  function finish(){
    perSection={};
    let ok=0;
    quiz.forEach((item,idx)=>{
      const sid=item.base.sec;
      perSection[sid]=perSection[sid]||{ok:0,total:0};
      perSection[sid].total++;
      if(answers[idx]===item.correct){ ok++; perSection[sid].ok++; }
    });
    const total=quiz.length, pct=Math.round(ok/total*100);
    $("#score-big").textContent=`${ok}/${total}`;
    let msg;
    if(pct>=90) msg="¡Excelente! Dominio sólido de la metodología.";
    else if(pct>=70) msg="Muy bien. Repasa los puntos fallados para afinar.";
    else if(pct>=50) msg="Vas por buen camino; refuerza las secciones más débiles.";
    else msg="Sigue practicando: revisa los fundamentos de cada respuesta.";
    $("#score-sub").textContent=`${pct}% de aciertos — ${msg}`;

    const bars=$("#score-bars"); bars.innerHTML="<h3 style='font-size:1rem;margin:.2em 0 .6em'>Desempeño por sección</h3>";
    Object.keys(perSection).forEach(sid=>{
      const sec=SECTIONS.find(s=>s.id===sid), d=perSection[sid], p=Math.round(d.ok/d.total*100);
      const line=el("div","barline");
      line.innerHTML=`<span class="lbl">${sec.icon} ${sec.name}</span><span class="tr"><i style="width:${p}%"></i></span><span class="pc">${d.ok}/${d.total}</span>`;
      bars.appendChild(line);
    });
    show("score");
  }

  /* ===================== SCREENING (cribado TIAB) ===================== */
  let curScn=null, critChecked=[], critRevealed=false;
  function renderScnList(){
    const list=$("#scn-list"); list.innerHTML="";
    SCREENING.forEach(s=>{
      const c=el("div","scn-card");
      c.innerHTML=`<h3>${s.title}</h3><div class="based">${s.based}</div><p style="margin:.5em 0 0;font-size:.9rem;color:#33424f">${s.objective}</p>`;
      c.onclick=()=>openScn(s.id);
      list.appendChild(c);
    });
  }
  function openScn(id){
    curScn=SCREENING.find(s=>s.id===id);
    critChecked=new Array(curScn.criteria.options.length).fill(false);
    critRevealed=false;
    const v=$("#view-screening");
    let html=`<div class="card">
      <button class="btn ghost sm" id="scn-back">‹ Volver a escenarios</button>
      <h2 style="margin-top:14px">${curScn.title}</h2>
      <p class="muted">${curScn.based}</p>
      <p class="lead">${curScn.objective}</p>
      <div class="picos">`;
    const labels={P:"Población",E:"Exposición",I:"Intervención",C:"Comparador",O:"Desenlace",S:"Diseño"};
    Object.keys(curScn.picos).forEach(k=>{
      html+=`<div class="p"><b>${labels[k]||k}</b>${curScn.picos[k]}</div>`;
    });
    html+=`</div></div>

    <div class="card">
      <h2>Paso 1 · Define los criterios de elegibilidad</h2>
      <p class="lead">${curScn.criteria.prompt}</p>
      <div class="crit" id="crit-list"></div>
      <button class="btn accent" id="crit-check">Comprobar mis criterios</button>
      <div id="crit-result" style="margin-top:14px"></div>
      <div id="crit-next" class="hidden" style="margin-top:14px">
        <button class="btn" id="go-screen">Continuar al cribado de artículos ▸</button>
      </div>
    </div>

    <div class="card hidden" id="screen-step">
      <h2>Paso 2 · Criba los artículos (formato TIAB)</h2>
      <p class="lead">Lee el <b>título y resumen</b> de cada artículo y decide si lo INCLUIRÍAS o lo EXCLUIRÍAS según los criterios. Recibirás feedback inmediato.</p>
      <div id="tiab-list"></div>
      <div id="screen-summary" class="hidden" style="margin-top:10px"></div>
    </div>`;
    v.innerHTML=html;
    show("scn");

    $("#scn-back").onclick=()=>{show("scnList");};
    // criterios
    const cl=$("#crit-list");
    curScn.criteria.options.forEach((o,i)=>{
      const lab=el("label");
      lab.innerHTML=`<input type="checkbox" data-i="${i}"><span><span>${o.text}</span><span class="cfb hidden"></span></span>`;
      lab.querySelector("input").onchange=e=>{ critChecked[i]=e.target.checked; };
      cl.appendChild(lab);
    });
    $("#crit-check").onclick=checkCriteria;
    $("#go-screen").onclick=()=>{ $("#screen-step").classList.remove("hidden"); renderTiab(); $("#screen-step").scrollIntoView({behavior:"smooth"}); };
  }
  function checkCriteria(){
    critRevealed=true;
    let correct=0;
    const opts=curScn.criteria.options;
    $$("#crit-list label").forEach((lab,i)=>{
      const o=opts[i], chosen=critChecked[i], shouldInclude=o.include;
      lab.classList.remove("ok","err");
      const cfb=lab.querySelector(".cfb");
      cfb.classList.remove("hidden");
      cfb.innerHTML=o.fb;
      const right = chosen===shouldInclude;
      lab.classList.add(right?"ok":"err");
      if(right) correct++;
    });
    const total=opts.length, pct=Math.round(correct/total*100);
    const res=$("#crit-result");
    res.className="fb show "+(pct>=70?"good":"bad");
    res.innerHTML=`<h4>${correct}/${total} criterios clasificados correctamente (${pct}%)</h4>
      <div>Verde = acertaste si era de inclusión o exclusión. Rojo = revisa el fundamento mostrado.</div>`;
    $("#crit-next").classList.remove("hidden");
  }
  function renderTiab(){
    const list=$("#tiab-list"); list.innerHTML="";
    curScn._done=0; curScn._ok=0;
    curScn.articles.forEach((a,i)=>{
      const card=el("div","tiab");
      card.innerHTML=`
        <div class="ttl">📄 ${a.title}</div>
        <div class="abs">${a.abstract}</div>
        <div class="actions">
          <button class="btn ghost sm" data-d="include">✔ Incluir</button>
          <button class="btn ghost sm" data-d="exclude">✘ Excluir</button>
        </div>
        <div class="verdict"></div>`;
      const btns=card.querySelectorAll("button");
      btns.forEach(btn=>{
        btn.onclick=()=>decideTiab(card,btns,a,btn.dataset.d);
      });
      list.appendChild(card);
    });
  }
  function decideTiab(card,btns,a,decision){
    if(card.dataset.answered) return;
    card.dataset.answered="1";
    btns.forEach(b=>b.disabled=true);
    const ok=decision===a.decision;
    card.classList.add(ok?"ok":"err");
    const v=card.querySelector(".verdict");
    v.className="verdict show "+(ok?"good":"bad");
    const correctLabel = a.decision==="include" ? "INCLUIR" : "EXCLUIR";
    v.innerHTML=`<b>${ok?"✅ Correcto":"❌ Incorrecto"}</b> — Decisión correcta: <b>${correctLabel}</b>.<br>${a.reason}`;
    curScn._done++; if(ok) curScn._ok++;
    if(curScn._done===curScn.articles.length){
      const s=$("#screen-summary");
      const pct=Math.round(curScn._ok/curScn._done*100);
      s.className="fb show "+(pct>=70?"good":"bad");
      s.innerHTML=`<h4>Cribado completado: ${curScn._ok}/${curScn._done} aciertos (${pct}%)</h4>
        <div>${pct>=70?"¡Buen ojo clínico-metodológico! Distingues bien qué entra y qué no.":"Repasa los criterios PICOS: muchos errores de cribado vienen de confundir población o diseño."}</div>
        <div style="margin-top:10px"><button class="btn sm" id="scn-restart">↺ Reiniciar este escenario</button>
        <button class="btn ghost sm" id="scn-others">Otros escenarios</button></div>`;
      s.classList.remove("hidden");
      $("#scn-restart").onclick=()=>openScn(curScn.id);
      $("#scn-others").onclick=()=>show("scnList");
    }
  }

  /* ===================== wiring ===================== */
  $("#btn-start").onclick=startQuiz;
  $("#btn-prev").onclick=()=>nav(-1);
  $("#btn-next").onclick=()=>nav(1);
  $("#btn-quit").onclick=()=>{ if(confirm("¿Salir de la ronda actual? Se perderá el progreso.")) show("home"); };
  $("#btn-retry").onclick=startQuiz;
  $("#btn-home").onclick=()=>show("home");
  $("#open-screening").onclick=()=>{ renderScnList(); show("scnList"); };
  $("#scn-list-back").onclick=()=>show("home");
  $("#btn-review").onclick=()=>{ qi=0; show("quiz"); renderQ(); };

  // todas / ninguna sección
  $("#sel-all").onclick=()=>{ selSections=new Set(SECTIONS.map(s=>s.id)); renderHome(); };
  $("#sel-none").onclick=()=>{ selSections=new Set(); renderHome(); };

  renderHome();
})();
