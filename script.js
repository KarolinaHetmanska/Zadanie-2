$(function () {
  $('#add-file').change(function () {
    var $files = $('input:file')[0].files
    //  console.log("input", $files)

    function readAndPreview(file) {
      var reader = new FileReader()
      //  console.log('reader', reader)

      reader.onload = function () {
        var image = new Image()
        image.src = this.result
        $('.preview').append('<div class="single-image-preview"><img src="' + image.src + '"/><div class="change-image">Zmień zdjęcie</div><div class="remove-image">Usuń zdjęcie</div></div>')
        //   console.log("image", image)
        //   console.log("this", this)
      }
      reader.readAsDataURL(file)
    }

    if ($files) {
      [].forEach.call($files, readAndPreview)
    }
  })
  $(document).on('click', '.remove-image', function () {
    $(this).parent().remove()
    console.log(this)
  })

})