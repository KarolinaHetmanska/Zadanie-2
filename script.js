$(function () {

  $('#add-file').change(function () {
    var $files = $('input:file')[0].files

    for (var i = 0; i < $files.length; i += 1) {
      function readAndPreview(file) {
        var reader = new FileReader()

        reader.onload = function () {
          var image = new Image()
          image.src = this.result
          $('.preview-file').append('<div class="single-file-preview"><div class="image-container"><img src="' + image.src +
            '"/></div><label for="add-file" class="change-file">ZMIEŃ ZDJĘCIE</label><span class="change-remove-border"' +
            '></span><span class="remove-file">USUŃ ZDJĘCIE</span></div>')
          $('[data-label=exchange]').remove()
        }
        reader.readAsDataURL(file)
      }

      readAndPreview($files[i])
    }
  })

  $(document).on('click', '.remove-file', function () {
    $(this).parent().remove()
  })
  $(document).on('click', '.change-file', function () {
    $(this).parent().attr('data-label', 'exchange')
  })
})
