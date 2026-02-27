/* ========================================
   VAULT — App Logic (with CRUD)
   ======================================== */

// --- Default Credential Data ---
const DEFAULT_VAULT_DATA = [
    {
        id: "d1", category: "banking", name: "BCA (Baru)", icon: "BCA", fields: [
            { label: "User ID", value: "yhzrio", sensitive: false }, { label: "PIN ATM", value: "102002", sensitive: true },
            { label: "PIN m-Bank", value: "252525", sensitive: true }, { label: "Password", value: "Tuhanyesus12", sensitive: true }
        ]
    },
    {
        id: "d2", category: "banking", name: "Mandiri m-Banking", icon: "MDR", fields: [
            { label: "PIN/Pass", value: "101001", sensitive: true }, { label: "Password", value: "Tuhanyesus1", sensitive: true }
        ]
    },
    {
        id: "d3", category: "banking", name: "M-Banking BRI", icon: "BRI", fields: [
            { label: "Username", value: "yehezkielrio10", sensitive: false }, { label: "Password/PIN", value: "Tuhanyesus1", sensitive: true }
        ]
    },
    {
        id: "d4", category: "banking", name: "BNI", icon: "BNI", fields: [
            { label: "Username", value: "Yehezkiel117", sensitive: false }, { label: "PIN", value: "101030", sensitive: true },
            { label: "Password", value: "tuhanyesus7", sensitive: true }
        ]
    },
    {
        id: "d5", category: "banking", name: "Indodax", icon: "IDX", fields: [
            { label: "Email", value: "yehezkielrio17@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesus1", sensitive: true }
        ]
    },
    {
        id: "d6", category: "banking", name: "Inchanger", icon: "ICH", fields: [
            { label: "Username", value: "yehezkielrio", sensitive: false }, { label: "Password", value: "tuhanyesus1", sensitive: true }
        ]
    },
    {
        id: "d7", category: "email", name: "Email Utama #1", icon: "GM", subtitle: "yehezkielrio17@gmail.com", fields: [
            { label: "Email", value: "Yehezkielrio17@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesusrio11", sensitive: true }
        ]
    },
    {
        id: "d8", category: "email", name: "Email Utama #2", icon: "GM", subtitle: "yehezkielrio97@gmail.com", fields: [
            { label: "Email", value: "Yehezkielrio97@gmail.com", sensitive: false }, { label: "Password", value: "Tekolate12", sensitive: true }
        ]
    },
    {
        id: "d9", category: "email", name: "Email Utama #3", icon: "GM", subtitle: "yehezkielrio7@gmail.com", fields: [
            { label: "Email", value: "Yehezkielrio7@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesus1", sensitive: true }
        ]
    },
    {
        id: "d10", category: "email", name: "Email Utama #4", icon: "GM", subtitle: "yehezkielrio11@gmail.com", fields: [
            { label: "Email", value: "Yehezkielrio11@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesus1", sensitive: true }
        ]
    },
    {
        id: "d11", category: "email", name: "Email Utama #5", icon: "GM", subtitle: "yehezkielrio19@gmail.com", fields: [
            { label: "Email", value: "Yehezkielrio19@gmail.com", sensitive: false }, { label: "Password", value: "Tekolater12", sensitive: true }
        ]
    },
    {
        id: "d12", category: "email", name: "Email Utama #6", icon: "GM", subtitle: "umyo123456@gmail.com", fields: [
            { label: "Email", value: "Umyo123456@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesus12", sensitive: true }
        ]
    },
    {
        id: "d13", category: "email", name: "Apple ID / iCloud #1", icon: "AP", fields: [
            { label: "Email", value: "yehezkielrio17@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesus1", sensitive: true }
        ]
    },
    {
        id: "d14", category: "email", name: "Apple ID / iCloud #2", icon: "AP", fields: [
            { label: "Email", value: "yehezkielrio17@icloud.com", sensitive: false }, { label: "Password", value: "Tekolate12", sensitive: true }
        ]
    },
    {
        id: "d15", category: "social", name: "Facebook", icon: "FB", fields: [
            { label: "Email", value: "Cathylenangela21@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesus", sensitive: true }
        ], note: "Terhubung juga dengan Yehezkielrio17@gmail.com / Pass: tuhanyesus12"
    },
    {
        id: "d16", category: "social", name: "Twitter", icon: "TW", fields: [
            { label: "Nomor", value: "081334688424", sensitive: false }, { label: "Password", value: "tuhanyesusrio1", sensitive: true }
        ]
    },
    {
        id: "d17", category: "social", name: "Samsung Account", icon: "SAM", fields: [
            { label: "Email", value: "Yehezkielrio17@gmail.com", sensitive: false }, { label: "Password", value: "Tuhanyesus1", sensitive: true }
        ]
    },
    { id: "d18", category: "gaming", name: "ML Nuttela VK", icon: "ML", fields: [] },
    {
        id: "d19", category: "gaming", name: "ML Epic Roger", icon: "ML", fields: [
            { label: "Nomor", value: "081325462688", sensitive: false }, { label: "Password", value: "Yehezkielganteng1", sensitive: true }
        ]
    },
    {
        id: "d20", category: "gaming", name: "ML Moonton Nuttela", icon: "ML", fields: [
            { label: "Email", value: "rnldhmzh@gmail.com", sensitive: false }, { label: "Password", value: "Haris123", sensitive: true }
        ]
    },
    {
        id: "d21", category: "gaming", name: "ML Moonton Shep Paw", icon: "ML", fields: [
            { label: "Email", value: "Yehezkielrio19@gmail.com", sensitive: false }, { label: "Password", value: "Tekolate12", sensitive: true }
        ]
    },
    {
        id: "d22", category: "gaming", name: "ML Lainnya", icon: "ML", fields: [
            { label: "Nomor", value: "081226629204", sensitive: false }, { label: "Password", value: "yehezkieltampan12", sensitive: true }
        ], note: "Ridwan Moonton"
    }
];

const CATEGORIES = {
    banking: "Akun Perbankan & Keuangan",
    email: "Akun Email & Cloud",
    social: "Media Sosial & Perangkat",
    gaming: "Akun Game"
};

// --- Auth ---
const VALID_USER = "rio";
const VALID_PASS = "tekolate12";
const IDLE_TIMEOUT = 5 * 60 * 1000;

let isAuthenticated = false;
let idleTimer = null;
let revealedFields = new Set();
let activeCategory = "all";
let editingId = null; // null = add mode, string = edit mode
let deletingId = null;
let nextId = 100;

// --- Data Layer (localStorage) ---
function loadVaultData() {
    const stored = localStorage.getItem("vault_data");
    if (stored) {
        try { return JSON.parse(stored); } catch (e) { /* fall through */ }
    }
    // First time: seed with defaults
    localStorage.setItem("vault_data", JSON.stringify(DEFAULT_VAULT_DATA));
    return JSON.parse(JSON.stringify(DEFAULT_VAULT_DATA));
}

function saveVaultData(data) {
    localStorage.setItem("vault_data", JSON.stringify(data));
}

let VAULT_DATA = loadVaultData();

function generateId() {
    return "u" + (nextId++) + "_" + Date.now();
}

// --- DOM Elements ---
const loginScreen = document.getElementById("loginScreen");
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const dashboard = document.getElementById("dashboard");
const vaultContent = document.getElementById("vaultContent");
const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const categoryNav = document.getElementById("categoryNav");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const lockBtn = document.getElementById("lockBtn");
const addBtn = document.getElementById("addBtn");
const idleLock = document.getElementById("idleLock");
const unlockBtn = document.getElementById("unlockBtn");
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Modal elements
const addModal = document.getElementById("addModal");
const addForm = document.getElementById("addForm");
const modalTitle = document.getElementById("modalTitle");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCancelBtn = document.getElementById("modalCancelBtn");
const addFieldBtn = document.getElementById("addFieldBtn");
const dynamicFields = document.getElementById("dynamicFields");
const addCategory = document.getElementById("addCategory");
const addIcon = document.getElementById("addIcon");
const addName = document.getElementById("addName");
const addSubtitle = document.getElementById("addSubtitle");
const addNote = document.getElementById("addNote");

// Delete modal
const deleteConfirm = document.getElementById("deleteConfirm");
const deleteName = document.getElementById("deleteName");
const deleteCancelBtn = document.getElementById("deleteCancelBtn");
const deleteConfirmBtn = document.getElementById("deleteConfirmBtn");

// --- Particles ---
function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.4 + 0.1
        });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 240, ${p.opacity})`; ctx.fill();
            for (let j = i + 1; j < particles.length; j++) {
                const dx = p.x - particles[j].x, dy = p.y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 255, 240, ${0.04 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5; ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}
window.addEventListener("resize", () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

// --- Login ---
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
    loginBtn.classList.add("loading");
    loginError.classList.remove("show");
    setTimeout(() => {
        if (user === VALID_USER && pass === VALID_PASS) {
            isAuthenticated = true;
            sessionStorage.setItem("vault_auth", "1");
            loginScreen.classList.add("fade-out");
            setTimeout(() => {
                loginScreen.style.display = "none";
                dashboard.classList.remove("hidden");
                renderVault();
                resetIdleTimer();
            }, 600);
        } else {
            loginBtn.classList.remove("loading");
            loginError.classList.add("show");
        }
    }, 800);
});

// --- Lock / Unlock ---
lockBtn.addEventListener("click", lockVault);
unlockBtn.addEventListener("click", () => { idleLock.classList.add("hidden"); resetIdleTimer(); });

function lockVault() {
    isAuthenticated = false;
    sessionStorage.removeItem("vault_auth");
    revealedFields.clear();
    location.reload();
}

// --- Idle Timer ---
function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { if (isAuthenticated) idleLock.classList.remove("hidden"); }, IDLE_TIMEOUT);
}
["mousemove", "keydown", "click", "scroll", "touchstart"].forEach(evt => {
    document.addEventListener(evt, () => {
        if (isAuthenticated && idleLock.classList.contains("hidden")) resetIdleTimer();
    });
});

// --- Render Vault ---
function renderVault(filter = "") {
    vaultContent.innerHTML = "";
    const lowerFilter = filter.toLowerCase();
    let visibleCount = 0;
    const grouped = {};
    VAULT_DATA.forEach(account => {
        if (activeCategory !== "all" && account.category !== activeCategory) return;
        if (lowerFilter) {
            const searchable = [account.name, account.subtitle || "", ...account.fields.map(f => f.label + f.value)].join(" ").toLowerCase();
            if (!searchable.includes(lowerFilter)) return;
        }
        if (!grouped[account.category]) grouped[account.category] = [];
        grouped[account.category].push(account);
    });
    const categoryOrder = ["banking", "email", "social", "gaming"];
    categoryOrder.forEach(cat => {
        if (!grouped[cat]) return;
        const header = document.createElement("div");
        header.className = "section-header";
        header.innerHTML = `<h2>${CATEGORIES[cat]}</h2><div class="section-line"></div>`;
        vaultContent.appendChild(header);
        grouped[cat].forEach((account, idx) => {
            visibleCount++;
            vaultContent.appendChild(createCard(account, idx));
        });
    });
    if (visibleCount === 0) {
        vaultContent.innerHTML = `<div class="no-results">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <h3>NO RESULTS FOUND</h3><p>No accounts matching your search criteria</p></div>`;
    }
}

function createCard(account, idx) {
    const card = document.createElement("div");
    card.className = "account-card";
    card.style.animationDelay = `${idx * 0.06}s`;
    card.dataset.id = account.id;
    const cardId = `card-${account.id}`;

    let fieldsHtml = "";
    account.fields.forEach((field, fi) => {
        const fieldId = `${cardId}-${fi}`;
        const isMasked = field.sensitive && !revealedFields.has(fieldId);
        const displayValue = isMasked ? "••••••••" : field.value;
        const maskedClass = isMasked ? "masked" : "";
        fieldsHtml += `<div class="credential-row">
      <span class="cred-label">${field.label}</span>
      <span class="cred-value ${maskedClass}" data-field-id="${fieldId}" data-real="${field.value}">${displayValue}</span>
      <div class="cred-actions">
        ${field.sensitive ? `<button class="action-btn toggle-btn" data-field-id="${fieldId}" title="Show/Hide">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${isMasked ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'}
          </svg></button>` : ""}
        <button class="action-btn copy-btn" data-value="${field.value}" title="Copy">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg></button>
      </div></div>`;
    });
    if (account.note) fieldsHtml += `<div class="cred-note">📝 ${account.note}</div>`;
    if (account.fields.length === 0 && !account.note) fieldsHtml = `<div class="cred-note">No credentials stored</div>`;

    card.innerHTML = `
    <div class="card-header" data-card-id="${cardId}">
      <div class="card-header-left">
        <div class="card-icon ${account.category}">${account.icon}</div>
        <div>
          <div class="card-title">${account.name}</div>
          ${account.subtitle ? `<div class="card-subtitle">${account.subtitle}</div>` : ""}
        </div>
      </div>
      <div class="card-header-right">
        <button class="card-edit-btn" data-id="${account.id}" title="Edit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="card-delete-btn" data-id="${account.id}" data-name="${account.name}" title="Delete">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
        <svg class="card-toggle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
    <div class="card-body" id="body-${cardId}">${fieldsHtml}</div>`;

    // Toggle card expand
    const headerEl = card.querySelector(".card-header");
    headerEl.addEventListener("click", (e) => {
        if (e.target.closest(".card-edit-btn") || e.target.closest(".card-delete-btn")) return;
        const body = card.querySelector(".card-body");
        const toggle = card.querySelector(".card-toggle");
        body.classList.toggle("open");
        toggle.classList.toggle("open");
    });

    // Edit button
    card.querySelector(".card-edit-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        openEditModal(account.id);
    });

    // Delete button
    card.querySelector(".card-delete-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        openDeleteConfirm(account.id, account.name);
    });

    // Toggle visibility
    card.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const fid = btn.dataset.fieldId;
            const valEl = card.querySelector(`.cred-value[data-field-id="${fid}"]`);
            if (revealedFields.has(fid)) {
                revealedFields.delete(fid);
                valEl.textContent = "••••••••"; valEl.classList.add("masked");
            } else {
                revealedFields.add(fid);
                valEl.textContent = valEl.dataset.real; valEl.classList.remove("masked");
            }
            const isNowMasked = !revealedFields.has(fid);
            btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${isNowMasked ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'}
      </svg>`;
        });
    });

    // Copy buttons
    card.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(btn.dataset.value).then(() => {
                showToast("Copied to clipboard!");
                btn.classList.add("copied");
                setTimeout(() => btn.classList.remove("copied"), 1500);
            });
        });
    });

    return card;
}

// --- Category Filter ---
categoryNav.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-btn");
    if (!btn) return;
    categoryNav.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderVault(searchInput.value || mobileSearchInput.value);
});

// --- Search ---
searchInput.addEventListener("input", (e) => { mobileSearchInput.value = e.target.value; renderVault(e.target.value); });
mobileSearchInput.addEventListener("input", (e) => { searchInput.value = e.target.value; renderVault(e.target.value); });

// --- Toast ---
let toastTimer;
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

// ========================================
// ADD / EDIT MODAL
// ========================================

addBtn.addEventListener("click", () => openAddModal());
modalCloseBtn.addEventListener("click", closeModal);
modalCancelBtn.addEventListener("click", closeModal);
addModal.addEventListener("click", (e) => { if (e.target === addModal) closeModal(); });

function openAddModal() {
    editingId = null;
    modalTitle.textContent = "ADD NEW ACCOUNT";
    addForm.reset();
    dynamicFields.innerHTML = "";
    addFieldRow(); // start with one empty field
    addModal.classList.remove("hidden");
}

function openEditModal(id) {
    const account = VAULT_DATA.find(a => a.id === id);
    if (!account) return;
    editingId = id;
    modalTitle.textContent = "EDIT ACCOUNT";
    addCategory.value = account.category;
    addIcon.value = account.icon;
    addName.value = account.name;
    addSubtitle.value = account.subtitle || "";
    addNote.value = account.note || "";
    dynamicFields.innerHTML = "";
    if (account.fields.length === 0) {
        addFieldRow();
    } else {
        account.fields.forEach(f => addFieldRow(f.label, f.value, f.sensitive));
    }
    addModal.classList.remove("hidden");
}

function closeModal() {
    addModal.classList.add("hidden");
    editingId = null;
}

// Dynamic field rows
addFieldBtn.addEventListener("click", () => addFieldRow());

function addFieldRow(label = "", value = "", sensitive = true) {
    const row = document.createElement("div");
    row.className = "field-row";
    row.innerHTML = `
    <input type="text" placeholder="Label" value="${label}" class="field-label-input">
    <input type="text" placeholder="Value" value="${value}" class="field-value-input">
    <button type="button" class="sensitive-toggle ${sensitive ? 'active' : ''}" title="${sensitive ? 'Sensitive (masked)' : 'Not sensitive'}">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </button>
    <button type="button" class="remove-field-btn" title="Remove field">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>`;

    row.querySelector(".sensitive-toggle").addEventListener("click", function () {
        this.classList.toggle("active");
        this.title = this.classList.contains("active") ? "Sensitive (masked)" : "Not sensitive";
    });

    row.querySelector(".remove-field-btn").addEventListener("click", () => {
        row.remove();
    });

    dynamicFields.appendChild(row);
}

// Form submit (add or edit)
addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect fields
    const fields = [];
    dynamicFields.querySelectorAll(".field-row").forEach(row => {
        const label = row.querySelector(".field-label-input").value.trim();
        const value = row.querySelector(".field-value-input").value.trim();
        const sensitive = row.querySelector(".sensitive-toggle").classList.contains("active");
        if (label && value) {
            fields.push({ label, value, sensitive });
        }
    });

    const accountData = {
        id: editingId || generateId(),
        category: addCategory.value,
        name: addName.value.trim(),
        icon: addIcon.value.trim().toUpperCase(),
        fields: fields
    };

    const subtitle = addSubtitle.value.trim();
    if (subtitle) accountData.subtitle = subtitle;

    const note = addNote.value.trim();
    if (note) accountData.note = note;

    if (editingId) {
        // Update existing
        const idx = VAULT_DATA.findIndex(a => a.id === editingId);
        if (idx !== -1) VAULT_DATA[idx] = accountData;
        showToast("Account updated!");
    } else {
        // Add new
        VAULT_DATA.push(accountData);
        showToast("Account added!");
    }

    saveVaultData(VAULT_DATA);
    closeModal();
    renderVault(searchInput.value || mobileSearchInput.value);
});

// ========================================
// DELETE CONFIRMATION
// ========================================

function openDeleteConfirm(id, name) {
    deletingId = id;
    deleteName.textContent = name;
    deleteConfirm.classList.remove("hidden");
}

deleteCancelBtn.addEventListener("click", () => { deleteConfirm.classList.add("hidden"); deletingId = null; });
deleteConfirm.addEventListener("click", (e) => { if (e.target === deleteConfirm) { deleteConfirm.classList.add("hidden"); deletingId = null; } });

deleteConfirmBtn.addEventListener("click", () => {
    if (!deletingId) return;
    VAULT_DATA = VAULT_DATA.filter(a => a.id !== deletingId);
    saveVaultData(VAULT_DATA);
    deleteConfirm.classList.add("hidden");
    deletingId = null;
    showToast("Account deleted!");
    renderVault(searchInput.value || mobileSearchInput.value);
});

// --- Session Check ---
if (sessionStorage.getItem("vault_auth") === "1") {
    isAuthenticated = true;
    loginScreen.style.display = "none";
    dashboard.classList.remove("hidden");
    renderVault();
    resetIdleTimer();
}

// --- Init ---
initParticles();
