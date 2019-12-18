var iconList = [];
iconList.push("images/glasses.svg");
iconList.push("images/heels.svg");
iconList.push("images/outercoats.svg");
iconList.push("images/shirts.svg");
iconList.push("images/skirts.svg");
iconList.push("images/sneakers.svg");
iconList.push("images/trousers.svg");
iconList.push("images/watches.svg");

var categoryList = [];
categoryList.push("glasses");
categoryList.push("heels");
categoryList.push("outercoats");
categoryList.push("shirts");
categoryList.push("skirts");
categoryList.push("sneakers");
categoryList.push("trousers");
categoryList.push("watches");

// min ... max - 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function createBackground() {
    var background = document.createElement("div");
    background.setAttribute("id", "background");
    return background;
}

function createGrid(name, id) {
    var grid = document.createElement("div");
    var header = createGridHeader(name);
    grid.setAttribute("class", "grid");
    grid.setAttribute("id", id);
    var iso = new Isotope(grid, {
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        getSortData: {
            'epc': '.epc parseInt',
            'category': '[category]',
            'state': '.state'
        }
    });
    iso.insert(header);
    return grid;
}

function createGridHeader(name) {
        var header = document.createElement("div");
        header.setAttribute("class", "grid-item grid-header");
        header.innerHTML = name;
        return header;
}

function createItem(tag) {
        //var container = document.getElementById(location);
        var itemId = tag.epc.substr(tag.epc.length - 4);
        var newItem= document.createElement("div");
        newItem.setAttribute("class", "grid-item");
        newItem.setAttribute("id", itemId);

        var i = getRandomInt(0, iconList.length);
        var img= document.createElement("img");
        img.setAttribute("src", iconList[i]);
        img.setAttribute("class", "item-icon");
        newItem.setAttribute("category", categoryList[i]);
        newItem.appendChild(img);

        var epc= document.createElement("p");
        epc.setAttribute("class", "epc");
        epc.innerHTML = itemId;
        newItem.appendChild(epc);

        var state = document.createElement("p");
        state.setAttribute("class", "state");
        state.innerHTML = tag.state;
        newItem.appendChild(state);

        return newItem;
}

function colorNameToHex(color)
{
    var colors = {
        "almond":"#f4f0e1",
        "orange":"#eb8a3e"
    }

    if (typeof colors[color.toLowerCase()] != 'undefined')
        return colors[color.toLowerCase()];

    return false;
}
