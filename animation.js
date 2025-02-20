document.addEventListener("DOMContentLoaded", function () {
    const contacto = document.querySelector(".contacto");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contacto.classList.add("visible");
            contacto.classList.remove("hidden");
          } else {
            contacto.classList.add("hidden");
            contacto.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    observer.observe(contacto);
  });
  