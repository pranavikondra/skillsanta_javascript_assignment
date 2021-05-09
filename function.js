function function0(no, name) {
    name();
}

function function1() {
    document.write("function passed as parameter");
}

function0(1, function1);