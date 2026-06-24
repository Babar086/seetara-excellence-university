// ==============================
// SEETARA EXCELLENCE UNIVERSITY
// ULTRA PREMIUM MANAGEMENT SYSTEM
// ==============================

// ---------- SECTION NAVIGATION ----------

function showSection(sectionId) {

    document.querySelectorAll(".content-section")
    .forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId)
    .classList.add("active");
}

showSection("dashboard");

// ---------- LOCAL STORAGE ----------

let students =
JSON.parse(localStorage.getItem("students")) || [];

let teachers =
JSON.parse(localStorage.getItem("teachers")) || [];

let courses =
JSON.parse(localStorage.getItem("courses")) || [];

let enrollments =
JSON.parse(localStorage.getItem("enrollments")) || [];

let attendance =
JSON.parse(localStorage.getItem("attendance")) || [];

let results =
JSON.parse(localStorage.getItem("results")) || [];

let fees =
JSON.parse(localStorage.getItem("fees")) || [];

let notices =
JSON.parse(localStorage.getItem("notices")) || [];

// ---------- DASHBOARD ----------

function updateDashboard() {

document.getElementById("studentCount").textContent =
students.length;

document.getElementById("teacherCount").textContent =
teachers.length;

document.getElementById("courseCount").textContent =
courses.length;

document.getElementById("enrollmentCount").textContent =
enrollments.length;

}

// ---------- STUDENTS ----------

function addStudent() {

let name =
document.getElementById("studentName").value;

let roll =
document.getElementById("studentRoll").value;

let dept =
document.getElementById("studentDepartment").value;

if(!name || !roll || !dept){

alert("Please fill all student fields");
return;

}

students.push({

id:Date.now(),
name,
roll,
dept

});

localStorage.setItem(
"students",
JSON.stringify(students)
);

renderStudents();

document.getElementById("studentName").value="";
document.getElementById("studentRoll").value="";
document.getElementById("studentDepartment").value="";

updateDashboard();

}

function renderStudents(){

let list =
document.getElementById("studentList");

list.innerHTML="";

students.forEach(student=>{

list.innerHTML += `

<div class="data-card">

<h4>${student.name}</h4>

<p>Roll: ${student.roll}</p>

<p>Department: ${student.dept}</p>

<button class="delete-btn"
onclick="deleteStudent(${student.id})">

Delete

</button>

</div>

`;

});

}

function deleteStudent(id){

students =
students.filter(student =>
student.id !== id);

localStorage.setItem(
"students",
JSON.stringify(students)
);

renderStudents();
updateDashboard();

}

document
.getElementById("studentSearch")
.addEventListener("keyup", function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll("#studentList .data-card");

cards.forEach(card=>{

card.style.display =
card.innerText.toLowerCase()
.includes(value)
? "block"
: "none";

});

});

// ---------- TEACHERS ----------

function addTeacher(){

let name =
document.getElementById("teacherName").value;

let subject =
document.getElementById("teacherSubject").value;

if(!name || !subject){

alert("Please fill all teacher fields");
return;

}

teachers.push({

id:Date.now(),
name,
subject

});

localStorage.setItem(
"teachers",
JSON.stringify(teachers)
);

renderTeachers();

document.getElementById("teacherName").value="";
document.getElementById("teacherSubject").value="";

updateDashboard();

}

function renderTeachers(){

let list =
document.getElementById("teacherList");

list.innerHTML="";

teachers.forEach(teacher=>{

list.innerHTML += `

<div class="data-card">

<h4>${teacher.name}</h4>

<p>Subject: ${teacher.subject}</p>

</div>

`;

});

}

// ---------- COURSES ----------

function addCourse(){

let name =
document.getElementById("courseName").value;

let code =
document.getElementById("courseCode").value;

if(!name || !code){

alert("Please fill all course fields");
return;

}

courses.push({

id:Date.now(),
name,
code

});

localStorage.setItem(
"courses",
JSON.stringify(courses)
);

renderCourses();

document.getElementById("courseName").value="";
document.getElementById("courseCode").value="";

updateDashboard();

}

function renderCourses(){

let list =
document.getElementById("courseList");

list.innerHTML="";

courses.forEach(course=>{

list.innerHTML += `

<div class="data-card">

<h4>${course.name}</h4>

<p>Code: ${course.code}</p>

</div>

`;

});

}

// ---------- ENROLLMENT ----------

function enrollStudent(){

let student =
document.getElementById("enrollStudent").value;

let course =
document.getElementById("enrollCourse").value;

if(!student || !course){

alert("Fill all enrollment fields");
return;

}

enrollments.push({

student,
course

});

localStorage.setItem(
"enrollments",
JSON.stringify(enrollments)
);

renderEnrollments();

updateDashboard();

}

function renderEnrollments(){

let list =
document.getElementById("enrollmentList");

list.innerHTML="";

enrollments.forEach(item=>{

list.innerHTML += `

<div class="data-card">

<h4>${item.student}</h4>

<p>Enrolled In: ${item.course}</p>

</div>

`;

});

}

// ---------- ATTENDANCE ----------

function markAttendance(){

let student =
document.getElementById("attendanceStudent").value;

let status =
document.getElementById("attendanceStatus").value;

if(!student){

alert("Enter student name");
return;

}

attendance.push({

student,
status

});

localStorage.setItem(
"attendance",
JSON.stringify(attendance)
);

renderAttendance();

}

function renderAttendance(){

let list =
document.getElementById("attendanceList");

list.innerHTML="";

attendance.forEach(item=>{

list.innerHTML += `

<div class="data-card">

<h4>${item.student}</h4>

<p>Status: ${item.status}</p>

</div>

`;

});

}

// ---------- RESULTS ----------

function addResult(){

let student =
document.getElementById("resultStudent").value;

let gpa =
document.getElementById("resultGPA").value;

if(!student || !gpa){

alert("Fill all result fields");
return;

}

results.push({

student,
gpa

});

localStorage.setItem(
"results",
JSON.stringify(results)
);

renderResults();

}

function renderResults(){

let list =
document.getElementById("resultList");

list.innerHTML="";

results.forEach(item=>{

list.innerHTML += `

<div class="data-card">

<h4>${item.student}</h4>

<p>GPA: ${item.gpa}</p>

</div>

`;

});

}

// ---------- FEES ----------

function addFee(){

let student =
document.getElementById("feeStudent").value;

let amount =
document.getElementById("feeAmount").value;

if(!student || !amount){

alert("Fill all fee fields");
return;

}

fees.push({

student,
amount

});

localStorage.setItem(
"fees",
JSON.stringify(fees)
);

renderFees();

}

function renderFees(){

let list =
document.getElementById("feeList");

list.innerHTML="";

fees.forEach(item=>{

list.innerHTML += `

<div class="data-card">

<h4>${item.student}</h4>

<p>Fee: Rs ${item.amount}</p>

</div>

`;

});

}

// ---------- NOTICES ----------

function addNotice(){

let text =
document.getElementById("noticeText").value;

if(!text){

alert("Enter notice");
return;

}

notices.push(text);

localStorage.setItem(
"notices",
JSON.stringify(notices)
);

renderNotices();

}

function renderNotices(){

let list =
document.getElementById("noticeList");

list.innerHTML="";

notices.forEach(notice=>{

list.innerHTML += `

<div class="data-card">

<p>${notice}</p>

</div>

`;

});

}

// ---------- DARK MODE ----------

document
.getElementById("themeBtn")
.addEventListener("click", ()=>{

document.body
.classList.toggle("dark-mode");

});

// ---------- INITIAL LOAD ----------

renderStudents();
renderTeachers();
renderCourses();
renderEnrollments();
renderAttendance();
renderResults();
renderFees();
renderNotices();
updateDashboard();
