function submitForm() {
  alert("Thank you! We'll get back to you soon.");
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("text").value = "";
}

// Scroll-triggered fade-in animation
$(window).on("scroll", function () {
  $(".fade-in").each(function () {
    var top_of_element = $(this).offset().top;
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    if (bottom_of_screen > top_of_element) {
      $(this).addClass("visible");
    }
  });
});

// 1. Smooth Scroll for Nav Links
$(".nav-list a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const target = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 70, // offset for sticky navbar
      },
      600
    );
  }
});

// 2. Show "Back to Top" Button
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $("#backToTop").fadeIn();
  } else {
    $("#backToTop").fadeOut();
  }
});

$("#backToTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
});

// 3. Highlight Active Section in Navbar
$(window).on("scroll", function () {
  const scrollPos = $(document).scrollTop();
  $(".nav-list a").each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr("href"));
    if (
      refElement.position().top - 80 <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".nav-list a").removeClass("active");
      currLink.addClass("active");
    }
  });
});

// 4. Contact Form Validation
$(".btndark").first().on("click", function () {
  const name = $("#name").val().trim();
  const email = $("#email").val().trim();
  const text = $("#text").val().trim();
  if (!name || !email || !text) {
    alert("Please fill in all required fields.");
  } else {
    alert("Thank you! We'll get back to you soon.");
  }
});

// 5. Animated Header Background on Scroll
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".navbar").css("background-color", "#0d47a1e6");
  } else {
    $(".navbar").css("background-color", "#0d47a1");
  }
});
