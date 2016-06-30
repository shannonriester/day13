var $li = $('li');

var $ol1 = $('#ol1');
var $li1 = $('#li1');

var $ol2 = $('#ol2');
var $li2 = $('#li2');

var $ol3 = $('#ol3');
var $li3 = $('#li3');

var $ol4 = $('#ol4');
var $li4 = $('#li4');

var $directory1 = $('<li><span>01</span> Dropbox <p class="rightNum">42</p></li><li><span>02</span> Skydrive<p class="rightNum">87</p></li><li><span>03</span> FTP Server <p class="rightNum">366</p></li><li><span>04</span> Dropbox <p class="rightNum">1</p></li><li><span>05</span> Push<p class="rightNum">10</p></li>');
var $directory2 = $('<li><span>01</span> Inbox <p class="rightNum">0</p></li><li><span>02</span> Outbox <p class="rightNum">1158</p></li><li><span>03</span> Sent <p class="rightNum">222</p></li><li><span>04</span> Trash <p class="rightNum">empty</p></li><li><span>05</span> Folders <p class="rightNum">58</p></li>');
var $directory3 = $('<li><span>01</span> Connect <p class="rightNum">12</p></li><li><span>01</span> Profile <p class="rightNum">19</p></li><li><span>02</span> Options <p class="rightNum">27</p></li><li><span>03</span> Images <p class="rightNum">17</p></li><li><span>04</span> Push <p class="rightNum">10</p></li>');

//create var for ul1.append($directory1) so that you can add transitions


  //when 'My Files' is clicked, make the li sub directory drop down...
    $li1.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        // $(evt.target).toggleClass('hidden');
        $li1.addClass('active');
        $ol1.append($directory1);

        $directory2.remove();
        $directory3.remove();

        $li2.removeClass('active');
        $li3.removeClass('active');
        $li4.removeClass('active');

    });
    $li2.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        $li2.addClass('active');
        $ol2.append($directory2);

        $directory1.remove();
        $directory3.remove();

        $li1.removeClass('active');
        $li3.removeClass('active');
        $li4.removeClass('active');
    });
    $li3.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        $li3.addClass('active');
        $ol3.append($directory3);

        $directory1.remove();
        $directory2.remove();

        $li1.removeClass('active');
        $li2.removeClass('active');
        $li4.removeClass('active');
    });
    $li4.on('click', function(evt){
      //this makes the <li>s prepend to only the first ul
        $li4.addClass('active');
        $ol4.append();

        $directory1.remove();
        $directory2.remove();
        $directory3.remove();

        $li1.removeClass('active');
        $li2.removeClass('active');
        $li3.removeClass('active');

    });
