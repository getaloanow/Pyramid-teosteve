// Application State
const AppState = {
  currentUser: null,
  currentTab: 'overview',
  theme: 'light',
  users: [],
  apis: [],
  auditLogs: [],
  verificationConditions: {},
  dashboardMetrics: {},
  settings: {},
  notifications: []
};

// Mock Data - Admin Accounts
const ADMIN_ACCOUNTS = {
  'admin@platform.com': {
    password: 'Admin@12345',
    twoFACode: '123456',
    role: 'SUPERADMIN',
    permissions: 'All',
    name: 'Super Admin'
  },
  'master@platform.com': {
    password: 'Master@54321',
    twoFACode: '654321',
    role: 'ADMIN',
    permissions: 'Full Platform Control',
    name: 'Master Admin'
  },
  'manager@platform.com': {
    password: 'Manager@99999',
    twoFACode: '999999',
    role: 'MANAGER',
    permissions: 'User Management + Compliance',
    name: 'Regional Manager'
  },
  'operator@platform.com': {
    password: 'Operator@11111',
    twoFACode: '111111',
    role: 'OPERATOR',
    permissions: 'View Only + Reports',
    name: 'System Operator'
  },
  'swrutherford01@gmail.com': {
    password: 'Rutherfor1055!?',
    twoFACode: '555555',
    role: 'SUPERADMIN',
    permissions: 'All',
    name: 'Legacy Super Admin'
  }
};

const BACKUP_CODES = [
  'BACKUP-001-ABC', 'BACKUP-002-DEF', 'BACKUP-003-GHI',
  'BACKUP-004-JKL', 'BACKUP-005-MNO', 'BACKUP-006-PQR',
  'BACKUP-007-STU', 'BACKUP-008-VWX', 'BACKUP-009-YZA', 'BACKUP-010-BCD'
];

const MOCK_DATA = {
  users: [
    { id: 'U001', email: 'user1@example.com', name: 'Juan Martinez', level: 'User', joinDate: '2024-11-15', status: 'Active', balance: 2.45, tasksCompleted: 87, country: 'Mexico' },
    { id: 'U002', email: 'user2@example.com', name: 'Maria Garcia', level: 'N2', joinDate: '2024-11-10', status: 'Active', balance: 125.30, tasksCompleted: 1234, country: 'Colombia' },
    { id: 'U003', email: 'user3@example.com', name: 'Carlos Rodriguez', level: 'N1', joinDate: '2024-10-20', status: 'Active', balance: 5678.90, tasksCompleted: 12500, country: 'Peru' },
    { id: 'U004', email: 'user4@example.com', name: 'Ana Silva', level: 'Elite', joinDate: '2024-09-05', status: 'Active', balance: 15234.56, tasksCompleted: 45000, country: 'Brazil' },
    { id: 'U005', email: 'user5@example.com', name: 'Pedro Santos', level: 'User', joinDate: '2024-11-20', status: 'Active', balance: 0.85, tasksCompleted: 23, country: 'Argentina' }
  ],
  apis: [
    { name: 'IBM Granite AI', status: 'online', enabled: true, description: 'AI task suggestions and platform customization', responseTime: '145ms', lastCheck: '2 minutes ago', endpoints: 3, monthlyCalls: 1250000 },
    { name: 'Polygon Blockchain', status: 'online', enabled: true, description: 'Cryptocurrency reward distribution', responseTime: '234ms', lastCheck: '1 minute ago', network: 'Mainnet', endpoints: 2, monthlyCalls: 450000 },
    { name: 'Firebase Auth', status: 'online', enabled: true, description: 'User authentication and authorization', responseTime: '89ms', lastCheck: '30 seconds ago', endpoints: 5, monthlyCalls: 2100000 },
    { name: 'Stripe Payments', status: 'online', enabled: false, description: 'USD/EUR payment processing', responseTime: '156ms', lastCheck: '3 minutes ago', endpoints: 4, monthlyCalls: 0 },
    { name: 'SendGrid Email', status: 'online', enabled: true, description: 'Transactional email notifications', responseTime: '267ms', lastCheck: '45 seconds ago', endpoints: 2, monthlyCalls: 890000 }
  ],
  verificationConditions: {
    condition_1_hash: { name: 'Hash Properties', passRate: 96, description: 'Leading zeros in SHA-256 hash' },
    condition_2_snr: { name: 'Signal-to-Noise Ratio', passRate: 85, description: 'SNR between 60-95 dB' },
    condition_3_bands: { name: 'Frequency Bands', passRate: 88, description: 'Beta >= 15%, Gamma >= 10%' },
    condition_4_similarity: { name: 'Vector Similarity', passRate: 84, description: 'Cosine >= 0.82, Distance <= 0.45' },
    condition_5_spoofing: { name: 'Anti-Spoofing', passRate: 79, description: 'Variance, Entropy, Correlation checks' }
  },
  auditLogs: [
    { timestamp: '2024-11-25 11:15:23', action: 'USER_REGISTERED', userId: 'U001245', details: 'New user from Mexico registered', status: 'SUCCESS' },
    { timestamp: '2024-11-25 11:14:45', action: 'API_TOGGLE', userId: 'ADMIN', details: 'Disabled Stripe Payments API', status: 'SUCCESS' },
    { timestamp: '2024-11-25 11:13:12', action: 'CONSENT_WITHDRAWN', userId: 'U000987', details: 'User withdrew consent for brain monitoring', status: 'SUCCESS' },
    { timestamp: '2024-11-25 11:12:00', action: 'VERIFICATION_FAILED', userId: 'U001500', details: 'SNR below threshold (58 dB)', status: 'FAILED' },
    { timestamp: '2024-11-25 11:10:34', action: 'SETTINGS_UPDATED', userId: 'ADMIN', details: 'Updated verification thresholds', status: 'SUCCESS' }
  ],
  metrics: {
    totalUsers: 1247500,
    activeSessions: 34200,
    rewardsDistributed: 245680.45,
    todayTransactions: 45234,
    systemHealth: 99.95
  },
  settings: {
    platformName: 'Biometric Reward Platform',
    baseReward: 0.01,
    taskDuration: 60,
    maxUsers: 10000000,
    maintenanceMode: false,
    snrMin: 60,
    snrMax: 95,
    cosineSim: 0.82,
    euclideanDist: 0.45,
    pearsonCorr: 0.78,
    varianceMin: 0.15,
    varianceMax: 0.85,
    crossSensorCorr: 0.65,
    entropyMin: 3.5,
    entropyMax: 7.2,
    antiSpoofing: 'medium',
    jwtExpiration: 24,
    maxLoginAttempts: 5,
    enable2FA: false
  },
  notifications: [
    { id: 1, title: 'High Rejection Rate Alert', message: 'Anti-spoofing rejection rate increased to 21%', time: '5 minutes ago', read: false, type: 'warning' },
    { id: 2, title: 'API Status Change', message: 'Stripe Payments API disabled by admin', time: '10 minutes ago', read: false, type: 'info' },
    { id: 3, title: 'System Update', message: 'New verification threshold settings applied', time: '1 hour ago', read: true, type: 'success' }
  ]
};

// Initialize App State
function initAppState() {
  AppState.users = [...MOCK_DATA.users];
  AppState.apis = [...MOCK_DATA.apis];
  AppState.auditLogs = [...MOCK_DATA.auditLogs];
  AppState.verificationConditions = { ...MOCK_DATA.verificationConditions };
  AppState.dashboardMetrics = { ...MOCK_DATA.metrics };
  AppState.settings = { ...MOCK_DATA.settings };
  AppState.notifications = [...MOCK_DATA.notifications];
}

// Authentication State
let tempLoginEmail = '';
let loginAttempts = 0;
const MAX_LOGIN_ATTEMPTS = 5;

// Handle Standard Login
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  const errorEl = document.getElementById('loginError');

  // Check login attempts
  if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
    errorEl.textContent = 'Account locked due to too many failed attempts. Please try alternative login methods.';
    errorEl.style.display = 'block';
    return;
  }

  // Validate credentials
  const account = ADMIN_ACCOUNTS[email];
  
  if (!account) {
    loginAttempts++;
    errorEl.textContent = `Invalid email or password. ${MAX_LOGIN_ATTEMPTS - loginAttempts} attempts remaining.`;
    errorEl.style.display = 'block';
    return;
  }

  if (account.password !== password) {
    loginAttempts++;
    errorEl.textContent = `Invalid email or password. ${MAX_LOGIN_ATTEMPTS - loginAttempts} attempts remaining.`;
    errorEl.style.display = 'block';
    return;
  }

  // Valid credentials - show 2FA
  tempLoginEmail = email;
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('twoFAForm').style.display = 'block';
  errorEl.style.display = 'none';
  loginAttempts = 0; // Reset attempts on successful credentials
}

// Handle 2FA Verification
function handle2FAVerification() {
  const code = document.getElementById('twoFACode').value.trim();
  const errorEl = document.getElementById('twoFAError');
  const account = ADMIN_ACCOUNTS[tempLoginEmail];

  if (!account) {
    errorEl.textContent = 'Session expired. Please login again.';
    errorEl.style.display = 'block';
    return;
  }

  if (code !== account.twoFACode) {
    errorEl.textContent = 'Invalid 2FA code. Please try again.';
    errorEl.style.display = 'block';
    return;
  }

  // Successful login
  completeLogin(tempLoginEmail, account);
}

// Complete Login Process
function completeLogin(email, account) {
  AppState.currentUser = { 
    email, 
    name: account.name,
    role: account.role,
    permissions: account.permissions
  };
  
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('mainDashboard').style.display = 'block';
  document.getElementById('userEmail').textContent = email;
  
  initDashboard();
  showToast(`Welcome back, ${account.name}! (${account.role})`, 'success');
  
  // Reset login state
  tempLoginEmail = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('twoFACode').value = '';
  document.getElementById('twoFAForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

// Social Login Simulation
function handleSocialLogin(provider) {
  showToast(`Connecting to ${provider}...`, 'info');
  
  setTimeout(() => {
    // Simulate successful social login with default admin account
    const email = 'admin@platform.com';
    const account = ADMIN_ACCOUNTS[email];
    completeLogin(email, account);
  }, 1500);
}

// Magic Link
function sendMagicLink() {
  const email = document.getElementById('magicEmail').value.trim();
  
  if (!email) {
    showToast('Please enter an email address', 'error');
    return;
  }
  
  if (!ADMIN_ACCOUNTS[email]) {
    showToast('Email not found in system', 'error');
    return;
  }
  
  document.getElementById('magicLinkSent').style.display = 'block';
  showToast('Magic link sent!', 'success');
  
  // Start countdown timer
  let timeLeft = 24 * 60 * 60; // 24 hours in seconds
  const timer = setInterval(() => {
    timeLeft--;
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    const timerEl = document.getElementById('magicLinkTimer');
    if (timerEl) {
      timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    if (timeLeft <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function simulateMagicLink() {
  const email = document.getElementById('magicEmail').value.trim();
  const account = ADMIN_ACCOUNTS[email];
  
  if (account) {
    showToast('Magic link verified!', 'success');
    setTimeout(() => {
      completeLogin(email, account);
    }, 500);
  }
}

// Biometric Authentication
function handleBiometric(type) {
  const statusEl = document.getElementById('biometricStatus');
  statusEl.style.display = 'block';
  statusEl.innerHTML = `<div class="scanning-animation">🔍 Scanning ${type}...</div>`;
  
  setTimeout(() => {
    const success = Math.random() > 0.1; // 90% success rate
    
    if (success) {
      statusEl.innerHTML = `<div style="color: var(--color-success);">✓ ${type} verified successfully!</div>`;
      
      setTimeout(() => {
        // Login as default admin
        const email = 'admin@platform.com';
        const account = ADMIN_ACCOUNTS[email];
        completeLogin(email, account);
      }, 1000);
    } else {
      statusEl.innerHTML = `<div style="color: var(--color-error);">✗ ${type} verification failed. Please try again or use password.</div>`;
    }
  }, 2000);
}

// Backup Code Verification
function verifyBackupCode() {
  const code = document.getElementById('backupCode').value.trim().toUpperCase();
  
  if (BACKUP_CODES.includes(code)) {
    showToast('Backup code verified!', 'success');
    
    setTimeout(() => {
      // Login as default admin
      const email = 'admin@platform.com';
      const account = ADMIN_ACCOUNTS[email];
      completeLogin(email, account);
    }, 500);
  } else {
    showToast('Invalid backup code', 'error');
  }
}

function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    AppState.currentUser = null;
    document.getElementById('mainDashboard').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    showToast('Logged out successfully', 'info');
  }
}

// Dashboard Initialization
function initDashboard() {
  renderDashboardMetrics();
  renderRecentActivities();
  renderUsersTable();
  renderAPICards();
  renderAuditLog();
  renderVerificationConditions();
  renderCharts();
  updateClock();
  setInterval(updateClock, 1000);
  loadSettings();
}

// Dashboard Metrics
function renderDashboardMetrics() {
  document.getElementById('totalUsers').textContent = AppState.dashboardMetrics.totalUsers.toLocaleString();
  document.getElementById('activeSessions').textContent = AppState.dashboardMetrics.activeSessions.toLocaleString();
  document.getElementById('rewardsDistributed').textContent = '$' + AppState.dashboardMetrics.rewardsDistributed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('systemHealth').textContent = AppState.dashboardMetrics.systemHealth + '%';
}

// Recent Activities
function renderRecentActivities() {
  const tbody = document.getElementById('recentActivities');
  tbody.innerHTML = AppState.auditLogs.slice(0, 5).map(log => `
    <tr>
      <td>${log.timestamp}</td>
      <td>${log.action.replace(/_/g, ' ')}</td>
      <td>${log.userId}</td>
      <td>${log.details}</td>
      <td><span class="status ${log.status.toLowerCase()}">${log.status}</span></td>
    </tr>
  `).join('');
}

// Users Table
function renderUsersTable() {
  const tbody = document.getElementById('usersTable');
  const users = AppState.users;

  tbody.innerHTML = users.map(user => {
    const levelClass = `level-${user.level.toLowerCase().replace(' ', '-')}`;
    return `
      <tr>
        <td><input type="checkbox" data-user-id="${user.id}"></td>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.name}</td>
        <td><span class="${levelClass}">${user.level}</span></td>
        <td>${user.joinDate}</td>
        <td><span class="status ${user.status.toLowerCase()}">${user.status}</span></td>
        <td>$${user.balance.toFixed(2)}</td>
        <td>${user.tasksCompleted}</td>
        <td>
          <button class="btn btn--sm btn--outline" onclick="viewUserDetails('${user.id}')">View</button>
        </td>
      </tr>
    `;
  }).join('');
}

// View User Details
function viewUserDetails(userId) {
  const user = AppState.users.find(u => u.id === userId);
  if (!user) return;

  const modal = document.getElementById('userModal');
  const modalBody = document.getElementById('userModalBody');

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
      <div>
        <strong>User ID:</strong> ${user.id}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Name:</strong> ${user.name}<br>
        <strong>Level:</strong> ${user.level}<br>
        <strong>Status:</strong> ${user.status}
      </div>
      <div>
        <strong>Join Date:</strong> ${user.joinDate}<br>
        <strong>Balance:</strong> $${user.balance.toFixed(2)}<br>
        <strong>Tasks Completed:</strong> ${user.tasksCompleted}<br>
        <strong>Country:</strong> ${user.country}
      </div>
    </div>
    <hr style="margin: 16px 0; border: 1px solid var(--color-border);">
    <div>
      <h4>Actions</h4>
      <div style="display: flex; gap: 8px; margin-top: 12px;">
        <button class="btn btn--sm btn--outline" onclick="showToast('Feature coming soon', 'info')">Edit User</button>
        <button class="btn btn--sm btn--outline" onclick="showToast('User suspended', 'warning')">Suspend</button>
        <button class="btn btn--sm btn--outline" onclick="showToast('Verification forced', 'success')">Force Verification</button>
        <button class="btn btn--sm btn--outline" style="color: var(--color-error);" onclick="showToast('User deleted', 'error')">Delete</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeUserModal() {
  document.getElementById('userModal').classList.remove('open');
}

// API Cards
function renderAPICards() {
  const container = document.getElementById('apiCards');
  container.innerHTML = AppState.apis.map(api => `
    <div class="api-card">
      <div class="api-header">
        <div class="api-title">${api.name}</div>
        <div class="api-status">
          <span class="status-indicator ${api.status}"></span>
          <span>${api.status}</span>
        </div>
      </div>
      <div class="api-description">${api.description}</div>
      <div class="api-metrics">
        <div class="api-metric"><strong>Response:</strong> ${api.responseTime}</div>
        <div class="api-metric"><strong>Last Check:</strong> ${api.lastCheck}</div>
        <div class="api-metric"><strong>Endpoints:</strong> ${api.endpoints}</div>
        <div class="api-metric"><strong>Monthly Calls:</strong> ${api.monthlyCalls.toLocaleString()}</div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; margin-top: 16px;">
        <label class="toggle-switch">
          <input type="checkbox" ${api.enabled ? 'checked' : ''} onchange="toggleAPI('${api.name}')">
          <span class="toggle-slider"></span>
        </label>
        <span style="font-size: 12px; color: var(--color-text-secondary);">${api.enabled ? 'Enabled' : 'Disabled'}</span>
      </div>
      <div class="api-actions">
        <button class="btn btn--sm btn--outline" onclick="testAPI('${api.name}')">🧪 Test Connection</button>
        <button class="btn btn--sm btn--outline" onclick="showToast('Viewing logs for ${api.name}', 'info')">📜 View Logs</button>
      </div>
    </div>
  `).join('');
}

function toggleAPI(apiName) {
  const api = AppState.apis.find(a => a.name === apiName);
  if (api) {
    api.enabled = !api.enabled;
    renderAPICards();
    showToast(`${apiName} ${api.enabled ? 'enabled' : 'disabled'}`, api.enabled ? 'success' : 'warning');
    
    // Add to audit log
    AppState.auditLogs.unshift({
      timestamp: new Date().toLocaleString(),
      action: 'API_TOGGLE',
      userId: 'ADMIN',
      details: `${api.enabled ? 'Enabled' : 'Disabled'} ${apiName}`,
      status: 'SUCCESS'
    });
    renderAuditLog();
  }
}

function testAPI(apiName) {
  showToast(`Testing ${apiName}...`, 'info');
  setTimeout(() => {
    showToast(`${apiName} test successful! Response time: ${Math.floor(Math.random() * 200) + 50}ms`, 'success');
  }, 1500);
}

// Audit Log
function renderAuditLog() {
  const tbody = document.getElementById('auditLogTable');
  tbody.innerHTML = AppState.auditLogs.map(log => `
    <tr>
      <td>${log.timestamp}</td>
      <td>${log.action.replace(/_/g, ' ')}</td>
      <td>${log.userId}</td>
      <td>${log.details}</td>
      <td><span class="status ${log.status.toLowerCase()}">${log.status}</span></td>
    </tr>
  `).join('');
}

// Verification Conditions
function renderVerificationConditions() {
  const container = document.getElementById('conditionMonitoring');
  const conditions = Object.values(AppState.verificationConditions);

  container.innerHTML = conditions.map(cond => `
    <div class="condition-item">
      <div class="condition-header">
        <div class="condition-title">${cond.name}</div>
        <div class="condition-rate">${cond.passRate}%</div>
      </div>
      <div class="condition-description">${cond.description}</div>
    </div>
  `).join('');

  // Render verification logs
  const logsTable = document.getElementById('verificationLogsTable');
  const mockLogs = [
    { userId: 'U001', timestamp: '11:15:23', hash: 'a7b2...', snr: 78, c1: '✓', c2: '✓', c3: '✓', c4: '✓', c5: '✓', reward: '$0.012', status: 'Passed' },
    { userId: 'U002', timestamp: '11:14:55', hash: 'c3d4...', snr: 58, c1: '✓', c2: '✗', c3: '✓', c4: '✓', c5: '✓', reward: '$0.00', status: 'Failed' },
    { userId: 'U003', timestamp: '11:14:12', hash: 'e5f6...', snr: 82, c1: '✓', c2: '✓', c3: '✓', c4: '✓', c5: '✗', reward: '$0.00', status: 'Failed' },
    { userId: 'U004', timestamp: '11:13:45', hash: 'g7h8...', snr: 91, c1: '✓', c2: '✓', c3: '✓', c4: '✓', c5: '✓', reward: '$0.015', status: 'Passed' }
  ];

  logsTable.innerHTML = mockLogs.map(log => `
    <tr>
      <td>${log.userId}</td>
      <td>${log.timestamp}</td>
      <td style="font-family: monospace;">${log.hash}</td>
      <td>${log.snr} dB</td>
      <td>${log.c1}</td>
      <td>${log.c2}</td>
      <td>${log.c3}</td>
      <td>${log.c4}</td>
      <td>${log.c5}</td>
      <td>${log.reward}</td>
      <td><span class="status ${log.status.toLowerCase()}">${log.status}</span></td>
    </tr>
  `).join('');
}

// Settings
function loadSettings() {
  Object.keys(AppState.settings).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      if (element.type === 'checkbox') {
        element.checked = AppState.settings[key];
      } else {
        element.value = AppState.settings[key];
      }
    }
  });
}

function saveSettings() {
  const settingsKeys = Object.keys(AppState.settings);
  settingsKeys.forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      if (element.type === 'checkbox') {
        AppState.settings[key] = element.checked;
      } else if (element.type === 'number') {
        AppState.settings[key] = parseFloat(element.value);
      } else {
        AppState.settings[key] = element.value;
      }
    }
  });

  showToast('Settings saved successfully!', 'success');
  
  // Add to audit log
  AppState.auditLogs.unshift({
    timestamp: new Date().toLocaleString(),
    action: 'SETTINGS_UPDATED',
    userId: 'ADMIN',
    details: 'System settings updated',
    status: 'SUCCESS'
  });
  renderAuditLog();
}

// Charts
function renderCharts() {
  // User Growth Chart
  const userGrowthCtx = document.getElementById('userGrowthChart');
  if (userGrowthCtx) {
    new Chart(userGrowthCtx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
        datasets: [{
          label: 'Total Users',
          data: [1200000, 1215000, 1225000, 1232000, 1238000, 1243000, 1247500],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: false }
        }
      }
    });
  }

  // Verification Success Chart
  const verificationCtx = document.getElementById('verificationChart');
  if (verificationCtx) {
    new Chart(verificationCtx, {
      type: 'doughnut',
      data: {
        labels: ['Passed', 'Failed'],
        datasets: [{
          data: [82, 18],
          backgroundColor: ['#4CAF50', '#F44336']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  // Rejection Analysis Chart
  const rejectionCtx = document.getElementById('rejectionChart');
  if (rejectionCtx) {
    const conditions = Object.values(AppState.verificationConditions);
    new Chart(rejectionCtx, {
      type: 'bar',
      data: {
        labels: conditions.map(c => c.name),
        datasets: [{
          label: 'Pass Rate (%)',
          data: conditions.map(c => c.passRate),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  }
}

// Tab Navigation
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active class from all nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  // Show selected tab
  const tabMap = {
    'overview': 'overviewTab',
    'users': 'usersTab',
    'api': 'apiTab',
    'settings': 'settingsTab',
    'compliance': 'complianceTab',
    'verification': 'verificationTab'
  };

  const tabElement = document.getElementById(tabMap[tabName]);
  if (tabElement) {
    tabElement.classList.add('active');
  }

  // Add active class to clicked nav item
  const navItem = document.querySelector(`[data-tab="${tabName}"]`);
  if (navItem) {
    navItem.classList.add('active');
  }

  AppState.currentTab = tabName;
}

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-color-scheme', newTheme);
  AppState.theme = newTheme;
  
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  
  showToast(`Switched to ${newTheme} mode`, 'info');
}

// Notifications
function toggleNotifications() {
  const panel = document.getElementById('notificationPanel');
  panel.classList.toggle('open');
  renderNotifications();
}

function renderNotifications() {
  const list = document.getElementById('notificationList');
  list.innerHTML = AppState.notifications.map(notif => `
    <div class="notification-item ${notif.read ? '' : 'unread'}">
      <div class="notification-title">${notif.title}</div>
      <div class="notification-message">${notif.message}</div>
      <div class="notification-time">${notif.time}</div>
    </div>
  `).join('');

  // Update badge
  const unreadCount = AppState.notifications.filter(n => !n.read).length;
  const badge = document.getElementById('notificationBadge');
  badge.textContent = unreadCount;
  badge.style.display = unreadCount > 0 ? 'block' : 'none';
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = {
    success: '✓',
    error: '✗',
    warning: '⚠',
    info: 'ℹ'
  }[type];

  toast.innerHTML = `
    <span style="font-size: 20px;">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Utility Functions
function updateClock() {
  const now = new Date();
  document.getElementById('currentTime').textContent = now.toLocaleTimeString();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function exportData(type) {
  showToast(`Exporting ${type} data...`, 'info');
  setTimeout(() => {
    showToast(`${type} data exported successfully!`, 'success');
  }, 1500);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  initAppState();

  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
  
  // 2FA Verification
  const verify2FABtn = document.getElementById('verify2FABtn');
  if (verify2FABtn) {
    verify2FABtn.addEventListener('click', handle2FAVerification);
  }
  
  // Back to login
  const backToLoginLink = document.getElementById('backToLoginLink');
  if (backToLoginLink) {
    backToLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('twoFAForm').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('twoFAError').style.display = 'none';
      document.getElementById('twoFACode').value = '';
    });
  }
  
  // Social login buttons
  const googleLoginBtn = document.getElementById('googleLoginBtn');
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', () => handleSocialLogin('Google'));
  }
  
  const facebookLoginBtn = document.getElementById('facebookLoginBtn');
  if (facebookLoginBtn) {
    facebookLoginBtn.addEventListener('click', () => handleSocialLogin('Facebook'));
  }
  
  // Magic link button on main form
  const magicLinkBtn = document.getElementById('magicLinkBtn');
  if (magicLinkBtn) {
    magicLinkBtn.addEventListener('click', () => {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('altLoginMethods').style.display = 'block';
      switchAltTab('magic');
    });
  }
  
  // Alternative login methods link
  const altLoginMethodsLink = document.getElementById('altLoginMethodsLink');
  if (altLoginMethodsLink) {
    altLoginMethodsLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('altLoginMethods').style.display = 'block';
    });
  }
  
  // Back to main login
  const backToMainLoginLink = document.getElementById('backToMainLoginLink');
  if (backToMainLoginLink) {
    backToMainLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('altLoginMethods').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
    });
  }
  
  // Alternative tabs
  document.querySelectorAll('.alt-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      switchAltTab(tabName);
    });
  });
  
  // Send magic link
  const sendMagicLinkBtn = document.getElementById('sendMagicLinkBtn');
  if (sendMagicLinkBtn) {
    sendMagicLinkBtn.addEventListener('click', sendMagicLink);
  }
  
  // Simulate magic link click
  const simulateMagicLinkBtn = document.getElementById('simulateMagicLinkBtn');
  if (simulateMagicLinkBtn) {
    simulateMagicLinkBtn.addEventListener('click', simulateMagicLink);
  }
  
  // Biometric buttons
  const fingerprintBtn = document.getElementById('fingerprintBtn');
  if (fingerprintBtn) {
    fingerprintBtn.addEventListener('click', () => handleBiometric('fingerprint'));
  }
  
  const faceBtn = document.getElementById('faceBtn');
  if (faceBtn) {
    faceBtn.addEventListener('click', () => handleBiometric('face'));
  }
  
  // Backup code verification
  const verifyBackupCodeBtn = document.getElementById('verifyBackupCodeBtn');
  if (verifyBackupCodeBtn) {
    verifyBackupCodeBtn.addEventListener('click', verifyBackupCode);
  }
  
  // Copy to clipboard for credentials
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('copy-text')) {
      const text = e.target.textContent;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard: ' + text, 'success');
      }).catch(() => {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard: ' + text, 'success');
      });
    }
  });
  
  // Forgot password
  const forgotPasswordLink = document.getElementById('forgotPasswordLink');
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Password reset link sent to your email (simulated)', 'info');
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Sidebar toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  // Notification toggle
  const notificationBtn = document.getElementById('notificationBtn');
  if (notificationBtn) {
    notificationBtn.addEventListener('click', toggleNotifications);
  }

  const closeNotifications = document.getElementById('closeNotifications');
  if (closeNotifications) {
    closeNotifications.addEventListener('click', () => {
      document.getElementById('notificationPanel').classList.remove('open');
    });
  }

  // Tab navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const tab = this.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Save settings button
  const saveSettingsBtn = document.getElementById('saveSettings');
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', saveSettings);
  }

  // Export buttons
  const exportUsers = document.getElementById('exportUsers');
  if (exportUsers) {
    exportUsers.addEventListener('click', () => exportData('users'));
  }

  const exportAuditLog = document.getElementById('exportAuditLog');
  if (exportAuditLog) {
    exportAuditLog.addEventListener('click', () => exportData('audit log'));
  }

  const exportVerificationLogs = document.getElementById('exportVerificationLogs');
  if (exportVerificationLogs) {
    exportVerificationLogs.addEventListener('click', () => exportData('verification logs'));
  }

  // Refresh dashboard
  const refreshDashboard = document.getElementById('refreshDashboard');
  if (refreshDashboard) {
    refreshDashboard.addEventListener('click', () => {
      showToast('Refreshing dashboard...', 'info');
      setTimeout(() => {
        renderDashboardMetrics();
        renderRecentActivities();
        showToast('Dashboard refreshed!', 'success');
      }, 1000);
    });
  }

  // Test all APIs
  const testAllAPIs = document.getElementById('testAllAPIs');
  if (testAllAPIs) {
    testAllAPIs.addEventListener('click', () => {
      showToast('Testing all APIs...', 'info');
      setTimeout(() => {
        showToast('All APIs tested successfully!', 'success');
      }, 2000);
    });
  }

  // Filter users
  const statusFilter = document.getElementById('statusFilter');
  const levelFilter = document.getElementById('levelFilter');
  const userSearch = document.getElementById('userSearch');

  if (statusFilter) {
    statusFilter.addEventListener('change', filterUsers);
  }
  if (levelFilter) {
    levelFilter.addEventListener('change', filterUsers);
  }
  if (userSearch) {
    userSearch.addEventListener('input', filterUsers);
  }

  // Clear filters
  const clearFilters = document.getElementById('clearFilters');
  if (clearFilters) {
    clearFilters.addEventListener('click', () => {
      if (statusFilter) statusFilter.value = 'all';
      if (levelFilter) levelFilter.value = 'all';
      if (userSearch) userSearch.value = '';
      filterUsers();
    });
  }

  // Close modal on outside click
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('userModal');
    if (e.target === modal) {
      closeUserModal();
    }
  });

  renderNotifications();
});

// Switch Alternative Login Tabs
function switchAltTab(tabName) {
  // Remove active class from all tabs
  document.querySelectorAll('.alt-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active class from all panels
  document.querySelectorAll('.alt-tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Add active class to selected tab
  const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
  
  // Add active class to selected panel
  const tabPanelMap = {
    'credentials': 'credentialsTab',
    'magic': 'magicTab',
    'biometric': 'biometricTab',
    'backup': 'backupTab'
  };
  
  const panelId = tabPanelMap[tabName];
  const panel = document.getElementById(panelId);
  if (panel) {
    panel.classList.add('active');
  }
}

function filterUsers() {
  const statusFilter = document.getElementById('statusFilter')?.value || 'all';
  const levelFilter = document.getElementById('levelFilter')?.value || 'all';
  const searchTerm = document.getElementById('userSearch')?.value.toLowerCase() || '';

  let filtered = [...MOCK_DATA.users];

  if (statusFilter !== 'all') {
    filtered = filtered.filter(u => u.status.toLowerCase() === statusFilter.toLowerCase());
  }

  if (levelFilter !== 'all') {
    filtered = filtered.filter(u => u.level === levelFilter);
  }

  if (searchTerm) {
    filtered = filtered.filter(u => 
      u.name.toLowerCase().includes(searchTerm) ||
      u.email.toLowerCase().includes(searchTerm) ||
      u.id.toLowerCase().includes(searchTerm)
    );
  }

  AppState.users = filtered;
  renderUsersTable();
}