(function(x) {
    var result = "";
    if (x == '1' || x == 'ON') {
        result="{ \"state_right\": \"ON\" }";
    } else {
        result="{ \"state_right\": \"OFF\" }";
    }
    return result;
})(input)