:root{
  --pink: #ff8acb;
  --blue: #8fe7ff;
  --card-radius: 18px;
  --muted: rgba(255,255,255,0.7);
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;font-family: 'Space Grotesk', 'Montserrat', system-ui;padding:0}

body{
  background:
    radial-gradient(1000px 400px at 10% 10%, rgba(255,138,203,0.06), transparent 15%),
    radial-gradient(900px 400px at 90% 90%, rgba(143,231,255,0.05), transparent 15%),
    linear-gradient(180deg, #fff0f6 0%, #f0fbff 100%);
  color:#111;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:28px;
  min-height:100vh;
}

body::after{
  content:"";
  position:fixed; inset:0;
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.02), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  pointer-events:none;
  mix-blend-mode:overlay;
}

.container{
  width:100%;
  max-width:980px;
  display:grid;
  grid-template-columns:340px 1fr;
  gap:20px;
  align-items:stretch;
  height:86vh;
}

.panel, .chat{
  border-radius:var(--card-radius);
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.92));
  box-shadow: 0 12px 30px rgba(11,12,25,0.08);
  padding:18px;
}

.brand{display:flex;gap:12px;align-items:center}
.logo{width:56px;height:56px;border-radius:12px;display:grid;place-items:center;font-weight:800;font-size:20px;background:linear-gradient(135deg,var(--pink),var(--blue));color:#07101b}

.profile{display:flex;gap:12px;align-items:center;margin:14px 0}
.avatar{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;font-weight:700;color:#07101b;background:conic-gradient(from 180deg,var(--pink),var(--blue))}

input[type="text"], input[type="email"], input[type="password"]{
  width:100%;padding:12px;border-radius:12px;border:1px solid rgba(10,10,10,0.06);background:transparent;font-size:15px;
}
.btn{
  background:linear-gradient(90deg,var(--pink),var(--blue));
  color:#07101b;border:none;padding:10px 14px;border-radius:12px;font-weight:700;cursor:pointer;
}

.chat-header{display:flex;align-items:center;justify-content:space-between;padding-bottom:8px}
.chat-body{flex:1;padding:18px;overflow:auto;display:flex;flex-direction:column;gap:12px;background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><text x="-10" y="14" fill="rgba(7,16,27,0.02)" transform="rotate(-25)">TV GIRL</text></svg>');background-repeat:repeat}
.chat-footer{display:flex;gap:10px;padding-top:10px;border-top:1px solid rgba(11,12,25,0.03)}
.bubble{max-width:66%;padding:12px;border-radius:16px}
.me{align-self:flex-end;background:linear-gradient(90deg,var(--pink),#ffd6ef);color:#07101b}
.them{align-self:flex-start;background:linear-gradient(90deg,#ccefff,var(--blue));color:#07101b}
.time{display:block;font-size:11px;color:rgba(7,16,27,0.45);margin-top:6px}

.login-wrap{display:grid;place-items:center;height:100vh;padding:28px}
.login-card{width:100%;max-width:420px;background:linear-gradient(180deg,rgba(255,255,255,0.95),#fff);padding:24px;border-radius:18px;box-shadow:0 18px 50px rgba(11,12,25,0.08);text-align:center}
.login-card h2{margin:6px 0 12px 0}
.small{font-size:13px;color:rgba(7,16,27,0.5)}

#launchOverlay{
  position:fixed;inset:0;z-index:9999;pointer-events:none;
  background: radial-gradient(circle at 50% 35%, rgba(255,255,255,0.55), transparent 20%), linear-gradient(180deg, rgba(255,138,203,0.12), rgba(143,231,255,0.08));
  clip-path: circle(0% at 50% 35%);
  transition: clip-path 700ms cubic-bezier(.2,.9,.2,1), opacity 500ms;
  opacity:0;
  display:grid;place-items:center;
}
#launchOverlay.open{
  clip-path: circle(150% at 50% 35%);
  opacity:1;
}

.heart{
  width:70px;height:70px;border-radius:20px;display:grid;place-items:center;font-size:32px;transform:scale(0.8);animation:pop 700ms ease;
}
@keyframes pop{0%{transform:scale(0.3);opacity:0}60%{transform:scale(1.12);opacity:1}100%{transform:scale(1);opacity:1}}

@media (max-width:820px){
  .container{grid-template-columns:1fr;height:100vh}
  .panel{order:2}
  .chat{order:1}
}
