// ===================== DATA =====================

const GENRES = [
  { id: "action", icon: "⚔️", name: "Aksiya", color: "#ff6b35", desc: "Epik janglar, superkuchlar va cheksiz sarguzashtlar — yurak tepib ketadigan aksiya manga janri!" },
  { id: "romance", icon: "💕", name: "Romantika", color: "#e91e63", desc: "Sevgi, his-tuyg'ular va yurak to'lqinlantiradigan romanlar — eng yaxshi romantik mangalar." },
  { id: "fantasy", icon: "🔮", name: "Fantastika", color: "#9c27b0", desc: "Sehrli olamlar, ajdaholar va ilohiy kuchlar — xayoliy dunyolarga sayohat qiling!" },
  { id: "comedy", icon: "🤣", name: "Komediya", color: "#ff9800", desc: "Kulgi, hazil va yoqimli lahzalar — kayfiyatingizni ko'taradigan eng yaxshi komediya mangalar." },
  { id: "adventure", icon: "🌍", name: "Sarguzasht", color: "#4caf50", desc: "Uzoq yo'llar, yangi dunyolar va cheksiz imkoniyatlar — sarguzasht manga sizni kutmoqda!" },
  { id: "sport", icon: "🏆", name: "Sport", color: "#ffc107", desc: "Jamoaviy ruh, g'alaba va mag'lubiyat — sport manga sizni ilhomlantiradi!" },
  { id: "horror", icon: "👻", name: "Dahshat", color: "#546e7a", desc: "Qo'rqinchli mavjudotlar, sirli voqealar — yuragingiz likillaydigan horror mangalar." },
  { id: "scifi", icon: "🚀", name: "Ilmiy Fantastika", color: "#00bcd4", desc: "Robotlar, kelajak va kosmik sarguzashtlar — ilmiy fantastika olamiga qadam qo'ying!" },
  { id: "slice", icon: "☕", name: "Kundalik Hayot", color: "#795548", desc: "Oddiy hayot, do'stlik va baxtli lahzalar — qulay va issiq kundalik hayot mangalari." },
  { id: "thriller", icon: "🕵️", name: "Triller", color: "#37474f", desc: "Sirlar, jumboqlar va kutilmagan burilishlar — triller manga sizni ekranga mixlab qo'yadi." },
  { id: "historical", icon: "🏯", name: "Tarixiy", color: "#8d6e63", desc: "Qadimgi Yaponiya, samuroylar va tarixiy voqealar — vaqt osha sayohat qiling!" },
  { id: "mecha", icon: "🤖", name: "Mecha", color: "#455a64", desc: "Gigant robotlar, texnologiya va inson ruhi — mecha manga janrining eng yaxshilari." },
];

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
  { name: "Jasur T.", date: "2025-03-10", text: "MangaUZ juda ajoyib! Kitoblar sifati a'lo, yetkazib berish tez. Har doim bu yerdan xarid qilaman.", stars: 5, avatar: "J", color: "#ff6b35" },
  { name: "Malika R.", date: "2025-02-28", text: "O'zbek tilidagi manga topish qiyin edi, endi MangaUZ bor! Demon Slayer seriyasini to'liq oldim.", stars: 5, avatar: "M", color: "#e91e63" },
  { name: "Bobur N.", date: "2025-03-15", text: "Narxlar qulay, to'lov oson. Payme orqali 1 daqiqada to'ladim, ertasi kuni kitob qo'limda edi!", stars: 5, avatar: "B", color: "#9c27b0" },
  { name: "Dilnoza K.", date: "2025-01-20", text: "Xizmat darajasi juda yaxshi! Savollarimga tez javob berishadi. Rahmat MangaUZ jamoasiga!", stars: 5, avatar: "D", color: "#4caf50" },
  { name: "Sardor A.", date: "2025-03-05", text: "Jujutsu Kaisen barcha volumlarini shu yerdan oldim. Sifat va narxga rozi! Hammaga tavsiya qilaman.", stars: 5, avatar: "S", color: "#00bcd4" },
  { name: "Feruza H.", date: "2025-02-14", text: "Chegirmalar aksiyalari zo'r! One Piece'ni 30% chegirmaga oldim. Juda xursandman!", stars: 5, avatar: "F", color: "#ff9800" },
  { name: "Ulugbek M.", date: "2025-03-22", text: "Birinchi buyurtmam edi, hamma narsa mukammal ketdi. Endi doimiy mijozman!", stars: 5, avatar: "U", color: "#2196f3" },
  { name: "Nargiza B.", date: "2025-01-30", text: "Romantika janrida o'zbek tilidagi mangalar juda ko'p. Sayt ishlatish ham juda qulay!", stars: 5, avatar: "N", color: "#673ab7" },
  { name: "Sherzod Q.", date: "2025-04-02", text: "Death Note va Tokyo Ghoul ikkalasini ham oldim, ikkalasi ham original. Sifat 10/10!", stars: 5, avatar: "Sh", color: "#607d8b" },
  { name: "Kamola Y.", date: "2025-04-11", text: "Haikyuu serialini yig'ib yuruvdim, nihoyat to'liq topildi! Tez yetkazib berishdi.", stars: 5, avatar: "K", color: "#ffc107" },
];

// ===================== STATE =====================
let cart = [];
let orderNum = 1000 + Math.floor(Math.random() * 9000);

// ===================== HELPERS =====================
const fmt = n => n.toLocaleString("uz-UZ");
const lockBody = () => document.body.style.overflow = "hidden";
const unlockBody = () => document.body.style.overflow = "";

function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast show" + (type ? " toast-" + type : "");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("show"), 3500);
}

// ===================== CART =====================
function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

function renderCart() {
  const el = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");
  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty">🛒 Savatcha bo\'sh<br/><small>Mahsulot qo\'shing!</small></div>';
    footer.style.display = "none";
    return;
  }
  footer.style.display = "block";
  document.getElementById("cartTotal").textContent = fmt(cart.reduce((s, i) => s + i.price, 0));
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
  if (cart.find(x => x.id === id)) { showToast("⚠️ Bu kitob allaqachon savatchada!", "warn"); return; }
  cart.push({ ...p });
  updateCartCount();
  renderCart();
  showToast(`✅ "${p.title}" savatchaga qo'shildi!`, "success");
  const btn = document.getElementById("cartBtn");
  btn.classList.add("pop");
  setTimeout(() => btn.classList.remove("pop"), 400);
}

function removeFromCart(idx) {
  const name = cart[idx]?.title;
  cart.splice(idx, 1);
  updateCartCount();
  renderCart();
  showToast(`🗑️ "${name}" o'chirildi`);
}

// ===================== CART PANEL =====================
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");

const openCart = () => { cartModal.classList.add("open"); cartOverlay.classList.add("open"); lockBody(); };
const closeCart = () => { cartModal.classList.remove("open"); cartOverlay.classList.remove("open"); unlockBody(); };

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// emailjs yuklanishini kutish
function loadEmailJS() {
  return new Promise(resolve => {
    if (window.emailjs) { resolve(); return; }
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => { emailjs.init(EMAILJS_PUBLIC_KEY); resolve(); };
    document.head.appendChild(s);
  });
}

const EMAILJS_PUBLIC_KEY = "rKxXXXXXXX";
const EMAILJS_SERVICE_ID = "service_XXXXX";
const EMAILJS_TEMPLATE_ID = "template_XXXXX";
const ADMIN_EMAIL = "sizning@email.com";

// ===================== ORDERS — localStorage =====================
const LS_KEY = "mangauz_orders";

function loadOrders() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; }
  catch { return []; }
}
function saveOrders(orders) {
  localStorage.setItem(LS_KEY, JSON.stringify(orders));
}
function addOrder(order) {
  const orders = loadOrders();
  orders.unshift(order);           // eng yangi yuqorida
  saveOrders(orders);
}
function updateOrderStatus(id, status) {
  const orders = loadOrders();
  const o = orders.find(x => x.id === id);
  if (o) { o.status = status; saveOrders(orders); }
}

// ===================== ORDER MODAL =====================
const checkoutBtn = document.getElementById("checkoutBtn");
const orderModal = document.getElementById("orderModal");
const orderOverlay = document.getElementById("orderOverlay");
const orderClose = document.getElementById("orderClose");
const confirmBtn = document.getElementById("confirmOrderBtn");
const successModal = document.getElementById("successModal");
const successOverlay = document.getElementById("successOverlay");

function openOrder() {
  if (!cart.length) { showToast("⚠️ Savatcha bo'sh!", "warn"); return; }
  closeCart();
  document.getElementById("omItems").innerHTML = cart.map(i => `
    <div class="om-item">
      <div class="om-item-cover" style="background:${i.bg}">${i.cover}</div>
      <div class="om-item-info"><div class="om-item-name">${i.title}</div><small>${i.volume}</small></div>
      <div class="om-item-price">${fmt(i.price)} so'm</div>
    </div>`).join("");
  document.getElementById("omTotal").textContent = fmt(cart.reduce((s, i) => s + i.price, 0));
  orderModal.classList.add("open");
  orderOverlay.classList.add("open");
  lockBody();
}
const closeOrder = () => { orderModal.classList.remove("open"); orderOverlay.classList.remove("open"); unlockBody(); };
const closeSuccess = () => { successModal.classList.remove("open"); successOverlay.classList.remove("open"); unlockBody(); };

checkoutBtn.addEventListener("click", openOrder);
orderClose.addEventListener("click", closeOrder);
orderOverlay.addEventListener("click", closeOrder);
successOverlay.addEventListener("click", closeSuccess);

confirmBtn.addEventListener("click", async () => {
  const name = document.getElementById("om-name").value.trim();
  const phone = document.getElementById("om-phone").value.trim();
  const address = document.getElementById("om-address").value.trim();
  const payEl = document.querySelector('input[name="pay"]:checked');
  const pay = payEl ? payEl.value : "payme";

  if (!name || !phone || !address) {
    showToast("⚠️ Barcha maydonlarni to'ldiring!", "warn");
    [["om-name", !name], ["om-phone", !phone], ["om-address", !address]].filter(([, b]) => b).forEach(([id]) => {
      const el = document.getElementById(id);
      el.style.borderColor = "#e91e63"; el.classList.add("shake");
      setTimeout(() => { el.style.borderColor = ""; el.classList.remove("shake"); }, 900);
    });
    return;
  }

  confirmBtn.textContent = "⏳ Yuborilmoqda...";
  confirmBtn.disabled = true;

  // Buyurtma ob'ekti
  orderNum++;
  const orderId = "MU-" + orderNum;
  const total = cart.reduce((s, i) => s + i.price, 0);
  const itemsText = cart.map(i => `${i.cover} ${i.title} (${i.volume}) — ${fmt(i.price)} so'm`).join("\n");
  const now = new Date();
  const dateStr = now.toLocaleDateString("uz-UZ") + " " + now.toLocaleTimeString("uz-UZ");

  const newOrder = {
    id: orderId,
    date: dateStr,
    name,
    phone,
    address,
    pay,
    total,
    items: cart.map(i => ({ title: i.title, volume: i.volume, price: i.price, cover: i.cover, bg: i.bg })),
    status: "pending"   // pending | confirmed | delivered
  };

  // localStorage ga saqlash
  addOrder(newOrder);

  // EmailJS ga yuborish (agar sozlangan bo'lsa)
  const ejsReady = EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";
  if (ejsReady) {
    try {
      await loadEmailJS();
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: ADMIN_EMAIL,
        order_id: orderId,
        order_date: dateStr,
        client_name: name,
        client_phone: phone,
        address,
        payment: pay,
        items_list: itemsText,
        total_sum: fmt(total) + " so'm",
      });
    } catch (e) {
      console.warn("EmailJS xatolik:", e);
    }
  }

  // UI yangilash
  document.getElementById("smOrderId").textContent = orderId;
  closeOrder();
  successModal.classList.add("open");
  successOverlay.classList.add("open");
  lockBody();
  launchConfetti();

  cart = []; updateCartCount(); renderCart();
  ["om-name", "om-phone", "om-address"].forEach(id => document.getElementById(id).value = "");
  confirmBtn.textContent = "✅ Buyurtmani tasdiqlash";
  confirmBtn.disabled = false;
});

document.getElementById("smCloseBtn").addEventListener("click", closeSuccess);

// ===================== CONTACT FORM EMAIL =====================
// Aloqa formasini ham emailjs orqali yuborish
async function sendContactEmail(name, phone, email, msg) {
  const ejsReady = EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";
  if (!ejsReady) return true; // sozlanmagan bo'lsa o'tkazib yuborish
  try {
    await loadEmailJS();
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: ADMIN_EMAIL,
      order_id: "XABAR",
      order_date: new Date().toLocaleString("uz-UZ"),
      client_name: name,
      client_phone: phone,
      address: email,
      payment: "—",
      items_list: msg,
      total_sum: "—",
    });
    return true;
  } catch (e) { console.warn(e); return false; }
}

// ===================== ADMIN PANEL =====================
const STATUS_LABELS = { pending: "🟡 Kutilmoqda", confirmed: "🟢 Tasdiqlandi", delivered: "✅ Yetkazildi" };
const STATUS_NEXT = { pending: "confirmed", confirmed: "delivered", delivered: "pending" };
const ADMIN_PASS = "manga2025"; // ← o'zgartiring!

function openAdminPanel() {
  const pass = prompt("🔐 Admin parolini kiriting:");
  if (pass !== ADMIN_PASS) { showToast("❌ Noto'g'ri parol!", "warn"); return; }
  renderAdminOrders();
  document.getElementById("adminPanel").classList.add("open");
  document.getElementById("adminOverlay").classList.add("open");
  lockBody();
}
const closeAdmin = () => {
  document.getElementById("adminPanel").classList.remove("open");
  document.getElementById("adminOverlay").classList.remove("open");
  unlockBody();
};
document.getElementById("adminOverlay").addEventListener("click", closeAdmin);
document.getElementById("adminClose").addEventListener("click", closeAdmin);
document.getElementById("adminClearBtn").addEventListener("click", () => {
  if (confirm("Barcha buyurtmalarni o'chirasizmi?")) {
    saveOrders([]); renderAdminOrders();
    showToast("🗑️ Barcha buyurtmalar o'chirildi");
  }
});

// Admin filter
document.querySelectorAll(".admin-filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".admin-filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderAdminOrders(btn.dataset.status);
  });
});

function renderAdminOrders(statusFilter = "all") {
  const orders = loadOrders();
  const filtered = statusFilter === "all" ? orders : orders.filter(o => o.status === statusFilter);
  const list = document.getElementById("adminOrdersList");

  // stats
  document.getElementById("aStatAll").textContent = orders.length;
  document.getElementById("aStatPending").textContent = orders.filter(o => o.status === "pending").length;
  document.getElementById("aStatConfirmed").textContent = orders.filter(o => o.status === "confirmed").length;
  document.getElementById("aStatDelivered").textContent = orders.filter(o => o.status === "delivered").length;
  document.getElementById("aStatRevenue").textContent = fmt(orders.reduce((s, o) => s + o.total, 0));

  if (!filtered.length) {
    list.innerHTML = '<div class="admin-empty">📭 Hozircha buyurtma yo\'q</div>';
    return;
  }
  list.innerHTML = filtered.map(o => `
    <div class="admin-order-card status-${o.status}">
      <div class="aoc-header">
        <div class="aoc-id">${o.id}</div>
        <div class="aoc-date">${o.date}</div>
        <button class="aoc-status-btn" onclick="cycleStatus('${o.id}')">${STATUS_LABELS[o.status]}</button>
      </div>
      <div class="aoc-client">
        <span>👤 ${o.name}</span>
        <span>📞 ${o.phone}</span>
        <span>📍 ${o.address}</span>
        <span>💳 ${o.pay}</span>
      </div>
      <div class="aoc-items">
        ${o.items.map(i => `<span class="aoc-item">${i.cover} ${i.title}</span>`).join("")}
      </div>
      <div class="aoc-footer">
        <strong>Jami: ${fmt(o.total)} so'm</strong>
        <button class="aoc-del" onclick="deleteOrder('${o.id}')">🗑️ O'chirish</button>
      </div>
    </div>`).join("");
}

function cycleStatus(id) {
  const orders = loadOrders();
  const o = orders.find(x => x.id === id);
  if (!o) return;
  o.status = STATUS_NEXT[o.status];
  saveOrders(orders);
  const fBtn = document.querySelector(".admin-filter.active");
  renderAdminOrders(fBtn ? fBtn.dataset.status : "all");
  showToast(`✅ ${id}: ${STATUS_LABELS[o.status]}`, "success");
}

function deleteOrder(id) {
  if (!confirm(`${id} buyurtmani o'chirasizmi?`)) return;
  const orders = loadOrders().filter(o => o.id !== id);
  saveOrders(orders);
  const fBtn = document.querySelector(".admin-filter.active");
  renderAdminOrders(fBtn ? fBtn.dataset.status : "all");
  showToast("🗑️ Buyurtma o'chirildi");
}

// Admin tugmasi (footer yoki nav)
document.getElementById("adminOpenBtn").addEventListener("click", openAdminPanel);

// ===================== CONFETTI =====================
function launchConfetti() {
  const wrap = document.getElementById("smConfetti");
  wrap.innerHTML = "";
  const colors = ["#ff6b35", "#ffc107", "#4caf50", "#e91e63", "#00bcd4", "#9c27b0", "#fff"];
  for (let i = 0; i < 70; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.cssText = `left:${Math.random() * 100}%;background:${colors[i % colors.length]};animation-duration:${0.8 + Math.random() * 1.2}s;animation-delay:${Math.random() * 0.4}s;width:${6 + Math.random() * 8}px;height:${6 + Math.random() * 8}px;border-radius:${Math.random() > .5 ? "50%" : "3px"};`;
    wrap.appendChild(el);
  }
}

// ===================== GENRE MODAL =====================
const genreModal = document.getElementById("genreModal");
const genreOverlay = document.getElementById("genreOverlay");
const genreClose = document.getElementById("genreClose");

function openGenreModal(genreId) {
  const g = GENRES.find(x => x.id === genreId);
  if (!g) return;
  const items = PRODUCTS.filter(p => p.genre === genreId);
  document.getElementById("gmIcon").textContent = g.icon;
  document.getElementById("gmTitle").textContent = g.name;
  document.getElementById("gmDesc").textContent = g.desc;
  genreModal.style.setProperty("--gc", g.color);
  document.getElementById("gmProducts").innerHTML = items.length
    ? items.map(p => `
      <div class="gm-card">
        <div class="gm-card-cover" style="background:${p.bg}">
          ${p.tag === "new" ? '<div class="gm-badge new">Yangi</div>' : ""}
          ${p.tag === "sale" ? '<div class="gm-badge sale">Sale</div>' : ""}
          ${p.tag === "bestseller" ? '<div class="gm-badge best">🔥 Top</div>' : ""}
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
  genreModal.classList.add("open");
  genreOverlay.classList.add("open");
  lockBody();
}

const closeGenreModal = () => { genreModal.classList.remove("open"); genreOverlay.classList.remove("open"); unlockBody(); };
genreClose.addEventListener("click", closeGenreModal);
genreOverlay.addEventListener("click", closeGenreModal);

// ===================== RENDER GENRES =====================
function renderGenres() {
  const grid = document.getElementById("genresGrid");
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
  const grid = document.getElementById("productsGrid");
  const list = filter === "all" ? PRODUCTS
    : filter === "uz" ? PRODUCTS.filter(p => p.uz)
      : PRODUCTS.filter(p => p.tag === filter);
  grid.innerHTML = list.map(p => `
    <div class="product-card reveal">
      <div class="product-cover" style="background:${p.bg}">
        ${p.tag === "bestseller" ? '<div class="product-badge bestseller">🔥 Bestseller</div>' : ""}
        ${p.tag === "new" ? '<div class="product-badge new">✨ Yangi</div>' : ""}
        ${p.tag === "sale" ? '<div class="product-badge sale">🏷️ Sale</div>' : ""}
        ${p.uz ? '<div class="product-badge-uz">🇺🇿</div>' : ""}
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
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  });
});

// ===================== REVIEWS =====================
function renderReviews() {
  const track = document.getElementById("reviewsTrack");
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

// ===================== CONTACT FORM =====================
document.getElementById("sendBtn").addEventListener("click", async function () {
  const ids = ["cf-name", "cf-phone", "cf-email", "cf-msg"];
  let ok = true;
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) { ok = false; el.style.borderColor = "#e91e63"; setTimeout(() => el.style.borderColor = "", 2000); }
  });
  if (!ok) { showToast("⚠️ Barcha maydonlarni to'ldiring!", "warn"); return; }
  this.textContent = "⏳ Yuborilmoqda..."; this.disabled = true;

  const name = document.getElementById("cf-name").value.trim();
  const phone = document.getElementById("cf-phone").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const msg = document.getElementById("cf-msg").value.trim();

  await sendContactEmail(name, phone, email, msg);

  ids.forEach(id => document.getElementById(id).value = "");
  document.getElementById("formSuccess").style.display = "block";
  showToast("✅ Xabar yuborildi! Tez orada javob beramiz.", "success");
  this.textContent = "Yuborish →"; this.disabled = false;
  setTimeout(() => document.getElementById("formSuccess").style.display = "none", 5000);
});

// ===================== LOADER =====================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.querySelectorAll("#home .reveal").forEach((el, i) =>
      setTimeout(() => el.classList.add("visible"), i * 150));
  }, 1900);
});

// ===================== NAVBAR =====================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  let cur = "";
  document.querySelectorAll("section[id],footer[id]").forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  document.querySelectorAll(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.page === cur));
});

// ===================== MOBILE MENU =====================
const menuBtn = document.getElementById("menuBtn"), mobileMenu = document.getElementById("mobileMenu");
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
}, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ===================== COUNTER =====================
function animCount(el) {
  const target = parseInt(el.dataset.target); let cur = 0; const step = target / 60;
  const t = setInterval(() => { cur = Math.min(cur + step, target); el.textContent = Math.floor(cur).toLocaleString("uz-UZ"); if (cur >= target) clearInterval(t); }, 20);
}
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll(".stat-num").forEach(animCount); statsObs.unobserve(e.target); } });
}, { threshold: 0.5 });
const heroStats = document.querySelector(".hero-stats");
if (heroStats) statsObs.observe(heroStats);

// ===================== CURSOR =====================
const cursor = document.querySelector(".cursor"), follower = document.querySelector(".cursor-follower");
let mx = 0, my = 0, fx = 0, fy = 0;
document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + "px"; cursor.style.top = my + "px"; });
(function loop() { fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12; follower.style.left = fx + "px"; follower.style.top = fy + "px"; requestAnimationFrame(loop); })();
document.querySelectorAll("a,button,.product-card,.genre-card,.feature-card,.gm-card").forEach(el => {
  el.addEventListener("mouseenter", () => { cursor.style.width = "20px"; cursor.style.height = "20px"; follower.style.width = "50px"; follower.style.height = "50px"; follower.style.opacity = "0.3"; });
  el.addEventListener("mouseleave", () => { cursor.style.width = ""; cursor.style.height = ""; follower.style.width = ""; follower.style.height = ""; follower.style.opacity = ""; });
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => { const t = document.querySelector(a.getAttribute("href")); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); } });
});

// ===================== INIT =====================
renderGenres();
renderProducts();
renderReviews();
updateCartCount();
