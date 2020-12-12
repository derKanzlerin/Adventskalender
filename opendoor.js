let currentday = new Date().getDate();
let door = [0, 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14', 'd15', 'd16', 'd17', 'd18', 'd19', 'd20', 'd21', 'd22', 'd23', 'd24']

function opendoor(a) {
    let selecteddoor = document.getElementById(door[a]).getAttribute('value');
    if (selecteddoor < currentday) {
        document.getElementById(door[a]).classList.add('d-none');
    } else { alert('No No No, nicht schummeln!'); }
}

function setdoor() {

    for (let i = 1; i < door.length; i++) {
        document.getElementById('firstdiv').innerHTML +=
            `<div class="doorbox">
        <div class="door1" onclick="opendoor(${[i]})" id="${door[i]}" value="${[i]}">${[i]}</div>
        <div class="presnt1" >Hallo Welt!</div>
    </div>`;
    }
    ;
}


