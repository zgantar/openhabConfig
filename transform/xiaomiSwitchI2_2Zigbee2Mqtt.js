(function(x) {
    var result = "";
    if (x == '1' || x == 'ON') {
        result="{ \"state_l2\": \"ON\" }";
    } else {
        result="{ \"state_l2\": \"OFF\" }";
    }
    return result;
})(input)