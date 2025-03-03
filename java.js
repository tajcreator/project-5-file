document.addEventListener("click", () => {
    const body = document.body;
    const themeColors = [
      "aliceblue",
      "antiquewhite",
      "azure",
      "bisque",
      "ghostwhite",
      "lavender",
      "honeydew",
      "lightcyan",
      "paleturquoise",
      "palegreen",
    ];
  
    document.getElementById("theme-btn").addEventListener("click", () => {
      let chosenColor = themeColors[Math.floor(Math.random() * themeColors.length)];
      body.style.backgroundColor = chosenColor;
    });
  });

// newpage history
 document.getElementById('change-page').addEventListener('click', function() {
    {
        window.location = '/different.side/newPage.html';
      }
 }) 

 
// date projects
function formatDate() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
  
    return {
      day: `${days[date.getDay()]},`,
      fullDate: `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')} ${date.getFullYear()}`
    };
  }
  
  const { day, fullDate } = formatDate();
  document.querySelector('#timeToday').textContent = day;
  document.querySelector('#allDocument').textContent = fullDate;

  

//   middle point
const allButtons = document.querySelectorAll('.selectedButton');
const allTasks = document.querySelectorAll('.cardsItem');
const completedTask = document.querySelector('#countNumber');
const totalTasks = document.querySelector('#pointCount');
const notificationBox = document.querySelector('#historyDocument');

let poinCount = allTasks.length;
let completeTasksCount = 24;
let taskDatas = [];

 
totalTasks.textContent = poinCount.toString().padStart(2, '0');
completedTask.textContent = completeTasksCount;

// Function to update  
function updateUI() {
  totalTasks.textContent = poinCount.toString().padStart(2, '0');
  completedTask.textContent = completeTasksCount;
  notificationBox.innerHTML = taskDatas
    .map(task => `
      <div class="w-full bg-[#f4f7ff] p-3 rounded-lg">
        <h1 class="text-base font-normal">
          ${'You have completed the task: ' + task.title} at <span>${task.date}</span>
        </h1>
      </div>
    `)
    .join('');
}

// Event listener for task completion
allButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    alert('Board updated successfully');

    // Disable button
    this.disabled = true;
    this.classList.add('bg-blue-200', 'cursor-not-allowed');
    this.classList.remove('bg-blue-600');

    // Update counts
    completeTasksCount++;
    poinCount  = Math.max(0, poinCount  - 1);

    // Store task data
    let taskTitle = this.closest('.cardsItem').querySelector('.title').textContent;
    taskDatas.push({ title: taskTitle, date: new Date().toLocaleTimeString() });

    // Update UI
    updateUI();

    // Check if all tasks are completed
    if ([...allButtons].every(btn => btn.disabled)) {
      alert('All tasks are completed!');
    }
  });
});

// history items
 document.getElementById('historyFinish').addEventListener('click', function(){ 
    taskDatas.length = 0;
    notificationBox.innerHTML = '';
    allButtons.forEach((btn) => {
      btn.removeAttribute('disabled');
      btn.classList.remove('bg-blue-200', 'cursor-not-allowed');
      btn.classList.add('bg-blue-600');
    });
    
  completeTasksCount = 24;
  compleTask.textContent = completeTasksCount;

  poinCount  = allTasks.length;
  totalTasks.textContent = poinCount.toString().padStart(2, '0')
 })

 function backToDashboardAlt() {
    window.location.replace('/');}