document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
   // initialDate: '2023-01-07',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek,multiMonthYear, multiMonthYear, timeGridFourDay'
    },

    eventColor: '#b27092',
    nowIndicator:true,
    eventInteractive: true,           
    events: [
      {
        title: 'All Day Event',
        start: '2023-01-01'
      },
      {
        title: 'Long Event',
        start: '2023-01-07',
        end: '2023-01-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2023-01-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2023-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2023-01-11',
        end: '2023-01-13'
      },
      {
        title: 'Meeting',
        start: '2023-01-12T10:30:00',
        end: '2023-01-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2023-01-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2023-01-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2023-01-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2023-01-28'
      },
     {title: 'foogly boogly', 
      start: new Date('Feb 21 2023 11:00:00 PM')
     } ,
      {title: "ED 4: Physical Exam",
      start: new Date("Fri Feb 24 11:30:00 GMT-05:00 2023"),
      end: new Date('Fri Feb 24 14:30:00 GMT-05:00 2023'),
      color: '#A3C0D9'},
      { title: 'oogly gerboogly',
       start: '2023-02-21T23:49:57'
        
      },
      {
        title : 'ED 2: Diseases',
        start : '2023-02-23T08:00:00',
        end : '2023-02-23T11:00:00',
      color:'#D9DBF1',
      textColor:'#5e548e'},
      {
title : 'ED 3: HPI & ROS',
start : '2023-02-23T11:30:00',
end : '2023-02-23T14:30:00',
        color: '#709775'

},
      {
title : 'ED 5: Labs Imaging',
start : '2023-02-24T08:00:00',
end : '2023-02-24T11:00:00',
        color: '#7a9cc6'

},
      {
title : 'Final Exam',
start : '2023-02-21T15:00:00',
end : '2023-02-21T16:30:00',
color: '#87BBA2'

},
      	{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-02-21T11:30:00',
end : '2023-02-21T13:30:00',
color: '#C2D8B9',
          textColor:'#4F6955'

},
      {
title : 'ED 2: Diseases',
start : '2023-02-21T08:00:00',
end : '2023-02-21T11:00:00',
        color:'#D9DBF1',
        textColor: '#5e548e'

},
      {
title : 'ED 3: HPI & ROS',
start : '2023-02-20T15:00:00',
end : '2023-02-20T18:00:00',
        color: '#709775',
        textColor: ''

},
      	{
title : 'ED 5: Labs Imaging',
start : '2023-02-20T11:30:00',
end : '2023-02-20T14:30:00',
          color: '#7a9cc6'

},
      {
        title: 'Biweekly Meeting',
        start : '2023-02-23T16:00:00',
        end : '2023-02-23T16:30:00'
      }
      
      
      ]

  });

  calendar.render();
});