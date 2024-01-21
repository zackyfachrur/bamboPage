### Just a simple bamboo page

#### Iam currently learning programming 😉


#### Noted Navbar Logic
```js
let selectScrollto = document.querySelectorAll(".scrollto");
  selectScrollto.forEach((el) =>
    el.addEventListener("click", function (event) {
      if (document.querySelector(this.hash)) {
        event.preventDefault();

        let mobileNavActive = document.querySelector(".mobile-nav-active");
        if (mobileNavActive) {
          mobileNavActive.classList.remove("mobile-nav-active");

          let navbarToggle = document.querySelector(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    })
  );
```
