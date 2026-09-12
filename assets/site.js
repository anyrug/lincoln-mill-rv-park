
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navlinks');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}
const booking = document.getElementById('bookingForm');
if(booking){
  booking.addEventListener('submit', e=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(booking).entries());
    const msg =
`Lincoln Mill RV Park booking request
Name: ${data.name || ''}
Phone: ${data.phone || ''}
Arrival: ${data.arrival || ''}
Departure: ${data.departure || ''}
RV / rig: ${data.rig || ''}
Rig length: ${data.length || ''}
Power: ${data.power || ''}
Guests: ${data.guests || ''}
Pets: ${data.pets || ''}
Boat / extra trailer: ${data.boat || ''}
Notes: ${data.notes || ''}

Please confirm availability and total rate.`;
    const out = document.getElementById('bookingOutput');
    out.textContent = msg;
    out.style.display = 'block';
    const copyBtn = document.getElementById('copyRequest');
    const textBtn = document.getElementById('textRequest');
    copyBtn.style.display = 'inline-flex';
    textBtn.style.display = 'inline-flex';
    copyBtn.onclick = async () => {
      try{await navigator.clipboard.writeText(msg); copyBtn.textContent='Copied!';}
      catch(err){alert('Select and copy the request shown below.');}
    };
    textBtn.onclick = () => {
      window.location.href = 'sms:+15096362002?&body=' + encodeURIComponent(msg);
    };
  });
}
