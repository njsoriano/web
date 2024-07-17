var menuid = '#headnav';
var scrollspeed = 1200;
var menu_active_class = 'active'; 
document.querySelector('.navshow').addEventListener('click', function() {
    document.getElementById('sitenav').classList.add('show');
  });
  
  document.querySelector('.navhide').addEventListener('click', function() {
    document.getElementById('sitenav').classList.remove('show');
  });
  