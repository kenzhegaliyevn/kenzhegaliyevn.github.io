$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(".modal-toggle").on("click", function (e) {
    e.preventDefault();
    $(".modal").toggleClass("is-visible");
    $(".content-form").removeClass("none-display");
    $(".content-form").addClass("show");
    $(".finish").addClass("none-display");
    $(".finish").removeClass("show");
    $(".error").addClass("none-display");
    $(".error").removeClass("show");
    $("input[name=iin]").val("");
    $("input[name=fullname]").val("");
    $("input[name=phone]").val("");
    $("body").toggleClass("hidden");

    // if (
    //   document.body.style.overflowY === "" ||
    //   document.body.style.overflowY === "scroll"
    // ) {
    //   document.body.style.overflowY = "hidden";
    // } else {
    //   document.body.style.overflowY = "scroll";
    // }
  });

  $("#submit").on("click", function (e) {
    const iin = $("input[name=iin]").val();
    const fullname = $("input[name=fullname]").val();
    const phone = $("input[name=phone]").val().replace(/ /g, "");
    const data = {
      iin: iin,
      fullName: fullname,
      phone: phone,
    };
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "https://sms.bi.group/testpromo/api/client/register",
      data: JSON.stringify(data),
      success: function (result) {
        if (result.success == false) {
          $(".error h2").text(
            "Клиент с таким ИИН или номером телефона уже участвует в программе BI Friends!"
          );
          $(".content-form").addClass("none-display");
          $(".content-form").removeClass("show");
          $(".error").removeClass("none-display");
          $(".error").addClass("show");
        } else {
          $(".content-form").addClass("none-display");
          $(".content-form").removeClass("show");
          $(".finish").removeClass("none-display");
          $(".finish").addClass("show");
        }
      },
    });
    e.preventDefault();
  });

  $(".btn-finish").on("click", function (e) {
    e.preventDefault();
    $(".modal").toggleClass("is-visible");
    $(".content-form").removeClass("none-display");
    $(".content-form").addClass("show");
    $(".finish").addClass("none-display");
    $(".finish").removeClass("show");
    $(".error").addClass("none-display");
    $(".error").removeClass("show");
    $("body").toggleClass("hidden");
  });

  // $(".social-likes").socialLikes({
  //   url: "https://github.com/sapegin/social-likes/",
  //   title: "Beautiful “like” buttons with counters for popular social networks",
  //   counters: true,
  //   singleTitle: "Share it!",
  // });

  $("#share").jsSocials({
    showLabel: false,
    showCount: false,
    shares: [
      {
        share: "telegram",
        media: "https://friends.bi.group/test/image_promo.jpg",
        url: "https://friends.bi.group/test/image_promo.jpg",
      }
      // "whatsapp",
      // "telegram",
      // "messenger",
    ],
  });

  $(function () {
    $("#phone").mask("8 999 999 99 99");
  });

  $('input[name=iin][max]:not([max=""])').on("input", function (ev) {
    var $this = $(this);
    var maxlength = $this.attr("max").length;
    var value = $this.val();
    if (value && value.length >= maxlength) {
      $this.val(value.substr(0, maxlength));
    }
  });

  $("input[name=iin]").bind("keyup", function () {
    const iin = $("input[name=iin]").val().replace(/ /g, "");
    const fullname = $("input[name=fullname]").val().replace(/ /g, "");
    const phone = $("input[name=phone]")
      .val()
      .replace(/ /g, "")
      .replace(/_/g, "");

    if (iin.length === 12 && fullname.length !== 0 && phone.length === 11) {
      $("#submit").prop("disabled", false);
    } else {
      $("#submit").prop("disabled", true);
    }
  });

  $("input[name=fullname]").bind("keyup", function () {
    const iin = $("input[name=iin]").val().replace(/ /g, "");
    const fullname = $("input[name=fullname]").val().replace(/ /g, "");
    const phone = $("input[name=phone]")
      .val()
      .replace(/ /g, "")
      .replace(/_/g, "");

    if (iin.length === 12 && fullname.length !== 0 && phone.length === 11) {
      $("#submit").prop("disabled", false);
    } else {
      $("#submit").prop("disabled", true);
    }
  });

  $("input[name=phone]").bind("keyup", function () {
    const iin = $("input[name=iin]").val().replace(/ /g, "");
    const fullname = $("input[name=fullname]").val().replace(/ /g, "");
    const phone = $("input[name=phone]")
      .val()
      .replace(/ /g, "")
      .replace(/_/g, "");

    if (iin.length === 12 && fullname.length !== 0 && phone.length === 11) {
      $("#submit").prop("disabled", false);
    } else {
      $("#submit").prop("disabled", true);
    }
  });
});
