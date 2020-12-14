function getPlaceholder() {
    return "¿Buscas a alguien o algo en específico?"
};

function getNameForSearchTests() {
    return "Maria"
};

function getURLWithFilterSelected() {
    return ["?sp=phisical", "?sp=language", "?sp=ocupational"]
};


module.exports = { 
    getPlaceholder, 
    getNameForSearchTests,
    getURLWithFilterSelected 
}