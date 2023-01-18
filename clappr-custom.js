$(document).ready(function () {
  $(".clappr-ws__menu-link").on("click", function () {
    $(".clappr-ws__menu-list").attr("style", ""),
      setTimeout(function () {
        $(".clappr-ws__side-menu").attr("style", ""),
          $(".clappr-ws__menu").attr("style", "width: 0vw;"),
          setTimeout(function () {
            $(".clappr-ws__open-menu").addClass("none");
          }, 500);
      }, 100);
  });
});
