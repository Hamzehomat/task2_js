var result=document.querySelector(".registerForm");
result.onsubmit=exchange;
function exchange(e){
    e.preventDefault();
   value=document.querySelector(".exchange").value;
    let usd=document.querySelector(".amount").value;
    let jod = document.querySelector(".amount").value;
    let usdrate=0.27;
    let jodrate=0.19;

    if (value=="usd"){
        document.querySelector(".result").textContent="the result =" + (usd*usdrate)}
    else if (value=="jod"){
        document.querySelector(".result").textContent="the result =" + (jod*jodrate)};
        }