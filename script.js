
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
      addTodos()
    })
    function addTodos() {
      $('#t9 .description').val(localStorage.getItem('9'));
      $('#t10 .description').val(localStorage.getItem('10'));
      $('#t11 .description').val(localStorage.getItem('11'));
      $('#t12 .description').val(localStorage.getItem('12'));
      $('#t13 .description').val(localStorage.getItem('13'));
      $('#t14 .description').val(localStorage.getItem('14'));
      $('#t15 .description').val(localStorage.getItem('15'));
      $('#t16 .description').val(localStorage.getItem('16'));
      $('#t17 .description').val(localStorage.getItem('17'));

    }
    addTodos()
