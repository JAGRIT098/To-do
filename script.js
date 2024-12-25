let i=1;
function taskAddition(){
    const input1=document.getElementById("inputact")
    const ad=document.getElementById("taskadd");
    if(input1.value.trim()===""){
        return;
    }
    const newTask = document.createElement("div");
    newTask.setAttribute(
        "style",
        "font-family:sans-serif; display: flex; justify-content: space-between; align-items: center; margin-top: 20px; color:#F5EFE7; margin-top:50px"
    );
    newTask.setAttribute("id", `todo-${i}`);

    newTask.innerHTML = `
        <span>${input1.value}</span>
        <button style="font-family:sans-serif; background-color: #213555; color:#F5EFE7; width:70px; height:30px; border: solid; border-radius:10px; outline: none; margin-right:800px;" id="btn-${i}" onclick='taskDelete(${i})'>DELETE </button>
    `;

    ad.appendChild(newTask);
    i = i + 1;
    input1.value = "";
}

function taskDelete(a){
    const classp="todo-"+a;
    const elem=document.getElementById(classp);
    elem.parentNode.removeChild(elem);
    btndel(a);
}
function btndel(a){
    const btnid="btn-"+a;
    const elem=document.getElementById(btnid);
    elem.parentElement.removeChild(elem);
}
