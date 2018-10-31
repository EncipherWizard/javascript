function postOnWall(btnref)
{
    let btnValue=btnref.previousElementSibling.value;

    let pBLock=document.getElementById("parent");
    let refBlock=pBLock.lastElementChild;

    btnref.previousElementSibling.value="";

    let newChild=refBlock.cloneNode(true);
    newChild.children[1].innerHTML= btnValue;
    pBLock.insertBefore(newChild,pBLock.firstChild);

    
}