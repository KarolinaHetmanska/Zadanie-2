
$(function(){
$('#input-file').change(function () {
  var $files = $('input:file')[0].files
  console.log("input", $files)

  function readAndPreview(file) {
    var reader = new FileReader()
    console.log('reader', reader)
    reader.addEventListener('load',function () {

      var image = new Image()
      image.title=file.name
      image.src = this.result
      $('.preview-files').append(image)
    }, false)

    reader.readAsDataURL(file)
  }
  if ($files) {
    [].forEach.call($files, readAndPreview)
  }

})

})