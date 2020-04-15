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
  });

  $("#submit").on("click", function (e) {
    const iin = $("input[name=iin]").val();
    const fullname = $("input[name=fullname]").val();
    const phone = $("input[name=phone]").val().replace(/ /g, "");
    const data = {
      'iin': iin,
      'fullName': fullname,
      'phone': phone,
    };
    $.ajax({
      type: "POST",
      url: "https://sms.bi.group/testpromo/api/client/register",
      data: data,
      dataType: "JSON",
      success: function () {
        $(".content-form").addClass("none-display");
        $(".content-form").removeClass("show");
        $(".finish").removeClass("none-display");
        $(".finish").addClass("show");
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
  });

  $("#share").jsSocials({
    showLabel: false,
    showCount: false,
    shares: ["whatsapp", "telegram", "messenger"],
  });

  $(function () {
    $("#phone").mask("8 999 999 99 99");
  });
});
