var button= d3.select("#reset-btn");
var filter1 = d3.select('#rutafilter');
var filter2 = d3.select('#pdvfilter');
var tbody = d3.select("tbody");

function start(){
    getdata();
    getrutas();
}

function drillpdv(value){

    let filtered = score.filter(x => x.ruta === value);
    let first = filtered.map(y => y.name);
    let unique = first.filter(function(elem,index,self){
      return index === self.indexOf(elem);
    })
    
    filter2.selectAll('option').remove();
  
    unique.sort();
  
    unique.forEach((i) => {
      filter2
      .append('option')
      .text(i)
      .property('value', i)
    });
  };

function getrutas(){

    let first = score.map(x => x.ruta);
    let unique = first.filter(function(elem,index,self){
        return index === self.indexOf(elem);
    })
    
    filter1.selectAll('option').remove();
    
    unique.sort();
    
    unique.forEach((i) => {
        filter1
        .append('option')
        .text(i)
        .property('value', i)
    });

};

function getdata(){

    score.map((promotor) => {
        let row = tbody.append("tr");
        Object.entries(promotor).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });

}

filter1.on("change", function() {
    let ruta_value = filter1.property("value");
    drillpdv(ruta_value);
    let tbody = d3.select("tbody");
    tbody.remove();
    d3.select("#results-table").append("tbody");
    let rutafilter = score.filter(y => y.ruta === ruta_value)
    rutafilter.map((z) => {
        let tbody = d3.select("tbody");
        let row = tbody.append("tr");
        Object.entries(z).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
});

filter2.on("change", function() {
    let pdv_value = filter2.property("value");
    let tbody = d3.select("tbody");
    tbody.remove();
    d3.select("#results-table").append("tbody");
    let pdvfilter = score.filter(y => y.name === pdv_value)
    pdvfilter.map((z) => {
        let tbody = d3.select("tbody");
        let row = tbody.append("tr");
        Object.entries(z).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
});

button.on("click", function(){
    location.reload()
});