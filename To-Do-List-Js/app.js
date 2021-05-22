const form=document.querySelector('#form');

const ul=document.querySelector('.row-input ul');

const item=document.querySelector('.item');

function createElement(value){
    var li=document.createElement("li");

    li.appendChild(document.createTextNode(value));

    var dBtn = document.createElement("button");

 dBtn.appendChild(document.createTextNode("X"));

   li.appendChild(dBtn);

    ul.appendChild(li);

    item.value="";

    dBtn.addEventListener('click',deleteItem);

    function deleteItem() {
        li.classList.add("delete");
    }

    function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
}


form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const value=item.value.trim();

    if(value.length>0){
       createElement(value);
    }
})

