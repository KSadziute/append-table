var add = document.getElementById("add")
var remove1st = document.getElementById("remove1st")
var removeLast = document.getElementById("removeLast")
var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var age = document.getElementById("age")
var table = document.getElementById("table")


add.addEventListener("click", function(){
    if(fname.value){
        var td = document.createElement("td")
        td.innerText = fname.value
        table.append(td)
      }else{
          alert("laukelis tuscias")
      } 
    })

    add.addEventListener("click", function(){
        if(lname.value){
            var td = document.createElement("td")
            td.innerText = lname.value
            table.append(td)
          }else{
              alert("laukelis tuscias")
          } 
        })

        add.addEventListener("click", function(){
            if(age.value){
                var td = document.createElement("td")
                td.innerText = age.value
                table.append(td)
              }else{
                  alert("laukelis tuscias")
              } 
            })


        //sukurti arraay is user input
        // var input = ["fname", "lname","age"] ?
        //
        // remove1st.addEventListener("click", function(){
        //     var td = document.getElementsByTagName("td")
        //     if(td.lenght){
        //       td[td.length - 1].remove()  
        //     }else{
        //         alert("nebera ka trinti")
        //     })