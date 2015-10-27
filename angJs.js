$(function() {
   var $p = $('p').first();
   var $input = $('input').first();

   function updateP() {
    console.log($input);
    $p.html($input.val());
   }

   $input.on('keydown', updateP);
});