$(function () {

  $('#add-file').change(function () {
    var $files = $('input:file')[0].files

    for (var i = 0; i < $files.length; i += 1) {
      function readAndPreview(file) {
        var reader = new FileReader()

        reader.onload = function () {
          var image = new Image()
          image.src = this.result
          $('.preview').append('<div class="single-image-preview"><img src="' + image.src + '"/><label for="add-file" class="change-image">ZMIEŃ ZDJĘCIE</label><span class="change-remove-border"></span><span class="remove-image">USUŃ ZDJĘCIE</span></div>')
          $('[data-label=exchange]').remove()
        }
        reader.readAsDataURL(file)
      }

      readAndPreview($files[i])
    }
  })

  $(document).on('click', '.remove-image', function () {
    $(this).parent().remove()
  })
  $(document).on('click', '.change-image', function () {
    $(this).parent().attr('data-label', 'exchange')
  })
})
