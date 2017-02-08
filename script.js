
$(function(){
  var $input = $('input:file')
  $input.change(function (e) {
  // var $inputValue = $input.val();
    var fileName = e.target.files[0].name;
    $('.display-files').append('<img src="'+fileName+'"/>')
   // alert('The file "' + fileName +  '" has been selected.');
   //console.log("input:file before", $inputValue);
  //  ($inputValue.substring(3,11)=== "fakepath")? $inputValue = $inputValue.substring((12)) : $inputValue
  //  console.log("input:file after substring", $inputValue);


 // $('.display-files').html($inputValue);
  })
})