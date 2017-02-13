$(function () {

  $('#add-file').change(function () {
    var $files = $('input:file')[0].files

    //  console.log("input", $files)
    for (var i = 0; i < $files.length; i += 1) {
      function readAndPreview(file) {
        var reader = new FileReader()
        //  console.log('reader', reader)

        reader.onload = function () {
          var image = new Image()
          image.src = this.result
          $('.preview').append('<div class="single-image-preview"><img src="' + image.src + '"/><label for="add-file" class="change-image">Zmień zdjęcie</label><div class="remove-image">Usuń zdjęcie</div></div>')
          $('[data-label=exchange]').remove()

          //  $('[data-id=exchange]').remove()
          //   console.log("image", image)
          //   console.log("this", this)
        }
        reader.readAsDataURL(file)
      }
      readAndPreview($files[i])
    }
  })


  $(document).on('click', '.remove-image', function () {
    $(this).parent().remove()
    //console.log(this)
  })
  $(document).on('click', '.change-image', function () {
    $(this).parent().attr('data-label', 'exchange')
  })
  // $(document).on('change', '#add-file', function () {
  //    console.log('co jest w add-file', ($('#add-file').files))
  //   $('[data-label=exchange]').remove()
  // })
})
