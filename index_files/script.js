function modify_rows(val) {
    var rows = document.getElementById('rows').value;
    var new_rows = parseInt(rows,10) + val;
    
    if (new_rows < 0) {
        new_rows = 0;
    }
    
    document.getElementById('rows').value = new_rows;
    return new_rows;
}

function modify_stitches(val) {
    var stitches = document.getElementById('stitches').value;
    var new_stitches = parseInt(stitches,10) + val;
    
    if (new_stitches < 0) {
        new_stitches = 0;
    }
    
    document.getElementById('stitches').value = new_stitches;
    return new_stitches;
}

function modify_incre(val) {
    var incre = document.getElementById('incre').value;
    var new_incre = parseInt(incre,10) + val;
    
    if (new_incre < 0) {
        new_incre = 0;
    }
    
    document.getElementById('incre').value = new_incre;
    return new_incre;
}

function modify_decre(val) {
    var decre = document.getElementById('decre').value;
    var new_decre = parseInt(decre,10) + val;
    
    if (new_decre < 0) {
        new_decre = 0;
    }
    
    document.getElementById('decre').value = new_decre;
    return new_decre;
}

function modify_repeat(val) {
    var repeat = document.getElementById('repeat').value;
    var new_repeat = parseInt(repeat,10) + val;
    
    if (new_repeat < 0) {
        new_repeat = 0;
    }
    
    document.getElementById('repeat').value = new_repeat;
    return new_repeat;
}

function ClearFields() {

     document.getElementById("project").value = "...";
     document.getElementById("rows").value = "0";
     document.getElementById("stitches").value = "0";
     document.getElementById("incre").value = "0";
     document.getElementById("decre").value = "0";
     document.getElementById("repeat").value = "0";
}