document.body.style.height="100vh"
document.body.classList.add("d-flex", "align-items-center", "justify-content-center")

let time = document.getElementById("time")
let btnContainer = document.querySelector(".btnContainer")
btnContainer.classList.add("d-flex", "align-items-center", "justify-content-center")

time.classList.add("d-flex", "align-items-center", "justify-content-center")
time.style.backgroundColor="navy"
time.style.width="350px"
time.style.height="240px"
time.style.margin="auto"
time.style.borderRadius="10px"
time.style.flexDirection="column"

let timeHeading = document.getElementById("timeHeading")
timeHeading.innerHTML = "IST Kolkata, INDIA"
timeHeading.style.color="white"
timeHeading.style.marginTop="45px"
timeHeading.style.fontSize="25px"
timeHeading.style.fontWeight="bold"

let timeArr = btnContainer.children

timeArr = Array.from(timeArr)

timeArr.forEach((elements)=> {
    elements.style.margin="10px"
    elements.style.height="70px"
    elements.style.width="80px"
    elements.style.marginTop="30px"
    elements.style.fontWeight="bold"
})

let dayDate = document.getElementById("dayDate")
dayDate.style.color="white"
dayDate.style.fontWeight="bold"
dayDate.style.margin="10px 0px 24px 162px"

setInterval(()=> {
    
    timeArr[0].innerHTML = new Date().getHours() + " hrs"
    timeArr[1].innerHTML = new Date().getMinutes() + " min"
    timeArr[2].innerHTML = new Date().getSeconds() + " sec"
    
    dayDate.innerHTML = new Date().toDateString()
    
}, 1000)
