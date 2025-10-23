/* menu.js - wrapped in DOMContentLoaded to avoid null errors */
document.addEventListener("DOMContentLoaded", () => {
  /*************** DATA ***************/
  const DATA = {
    banner: "https://picsum.photos/900/500?random=21",
    bizName: "اسم المطعم",
    bizAddr: "فرع : ################",
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
        img: "https://www.dummyimg.in/placeholder"
      },
      { id: 1002, cat: "pizza", title: "بيتزا دجاج", desc: "دجاج مشوي، جبنة، ذرة", price: 260, img: "https://www.dummyimg.in/placeholder" },
      { id: 1003, cat: "pizza", title: "بيتزا سي فود", desc: "روبيان، كالماري، صلصة حارة", price: 300, img: "https://www.dummyimg.in/placeholder" },
      { id: 1004, cat: "pizza", title: "بيتزا أربع أجبان", desc: "مزيج جبن طازج", price: 280, img: "https://www.dummyimg.in/placeholder" },
      { id: 1005, cat: "pizza", title: "بيتزا مشروم", desc: "فطر طازج، جبنة", price: 240, img: "https://www.dummyimg.in/placeholder" },
      { id: 2001, cat: "main", title: "مكرونة بالبشاميل", desc: "مكرونة باللحم والبشاميل", price: 95, img: "https://www.dummyimg.in/placeholder" },
      { id: 2002, cat: "main", title: "مشاوي مشكلة", desc: "تشكيلة مشاوي مع بطاطس", price: 210, img: "https://www.dummyimg.in/placeholder" },
      { id: 2003, cat: "main", title: "سندوتش شاورما", desc: "شاورما دجاج مع الطحينة", price: 70, img: "https://www.dummyimg.in/placeholder" },
      { id: 3001, cat: "sides", title: "بطاطس شيبسي", desc: "بطاطس مقلية مقرمشة", price: 45, img: "https://www.dummyimg.in/placeholder" },
      { id: 3002, cat: "sides", title: "سلطة خضراء", desc: "خس، خس روماني، صوص", price: 35, img: "https://www.dummyimg.in/placeholder" },
      { id: 4001, cat: "drinks", title: "عصير برتقال", desc: "كوب عصير طازج", price: 30, img: "https://www.dummyimg.in/placeholder" },
      { id: 4002, cat: "drinks", title: "مشروب غازي", desc: "كولا / سبرايت", price: 15, img: "https://www.dummyimg.in/placeholder" },
      { id: 5001, cat: "dessert", title: "تشيز كيك", desc: "تشيز كيك بالفرن", price: 85, img: "https://www.dummyimg.in/placeholder" },
      { id: 6001, cat: "kabab", title: "كباب عربي", desc: "كباب بلدي مع أرز", price: 160, img: "https://www.dummyimg.in/placeholder" },
      { id: 6002, cat: "kabab", title: "كفتة مشوية", desc: "كفتة مشوية مع صوص", price: 140, img: "https://www.dummyimg.in/placeholder" },
      { id: 6003, cat: "kabab", title: "كباب عربي", desc: "كباب بلدي مع أرز", price: 160, img: "https://www.dummyimg.in/placeholder" },
      { id: 6004, cat: "kabab", title: "كفتة مشوية", desc: "كفتة مشوية مع صوص", price: 140, img: "https://www.dummyimg.in/placeholder" },
      { id: 6005, cat: "kabab", title: "شيش طاووق", desc: "دجاج مشوي مع خضار", price: 150, img: "https://www.dummyimg.in/placeholder" },
      { id: 6006, cat: "kabab", title: "ريش مشوية", desc: "ريش لحم مشوية", price: 180, img: "https://www.dummyimg.in/placeholder" },
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

  /*************** Search overlay ***************/
  const openSearch = document.getElementById("openSearch");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchResults = document.getElementById("searchResults");

  if (openSearch && searchOverlay && closeSearch && searchInput && searchResults) {
    // Open search overlay
    openSearch.addEventListener("click", (e) => {
      e.stopPropagation();
      searchOverlay.classList.remove("hidden");
      searchInput.focus();
      renderAllItems();
    });

    // Close search overlay
    closeSearch.addEventListener("click", () => {
      searchOverlay.classList.add("hidden");
      searchInput.value = "";
      searchResults.innerHTML = "";
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (q === "") {
        renderAllItems();
      } else {
        filterItems(q);
      }
    });

    // Render all items initially
    function renderAllItems() {
      searchResults.innerHTML = "";
      DATA.categories.forEach((cat) => {
        const items = DATA.items.filter((it) => it.cat === cat.id);
        if (items.length > 0) {
          const catSection = document.createElement("div");
          catSection.className = "search-category";
          catSection.innerHTML = `<h3>${cat.title}</h3>`;

          items.forEach((item) => {
            catSection.appendChild(createSearchItem(item));
          });

          searchResults.appendChild(catSection);
        }
      });
    }

    // Filter items based on search query
    function filterItems(query) {
      searchResults.innerHTML = "";
      const filtered = DATA.items.filter((item) => {
        const title = item.title.toLowerCase();
        const desc = item.desc.toLowerCase();
        return title.includes(query) || desc.includes(query);
      });

      if (filtered.length === 0) {
        searchResults.innerHTML = '<div class="no-results">لا توجد نتائج</div>';
      } else {
        filtered.forEach((item) => {
          searchResults.appendChild(createSearchItem(item));
        });
      }
    }

    // Create search item element
    function createSearchItem(item) {
      const el = document.createElement("div");
      el.className = "search-item";
      el.innerHTML = `
        <img src="${item.img}" alt="${escapeHtml(item.title)}">
        <div class="search-item-info">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.desc)}</p>
          <div class="search-item-footer">
            <span class="search-item-price">${item.price} ج.م</span>
            <button class="search-add-btn" data-id="${item.id}">أضف</button>
          </div>
        </div>
      `;

      // Add to cart functionality
      el.querySelector(".search-add-btn").addEventListener("click", () => {
        addToCartById(item.id);
      });

      return el;
    }
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

        // Build extras text
        const extrasText = ci.extras && ci.extras.length > 0 ? `<div style="color:var(--muted);font-size:12px">+ ${ci.extras.join(", ")}</div>` : "";
        const sizeText = ci.size ? `<span style="background:#f5f5f5;padding:2px 6px;border-radius:4px;font-size:11px;margin-left:4px">${ci.size}</span>` : "";

        div.innerHTML = `
          <img src="${ci.img}" alt="${escapeHtml(ci.title)}">
          <div style="flex:1">
            <div style="font-weight:700">${escapeHtml(ci.title)} ${sizeText}</div>
            ${extrasText}
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
          const id = b.dataset.id;
          const action = b.dataset.action;
          const idx = CART.findIndex((x) => String(x.id) === String(id));
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

  // Listen for cart updates from modal
  window.addEventListener("cartUpdated", () => {
    CART = JSON.parse(localStorage.getItem("branch_cart_v2") || "[]");
    updateCartUI();
  });

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
        Swal.fire({
          icon: 'warning',
          title: 'السلة فارغة',
          text: 'من فضلك أضف منتجات للسلة أولاً',
          confirmButtonText: 'حسناً',
          confirmButtonColor: '#e74c3c'
        });
        return;
      }

      const summary = CART.map((i) => `${i.qty}× ${i.title}`).join(" | ");
      const total = cartTotalEl.textContent;

      Swal.fire({
        title: 'تأكيد الطلب',
        html: `
          <div style="text-align: right; direction: rtl;">
            <p style="font-size: 16px; margin-bottom: 10px;">هل تريد إتمام الطلب؟</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
              <p style="font-weight: bold; color: #e74c3c; margin-bottom: 10px;">ملخص الطلب:</p>
              ${CART.map(item => `
                <div style="display: flex; justify-content: space-between; margin: 8px 0; padding: 8px; background: white; border-radius: 6px;">
                  <span>${item.qty}× ${item.title}</span>
                  <span style="color: #e74c3c; font-weight: bold;">${(item.qty * item.price).toFixed(0)} ج.م</span>
                </div>
              `).join('')}
              <hr style="margin: 10px 0;">
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold;">
                <span>الإجمالي:</span>
                <span style="color: #16a34a;">${total}</span>
              </div>
            </div>
          </div>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fab fa-whatsapp"></i> إرسال عبر واتساب',
        cancelButtonText: 'إلغاء',
        confirmButtonColor: '#25d366',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        customClass: {
          popup: 'rtl-popup'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `https://wa.me/201040026539?text=${encodeURIComponent(
            "طلب: " + summary + " - الإجمالي: " + total
          )}`;

          window.open(url, "_blank");

          Swal.fire({
            icon: 'success',
            title: 'تم إرسال الطلب!',
            text: 'شكراً لك، سيتم التواصل معك قريباً',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#16a34a',
            timer: 3000
          });

          CART = [];
          saveCart();
          if (cartDrawer) cartDrawer.classList.remove("open");
        }
      });
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
      div.innerHTML = `<div>${h.day}</div><div style="text-align:left">${h.state === "مغلق" ? '<strong style="color:var(--accent)">مغلق</strong>' : h.times
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

  // expose sectionEls and DATA for debugging and modal access
  window.sectionEls = sectionEls;
  window.DATA = DATA;
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
// scroll contact
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Share Modal functionality
const openShare = document.getElementById("openShare");
const shareOverlay = document.getElementById("shareOverlay");
const closeShare = document.getElementById("closeShare");
const copyLink = document.getElementById("copyLink");
const shareLink = document.getElementById("shareLink");

if (openShare && shareOverlay && closeShare) {
  // Open share modal
  openShare.addEventListener("click", () => {
    shareOverlay.classList.remove("hidden");
  });

  // Close share modal
  closeShare.addEventListener("click", () => {
    shareOverlay.classList.add("hidden");
  });

  // Close when clicking outside
  shareOverlay.addEventListener("click", (e) => {
    if (e.target === shareOverlay) {
      shareOverlay.classList.add("hidden");
    }
  });

  // Copy link functionality
  if (copyLink && shareLink) {
    copyLink.addEventListener("click", () => {
      const link = shareLink.textContent;
      navigator.clipboard.writeText(link).then(() => {
        const originalIcon = copyLink.innerHTML;
        copyLink.innerHTML = '<i class="fa fa-check"></i>';
        copyLink.style.background = "#16a34a";

        setTimeout(() => {
          copyLink.innerHTML = originalIcon;
          copyLink.style.background = "";
        }, 2000);
      });
    });
  }
}

// Share via different platforms
function shareVia(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check out this menu!");

  const shareUrls = {
    whatsapp: `https://wa.me/?text=${text}%20${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    telegram: `https://t.me/share/url?url=${url}&text=${text}`,
    email: `mailto:?subject=${text}&body=${url}`,
    copy: null
  };

  if (platform === 'copy') {
    const link = document.getElementById("shareLink").textContent;
    navigator.clipboard.writeText(link).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'تم النسخ!',
        text: 'تم نسخ الرابط إلى الحافظة',
        confirmButtonText: 'حسناً',
        confirmButtonColor: '#16a34a',
        timer: 2000,
        timerProgressBar: true
      });
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'فشل نسخ الرابط',
        confirmButtonText: 'حسناً',
        confirmButtonColor: '#e74c3c'
      });
    });
  } else if (shareUrls[platform]) {
    window.open(shareUrls[platform], '_blank');
  }
}




// Product Detail Modal
(function () {
  const productModal = document.getElementById("productModal");
  const closeProductModal = document.getElementById("closeProductModal");
  const modalProductImage = document.getElementById("modalProductImage");
  const modalProductTitle = document.getElementById("modalProductTitle");
  const modalProductDesc = document.getElementById("modalProductDesc");
  const modalProductTotal = document.getElementById("modalProductTotal");
  const modalQty = document.getElementById("modalQty");
  const modalQtyPlus = document.getElementById("modalQtyPlus");
  const modalQtyMinus = document.getElementById("modalQtyMinus");
  const modalAddToCart = document.getElementById("modalAddToCart");

  let currentProduct = null;
  let quantity = 1;

  // Open product modal when clicking on item (but not on add button)
  document.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (item && !e.target.closest(".addbtn")) {
      const itemId = item.querySelector(".addbtn")?.dataset.id;
      if (itemId) {
        openProductModal(parseInt(itemId));
      }
    }
  });

  function openProductModal(productId) {
    // Access DATA from the main scope
    const DATA = window.DATA || {
      items: [
        {
          id: 1001,
          cat: "pizza",
          title: "بيتزا مارغريتا",
          desc: "صلصة طماطم، جبنة موزاريلا، ريحان",
          price: 220,
          img: "https://picsum.photos/seed/p1/160/120",
        },
      ],
    };

    const product = DATA.items.find((p) => p.id === productId);
    if (!product) return;

    currentProduct = product;
    quantity = 1;

    // Set product details
    if (modalProductImage) modalProductImage.src = product.img;
    if (modalProductImage) modalProductImage.alt = product.title;
    if (modalProductTitle) modalProductTitle.textContent = product.title;
    if (modalProductDesc) modalProductDesc.textContent = product.desc;
    if (modalQty) modalQty.textContent = quantity;

    // Update all size prices based on product
    document.querySelectorAll('input[name="size"]').forEach((radio, index) => {
      const multiplier = index === 0 ? 1 : index === 1 ? 1.5 : 2;
      const price = Math.round(product.price * multiplier);
      radio.dataset.price = price;
      const priceEl = radio.nextElementSibling?.querySelector(".size-price");
      if (priceEl) priceEl.textContent = price + " ج.م";
      if (index === 0) radio.checked = true;
    });

    // Reset extras
    document.querySelectorAll('.product-extras input[type="checkbox"]').forEach((cb) => {
      cb.checked = false;
    });

    updateTotal();
    if (productModal) productModal.classList.remove("hidden");
  }

  function updateTotal() {
    if (!currentProduct) return;

    const selectedSize = document.querySelector('input[name="size"]:checked');
    let total = parseInt(selectedSize?.dataset.price || currentProduct.price);

    // Add extras
    document.querySelectorAll('.product-extras input[type="checkbox"]:checked').forEach((cb) => {
      total += parseInt(cb.value);
    });

    total *= quantity;
    if (modalProductTotal) modalProductTotal.textContent = total + " ج.م";
  }

  // Close modal
  if (closeProductModal) {
    closeProductModal.addEventListener("click", () => {
      if (productModal) productModal.classList.add("hidden");
    });
  }

  // Close on outside click
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        productModal.classList.add("hidden");
      }
    });
  }

  // Quantity controls
  if (modalQtyPlus) {
    modalQtyPlus.addEventListener("click", () => {
      quantity++;
      if (modalQty) modalQty.textContent = quantity;
      updateTotal();
    });
  }

  if (modalQtyMinus) {
    modalQtyMinus.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        if (modalQty) modalQty.textContent = quantity;
        updateTotal();
      }
    });
  }

  // Size change
  document.querySelectorAll('input[name="size"]').forEach((radio) => {
    radio.addEventListener("change", updateTotal);
  });

  // Extras change
  document.querySelectorAll('.product-extras input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", updateTotal);
  });

  // Add to cart
  if (modalAddToCart) {
    modalAddToCart.addEventListener("click", () => {
      if (!currentProduct) return;

      const selectedSize = document.querySelector('input[name="size"]:checked');
      const sizeValue = selectedSize?.value || "M";
      const sizePrice = parseInt(selectedSize?.dataset.price || currentProduct.price);

      // Get selected extras
      const extras = [];
      let extrasPrice = 0;
      document.querySelectorAll('.product-extras input[type="checkbox"]:checked').forEach((cb) => {
        const extraName = cb.nextElementSibling?.querySelector("span")?.textContent;
        const extraPrice = parseInt(cb.value);
        if (extraName) {
          extras.push(extraName);
          extrasPrice += extraPrice;
        }
      });

      // Calculate final price per item
      const itemPrice = sizePrice + extrasPrice;

      // Create cart item with all details
      const cartItem = {
        id: currentProduct.id + "-" + sizeValue + "-" + Date.now(), // Unique ID for each variant
        originalId: currentProduct.id,
        title: currentProduct.title,
        desc: currentProduct.desc,
        img: currentProduct.img,
        price: itemPrice,
        qty: quantity,
        size: sizeValue,
        extras: extras,
      };

      // Access the global CART from window or localStorage
      let CART = JSON.parse(localStorage.getItem("branch_cart_v2") || "[]");

      // Check if same item with same size and extras exists
      const existingIndex = CART.findIndex(
        (item) =>
          item.originalId === currentProduct.id &&
          item.size === sizeValue &&
          JSON.stringify(item.extras) === JSON.stringify(extras)
      );

      if (existingIndex !== -1) {
        // Update quantity if same variant exists
        CART[existingIndex].qty += quantity;
      } else {
        // Add new item
        CART.push(cartItem);
      }

      // Save to localStorage
      localStorage.setItem("branch_cart_v2", JSON.stringify(CART));

      // Trigger cart UI update by dispatching a custom event
      window.dispatchEvent(new Event("cartUpdated"));

      // Close modal
      if (productModal) productModal.classList.add("hidden");

      // Show toast
      const t = document.createElement("div");
      t.textContent = `تمت الإضافة للسلة (${quantity}×)`;
      t.style.cssText =
        "position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:rgba(15,23,42,0.9);color:#fff;padding:8px 14px;border-radius:10px;z-index:9999";
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 1400);
    });
  }
})();


// Image Lightbox for Logos
(function () {
  const imageLightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeLightbox = document.getElementById('closeLightbox');

  // Add click event to all clickable logos
  document.querySelectorAll('.logo-clickable').forEach(logo => {
    logo.addEventListener('click', function () {
      const img = this.querySelector('img') || this;
      const imgSrc = img.src || img.getAttribute('src');

      if (imgSrc && lightboxImage && imageLightbox) {
        lightboxImage.src = imgSrc;
        imageLightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    });
  });

  // Close lightbox
  if (closeLightbox && imageLightbox) {
    closeLightbox.addEventListener('click', () => {
      imageLightbox.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
    });

    // Close on background click
    imageLightbox.addEventListener('click', (e) => {
      if (e.target === imageLightbox) {
        imageLightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !imageLightbox.classList.contains('hidden')) {
        imageLightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
})();


// Hide catbar when reaching footer section
(function () {
  const catbarWrap = document.querySelector('.catbar-wrap');
  const contactSection = document.querySelector('.contact-section');

  if (!catbarWrap || !contactSection) return;

  function checkCatbarVisibility() {
    const contactRect = contactSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Hide catbar when contact section is visible in viewport
    if (contactRect.top < windowHeight && contactRect.bottom > 0) {
      catbarWrap.style.opacity = '0';
      catbarWrap.style.pointerEvents = 'none';
      catbarWrap.style.transform = 'translateY(-20px)';
    } else {
      catbarWrap.style.opacity = '1';
      catbarWrap.style.pointerEvents = 'auto';
      catbarWrap.style.transform = 'translateY(0)';
    }
  }

  // Add transition to catbar-wrap
  catbarWrap.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  // Check on scroll
  window.addEventListener('scroll', checkCatbarVisibility);

  // Check on load
  checkCatbarVisibility();
})();


// Loading Screen
(function () {
  const loadingScreen = document.getElementById('loadingScreen');

  if (!loadingScreen) return;

  // Hide loading screen when page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 500); // Small delay for smooth transition
  });

  // Fallback: Hide after 3 seconds even if load event doesn't fire
  setTimeout(() => {
    if (!loadingScreen.classList.contains('hidden')) {
      loadingScreen.classList.add('hidden');
    }
  }, 3000);
})