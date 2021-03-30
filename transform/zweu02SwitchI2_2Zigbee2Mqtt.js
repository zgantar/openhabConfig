(function(x) {
    var result = "";
    if (x == '1' || x == 'ON') {
        result="{ \"state_left\": \"ON\" }";
    } else {
        result="{ \"state_left\": \"OFF\" }";
    }
    return result;
})(input)