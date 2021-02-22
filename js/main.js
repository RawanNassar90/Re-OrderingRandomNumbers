var stepCounter = 0;
$(document).ready(function() {
    shuffleNumbers();
    $("#shuffle").click(function() {
        shuffleNumbers();
    })

        $("#WinnerModal").on('hide.bs.modal', function () {
        shuffleNumbers();
    });


    $("table tr td").click(function(event) {
        var siblings = $(this).attr('data-sibling');
        siblings = siblings.split("and");
        var clickedText = event.currentTarget.textContent;
        var emptySibligText = "";
        $(siblings).each(function(index, value) {
            if ($("#td" + value)[0].textContent == "") {
                stepCounter++;
                $("#stepcounter").text(stepCounter);
                $("#td" + value)[0].textContent = clickedText;
                event.currentTarget.textContent = "";
                var isOrdered = checkOrdering();
                if (isOrdered == true) {
                    $("#WinnerModal").modal("show");
                }
            }
        });
    })
});
function checkOrdering() {
    var targetOrdering = ['1', '2', '3', '4', '5', '6', '7', '8'];
    var isOrdered = true;
    $(targetOrdering).each(function(index, value) {
        if ($("#td" + value)[0].textContent != value) {
            isOrdered = false;
            return;
        }
    });
    return isOrdered;
}
function shuffleNumbers() {
    // Random integer between 1 and 8 (both included) 
    var allshuffledNumbers = [];
    for (var i = 0; i < 8; i++) {
        var randomNumber = Math.floor(Math.random() * 8) + 1;
        while (allshuffledNumbers.indexOf(randomNumber) != -1) {
            randomNumber = Math.floor(Math.random() * 8) + 1;
        }
        allshuffledNumbers.push(randomNumber);
    }
    $(allshuffledNumbers).each(function(index, value) {
        $("#td" + (index + 1))[0].textContent = value
    });
      stepCounter=0;
     $("#td9")[0].textContent="";
     $("#stepcounter").text(stepCounter);
}