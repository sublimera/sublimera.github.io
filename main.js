document.addEventListener("DOMContentLoaded", (() => {
    const e = document.getElementById("cursor");
    let t = !0;
    document.body.style.cursor = "none";
    document.querySelectorAll("a, button").forEach((e => {
        e.style.cursor = "none"
    }));
    window.addEventListener("mousemove", (t => {
        const o = t.clientY,
            n = t.clientX;
        e.style.transform = `translate3d(${n}px, ${o}px, 0) rotate(45deg)`, Math.random() < .03 && (e.style.transform = `translate3d(${n}px, ${o}px, 0) rotate(${90*Math.random()}deg)`, setTimeout((() => {
            e.style.transform = `translate3d(${n}px, ${o}px, 0) rotate(45deg)`
        }), 100))
    })), document.addEventListener("mouseenter", (() => {
        e.style.opacity = "1", t = !0
    })), document.addEventListener("mouseleave", (() => {
        e.style.opacity = "0", t = !1
    }));
    const o = () => {
            e.style.transform = "scale(1.5) rotate(45deg)", e.style.borderColor = "var(--color-accent)"
        },
        n = () => {
            e.style.transform = "scale(1) rotate(45deg)", e.style.borderColor = "var(--color-accent)"
        };
    document.querySelectorAll("a, button, .skill-card").forEach((e => {
        e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", n)
    }));
    document.querySelectorAll(".typing-text p").forEach(((e, t) => {
        e.style.setProperty("--index", t)
    }));
    const r = () => {
        const e = (new Date).toISOString().replace("T", " ").split(".")[0];
        document.getElementById("current-time").textContent = e
    };
    setInterval(r, 1e3), r();
    const s = document.querySelectorAll("h1, h2, h3");
    setInterval((() => {
        s.forEach((e => {
            return t = e, void(Math.random() < .1 && (t.style.textShadow = "\n                2px 0 var(--color-accent),\n                -2px 0 magenta\n            ", setTimeout((() => {
                t.style.textShadow = "none"
            }), 100)));
            var t
        }))
    }), 3e3);
    const a = "Alterkleo";
    console.log(`[*] Session initialized for user: ${a}`), console.log(`\n    ===============================\n    SUBLIMERA TERMINAL v1.0\n    Current User: ${a}\n    Access Level: AUTHORIZED\n    ===============================\n    `)
}));