function resetGame() {
    let popup = document.getElementById("popup");

    console.log("open popup")
    popup.classList.remove("open-popup");
    document.getElementById('button1').value = '';
    document.getElementById("button2").value = '';
    document.getElementById("button3").value = '';
    document.getElementById("button4").value = '';
    document.getElementById("button5").value = '';
    document.getElementById("button6").value = '';
    document.getElementById("button7").value = '';
    document.getElementById("button8").value = '';
    document.getElementById("button9").value = '';
}

function playAndGetResult() {

    let b1 = document.getElementById('button1').value;
    let b2 = document.getElementById('button2').value;
    let b3 = document.getElementById('button3').value;
    let b4 = document.getElementById('button4').value;
    let b5 = document.getElementById('button5').value;
    let b6 = document.getElementById('button6').value;
    let b7 = document.getElementById('button7').value;
    let b8 = document.getElementById('button8').value;
    let b9 = document.getElementById('button9').value;

    console.log({
        b1,
        b2,
        b3
    })
    if (b1 == 'X' && b2 == 'X' && b3 == 'X' || b4 == 'X' && b5 == 'X' && b6 == 'X' || b7 == 'X' && b8 == 'X' && b9 == 'X' ||
        b1 == 'X' && b4 == 'X' && b7 == 'X' || b2 == 'X' && b5 == 'X' && b8 == 'X' || b3 == 'X' && b6 == 'X' && b9 == 'X' ||
        b1 == 'X' && b5 == 'X' && b9 == 'X' || b3 == 'X' && b5 == 'X' && b7 == 'X') {
        document.getElementById('player').innerText = 'X'

    } else if(b1 == '0' && b2 == '0' && b3 == '0' || b4 == '0' && b5 == '0' && b6 == '0' || b7 == '0' && b8 == '0' && b9 == '0' ||
    b1 == '0' && b4 == '0' && b7 == '0' || b2 == '0' && b5 == '0' && b8 == '0' || b3 == '0' && b6 == '0' && b9 == '0' ||
    b1 == '0' && b5 == '0' && b9 == '0' || b3 == '0' && b5 == '0' && b7 == '0'){
        document.getElementById('player').innerText = '0'

    }
    else {
        document.getElementById('player').innerText = 'Please enter the valid scenario to'
    }

    let popup = document.getElementById("popup");
    console.log("popup opens")

    console.log(popup)
    popup.classList.add("open-popup")
}