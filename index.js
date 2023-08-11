document.querySelector("#myform").addEventListener("submit",creatform);
    let new_obj = [];
    update(new_obj)
    function creatform(event){
        event.preventDefault()

        let name = document.querySelector("#name").value;
        let math = document.querySelector("#math").value;
        let science = document.querySelector("#science").value;
        let english =document.querySelector("#english").value;

        let obj = {
            name : name,
            math : math,
            science : science,
            english : english
        }
        new_obj.push(obj);
        console.log(new_obj);
        update(new_obj)
    } 
    function update(new_obj){
        document.querySelector("tbody").innerHTML = ""
        new_obj.map(function(el){
        let row  = document.createElement("tr");
        let col1 = document.createElement("td");
            col1.innerText= el.name;
        let col2 = document.createElement("td");
            col2.innerText = el.math;
        let col3 = document.createElement("td");
            col3.innerText = el.science;
        let col4 = document.createElement("td");
            col4.innerText = el.english;
        let total= Number(el.math)+Number(el.science)+Number(el.english)
        let col5 = document.createElement("td");
            col5.innerText = el.total
        row.append(col1,col2,col3,col4,total);

        document.querySelector("tbody").append(row);
        
    })
    }  