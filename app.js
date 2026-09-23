const TG=window.Telegram?.WebApp;const GOGPT_URL="https://chat.gogpt.ru/i204283";
if(TG){TG.ready();TG.expand();try{TG.setHeaderColor("#07080d");TG.setBackgroundColor("#07080d")}catch(e){}}
function source(){return TG?.initDataUnsafe?.start_param||new URLSearchParams(location.search).get("tgWebAppStartParam")||new URLSearchParams(location.search).get("startapp")||"direct"}
const src=source();localStorage.setItem("ai_hub_source",src);
function go(){localStorage.setItem("ai_hub_click",JSON.stringify({source:src,time:new Date().toISOString()}));location.href=GOGPT_URL}
document.getElementById("heroCta").onclick=go;document.getElementById("bottomCta").onclick=go;
document.getElementById("share").onclick=()=>{const u=encodeURIComponent("https://t.me/AIHubRuBot?startapp=share");const t=encodeURIComponent("Попробуй AI HUB — нейросети для работы, учёбы и творчества 🤖");const x="https://t.me/share/url?url="+u+"&text="+t;if(TG?.openTelegramLink)TG.openTelegramLink(x);else window.open(x,"_blank")};
