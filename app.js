// ===================== DATA =====================
const GENRES = [
    { id: "action", icon: "⚔️", name: "Aksiya", color: "#ff6b35" },
    { id: "romance", icon: "💕", name: "Romantika", color: "#e91e63" },
    { id: "fantasy", icon: "🔮", name: "Fantastika", color: "#9c27b0" },
    { id: "comedy", icon: "🤣", name: "Komediya", color: "#ff9800" },
    { id: "adventure", icon: "🌍", name: "Sarguzasht", color: "#4caf50" },
    { id: "sport", icon: "🏆", name: "Sport", color: "#ffc107" },
    { id: "horror", icon: "👻", name: "Dahshat", color: "#546e7a" },
    { id: "scifi", icon: "🚀", name: "Ilmiy Fantastika", color: "#00bcd4" },
    { id: "slice", icon: "☕", name: "Kundalik Hayot", color: "#795548" },
    { id: "thriller", icon: "🕵️", name: "Triller", color: "#37474f" },
    { id: "historical", icon: "🏯", name: "Tarixiy", color: "#8d6e63" },
    { id: "mecha", icon: "🤖", name: "Mecha", color: "#455a64" },
];
const GENRE_DESC = {
    action: "Epik janglar, superkuchlar va cheksiz sarguzashtlar!",
    romance: "Sevgi, his-tuyg'ular va yurak to'lqinlantiradigan romanlar.",
    fantasy: "Sehrli olamlar, ajdaholar va ilohiy kuchlar!",
    comedy: "Kulgi, hazil va yoqimli lahzalar.",
    adventure: "Uzoq yo'llar, yangi dunyolar va cheksiz imkoniyatlar!",
    sport: "Jamoaviy ruh, g'alaba va mag'lubiyat.",
    horror: "Qo'rqinchli mavjudotlar va sirli voqealar.",
    scifi: "Robotlar, kelajak va kosmik sarguzashtlar!",
    slice: "Oddiy hayot, do'stlik va baxtli lahzalar.",
    thriller: "Sirlar, jumboqlar va kutilmagan burilishlar.",
    historical: "Qadimgi Yaponiya, samuroylar va tarixiy voqealar.",
    mecha: "Gigant robotlar, texnologiya va inson ruhi.",
};

const PRODUCTS = [
    { id: 1, title: "One Piece", genre: "action", volume: "Vol. 106", price: 45000, cover: "⚓", bg: "linear-gradient(135deg,#ff6b35,#f7931e)", tag: "bestseller", uz: false },
    { id: 2, title: "Demon Slayer", genre: "action", volume: "Vol. 23", price: 48000, oldPrice: 60000, cover: "⚔️", bg: "linear-gradient(135deg,#c94b4b,#4b134f)", tag: "sale", uz: true },
    { id: 3, title: "My Hero Academia", genre: "action", volume: "Vol. 40", price: 44000, cover: "💥", bg: "linear-gradient(135deg,#11998e,#38ef7d)", tag: "bestseller", uz: true },
    { id: 4, title: "Attack on Titan", genre: "action", volume: "Vol. 34", price: 55000, cover: "🏰", bg: "linear-gradient(135deg,#1c1c1c,#4a4a4a)", tag: "bestseller", uz: false },
    { id: 5, title: "Naruto", genre: "action", volume: "Vol. 72", price: 42000, oldPrice: 50000, cover: "🦊", bg: "linear-gradient(135deg,#ff9800,#ff5722)", tag: "sale", uz: true },
    { id: 6, title: "Dragon Ball Super", genre: "action", volume: "Vol. 20", price: 47000, cover: "🐉", bg: "linear-gradient(135deg,#2196f3,#00bcd4)", tag: "new", uz: false },
    { id: 7, title: "Bleach", genre: "action", volume: "Vol. 74", price: 43000, cover: "⚡", bg: "linear-gradient(135deg,#9c27b0,#673ab7)", tag: "bestseller", uz: true },
    { id: 8, title: "Black Clover", genre: "action", volume: "Vol. 36", price: 46000, cover: "🍀", bg: "linear-gradient(135deg,#1b5e20,#388e3c)", tag: "new", uz: false },
    { id: 9, title: "Jujutsu Kaisen", genre: "fantasy", volume: "Vol. 24", price: 52000, cover: "🌀", bg: "linear-gradient(135deg,#1a1a2e,#3a3a7e)", tag: "new", uz: false },
    { id: 10, title: "Fullmetal Alchemist", genre: "fantasy", volume: "Vol. 27", price: 58000, cover: "⚗️", bg: "linear-gradient(135deg,#b8860b,#8b6914)", tag: "bestseller", uz: true },
    { id: 11, title: "Fairy Tail", genre: "fantasy", volume: "Vol. 63", price: 40000, cover: "🧚", bg: "linear-gradient(135deg,#e91e63,#ad1457)", tag: "bestseller", uz: false },
    { id: 12, title: "Sword Art Online", genre: "fantasy", volume: "Vol. 26", price: 49000, oldPrice: 55000, cover: "🗡️", bg: "linear-gradient(135deg,#1565c0,#0d47a1)", tag: "sale", uz: false },
    { id: 13, title: "Fruits Basket", genre: "romance", volume: "Vol. 23", price: 38000, cover: "🍑", bg: "linear-gradient(135deg,#f48fb1,#e91e63)", tag: "bestseller", uz: true },
    { id: 14, title: "Kaguya-sama", genre: "romance", volume: "Vol. 28", price: 41000, cover: "👑", bg: "linear-gradient(135deg,#c62828,#b71c1c)", tag: "new", uz: false },
    { id: 15, title: "Toradora", genre: "romance", volume: "Vol. 10", price: 37000, oldPrice: 45000, cover: "🐯", bg: "linear-gradient(135deg,#ff8f00,#e65100)", tag: "sale", uz: true },
    { id: 16, title: "Your Lie in April", genre: "romance", volume: "Vol. 11", price: 43000, cover: "🎵", bg: "linear-gradient(135deg,#7b1fa2,#4a148c)", tag: "bestseller", uz: false },
    { id: 17, title: "Gintama", genre: "comedy", volume: "Vol. 77", price: 39000, cover: "🥄", bg: "linear-gradient(135deg,#0097a7,#006064)", tag: "bestseller", uz: false },
    { id: 18, title: "Konosuba", genre: "comedy", volume: "Vol. 18", price: 36000, cover: "💎", bg: "linear-gradient(135deg,#1565c0,#0288d1)", tag: "new", uz: false },
    { id: 19, title: "Overlord", genre: "fantasy", volume: "Vol. 16", price: 51000, cover: "💀", bg: "linear-gradient(135deg,#212121,#424242)", tag: "new", uz: false },
    { id: 20, title: "Haikyuu!!", genre: "sport", volume: "Vol. 45", price: 40000, cover: "🏐", bg: "linear-gradient(135deg,#f57f17,#e65100)", tag: "bestseller", uz: true },
    { id: 21, title: "Kuroko no Basket", genre: "sport", volume: "Vol. 30", price: 38000, cover: "🏀", bg: "linear-gradient(135deg,#0288d1,#01579b)", tag: "bestseller", uz: false },
    { id: 22, title: "Captain Tsubasa", genre: "sport", volume: "Vol. 37", price: 35000, oldPrice: 42000, cover: "⚽", bg: "linear-gradient(135deg,#2e7d32,#1b5e20)", tag: "sale", uz: true },
    { id: 23, title: "Neon Genesis Eva", genre: "mecha", volume: "Vol. 14", price: 54000, cover: "🤖", bg: "linear-gradient(135deg,#1a237e,#283593)", tag: "bestseller", uz: false },
    { id: 24, title: "Gundam: The Origin", genre: "mecha", volume: "Vol. 24", price: 57000, cover: "⚙️", bg: "linear-gradient(135deg,#37474f,#546e7a)", tag: "new", uz: false },
    { id: 25, title: "Tokyo Ghoul", genre: "horror", volume: "Vol. 14", price: 46000, cover: "👁️", bg: "linear-gradient(135deg,#b71c1c,#880e4f)", tag: "bestseller", uz: true },
    { id: 26, title: "Death Note", genre: "thriller", volume: "Vol. 12", price: 53000, cover: "📓", bg: "linear-gradient(135deg,#212121,#37474f)", tag: "bestseller", uz: true },
    { id: 27, title: "Yotsuba&!", genre: "slice", volume: "Vol. 15", price: 32000, cover: "🌿", bg: "linear-gradient(135deg,#388e3c,#1b5e20)", tag: "new", uz: false },
    { id: 28, title: "Vagabond", genre: "historical", volume: "Vol. 37", price: 60000, cover: "🏯", bg: "linear-gradient(135deg,#5d4037,#3e2723)", tag: "bestseller", uz: false },
    { id: 29, title: "Rurouni Kenshin", genre: "historical", volume: "Vol. 28", price: 44000, oldPrice: 52000, cover: "🌸", bg: "linear-gradient(135deg,#ad1457,#880e4f)", tag: "sale", uz: true },
    { id: 30, title: "Vinland Saga", genre: "historical", volume: "Vol. 27", price: 56000, cover: "🪓", bg: "linear-gradient(135deg,#263238,#37474f)", tag: "new", uz: false },
    { id: 31, title: "Hunter x Hunter", genre: "adventure", volume: "Vol. 37", price: 50000, cover: "🎯", bg: "linear-gradient(135deg,#1b5e20,#33691e)", tag: "bestseller", uz: false },
    { id: 32, title: "Made in Abyss", genre: "adventure", volume: "Vol. 12", price: 48000, cover: "🕳️", bg: "linear-gradient(135deg,#4a148c,#6a1b9a)", tag: "new", uz: false },
    { id: 33, title: "Cells at Work", genre: "scifi", volume: "Vol. 6", price: 38000, cover: "🧬", bg: "linear-gradient(135deg,#c62828,#b71c1c)", tag: "new", uz: true },
    { id: 34, title: "Steins;Gate", genre: "scifi", volume: "Vol. 8", price: 46000, oldPrice: 52000, cover: "⏰", bg: "linear-gradient(135deg,#006064,#00838f)", tag: "sale", uz: false },
];

const REVIEWS = [
    { name: "Jasur T.", date: "2025-03-10", text: "MangaUZ juda ajoyib! Kitoblar sifati a'lo, yetkazib berish tez.", stars: 5, avatar: "J", color: "#ff6b35" },
    { name: "Malika R.", date: "2025-02-28", text: "O'zbek tilidagi manga topish qiyin edi, endi MangaUZ bor!", stars: 5, avatar: "M", color: "#e91e63" },
    { name: "Bobur N.", date: "2025-03-15", text: "Narxlar qulay, to'lov oson. Ertasi kuni kitob qo'limda edi!", stars: 5, avatar: "B", color: "#9c27b0" },
    { name: "Dilnoza K.", date: "2025-01-20", text: "Xizmat darajasi juda yaxshi! Rahmat MangaUZ jamoasiga!", stars: 5, avatar: "D", color: "#4caf50" },
    { name: "Sardor A.", date: "2025-03-05", text: "Jujutsu Kaisen barcha volumlarini shu yerdan oldim.", stars: 5, avatar: "S", color: "#00bcd4" },
    { name: "Feruza H.", date: "2025-02-14", text: "One Piece'ni 30% chegirmaga oldim. Juda xursandman!", stars: 5, avatar: "F", color: "#ff9800" },
    { name: "Ulugbek M.", date: "2025-03-22", text: "Birinchi buyurtmam mukammal ketdi. Endi doimiy mijozman!", stars: 5, avatar: "U", color: "#2196f3" },
    { name: "Nargiza B.", date: "2025-01-30", text: "Romantika janrida o'zbek tilidagi mangalar juda ko'p!", stars: 5, avatar: "N", color: "#673ab7" },
    { name: "Sherzod Q.", date: "2025-04-02", text: "Death Note va Tokyo Ghoul — ikkalasi ham original. 10/10!", stars: 5, avatar: "Sh", color: "#607d8b" },
    { name: "Kamola Y.", date: "2025-04-11", text: "Haikyuu serialini to'liq topildi! Tez yetkazib berishdi.", stars: 5, avatar: "K", color: "#ffc107" },
];

// ===================== HELPERS =====================
const fmt = n => Number(n).toLocaleString("uz-UZ");
const lockBody = () => { document.body.style.overflow = "hidden"; };
const unlockBody = () => { document.body.style.overflow = ""; };
const $ = id => document.getElementById(id);

function showToast(msg, type = "") {
    const t = $("toast");
    t.textContent = msg;
    t.className = "toast show" + (type ? " toast-" + type : "");
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove("show"), 3500);
}

// ===================== AUTH SYSTEM =====================
const USERS_KEY = "mangauz_users";
const SESSION_KEY = "mangauz_session";
const ORDERS_KEY = "mangauz_orders";

function getUsers() { try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch { return []; } }
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
function getSession() { try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; } }
function setSession(u, rem) { if (rem) localStorage.setItem(SESSION_KEY, JSON.stringify(u)); else sessionStorage.setItem(SESSION_KEY, JSON.stringify(u)); }
function getSessionAll() {
    try {
        const ls = JSON.parse(localStorage.getItem(SESSION_KEY));
        if (ls) return ls;
        const ss = JSON.parse(sessionStorage.getItem(SESSION_KEY));
        return ss || null;
    } catch { return null; }
}
function clearSession() { localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY); }

function getCurrentUser() { return getSessionAll(); }

function hashPass(p) {
    // Simple hash (production'da bcrypt ishlatiladi)
    let h = 0;
    for (let i = 0; i < p.length; i++) { h = Math.imul(31, h) + p.charCodeAt(i) | 0; }
    return h.toString(36);
}

function registerUser(name, surname, email, phone, pass) {
    const users = getUsers();
    if (users.find(u => u.email === email)) return { ok: false, msg: "Bu email allaqachon ro'yxatdan o'tgan!" };
    const user = {
        id: "u" + Date.now(),
        name, surname, email, phone,
        passHash: hashPass(pass),
        createdAt: new Date().toLocaleDateString("uz-UZ"),
        address: "",
    };
    users.push(user);
    saveUsers(users);
    return { ok: true, user };
}

function loginUser(email, pass) {
    const users = getUsers();
    const user = users.find(u => u.email === email);
    if (!user) return { ok: false, msg: "Bu email topilmadi!" };
    if (user.passHash !== hashPass(pass)) return { ok: false, msg: "Parol noto'g'ri!" };
    return { ok: true, user };
}

function updateUser(id, data) {
    const users = getUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return;
    users[idx] = { ...users[idx], ...data };
    saveUsers(users);
    // Update session too
    const s = getSessionAll();
    if (s && s.id === id) {
        const rem = !!localStorage.getItem(SESSION_KEY);
        setSession(users[idx], rem);
    }
    return users[idx];
}

// ===================== INIT AUTH UI =====================
function initAuth() {
    const user = getCurrentUser();
    if (user) {
        $("navAuthGuest").style.display = "none";
        $("navAuthUser").style.display = "block";
        $("navUsername").textContent = user.name;
        $("navAvatar").textContent = user.name[0].toUpperCase();
        $("mobileAuthLink").textContent = "👤 " + user.name;
    } else {
        $("navAuthGuest").style.display = "block";
        $("navAuthUser").style.display = "none";
        $("mobileAuthLink").textContent = "🔑 Kirish";
    }
}

// ===================== AUTH MODAL =====================
const authModal = $("authModal");
const authOverlay = $("authOverlay");

function openAuth(tab = "login") {
    switchTab(tab);
    authModal.classList.add("open");
    authOverlay.classList.add("open");
    lockBody();
}
function closeAuth() {
    authModal.classList.remove("open");
    authOverlay.classList.remove("open");
    unlockBody();
}
authOverlay.addEventListener("click", closeAuth);
document.getElementById("authModalClose").addEventListener("click", closeAuth);
$("openAuthBtn").addEventListener("click", () => openAuth("login"));
$("mobileAuthLink").addEventListener("click", e => { e.preventDefault(); openAuth("login"); });

function switchTab(tab) {
    document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
    $("loginForm").style.display = tab === "login" ? "block" : "none";
    $("registerForm").style.display = tab === "register" ? "block" : "none";
}
document.querySelectorAll(".auth-tab").forEach(t => t.addEventListener("click", () => switchTab(t.dataset.tab)));

// Password visibility toggle
function togglePass(id, btn) {
    const el = $(id);
    el.type = el.type === "password" ? "text" : "password";
    btn.textContent = el.type === "password" ? "👁" : "🙈";
}

// Password strength
$("re-pass").addEventListener("input", function () {
    const v = this.value;
    const fill = $("psFill"), lbl = $("psLabel");
    let score = 0;
    if (v.length >= 6) score++;
    if (v.length >= 10) score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    const colors = ["#e91e63", "#ff9800", "#ffc107", "#4caf50", "#00bcd4"];
    const labels = ["Juda zaif", "Zaif", "O'rtacha", "Yaxshi", "Zo'r!"];
    fill.style.width = (score * 20) + "%";
    fill.style.background = colors[score - 1] || "#e91e63";
    lbl.textContent = v ? labels[Math.min(score - 1, 4)] : "";
    lbl.style.color = colors[score - 1] || "#e91e63";
});

// LOGIN
$("loginBtn").addEventListener("click", () => {
    const email = $("li-email").value.trim();
    const pass = $("li-pass").value;
    const rem = $("li-remember").checked;
    const errEl = $("loginError");
    errEl.classList.remove("show");
    if (!email || !pass) { errEl.textContent = "Email va parolni kiriting!"; errEl.classList.add("show"); return; }
    const r = loginUser(email, pass);
    if (!r.ok) { errEl.textContent = r.msg; errEl.classList.add("show"); return; }
    setSession(r.user, rem);
    closeAuth();
    initAuth();
    showToast("👋 Xush kelibsiz, " + r.user.name + "!", "success");
    [$("li-email"), $("li-pass")].forEach(el => el.value = "");
});
$("li-pass").addEventListener("keydown", e => { if (e.key === "Enter") $("loginBtn").click(); });

// REGISTER
$("registerBtn").addEventListener("click", () => {
    const name = $("re-name").value.trim();
    const surname = $("re-surname").value.trim();
    const email = $("re-email").value.trim();
    const phone = $("re-phone").value.trim();
    const pass = $("re-pass").value;
    const pass2 = $("re-pass2").value;
    const errEl = $("regError");
    errEl.classList.remove("show");
    if (!name || !email || !pass) { errEl.textContent = "Barcha maydonlarni to'ldiring!"; errEl.classList.add("show"); return; }
    if (pass.length < 6) { errEl.textContent = "Parol kamida 6 ta belgi bo'lishi kerak!"; errEl.classList.add("show"); return; }
    if (pass !== pass2) { errEl.textContent = "Parollar mos kelmadi!"; errEl.classList.add("show"); return; }
    const r = registerUser(name, surname, email, phone, pass);
    if (!r.ok) { errEl.textContent = r.msg; errEl.classList.add("show"); return; }
    setSession(r.user, true);
    closeAuth();
    initAuth();
    showToast("🎉 Hisob yaratildi! Xush kelibsiz, " + name + "!", "success");
});

// ===================== KABINET PANEL =====================
const kabPanel = $("kabinetPanel");
const kabOverlay = $("kabinetOverlay");

function openKabinet() {
    const user = getCurrentUser();
    if (!user) { openAuth("login"); return; }
    // fill header
    $("kabAvatar").textContent = user.name[0].toUpperCase();
    $("kabName").textContent = user.name + " " + (user.surname || "");
    $("kabEmail").textContent = user.email;
    const orders = getUserOrders(user.id);
    const wl = getWishlist(user.id);
    const spent = orders.reduce((s, o) => s + o.total, 0);
    $("ksOrders").textContent = orders.length;
    $("ksWishlist").textContent = wl.length;
    $("ksSpent").textContent = fmt(spent);
    const level = spent > 500000 ? "🥇 Gold" : spent > 200000 ? "🥈 Silver" : "🌟 Oddiy a'zo";
    $("kabMember").textContent = level;
    // fill profile
    $("pf-name").value = user.name || "";
    $("pf-surname").value = user.surname || "";
    $("pf-email").value = user.email || "";
    $("pf-phone").value = user.phone || "";
    $("pf-address").value = user.address || "";
    // render active tab
    renderKabOrders("all");
    renderKabWishlist();
    switchKabTab("orders");
    kabPanel.classList.add("open");
    kabOverlay.classList.add("open");
    lockBody();
}
function closeKabinet() {
    kabPanel.classList.remove("open");
    kabOverlay.classList.remove("open");
    unlockBody();
}
kabOverlay.addEventListener("click", closeKabinet);
$("openKabinetBtn").addEventListener("click", () => window.location.href = "kabinet.html");

// Kabinet nav tabs
function switchKabTab(tab) {
    document.querySelectorAll(".kab-nav-btn").forEach(b => b.classList.toggle("active", b.dataset.kab === tab));
    document.querySelectorAll(".kab-tab").forEach(t => t.style.display = "none");
    $("kab-" + tab).style.display = "block";
}
document.querySelectorAll(".kab-nav-btn").forEach(b => b.addEventListener("click", () => switchKabTab(b.dataset.kab)));

// Orders sub-filter
document.querySelectorAll(".kof-btn").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".kof-btn").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    renderKabOrders(b.dataset.kof);
}));

// ===================== ORDERS =====================
function getOrders() { try { return JSON.parse(localStorage.getItem(ORDERS_KEY)) || []; } catch { return []; } }
function saveAllOrders(list) { localStorage.setItem(ORDERS_KEY, JSON.stringify(list)); }
function getUserOrders(uid) { return getOrders().filter(o => o.userId === uid); }

function addOrder(order) {
    const all = getOrders();
    all.unshift(order);
    saveAllOrders(all);
}
function updateOrderStatus(id, status) {
    const all = getOrders();
    const o = all.find(x => x.id === id);
    if (o) { o.status = status; saveAllOrders(all); }
}

const STATUS_LABEL = { pending: "⏳ Kutilmoqda", confirmed: "🟢 Tasdiqlandi", delivered: "✅ Yetkazildi" };
const STATUS_COLORS = { pending: "pending", confirmed: "confirmed", delivered: "delivered" };
const STATUS_NEXT = { pending: "confirmed", confirmed: "delivered", delivered: "pending" };

function renderKabOrders(filter = "all") {
    const user = getCurrentUser();
    if (!user) return;
    let orders = getUserOrders(user.id);
    if (filter !== "all") orders = orders.filter(o => o.status === filter);
    const el = $("kabOrdersList");
    if (!orders.length) {
        el.innerHTML = `<div class="kab-empty"><div class="ke-icon">📦</div><p>Buyurtmalar yo'q</p><button class="btn-primary" style="margin-top:1rem" onclick="closeKabinet();document.querySelector('#store').scrollIntoView({behavior:'smooth'})">Do'konga o'tish →</button></div>`;
        return;
    }
    el.innerHTML = orders.map(o => {
        const steps = ["pending", "confirmed", "delivered"];
        const cur = steps.indexOf(o.status);
        return `
    <div class="kab-order-card status-${o.status}">
      <div class="ko-header">
        <div class="ko-id">${o.id}</div>
        <div class="ko-date">${o.date}</div>
        <div class="ko-status ${STATUS_COLORS[o.status]}">${STATUS_LABEL[o.status]}</div>
      </div>
      <div class="order-progress">
        ${steps.map((s, i) => `<div class="op-step ${i <= cur ? "done" : ""} ${i === cur ? "active" : ""}"><div class="op-dot"></div></div>`).join("")}
      </div>
      <div class="op-labels">
        <span class="op-lbl ${cur >= 0 ? "active" : ""}">📬 Qabul</span>
        <span class="op-lbl ${cur >= 1 ? "active" : ""}">✅ Tasdiqlandi</span>
        <span class="op-lbl ${cur >= 2 ? "active" : ""}">📦 Yetkazildi</span>
      </div>
      <div class="ko-items" style="margin-top:.7rem">
        ${o.items.map(i => `<span class="ko-item-chip">${i.cover} ${i.title}</span>`).join("")}
      </div>
      <div class="ko-footer">
        <div class="ko-total">${fmt(o.total)} so'm</div>
        <div class="ko-pay">💳 ${o.pay}</div>
      </div>
    </div>`}).join("");
}

function renderKabWishlist() {
    const user = getCurrentUser();
    if (!user) return;
    const wl = getWishlist(user.id);
    const el = $("kabWishlistGrid");
    if (!wl.length) {
        el.innerHTML = `<div class="kab-empty" style="grid-column:1/-1"><div class="ke-icon">❤️</div><p>Sevimlilar ro'yxati bo'sh</p></div>`;
        return;
    }
    el.innerHTML = wl.map(p => `
    <div class="wl-card">
      <div class="wl-cover" style="background:${p.bg}"><span style="font-size:2.5rem">${p.cover}</span></div>
      <div class="wl-info">
        <div class="wl-title">${p.title}</div>
        <div class="wl-price">${fmt(p.price)} so'm</div>
        <button class="btn-add" style="margin-top:.5rem;width:100%" onclick="addToCart(${p.id});removeFromWishlist(${p.id},${JSON.stringify(user.id)})">🛒 Savatchaga</button>
      </div>
      <button class="wl-remove" onclick="removeFromWishlist(${p.id},${JSON.stringify(user.id)})">✕</button>
    </div>`).join("");
}

// ===================== WISHLIST =====================
function getWishlist(uid) {
    try { return JSON.parse(localStorage.getItem("wl_" + uid)) || []; } catch { return []; }
}
function saveWishlist(uid, list) { localStorage.setItem("wl_" + uid, JSON.stringify(list)); }

function toggleWishlist(productId) {
    const user = getCurrentUser();
    if (!user) { openAuth("login"); showToast("Sevimliga qo'shish uchun kiring!", "warn"); return; }
    const wl = getWishlist(user.id);
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;
    const idx = wl.findIndex(x => x.id === productId);
    if (idx === -1) {
        wl.push(p);
        saveWishlist(user.id, wl);
        showToast("❤️ Sevimliga qo'shildi!", "success");
    } else {
        wl.splice(idx, 1);
        saveWishlist(user.id, wl);
        showToast("💔 Sevimlilardan olib tashlandi");
    }
    renderProducts(document.querySelector(".filter-btn.active")?.dataset?.filter || "all");
    renderKabWishlist();
    $("ksWishlist").textContent = getWishlist(user.id).length;
}

function removeFromWishlist(productId, uid) {
    const wl = getWishlist(uid);
    const idx = wl.findIndex(x => x.id === productId);
    if (idx !== -1) { wl.splice(idx, 1); saveWishlist(uid, wl); }
    renderKabWishlist();
    const user = getCurrentUser();
    if (user) { $("ksWishlist").textContent = getWishlist(user.id).length; }
    renderProducts(document.querySelector(".filter-btn.active")?.dataset?.filter || "all");
}

function isWishlisted(productId) {
    const user = getCurrentUser();
    if (!user) return false;
    return getWishlist(user.id).some(x => x.id === productId);
}

// ===================== PROFILE SAVE =====================
$("saveProfileBtn").addEventListener("click", () => {
    const user = getCurrentUser();
    if (!user) return;
    const updated = updateUser(user.id, {
        name: $("pf-name").value.trim() || user.name,
        surname: $("pf-surname").value.trim(),
        phone: $("pf-phone").value.trim(),
        address: $("pf-address").value.trim(),
    });
    if (updated) {
        initAuth();
        $("kabName").textContent = updated.name + " " + (updated.surname || "");
        $("kabAvatar").textContent = updated.name[0].toUpperCase();
        $("navAvatar").textContent = updated.name[0].toUpperCase();
        $("navUsername").textContent = updated.name;
        $("profileSuccess").style.display = "block";
        setTimeout(() => $("profileSuccess").style.display = "none", 3000);
        showToast("✅ Profil saqlandi!", "success");
    }
});

$("changePassBtn").addEventListener("click", () => {
    const user = getCurrentUser();
    if (!user) return;
    const old = $("pf-old-pass").value;
    const np = $("pf-new-pass").value;
    const np2 = $("pf-new-pass2").value;
    if (!old || !np) { showToast("⚠️ Maydonlarni to'ldiring!", "warn"); return; }
    if (np.length < 6) { showToast("⚠️ Yangi parol 6 ta belgidan uzun bo'lsin!", "warn"); return; }
    if (np !== np2) { showToast("⚠️ Parollar mos kelmadi!", "warn"); return; }
    const users = getUsers();
    const u = users.find(x => x.id === user.id);
    if (!u || u.passHash !== hashPass(old)) { showToast("❌ Eski parol noto'g'ri!", "warn"); return; }
    updateUser(user.id, { passHash: hashPass(np) });
    [$("pf-old-pass"), $("pf-new-pass"), $("pf-new-pass2")].forEach(el => el.value = "");
    showToast("🔒 Parol muvaffaqiyatli o'zgartirildi!", "success");
});

// ===================== LOGOUT =====================
$("logoutBtn").addEventListener("click", () => {
    clearSession();
    closeKabinet();
    initAuth();
    showToast("👋 Hisobdan chiqdingiz");
});

$("deleteAccountBtn").addEventListener("click", () => {
    if (!confirm("Hisobingizni o'chirasizmi? Bu amalni qaytarib bo'lmaydi!")) return;
    const user = getCurrentUser();
    if (!user) return;
    const users = getUsers().filter(u => u.id !== user.id);
    saveUsers(users);
    clearSession();
    closeKabinet();
    initAuth();
    showToast("🗑️ Hisob o'chirildi");
});

// ===================== CART =====================
let cart = [];

function updateCartCount() { $("cartCount").textContent = cart.length; }

function renderCart() {
    const el = $("cartItems"), footer = $("cartFooter");
    if (!cart.length) { el.innerHTML = '<div class="cart-empty">🛒 Savatcha bo\'sh</div>'; footer.style.display = "none"; return; }
    footer.style.display = "block";
    $("cartTotal").textContent = fmt(cart.reduce((s, i) => s + i.price, 0));
    el.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-cover" style="background:${item.bg}">${item.cover}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.title}</div>
        <div class="cart-item-vol">${item.volume}</div>
        <div class="cart-item-price">${fmt(item.price)} so'm</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})">✕</button>
    </div>`).join("");
}

function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    if (cart.find(x => x.id === id)) { showToast("⚠️ Bu kitob savatchada!", "warn"); return; }
    cart.push({ ...p });
    updateCartCount(); renderCart();
    showToast("✅ \"" + p.title + "\" savatchaga qo'shildi!", "success");
    const btn = $("cartBtn"); btn.classList.add("pop");
    setTimeout(() => btn.classList.remove("pop"), 400);
}

function removeFromCart(idx) {
    const name = cart[idx]?.title;
    cart.splice(idx, 1);
    updateCartCount(); renderCart();
    showToast("🗑️ \"" + name + "\" o'chirildi");
}

// Cart panel
const openCart = () => { $("cartModal").classList.add("open"); $("cartOverlay").classList.add("open"); lockBody(); };
const closeCart = () => { $("cartModal").classList.remove("open"); $("cartOverlay").classList.remove("open"); unlockBody(); };
$("cartBtn").addEventListener("click", openCart);
$("cartClose").addEventListener("click", closeCart);
$("cartOverlay").addEventListener("click", closeCart);

// ===================== ORDER MODAL =====================
let orderNum = 1000 + Math.floor(Math.random() * 9000);

function openOrder() {
    if (!cart.length) { showToast("⚠️ Savatcha bo'sh!", "warn"); return; }
    const user = getCurrentUser();
    closeCart();
    $("omItems").innerHTML = cart.map(i => `
    <div class="om-item">
      <div class="om-item-cover" style="background:${i.bg}">${i.cover}</div>
      <div class="om-item-info"><div class="om-item-name">${i.title}</div><small>${i.volume}</small></div>
      <div class="om-item-price">${fmt(i.price)} so'm</div>
    </div>`).join("");
    $("omTotal").textContent = fmt(cart.reduce((s, i) => s + i.price, 0));
    // Pre-fill if logged in
    if (user) {
        $("om-name").value = (user.name + " " + (user.surname || "")).trim();
        $("om-phone").value = user.phone || "";
        $("om-address").value = user.address || "";
    }
    $("orderModal").classList.add("open");
    $("orderOverlay").classList.add("open");
    lockBody();
}
const closeOrder = () => { $("orderModal").classList.remove("open"); $("orderOverlay").classList.remove("open"); unlockBody(); };
const closeSuccess = () => { $("successModal").classList.remove("open"); $("successOverlay").classList.remove("open"); unlockBody(); };

$("checkoutBtn").addEventListener("click", openOrder);
$("orderClose").addEventListener("click", closeOrder);
$("orderOverlay").addEventListener("click", closeOrder);
$("successOverlay").addEventListener("click", closeSuccess);
$("smCloseBtn").addEventListener("click", closeSuccess);

$("confirmOrderBtn").addEventListener("click", async () => {
    const name = $("om-name").value.trim();
    const phone = $("om-phone").value.trim();
    const address = $("om-address").value.trim();
    const pay = document.querySelector('input[name="pay"]:checked')?.value || "Payme";
    if (!name || !phone || !address) {
        showToast("⚠️ Barcha maydonlarni to'ldiring!", "warn");
        [["om-name", !name], ["om-phone", !phone], ["om-address", !address]].filter(([, b]) => b).forEach(([id]) => {
            const el = $(id); el.style.borderColor = "#e91e63"; el.classList.add("shake");
            setTimeout(() => { el.style.borderColor = ""; el.classList.remove("shake"); }, 900);
        }); return;
    }
    const btn = $("confirmOrderBtn");
    btn.textContent = "⏳ Yuborilmoqda..."; btn.disabled = true;
    orderNum++;
    const orderId = "MU-" + orderNum;
    const total = cart.reduce((s, i) => s + i.price, 0);
    const now = new Date();
    const dateStr = now.toLocaleDateString("uz-UZ") + " " + now.toLocaleTimeString("uz-UZ", "hh:mm");
    const user = getCurrentUser();
    const newOrder = {
        id: orderId, date: dateStr,
        userId: user ? user.id : null,
        name, phone, address, pay, total,
        items: cart.map(i => ({ title: i.title, volume: i.volume, price: i.price, cover: i.cover, bg: i.bg })),
        status: "pending"
    };
    addOrder(newOrder);
    await new Promise(r => setTimeout(r, 1200));
    $("smOrderId").textContent = orderId;
    closeOrder();
    $("successModal").classList.add("open");
    $("successOverlay").classList.add("open");
    lockBody(); launchConfetti();
    cart = []; updateCartCount(); renderCart();
    // update kabinet stats if open
    if (user) { $("ksOrders").textContent = getUserOrders(user.id).length; }
    btn.textContent = "✅ Buyurtmani tasdiqlash"; btn.disabled = false;
    ["om-name", "om-phone", "om-address"].forEach(id => $(id).value = "");
});

// CONFETTI
function launchConfetti() {
    const wrap = $("smConfetti"); wrap.innerHTML = "";
    const colors = ["#ff6b35", "#ffc107", "#4caf50", "#e91e63", "#00bcd4", "#9c27b0", "#fff"];
    for (let i = 0; i < 70; i++) {
        const el = document.createElement("div");
        el.className = "confetti-piece";
        el.style.cssText = `left:${Math.random() * 100}%;background:${colors[i % colors.length]};animation-duration:${.8 + Math.random() * 1.2}s;animation-delay:${Math.random() * .4}s;width:${6 + Math.random() * 8}px;height:${6 + Math.random() * 8}px;border-radius:${Math.random() > .5 ? "50%" : "3px"};`;
        wrap.appendChild(el);
    }
}

// ===================== GENRE MODAL =====================
function openGenreModal(genreId) {
    const g = GENRES.find(x => x.id === genreId); if (!g) return;
    const items = PRODUCTS.filter(p => p.genre === genreId);
    $("gmIcon").textContent = g.icon; $("gmTitle").textContent = g.name;
    $("gmDesc").textContent = GENRE_DESC[genreId] || "";
    $("genreModal").style.setProperty("--gc", g.color);
    $("gmProducts").innerHTML = items.length
        ? items.map(p => `
      <div class="gm-card">
        <div class="gm-card-cover" style="background:${p.bg}">
          ${p.tag === "new" ? '<div class="gm-badge new">Yangi</div>' : ""}
          ${p.tag === "sale" ? '<div class="gm-badge sale">Sale</div>' : ""}
          ${p.tag === "bestseller" ? '<div class="gm-badge best">🔥</div>' : ""}
          ${p.uz ? '<div class="gm-badge uz">🇺🇿</div>' : ""}
          <span class="gm-cover-emoji">${p.cover}</span>
        </div>
        <div class="gm-card-info">
          <div class="gm-card-title">${p.title}</div>
          <div class="gm-card-vol">${p.volume}</div>
          <div class="gm-card-footer">
            <div>${p.oldPrice ? `<div class="gm-old-price">${fmt(p.oldPrice)} so'm</div>` : ""}
              <div class="gm-price">${fmt(p.price)} so'm</div></div>
            <button class="btn-add" onclick="addToCart(${p.id})">+</button>
          </div>
        </div>
      </div>`).join("")
        : '<div class="gm-empty">Bu janrda hozircha kitob yo\'q</div>';
    $("genreModal").classList.add("open");
    $("genreOverlay").classList.add("open");
    lockBody();
}
const closeGenreModal = () => { $("genreModal").classList.remove("open"); $("genreOverlay").classList.remove("open"); unlockBody(); };
$("genreClose").addEventListener("click", closeGenreModal);
$("genreOverlay").addEventListener("click", closeGenreModal);

// ===================== RENDER GENRES =====================
function renderGenres() {
    const grid = $("genresGrid");
    grid.innerHTML = GENRES.map(g => `
    <div class="genre-card reveal" style="--gc:${g.color}" onclick="openGenreModal('${g.id}')">
      <div class="gc-emoji">${g.icon}</div>
      <h3>${g.name}</h3>
      <p>${PRODUCTS.filter(p => p.genre === g.id).length} kitob</p>
      <div class="gc-arrow">→</div>
    </div>`).join("");
    grid.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ===================== RENDER PRODUCTS =====================
function renderProducts(filter = "all") {
    const grid = $("productsGrid");
    const user = getCurrentUser();
    const list = filter === "all" ? PRODUCTS : filter === "uz" ? PRODUCTS.filter(p => p.uz) : PRODUCTS.filter(p => p.tag === filter);
    grid.innerHTML = list.map(p => `
    <div class="product-card reveal">
      <div class="product-cover" style="background:${p.bg}">
        ${p.tag === "bestseller" ? '<div class="product-badge bestseller">🔥 Bestseller</div>' : ""}
        ${p.tag === "new" ? '<div class="product-badge new">✨ Yangi</div>' : ""}
        ${p.tag === "sale" ? '<div class="product-badge sale">🏷️ Sale</div>' : ""}
        ${p.uz ? '<div class="product-badge-uz">🇺🇿</div>' : ""}
        <button class="btn-wl" onclick="toggleWishlist(${p.id})" title="Sevimli">${isWishlisted(p.id) ? "❤️" : "🤍"}</button>
        <span class="pc-emoji">${p.cover}</span>
      </div>
      <div class="product-info">
        <div class="product-title">${p.title}</div>
        <div class="product-genre">${GENRES.find(g => g.id === p.genre)?.name || p.genre} · ${p.volume}</div>
        <div class="product-footer">
          <div class="product-prices">
            ${p.oldPrice ? `<span class="product-price old-price">${fmt(p.oldPrice)} so'm</span>` : ""}
            <span class="product-price">${fmt(p.price)} so'm</span>
          </div>
          <button class="btn-add" onclick="addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>`).join("");
    grid.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active"); renderProducts(btn.dataset.filter);
    });
});

// ===================== REVIEWS =====================
function renderReviews() {
    const track = $("reviewsTrack");
    track.innerHTML = [...REVIEWS, ...REVIEWS].map(r => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar" style="background:${r.color}">${r.avatar}</div>
        <div><div class="review-name">${r.name}</div><div class="review-date">${r.date}</div></div>
      </div>
    </div>`).join("");
}

// ===================== CONTACT =====================
$("sendBtn").addEventListener("click", function () {
    const ids = ["cf-name", "cf-phone", "cf-email", "cf-msg"];
    let ok = true;
    ids.forEach(id => { const el = $(id); if (!el.value.trim()) { ok = false; el.style.borderColor = "#e91e63"; setTimeout(() => el.style.borderColor = "", 2000); } });
    if (!ok) { showToast("⚠️ Barcha maydonlarni to'ldiring!", "warn"); return; }
    this.textContent = "⏳ Yuborilmoqda..."; this.disabled = true;
    setTimeout(() => {
        ids.forEach(id => $(id).value = "");
        $("formSuccess").style.display = "block";
        showToast("✅ Xabar yuborildi!", "success");
        this.textContent = "Yuborish →"; this.disabled = false;
        setTimeout(() => $("formSuccess").style.display = "none", 5000);
    }, 1400);
});

// ===================== ADMIN PANEL =====================
const ADMIN_PASS = "manga2025";
const STATUS_LABELS = { pending: "🟡 Kutilmoqda", confirmed: "🟢 Tasdiqlandi", delivered: "✅ Yetkazildi" };

function openAdminPanel() {
    const pass = prompt("🔐 Admin parolini kiriting:");
    if (pass !== ADMIN_PASS) { if (pass !== null) showToast("❌ Noto'g'ri parol!", "warn"); return; }
    renderAdminOrders("all");
    $("adminPanel").classList.add("open");
    $("adminOverlay").classList.add("open");
    lockBody();
}
const closeAdmin = () => { $("adminPanel").classList.remove("open"); $("adminOverlay").classList.remove("open"); unlockBody(); };
$("adminOpenBtn").addEventListener("click", openAdminPanel);
$("adminClose").addEventListener("click", closeAdmin);
$("adminOverlay").addEventListener("click", closeAdmin);
$("adminClearBtn").addEventListener("click", () => {
    if (!confirm("Barcha buyurtmalarni o'chirasizmi?")) return;
    saveAllOrders([]); renderAdminOrders("all");
    showToast("🗑️ Barcha buyurtmalar o'chirildi");
});
document.querySelectorAll(".admin-filter").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".admin-filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active"); renderAdminOrders(btn.dataset.status);
}));

function renderAdminOrders(statusFilter = "all") {
    const orders = getOrders();
    const filtered = statusFilter === "all" ? orders : orders.filter(o => o.status === statusFilter);
    $("aStatAll").textContent = orders.length;
    $("aStatPending").textContent = orders.filter(o => o.status === "pending").length;
    $("aStatConfirmed").textContent = orders.filter(o => o.status === "confirmed").length;
    $("aStatDelivered").textContent = orders.filter(o => o.status === "delivered").length;
    $("aStatRevenue").textContent = fmt(orders.reduce((s, o) => s + o.total, 0));
    const list = $("adminOrdersList");
    if (!filtered.length) { list.innerHTML = '<div class="admin-empty">📭 Hozircha buyurtma yo\'q</div>'; return; }
    list.innerHTML = filtered.map(o => `
    <div class="admin-order-card status-${o.status}">
      <div class="aoc-header">
        <div class="aoc-id">${o.id}</div>
        <div class="aoc-date">${o.date}</div>
        <button class="aoc-status-btn" onclick="cycleStatus('${o.id}')">${STATUS_LABELS[o.status]}</button>
      </div>
      <div class="aoc-client">
        <span>👤 ${o.name}</span><span>📞 ${o.phone}</span>
        <span>📍 ${o.address}</span><span>💳 ${o.pay}</span>
        ${o.userId ? `<span>🔐 Ro'yxatdan o'tgan</span>` : `<span>👤 Mehmon</span>`}
      </div>
      <div class="aoc-items">${o.items.map(i => `<span class="aoc-item">${i.cover} ${i.title}</span>`).join("")}</div>
      <div class="aoc-footer">
        <strong>${fmt(o.total)} so'm</strong>
        <button class="aoc-del" onclick="deleteOrder('${o.id}')">🗑️ O'chirish</button>
      </div>
    </div>`).join("");
}

function cycleStatus(id) {
    const orders = getOrders();
    const o = orders.find(x => x.id === id);
    if (!o) return;
    o.status = STATUS_NEXT[o.status];
    saveAllOrders(orders);
    const fBtn = document.querySelector(".admin-filter.active");
    renderAdminOrders(fBtn ? fBtn.dataset.status : "all");
    // also update kabinet if user's order
    const user = getCurrentUser();
    if (user && o.userId === user.id) {
        const kof = document.querySelector(".kof-btn.active");
        renderKabOrders(kof ? kof.dataset.kof : "all");
    }
    showToast("✅ " + id + ": " + STATUS_LABELS[o.status], "success");
}

function deleteOrder(id) {
    if (!confirm(id + " buyurtmani o'chirasizmi?")) return;
    saveAllOrders(getOrders().filter(o => o.id !== id));
    const fBtn = document.querySelector(".admin-filter.active");
    renderAdminOrders(fBtn ? fBtn.dataset.status : "all");
    showToast("🗑️ Buyurtma o'chirildi");
}

// ===================== LOADER =====================
window.addEventListener("load", () => {
    setTimeout(() => {
        $("loader").classList.add("hidden");
        document.querySelectorAll("#home .reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 150));
    }, 1900);
});

// ===================== NAVBAR =====================
const navbar = $("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    let cur = "";
    document.querySelectorAll("section[id],footer[id]").forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    document.querySelectorAll(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.page === cur));
});

// ===================== MOBILE MENU =====================
const menuBtn = $("menuBtn"), mobileMenu = $("mobileMenu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen; mobileMenu.classList.toggle("open", menuOpen);
    const s = menuBtn.querySelectorAll("span");
    if (menuOpen) { s[0].style.transform = "rotate(45deg) translate(5px,5px)"; s[1].style.opacity = "0"; s[2].style.transform = "rotate(-45deg) translate(5px,-5px)"; }
    else s.forEach(x => { x.style.transform = ""; x.style.opacity = ""; });
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menuOpen = false; mobileMenu.classList.remove("open");
    menuBtn.querySelectorAll("span").forEach(x => { x.style.transform = ""; x.style.opacity = ""; });
}));

// ===================== REVEAL =====================
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: .1, rootMargin: "0px 0px -30px 0px" });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ===================== COUNTER =====================
function animCount(el) {
    const target = parseInt(el.dataset.target); let cur = 0; const step = target / 60;
    const t = setInterval(() => { cur = Math.min(cur + step, target); el.textContent = Math.floor(cur).toLocaleString("uz-UZ"); if (cur >= target) clearInterval(t); }, 20);
}
const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll(".stat-num").forEach(animCount); statsObs.unobserve(e.target); } });
}, { threshold: .5 });
const heroStats = document.querySelector(".hero-stats");
if (heroStats) statsObs.observe(heroStats);

// ===================== CURSOR =====================
const cursor = document.querySelector(".cursor"), follower = document.querySelector(".cursor-follower");
let mx = 0, my = 0, fx = 0, fy = 0;
document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + "px"; cursor.style.top = my + "px"; });
(function loop() { fx += (mx - fx) * .12; fy += (my - fy) * .12; follower.style.left = fx + "px"; follower.style.top = fy + "px"; requestAnimationFrame(loop); })();
document.querySelectorAll("a,button,.product-card,.genre-card,.feature-card,.gm-card,.kab-order-card").forEach(el => {
    el.addEventListener("mouseenter", () => { cursor.style.width = "20px"; cursor.style.height = "20px"; follower.style.width = "50px"; follower.style.height = "50px"; follower.style.opacity = ".3"; });
    el.addEventListener("mouseleave", () => { cursor.style.width = ""; cursor.style.height = ""; follower.style.width = ""; follower.style.height = ""; follower.style.opacity = ""; });
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => { const t = document.querySelector(a.getAttribute("href")); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); } });
});

// ===================== INIT =====================
initAuth();
renderGenres();
renderProducts();
renderReviews();
updateCartCount();

// ===================== SPIN WHEEL =====================
const SPIN_SEGMENTS = [
    { label: "15%", code: "MANGA15", pct: 15, color: "#ff6b35", emoji: "🎉" },
    { label: "5%", code: "MANGA5", pct: 5, color: "#9c27b0", emoji: "😊" },
    { label: "20%", code: "MANGA20", pct: 20, color: "#e91e63", emoji: "🔥" },
    { label: "10%", code: "MANGA10", pct: 10, color: "#2196f3", emoji: "⭐" },
    { label: "25%", code: "MANGA25", pct: 25, color: "#4caf50", emoji: "🏆" },
    { label: "5%", code: "MANGA5B", pct: 5, color: "#ff9800", emoji: "😊" },
    { label: "30%", code: "MANGA30", pct: 30, color: "#f44336", emoji: "🎊" },
    { label: "10%", code: "MANGA10B", pct: 10, color: "#00bcd4", emoji: "⭐" },
];

const SPIN_LS_KEY = "mangauz_spin_date";
const PROMO_LS_KEY = "mangauz_promos";

// Save won promos
function savePromo(code, pct) {
    const promos = JSON.parse(localStorage.getItem(PROMO_LS_KEY) || "{}");
    promos[code] = pct;
    localStorage.setItem(PROMO_LS_KEY, JSON.stringify(promos));
}
function getPromoDiscount(code) {
    const promos = JSON.parse(localStorage.getItem(PROMO_LS_KEY) || "{}");
    return promos[code.toUpperCase()] || null;
}

// Draw wheel
const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const N = SPIN_SEGMENTS.length;
const ARC = (2 * Math.PI) / N;
let currentRotation = 0;

function drawWheel(rot) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2, cy = canvas.height / 2, r = cx - 4;
    SPIN_SEGMENTS.forEach((seg, i) => {
        const start = rot + i * ARC - Math.PI / 2;
        const end = start + ARC;
        // Segment
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, end);
        ctx.closePath();
        ctx.fillStyle = seg.color;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.15)";
        ctx.lineWidth = 2;
        ctx.stroke();
        // Text
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(start + ARC / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 15px Nunito, sans-serif";
        ctx.shadowColor = "rgba(0,0,0,.4)";
        ctx.shadowBlur = 4;
        ctx.fillText(seg.label, r - 12, 5);
        ctx.restore();
    });
    // Center circle
    ctx.beginPath();
    ctx.arc(cx, cy, 26, 0, 2 * Math.PI);
    ctx.fillStyle = "#0d0d1a";
    ctx.fill();
    ctx.strokeStyle = "rgba(255,107,53,.5)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px Nunito";
    ctx.textAlign = "center";
    ctx.shadowBlur = 0;
    ctx.fillText("🎡", cx, cy + 5);
}
drawWheel(0);

// Spin logic
let isSpinning = false;

function canSpin() {
    return true; // Limit yo'q — har doim spin qilish mumkin
}

function doSpin() {
    if (isSpinning) return;
    if (!canSpin()) {
        return;
    }
    // Random winner
    const winIdx = Math.floor(Math.random() * N);
    const winner = SPIN_SEGMENTS[winIdx];
    // Extra full rotations (4-7) + land on winner
    const extraRots = (4 + Math.floor(Math.random() * 4)) * 2 * Math.PI;
    // Angle so pointer (top = -PI/2) lands on winner center
    const targetAngle = -(winIdx * ARC + ARC / 2);
    const totalSpin = extraRots + (targetAngle - (currentRotation % (2 * Math.PI)) + 4 * Math.PI) % (2 * Math.PI);
    const duration = 4000 + Math.random() * 1500;
    const startRot = currentRotation;
    const startTime = performance.now();

    isSpinning = true;
    $("spinBtn").disabled = true;
    $("spinResult").style.display = "none";

    function easeOut(t) { return 1 - Math.pow(1 - t, 4); }

    function animate(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        currentRotation = startRot + totalSpin * easeOut(t);
        drawWheel(currentRotation);
        if (t < 1) { requestAnimationFrame(animate); }
        else {
            isSpinning = false;
            localStorage.setItem(SPIN_LS_KEY, new Date().toISOString());
            savePromo(winner.code, winner.pct);
            showSpinResult(winner);
        }
    }
    requestAnimationFrame(animate);
}

function showSpinResult(winner) {
    $("srEmoji").textContent = winner.emoji;
    $("srTitle").textContent = "Tabriklaymiz! " + winner.label + " chegirma yutdingiz!";
    $("srCode").textContent = winner.code;
    $("srDiscount").textContent = "Barcha xaridlarga " + winner.pct + "% chegirma";
    $("spinResult").style.display = "block";
    $("spinNote").textContent = "✅ Promokod saqlandi! Yana spin qilishingiz mumkin.";
    showToast("🎉 " + winner.pct + "% chegirma yutdingiz! Kod: " + winner.code, "success");
}

// Copy btn
$("srCopyBtn").addEventListener("click", () => {
    const code = $("srCode").textContent;
    navigator.clipboard.writeText(code).then(() => {
        $("srCopyBtn").textContent = "✅ Nusxalandi!";
        setTimeout(() => $("srCopyBtn").textContent = "📋 Nusxa", 2000);
        showToast("📋 Promokod nusxalandi!", "success");
    });
});

$("srShopBtn").addEventListener("click", () => {
    closeSpinModal();
    document.querySelector("#store").scrollIntoView({ behavior: "smooth" });
});

// Open/close spin modal
const openSpinModal = () => { $("spinModal").classList.add("open"); $("spinOverlay").classList.add("open"); lockBody(); };
const closeSpinModal = () => { $("spinModal").classList.remove("open"); $("spinOverlay").classList.remove("open"); unlockBody(); };

$("spinFloatBtn").addEventListener("click", openSpinModal);
$("spinClose").addEventListener("click", closeSpinModal);
$("spinOverlay").addEventListener("click", closeSpinModal);
$("spinBtn").addEventListener("click", doSpin);

// No spin limit

// ===================== PROMO CODE IN ORDER =====================
let appliedPromo = null;

$("promoApplyBtn").addEventListener("click", () => {
    const code = $("om-promo").value.trim().toUpperCase();
    const statusEl = $("promoStatus");
    const savingEl = $("promoSaving");
    if (!code) { statusEl.textContent = "Promokodni kiriting"; statusEl.className = "promo-status err"; return; }
    const pct = getPromoDiscount(code);
    if (!pct) {
        statusEl.textContent = "❌ Noto'g'ri yoki noma'lum promokod";
        statusEl.className = "promo-status err";
        savingEl.style.display = "none";
        appliedPromo = null;
        return;
    }
    appliedPromo = { code, pct };
    statusEl.textContent = "✅ Promokod qo'llandi!";
    statusEl.className = "promo-status ok";
    // Show saving amount
    const total = cart.reduce((s, i) => s + i.price, 0);
    const saving = Math.round(total * pct / 100);
    const newTotal = total - saving;
    savingEl.innerHTML = `🏷️ <b>${pct}%</b> chegirma: <b>−${fmt(saving)}</b> so'm → Jami: <b>${fmt(newTotal)}</b> so'm`;
    savingEl.style.display = "block";
    showToast("✅ " + pct + "% chegirma qo'llandi!", "success");
});

// Patch confirmOrderBtn to use promo discount
const _origConfirm = $("confirmOrderBtn").onclick;
$("confirmOrderBtn").addEventListener("click", () => {
    // discount is handled inside existing confirmOrderBtn listener
    // we patch the total before order saves
}, true);

// Override total calculation in order — patch openOrder to show promo field reset
const _origOpenOrder = openOrder;
// Reset promo on each open
const origCheckoutBtn = $("checkoutBtn");
origCheckoutBtn.addEventListener("click", () => {
    appliedPromo = null;
    if ($("om-promo")) $("om-promo").value = "";
    if ($("promoStatus")) { $("promoStatus").textContent = ""; $("promoStatus").className = "promo-status"; }
    if ($("promoSaving")) $("promoSaving").style.display = "none";
}, true);

// Patch confirmOrderBtn total to apply discount
document.getElementById("confirmOrderBtn").addEventListener("click", function patchPromo(e) {
    // This runs BEFORE the main listener because of event bubbling order
    // We temporarily monkey-patch the cart total calculation
    if (appliedPromo) {
        const pct = appliedPromo.pct;
        // Store original prices
        window._origPrices = cart.map(i => i.price);
        cart.forEach(i => { i.price = Math.round(i.price * (1 - pct / 100)); });
    }
}, true); // capture phase = runs first

// After confirm, restore prices
document.getElementById("confirmOrderBtn").addEventListener("click", function restorePromo() {
    setTimeout(() => {
        if (window._origPrices) {
            cart.forEach((item, i) => { if (window._origPrices[i]) item.price = window._origPrices[i]; });
            window._origPrices = null;
        }
        appliedPromo = null;
    }, 100);
});