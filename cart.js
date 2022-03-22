function PUI(section, instructor, day, time, waitlist, maxEnroll, location) {
    this.section = section;
    this.instructor = instructor;
    this.day = day;
    this.time = time;
    this.waitlist = waitlist;
    this.maxEnroll = maxEnroll;
    this.location = location;
}
var selected = [new PUI("A", "Hudson", "M", "10:10AM - 11:30AM", 0, 3, "PH 226A")]

function onLoad() {
    document.getElementById("list_title").textContent =
            'Selected List(' + selected.length + ')' ;
    for (let i = 0; i < selected.length; i++) {
        var tab = document.getElementById("course_list");
        tab.insertRow().innerHTML = "<td class='course_label' colspan='2'>05630<br> \
                                    Programming Usable Interfaces<br> \
                                    Section " + selected[i].section + "</td>";
        tab.insertRow().innerHTML = "<td class='operation'><a href='details.html'>Details</a></td> \
                                     <td class='operation' id='drop'>Drop</td>";    
    }
}