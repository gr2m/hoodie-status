// app status at apiRoot + "index.json"
// module status at apiRoot + moduleName + ".json"
var apiRoot = 'status_mocks/';


$( function() {
  $.getJSON(apiRoot + "index.json", handleIndexResponse);
});


function handleIndexResponse (response) {
  $('#app-status pre').text( JSON.stringify(response, '', '  '));

  for (var i = 0, moduleName; i < response.modules.length; i++) {
    addModuleTab( response.modules[i] )
  };
}

function addModuleTab (moduleName) {
  var tabHtml = '<li><a href="#module-'+moduleName+'-status" data-toggle="tab">'+moduleName+'</a></li>'
  var contentHtml = '<div class="tab-pane" id="module-'+moduleName+'-status"><pre>{}</pre></div>'

  $('.nav-tabs').append(tabHtml)
  $('.tab-content').append(contentHtml)

  updateModuleStatus( moduleName )
}

function updateModuleStatus ( moduleName ) {
  $.getJSON(apiRoot + moduleName + ".json", function( response ) {
    $('#module-'+moduleName+'-status pre').text( JSON.stringify(response, '', '  '));
  });
}
