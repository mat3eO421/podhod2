'use strict';
const ICONS={home:'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z',dumbbell:'m6 7 11 11M4 5l3-3m-5 7 7-7m8 20 5-5m-9 3 7-7M3 10l7-7m4 18 7-7',chart:'M4 3v17h17M8 15l4-5 4 3 5-7',history:'M3 11a9 9 0 1 1 2 7M3 4v7h7m2-4v5l3 2',arrow:'M4 12h16m-6-6 6 6-6 6',back:'M20 12H4m6-6-6 6 6 6',chevron:'m9 5 7 7-7 7',check:'m5 12 4 4L19 6',close:'m6 6 12 12M6 18 18 6',clock:'M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',calendar:'M7 3v4m10-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1',bolt:'m14 2-9 12h6l-1 8 9-12h-6Z',settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1Z',play:'m8 4 12 8-12 8Z',download:'M12 3v12m-5-5 5 5 5-5M4 15v6h16v-6',upload:'M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5',info:'M12 11v6m0-10v.1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',trophy:'M8 3h8v7a4 4 0 0 1-8 0ZM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 2v6m-4 1h8',chest:'M7 3 3 8l2 7 5 2 2-3 2 3 5-2 2-7-4-5M12 5v9M5 9l5 1m9-1-5 1',backmuscle:'m8 3-5 4 3 10 6 4 6-4 3-10-5-4M12 5v13M6 8l4 4m8-4-4 4',legs:'m6 3 1 7-2 10h5l2-9 2 9h5l-2-10 1-7M7 7h10',plus:'M12 5v14M5 12h14',sound:'M11 4 5 9H2v6h3l6 5ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14'};
const icon=(name)=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]||ICONS.dumbbell}"/></svg>`;
const esc=(v)=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=v=>JSON.parse(JSON.stringify(v));
const EX=(id,name,group,sets,min,max,rest,cue)=>({id,name,group,sets,min,max,rest,cue});
const DEFAULT=[
 {id:'chest',title:'Грудь и трицепс',subtitle:'Грудь · Трицепс · Пресс',short:'Грудь',icon:'chest',minutes:'55–70',exercises:[
 EX('bench','Жим штанги лёжа','Грудь',3,6,10,150,'Лопатки сведены, стопы устойчиво на полу. Опускай штангу подконтрольно. Для тяжёлых подходов используй страховку.'),
 EX('incline','Жим гантелей на наклонной','Грудь',3,8,12,120,'Умеренный наклон скамьи, около 15–30°. Держи лопатки собранными и не отбивай гантели в нижней точке.'),
 EX('fly','Баттерфляй','Грудь',2,12,15,90,'Отрегулируй сиденье под себя. Своди руки плавно, не отрывая спину от опоры.'),
 EX('pushdown','Разгибания на блоке с канатом','Трицепс',2,10,15,90,'Держи локти рядом с корпусом. Разгибай руки без раскачивания и подъёма плеч.'),
 EX('skull','Французский жим лёжа','Трицепс',2,10,15,90,'Выбери комфортное положение локтей и опускай вес медленно. Не продолжай движение через боль в локте.'),
 EX('crunch','Скручивания на наклонной скамье','Пресс',3,12,20,60,'Скручивай корпус за счёт пресса, не тяни голову руками. Без рывка поднимай лопатки.')
 ]},
 {id:'back',title:'Спина и бицепс',subtitle:'Спина · Бицепс',short:'Спина',icon:'backmuscle',minutes:'50–65',exercises:[
 EX('pulldown','Тяга верхнего блока','Спина',3,8,12,120,'Комфортный широкий хват. Тяни к верхней части груди, направляя локти вниз. Не тяни за голову.'),
 EX('row','Тяга горизонтального блока','Спина',3,8,12,120,'Сохраняй устойчивый корпус. Тяни локти назад, не отклоняясь всем телом.'),
 EX('dbrow','Тяга гантелей лёжа на наклонной','Спина',2,10,15,120,'Грудь остаётся на опоре. Веди локти назад и опускай гантели подконтрольно.'),
 EX('preacher','Подъём штанги на скамье Скотта','Бицепс',2,10,12,90,'Плечи лежат на опоре. Поднимай вес без рывков и не бросай его внизу.'),
 EX('hammer','Молотки с гантелями','Бицепс',2,10,15,90,'Ладони направлены друг к другу. Держи локти рядом с корпусом, без раскачивания.')
 ]},
 {id:'legs',title:'Ноги и плечи',subtitle:'Ноги · Плечи · Икры',short:'Ноги',icon:'legs',minutes:'65–85',exercises:[
 EX('legpress','Жим ногами','Квадрицепсы',3,8,12,150,'Сохраняй таз и поясницу на опоре. Опускай платформу до комфортной глубины, без округления поясницы.'),
 EX('rdl','Румынская тяга','Задняя поверхность бедра',3,8,12,150,'Начни с лёгкого веса. Отводи таз назад, слегка согнув колени, держи вес близко к ногам. Если движение новое, освой его с тренером.'),
 EX('legcurl','Сгибание ног сидя','Задняя поверхность бедра',2,10,15,90,'Совмести ось тренажёра с коленом. Прижми таз к сиденью и сгибай ноги без рывка.'),
 EX('legext','Разгибания ног в тренажёре','Квадрицепсы',2,12,15,90,'Настрой валик и спинку под себя. Поднимай и опускай вес плавно, без удара в верхней точке.'),
 EX('lateral','Махи гантелями в стороны','Плечи',3,12,20,90,'Слегка согни локти. Поднимай руки примерно до уровня плеч, не раскачиваясь.'),
 EX('rear','Разведение гантелей в наклоне','Плечи',2,12,20,90,'Удерживай корпус устойчиво или используй опору грудью. Разводи руки без рывка.'),
 EX('calf','Подъёмы на носки','Икры',3,12,20,90,'Поднимайся на носки и опускай пятки медленно. Избегай пружинящих движений.')
 ]}
];
const KEY='podhod.app.v1';
const fresh=()=>({version:1,program:clone(DEFAULT),history:[],active:null,next:0,sound:true});
function validSet(s){return s&&typeof s.done==='boolean'&&Number.isInteger(s.reps)&&s.reps>=0&&s.reps<=1000&&(s.weight===''||(Number.isFinite(s.weight)&&s.weight>=0&&s.weight<=2000));}
function validExercise(e){return e&&typeof e.id==='string'&&typeof e.name==='string'&&e.name.length<180&&typeof e.group==='string'&&typeof e.cue==='string'&&Number.isInteger(e.sets)&&e.sets>=1&&e.sets<=10&&Number.isInteger(e.min)&&e.min>=1&&e.min<=100&&Number.isInteger(e.max)&&e.max>=e.min&&e.max<=100&&Number.isInteger(e.rest)&&e.rest>=15&&e.rest<=600;}
function validSession(s,dayCount){return s&&Number.isInteger(s.day)&&s.day>=0&&s.day<dayCount&&typeof s.id==='string'&&typeof s.title==='string'&&Number.isFinite(s.start)&&s.start>0&&Array.isArray(s.exercises)&&s.exercises.length>0&&s.exercises.length<=30&&s.exercises.every(e=>validExercise(e)&&Array.isArray(e.log)&&e.log.length>0&&e.log.length<=10&&e.log.every(validSet))&&((s.end&&Number.isFinite(s.end)&&s.end>=s.start)||(Number.isInteger(s.index)&&s.index>=0&&s.index<s.exercises.length&&(s.restEnd===null||Number.isFinite(s.restEnd))));}
function validData(d){return d&&(!d.plates||(Number.isFinite(d.plates.bar)&&Array.isArray(d.plates.sizes)&&d.plates.sizes.every(Number.isFinite)))&&(!d.goals||(Array.isArray(d.goals)&&d.goals.every(g=>g&&typeof g.id==='string'&&Number.isFinite(g.weight)&&Number.isInteger(g.reps))))&&d.version===1&&Array.isArray(d.program)&&d.program.length>0&&d.program.every(p=>p&&typeof p.id==='string'&&p.id.length>0&&typeof p.title==='string'&&typeof p.subtitle==='string'&&typeof p.short==='string'&&typeof p.minutes==='string'&&typeof p.icon==='string'&&Array.isArray(p.exercises)&&p.exercises.length<=30&&p.exercises.every(validExercise))&&Array.isArray(d.history)&&d.history.length<=10000&&d.history.every(s=>validSession(s,d.program.length)&&Number.isFinite(s.end))&&(d.active===null||(validSession(d.active,d.program.length)&&d.active.end===undefined))&&Number.isInteger(d.next)&&d.next>=0&&d.next<d.program.length&&typeof d.sound==='boolean';}
let storageError=false, unreadableCopy=null;
let state=fresh();
try {
  const raw=localStorage.getItem(KEY);
  if(raw){
    unreadableCopy=raw;
    const parsed=JSON.parse(raw);
    if(!validData(parsed))throw Error('format');
    state=parsed;
    unreadableCopy=null;
  }
} catch(e){storageError=true;}
function save(){if(unreadableCopy!==null){toast('Сначала восстанови данные из копии в настройках.');return false;}try{localStorage.setItem(KEY,JSON.stringify(state));storageError=false;return true;}catch(e){storageError=true;toast('Не удалось сохранить данные. Скачай резервную копию в настройках.');return false;}}
let selectedDay=state.next,selectedExercise='bench',toastTimeout,editing=null,audioContext=null;
const $=s=>document.querySelector(s);
const fmt=n=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:1}).format(n);
const dateLabel=(time,opts={day:'numeric',month:'long'})=>new Date(time).toLocaleDateString('ru-RU',opts);
const dateKey=time=>{const d=new Date(time);return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;};
const timeLabel=seconds=>`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
const minutes=s=>Math.max(1,Math.round((s.end-s.start)/60000));
const completedSets=s=>s.exercises.reduce((n,e)=>n+e.log.filter(x=>x.done).length,0);
const totalSets=s=>s.exercises.reduce((n,e)=>n+e.log.length,0);
const volume=s=>s.exercises.reduce((n,e)=>n+e.log.filter(x=>x.done).reduce((sum,x)=>sum+(Number(x.weight)||0)*x.reps,0),0);
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('#toast').classList.remove('show'),4500);}
function page(){const v=location.hash.slice(1)||'today';return ['today','program','progress','history','settings','workout'].includes(v)?v:'today';}
function go(v){if(page()===v)render();else location.hash=v;window.scrollTo(0,0);}
const navs=[['today','home','Обзор'],['program','dumbbell','Программа'],['progress','chart','Прогресс'],['history','history','История']];
function header(title,subtitle,extra=''){return `<div class="page-head"><div><h1>${title}</h1><p>${subtitle}</p></div>${extra}</div>`;}
function nav(){const v=page();const current=v==='workout'?'today':v;const markup=navs.map(([id,ic,label])=>`<a href="#${id}" class="nav-link ${current===id?'active':''}" ${current===id?'aria-current="page"':''}>${icon(ic)}<span>${label}</span></a>`).join('');$('#desktop-nav').innerHTML=markup;$('#mobile-nav').innerHTML=markup;$('#breadcrumb').textContent=navs.find(n=>n[0]===v)?.[2]||(v==='settings'?'Настройки':'Тренировка');document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
function render(){nav();let html='';switch(page()){case'program':html=program();break;case'progress':html=progress();break;case'history':html=history();break;case'settings':html=settings();break;case'workout':html=workout();break;default:html=today();}$('#app').innerHTML=(storageError?'<div class="storage-warning" role="alert">Хранилище недоступно или сохранённые данные повреждены. Скачай копию данных в настройках перед закрытием приложения.</div>':'')+html;renderTimer();tick();syncScreen();}
function stats(items){return `<div class="stats">${items.map(([label,value,unit,caption,ic])=>`<div class="stat"><div class="stat-head"><span>${label}</span>${icon(ic)}</div><div class="stat-value">${value}<small>${unit}</small></div><div class="stat-caption">${caption}</div></div>`).join('')}</div>`;}
function countExercises(n) {
  const end = n % 10;
  const word = n % 100 >= 11 && n % 100 <= 14 ? 'упражнений'
    : end === 1 ? 'упражнение' : end >= 2 && end <= 4 ? 'упражнения' : 'упражнений';
  return n + ' ' + word;
}
function week() {
  const now = new Date(), monday = new Date(now);
  monday.setHours(0,0,0,0);
  monday.setDate(monday.getDate() - (monday.getDay()+6)%7);
  const days = Array.from({length:7}, (_,i) => {
    const date = new Date(monday);
    date.setDate(date.getDate()+i);
    return date;
  });
  const followingMonday = new Date(monday);
  followingMonday.setDate(monday.getDate()+7);
  const sessions = state.history.filter(s => s.end >= monday && s.end < followingMonday);
  const daysMarkup = days.map(d => {
    const today = dateKey(now) === dateKey(d);
    const done = sessions.some(s => dateKey(d)===dateKey(s.end));
    return `<div aria-label="${dateLabel(d)}${done?', тренировка завершена':''}" class="week-day ${today?'today':''} ${done?'done':''}"><span>${dateLabel(d,{weekday:'short'})}</span><b>${done?icon('check'):d.getDate()}</b></div>`;
  }).join('');
  return `<section class="panel week-panel"><div class="section-top"><h2>Активность недели</h2>${icon('calendar')}</div><div class="week-count"><b>${sessions.length}<small> / 3</small></b><span>тренировки по плану</span></div><div class="week-meter" aria-hidden="true">${[0,1,2].map(i=>`<i class="${i<sessions.length?'filled':''}"></i>`).join('')}</div><div class="week-days">${daysMarkup}</div></section>`;
}
function programCards() {
  return `<div class="program-cards">${state.program.map((d,i)=>`
    <button class="program-card" data-action="day" data-day="${i}">
      <span class="card-top"><span class="muscle-icon">${icon(d.icon)}</span><span class="day-label">Тренировка ${i+1}</span>${icon('arrow')}</span>
      <h3>${esc(d.title)}</h3><span class="card-bottom">${countExercises(d.exercises.length)} · ${esc(d.minutes)} мин</span>
    </button>`).join('')}</div>`;
}
function activeBanner(){return state.active?`<div class="session-banner"><div><strong>Тренировка уже начата</strong><p>${esc(state.active.title)} · ${completedSets(state.active)} из ${totalSets(state.active)} подходов</p></div><button class="btn small" data-action="resume">Продолжить ${icon('arrow')}</button></div>`:'';}
function today() {
  const active = state.active, index = active?.day ?? state.next;
  const day = state.program[index], exercises = active?.exercises ?? day.exercises;
  const total = exercises.reduce((n,e)=>n+e.sets,0);
  const action = active ? 'resume' : exercises.length ? 'start' : 'day';
  const label = active ? 'Продолжить тренировку' : exercises.length ? 'Начать тренировку' : 'Заполнить день';
  const h = state.history;
  return header('Обзор тренировок','',`<span class="date-chip">${icon('calendar')}${dateLabel(Date.now(),{day:'numeric',month:'long',weekday:'long'})}</span>`) +
    `<div class="dashboard-grid"><section class="hero panel">
      <img class="barbell-art" src="./barbell.svg" alt="">
      <div class="eyebrow"><i></i>${active?'Тренировка начата':'Следующая тренировка'}</div>
      <h2>${esc(active?.title ?? day.title)}</h2>
      <div class="hero-meta"><span>${icon('dumbbell')}${countExercises(exercises.length)}</span><span>${active?icon('check'):icon('clock')}${active?completedSets(active)+' / '+total+' подходов':esc(day.minutes)+' мин'}</span></div>
      <button class="btn dark" data-action="${action}" data-day="${index}">${label}${icon('arrow')}</button>
    </section>${week()}</div>
    <section class="program-section"><div class="section-top"><h2>Программа</h2><a class="mini-link" href="#program">Все дни ${icon('arrow')}</a></div>${programCards()}</section>
    <section class="program-section"><div class="section-top"><h2>Статистика</h2><span class="period">За всё время</span></div>
    ${stats([['Тренировки',h.length,'','','dumbbell'],['Время в зале',fmt(h.reduce((n,s)=>n+minutes(s),0)),'мин','','clock'],['Рабочие подходы',h.reduce((n,s)=>n+completedSets(s),0),'','','bolt']])}</section>`;
}
function program(){const d=state.program[selectedDay];return header('Программа тренировок','',button('new-training','+ Добавить тренировку'))+activeBanner()+`<div class="day-tabs" role="group" aria-label="Выбор тренировочного дня">${state.program.map((p,i)=>`<button class="day-tab ${i===selectedDay?'active':''}" data-action="day" data-day="${i}" aria-pressed="${i===selectedDay}">${esc(p.title)}</button>`).join('')}</div><div class="program-detail"><section class="panel"><div class="section-top"><h2>${esc(d.title)}</h2><span class="tiny">${d.exercises.reduce((n,e)=>n+e.sets,0)} ПОДХОДОВ</span></div><div class="tool-row">${button("rename-training","Переименовать")}${button("order","Порядок и суперсеты",d.exercises.length?"":"disabled")}${button("library","Из библиотеки",d.exercises.length<30?"":"disabled")}</div><div class="exercise-list">${d.exercises.map((e,i)=>`<button class="exercise-row" data-action="exercise" data-day="${selectedDay}" data-index="${i}"><span class="exercise-num">${String(i+1).padStart(2,'0')}</span><span class="exercise-info"><b>${esc(e.name)}</b><span>${e.sets} × ${e.min}–${e.max} · ${esc(e.group)} · отдых ${timeLabel(e.rest)}</span></span>${icon('chevron')}</button>`).join('')||'<p class="body-note">В этом дне пока нет упражнений. Добавь первое, чтобы начать тренировку.</p>'}</div><button class="btn secondary full add-exercise" data-action="add-exercise" data-day="${selectedDay}" ${d.exercises.length>=30?'disabled':''}>${icon('plus')} Добавить упражнение</button></section><aside class="panel detail-aside"><span class="eyebrow">ТРЕНИРОВКА ${selectedDay+1}</span><h3>План на сегодня</h3><div class="info-line"><span>Длительность</span><b>~ ${esc(d.minutes)} мин</b></div><div class="info-line"><span>Упражнений</span><b>${d.exercises.length}</b></div><div class="info-line"><span>Рабочих подходов</span><b>${d.exercises.reduce((n,e)=>n+e.sets,0)}</b></div><p class="hint-text">Перед тренировкой — лёгкая активность и разминочные подходы. Рабочий вес выбирай с запасом 1–2 повтора.</p><button class="btn full" data-action="start" data-day="${selectedDay}" ${!d.exercises.length||state.active?'disabled':''}>${state.active?'Тренировка уже начата':'Начать тренировку'} ${icon('play')}</button><p class="hint-text">Нажми на упражнение, чтобы изменить название, группу, подходы, повторы и отдых или удалить его из программы.</p></aside></div>`;}
function exerciseDialog(di,ei=-1){
  const day=state.program[di];
  if(!day)return;
  if(ei===-1&&day.exercises.length>=30){toast('В одном дне можно добавить до 30 упражнений.');return;}
  const isNew=ei===-1;
  const e=isNew?EX('', '', '', 3, 8, 12, 90, ''):day.exercises[ei];
  if(!e)return;
  editing={di,ei};
  const groups=[...new Set(['Грудь','Спина','Плечи','Бицепс','Трицепс','Квадрицепсы','Задняя поверхность бедра','Ягодицы','Икры','Пресс',...state.program.flatMap(d=>d.exercises.map(e=>e.group))])];
  showDialog(`${dialogTop(isNew?'Добавить упражнение':'Изменить упражнение')}
    <form id="exercise-form">
      <div class="edit-fields">
        <label class="full-width">Название<input name="name" type="text" maxlength="179" value="${esc(e.name)}" placeholder="Например, жим гантелей сидя" required></label>
        <label class="full-width">Мышечная группа<input name="group" type="text" list="muscle-groups" maxlength="60" value="${esc(e.group)}" placeholder="Выбери или введи свою" required><datalist id="muscle-groups">${groups.map(g=>`<option value="${esc(g)}"></option>`).join('')}</datalist></label>
        <label>Подходы<input name="sets" type="number" min="1" max="10" value="${e.sets}" required></label>
        <label>Отдых, секунд<input name="rest" type="number" min="15" max="600" step="1" value="${e.rest}" required></label>
        <label>Повторы от<input name="min" type="number" min="1" max="100" value="${e.min}" required></label>
        <label>Повторы до<input name="max" type="number" min="1" max="100" value="${e.max}" required></label>
        <label class="full-width">Заметка по технике · необязательно<textarea name="cue" maxlength="1000" rows="3" placeholder="Опора, хват, особенности выполнения">${esc(e.cue)}</textarea></label>
      </div>
      <p role="alert" class="storage-warning" hidden></p>
      <p class="dialog-copy">Изменения действуют со следующего запуска тренировки. История и текущая тренировка сохранятся.</p>
      <div class="dialog-actions"><button class="btn full" type="submit">${isNew?'Добавить упражнение':'Сохранить'}</button></div>
      ${isNew?'':'<button class="btn danger full delete-exercise" type="button" data-action="delete-exercise">Удалить из программы</button>'}
    </form>`);
}
function updateDayDuration(day){
  const seconds=day.exercises.reduce((sum,e)=>sum+e.sets*40+Math.max(0,e.sets-1)*e.rest+60,0);
  const estimate=day.exercises.length?Math.ceil((seconds/60+10)/5)*5:0;
  day.minutes=estimate?`${estimate}–${estimate+15}`:'0';
}
function requestDeleteExercise(){
  if(!editing||editing.ei<0)return;
  const e=state.program[editing.di].exercises[editing.ei];
  if(!e)return;
  showDialog(`${dialogTop('Удалить упражнение?')}<p class="dialog-copy">«${esc(e.name)}» будет удалено из этого дня программы. Выполненные подходы, рекорды и текущая тренировка сохранятся.</p><div class="dialog-actions"><button class="btn secondary" data-action="cancel-delete-exercise">Назад</button><button class="btn danger" data-action="confirm-delete-exercise">Удалить</button></div>`);
}
function deleteExercise(){
  if(!editing||editing.ei<0)return;
  const day=state.program[editing.di];
  const previous=clone(day);
  const removed=day.exercises.splice(editing.ei,1)[0];for(const x of day.exercises)if(x.partner===removed.id)delete x.partner;
  updateDayDuration(day);
  if(!save()){state.program[editing.di]=previous;closeDialog();render();return;}closeDialog();render();toast('Упражнение удалено из программы.');
}
function showFormError(form,message){
  const error=form.querySelector('[role="alert"]');
  error.textContent=message;
  error.hidden=false;
}
function saveExercise(form){
  if(!editing)return;
  const {di,ei}=editing,day=state.program[di],isNew=ei===-1,fields=new FormData(form);
  if(isNew&&day.exercises.length>=30){toast('В одном дне можно добавить до 30 упражнений.');return;}
  const name=String(fields.get('name')||'').trim(),group=String(fields.get('group')||'').trim(),cue=String(fields.get('cue')||'').trim();
  const id=isNew?`custom-${crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)}`:day.exercises[ei].id;
  const update=EX(id,name,group,Number(fields.get('sets')),Number(fields.get('min')),Number(fields.get('max')),Number(fields.get('rest')),cue);
  if(!name||!group||name.length>179||group.length>60||cue.length>1000||!validExercise(update)){
    showFormError(form,'Заполни название и группу. Нижняя граница повторов должна быть не выше верхней.');return;
  }
  const previous=clone(day);
  if(isNew)day.exercises.push(update);else Object.assign(day.exercises[ei],update);
  updateDayDuration(day);
  if(!save()){state.program[di]=previous;showFormError(form,'Не удалось сохранить упражнение. Проверь свободное место в хранилище.');return;}closeDialog();render();toast(isNew?'Упражнение добавлено.':'Упражнение сохранено.');
}
function lastExercise(id){for(let i=state.history.length-1;i>=0;i--){const e=state.history[i].exercises.find(e=>e.id===id&&e.log.some(s=>s.done));if(e)return e;}return null;}
function start(di){if(state.active){if(state.active.day!==di)toast('Сначала заверши текущую тренировку.');go('workout');return;}const d=state.program[di];if(!d||!d.exercises.length){toast('Добавь хотя бы одно упражнение в этот день.');selectedDay=di;go('program');return;}state.active={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),day:di,title:d.title,start:Date.now(),index:0,restEnd:null,exercises:d.exercises.map(e=>{const prev=lastExercise(e.id);const done=prev?.log.filter(s=>s.done)||[];return {...clone(e),log:Array.from({length:e.sets},(_,i)=>({weight:done[i]?.weight??done[0]?.weight??'',reps:done[i]?.reps??e.min,done:false}))};})};save();unlockSound();go('workout');}
function workout(){const a=state.active;if(!a)return header('Время тренироваться','Выбери день и начни с первого подхода.')+programCards();const e=a.exercises[a.index],previous=lastExercise(e.id);const done=previous?.log.filter(s=>s.done)||[];return `<div class="training-head"><a class="back" href="#today">${icon('back')} Обзор</a><span class="session-clock">${icon('clock')}<span id="elapsed">00:00</span></span><button class="btn secondary small" data-action="finish">Завершить</button></div><div class="training-layout"><section class="training-main"><span class="eyebrow muted">${esc(a.title)}</span><label class="exercise-jump">Упражнение<select id="exercise-jump">${a.exercises.map((x,i)=>`<option value="${i}" ${i===a.index?'selected':''}>${i+1}. ${esc(x.name)}</option>`).join('')}</select></label><div class="step-dots">${a.exercises.map((x,i)=>`<button class="step-dot ${i===a.index?'current':''} ${x.log.every(s=>s.done)?'complete':''}" data-action="select-exercise" data-index="${i}" aria-label="${esc(x.name)}" ${i===a.index?'aria-current="step"':''}></button>`).join('')}</div><span class="tiny">УПРАЖНЕНИЕ ${a.index+1} / ${a.exercises.length}</span><h1>${esc(e.name)}</h1><div class="tool-row">${button("library","Заменить на сегодня",e.log.some(s=>s.done)?"disabled title='Уже есть выполненные подходы'":"")}${button("plates","Блины")}${button("logs","История упражнения")}</div><div class="work-meta"><span>${e.log.length} × ${e.min}–${e.max} повторов</span><span>Отдых ${timeLabel(e.rest)}</span><button class="mini-link" style="padding:0;min-height:0" data-action="technique">${icon('info')} Техника</button></div><div class="panel" style="margin-top:23px"><div class="section-top"><h2>Рабочие подходы</h2><span class="tag">${e.log.filter(s=>s.done).length} / ${e.log.length}</span></div><div class="set-head"><span>СЕТ</span><span>ВЕС, КГ</span><span>ПОВТОРЫ</span><span>ГОТОВО</span></div>${e.log.map((s,i)=>`<div class="set-row ${s.done?'done':''}"><span>${i+1}</span><input type="number" inputmode="decimal" min="0" max="2000" step="0.5" value="${s.weight}" placeholder="—" data-set="${i}" data-field="weight" aria-label="Вес в подходе ${i+1}, кг" ${s.done?'disabled':''}><input type="number" inputmode="numeric" min="1" max="1000" step="1" value="${s.reps||''}" data-set="${i}" data-field="reps" aria-label="Повторы в подходе ${i+1}" ${s.done?'disabled':''}><button class="set-check" data-action="check-set" data-index="${i}" aria-label="${s.done?'Снять отметку':'Завершить'} подход ${i+1}" aria-pressed="${s.done}">${icon('check')}</button></div>`).join('')}${button('extra','+ Подход',e.log.length>=10?'disabled':'')}<p class="hint-text">${done.length?`В прошлый раз: ${done.map(s=>`${fmt(Number(s.weight)||0)} кг × ${s.reps}`).join(' · ')}`:'Для гантелей укажи вес одной гантели, для своего веса — 0 кг. Начни с разминки.'}</p></div><div class="work-actions"><button class="btn secondary" data-action="prev" ${a.index===0?'disabled':''} aria-label="Предыдущее упражнение">${icon('back')}</button><button class="btn" data-action="${a.index===a.exercises.length-1?'finish':'next'}">${a.index===a.exercises.length-1?'Завершить тренировку':'Следующее упражнение'} ${icon('arrow')}</button></div><button class="quiet" style="margin:12px auto" data-action="discard">Отменить тренировку</button></section><aside class="training-aside"><div class="panel"><h2>Твой маршрут</h2><p class="hint-text" style="margin:8px 0 16px">${completedSets(a)} из ${totalSets(a)} подходов</p><div class="session-list">${a.exercises.map((x,i)=>`<button class="${a.index===i?'active':''}" data-action="select-exercise" data-index="${i}"><span>${x.log.every(s=>s.done)?icon('check'):String(i+1).padStart(2,'0')}</span>${esc(x.name)}</button>`).join('')}</div></div><div class="tip"><span>${icon('bolt')}</span><div><b>Держи запас</b><p>Последний повтор сложный, но техника остаётся чистой.</p></div></div></aside></div>`;}
function checkSet(i){const a=state.active,e=a.exercises[a.index],s=e.log[i];if(s.done){s.done=false;a.restEnd=null;save();render();return;}const original={...s};const weightInput=document.querySelector(`[data-set="${i}"][data-field="weight"]`),repsInput=document.querySelector(`[data-set="${i}"][data-field="reps"]`);s.weight=weightInput.value===''?'':Number(weightInput.value);s.reps=Number(repsInput.value);if(s.weight===''||!Number.isFinite(s.weight)||s.weight<0||s.weight>2000||!Number.isInteger(s.reps)||s.reps<1||s.reps>1000){Object.assign(s,original);toast('Укажи вес (0 для своего веса) и количество повторов.');return;}s.done=true;
  const nextSet=e.log[i+1];
  if(nextSet&&!nextSet.done&&nextSet.weight===''){nextSet.weight=s.weight;if(nextSet.reps===e.min)nextSet.reps=s.reps;}
  const prior=pastSets(e.id).concat(e.log.filter(x=>x!==s&&x.done));
  const same=prior.filter(x=>x.weight===s.weight);
  if(prior.length&&prior.every(x=>s.weight>x.weight))toast('Новый рекорд веса: '+fmt(s.weight)+' кг');
  else if(same.length&&same.every(x=>s.reps>x.reps))toast('Рекорд с '+fmt(s.weight)+' кг: '+s.reps+' повторов');
  const mate=a.exercises.findIndex(x=>x.id===e.partner&&x.partner===e.id);
  const first=mate>a.index;
  a.restEnd=Date.now()+e.rest*1000;
  if(mate>=0&&a.exercises[mate].log.some(x=>!x.done)){a.index=mate;if(first)a.restEnd=null;}
  save();unlockSound();navigator.vibrate?.(30);render();}
function requestFinish(){const a=state.active;if(!a)return;const count=completedSets(a);if(!count){toast('Сначала отметь хотя бы один рабочий подход.');return;}showDialog(`${dialogTop('Завершить тренировку?')}<p class="dialog-copy">В историю попадут ${count} из ${totalSets(a)} подходов.${count<totalSets(a)?' Неотмеченные подходы останутся невыполненными.':''}</p><div class="dialog-actions"><button class="btn secondary" data-action="close">Продолжить</button><button class="btn" data-action="save-session">Сохранить</button></div>`);}
function finish(){const a=state.active;if(!a)return;const previousNext=state.next;const session=clone(a);session.end=Date.now();delete session.restEnd;delete session.index;state.history.push(session);state.next=(a.day+1)%state.program.length;selectedDay=state.next;state.active=null;if(!save()){state.history.pop();state.active=a;state.next=previousNext;selectedDay=previousNext;closeDialog();render();return;}closeDialog();go('today');showDialog(`<div class="summary"><div class="summary-mark">${icon('check')}</div><h2>Тренировка завершена</h2><p>${esc(session.title)} — в твоём дневнике.</p><div class="summary-stats"><div><b>${minutes(session)}</b><span>минут</span></div><div><b>${completedSets(session)}</b><span>подходов</span></div><div><b>${session.exercises.filter(e=>e.log.some(s=>s.done)).length}</b><span>упражнений</span></div></div><p>Отдохни и восстановись. Следующий шаг — ${esc(state.program[state.next].title.toLowerCase())}.</p><div class="dialog-actions"><button class="btn full" data-action="close">Отлично ${icon('check')}</button></div></div>`);}
let historyLimit=30;
function history(){const h=state.history.slice(-historyLimit).reverse();return header('История тренировок','Выполненные подходы, рабочие веса и время в зале.',h.length?`<button class="btn ghost small" data-action="export">${icon('download')} Копия</button>`:'')+(!h.length?empty('history','Здесь начинается твоя история','После первой тренировки здесь появятся подходы, рабочие веса и время в зале.','Начать тренировку','start'):h.map((s,i)=>{const month=dateLabel(s.end,{month:'long',year:'numeric'});const prev=i?dateLabel(h[i-1].end,{month:'long',year:'numeric'}):null;return `${month!==prev?`<div class="history-month">${month}</div>`:''}<button class="history-row" data-action="session-detail" data-index="${state.history.length-1-i}"><span class="history-date"><b>${new Date(s.end).getDate()}</b>${dateLabel(s.end,{weekday:'short'})}</span><span class="history-main"><b>${esc(s.title)}</b><p>${minutes(s)} мин · ${completedSets(s)} подходов · ${fmt(volume(s))} кг объёма</p></span><span class="muscle-icon">${icon(state.program[s.day].icon)}</span>${icon('chevron')}</button>`;}).join('')+(state.history.length>historyLimit?'<button class="btn secondary full" data-action="more-history">Ещё тренировки</button>':''));}
function sessionDetail(i){const s=state.history[i];if(!s)return;showDialog(`${dialogTop(s.title)}<p class="body-note">${dateLabel(s.end)} · ${minutes(s)} мин · ${completedSets(s)} подходов</p>${s.exercises.filter(e=>e.log.some(s=>s.done)).map(e=>`<div class="record" style="display:block"><strong>${esc(e.name)}</strong><p class="hint-text" style="margin-top:6px">${e.log.filter(s=>s.done).map(s=>`${fmt(Number(s.weight)||0)} кг × ${s.reps}`).join(' · ')}</p></div>`).join('')}<p class="hint-text">Для гантелей объём считается по введённому весу одной гантели. Используй один способ записи для сравнения тренировок.</p><div class="dialog-actions"><button class="btn secondary full" data-action="close">Закрыть</button></div>`);}
function empty(ic,title,body,label,action){return `<div class="panel"><div class="empty-state"><div class="empty-icon">${icon(ic)}</div><h2>${title}</h2><p>${body}</p><button class="btn" data-action="${action}" data-day="${state.next}">${label} ${icon('arrow')}</button></div></div>`;}
function chart(points){if(points.length<2)return `<div class="empty-state" style="padding:33px 15px"><p style="margin:0">График появится после двух тренировок с этим упражнением.</p></div>`;const pts=points.slice(-12),reps=pts.every(p=>p.w===0),values=pts.map(p=>reps?p.reps:p.w),lo=Math.max(0,Math.min(...values)-5),hi=Math.max(...values)+5;const X=i=>45+i*510/(pts.length-1),Y=v=>160-(v-lo)/(hi-lo)*130;const line=values.map((v,i)=>`${i?'L':'M'}${X(i)} ${Y(v)}`).join(' ');return `<p class="hint-text">${reps?'Лучшее число повторов':'Максимальный рабочий вес, кг'} · последние ${pts.length} записей</p><svg class="chart" viewBox="0 0 580 200" role="img" aria-label="График ${reps?'повторов':'рабочего веса'} по тренировкам"><defs><linearGradient id="chartFill" x2="0" y2="1"><stop stop-color="#ad411d" stop-opacity=".18"/><stop offset="1" stop-color="#ad411d" stop-opacity="0"/></linearGradient></defs>${[lo,(lo+hi)/2,hi].map(v=>`<path d="M45 ${Y(v)}H555" stroke="#c6cbc2" stroke-dasharray="4 6"/><text x="33" y="${Y(v)+4}" text-anchor="end" fill="#596256" font-size="11">${fmt(v)}</text>`).join('')}<path d="${line} L555 170 L45 170Z" fill="url(#chartFill)"/><path d="${line}" stroke="#ad411d" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${pts.map((p,i)=>`<circle cx="${X(i)}" cy="${Y(values[i])}" r="4" fill="#ad411d"><title>${dateLabel(p.time)}: ${fmt(values[i])} ${reps?'повторов':'кг'}</title></circle>`).join('')}<text x="45" y="193" fill="#596256" font-size="11">${dateLabel(pts[0].time,{day:'numeric',month:'short'})}</text><text x="555" y="193" fill="#596256" font-size="11" text-anchor="end">${dateLabel(pts[pts.length-1].time,{day:'numeric',month:'short'})}</text></svg>`;}
function progress(){const h=state.history;if(!h.length)return header('Твой прогресс','Рабочие веса и результаты по упражнениям.')+button('goal','Цель упражнения')+empty('chart','Первый подход — точка отсчёта','Записывай вес и повторы. Здесь появятся графики упражнений, личные рекорды и распределение нагрузки.','Открыть программу','program');const catalog=new Map(state.program.flatMap(d=>d.exercises).map(e=>[e.id,e]));for(const session of [...h].reverse())for(const e of session.exercises)if(!catalog.has(e.id))catalog.set(e.id,e);const exercises=[...catalog.values()];const pointsById=new Map();for(const session of h)for(const exercise of session.exercises){const done=exercise.log.filter(l=>l.done);if(!done.length)continue;if(!pointsById.has(exercise.id))pointsById.set(exercise.id,[]);pointsById.get(exercise.id).push({time:session.end,w:Math.max(...done.map(l=>Number(l.weight)||0)),reps:Math.max(...done.map(l=>l.reps))});}const available=exercises.filter(e=>pointsById.has(e.id));if(!available.some(e=>e.id===selectedExercise))selectedExercise=available[0]?.id||'bench';const groups=Object.create(null);const since=Date.now()-28*86400000;h.filter(s=>s.end>=since).forEach(s=>s.exercises.forEach(e=>{groups[e.group]=(groups[e.group]||0)+e.log.filter(l=>l.done).length;}));const biggest=Math.max(1,...Object.values(groups));return header('Твой прогресс','Рабочие веса, личные рекорды и нагрузка по группам мышц.')+stats([['Тренировок',h.length,'','За всё время','dumbbell'],['Подходов',h.reduce((n,s)=>n+completedSets(s),0),'','Отмечены выполненными','bolt'],['Время в зале',fmt(h.reduce((n,s)=>n+minutes(s),0)),'мин','За всё время','clock']])+`<div class="tool-row">${button("goal","Цель упражнения")}${button("logs","История упражнения")}</div><section class="panel chart-panel"><div class="section-top"><h2>Динамика упражнения</h2><select id="chart-select" aria-label="Упражнение для графика">${available.map(e=>`<option value="${esc(e.id)}" ${e.id===selectedExercise?'selected':''}>${esc(e.name)}</option>`).join('')}</select></div>${goalSummary()}${chart(pointsById.get(selectedExercise)||[])}</section><div class="progress-columns"><section class="panel"><div class="section-top"><h2>Личные рекорды</h2>${icon('trophy')}</div>${available.map(e=>{const pts=pointsById.get(e.id),w=Math.max(...pts.map(p=>p.w));return `<div class="record"><span>${esc(e.name)}</span><b>${w?fmt(w)+' кг':Math.max(...pts.map(p=>p.reps))+' повт.'}</b></div>`;}).join('')}</section><section class="panel"><div class="section-top"><h2>Баланс нагрузки</h2><span class="tiny">28 ДНЕЙ</span></div><p class="hint-text">Выполненные подходы по основной мышечной группе.</p>${Object.entries(groups).filter(([,n])=>n>0).map(([name,n])=>`<div class="balance-row"><div><span>${esc(name)}</span><span>${n}</span></div><div class="bar"><i style="width:${n/biggest*100}%"></i></div></div>`).join('')||'<p class="hint-text">За последние 28 дней записей нет.</p>'}</section></div>`;}
function settings(){return header('Настройки','Звук, установка и резервные копии.')+`<div class="settings-grid"><section class="panel"><h2>Как приложение на iPhone</h2><p>Открой эту ссылку в Safari. Нажми «Поделиться» → «На экран Домой» и подтверди добавление. Запускай «Подход» с новой иконки.</p><button class="btn secondary full" data-action="install">${icon('plus')} Инструкция по установке</button></section><section class="panel"><h2>Тренировка</h2>${navigator.wakeLock?'<div class="settings-row"><span>Не гасить экран тренировки</span>'+button("awake",state.awake?"Включено":"Выключено")+'</div>':''}<div class="settings-row"><span>Звук конца отдыха</span><button class="switch ${state.sound?'on':''}" data-action="sound" role="switch" aria-checked="${state.sound}" aria-label="Звук конца отдыха"><i></i></button></div><p style="margin-top:15px">Таймер сохраняет время при сворачивании. Звук работает, пока приложение открыто; на заблокированном iPhone сигнал не гарантируется.</p></section><section class="panel"><h2>История под твоим контролем</h2><p>Программа и записи хранятся в этом браузере на этом устройстве. Регулярно скачивай копию: она поможет перенести историю или восстановить её после очистки браузера.</p><button class="btn secondary full" data-action="export">${icon('download')} Скачать резервную копию</button><button class="btn ghost full" data-action="import">${icon('upload')} Восстановить из копии</button></section><section class="panel"><h2>Правила прогресса</h2><p>Оставляй 1–2 повтора в запасе. Первые две недели — 2–3. Когда достигнешь верхней границы во всех подходах с чистой техникой, добавь минимальный доступный вес.</p><p style="margin-top:12px">Если результаты падают две тренировки подряд и усталость сохраняется, на неделю сократи рабочие подходы примерно вдвое.</p><p style="margin-top:12px">Для гантелей записывай вес одной гантели. Для упражнений со своим весом — 0 кг или дополнительное отягощение.</p></section></div>`;}
function dialogTop(title){return `<div class="dialog-top"><h2>${esc(title)}</h2><button class="close" data-action="close" aria-label="Закрыть">${icon('close')}</button></div>`;}
function showDialog(html){$('#dialog-content').innerHTML=html;$('#dialog').setAttribute('aria-label',$('#dialog-content h2')?.textContent||'Подход');if(!$('#dialog').open)$('#dialog').showModal();}
function closeDialog(){$('#dialog').close();editing=null;}
function unlockSound(){if(!state.sound)return;try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});}catch(e){}}
function beep(){if(!state.sound)return;try{unlockSound();if(!audioContext)return;const o=audioContext.createOscillator(),g=audioContext.createGain();o.connect(g);g.connect(audioContext.destination);o.frequency.value=650;g.gain.setValueAtTime(.1,audioContext.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+.6);o.start();o.stop(audioContext.currentTime+.6);}catch(e){}}
function renderTimer(){const a=state.active;const el=$('#timer');if(!a?.restEnd){el.hidden=true;return;}el.hidden=false;el.innerHTML=`<span class="rest-time" id="remaining">${timeLabel(Math.max(0,Math.ceil((a.restEnd-Date.now())/1000)))}</span><span class="rest-label">Отдых<small>Следующий подход скоро</small></span><button data-action="rest-add" aria-label="Добавить 30 секунд">+30</button><button data-action="rest-skip" aria-label="Пропустить отдых">${icon('close')}</button>`;}
function tick(){const a=state.active;if(!a)return;if($('#elapsed'))$('#elapsed').textContent=timeLabel(Math.max(0,Math.floor((Date.now()-a.start)/1000)));if(a.restEnd){const left=Math.max(0,Math.ceil((a.restEnd-Date.now())/1000));if($('#remaining'))$('#remaining').textContent=timeLabel(left);if(!left){a.restEnd=null;save();renderTimer();beep();toast('Отдых завершён. Можно начинать следующий подход.');}}}
function exportData(){const blob=new Blob([unreadableCopy ?? JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`podhod-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000);toast('Копия подготовлена для скачивания.');}
let pendingImport=null;
function restoreBackup(){
  if(!pendingImport)return;
  const previous=state, raw=unreadableCopy;
  state=pendingImport;
  unreadableCopy=null;
  if(!save()){
    state=previous;
    unreadableCopy=raw;
    closeDialog();
    render();
    return;
  }
  pendingImport=null;
  selectedDay=state.next;
  closeDialog();
  go('today');
  toast('История и программа восстановлены.');
}
document.addEventListener('click',event=>{const target=event.target.closest('[data-action]');if(!target)return;const action=target.dataset.action;const di=Number(target.dataset.day),i=Number(target.dataset.index);switch(action){case'more-history':historyLimit+=30;render();break;case'day':selectedDay=di;go('program');break;case'program':go('program');break;case'settings':go('settings');break;case'start':start(Number.isInteger(di)?di:state.next);break;case'resume':go('workout');break;case'exercise':exerciseDialog(di,i);break;case'add-exercise':exerciseDialog(di);break;case'delete-exercise':requestDeleteExercise();break;case'confirm-delete-exercise':deleteExercise();break;case'cancel-delete-exercise':if(editing)exerciseDialog(editing.di,editing.ei);break;case'close':closeDialog();break;case'check-set':checkSet(i);break;case'select-exercise':state.active.index=i;save();render();window.scrollTo(0,0);break;case'next':state.active.index=Math.min(state.active.index+1,state.active.exercises.length-1);save();render();window.scrollTo(0,0);break;case'prev':state.active.index=Math.max(0,state.active.index-1);save();render();window.scrollTo(0,0);break;case'finish':requestFinish();break;case'save-session':finish();break;case'technique':{const e=state.active.exercises[state.active.index];showDialog(`${dialogTop(e.name)}<p class="dialog-copy">${esc(e.cue||'Заметка по технике пока не добавлена. Её можно записать в редакторе программы.')}</p><div class="dialog-actions"><button class="btn full" data-action="close">Понятно</button></div>`);break;}case'rest-add':if(state.active?.restEnd){state.active.restEnd+=30000;save();tick();}break;case'rest-skip':if(state.active){state.active.restEnd=null;save();renderTimer();}break;case'session-detail':sessionDetail(i);break;case'export':exportData();break;case'import':$('#import-file').click();break;case'confirm-import':restoreBackup();break;case'sound':state.sound=!state.sound;if(!save()){state.sound=!state.sound;render();break;}if(state.sound){unlockSound();beep();}render();break;case'install':showDialog(`${dialogTop('Подход на экране «Домой»')}<div class="dialog-copy"><ol><li>Открой ссылку приложения в <b>Safari</b> на iPhone.</li><li>Нажми кнопку <b>«Поделиться»</b> — квадрат со стрелкой вверх.</li><li>Выбери <b>«На экран Домой»</b>, затем <b>«Добавить»</b>.</li><li>Открой «Подход» с новой иконки. На устройствах и в браузерах хранилища могут различаться: для переноса истории используй резервную копию.</li></ol></div><div class="dialog-actions"><button class="btn full" data-action="close">Понятно</button></div>`);break;case'discard':showDialog(`${dialogTop('Отменить тренировку?')}<p class="dialog-copy">Текущие подходы не попадут в историю. Завершённые раньше тренировки сохранятся.</p><div class="dialog-actions"><button class="btn secondary" data-action="close">Продолжить</button><button class="btn danger" data-action="confirm-discard">Отменить</button></div>`);break;case'confirm-discard':{const previous=state.active;state.active=null;if(!save()){state.active=previous;closeDialog();render();break;}closeDialog();go('today');break;}}});
document.addEventListener('input',event=>{const t=event.target;if(t.matches('[data-set]')&&state.active){const s=state.active.exercises[state.active.index].log[Number(t.dataset.set)];let value=t.value===''?'':Number(t.value);if(value!==''&&(!Number.isFinite(value)||value<0||value>(t.dataset.field==='weight'?2000:1000)||(t.dataset.field==='reps'&&!Number.isInteger(value))))return;if(t.dataset.field==='reps'&&value==='')value=0;s[t.dataset.field]=value;save();}});
document.addEventListener('change',event=>{if(event.target.id==='exercise-jump'&&state.active){state.active.index=Number(event.target.value);save();render();$('#exercise-jump').focus();}if(event.target.id==='chart-select'){selectedExercise=event.target.value;render();}});
document.addEventListener('submit',event=>{if(event.target.id!=='exercise-form')return;event.preventDefault();saveExercise(event.target);});
$('#import-file').addEventListener('change',async event=>{const file=event.target.files[0];event.target.value='';if(!file)return;if(file.size>10*1024*1024){toast('Файл слишком большой. Максимум — 10 МБ.');return;}try{const data=JSON.parse(await file.text());if(!validData(data))throw Error('format');pendingImport=data;showDialog(`${dialogTop('Восстановить копию?')}<p class="dialog-copy">В копии ${data.history.length} тренировок. Текущая история и программа будут заменены. Сначала скачай свою копию, если хочешь сохранить текущие записи.</p><div class="dialog-actions"><button class="btn secondary" data-action="close">Назад</button><button class="btn" data-action="confirm-import">Восстановить</button></div>`);}catch(e){toast('Не удалось прочитать копию. Нужен JSON-файл из приложения «Подход».');}});
$('#dialog').addEventListener('click',event=>{if(event.target===$('#dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
window.addEventListener('hashchange',()=>{historyLimit=30;render();window.scrollTo(0,0);$('#app').focus({preventScroll:true});});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){tick();renderTimer();}});
const extras=[
 ['dbbench','Жим гантелей лёжа','Грудь'],['pushup','Отжимания','Грудь'],['crossover','Сведение рук в кроссовере','Грудь'],['machinepress','Жим в тренажёре','Грудь'],
 ['pullup','Подтягивания','Спина'],['assisted','Подтягивания в гравитроне','Спина'],['onearm','Тяга гантели одной рукой','Спина'],['straight','Пуловер на верхнем блоке','Спина'],
 ['goblet','Присед с гирей','Квадрицепсы'],['split','Болгарский сплит-присед','Квадрицепсы'],['lunge','Обратные выпады','Квадрицепсы'],['hipthrust','Ягодичный мост','Ягодицы'],['lyingcurl','Сгибание ног лёжа','Задняя поверхность бедра'],
 ['ohp','Жим гантелей сидя','Плечи'],['facepull','Тяга каната к лицу','Плечи'],['curl','Сгибание рук с гантелями','Бицепс'],['cablecurl','Сгибание рук на блоке','Бицепс'],['extension','Разгибание рук из-за головы','Трицепс'],['reversecrunch','Обратные скручивания','Пресс'],['seatedcalf','Подъём на носки сидя','Икры'],
 ["lib-chest-1", "Жим штанги на наклонной скамье", "Грудь"],
 ["lib-chest-2", "Разведение гантелей лёжа", "Грудь"],
 ["lib-chest-3", "Отжимания от опоры", "Грудь"],
 ["lib-chest-4", "Отжимания с ногами на возвышении", "Грудь"],
 ["lib-chest-5", "Жим гантелей с пола", "Грудь"],
 ["lib-chest-6", "Сведение рук на нижних блоках", "Грудь"],
 ["lib-chest-7", "Жим блина перед собой", "Грудь"],
 ["lib-chest-8", "Отжимания на кольцах", "Грудь"],
 ["lib-back-1", "Тяга штанги в наклоне", "Спина"],
 ["lib-back-2", "Тяга Т-грифа", "Спина"],
 ["lib-back-3", "Австралийские подтягивания", "Спина"],
 ["lib-back-4", "Тяга верхнего блока одной рукой", "Спина"],
 ["lib-back-5", "Тяга эспандера сидя", "Спина"],
 ["lib-back-6", "Подтягивания нейтральным хватом", "Спина"],
 ["lib-back-7", "Рычажная тяга с упором грудью", "Спина"],
 ["lib-back-8", "Тяга гири к поясу", "Спина"],
 ["lib-delt-1", "Жим штанги стоя", "Плечи"],
 ["lib-delt-2", "Жим Арнольда", "Плечи"],
 ["lib-delt-3", "Махи в стороны на нижнем блоке", "Плечи"],
 ["lib-delt-4", "Обратный баттерфляй", "Плечи"],
 ["lib-delt-5", "Подъём гантелей перед собой", "Плечи"],
 ["lib-delt-6", "Жим плечами в тренажёре", "Плечи"],
 ["lib-delt-7", "Махи в стороны с резинкой", "Плечи"],
 ["lib-delt-8", "Разведение рук с резинкой перед грудью", "Плечи"],
 ["lib-delt-9", "Жим гири одной рукой", "Плечи"],
 ["lib-delt-10", "Подъём рук буквой Y на наклонной скамье", "Плечи"],
 ["lib-delt-11", "Жим в лэндмайне одной рукой", "Плечи"],
 ["lib-bi-1", "Подъём штанги на бицепс стоя", "Бицепс"],
 ["lib-bi-2", "Сгибание рук на наклонной скамье", "Бицепс"],
 ["lib-bi-3", "Концентрированный подъём гантели", "Бицепс"],
 ["lib-bi-4", "Подъём EZ-грифа стоя", "Бицепс"],
 ["lib-bi-5", "Паучьи сгибания", "Бицепс"],
 ["lib-bi-6", "Сгибания с резинкой", "Бицепс"],
 ["lib-bi-7", "Сгибания рук на верхних блоках", "Бицепс"],
 ["lib-bi-8", "Сгибания Зоттмана", "Бицепс"],
 ["lib-bi-9", "Подъём гантели на скамье Скотта", "Бицепс"],
 ["lib-bi-10", "Сгибания на нижнем блоке спиной к стойке", "Бицепс"],
 ["lib-bi-11", "Сгибания рук на кольцах", "Бицепс"],
 ["lib-tri-1", "Жим штанги узким хватом", "Трицепс"],
 ["lib-tri-2", "Узкие отжимания", "Трицепс"],
 ["lib-tri-3", "Разгибание руки с гантелью в наклоне", "Трицепс"],
 ["lib-tri-4", "Разгибание одной руки на верхнем блоке", "Трицепс"],
 ["lib-tri-5", "Французский жим с гантелями лёжа", "Трицепс"],
 ["lib-tri-6", "Разгибание рук с резинкой вниз", "Трицепс"],
 ["lib-tri-7", "Отжимания на брусьях", "Трицепс"],
 ["lib-tri-8", "Разгибание рук на петлях", "Трицепс"],
 ["lib-tri-9", "Жим вниз в тренажёре", "Трицепс"],
 ["lib-tri-10", "Разгибание рук на блоке с прямой рукоятью", "Трицепс"],
 ["lib-tri-11", "Разгибание рук с гантелью сидя", "Трицепс"],
 ["lib-tri-12", "Разгибание руки на блоке поперёк корпуса", "Трицепс"],
 ["lib-quad-1", "Фронтальный присед", "Квадрицепсы"],
 ["lib-quad-2", "Гакк-присед", "Квадрицепсы"],
 ["lib-quad-3", "Присед со штангой на спине", "Квадрицепсы"],
 ["lib-quad-4", "Выпады вперёд", "Квадрицепсы"],
 ["lib-quad-5", "Жим платформы одной ногой", "Квадрицепсы"],
 ["lib-quad-6", "Присед в машине Смита", "Квадрицепсы"],
 ["lib-quad-7", "Зашагивания на тумбу", "Квадрицепсы"],
 ["lib-quad-8", "Присед с поясом", "Квадрицепсы"],
 ["lib-quad-9", "Испанский присед с лентой", "Квадрицепсы"],
 ["lib-quad-10", "Присед в маятниковом тренажёре", "Квадрицепсы"],
 ["lib-glute-1", "Подъём таза со штангой с опорой на скамью", "Ягодицы"],
 ["lib-glute-2", "Ягодичный мост на одной ноге", "Ягодицы"],
 ["lib-glute-3", "Отведение бедра в кроссовере назад", "Ягодицы"],
 ["lib-glute-4", "Разведение бёдер в тренажёре", "Ягодицы"],
 ["lib-glute-5", "Боковые шаги с лентой", "Ягодицы"],
 ["lib-glute-6", "Ракушка с резинкой", "Ягодицы"],
 ["lib-glute-7", "Отведение ноги лёжа на боку", "Ягодицы"],
 ["lib-glute-8", "Мах согнутой ногой на четвереньках", "Ягодицы"],
 ["lib-glute-9", "Тяга каната между ног", "Ягодицы"],
 ["lib-glute-10", "Ягодичный мост с разведением коленей", "Ягодицы"],
 ["lib-glute-11", "Обратная гиперэкстензия", "Ягодицы"],
 ["lib-glute-12", "Диагональные шаги с лентой", "Ягодицы"],
 ["lib-glute-13", "Разведение согнутых ног на четвереньках", "Ягодицы"],
 ["lib-glute-14", "Ягодичный мост с подошвами вместе", "Ягодицы"],
 ["lib-ham-1", "Румынская тяга на одной ноге", "Задняя поверхность бедра"],
 ["lib-ham-2", "Нордические сгибания с опорой", "Задняя поверхность бедра"],
 ["lib-ham-3", "Сгибания ног на фитболе", "Задняя поверхность бедра"],
 ["lib-ham-4", "Сгибания ног со слайдерами", "Задняя поверхность бедра"],
 ["lib-ham-5", "Сгибание ноги стоя в тренажёре", "Задняя поверхность бедра"],
 ["lib-ham-6", "Наклоны со штангой на плечах", "Задняя поверхность бедра"],
 ["lib-ham-7", "Румынская тяга с гантелями", "Задняя поверхность бедра"],
 ["lib-ham-8", "Сгибание ноги с резинкой лёжа", "Задняя поверхность бедра"],
 ["lib-ham-9", "Сгибание ноги в нижнем блоке", "Задняя поверхность бедра"],
 ["lib-ham-10", "Наклоны с резинкой на плечах", "Задняя поверхность бедра"],
 ["lib-ham-11", "Шаги пятками из ягодичного моста", "Задняя поверхность бедра"],
 ["lib-ham-12", "Сгибание ног в подвесных петлях", "Задняя поверхность бедра"],
 ["lib-calf-1", "Подъём на носок одной ноги", "Икры"],
 ["lib-calf-2", "Подъём на носки в машине Смита", "Икры"],
 ["lib-calf-3", "Жим носками в тренажёре для ног", "Икры"],
 ["lib-calf-4", "Подъём на носки стоя в тренажёре", "Икры"],
 ["lib-calf-5", "Подъём на носки с гантелями", "Икры"],
 ["lib-calf-6", "Подъём на носки в наклоне", "Икры"],
 ["lib-calf-7", "Жим носком одной ноги на платформе", "Икры"],
 ["lib-calf-8", "Подъём на носок сидя с гантелью", "Икры"],
 ["lib-calf-9", "Подъём на носки на ступени", "Икры"],
 ["lib-calf-10", "Подъём на носки в гакк-тренажёре", "Икры"],
 ["lib-calf-11", "Разгибание стопы с резинкой сидя", "Икры"],
 ["lib-calf-12", "Подъём пяток в полуприседе", "Икры"],
 ["lib-calf-13", "Эксцентрическое опускание пятки на ступени", "Икры"],
 ["lib-core-1", "Скручивания на полу", "Пресс"],
 ["lib-core-2", "Подъём коленей в висе", "Пресс"],
 ["lib-core-3", "Скручивания на верхнем блоке", "Пресс"],
 ["lib-core-4", "Велосипед лёжа", "Пресс"],
 ["lib-core-5", "Мёртвый жук", "Пресс"],
 ["lib-core-6", "Выкаты с роликом", "Пресс"],
 ["lib-core-7", "Подъём таза в боковой планке", "Пресс"],
 ["lib-core-8", "Жим Паллофа", "Пресс"],
 ["lib-core-9", "Скручивания на фитболе", "Пресс"],
 ["lib-core-10", "Подтягивание коленей на петлях", "Пресс"],
 ["lib-core-11", "Складка лёжа", "Пресс"],
 ["lib-core-12", "Косые скручивания", "Пресс"],
 ["lib-core-13", "Попеременное касание пяток лёжа", "Пресс"]
].map(([id,name,group])=>EX(id,name,group,3,8,12,90,''));
const button=(action,label,extra='')=>`<button type="button" class="btn secondary small" data-tool="${action}" ${extra}>${label}</button>`;
const activeExercise=()=>state.active?.exercises[state.active.index];
function library(){
  const items=[...extras,...DEFAULT.flatMap(d=>d.exercises),...state.program.flatMap(d=>d.exercises)];
  return [...new Map(items.map(e=>[e.id,e])).values()];
}
function libraryDialog(){
  const replace=page()==='workout', current=activeExercise();
  const used=(replace?state.active.exercises:state.program[selectedDay].exercises).map(e=>e.id);
  const items=library().filter(e=>!used.includes(e.id));
  if(replace)items.sort((a,b)=>Number(b.group===current.group)-Number(a.group===current.group));
  const groups=new Map();
  for(const e of items){
    if(!groups.has(e.group))groups.set(e.group,[]);
    groups.get(e.group).push(e);
  }
  showDialog(dialogTop(replace?'Заменить на сегодня':'Библиотека упражнений')+
    '<label>Название или группа мышц<input id="library-search" type="search" class="full-input"></label>'+
    [...groups].map(([group,entries])=>`<details class="library-group" ${replace&&group===current.group?'open':''}><summary>${esc(group)} <small>${entries.length}</small></summary>${entries.map(e=>`<button class="exercise-row" data-tool="choose" data-id="${esc(e.id)}"><span class="exercise-info"><b>${esc(e.name)}</b></span>${icon('plus')}</button>`).join('')}</details>`).join('')+
    '<p id="no-match" ' + (items.length?'hidden':'') + '>Упражнений не найдено.</p>');
}
function choose(id){
  const e=clone(library().find(x=>x.id===id));
  delete e.partner;
  if(page()==='workout'){
    const a=state.active, old=activeExercise();
    if(old.log.some(s=>s.done))return toast('Замена доступна до первого выполненного подхода.');
    const last=lastExercise(id)?.log.filter(s=>s.done)||[];
    e.log=Array.from({length:e.sets},(_,i)=>({weight:last[i]?.weight??'',reps:last[i]?.reps??e.min,done:false}));
    const mate=a.exercises.find(x=>x.partner===old.id);
    if(mate){mate.partner=e.id;e.partner=mate.id;}
    a.exercises[a.index]=e;
  }else{
    const day=state.program[selectedDay];
    if(day.exercises.length>=30)return;
    day.exercises.push(e);updateDayDuration(day);
  }
  save();closeDialog();render();
}
function orderDialog(){
  const list=state.program[selectedDay].exercises;
  showDialog(dialogTop('Порядок и суперсеты')+list.map((e,i)=>`<section class="order-row"><strong>${i+1}. ${esc(e.name)}</strong><div class="tool-row">${button('up','↑ Выше',`data-i="${i}" ${i?'':'disabled'}`)}${button('down','↓ Ниже',`data-i="${i}" ${i+1<list.length?'':'disabled'}`)}</div><label>Суперсет<select class="full-input" data-pair="${i}"><option value="">Без пары</option>${list.filter(x=>x!==e&&(!x.partner||x.partner===e.id)).map(x=>`<option value="${esc(x.id)}" ${e.partner===x.id?'selected':''}>${esc(x.name)}</option>`).join('')}</select></label></section>`).join('')+'<button class="btn full" data-action="close">Готово</button>');
}
function pastSets(id){
  return state.history.flatMap(s=>s.exercises.filter(e=>e.id===id).flatMap(e=>e.log.filter(l=>l.done)));
}
function logDialog(){
  const id=page()==='workout'?activeExercise().id:selectedExercise;
  const rows=state.history.slice().reverse().flatMap(s=>s.exercises.filter(e=>e.id===id&&e.log.some(l=>l.done)).map(e=>`<div class="order-row"><b>${dateLabel(s.end,{day:'numeric',month:'long',year:'numeric'})}</b><p>${e.log.filter(l=>l.done).map(l=>fmt(l.weight)+' кг × '+l.reps).join(' · ')}</p></div>`));
  showDialog(dialogTop('История упражнения')+(rows.join('')||'<p>Пока нет завершённых тренировок с этим упражнением.</p>'));
}
function goalDialog(){
  const catalog=new Map([...library(),...state.history.flatMap(s=>s.exercises)].map(e=>[e.id,e]));
  showDialog(dialogTop('Цель упражнения')+`<form id="goal-form"><label>Упражнение<select class="full-input" name="exercise">${[...catalog.values()].map(e=>`<option value="${esc(e.id)}" ${e.id===selectedExercise?'selected':''}>${esc(e.name)}</option>`).join('')}</select></label><label>Вес, кг<input class="full-input" name="weight" type="number" min="0" max="2000" step="any" required></label><label>Повторы<input class="full-input" name="reps" type="number" min="1" max="1000" required></label><p id="goal-result"></p><button class="btn full">Сохранить цель</button></form>`);
  fillGoal();
}
function goalSummary(){
  const g=state.goals?.find(x=>x.id===selectedExercise);
  if(!g)return '';
  const best=pastSets(g.id).reduce((n,s)=>s.weight>=g.weight?Math.max(n,s.reps):n,0);
  return `<p class="hint-text">Цель: ${fmt(g.weight)} кг × ${g.reps}. Лучший результат с этим весом или больше: ${best} повт.</p>`;
}
function fillGoal(){
  const f=$('#goal-form'),id=f.exercise.value,g=state.goals?.find(g=>g.id===id);
  f.weight.value=g?.weight??0;f.reps.value=g?.reps??8;goalResult();
}
function goalResult(){
  const f=$('#goal-form'),best=pastSets(f.exercise.value).reduce((n,s)=>s.weight>=Number(f.weight.value)?Math.max(n,s.reps):n,0);
  $('#goal-result').textContent=`Лучший результат с этим весом или больше: ${best} из ${f.reps.value} повторов.`;
}
function platesDialog(){
  const kit=state.plates||{bar:20,sizes:[25,20,15,10,5,2.5,1.25]};
  showDialog(dialogTop('Калькулятор блинов')+`<form id="plates-form"><label>Общий вес, кг<input name="target" class="full-input" type="number" min="0" max="2000" step=".01" required value="${activeExercise().log.find(s=>!s.done)?.weight||60}"></label><label>Вес грифа, кг<input name="bar" class="full-input" type="number" min="0" max="100" step=".01" required value="${kit.bar}"></label><label>Доступные номиналы через пробел, кг<input class="full-input" required name="sizes" value="${kit.sizes.join(' ')}"></label><button class="btn full">Рассчитать</button><p role="status" id="plates-result"></p></form>`);
}
function platesResult(f){
  const sizes=[...new Set(f.sizes.value.trim().split(/\s+/).map(x=>Number(x.replace(',','.'))))].sort((a,b)=>b-a);
  const result=$('#plates-result'),target=Math.round((Number(f.target.value)-Number(f.bar.value))*100);
  if(sizes.length>32||sizes.some(x=>!Number.isFinite(x)||x<.01||x>100||Math.abs(x*100-Math.round(x*100))>.00001)){result.textContent='Проверь номиналы: от 0,01 до 100 кг.';return;}
  state.plates={bar:Number(f.bar.value),sizes};save();
  if(target<0||target%2){result.textContent='Такой вес собрать нельзя.';return;}
  const half=target/2, paths=new Int32Array(half+1),counts=new Uint32Array(half+1);
  counts.fill(100001);counts[0]=0;
  for(const size of sizes){const w=Math.round(size*100);for(let i=w;i<=half;i++)if(counts[i-w]+1<counts[i]){counts[i]=counts[i-w]+1;paths[i]=w;}}
  if(half&&!paths[half]){result.textContent='Точный вес из этих блинов не собрать.';return;}
  const parts=new Map();for(let n=half;n>0;n-=paths[n])parts.set(paths[n],(parts.get(paths[n])||0)+1);
  result.textContent=half?'На каждую сторону: '+[...parts].sort((a,b)=>b[0]-a[0]).map(([w,n])=>fmt(w/100)+' кг × '+n).join(' + '):'Только гриф.';
}
let lock=null,requesting=false;
async function syncScreen(){
  const needed=()=>state.awake&&state.active&&page()==='workout'&&document.visibilityState==='visible';
  if(!needed()){if(lock)await lock.release().catch(()=>{});return;}
  if(lock||requesting||!navigator.wakeLock)return;
  requesting=true;
  try{const acquired=await navigator.wakeLock.request('screen');lock=acquired;acquired.addEventListener('release',()=>{if(lock===acquired)lock=null;});if(!needed())await acquired.release();}
  catch{toast('Браузер не разрешил удерживать экран включённым.');}
  finally{requesting=false;}
}
document.addEventListener('visibilitychange',syncScreen);
document.addEventListener('input',ev=>{
  if(ev.target.id==='library-search'){
    const normalize=value=>value.toLocaleLowerCase('ru').replaceAll('ё','е').trim();
    const q=normalize(ev.target.value);
    let found=false;
    for(const group of document.querySelectorAll('.library-group')){
      const groupMatch=normalize(group.querySelector('summary').firstChild.textContent).includes(q);
      const rows=[...group.querySelectorAll('[data-tool="choose"]')];
      rows.forEach(row=>row.hidden=!(groupMatch||normalize(row.textContent).includes(q)));
      const visible=rows.filter(row=>!row.hidden).length;
      group.hidden=!visible;
      if(q){if(group.dataset.before===undefined)group.dataset.before=String(group.open);group.open=!!visible;}
      else if(group.dataset.before!==undefined){group.open=group.dataset.before==='true';delete group.dataset.before;}
      group.querySelector('small').textContent=visible;
      found||=!!visible;
    }
    $('#no-match').hidden=found;
  }
  if(ev.target.closest('#goal-form')&&ev.target.name!=='exercise')goalResult();
});
document.addEventListener('change',ev=>{
  if(ev.target.matches('#goal-form select'))fillGoal();
  if(ev.target.matches('[data-pair]')){
    const list=state.program[selectedDay].exercises,e=list[Number(ev.target.dataset.pair)];
    for(const x of list)if(x.partner===e.id)delete x.partner;
    delete e.partner;
    const mate=list.find(x=>x.id===ev.target.value);
    if(mate){e.partner=mate.id;mate.partner=e.id;}save();render();orderDialog();
  }
});
document.addEventListener('submit',ev=>{
  const f=ev.target;
  if(f.id==='rename-training-form'){
    ev.preventDefault();
    const input=f.elements.title,name=input.value.trim();
    if(!name){input.value='';input.required=true;input.reportValidity();return;}
    const day=state.program[selectedDay],previous={...day};
    day.title=name;day.short=name;
    if(!save()){Object.assign(day,previous);closeDialog();render();return;}
    closeDialog();render();toast('Название сохранено.');
  }
  if(f.id==='new-training-form'){
    ev.preventDefault();
    const number=state.program.length+1, name=f.elements.title.value.trim();
    state.program.push({id:'training-'+number,title:name||'Тренировка '+number,short:name,subtitle:'',minutes:'0',icon:'dumbbell',exercises:[]});
    if(!save()){state.program.pop();closeDialog();render();return;}
    selectedDay=number-1;closeDialog();render();toast('Тренировка создана. Добавь первое упражнение.');
  }
  if(f.id==='plates-form'){ev.preventDefault();platesResult(f);}
  if(f.id==='goal-form'){ev.preventDefault();const id=f.exercise.value;state.goals=(state.goals||[]).filter(g=>g.id!==id);state.goals.push({id,weight:Number(f.weight.value),reps:Number(f.reps.value)});if(save()){closeDialog();render();toast('Цель сохранена.');}}
});
document.addEventListener('click',ev=>{
  const b=ev.target.closest('[data-tool]');if(!b)return;
  const list=state.program[selectedDay].exercises;
  switch(b.dataset.tool){
    case 'rename-training':
    case 'new-training':{
      const rename=b.dataset.tool==='rename-training';
      const title=rename?state.program[selectedDay].title:'';
      showDialog(dialogTop(rename?'Переименовать тренировку':'Добавить тренировку')+`<form id="${rename?'rename-training-form':'new-training-form'}"><label>Название<input class="full-input" name="title" maxlength="100" value="${esc(title)}" placeholder="Например, Верх тела" autofocus></label><button class="btn full">${rename?'Сохранить название':'Создать тренировку'}</button></form>`);
      break;
    }
    case 'library':libraryDialog();break;
    case 'choose':choose(b.dataset.id);break;
    case 'order':orderDialog();break;
    case 'up':case 'down':{
      const i=Number(b.dataset.i),j=i+(b.dataset.tool==='up'?-1:1);
      if(j<0||j>=list.length)return;
      [list[i],list[j]]=[list[j],list[i]];save();render();orderDialog();break;
    }
    case 'extra':{const e=activeExercise();if(e.log.length>=10)return;e.log.push({...e.log[e.log.length-1],done:false});e.sets=e.log.length;save();render();break;}
    case 'logs':logDialog();break;
    case 'goal':goalDialog();break;
    case 'plates':platesDialog();break;
    case 'awake':state.awake=!state.awake;save();render();break;
  }
});

setInterval(tick,1000);
render();
if('serviceWorker' in navigator&&window.isSecureContext){navigator.serviceWorker.register('./sw.js').catch(()=>{});}
