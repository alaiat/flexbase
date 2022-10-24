let database= [
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]

  function kudeatzailea(){
    let pos=0
    datuakAldatu()
   

    function datuakAldatu(){
        let izen= document.getElementById('izenburua')
        izen.value=database[pos]['izenburua']
        let egil= document.getElementById('egilea')
        egil.value=database[pos]['egilea']
        let dat= document.getElementById('data')
        dat.value=database[pos]['data']
        let isb= document.getElementById('isbn')
        isb.value=database[pos]['isbn']
        let argazkia=document.getElementById('irudi')
        argazkia.src="https://covers.openlibrary.org/b/id/"+database[pos]['filename']
    }
   
    let aurrerakoBotoia= document.getElementById('aurrera')
    aurrerakoBotoia.onclick= function(){
        
        if(pos<4){
            pos++
            datuakAldatu()
        }
        
    }
    let atzerakoBotoia= document.getElementById('atzera')
    atzerakoBotoia.onclick= function(){
        
        if(pos>=0){
            pos--
            datuakAldatu()
        }
        
    }


  }
  window.onload= kudeatzailea