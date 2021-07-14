$.ajax({
  url: 'https://spreadsheets.google.com/feeds/list/1oji6Jo941DulXxG7DsovrnlPwmzDVmoZfmP7vE4gl6M/1/public/values?alt=json',
  dataType: 'json',
  success: function(data){
    console.log(data);
    $.each(data.feed.entry, function(key,value) {
      var title = value.gsx$title.$t
      var description = value.gsx$description.$t
      var price = value.gsx$price.$t
      var src_image = value.gsx$picurl.$t
      console.log(title+' | '+description+' | '+price);
      $('#coffee-menu1').append('<div class="col-md-3"><img src="'+ src_image + '" alt="" class="img-fluid rounded-circle"><h3>'+ title +'</h3><p>'+ description +'</p><p>'+ price +'</p></div>');
    })
  }
});

$.ajax({
  url: 'https://spreadsheets.google.com/feeds/list/1oji6Jo941DulXxG7DsovrnlPwmzDVmoZfmP7vE4gl6M/2/public/values?alt=json',
  dataType: 'json',
  success: function(data){
    console.log(data);
    $.each(data.feed.entry, function(key,value) {
      var title = value.gsx$title.$t
      var description = value.gsx$description.$t
      var price = value.gsx$price.$t
      var src_image = value.gsx$picurl.$t
      console.log(title+' | '+description+' | '+price);
      $('#coffee-menu2').append('<div class="col-md-3"><img src="'+ src_image + '" alt="" class="img-fluid rounded-circle"><h3>'+ title +'</h3><p>'+ description +'</p><p>'+ price +'</p></div>');
    })
  }
});
