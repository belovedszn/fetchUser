const btn = document.querySelector('.btn');
const boxx = document.querySelector('.container2');

async function fetchUser() {
    try {
       const response = await fetch('https://randomuser.me/api/');
       const userData = await response.json();
       const userInfo = userData.results[0];

       boxx.innerHTML = `
            <div class="boxx">
            <img src="${userInfo.picture.large}" />
            <div class="info">
            <div>First Name: ${userInfo.name.first}</div>
            <div>Last Name: ${userInfo.name.last}</div>
            <div>${userInfo.email}</div>
            <div>${userInfo.phone}</div>
            </div>
          </div>
       `

    } catch (error) {
        boxx.innerHTML = `<div class="boxx bold">an unexpected error occurried! try again later</div>`
    }
}

btn.addEventListener('click', fetchUser);