/*************** DATA: نصوص من الصورة + أمثلة (قابلة للتعديل) ***************/
const DATA = {
  banner: "https://picsum.photos/900/500?random=21",
  bizName: "ألكسيس بيتزا",
  bizAddr: "مدينة نصر - شارع تجريبي",
  phone: "+201009105861",
  categories: [
    { id: "pizza", title: "بيتزا" },
    { id: "main", title: "أطباق رئيسية" },
    { id: "sides", title: "مقبلات" },
    { id: "drinks", title: "مشروبات" },
    { id: "dessert", title: "حلويات" },
    { id: "kabab", title: "مشاوي" },
  ],
  // Extracted / typed items (best-effort from your screenshots)
  items: [
    // Pizza (sample many items similar to screenshot)
    {
      id: 1001,
      cat: "pizza",
      title: "بيتزا مارغريتا",
      desc: "صلصة طماطم، جبنة موزاريلا، ريحان",
      price: 220,
      img: "https://picsum.photos/seed/p1/160/120",
    },
    { id: 1002, cat: "pizza", title: "بيتزا دجاج", desc: "دجاج مشوي، جبنة، ذرة", price: 260, img: "https://picsum.photos/seed/p2/160/120" },
    {
      id: 1003,
      cat: "pizza",
      title: "بيتزا سي فود",
      desc: "روبيان، كالماري، صلصة حارة",
      price: 300,
      img: "https://picsum.photos/seed/p3/160/120",
    },
    { id: 1004, cat: "pizza", title: "بيتزا أربع أجبان", desc: "مزيج جبن طازج", price: 280, img: "https://picsum.photos/seed/p4/160/120" },
    { id: 1005, cat: "pizza", title: "بيتزا مشروم", desc: "فطر طازج، جبنة", price: 240, img: "https://picsum.photos/seed/p5/160/120" },

    // Main dishes
    {
      id: 2001,
      cat: "main",
      title: "مكرونة بالبشاميل",
      desc: "مكرونة باللحم والبشاميل",
      price: 95,
      img: "https://picsum.photos/seed/m1/160/120",
    },
    { id: 2002, cat: "main", title: "مشاوي مشكلة", desc: "تشكيلة مشاوي مع بطاطس", price: 210, img: "https://picsum.photos/seed/m2/160/120" },
    { id: 2003, cat: "main", title: "سندوتش شاورما", desc: "شاورما دجاج مع الطحينة", price: 70, img: "https://picsum.photos/seed/m3/160/120" },

    // Sides
    { id: 3001, cat: "sides", title: "بطاطس شيبسي", desc: "بطاطس مقلية مقرمشة", price: 45, img: "https://picsum.photos/seed/s1/160/120" },
    { id: 3002, cat: "sides", title: "سلطة خضراء", desc: "خس، خس روماني، صوص", price: 35, img: "https://picsum.photos/seed/s2/160/120" },

    // Drinks
    { id: 4001, cat: "drinks", title: "عصير برتقال", desc: "كوب عصير طازج", price: 30, img: "https://picsum.photos/seed/d1/160/120" },
    { id: 4002, cat: "drinks", title: "مشروب غازي", desc: "كولا / سبرايت", price: 15, img: "https://picsum.photos/seed/d2/160/120" },

    // Dessert
    { id: 5001, cat: "dessert", title: "تشيز كيك", desc: "تشيز كيك بالفرن", price: 85, img: "https://picsum.photos/seed/des1/160/120" },

    // Kabab / grills
    { id: 6001, cat: "kabab", title: "كباب عربي", desc: "كباب بلدي مع أرز", price: 160, img: "https://picsum.photos/seed/k1/160/120" },
    { id: 6002, cat: "kabab", title: "كفتة مشوية", desc: "كفتة مشوية مع صوص", price: 140, img: "https://picsum.photos/seed/k2/160/120" },
  ],

  // Working hours (from your image)
  hours: [
    { day: "السبت", state: "مغلق", times: "" },
    { day: "الأحد", state: "مفتوح", times: "من 11 ص الى 11 م" },
    { day: "الإثنين", state: "مفتوح", times: "من 11 ص الى 11 م" },
    { day: "الثلاثاء", state: "مفتوح", times: "من 11 ص الى 11 م" },
    { day: "الأربعاء", state: "مفتوح", times: "من 11 ص الى 11 م" },
    { day: "الخميس", state: "مفتوح", times: "مفتوح طول اليوم" },
    { day: "الجمعة", state: "مغلق", times: "" },
  ],
};

/*************** initial render ***************/
// set header info
document.getElementById("banner").style.backgroundImage = `url('${DATA.banner}')`;
document.getElementById("bizTitle").textContent = DATA.bizName;
document.getElementById("bizName").textContent = DATA.bizName;
document.getElementById("bizAddr").textContent = DATA.bizAddr;
document.getElementById("bizPhone").textContent = DATA.phone;

// build category buttons
const catbar = document.getElementById("catbar");
DATA.categories.forEach((c, i) => {
  const b = document.createElement("button");
  b.className = "catbtn";
  b.dataset.cat = c.id;
  b.textContent = c.title;
  b.addEventListener("click", () => {
    // scroll to section
    document.querySelectorAll(".catbtn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const sec = document.querySelector(`[data-section="${c.id}"]`);
    if (sec) window.scrollTo({ top: sec.offsetTop - 90, behavior: "smooth" });
  });
  catbar.appendChild(b);
  if (i === 0) b.classList.add("active");
});

// render sections
const menuContent = document.getElementById("menuContent");
function renderSections() {
  menuContent.innerHTML = "";
  DATA.categories.forEach((cat) => {
    const sec = document.createElement("section");
    sec.className = "section";
    sec.dataset.section = cat.id;
    // title
    const t = document.createElement("div");
    t.className = "sec-title";
    t.textContent = cat.title;
    sec.appendChild(t);

    // items for this category
    const list = DATA.items.filter((it) => it.cat === cat.id);
    list.forEach((it) => {
      const el = document.createElement("div");
      el.className = "item";
      el.innerHTML = `
        <div class="thumb"><img src="${it.img}" alt="${escapeHtml(it.title)}"></div>
        <div class="info">
          <h4>${escapeHtml(it.title)}</h4>
          <p>${escapeHtml(it.desc)}</p>
          <button class="addbtn" data-id="${it.id}">أضف إلى السلة</button>
        </div>
        <div class="price-col">
          <div class="price">${it.price} ج.م</div>
        </div>
      `;
      sec.appendChild(el);
    });

    menuContent.appendChild(sec);
  });
}
renderSections();

/*************** ScrollSpy (category highlight on scroll) ***************/
let sectionEls = Array.from(document.querySelectorAll(".section"));
const catButtons = Array.from(document.querySelectorAll(".catbtn"));
function onScrollSpy() {
  const offset = window.scrollY + 120;
  let current = sectionEls[0];
  for (const s of sectionEls) {
    if (s.offsetTop <= offset) current = s;
    else break;
  }
  const id = current.dataset.section;
  catButtons.forEach((b) => b.classList.toggle("active", b.dataset.cat === id));
}
window.addEventListener("scroll", throttle(onScrollSpy, 120));
window.addEventListener("resize", () => {
  sectionEls = Array.from(document.querySelectorAll(".section"));
});

// initial
onScrollSpy();

/*************** Search filter ***************/
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll(".item").forEach((it) => {
    const title = it.querySelector("h4").textContent.trim().toLowerCase();
    const desc = it.querySelector("p").textContent.trim().toLowerCase();
    it.style.display = (title + " " + desc).includes(q) ? "flex" : "none";
  });
});

/*************** CART (localStorage) ***************/
let CART = JSON.parse(localStorage.getItem("branch_cart_v2") || "[]");

function saveCart() {
  localStorage.setItem("branch_cart_v2", JSON.stringify(CART));
  updateCartUI();
}

function addToCartById(id) {
  const item = DATA.items.find((x) => x.id === id);
  if (!item) return;
  const found = CART.find((i) => i.id === id);
  if (found) found.qty++;
  else CART.push({ ...item, qty: 1 });
  saveCart();
  toast("تمت الإضافة للسلة");
}

// delegate add buttons
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".addbtn");
  if (btn) {
    const id = Number(btn.dataset.id);
    addToCartById(id);
  }
});

// cart UI
const cartList = document.getElementById("cartList");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");

function updateCartUI() {
  cartList.innerHTML = "";
  if (CART.length === 0) {
    cartList.innerHTML = '<div style="color:var(--muted);padding:12px">السلة فارغة</div>';
  } else {
    CART.forEach((ci) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${ci.img}" alt="${escapeHtml(ci.title)}">
        <div style="flex:1">
          <div style="font-weight:700">${escapeHtml(ci.title)}</div>
          <div style="color:var(--muted);font-size:13px">${ci.qty} × ${ci.price} ج.م</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
          <div class="qty">
            <button data-action="minus" data-id="${ci.id}">-</button>
            <div style="padding:6px 8px;background:#fff;border-radius:6px">${ci.qty}</div>
            <button data-action="plus" data-id="${ci.id}">+</button>
          </div>
          <div style="font-weight:800">${(ci.qty * ci.price).toFixed(0)} ج.م</div>
        </div>
      `;
      cartList.appendChild(div);
    });

    // attach plus/minus
    cartList.querySelectorAll("button[data-action]").forEach((b) => {
      b.addEventListener("click", () => {
        const id = Number(b.dataset.id);
        const action = b.dataset.action;
        const idx = CART.findIndex((x) => x.id === id);
        if (idx === -1) return;
        if (action === "plus") CART[idx].qty++;
        else CART[idx].qty--;
        if (CART[idx].qty <= 0) CART.splice(idx, 1);
        saveCart();
      });
    });
  }
  // totals
  const total = CART.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotalEl.textContent = total.toFixed(0) + " ج.م";
  cartCountEl.textContent = CART.reduce((s, i) => s + i.qty, 0);
}
updateCartUI();

// open/close cart
const cartDrawer = document.getElementById("cartDrawer");
document.getElementById("openCartBtn").addEventListener("click", () => {
  cartDrawer.classList.toggle("open");
  cartDrawer.setAttribute("aria-hidden", !cartDrawer.classList.contains("open"));
});
document.getElementById("closeCart").addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
});

// checkout
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (CART.length === 0) {
    alert("السلة فارغة");
    return;
  }
  // For demo: open wa.me with order summary or send to backend
  const summary = CART.map((i) => `${i.qty}× ${i.title}`).join(" | ");
  const url = `https://wa.me/${DATA.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    "طلب: " + summary + " - الإجمالي: " + cartTotalEl.textContent
  )}`;
  window.open(url, "_blank");
});

/*************** Hours modal ***************/
const modalBack = document.getElementById("modalBack");
const hoursList = document.getElementById("hoursList");
document.getElementById("btnHours").addEventListener("click", () => {
  renderHours();
  modalBack.classList.add("open");
  modalBack.setAttribute("aria-hidden", "false");
});
document.getElementById("closeModal").addEventListener("click", () => {
  modalBack.classList.remove("open");
  modalBack.setAttribute("aria-hidden", "true");
});

function renderHours() {
  hoursList.innerHTML = "";
  DATA.hours.forEach((h) => {
    const div = document.createElement("div");
    div.className = "hours-item " + (h.state === "مغلق" ? "closed" : h.times.includes("مفتوح") ? "openall" : "");
    div.innerHTML = `<div>${h.day}</div><div style="text-align:left">${
      h.state === "مغلق" ? '<strong style="color:var(--accent)">مغلق</strong>' : h.times
    }</div>`;
    hoursList.appendChild(div);
  });
}

/*************** Contact modal ***************/
const contactBack = document.getElementById("contactBack");
document.getElementById("btnContact").addEventListener("click", () => {
  contactBack.style.display = "flex";
  contactBack.setAttribute("aria-hidden", "false");
});
document.getElementById("closeContact").addEventListener("click", () => {
  contactBack.style.display = "none";
  contactBack.setAttribute("aria-hidden", "true");
});
document.getElementById("sendContact").addEventListener("click", () => {
  const name = document.getElementById("cName").value.trim();
  const phone = document.getElementById("cPhone").value.trim();
  const msg = document.getElementById("cMsg").value.trim();
  if (!name || !phone) {
    alert("من فضلك اكتب الاسم و رقم الهاتف");
    return;
  }
  // For demo: open whatsapp with message
  const wa = `https://wa.me/${DATA.phone.replace(/\D/g, "")}?text=${encodeURIComponent("رسالة من: " + name + "\n" + phone + "\n\n" + msg)}`;
  window.open(wa, "_blank");
  document.getElementById("cName").value = "";
  document.getElementById("cPhone").value = "";
  document.getElementById("cMsg").value = "";
  contactBack.style.display = "none";
});

/*************** Home scroll button ***************/
document.getElementById("btnHome").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/*************** Helpers ***************/
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
function toast(msg) {
  const t = document.createElement("div");
  t.textContent = msg;
  t.style.position = "fixed";
  t.style.left = "50%";
  t.style.bottom = "90px";
  t.style.transform = "translateX(-50%)";
  t.style.background = "rgba(15,23,42,0.9)";
  t.style.color = "#fff";
  t.style.padding = "8px 14px";
  t.style.borderRadius = "10px";
  t.style.zIndex = 200;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1400);
}
function throttle(fn, wait) {
  let last = 0;
  return function (...a) {
    const now = Date.now();
    if (now - last > wait) {
      last = now;
      fn.apply(this, a);
      last = now;
    }
  };
}

// ensure scrollspy works after images load
window.addEventListener("load", () => {
  sectionEls = Array.from(document.querySelectorAll(".section"));
  onScrollSpy();
});
// re-use onScrollSpy from earlier
function onScrollSpy() {
  const secs = sectionEls || Array.from(document.querySelectorAll(".section"));
  const offset = window.scrollY + 120;
  let current = secs[0];
  for (const s of secs) {
    if (s.offsetTop <= offset) current = s;
    else break;
  }
  const id = current.dataset.section;
  document.querySelectorAll(".catbtn").forEach((b) => b.classList.toggle("active", b.dataset.cat === id));
}

// throttle scrollspy
window.addEventListener("scroll", throttle(onScrollSpy, 120));
