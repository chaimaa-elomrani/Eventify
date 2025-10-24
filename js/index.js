const count_title = document.querySelector(".count_title");

// let arrayOfChar = ;

let hero_title = document.createElement("h4");
hero_title.id = "hero_title";
let text = document.createTextNode("event details");
let arrayOfChar = text.textContent.split("");

counter = 0;
let text_timer = setInterval(() => {
  if (counter == arrayOfChar.length - 1) {
    clearInterval(text_timer);
  }

  hero_title.textContent += arrayOfChar[counter];
  document.querySelector(".hero_title").append(hero_title);

  counter++;
}, 200);

let span = document.createElement("span");
span.className = "first_word";
span.textContent = "Event ";
span.style.color = "#FFD400";
let title = count_title.querySelector("h3").prepend(span);

let days = 12;
let hours = 1;
let minutes = 1;
let second = 10;
let days_value = document.getElementById("days_value");
let hours_value = document.getElementById("hours_value");
let minutes_value = document.getElementById("minutes_value");
let seconds_value = document.getElementById("seconds_value");

let count_down = setInterval(() => {
  days_value.textContent = days < 10 ? "0" + days : days;
  hours_value.textContent = hours < 10 ? "0" + hours : hours;
  minutes_value.textContent = minutes < 10 ? "0" + minutes : minutes;
  seconds_value.textContent = second < 10 ? "0" + second : second;

  second--;
  if (second == 0) {
    second = 60;
    minutes--;
  }

  if (minutes == 0) {
    minutes = 60;
    hours--;
  }

  if (hours == 0) {
    hours = 24;
    days--;
  }
}, 1000);

let image_event = document.querySelector(".image_event");
let overlay = document.getElementById("overlay_jazz_gallery");
let close_btn = document.querySelector(".close");
let content = ` 
        <div class="close">&times;</div>
        <div class="gallery_header container">
          <h1>The Jazz Gallery All-Stars</h1>
          <p>
            The Jazz Gallery celebrates its 25th Anniversary with a special
            ensemble featuring many of the leading creative voices in
            jazz—performing in a unique concert experience that places you
            center on the Opera House Stage.
          </p>
          <h4><em class="fas fa-location-dot"></em>Opera House Stage GA</h4>
          <div class="time_event">
            <h2>Thu. Oct. 8, 2020 <span>8p.m</span></h2>
          </div>
          <button class="donate_btn">donate today</button>
        </div>
        <div class="gallery container">
          <div class="title_gallery">
            <h2>You May Also Like</h2>
          </div>
          <div class="card_gallery container">
            <div class="card">
              <div class="image-card">
                <img
                  src="../assets/event_details/2526_millennium_stage_1600x900_october_jackgruber.webp"
                  alt=""
                />
              </div>
              <h3>Jack Gruber</h3>
              <h6>Thu. Oct. 23, 2025</h6>
              <span
                >Pianist and composer Jack Gruber performs a dynamic blend of
                jazz, pop, video game music, and anime themes.</span
              >
              <button class="donate_btn">donate today</button>
            </div>
            <div class="card">
              <div class="image-card">
                <img
                  src="../assets/event_details/kcspeakeasy_eventimage.webp"
                  alt=""
                />
              </div>
              <h3>Oct. 3 - 24, 2025</h3>

              <span
                >A secret encore awaits you high above the city lights.
                Following select evening performances, the rooftop bar
                transforms into the KC Speakeasy, an afterhours jazz club hidden
                in the sky. Sip specialty cocktails and enjoy late-night bites
                to the sounds of live music with an ever-changing lineup of
                special guest artists. Reservations recommended.</span
              >
              <button class="donate_btn">donate today</button>
            </div>

            <div class="card">
              <div class="image_card">
                <img
                  src="../assets/event_details/maxresdefault-4.webp"
                  alt=""
                />
              </div>
              <h4>Millennium Stage (In-Person and Livestream)</h4>
              <h4>Charles Covington Quartet</h4>
              <h6>Thu. Oct. 30, 2025</h6>
              <span
                >Thu. Oct. 30, 2025 A virtuoso pianist, organist and spectacular
                talent, Charles Covington’s musical performances are
                enlightening and entertaining.</span
              >
              <button class="donate_btn">donate today</button>
            </div>

            <div class="card">
              <div class="image-card">
                <img src="../assets/event_details/tressorrells.webp" alt="" />
              </div>
              <h3>Trey Sorrells</h3>
              <h6>Wed. Nov. 5, 2025</h6>
              <span
                >Versatile saxophonist Trey Sorrells captivates audiences with
                his soulful sound and diverse musical expression.</span
              >
              <button class="donate_btn">donate today</button>
            </div>

            <div class="card">
              <div class="image-card">
                <img
                  src="../assets/event_details/2526_millennium_stage_1600x900_october_chascovington.webp"
                  alt=""
                />
              </div>
              <h3>Jack Gruber</h3>
              <h6>Thu. Oct. 23, 2025</h6>
              <span
                >Pianist and composer Jack Gruber performs a dynamic blend of
                jazz, pop, video game music, and anime themes.</span
              >
              <button class="donate_btn">donate today</button>
            </div>

            <div class="card">
              <div class="image-card">
                <img
                  src="../assets/event_details/nso-noseda_75000.webp"
                  alt=""
                />
              </div>
              <h3>Jack Gruber</h3>
              <h6>Thu. Oct. 23, 2025</h6>
              <span
                >Pianist and composer Jack Gruber performs a dynamic blend of
                jazz, pop, video game music, and anime themes.</span
              >

              <button class="donate_btn">donate today</button>
            </div>
          </div>

          <div class="footer_gallery container">
            <h1>Support the Arts in America</h1>
            <p>
              The Kennedy Center is a non-profit institution, and your
              tax-deductible gift helps expand our arts and education offerings
              throughout the country.
            </p>
            <button class="donate_btn">donate today</button>
          </div>
        </div>
      </div> `



      overlay.innerHTML = content
      
      image_event.addEventListener("click", () => {
  overlay.classList.add("show");
});

overlay.addEventListener("click", (e) => {
  if(e.target.className == "close")
  overlay.classList.remove("show");
});


// nav

 const burger = document.getElementById("burger");
      const navLinks = document.querySelector(".nav-links");

      burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
      window.addEventListener("scroll", function () {
        var header = document.querySelector(".header");

        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });