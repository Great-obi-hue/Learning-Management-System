// ==============================
// 🧠 CURRENT USER SYSTEM
// ==============================
function getCurrentUser() {
  let user = localStorage.getItem("currentUser");

  // fallback (for testing)
  if (!user) {
    user = "demoUser";
    localStorage.setItem("currentUser", user);
  }

  return user;
}

function getUserKey(key) {
  return `${key}_${getCurrentUser()}`;
}



// ==============================
// 🔁 TAB SYSTEM (DYNAMIC)
// ==============================
function showTab(tab, event) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  const container = document.getElementById("tabContent");

  if (tab === "profile") container.innerHTML = getProfileHTML();
  if (tab === "courses") container.innerHTML = getCoursesHTML();
  if (tab === "teachers") container.innerHTML = getTeachersHTML();
  if (tab === "messages") container.innerHTML = getMessagesHTML();
  if (tab === "reviews") container.innerHTML = getReviewsHTML();

  loadProfile();
}



// ==============================
// 🧱 PROFILE HTML TEMPLATE
// ==============================
function getProfileHTML() {
  return `
    <div class="card">
      <h3>Personal Information</h3>

      <div class="grid">
        <input id="firstName" placeholder="First Name">
        <input id="lastName" placeholder="Last Name">
        <input id="username" placeholder="Username">
        <input id="headline" placeholder="Headline">
      </div>

      <textarea id="description" placeholder="Description"></textarea>
    </div>

    <div class="card">
      <h3>Social Links</h3>

      <input id="website" placeholder="Website">
      <input id="twitter" placeholder="Twitter">
      <input id="linkedin" placeholder="LinkedIn">
      <input id="youtube" placeholder="YouTube">
      <input id="facebook" placeholder="Facebook">
    </div>

    <button class="save-btn" onclick="saveProfile()">Save Changes</button>
  `;
}



// ==============================
// 📚 COURSES
// ==============================
function getCoursesHTML() {
  return `
    <div class="card">
      <h3>My Courses</h3>
      <p>No courses yet.</p>
    </div>
  `;
}



// ==============================
// 👨‍🏫 TEACHERS
// ==============================
function getTeachersHTML() {
  return `
    <div class="card">
      <h3>Teachers</h3>
      <p>No teachers yet.</p>
    </div>
  `;
}



// ==============================
// 💬 MESSAGES
// ==============================
function getMessagesHTML() {
  return `
    <div class="card">
      <h3>Messages</h3>
      <textarea id="msgInput" placeholder="Type message..."></textarea>
      <button onclick="sendMessage()">Send</button>
      <div id="msgList"></div>
    </div>
  `;
}

function sendMessage() {
  const input = document.getElementById("msgInput");
  const list = document.getElementById("msgList");

  const msg = document.createElement("p");
  msg.innerText = input.value;

  list.appendChild(msg);
  input.value = "";
}



// ==============================
// ⭐ REVIEWS
// ==============================
function getReviewsHTML() {
  return `
    <div class="card">
      <h3>Reviews</h3>
      <p>No reviews yet.</p>
    </div>
  `;
}



// ==============================
// 🖼️ IMAGE
// ==============================
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    const img = reader.result;

    document.getElementById("profilePreview").src = img;

    localStorage.setItem(getUserKey("profileImage"), img);
  };

  reader.readAsDataURL(file);
}



// ==============================
// 💾 SAVE PROFILE
// ==============================
function saveProfile() {
  const profile = {
    firstName: getValue("firstName"),
    lastName: getValue("lastName"),
    username: getValue("username"),
    headline: getValue("headline"),
    description: getValue("description"),
    website: getValue("website"),
    twitter: getValue("twitter"),
    linkedin: getValue("linkedin"),
    youtube: getValue("youtube"),
    facebook: getValue("facebook"),
  };

  localStorage.setItem(getUserKey("profileData"), JSON.stringify(profile));

  updateProfileCard(profile);

  showMessage("Profile saved!");
}



// ==============================
// 📥 LOAD PROFILE
// ==============================
function loadProfile() {
  const data = JSON.parse(localStorage.getItem(getUserKey("profileData")));
  const image = localStorage.getItem(getUserKey("profileImage"));

  if (data) {
    Object.keys(data).forEach(key => {
      const el = document.getElementById(key);
      if (el) el.value = data[key];
    });

    updateProfileCard(data);
  }

  if (image) {
    document.getElementById("profilePreview").src = image;
  }
}



// ==============================
// 🔄 UPDATE HEADER CARD
// ==============================
function updateProfileCard(data) {
  const name = `${data.firstName || ""} ${data.lastName || ""}`;
  document.getElementById("displayName").innerText = name || "John Doe";
  document.getElementById("displayHeadline").innerText = data.headline || "No headline";
}



// ==============================
// 🧰 HELPERS
// ==============================
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value : "";
}



// ==============================
// 🔔 UI MESSAGE
// ==============================
function showMessage(msg) {
  let el = document.getElementById("msg");

  if (!el) {
    el = document.createElement("div");
    el.id = "msg";
    el.style.position = "fixed";
    el.style.bottom = "20px";
    el.style.right = "20px";
    el.style.background = "#7c3aed";
    el.style.color = "#fff";
    el.style.padding = "10px 20px";
    el.style.borderRadius = "5px";
    document.body.appendChild(el);
  }

  el.innerText = msg;
  el.style.display = "block";

  setTimeout(() => el.style.display = "none", 3000);
}



// ==============================
// 🚀 INIT
// ==============================
window.onload = function () {
  document.getElementById("tabContent").innerHTML = getProfileHTML();
  loadProfile();
};