import { useRef, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.clientWidth * devicePixelRatio);
    let height = (canvas.height = canvas.clientHeight * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const config = {
      count: Math.min(80, Math.floor((canvas.clientWidth * canvas.clientHeight) / 20000)),
      maxR: 18,
      minR: 2,
      speed: 0.2,
      connectDist: 120,
      colors: ["rgba(96,165,250,0.9)", "rgba(20,184,166,0.85)", "rgba(99,102,241,0.7)"],
    };

    const rand = (a, b) => Math.random() * (b - a) + a;

    let particles = [];
    function initParticles() {
      particles = [];
      for (let i = 0; i < config.count; i++) {
        particles.push({
          x: rand(0, canvas.clientWidth),
          y: rand(0, canvas.clientHeight),
          vx: rand(-config.speed, config.speed),
          vy: rand(-config.speed, config.speed),
          r: rand(config.minR, config.maxR),
          color: config.colors[Math.floor(Math.random() * config.colors.length)],
        });
      }
    }

    function resize() {
      width = (canvas.width = canvas.clientWidth * devicePixelRatio);
      height = (canvas.height = canvas.clientHeight * devicePixelRatio);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
      initParticles();
    }

    function drawParticle(p) {
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2);
      grad.addColorStop(0, p.color);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    function step() {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // subtle background gradient
      const g = ctx.createLinearGradient(0, 0, canvas.clientWidth, canvas.clientHeight);
      g.addColorStop(0, "rgba(12,18,27,0.55)");
      g.addColorStop(0.5, "rgba(10,25,40,0.35)");
      g.addColorStop(1, "rgba(12,18,27,0.6)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // update + draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // mouse attraction
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.vx -= (dx / dist) * 0.05 * force;
            p.vy -= (dy / dist) * 0.05 * force;
          }
        }

        // wrap around edges
        if (p.x < -50) p.x = canvas.clientWidth + 50;
        if (p.x > canvas.clientWidth + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.clientHeight + 50;
        if (p.y > canvas.clientHeight + 50) p.y = -50;

        drawParticle(p);
      }

      // connect close particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < config.connectDist) {
            ctx.beginPath();
            const alpha = 1 - d / config.connectDist;
            ctx.strokeStyle = `rgba(150,180,255,${0.08 * alpha})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    initParticles();
    let raf = requestAnimationFrame(step);

    // interactions
    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left);
      mouse.current.y = (e.clientY - rect.top);
    }
    function onLeave() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("pointerleave", onLeave);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* dynamic canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-400 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold text-white">
                EL
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Etudiant en développement web
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-fade-in-delay-1">
            Enzo Loungoundji
          </p>

          

          <div className="flex gap-6 justify-center mb-12 animate-fade-in-delay-3">
            <a
              href="https://github.com/loun0009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/enzo-loungoundji-b2278a291/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="#contact"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          <a
            href="#profile"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 animate-fade-in-delay-4"
          >
            Découvrir mon profil
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
