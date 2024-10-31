const countDowndate = new Date("Oct 30, 2024 12:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDowndate - now;
  
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
  
  if (distance < 0) {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000); 
