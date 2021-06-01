function createDropdown (array, div) {
    var body = document.querySelector('body');
    var div = document.createElement(div);
    var label = document.createElement('label');
    var select = document.createElement('select');
    var script = document.querySelector('script');


    body.insertBefore(div, script);
    body.appendChild(div);
    div.appendChild(label);
    label.appendChild(select);

    for(var i = 0; i < array.length; i++) {
        var option = document.createElement('option');
        select.appendChild(option);
        option.innerHTML = array[i];
        
    }
    
}

createDropdown([1,2,3], 'div');