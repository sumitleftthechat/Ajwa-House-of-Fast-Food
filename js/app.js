document.addEventListener("load",e=>{if(e.target.tagName==="IMG")e.target.classList.add("ld")},true);
/* ========== APP ========== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const L=restaurant,hues=[["#3a2c24","#171412"],["#f98a5c","#F45D22"],["#756D67","#3a2c24"],["#F45D22","#8f3412"]];
const col=i=>{const h=hues[i%hues.length];return`--c1:${h[0]};--c2:${h[1]}`};
const priceTxt=m=>m.price==null?'<span class="price na">See price on platform</span>':`<span class="price">₹${m.price}${m.sizes?'<small style="font:500 12px var(--ui);color:var(--soft)"> onwards</small>':''}</span>`;
function setLink(el,url){if(url){el.href=url;el.classList.remove("off");el.removeAttribute("aria-disabled")}else{el.removeAttribute("href");el.classList.add("off");el.setAttribute("aria-disabled","true");el.title="Link not added yet"}}
$$("[data-p]").forEach(a=>setLink(a,L[a.dataset.p]));
$$("[data-l]").forEach(a=>setLink(a,L[a.dataset.l]));
setLink($("#dir"),L.googleMaps);
$("#yr").textContent=new Date().getFullYear();
/* ===== MOTION (respects reduced-motion; pointer effects only on mouse devices) ===== */
const SM=matchMedia("(max-width:899px)").matches,RM=matchMedia("(prefers-reduced-motion:reduce)").matches,FINE=matchMedia("(hover:hover) and (pointer:fine)").matches;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;io.unobserve(t);t.classList.add("on");if(t.classList.contains("card"))setTimeout(()=>t.classList.remove("rv","on"),1200)}),{rootMargin:"0px 0px -6% 0px",threshold:.1});
function reveal(){$$(".rv:not(.on)").forEach(e=>RM?e.classList.add("on"):io.observe(e))}
function tagRv(){["section .sec-h","#cx > *",".pg .wrap > *","#cc button",".story .wrap > *","#why > div",".loc > *",".facts span","#hrs tr",".ig .wrap > *",".hungry .wrap > *",".gal button","footer .wrap > *"].forEach(sel=>$$(sel).forEach((e,i)=>{e.classList.add("rv");e.style.setProperty("--d",Math.min(i,SM?3:8)*(SM?50:70)+"ms")}));
 $("#mqt").innerHTML=("Pizza|Burgers|Sandwiches|Rolls|Shawarma|Chaat|Fries|Sweets|Cold drinks".split("|").map(w=>`<span>${w}</span><i>✦</i>`).join("")).repeat(4)}
function pageIn(){$$("[data-page]:not([hidden])").forEach(e=>{e.classList.remove("pgin");void e.offsetWidth;e.classList.add("pgin")});$$("[data-page]:not([hidden]) .rv.on").forEach(e=>e.classList.remove("on"));reveal()}
(function(){if(RM)return;const pr=$("#prog"),pl=$(".plate");let t=0;
 addEventListener("scroll",()=>{if(t)return;t=requestAnimationFrame(()=>{t=0;const h=document.documentElement;pr.style.transform=`scaleX(${Math.min(1,scrollY/Math.max(1,h.scrollHeight-innerHeight))})`;pl.style.setProperty("--py",Math.min(scrollY,700)*(FINE?-.07:-.03)+"px")})},{passive:true});
 document.addEventListener("pointerdown",e=>{const b=e.target.closest&&e.target.closest(".btn,.chip");if(!b)return;const r=b.getBoundingClientRect(),z=Math.max(r.width,r.height)*2,d=document.createElement("span");d.className="rp";d.style.cssText=`width:${z}px;height:${z}px;left:${e.clientX-r.left-z/2}px;top:${e.clientY-r.top-z/2}px`;b.append(d);setTimeout(()=>d.remove(),700)});
 if(!FINE)return;
 $(".hero").addEventListener("pointermove",e=>{const r=e.currentTarget.getBoundingClientRect();pl.style.setProperty("--px",((e.clientX-r.left)/r.width-.5)*-26+"px");pl.style.setProperty("--pt",((e.clientY-r.top)/r.height-.5)*-14+"px");pl.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*14+"deg");pl.style.setProperty("--rx",((e.clientY-r.top)/r.height-.5)*-10+"deg")});
 $(".hero").addEventListener("pointerleave",()=>{["--px","--pt","--rx","--ry"].forEach(k=>pl.style.removeProperty(k))});
 document.addEventListener("pointermove",e=>{const el=e.target.closest&&e.target.closest(".card,.hero .btn,.hungry .btn");if(!el)return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  if(el.classList.contains("card"))el.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*6}deg) translateY(-4px)`;else el.style.translate=`${x*12}px ${y*8}px`});
 $("#cc").addEventListener("pointermove",e=>{const t=e.target.closest("button");if(!t)return;const r=t.getBoundingClientRect();t.style.setProperty("--mx",((e.clientX-r.left)/r.width-.5)*14+"px");t.style.setProperty("--my",((e.clientY-r.top)/r.height-.4)*10+"px")});
 $("#cc").addEventListener("pointerout",e=>{const t=e.target.closest("button");if(t&&!t.contains(e.relatedTarget)){t.style.setProperty("--mx","0px");t.style.setProperty("--my","0px")}});
 document.addEventListener("pointerout",e=>{const el=e.target.closest&&e.target.closest(".card,.hero .btn,.hungry .btn");if(el&&!el.contains(e.relatedTarget)){el.style.transform="";el.style.translate=""}});
})();
if(!RM){const eb=$("#emb");for(let i=0;i<16;i++){const q=document.createElement("s");q.style.cssText=`--l:${12+(i*53%76)}%;--z:${3+(i*7%4)}px;--t:${4.5+(i*13%30)/10}s;--d:${(i*0.55)%5}s;--dx:${(i%2?1:-1)*(20+(i*17%60))}px`;eb.append(q)}}
/* real photos: hero, about, CTA, credits */
document.querySelectorAll("[data-ph]").forEach(i=>{const k=i.dataset.ph,big=k==="hero";i.src=imgUrl(k,big?900:1200);i.srcset=imgSet(k);i.sizes=big?"(min-width:900px) 520px,90vw":"(min-width:900px) 560px,92vw";if(k!=="cta")i.alt=PH[k].alt;if(!big)i.classList.add("fx");i.onerror=()=>imgFail(i)});
(function(){const used=[...new Set(["hero","about","cta",...GALLERY,...Object.values(PHOTO_BY_CATEGORY),...Object.values(PHOTO_BY_ITEM),...Object.values(PHOTO_FOR_TILE)])];
 const who={};used.filter(k=>!PH[k].own).forEach(k=>{(who[PH[k].by]=who[PH[k].by]||[]).push(k)});
 $("#credits").innerHTML="Photos by "+Object.entries(who).map(([n,ks])=>`<a href="https://unsplash.com/photos/${PH[ks[0]].page}${UTM}" target="_blank" rel="noopener">${n}</a>`).join(", ")+' on <a href="https://unsplash.com/'+UTM+'" target="_blank" rel="noopener">Unsplash</a>. Food photos are illustrative and may not show Ajwa\'s exact dishes.'})();
/* dialogs: animated close, swipe-down to close (phones), order-chooser artwork */
function closeDlg(d){if(!d||!d.open)return;if(RM){d.close();return}d.classList.add("closing");setTimeout(()=>{d.close();d.classList.remove("closing")},250)}
document.querySelectorAll("dialog:not(.lb)").forEach(d=>{let y0=null,dy=0;
 d.addEventListener("pointerdown",e=>{if(!e.target.closest(".grab")||!matchMedia("(max-width:560px)").matches)return;y0=e.clientY;dy=0;d.style.transition="none";d.setPointerCapture(e.pointerId)});
 d.addEventListener("pointermove",e=>{if(y0===null)return;dy=Math.max(0,e.clientY-y0);d.style.transform=`translateY(${dy}px)`});
 const end=()=>{if(y0===null)return;y0=null;d.style.transition="";d.style.transform="";if(dy>110)closeDlg(d)};
 d.addEventListener("pointerup",end);d.addEventListener("pointercancel",end)});
(function(){const a=$("#oda");if(!a)return;const ks=["burger","chickenpizza","fries"],em=["\u{1F354}","\u{1F355}","\u{1F35F}"];
 a.innerHTML='<i class="g"></i>'+ks.map((k,i)=>typeof PH!=="undefined"&&PH[k]?`<img class="o${i}" alt="" src="${imgUrl(k,300)}" onerror="imgFail(this)">`:`<span class="o${i}">${em[i]}</span>`).join("")+(RM?"":Array.from({length:8},(_,i)=>`<s style="--l:${10+i*11}%;--d:${(i*.45)%3}s"></s>`).join(""))})();
/* categories */
let cat="All",term="",veg=null;
function setCat(c){cat=c;$$("#cats .chip").forEach(x=>{const on=x.textContent===c;x.setAttribute("aria-pressed",on);if(on)x.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"})});render()}
$("#cc").replaceChildren(...categories.map((c,i)=>{const b=document.createElement("button");b.style.setProperty("--i",i);b.innerHTML=`<b>${PHOTO_FOR_TILE[c]||PHOTO_BY_CATEGORY[c]?`<img class="tp fx" loading="lazy" decoding="async" alt="" src="${imgUrl(PHOTO_FOR_TILE[c]||PHOTO_BY_CATEGORY[c],300)}" onerror="imgFail(this)">`:`<span class="em">${catEmoji[c]}</span>`}<em>${menu.filter(m=>m.category===c).length}</em></b>${c}`;b.onclick=()=>{location.hash="#/menu?cat="+encodeURIComponent(c)};return b}));
$$("#vf .chip").forEach(b=>b.onclick=()=>{const v=b.dataset.v==="1";veg=veg===v?null:v;$$("#vf .chip").forEach(x=>x.setAttribute("aria-pressed",veg!==null&&(x.dataset.v==="1")===veg));render()});
/* craving explorer (desktop): hover or focus a category to preview it */
(function(){const list=$("#cxl"),st=$("#cxs"),root=$("#cx");let cur=-1,hov=false,vis=false;
 const info=categories.map(c=>{const it=menu.filter(m=>m.category===c);return{c,ph:PHOTO_FOR_TILE[c]||PHOTO_BY_CATEGORY[c]||"",n:it.length,min:Math.min(...it.map(m=>m.price)),top:it.slice(0,4),e:catEmoji[c]}});
 list.innerHTML=info.map((o,i)=>`<button data-i="${i}"><span class="ix">${String(i+1).padStart(2,"0")}</span><span class="nm">${o.c}</span><span class="ct">${o.n}</span><span class="ar">→</span></button>`).join("");
 function show(i){if(i===cur)return;cur=i;const o=info[i];$$("#cxl button").forEach((b,j)=>b.classList.toggle("on",j===i));
  st.innerHTML=`<div class="cx-glow"></div><div class="cx-num">${String(i+1).padStart(2,"0")}</div><div class="cx-em">${o.ph?`<img alt="${PH[o.ph].alt}" src="${imgUrl(o.ph,600)}" onerror="imgFail(this)">`:`<span>${o.e}</span>`}</div><div class="cx-info"><h3>${o.c}</h3><p>${o.n} dishes · from ₹${o.min}</p><ul>${o.top.map(m=>`<li><span>${m.name}</span><b>₹${m.price}${m.sizes?"+":""}</b></li>`).join("")}</ul><a class="btn btn-cta" href="#/menu?cat=${encodeURIComponent(o.c)}">Explore this category</a></div>`}
 list.addEventListener("mouseover",e=>{const b=e.target.closest("button");if(b)show(+b.dataset.i)});
 list.addEventListener("focusin",e=>{const b=e.target.closest("button");if(b)show(+b.dataset.i)});
 let wasOn=false;list.addEventListener("pointerdown",e=>{const b=e.target.closest("button");wasOn=!!(b&&b.classList.contains("on"))});
 list.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(!FINE&&!wasOn){show(+b.dataset.i);return}location.hash="#/menu?cat="+encodeURIComponent(info[+b.dataset.i].c)});
 root.addEventListener("mouseenter",()=>hov=true);root.addEventListener("mouseleave",()=>hov=false);root.addEventListener("focusin",()=>hov=true);root.addEventListener("focusout",()=>hov=false);
 if(FINE&&!RM)st.addEventListener("pointermove",e=>{const r=st.getBoundingClientRect();st.style.setProperty("--sx",(e.clientX-r.left)/r.width-.5);st.style.setProperty("--sy",(e.clientY-r.top)/r.height-.5)});
 show(0);
 if(!RM){new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(root);setInterval(()=>{if(vis&&!hov&&!document.hidden)show((cur+1)%info.length)},3800)}
})();
const catEl=$("#cats");
["All",...categories].forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c==="All");b.onclick=()=>setCat(c);catEl.append(b)});
/* cards */
function card(m,i){const d=document.createElement("article");d.className="card rv";d.style.setProperty("--d",Math.min(i,SM?3:8)*(SM?40:55)+"ms");
 d.innerHTML=`<button class="ph skel" style="${col(i)}" aria-label="View ${m.name}">${m.popular||m.isNew?'<span class="badge" style="position:absolute;transform:none">'+(m.isNew?'New':'★ Popular')+'</span>':''}<span>${m.e||"🍽️"}</span>${m.photo?'':'<em class="sample">Placeholder</em>'}</button>
 <div class="cb"><h3><i class="vm ${m.vegetarian?"":"nv"}" role="img" aria-label="${m.vegetarian?"Vegetarian":"Non-vegetarian"}"></i>${m.name}</h3><p>${m.description}</p>
 <div class="row">${priceTxt(m)}<span style="display:flex;gap:6px"><button class="btn btn-ghost" data-view="${m.id}">View</button></span></div></div>`;
 const ph=d.querySelector(".ph");ph.classList.remove("skel");
 if(m.photo){ph.style.background=PH[m.photo].c;const im=new Image();im.className="fx";im.loading="lazy";im.decoding="async";im.alt=m.name+": "+PH[m.photo].alt;im.src=imgUrl(m.photo,800);im.srcset=imgSet(m.photo);im.sizes="(min-width:960px) 380px,(min-width:560px) 45vw,92vw";im.style.cssText="position:absolute;inset:0;width:100%;height:100%;object-fit:cover";im.onerror=()=>imgFail(im);ph.append(im)}
 ph.onclick=()=>openFood(m.id);return d}
const ph=(el,list)=>{el.replaceChildren(...list.map(card))};
function render(){const t=term.trim().toLowerCase();
 const list=menu.filter(m=>(cat==="All"||m.category===cat)&&(veg===null||m.vegetarian===veg)&&(!t||(m.name+" "+m.description+" "+m.category).toLowerCase().includes(t)));
 ph($("#grid"),list);$("#empty").hidden=list.length>0;$("#count").textContent=list.length+(list.length===1?" item":" items");reveal();}
$("#q").addEventListener("input",e=>{term=e.target.value;render()});
ph($("#popular"),menu.filter(m=>m.popular));render();
/* dialogs */
function openFood(id){const m=menu.find(x=>x.id===id),i=menu.indexOf(m);
 $("#fdb").innerHTML=`<div class="ph" style="${col(i)};aspect-ratio:16/10;cursor:default">${m.popular||m.isNew?'<span class="badge">'+(m.isNew?'New':'★ Popular')+'</span>':''}<span style="font-size:110px">${m.e||"🍽️"}</span>${m.photo?`<img src="${imgUrl(m.photo,1000)}" srcset="${imgSet(m.photo)}" sizes="(min-width:560px) 520px,100vw" alt="${m.name}: ${PH[m.photo].alt}" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="imgFail(this)">`:''}</div>
 <div class="dh"><span class="fine" style="text-align:left;display:flex;gap:8px;align-items:center"><i class="vm ${m.vegetarian?"":"nv"}"></i>${m.vegetarian?"Vegetarian":"Non-vegetarian"} · ${m.category}</span>
 <h2 id="fdt">${m.name}</h2>${priceTxt(m)}${m.sizes?'<table class="hours">'+m.sizes.map(x=>`<tr><td>${x[0]}</td><td style="color:var(--ajwa-orange);font-weight:700">₹${x[1]}</td></tr>`).join("")+'</table>':''}<p>${m.description}</p>
 <h3 style="font-size:18px;margin-top:18px">Order from</h3><div class="platforms"><a class="btn pf sw" data-p="crisfood" target="_blank" rel="noopener">Crisfood</a></div></div>`;
 $$("#fdb [data-p]").forEach(a=>setLink(a,(itemLinks[m.name]||{})[a.dataset.p]||L[a.dataset.p]));$("#fd").showModal()}
document.addEventListener("click",e=>{
 const o=e.target.closest("[data-order]");if(o){const f=o.closest("dialog");if(f&&f.id==="fd")f.close();$("#od").showModal();return}
 const v=e.target.closest("[data-view]");if(v){openFood(v.dataset.view);return}
 if(e.target.closest("[data-close]"))closeDlg(e.target.closest("dialog"));
 if(e.target.tagName==="DIALOG")closeDlg(e.target)});
$$("#od [data-p]").forEach(a=>setLink(a,L[a.dataset.p]));
/* why + gallery */
$("#why").innerHTML=L.why.map(w=>`<div>${w}</div>`).join("");
$("#gal").innerHTML=GALLERY.map((k,i)=>`<button style="background:${PH[k].c}" aria-label="Open photo: ${PH[k].alt}" data-g="${k}"><img class="fx" loading="lazy" decoding="async" alt="${PH[k].alt}" src="${imgUrl(k,800)}" srcset="${imgSet(k)}" sizes="(min-width:900px) 360px,72vw" onerror="imgFail(this)"></button>`).join("");
$("#gal").addEventListener("click",e=>{const b=e.target.closest("[data-g]");if(!b)return;const k=b.dataset.g;$("#lbb").style.cssText="";$("#lbb").innerHTML=`<img src="${imgUrl(k,1400)}" alt="${PH[k].alt}" style="width:100%;height:100%;object-fit:cover;border-radius:22px">`;$("#lb").showModal()});
/* instagram, contact, hours, map */
$("#igh").textContent=L.instagram?"@ajwa_fastfood":"Instagram handle not added yet.";setLink($("#igl"),L.instagram);
const days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
$("#hrs").innerHTML=days.map(d=>`<tr><td>${d[0].toUpperCase()+d.slice(1)}</td><td>${L.openingHours[d]||"Hours coming soon"}</td></tr>`).join("");
const ct=$("#contact");[["Call",L.phone&&"tel:"+L.phone],["WhatsApp",L.whatsapp&&"https://wa.me/"+L.whatsapp],["Instagram",L.instagram],["Google Maps",L.googleMaps]].forEach(([t,u])=>{const a=document.createElement("a");a.className="btn btn-ghost";a.textContent=t;if(u&&t!=="Call")a.target="_blank",a.rel="noopener";setLink(a,u);ct.append(a)});
if(!L.googleMapsEmbed&&L.googleMaps){const R="M-10 300C50 280 100 250 160 228S212 205 220 180",mb=$("#map");mb.classList.add("live");
 mb.innerHTML=`<div class="mp"><svg viewBox="0 0 400 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
 <rect class="bk" x="100" y="90" width="80" height="60" rx="8"/><rect class="bk" x="215" y="215" width="80" height="55" rx="8"/><rect class="bk" x="20" y="195" width="55" height="70" rx="8"/><rect class="bk" x="320" y="60" width="70" height="90" rx="8"/>
 <path class="rd" stroke-width="14" d="M-10 80L410 60M-10 170L410 190M-10 280L410 250M-10 380L410 400"/><path class="rd" stroke-width="12" d="M70 -10L90 450M190 -10L170 450M300 -10L330 450"/><path class="rd" stroke-width="5" d="M-10 125L410 125M-10 330L410 320M130 -10L125 450M250 -10L240 450"/>
 <path d="${R}" pathLength="100" fill="none" stroke="#F45D22" stroke-opacity=".18" stroke-width="4" stroke-dasharray="2 4"/><path class="route" pathLength="100" d="${R}"/>
 ${RM?"":`<circle r="5" fill="#171412"><animateMotion dur="3.6s" begin="2.4s" repeatCount="indefinite" path="${R}"/></circle>`}
 <circle class="rip" style="--r:0" cx="220" cy="180" r="14"/><circle class="rip" style="--r:1" cx="220" cy="180" r="14"/><circle class="rip" style="--r:2" cx="220" cy="180" r="14"/>
 <g class="pin"><ellipse cx="220" cy="182" rx="14" ry="5" fill="rgba(23,20,18,.2)"/><path d="M220 180C205 157 196 145 196 131a24 24 0 1 1 48 0c0 14-9 26-24 49Z" fill="#F45D22"/><circle cx="220" cy="131" r="9" fill="#fff"/></g></svg>
 <div class="mp-card"><strong>Ajwa House of Fast Food</strong><span>Millat Nagar, Road Number 4, Bhiwandi</span><a class="btn btn-cta" href="${L.googleMaps}" target="_blank" rel="noopener">Open in Google Maps</a></div></div>`}
if(L.googleMapsEmbed)$("#map").innerHTML=`<iframe src="${L.googleMapsEmbed}" loading="lazy" title="Map to Ajwa House of Fast Food" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
setLink($("#fph"),L.phone&&"tel:"+L.phone);if(L.phone)$("#fph").textContent=L.phone.replace(/^\+91(\d{5})(\d{5})$/,"+91 $1 $2");
/* JSON-LD: only fields that exist */
const ld={"@context":"https://schema.org","@type":"Restaurant",name:L.name,address:{"@type":"PostalAddress",streetAddress:L.address.street,addressLocality:L.address.city,postalCode:L.address.postal,addressRegion:L.address.region,addressCountry:L.address.country}};
ld.priceRange="₹200-400";ld.openingHours="Mo-Su 11:00-23:00";if(L.phone)ld.telephone=L.phone;if(L.canonical)ld.url=L.canonical;
ld.geo={"@type":"GeoCoordinates",latitude:19.3137376,longitude:73.0724032};const same=[L.instagram,L.crisfood].filter(Boolean);if(same.length)ld.sameAs=same;
$("#ld").textContent=JSON.stringify(ld);
/* chrome */
const hd=$("#hd"),tb=$("#top-btn");
addEventListener("scroll",()=>{hd.classList.toggle("small",scrollY>40);tb.classList.toggle("show",scrollY>600)},{passive:true});
tb.onclick=()=>scrollTo({top:0});
const bg=$("#bg"),dr=$("#dr");bg.onclick=()=>{const o=dr.classList.toggle("open");bg.setAttribute("aria-expanded",o);bg.textContent=o?"✕":"☰"};
dr.addEventListener("click",e=>{if(e.target.tagName==="A"){dr.classList.remove("open");bg.textContent="☰"}});
const titles={home:"Ajwa House of Fast Food | Bhiwandi",menu:"Menu | Ajwa House of Fast Food",about:"About | Ajwa House of Fast Food",location:"Location | Ajwa House of Fast Food"};
function route(){const[h,qs]=location.hash.replace(/^#\/?/,"").split("?");const pg=titles[h]?h:"home";
 $$("[data-page]").forEach(e=>e.hidden=!e.dataset.page.split(" ").includes(pg));
 $$("header a[href^='#/']").forEach(a=>a.setAttribute("aria-current",a.getAttribute("href")==="#/"+(pg==="home"?"":pg)?"page":"false"));
 if(pg==="menu"){const c=new URLSearchParams(qs||"").get("cat");setCat(c&&categories.includes(c)?c:"All")}
 document.title=titles[pg];scrollTo(0,0);pageIn()}
tagRv();addEventListener("hashchange",route);route();
