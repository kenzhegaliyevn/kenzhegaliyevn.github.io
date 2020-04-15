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
      iin: iin,
      fullName: fullname,
      phone: phone,
    };
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "https://sms.bi.group/testpromo/api/client/register",
      data: JSON.stringify(data),
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
    text: "Дорогой друг! Не упусти шанс воспользоваться выгодным предложением от компании BI Group! Успей купить недвижимость по промокоду со скидкой 900 000 тенге! Выбери свой жилой комплекс на сайте bi.group или по ссылке https://friends.bi.group/catalog.pdf А также узнай о последних событиях в Instagram или fb @bi.group Заявку на онлайн-консультацию можно оставить на сайте компании или по номеру 360 (звонок бесплатный)",
    shares: ["whatsapp", "telegram", "messenger"],
  });

  $(function () {
    $("#phone").mask("8 999 999 99 99");
  });
});
