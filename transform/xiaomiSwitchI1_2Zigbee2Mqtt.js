(function(x) {
    var result = "";
    if (x == '1' || x == 'ON') {
        result="{ \"state_l1\": \"ON\" }";
    } else {
        result="{ \"state_l1\": \"OFF\" }";
    }
    return result;
})(input)