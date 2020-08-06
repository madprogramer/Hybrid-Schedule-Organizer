const XLSX = import("../node_modules/xlsx/xlsx.mini.js");
const GRID = import("../node_modules/gridjs/dist/gridjs.production.min.js");

import("../pkg/index.js").catch(console.error);

import("../pkg/index.js").then(module => {

//module.main_js(); 
//invoked implicitly

//XLSX
XLSX.then(XLSX => {
	alert("XLSX LOADED!");

	var wb = XLSX.utils.table_to_book(document.getElementById('mytable'), {sheet:"Sheet JS"});
    var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});

//GRID
GRID.then(GRID => {
	alert("GRID.JS LOADED!");

});
});
});