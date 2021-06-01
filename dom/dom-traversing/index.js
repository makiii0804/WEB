/*Traversing*/

function changeRemoveClass () {
    var liActive = document.querySelector('.active');
    liActive.removeAttribute('class');
    var ulParent = liActive.parentElement;
    var divParent = ulParent.parentElement;
    var divSib = divParent.previousElementSibling;
    var ulChild = divSib.children;
    var liChild = ulChild[0].children[0];
    liChild.className = 'active';

}
changeRemoveClass();