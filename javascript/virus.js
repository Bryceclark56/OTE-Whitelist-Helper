"use strict";
var threadURLRegex = /^(?:whitelist-applications\.201|approved-applications\.233|declined-applications\.234)$/;
var appStatusRegex = /^\[(?:Application|Approved|Pending|Declined|Closed)]$/;

var startTheVirus = function() {
    var path = window.location.pathname.split("/");
    if (path[1].toLowerCase() === "forums") {
        if (threadURLRegex.test(path[2].toLowerCase())) {
            //Pretty colors!
            var temp = document.querySelectorAll("div.listBlock.main");
            for (var i = 0; i < temp.length; i++) {
                var temp1 = temp[i].querySelector("h3.title > a");
                if (temp1 && temp1.innerHTML.split(" ")[0].match(appStatusRegex) !== null) {
                    var temp2 = document.createAttribute("data-otewh-appstatus");
                    temp2.value = temp1.innerHTML.split("]")[0].substring(1).toLowerCase();
                    temp[i].setAttributeNode(temp2);
                }
            }
        }
    }
    else if (path[1].toLowerCase() === "threads") {
        var temp = document.getElementsByClassName("titleBar")[0];
        if (threadURLRegex.test(document.getElementById("pageDescription").getElementsByTagName("a")[0].href.split("/")[4]) && appStatusRegex.test(temp.getElementsByTagName("h1")[0].textContent.split(" ")[0])) {
            //Time for some helping!
            console.log("Alright boys, we found it!");
            var temp1 = document.getElementsByClassName("redactor_box")[0];
            var temp2 = temp1.getElementsByClassName("redactor_toolbar")[0];
            var temp3 = document.createElement("li");
            temp3.className = "redactor_btn_group";
            var temp4 = document.createElement("ul");
            var temp5 = document.createElement("li");
            var temp6 = document.createElement("a");
            temp6.href = "://Ur mum, lel";
            temp6.title = "Approved Response";
            temp6.id = "OTEWH_ApprovedResponse_Button";
            temp6.className = "fa fa-clipboard";
            temp6.addEventListener("click", function(event) {
                event.stopPropagation();
                var temp = document.getElementsByClassName("redactor_box")[0];
                var temp1 = temp.getElementsByTagName("iframe")[0].contentDocument;
                console.log(temp1);
                var temp2 = temp1.getElementsByTagName("p")[0];
                console.log(temp2);
                temp2.focus();
                var temp3 = temp.getElementsByClassName("placeholder")[0];
                console.log(temp3);
                temp3.innerHTML = "";

                temp2.innerHTML = "<span>Ur mum sux dix</span>";
            });
            temp5.appendChild(temp6);
            temp4.appendChild(temp5);
            temp3.appendChild(temp4);
            temp2.appendChild(temp3);
        }
    }
};

var getApprovedResponse = function() {
    return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.onreadystatechange = function() {
                if (req.readyState === 4 && req.status === 200) {

                }
            };
    })
};

document.addEventListener("DOMContentLoaded", startTheVirus());