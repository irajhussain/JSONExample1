var len = data.results[0].members.length;
printmembers(null, "Format by State")

function printmembers(checkedBoxes, state) {
    var filteredMembers = []
    if (checkedBoxes == null && state == "Format by State") {
        filteredMembers = data.results[0].members
    } else if (checkedBoxes == null) {
        for (var i = 0; i < len; i++) {
            if (data.results[0].members[i].state == state) {
                filteredMembers.push(data.results[0].members[i]);
            }
        }

    } else if (state == "Format by State") {

        for (var i = 0; i < len; i++) {
            if (checkedBoxes.includes(data.results[0].members[i].party)) {
                filteredMembers.push(data.results[0].members[i]);
            }
        }

    } else {
        for (var i = 0; i < len; i++) {
            if (checkedBoxes.includes(data.results[0].members[i].party) && data.results[0].members[i].state == state) {
                filteredMembers.push(data.results[0].members[i]);
            }
        }
    }
    printheader();
    for (var i = 0; i < filteredMembers.length; i++) {
        var tr = document.createElement("tr");

        var td = document.createElement("td");
        tr.appendChild(td);
        var a = document.createElement("a");
        td.appendChild(a);
        a.href = "filteredMembers[i].url"
        a.target = "_blank";
        var val = document.createTextNode(filteredMembers[i].first_name + " " + filteredMembers[i].last_name)
        a.appendChild(val);

        var td = document.createElement("td");
        tr.appendChild(td);
        var val = document.createTextNode(filteredMembers[i].party);
        td.appendChild(val);

        var td = document.createElement("td");
        tr.appendChild(td);
        var val = document.createTextNode(filteredMembers[i].state);
        td.appendChild(val);

        var td = document.createElement("td");
        tr.appendChild(td);
        var val = document.createTextNode(filteredMembers[i].seniority)
        td.appendChild(val);

        var td = document.createElement("td");
        tr.appendChild(td);
        var val = document.createTextNode(filteredMembers[i].votes_with_party_pct + "%")
        td.appendChild(val);
        document.getElementById("houseTable").appendChild(tr);
        //            }
        //        }
    }
}

function getCheckedBoxes() {
    var Table = document.getElementById("houseTable");
    Table.innerHTML = " ";
    var s = document.getElementById("mySelect");
    state = s.value;
    var Table = document.getElementById("houseTable");
    Table.innerHTML = " ";
    var checkboxes = document.getElementsByTagName("input");
    var checkboxesChecked = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].value);
        }
    }
    if (checkboxesChecked.length > 0) {
        printmembers(checkboxesChecked, state);
    } else {
        printmembers(null, state);
    }
}

function printheader() {
    var th = document.createElement("thead");
    var tr = document.createElement("tr");
    th.appendChild(tr);
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode("Full Name");
    td.appendChild(val);
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode("Party");
    td.appendChild(val);
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode("State");
    td.appendChild(val);
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode("Seniority");
    td.appendChild(val);
    var td = document.createElement("td");
    tr.appendChild(td);
    var val = document.createTextNode("Vote Share");
    td.appendChild(val);
    document.getElementById("houseTable").appendChild(th);
}

var oldarr = data.results[0].members;
var newarr = [];
var found = false;
for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < newarr.length; j++) {
        if (newarr[j] == oldarr[i].state) {
            found = true;
        }
    }
    if (!found) {
        found = false;
        newarr.push(oldarr[i].state);
    }
}
var ts = document.createElement("Select");
for (var i = 0; i < newarr.length; i++) {
    var to = document.createElement("option");
    ts.appendChild(to);
    var val = document.createTextNode(newarr[i]);
    to.appendChild(val);
    document.getElementById("mySelect").appendChild(to);
}
var to = document.createElement("option");
ts.appendChild(to);
var val = document.createTextNode('Format by State');
to.appendChild(val);
document.getElementById("mySelect").appendChild(to);

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
