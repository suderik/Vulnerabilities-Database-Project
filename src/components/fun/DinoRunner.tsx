"use client";

import { useEffect, useRef, useState } from "react";

type DinoRunnerProps = {
  height?: number; // CSS yüksekliği (px)
};

export default function DinoRunner({ height = 220 }: DinoRunnerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let running = true;
    let gameOver = false;
    let score = 0;

    // Tema renkleri
    const COL = {
      line: "#D4EA33",
      text: "#FEF5BF",
      cactus: "#88BA70",
      bg: "transparent",
    };

    // Boyutlandırma
    function resize() {
      const cssW = canvas.clientWidth || 800;
      const cssH = height;
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Dünya
    const groundY = height - 48;
    let speed = 6;
    let t = 0;

    // Oyuncu (dino)
    const player = {
      x: 36,
      y: groundY - 32,
      w: 38,
      h: 32,
      vy: 0,
      jumping: false,
    };

    // Engel (kaktüs) listesi
    type Obs = { x: number; w: number; h: number };
    let obstacles: Obs[] = [];

    function spawnObstacle() {
      const w = 18 + Math.floor(Math.random() * 22); // 18–40
      const h = 24 + Math.floor(Math.random() * 22); // 24–46
      const gap = 260 + Math.random() * 180; // sonraki engelle aralık
      const maxX = obstacles.reduce((m, o) => Math.max(m, o.x), 0);
      const startX = Math.max(canvas.clientWidth + 40, maxX + gap);
      obstacles.push({ x: startX, w, h });
    }

    // Başlangıç engelleri
    for (let i = 0; i < 4; i++) spawnObstacle();

    // Kontroller
    function jump() {
      if (!running || gameOver) return;
      if (!player.jumping) {
        player.vy = -11.8;
        player.jumping = true;
      }
    }
    function restart() {
      gameOver = false;
      score = 0;
      speed = 6;
      player.y = groundY - player.h;
      player.vy = 0;
      player.jumping = false;
      obstacles = [];
      for (let i = 0; i < 4; i++) spawnObstacle();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (gameOver) restart();
        else jump();
      } else if (e.code === "Enter" && gameOver) {
        restart();
      }
    };
    const onPointer = () => (gameOver ? restart() : jump());

    window.addEventListener("keydown", onKey);
    canvas.addEventListener("pointerdown", onPointer);

    // Çizim yardımcıları
    function drawGround() {
      const ctxW = canvas.clientWidth;
      ctx.strokeStyle = COL.line;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY + 0.5);
      ctx.lineTo(ctxW, groundY + 0.5);
      ctx.stroke();

      // Basit parallax çizgiler
      ctx.globalAlpha = 0.18;
      for (let x = (-(t * 0.5) % 48); x < ctxW + 48; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, groundY + 6);
        ctx.lineTo(x + 12, groundY + 6);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    function drawPlayer() {
      // Dino gövde (temaya uyumlu çizgisel stil)
      ctx.fillStyle = "rgba(20,55,64,0.6)";
      ctx.fillRect(player.x - 4, player.y - 4, player.w + 8, player.h + 8);

      ctx.fillStyle = COL.line;
      // gövde
      ctx.fillRect(player.x, player.y + 6, player.w - 6, player.h - 6);
      // kafa
      ctx.fillRect(player.x + 18, player.y - 10, 16, 16);
      // göz
      ctx.fillStyle = "#0E1E22";
      ctx.fillRect(player.x + 30, player.y - 4, 3, 3);
    }

    function drawCactus(o: Obs) {
      const base = groundY;
      ctx.fillStyle = COL.cactus;
      // gövde
      ctx.fillRect(o.x, base - o.h, o.w, o.h);
      // küçük kollar
      ctx.fillRect(o.x - 6, base - o.h + 12, 6, 10);
      ctx.fillRect(o.x + o.w, base - o.h + 4, 6, 14);
      // kenar çizgisi
      ctx.strokeStyle = COL.line;
      ctx.lineWidth = 1;
      ctx.strokeRect(o.x + 0.5, base - o.h + 0.5, o.w - 1, o.h - 1);
    }

    function intersects(ax: number, ay: number, aw: number, ah: number, bx: number, by: number, bw: number, bh: number) {
      return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
    }

    // Oyun döngüsü
    function loop() {
      if (!running) return;

      const ctxW = canvas.clientWidth;
      const ctxH = height;

      ctx.clearRect(0, 0, ctxW, ctxH);
      t += 1;

      // Fizik
      player.vy += 0.6; // yerçekimi
      player.y += player.vy;

      if (player.y + player.h >= groundY) {
        player.y = groundY - player.h;
        player.vy = 0;
        player.jumping = false;
      }

      // Engeller
      if (!gameOver) {
        for (const o of obstacles) o.x -= speed;
        if (obstacles.length && obstacles[0].x + obstacles[0].w < -40) obstacles.shift();
        while (obstacles.length < 4) spawnObstacle();
        speed = Math.min(12, speed + 0.0008);
        score += 1;
      }

      // Çizimler
      drawGround();
      for (const o of obstacles) drawCactus(o);
      drawPlayer();

      // Skor
      ctx.fillStyle = COL.text;
      ctx.font = "600 14px Poppins, system-ui, sans-serif";
      ctx.fillText(`Score: ${Math.floor(score / 5)}`, ctxW - 120, 22);

      if (gameOver) {
        // Game over metni
        ctx.textAlign = "center";
        ctx.fillStyle = COL.text;
        ctx.font = "600 18px Poppins, system-ui, sans-serif";
        ctx.fillText("Game Over — Press Enter or Tap to Retry", ctxW / 2, groundY - 80);
        ctx.textAlign = "start";
      } else {
        // Çarpışma kontrolü
        for (const o of obstacles) {
          if (
            intersects(player.x, player.y, player.w, player.h, o.x, groundY - o.h, o.w, o.h)
          ) {
            gameOver = true;
            break;
          }
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    // Sayfa/sekme odak yönetimi
    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [height]);

  return (
    <div className="w-full">
      {/* Canvas full-width; yükseklik props ile */}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height }}
        className="block rounded-xl border border-white/10 bg-transparent"
        aria-label="Dino runner mini-game"
      />
      {mounted && (
        <p className="mt-2 text-center text-[#FEF5BF]/80 text-sm">
          Press <b>Space</b> to jump — <b>Enter</b> to restart — tap/click also works
        </p>
      )}
    </div>
  );
}
