var $li = $('li');

var $ul1 = $('#ul1');
var $li1 = $('#li1');

var $ul2 = $('#ul2');
var $li2 = $('#li2');

var $ul3 = $('#ul3');
var $li3 = $('#li3');

var $ul4 = $('#ul4');
var $li4 = $('#li4');

var $directory1 = $('<li>Dropbox</li><li>Skydrive</li><li>FTP Server</li><li>Dropbox</li><li>Push</li>');
var $directory2 = $('<li>Inbox</li><li>Outbox</li><li>Sent</li><li>Trash</li><li>Folders</li>');
var $directory3 = $('<li>Connect</li><li>Profile</li><li>Options</li><li>Images</li><li>Push</li>');


  //when 'My Files' is clicked, make the li sub directory drop down...
    $li1.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        // $(evt.target).toggleClass('hidden');
        $li1.toggleClass('active');
        $ul1.append($directory1);

        $directory2.remove();
        $directory3.remove();

        $li2.removeClass('active');
        $li3.removeClass('active');
        $li4.removeClass('active');

    });
    $li2.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        $li2.toggleClass('active');
        $ul2.append($directory2);

        $directory1.remove();
        $directory3.remove();

        $li1.removeClass('active');
        $li3.removeClass('active');
        $li4.removeClass('active');
    });
    $li3.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        $li3.toggleClass('active');
        $ul3.append($directory3);

        $directory1.remove();
        $directory2.remove();

        $li1.removeClass('active');
        $li2.removeClass('active');
        $li4.removeClass('active');
    });
    $li4.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        $li4.toggleClass('active');
        $ul4.append($directory4);

        $directory1.remove();
        $directory2.remove();
        $directory3.remove();

        $li1.removeClass('active');
        $li2.removeClass('active');
        $li3.removeClass('active');

    });
