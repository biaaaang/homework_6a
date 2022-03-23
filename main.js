
function Course(number, name, section, instructor, day, time, waitlist, maxEnroll, location) {
    this.number = number;
    this.name = name;
    this.section = section;
    this.instructor = instructor;
    this.day = day;
    this.time = time;
    this.waitlist = waitlist;
    this.maxEnroll = maxEnroll;
    this.location = location;
}

var courses = [new Course("05430","Progamming Usable Interfaces", "A", "Hudson", "M", "10:10AM - 11:30AM", 0, 3, "PH 226A"),
               new Course("05430","Progamming Usable Interfaces", "B", "Hudson", "W", "10:10AM - 11:30AM", 0, 3, "WEH 5415")]

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
            <td class="operation register" id="'+ i + '">Register</td>';
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

            // if click Register
            if (register.textContent === "Register") {
                selected.push(courses[index]);
                for (const register2 of registers) {
                    if (register2.id === register.id) {
                        console.log(register2.id);
                        register2.textContent = "Drop";
                    }
                    else {
                        register2.textContent = "Switch";
                    }
                }    
            }

            // if click Drop
            else if (register.textContent === "Drop") {
                selected.pop();
                for (const register2 of registers) {
                        register2.textContent = "Register";
                    }
                }

            // if click Switch
            else if (register.textContent === "Switch") {
                selected.pop();
                selected.push(courses[index]);
                for (const register2 of registers) {
                    if (register2.id === register.id) {
                        register2.textContent = "Drop";
                    }
                    else {
                        register2.textContent = "Switch";
                    }
                }    
            }
            document.getElementById("schedule_link").textContent
                        = "My course schedule(" + selected.length + ")";
           
        });
    }
    
}


           