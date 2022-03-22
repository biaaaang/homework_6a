
function PUI(section, instructor, day, time, waitlist, maxEnroll, location) {
    this.section = section;
    this.instructor = instructor;
    this.day = day;
    this.time = time;
    this.waitlist = waitlist;
    this.maxEnroll = maxEnroll;
    this.location = location;
}

var courses = [new PUI("A", "Hudson", "M", "10:10AM - 11:30AM", 0, 3, "PH 226A"),
               new PUI("B", "Hudson", "W", "10:10AM - 11:30AM", 0, 3, "WEH 5415")]

selected = [];

function onLoad() {
    

    // add rows into the table
    for (let i = 0; i < courses.length; i++) {
        var tab = document.getElementById("section_table");
        var newRow = tab.insertRow();
        allContent = "<td>"+courses[i].section+"</td><td>"
                           +courses[i].section+"</td><td>"
                           +courses[i].instructor+"</td><td>"
                           +courses[i].time+"</td><td>"
                           +courses[i].waitlist+"</td><td>"
                           +courses[i].maxEnroll+"</td><td>"
                           +courses[i].location+"</td>";
        if (courses[i] in selected) {
            allContent = allContent + '<td>Registered</td> \
            <td class="operation drop" id="'+ i + '">Drop</a></td>';
        }
        else {
            allContent = allContent + '<td>Available</td> \
            <td class="operation register" id="'+ i + '">Registered</td>';
        }
        newRow.innerHTML = allContent;  
    }

    var linkRow = tab.insertRow();
    linkRow.innerHTML = '<td colspan="2"><a id="schedule_link" href="cart.html"> \
                         My course schedule(' + selected.length + ')</td>';
    
    // add course into selected by clicking register
    var registers = document.getElementsByClassName("register");
    for (const register of registers) {
        register.addEventListener("click", function() {
            let index = register.id;
            selected.push(courses[index]);
            register.style.display = "none";
            document.getElementById("schedule_link").textContent
                    = "My course schedule(" + selected.length + ")";
        });
    }
    
}


           