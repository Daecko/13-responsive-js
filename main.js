const allDet = document.querySelectorAll(".question-wrapper details");
allDet.forEach((details)=>{
    details.addEventListener("click", (e)=>{
        allDet.forEach((others)=>{
            others.removeAttribute("open");
        });
    });
});