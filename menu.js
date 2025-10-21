/* menu.js - wrapped in DOMContentLoaded to avoid null errors */
document.addEventListener("DOMContentLoaded", () => {
  /*************** DATA ***************/
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
    items: [
      {
        id: 1001,
        cat: "pizza",
        title: "بيتزا مارغريتا",
        desc: "صلصة طماطم، جبنة موزاريلا، ريحان",
        price: 220,
        img: "https://picsum.photos/seed/p1/160/120",
      },
      { id: 1002, cat: "pizza", title: "بيتزا دجاج", desc: "دجاج مشوي، جبنة، ذرة", price: 260, img: "https://picsum.photos/seed/p2/160/120" },
      { id: 1003, cat: "pizza", title: "بيتزا سي فود", desc: "روبيان، كالماري، صلصة حارة", price: 300, img: "https://picsum.photos/seed/p3/160/120" },
      { id: 1004, cat: "pizza", title: "بيتزا أربع أجبان", desc: "مزيج جبن طازج", price: 280, img: "https://picsum.photos/seed/p4/160/120" },
      { id: 1005, cat: "pizza", title: "بيتزا مشروم", desc: "فطر طازج، جبنة", price: 240, img: "https://picsum.photos/seed/p5/160/120" },
      { id: 2001, cat: "main", title: "مكرونة بالبشاميل", desc: "مكرونة باللحم والبشاميل", price: 95, img: "https://picsum.photos/seed/m1/160/120" },
      { id: 2002, cat: "main", title: "مشاوي مشكلة", desc: "تشكيلة مشاوي مع بطاطس", price: 210, img: "https://picsum.photos/seed/m2/160/120" },
      { id: 2003, cat: "main", title: "سندوتش شاورما", desc: "شاورما دجاج مع الطحينة", price: 70, img: "https://picsum.photos/seed/m3/160/120" },
      { id: 3001, cat: "sides", title: "بطاطس شيبسي", desc: "بطاطس مقلية مقرمشة", price: 45, img: "https://picsum.photos/seed/s1/160/120" },
      { id: 3002, cat: "sides", title: "سلطة خضراء", desc: "خس، خس روماني، صوص", price: 35, img: "https://picsum.photos/seed/s2/160/120" },
      { id: 4001, cat: "drinks", title: "عصير برتقال", desc: "كوب عصير طازج", price: 30, img: "https://picsum.photos/seed/d1/160/120" },
      { id: 4002, cat: "drinks", title: "مشروب غازي", desc: "كولا / سبرايت", price: 15, img: "https://picsum.photos/seed/d2/160/120" },
      { id: 5001, cat: "dessert", title: "تشيز كيك", desc: "تشيز كيك بالفرن", price: 85, img: "https://picsum.photos/seed/des1/160/120" },
      { id: 6001, cat: "kabab", title: "كباب عربي", desc: "كباب بلدي مع أرز", price: 160, img: "https://picsum.photos/seed/k1/160/120" },
      { id: 6002, cat: "kabab", title: "كفتة مشوية", desc: "كفتة مشوية مع صوص", price: 140, img: "https://picsum.photos/seed/k2/160/120" },
      { id: 6001, cat: "kabab", title: "كباب عربي", desc: "كباب بلدي مع أرز", price: 160, img: "https://picsum.photos/seed/k1/160/120" },
      { id: 6002, cat: "kabab", title: "كفتة مشوية", desc: "كفتة مشوية مع صوص", price: 140, img: "https://picsum.photos/seed/k2/160/120" },
      { id: 6001, cat: "kabab", title: "كباب عربي", desc: "كباب بلدي مع أرز", price: 160, img: "https://picsum.photos/seed/k1/160/120" },
      { id: 6002, cat: "kabab", title: "كفتة مشوية", desc: "كفتة مشوية مع صوص", price: 140, img: "https://picsum.photos/seed/k2/160/120" },
    ],
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

  /*************** DOM refs (safe queries) ***************/
  const banner = document.getElementById("banner");
  const bizTitle = document.getElementById("bizTitle");
  const bizName = document.getElementById("bizName");
  const bizAddr = document.getElementById("bizAddr");
  const bizPhone = document.getElementById("bizPhone");
  const catbar = document.getElementById("catbar");
  const menuContent = document.getElementById("menuContent");
  const searchInput = document.getElementById("searchInput");

  // cart & UI
  const openCartBtn = document.getElementById("openCartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const closeCart = document.getElementById("closeCart");
  const cartList = document.getElementById("cartList");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartCountEl = document.getElementById("cartCount");

  // hours modal + small overlay modal
  const modalBack = document.getElementById("modalBack");
  const hoursList = document.getElementById("hoursList");
  const btnHours = document.getElementById("btnHours");

  // small status modal triggered by button in biz
  const btnStatus = document.getElementById("status-btn");
  const overlay = document.getElementById("overlay");
  const scheduleModal = document.getElementById("schedule-modal");
  const closeBtn = document.getElementById("close-btn");
  const todayStatus = document.getElementById("today-status");

  // contact modal
  const contactBack = document.getElementById("contactBack");
  const btnContact = document.getElementById("btnContact");
  const closeContact = document.getElementById("closeContact");
  const sendContact = document.getElementById("sendContact");

  // ensure essential elements exist
  if (!catbar || !menuContent) {
    console.error("Missing essential DOM elements (#catbar or #menuContent).");
    return;
  }

  /*************** set basic info ***************/
  if (bizTitle) bizTitle.textContent = DATA.bizName;
  if (bizName) bizName.textContent = DATA.bizName;
  if (bizAddr) bizAddr.textContent = DATA.bizAddr;
  if (bizPhone) bizPhone.textContent = DATA.phone;

  /*************** build category buttons ***************/
  catbar.innerHTML = "";
  DATA.categories.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "catbtn";
    b.dataset.cat = c.id;
    b.textContent = c.title;
    b.type = "button";
    b.addEventListener("click", () => {
      document.querySelectorAll(".catbtn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      const sec = document.querySelector(`[data-section="${c.id}"]`);
      if (sec) window.scrollTo({ top: sec.offsetTop - 90, behavior: "smooth" });
    });
    catbar.appendChild(b);
    if (i === 0) b.classList.add("active");
  });

  /*************** render sections ***************/
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }

  function renderSections() {
    menuContent.innerHTML = "";
    DATA.categories.forEach((cat) => {
      const sec = document.createElement("section");
      sec.className = "section";
      sec.dataset.section = cat.id;

      const t = document.createElement("div");
      t.className = "sec-title";
      t.textContent = cat.title;
      sec.appendChild(t);

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

  /*************** ScrollSpy ***************/
  let sectionEls = Array.from(document.querySelectorAll(".section"));
  const catButtons = Array.from(document.querySelectorAll(".catbtn"));

  function onScrollSpy() {
    const offset = window.scrollY + 120;
    let current = sectionEls[0] || null;
    for (const s of sectionEls) {
      if (s.offsetTop <= offset) current = s;
      else break;
    }
    const id = current?.dataset?.section;
    catButtons.forEach((b) => b.classList.toggle("active", b.dataset.cat === id));
  }
  window.addEventListener("scroll", throttle(onScrollSpy, 120));
  window.addEventListener("resize", () => {
    sectionEls = Array.from(document.querySelectorAll(".section"));
  });

  onScrollSpy();

  /*************** Search filter ***************/
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      document.querySelectorAll(".item").forEach((it) => {
        const title = it.querySelector("h4")?.textContent.trim().toLowerCase() || "";
        const desc = it.querySelector("p")?.textContent.trim().toLowerCase() || "";
        it.style.display = (title + " " + desc).includes(q) ? "flex" : "none";
      });
    });
  }

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
    showToast("تمت الإضافة للسلة");
  }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".addbtn");
    if (btn) {
      const id = Number(btn.dataset.id);
      addToCartById(id);
    }
  });

  function updateCartUI() {
    if (!cartList || !cartTotalEl || !cartCountEl) return;
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
    const total = CART.reduce((s, i) => s + i.price * i.qty, 0);
    cartTotalEl.textContent = total.toFixed(0) + " ج.م";
    cartCountEl.textContent = CART.reduce((s, i) => s + i.qty, 0);
  }
  updateCartUI();

  // cart open/close
  if (openCartBtn && cartDrawer) {
    openCartBtn.addEventListener("click", () => {
      cartDrawer.classList.toggle("open");
      cartDrawer.setAttribute("aria-hidden", !cartDrawer.classList.contains("open"));
    });
  }
  if (closeCart && cartDrawer) {
    closeCart.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartDrawer.setAttribute("aria-hidden", "true");
    });
  }
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (CART.length === 0) {
        alert("السلة فارغة");
        return;
      }
      const summary = CART.map((i) => `${i.qty}× ${i.title}`).join(" | ");
      const url = `https://wa.me/${DATA.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
        "طلب: " + summary + " - الإجمالي: " + cartTotalEl.textContent
      )}`;
      window.open(url, "_blank");
      CART = [];
      saveCart();
      if (cartDrawer) cartDrawer.classList.remove("open");
    });
  }

  /*************** Hours modal (big one) ***************/
  if (btnHours && modalBack && hoursList) {
    btnHours.addEventListener("click", () => {
      renderHours();
      modalBack.classList.add("open");
      modalBack.setAttribute("aria-hidden", "false");
    });
  }
  const closeModalBtn = document.getElementById("closeModal");
  if (closeModalBtn && modalBack) {
    closeModalBtn.addEventListener("click", () => {
      modalBack.classList.remove("open");
      modalBack.setAttribute("aria-hidden", "true");
    });
  }
  if (modalBack) {
    modalBack.addEventListener("click", (e) => {
      if (e.target === modalBack) {
        modalBack.classList.remove("open");
        modalBack.setAttribute("aria-hidden", "true");
      }
    });
  }
  function renderHours() {
    if (!hoursList) return;
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

  /*************** Small status modal (center overlay) ***************/
  // بيانات مواعيد العمل
  const workingHours = [
    { day: "الأحد", open: "12:00 م", close: "12:00 ص" },
    { day: "الاثنين", open: "12:00 م", close: "12:00 ص" },
    { day: "الثلاثاء", open: "12:00 م", close: "12:00 ص" },
    { day: "الأربعاء", open: "12:00 م", close: "12:00 ص" },
    { day: "الخميس", open: "12:00 م", close: "1:00 ص" },
    { day: "الجمعة", open: "1:00 م", close: "1:00 ص" },
    { day: "السبت", open: "12:00 م", close: "12:00 ص" },
  ];

  // عناصر الزر والمودال
  const statusBtn = document.getElementById("status-btn");
  const statusBack = document.getElementById("statusBack");
  const closeStatus = document.getElementById("closeStatus");
  const statusList = document.getElementById("statusList");

  // الحصول على اليوم الحالي
  const todayIndex = new Date().getDay(); // الأحد=0

  // فتح المودال
  if (statusBtn) {
    statusBtn.addEventListener("click", () => {
      statusBack.style.display = "flex";
      setTimeout(() => statusBack.classList.add("show"), 10);
      renderStatus();
    });
  }

  // إغلاق المودال
  if (closeStatus) {
    closeStatus.addEventListener("click", () => {
      statusBack.classList.remove("show");
      setTimeout(() => (statusBack.style.display = "none"), 300);
    });
  }

  // الضغط على الخلفية يقفل المودال
  statusBack.addEventListener("click", (e) => {
    if (e.target === statusBack) {
      statusBack.classList.remove("show");
      setTimeout(() => (statusBack.style.display = "none"), 300);
    }
  });

  // عرض الأيام
  function renderStatus() {
    statusList.innerHTML = "";
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    workingHours.forEach((day, index) => {
      const li = document.createElement("div");
      li.className = "hours-item";

      // تحديد اليوم الحالي
      if (index === todayIndex) li.classList.add("today");

      li.innerHTML = `
      <span>${day.day}</span>
      <span>${day.open} - ${day.close}</span>
    `;

      statusList.appendChild(li);
    });

    // حساب حالة اليوم الحالي
    const today = workingHours[todayIndex];
    const [openH, openM] = today.open.replace("م", "").replace("ص", "").split(":").map(Number);
    const [closeH, closeM] = today.close.replace("م", "").replace("ص", "").split(":").map(Number);

    // تحويل إلى 24 ساعة
    let open24 = openH + (today.open.includes("م") && openH !== 12 ? 12 : 0);
    let close24 = closeH + (today.close.includes("م") && closeH !== 12 ? 12 : 0);
    if (close24 <= open24) close24 += 24; // لو بعد منتصف الليل

    const now24 = currentHour + currentMinute / 60;
    const isOpen = now24 >= open24 && now24 < close24;

    statusBtn.textContent = isOpen ? "مفتوح" : "مغلق";
    statusBtn.style.background = isOpen ? "#e8fff1" : "#fff5f5";
    statusBtn.style.color = isOpen ? "#0a9e4f" : "#e53935";
    statusBtn.style.fontWeight = "600";
  }

  // set today status text in the small modal
  const daysNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  if (todayStatus) todayStatus.textContent = `اليوم ${daysNames[jsDay]}: ${openNow ? "المطعم مفتوح ✅" : "المطعم مغلق ❌"}`;

  /*************** Contact modal handlers ***************/
  if (btnContact && contactBack) {
    btnContact.addEventListener("click", () => {
      contactBack.style.display = "flex";
      contactBack.setAttribute("aria-hidden", "false");
    });
  }
  if (closeContact && contactBack) {
    closeContact.addEventListener("click", () => {
      contactBack.style.display = "none";
      contactBack.setAttribute("aria-hidden", "true");
    });
  }
  if (sendContact) {
    sendContact.addEventListener("click", () => {
      const name = document.getElementById("cName")?.value.trim();
      const phone = document.getElementById("cPhone")?.value.trim();
      const msg = document.getElementById("cMsg")?.value.trim();
      if (!name || !phone) {
        alert("من فضلك اكتب الاسم و رقم الهاتف");
        return;
      }
      const wa = `https://wa.me/${DATA.phone.replace(/\D/g, "")}?text=${encodeURIComponent("رسالة من: " + name + "\n" + phone + "\n\n" + msg)}`;
      window.open(wa, "_blank");
      document.getElementById("cName").value = "";
      document.getElementById("cPhone").value = "";
      document.getElementById("cMsg").value = "";
      contactBack.style.display = "none";
    });
  }

  /*************** small helpers ***************/
  function showToast(msg) {
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
    t.style.zIndex = 120;
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
      }
    };
  }

  // expose sectionEls for debugging if needed
  window.sectionEls = sectionEls;
  // ensure scrollspy recalculation after images load
  window.addEventListener("load", () => {
    sectionEls = Array.from(document.querySelectorAll(".section"));
    onScrollSpy();
  });
});
// swipper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//
const menuBtn = document.getElementById("menuToggle");
const dropdown = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

// يغلق القائمة لما تضغط في أي مكان خارجها
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// hours
// 🔹 Collapsed menu toggle
const menuToggle = document.getElementById("menuToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// 🔹 Working hours modal
const hoursData = [
  { day: "السبت", open: null, close: null },
  { day: "الأحد", open: "11 ص", close: "11 م" },
  { day: "الإثنين", open: "11 ص", close: "11 م" },
  { day: "الثلاثاء", open: "11 ص", close: "11 م" },
  { day: "الأربعاء", open: "11 ص", close: "11 م" },
  { day: "الخميس", open: "11 ص", close: "11 م" },
  { day: "الجمعة", open: null, close: null },
];

const btnHours = document.getElementById("btnHours");
const hoursModal = document.getElementById("hoursModal");
const closeHours = document.getElementById("closeHours");
const hoursList = document.getElementById("hoursList");

btnHours.addEventListener("click", () => {
  dropdownMenu.classList.remove("show"); // يغلق القائمة أولاً
  hoursList.innerHTML = "";
  const today = new Date().getDay(); // الأحد = 0

  hoursData.forEach((h, i) => {
    const li = document.createElement("li");
    li.classList.add("hours-item");

    const d = document.createElement("span");
    d.textContent = h.day;
    const t = document.createElement("span");

    if (!h.open) {
      t.textContent = "مغلق";
      li.classList.add("closed");
    } else {
      t.textContent = `من ${h.open} إلى ${h.close}`;
    }

    if (i === today) {
      li.classList.add("today");
    }

    li.appendChild(d);
    li.appendChild(t);
    hoursList.appendChild(li);
  });

  hoursModal.classList.add("show");
});

closeHours.addEventListener("click", () => hoursModal.classList.remove("show"));
hoursModal.addEventListener("click", (e) => {
  if (e.target === hoursModal) hoursModal.classList.remove("show");
});
// search
