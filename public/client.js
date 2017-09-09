$(document).ready(function() {
  $('#uploadForm').submit(function() {
    $("#status").empty().text('File is uploading...');
    $(this).ajaxSubmit({
      error: function(xhr) {
        status('Error: ' + xhr.status);
      },
      success: function(responce) {
        console.log(responce)
        $("#status").empty().text(responce);
      }
    });
    return false;
  });
});