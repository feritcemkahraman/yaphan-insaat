/**
 * demo.mobile.js
 * Mobil uyumlu diagonal slideshow
 */
{
  // Mobil cihaz kontrolü
  const isMobile = () => window.innerWidth <= 848; // 52.99em

  // Window sizes.
  let winsize;
  const calcWinsize = () =>
    (winsize = { width: window.innerWidth, height: window.innerHeight });
  calcWinsize();
  window.addEventListener("resize", calcWinsize);

  // Mouse pozisyonu alma fonksiyonu
  const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    return { x: posx, y: posy };
  };

  let slideshow = null;

  class Slide {
    constructor(el) {
      this.DOM = { el: el };
      this.DOM.imgWrap = this.DOM.el.querySelector(".slide__img-wrap");
      this.DOM.img = this.DOM.imgWrap.querySelector(".slide__img");
      this.DOM.titleWrap = this.DOM.el.querySelector(".slide__title-wrap");
      this.DOM.title = this.DOM.titleWrap.querySelector(".slide__title");
      this.DOM.subtitle = this.DOM.titleWrap.querySelector(".slide__subtitle");
    }
  }

  window.Slideshow = class {
    constructor(el) {
      console.log("Slideshow constructor called with element:", el);
      this.DOM = { el: el };
      this.config = {
        slideshow: {
          delay: 3000,
          pagination: {
            duration: 3,
          },
        },
      };
      this.DOM.slides = Array.from(this.DOM.el.querySelectorAll(".slide"));
      this.slidesTotal = this.DOM.slides.length;
      this.current = 0;
      this.isAnimating = false;

      // Tüm slide'ları hazırla
      this.DOM.slides.forEach((slide, pos) => {
        slide.style.visibility = "hidden";
        slide.style.opacity = "0";

        if (pos === this.current) {
          slide.classList.add("slide--current");
          slide.style.visibility = "visible";
          slide.style.opacity = "1";
          slide.style.transform = "translateX(0)";
        } else if (pos < this.current) {
          slide.classList.add("slide--prev");
          slide.style.transform = "translateX(-100%)";
        } else {
          slide.classList.add("slide--next");
          slide.style.transform = "translateX(100%)";
        }
      });

      this.createNavigation();
      this.initTouchEvents();
    }

    createNavigation() {
      // Mevcut okları temizle
      const existingNavs = document.querySelectorAll(".nav");
      existingNavs.forEach((nav) => nav.remove());

      // Prev ok
      this.DOM.nav = {
        prev: document.createElement("div"),
        next: document.createElement("div"),
      };

      this.DOM.nav.prev.className = "nav nav--prev";
      this.DOM.nav.prev.innerHTML =
        '<svg class="icon icon-navarrow"><use xlink:href="#icon-navarrow"></use></svg>';

      // Next ok
      this.DOM.nav.next.className = "nav nav--next";
      this.DOM.nav.next.innerHTML =
        '<svg class="icon icon-navarrow"><use xlink:href="#icon-navarrow"></use></svg>';

      // Okları sayfaya ekle
      document.body.appendChild(this.DOM.nav.prev);
      document.body.appendChild(this.DOM.nav.next);

      // Click olaylarını ekle
      this.DOM.nav.prev.addEventListener("click", () => this.navigate("prev"));
      this.DOM.nav.next.addEventListener("click", () => this.navigate("next"));
    }

    initTouchEvents() {
      let touchStartX = 0;
      let touchEndX = 0;
      let touchStartY = 0;
      let touchEndY = 0;
      let isTapping = false;

      const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isTapping = true;
      };

      const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;

        // Eğer belirli bir mesafeden fazla hareket varsa, tıklama olarak sayma
        if (
          Math.abs(touchStartX - touchEndX) > 10 ||
          Math.abs(touchStartY - touchEndY) > 10
        ) {
          isTapping = false;
        }
      };

      const handleTouchEnd = (e) => {
        const diffX = touchStartX - touchEndX;
        const currentSlide = this.DOM.slides[this.current];

        if (isTapping) {
          // Eğer sadece dokunma varsa ve current slide ise link kontrolü yap
          const slideLink = currentSlide.getAttribute("data-link");
          if (slideLink) {
            window.location.href = slideLink;
          }
        } else if (Math.abs(diffX) > 50) {
          // Kaydırma hareketi - en az 50px kaydırma olmalı
          if (diffX > 0) {
            this.navigate("next");
          } else {
            this.navigate("prev");
          }
        }

        // Reset values
        touchStartX = 0;
        touchEndX = 0;
        touchStartY = 0;
        touchEndY = 0;
        isTapping = false;
      };

      this.DOM.el.addEventListener("touchstart", handleTouchStart);
      this.DOM.el.addEventListener("touchmove", handleTouchMove);
      this.DOM.el.addEventListener("touchend", handleTouchEnd);
    }

    navigate(direction) {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const previousSlide = this.DOM.slides[this.current];

      // Yeni slide'a geç
      if (direction === "next") {
        this.current =
          this.current < this.slidesTotal - 1 ? this.current + 1 : 0;
      } else {
        this.current =
          this.current > 0 ? this.current - 1 : this.slidesTotal - 1;
      }

      const currentSlide = this.DOM.slides[this.current];

      // Önceki slide'ı gizle
      previousSlide.classList.remove("slide--current");
      previousSlide.classList.add(
        direction === "next" ? "slide--prev" : "slide--next"
      );
      previousSlide.style.visibility = "hidden";
      previousSlide.style.opacity = "0";
      previousSlide.style.transform = `translateX(${
        direction === "next" ? "-100%" : "100%"
      })`;

      // Yeni slide'ı göster
      currentSlide.classList.remove("slide--prev", "slide--next");
      currentSlide.classList.add("slide--current");
      currentSlide.style.visibility = "visible";
      currentSlide.style.opacity = "1";
      currentSlide.style.transform = "translateX(0)";

      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    }
  };

  class Cursor {
    constructor(el) {
      this.DOM = { el: el };
      this.DOM.el.style.opacity = 0;

      this.bounds = this.DOM.el.getBoundingClientRect();

      this.renderedStyles = {
        tx: { previous: 0, current: 0, amt: 0.2 },
        ty: { previous: 0, current: 0, amt: 0.2 },
        scale: { previous: 1, current: 1, amt: 0.2 },
      };

      this.onMouseMoveEv = () => {
        this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
          mouse.x - this.bounds.width / 2;
        this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
          mouse.y - this.bounds.height / 2;
        gsap.to(this.DOM.el, {
          duration: 0.9,
          ease: "Power3.easeOut",
          opacity: 1,
        });
        requestAnimationFrame(() => this.render());
        window.removeEventListener("mousemove", this.onMouseMoveEv);
      };
      window.addEventListener("mousemove", this.onMouseMoveEv);
    }
    render() {
      this.renderedStyles["tx"].current = mouse.x - this.bounds.width / 2;
      this.renderedStyles["ty"].current = mouse.y - this.bounds.height / 2;

      for (const key in this.renderedStyles) {
        this.renderedStyles[key].previous = lerp(
          this.renderedStyles[key].previous,
          this.renderedStyles[key].current,
          this.renderedStyles[key].amt
        );
      }

      this.DOM.el.style.transform = `translateX(${this.renderedStyles["tx"].previous}px) translateY(${this.renderedStyles["ty"].previous}px) scale(${this.renderedStyles["scale"].previous})`;

      requestAnimationFrame(() => this.render());
    }
  }

  // Mobil cihazlarda cursor'ı devre dışı bırak
  if (!isMobile()) {
    const cursor = new Cursor(document.querySelector(".cursor"));
  }
}
