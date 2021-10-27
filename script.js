
    var timeBlock = $('.time-block');
    var time = moment().format("H");
    console.log(time)
    function hourTracker(){
      timeBlock.each(function () {
        var blockHour = parseInt($(this).attr('time'));
        if (blockHour < time) {
          $(this).addClass('past');
        } else if (blockHour == time) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      });
    }
    hourTracker()
    $('.saveBtn').on('click', function (){
      var blockHour = $(this).parent().attr('time')
      var todo = $(this).siblings('.description').val()
      localStorage.setItem(blockHour, todo)
    })