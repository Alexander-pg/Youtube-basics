const data = async ()=>{
    const datos = await fetch('http://localhost:3000/videos')
    

    const datoscomplete = await datos.json()

    var content = " "

    var changeLink = document.getElementById("tochange")

     function working(id,url){
            document.getElementById(id).addEventListener("click",()=>{
            var recurso = url
                changeLink.src = recurso
            })
        }

    

    datoscomplete.forEach(element => {
       
        content += `<div class="elementos">
        <img id = "${element.id}" src = "${element.preview}" />
        <p>${element.name}</p></div>`

});

    

    document.getElementById('space-videos').innerHTML=content
    
    working(datoscomplete[0].id,datoscomplete[0].url)
    working(datoscomplete[1].id,datoscomplete[1].url)
    working(datoscomplete[2].id,datoscomplete[2].url)
    working(datoscomplete[3].id,datoscomplete[3].url)
    working(datoscomplete[4].id,datoscomplete[4].url)
    working(datoscomplete[5].id,datoscomplete[5].url)
    working(datoscomplete[6].id,datoscomplete[6].url)
    working(datoscomplete[7].id,datoscomplete[7].url)
    working(datoscomplete[8].id,datoscomplete[8].url)
    working(datoscomplete[9].id,datoscomplete[9].url)
    working(datoscomplete[10].id,datoscomplete[10].url)
   

    working(datoscomplete)

}


data()