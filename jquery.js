$(document).ready(function() {

    $(".advent_door").click(function (){
        $(this).addClass("open");
        var clicked = $(this);
        
        setTimeout(showFunc, 800);
        function showFunc() {
            clicked.next().css("z-index","1000");
        };
        setTimeout(closeFunc, 3000);
        function closeFunc() {
            clicked.addClass("close");
        };
        setTimeout(removeFunc, 4100);
        function removeFunc() {
            clicked.removeClass("open").removeClass("close");
        };
    });

    $(".advent_c").dblclick(function (){
        $(this).fadeOut(1000);
    });

    $(".advent_c").each(function () {
        dragElement(this);
    });

    function dragElement(elmnt) {
        
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        elmnt.addEventListener("mousedown", dragMouseDown);
        elmnt.addEventListener("touchstart", dragTouchStart);

        function dragMouseDown(e) {
          // e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }

        function dragTouchStart(e) {
          // e.preventDefault();
          var touch = e.touches[0];
          pos3 = touch.clientX;
          pos4 = touch.clientY;
          document.ontouchend = closeDragElement;
          document.ontouchmove = elementDrag;
        }

        function elementDrag(e) {
          // e.preventDefault();
          if (e.type === "mousemove") {
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
          } else if (e.type === "touchmove") {
            var touch = e.touches[0];
            pos1 = pos3 - touch.clientX;
            pos2 = pos4 - touch.clientY;
            pos3 = touch.clientX;
            pos4 = touch.clientY;
          }

          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
          document.ontouchend = null;
          document.ontouchmove = null;
        }
        


    }

    $("#toggleRed").click(function(e){
        $("body").toggleClass("red");
        e.preventDefault();
    });   


});


