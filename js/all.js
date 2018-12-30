$(document).ready(function() {

/*modal-10關閉清除iframe內連結*/
$('.close-modal-10').on('click', function(){
	$('iframe').attr('src','');
  });
/*點擊demo10後讓彈出視窗中的iframe得到一個連結*/
$('#demo10').on('click', function(){
	var videosrc = "https://www.youtube.com/embed/biRxr8QknDM?rel=0&amp;showinfo=0&autoplay=1"
	$('iframe').attr('src', videosrc);
  });
 
/*瀑布流版面*/
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth:10,/*欄位最小公因數*/
  gutter:10/*間隔距離*/
});


/*讀取完全部檔案後隱藏讀取頁*/		
$(window).load(function(){
        $('#loading').fadeTo(1000,0);/*fadto用1000單位時間把透明度變成0*/
		$('#loading').hide(1);/*hide用1單位時間隱藏指定元素*/
        });
		




/*modal點了彈出視窗*/
$("#demo01").animatedModal();
$("#demo02").animatedModal({modalTarget:'modal-02'});
$("#demo03").animatedModal({modalTarget:'modal-03'});
$("#demo04").animatedModal({modalTarget:'modal-04'});
$("#demo05").animatedModal({modalTarget:'modal-05'});
$("#demo06").animatedModal({modalTarget:'modal-06'});
$("#demo07").animatedModal({modalTarget:'modal-07'});
$("#demo08").animatedModal({modalTarget:'modal-08'});
$("#demo09").animatedModal({modalTarget:'modal-09'});
$("#demo10").animatedModal({modalTarget:'modal-10'});
$("#demo11").animatedModal({modalTarget:'modal-11'});
$("#demo12").animatedModal({modalTarget:'modal-12'});


// 點了移到頁面範圍Cache selectors --START
var lastId,
    topMenu = $(".indexmenu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
// 點了移到頁面範圍Cache selectors --END

//scroll時的smoove動畫

$('.aboutleft').smoove({moveY:'50%'});



});