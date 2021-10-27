
    var timeBlock = $('.time-block');
    var time = moment().format("H");
    console.log(time)
    function hourTracker(){
      timeBlock.each(function () {
        var blockHour = parseInt($(this).attr('id'));
        if (blockHour < time) {
          console.log('less')
          $(this).addClass('past');
          $(this).removeClass('future');
          $(this).removeClass('present');
        } else if (blockHour == time) {
          console.log('now')
          $(this).removeClass('past');
          $(this).addClass('present');
          $(this).removeClass('future');
        } else {
          console.log('future')
          $(this).removeClass('present');
          $(this).removeClass('past');
          $(this).addClass('future');
        }
      });
    }
    hourTracker()