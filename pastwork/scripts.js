// reload when window is switched between landscape and portrait
const iWidth = window.innerWidth; // get the window size
const iHeight = window.innerHeight;
window.addEventListener('resize', // on resize
  function()
  {
    var innerWidth = window.innerWidth; // get the new window size
    var innerHeight = window.innerHeight;
    var outerHeight = window.outerHeight;
    var outerWidth = window.outerWidth;
    if (iWidth > iHeight && innerWidth < innerHeight && outerWidth > innerWidth) // if it was landscape and is now portrait (plus check if it is going full screen)
    {window.location.reload();}
    if (iWidth < iHeight && innerWidth > innerHeight && outerHeight > innerHeight) // if it was portrait and is now landscape (plus check if it is going full screen)
    {window.location.reload();}
  });

// adjust iframe size to show full pdf
function full_pdf(pdf, factor)
{
    var windowWidth = window.outerWidth;
    var windowHeight = window.outerHeight;
      if (windowWidth > windowHeight)
      {document.write('<iframe class="cv" src="'+pdf+'#pagemode=none&view=FitH" style="height:'+0.64*factor*windowWidth+'px;"></iframe>');}
      else
      {document.write('<iframe class="cv" src="'+pdf+'#pagemode=none&view=FitH" style="height:'+1.02*factor*windowWidth+'px;"></iframe>');}
}

/* phone view menu list functions */
function portraitMenu()
{
  document.getElementById("dropnav").classList.toggle("show");
  document.getElementById("arrow").classList.toggle("rotate");
}
window.onclick = function(e)
{
  if (!e.target.matches('.dropbtn'))
  {
  var arrow = document.getElementById("arrow");
  var dropnav = document.getElementById("dropnav");
    if (dropnav.classList.contains('show'))
    {dropnav.classList.remove('show'); arrow.classList.remove('rotate');}
  }
}

// navigation menu for past research
function navbar(home, cur, past, pubs, cv, git, currentPage)
{
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
      if (windowWidth > windowHeight)
      {
        document.write('<h'+home+'> <a href="../index.html">Home </a></h'+home+'>');
        document.write('<h'+cur+'> <a href="../current.html">Current Work </a></h'+cur+'>');
        document.write('<h'+past+'> <a href="../past.html">Past Work </a></h'+past+'>');
        document.write('<h'+pubs+'> <a href="../publications.html">Publications </a></h'+pubs+'>');
        document.write('<h'+cv+'> <a href="../cv.html">CV </a></h'+cv+'>');
        document.write('<h'+git+'> <a target="_blank" href="https://github.com/mafern?tab=repositories">GitHub </a></h'+git+'>  ');
      }
      else
      {
        document.write('<div class="dropdown">');
        document.write('<button class="dropbtn" onclick="portraitMenu()" id="arrow">&#10132;</button>');
        document.write('<font class="tab" style="color:black">'+currentPage+'</font>');
        document.write('<div class="dropdown-content" id="dropnav">');
        document.write('<h'+home+'> <a href="../index.html">Home </a></h'+home+'>');
        document.write('<h'+cur+'> <a href="../current.html">Current Work </a></h'+cur+'>');
        document.write('<h'+past+'> <a href="../past.html">Past Work </a></h'+past+'>');
        document.write('<h'+pubs+'> <a href="../publications.html">Publications </a></h'+pubs+'>');
        document.write('<h'+cv+'> <a target="_blank" href="../media/cv.pdf">CV </a></h'+cv+'>');
        document.write('<h'+git+'> <a target="_blank" href="https://github.com/mafern?tab=repositories">GitHub </a></h'+git+'>  ');
        document.write('</div>');
        document.write('</div>');
      }
}

// script for full screen sections and figures (only in landscape)
function goFullScreen(temp){
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      if (windowWidth > windowHeight)
      {
      var elem = document.getElementById(temp);

      if(elem.requestFullscreen){elem.requestFullscreen();}
      else if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();}
      else if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();}
      else if(elem.msRequestFullscreen){elem.msRequestFullscreen();}
      }
    }
