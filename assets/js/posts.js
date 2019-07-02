$(function() {
  $.ajax({
    type: "get",
    url: "/getpostList",
    data: {
      pagenum: 1,
      pagesize: 3
    },
    dataType: "json",
    success: function(res) {
      console.log(res.data);

      var html = template("postListTemp", res);
      console.log(html);
      $("tbody").html(html);
    }
  });
});
