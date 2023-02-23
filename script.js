document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    //aspectRatio: 1,
    // initialDate: '2023-01-07',
    customButtons: {
      dayToggle: {
        text: "day \u21bb",
        hint: "toggle next day view",
        click: function () {
          let views = ["timeGridDay", "timeGridTwoDay", "timeGridThreeDay"];

          let thisview = views.indexOf(calendar.view.type);

          let nextview = views[thisview + 1];
          /* alert(
            "The view's type is " +
              calendar.view.type +
              " thisview: " +
              thisview +
              " views.length: " +
              views.length
          ); */
          if (thisview == views.length - 1) {
            calendar.changeView(views[0]);
          } else if (thisview == -1) {
            calendar.changeView(views[0]);
          } else {
            calendar.changeView(nextview);
          }
        },
      },
      yearToggle: {
        text: "year \u21bb",
        hint: "toggle next year view",
        click: function () {
          let views = ["yearMonth2Col", "multiMonthYear", "yearMonthStack"];
          let thisview = views.indexOf(calendar.view.type);
          let nextview = views[thisview + 1];
          //alert("The view's type is " + calendar.view.type + " thisview: " + thisview+ " views.length: " + views.length);
          if (thisview == views.length - 1) {
            calendar.changeView(views[0]);
          } else if (thisview == -1) {
            calendar.changeView(views[0]);
          } else {
            calendar.changeView(nextview);
          }
        },
      },
      allViewsToggle: {
        text: "all \u21bb",
        hint: "toggle next view",
        click: function () {
          let views = [
            "timeGridDay",
            "timeGridTwoDay",
            "timeGridThreeDay",
            "timeGridWeek",
            "dayGridMonth",
            "listWeek",
            "timeGrid14Day",
            "dayGridTwoWeek",
            "yearMonth2Col",
            "multiMonthYear",
            "yearMonthStack",
          ];
          let thisview = views.indexOf(calendar.view.type);
          let nextview = views[thisview + 1];
          //alert("The view's type is " + calendar.view.type + " thisview: " + thisview+ " views.length: " + views.length);
          if (thisview == views.length - 1) {
            calendar.changeView(views[0]);
          } else if (thisview == -1) {
            calendar.changeView(views[0]);
          } else {
            calendar.changeView(nextview);
          }
        },
      },
    },
    headerToolbar: {
      left: "prev,next today dayToggle,yearToggle,allViewsToggle",
      center: "title",
      right:
        "timeGridDay,timeGridTwoDay,timeGridThreeDay timeGridWeek,dayGridMonth,listWeek timeGrid14Day,dayGridTwoWeek yearMonth2Col,multiMonthYear,yearMonthStack",
    },
    buttonHints: {
      next: "next $0",
      prev: "prev $0",
      timeGridTwoDay: "2 days view",
      timeGridThreeDay: "3 days view",
      multiMonthYear: "year grid view",
      yearMonthStack: "year stack view",
      listWeek: "list view (week)",
    },


    views: {
      timeGrid14Day: {
        type: "timeGrid",
        duration: { days: 14 },
        buttonText: "14 day",
      },
      dayGridTwoWeek: {
        type: "dayGrid",
        duration: { weeks: 2 },
        buttonText: "2 weeks",
        businessHours: false,
      },
      yearMonthStack: {
        type: "multiMonthYear",
        buttonText: "stack",
        multiMonthMaxColumns: 1,
      },
      timeGridTwoDay: {
        type: "timeGrid",
        duration: { days: 2 },
        buttonText: "2 d",
      },
      timeGridThreeDay: {
        type: "timeGrid",
        duration: { days: 3 },
        buttonText: "3 d",
      },
      multiMonthYear: {
        buttonText: "grid",
        multiMonthMinWidth: 200,
      },
      yearMonth2Col: {
        type: "multiMonthYear",
        buttonText: "year",
        multiMonthMaxColumns: 2,
      },
      timeGridWeek: {
    
      }
    },

    eventColor: "#b27092",
    nowIndicator: true,
    eventInteractive: true,
    events: [
      {
title : 'ED 2: Diseases',
start : '2023-02-09T08:00:00',
end : '2023-02-09T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-02-09T11:30:00',
end : '2023-02-09T14:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-02-10T08:00:00',
end : '2023-02-10T11:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-02-10T11:30:00',
end : '2023-02-10T14:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-02-10T15:00:00',
end : '2023-02-10T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-02-13T11:30:00',
end : '2023-02-13T14:30:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-02-13T15:00:00',
end : '2023-02-13T18:00:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-02-14T08:00:00',
end : '2023-02-14T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-02-14T11:30:00',
end : '2023-02-14T13:30:00',
color: 'var(--ed1bg)',
textColor: 'var(--ed1text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-02-14T15:00:00',
end : '2023-02-14T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-02-16T08:00:00',
end : '2023-02-16T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-02-16T11:30:00',
end : '2023-02-16T14:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-02-17T08:00:00',
end : '2023-02-17T11:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-02-17T11:30:00',
end : '2023-02-17T14:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-02-17T15:00:00',
end : '2023-02-17T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-02-20T11:30:00',
end : '2023-02-20T14:30:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-02-20T15:00:00',
end : '2023-02-20T18:00:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-02-21T08:00:00',
end : '2023-02-21T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-02-21T11:30:00',
end : '2023-02-21T13:30:00',
color: 'var(--ed1bg)',
textColor: 'var(--ed1text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-02-21T15:00:00',
end : '2023-02-21T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-02-23T08:00:00',
end : '2023-02-23T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-02-23T11:30:00',
end : '2023-02-23T14:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-02-24T08:00:00',
end : '2023-02-24T11:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-02-24T11:30:00',
end : '2023-02-24T14:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-02-24T15:00:00',
end : '2023-02-24T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-02-27T11:30:00',
end : '2023-02-27T14:30:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-02-27T15:00:00',
end : '2023-02-27T18:00:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-02-28T08:00:00',
end : '2023-02-28T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-02-28T11:30:00',
end : '2023-02-28T13:30:00',
color: 'var(--ed1bg)',
textColor: 'var(--ed1text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-02-28T15:00:00',
end : '2023-02-28T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-02T08:00:00',
end : '2023-03-02T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-02T11:30:00',
end : '2023-03-02T14:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-03T08:00:00',
end : '2023-03-03T11:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-03-03T11:30:00',
end : '2023-03-03T14:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-03T15:00:00',
end : '2023-03-03T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-06T11:30:00',
end : '2023-03-06T14:30:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-06T15:00:00',
end : '2023-03-06T18:00:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-07T08:00:00',
end : '2023-03-07T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-03-07T11:30:00',
end : '2023-03-07T13:30:00',
color: 'var(--ed1bg)',
textColor: 'var(--ed1text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-07T15:00:00',
end : '2023-03-07T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-09T08:00:00',
end : '2023-03-09T11:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-09T11:30:00',
end : '2023-03-09T14:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-10T08:00:00',
end : '2023-03-10T11:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-03-10T11:30:00',
end : '2023-03-10T14:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-10T15:00:00',
end : '2023-03-10T16:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-13T10:30:00',
end : '2023-03-13T13:30:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-13T14:00:00',
end : '2023-03-13T17:00:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-14T07:00:00',
end : '2023-03-14T10:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-03-14T10:30:00',
end : '2023-03-14T12:30:00',
color: 'var(--ed1bg)',
textColor: 'var(--ed1text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-14T14:00:00',
end : '2023-03-14T15:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-16T07:00:00',
end : '2023-03-16T10:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-16T10:30:00',
end : '2023-03-16T13:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-17T07:00:00',
end : '2023-03-17T10:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-03-17T10:30:00',
end : '2023-03-17T13:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-17T14:00:00',
end : '2023-03-17T15:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-20T10:30:00',
end : '2023-03-20T13:30:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-20T14:00:00',
end : '2023-03-20T17:00:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-21T07:00:00',
end : '2023-03-21T10:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-03-21T10:30:00',
end : '2023-03-21T12:30:00',
color: 'var(--ed1bg)',
textColor: 'var(--ed1text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-21T14:00:00',
end : '2023-03-21T15:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-23T07:00:00',
end : '2023-03-23T10:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-23T10:30:00',
end : '2023-03-23T13:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-24T07:00:00',
end : '2023-03-24T10:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-03-24T10:30:00',
end : '2023-03-24T13:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-24T14:00:00',
end : '2023-03-24T15:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-27T10:30:00',
end : '2023-03-27T13:30:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-27T14:00:00',
end : '2023-03-27T17:00:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-28T07:00:00',
end : '2023-03-28T10:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 1: Welcome Course and Patient History',
start : '2023-03-28T10:30:00',
end : '2023-03-28T12:30:00',
color: 'var(--ed1bg)',
textColor: 'var(--ed1text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-28T14:00:00',
end : '2023-03-28T15:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 2: Diseases',
start : '2023-03-30T07:00:00',
end : '2023-03-30T10:00:00',
color: 'var(--ed2bg)',
textColor: 'var(--ed2text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 3: HPI & ROS',
start : '2023-03-30T10:30:00',
end : '2023-03-30T13:30:00',
color: 'var(--ed3bg)',
textColor: 'var(--ed3text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 5: Labs & Imaging',
start : '2023-03-31T07:00:00',
end : '2023-03-31T10:00:00',
color: 'var(--ed5bg)',
textColor: 'var(--ed5text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'ED 4: Physical Exam',
start : '2023-03-31T10:30:00',
end : '2023-03-31T13:30:00',
color: 'var(--ed4bg)',
textColor: 'var(--ed4text)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'Final Exam',
start : '2023-03-31T14:00:00',
end : '2023-03-31T15:30:00',
color: 'var(--finalexambg)',
textColor: 'var(--finalexamtext)',
allDay: false,
className: 'courses',
extendedProps: {calname: 'courses'}
},{
title : 'BiWeekly Meeting',
start : '2023-02-16T16:00:00',
end : '2023-02-16T16:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'sample event',
start : '2023-02-23T17:15:00',
end : '2023-02-23T22:00:00',
color: 'var(--scribeumiscbg)',
textColor: 'var(--scribeumisctext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-03-02T16:00:00',
end : '2023-03-02T16:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-03-16T15:00:00',
end : '2023-03-16T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-03-30T15:00:00',
end : '2023-03-30T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-04-13T15:00:00',
end : '2023-04-13T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-04-27T15:00:00',
end : '2023-04-27T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-05-11T15:00:00',
end : '2023-05-11T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-05-25T15:00:00',
end : '2023-05-25T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-06-08T15:00:00',
end : '2023-06-08T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-06-22T15:00:00',
end : '2023-06-22T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-07-06T15:00:00',
end : '2023-07-06T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-07-20T15:00:00',
end : '2023-07-20T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-08-03T15:00:00',
end : '2023-08-03T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'BiWeekly Meeting',
start : '2023-08-17T15:00:00',
end : '2023-08-17T15:30:00',
color: 'var(--biwkbg)',
textColor: 'var(--biwktext)',
allDay: false,
className: 'scribeumisc',
extendedProps: {calname: 'scribeumisc'}
},{
title : 'Automatic Disc payment',
start : '2023-02-13T00:00:00',
end : '2023-02-14T00:00:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: true,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'socal test event',
start : '2023-02-22T09:15:00',
end : '2023-02-22T17:15:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: false,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'Automatic Disc payment',
start : '2023-03-12T23:00:00',
end : '2023-03-13T23:00:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: true,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'Dr. Turner appointment',
start : '2023-04-07T10:30:00',
end : '2023-04-07T11:30:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: false,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'Automatic Disc payment',
start : '2023-04-12T23:00:00',
end : '2023-04-13T23:00:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: true,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'Automatic Disc payment',
start : '2023-05-12T23:00:00',
end : '2023-05-13T23:00:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: true,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'Automatic Disc payment',
start : '2023-06-12T23:00:00',
end : '2023-06-13T23:00:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: true,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'Automatic Disc payment',
start : '2023-07-12T23:00:00',
end : '2023-07-13T23:00:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: true,
className: 'socal',
extendedProps: {calname: 'socal'}
},{
title : 'Automatic Disc payment',
start : '2023-08-12T23:00:00',
end : '2023-08-13T23:00:00',
color: 'var(--socalbg)',
textColor: 'var(--socaltext)',
allDay: true,
className: 'socal',
extendedProps: {calname: 'socal'}
}
    ],
  });

  calendar.render();
});
