
const XLSX = import("./node_modules/xlsx/xlsx.mini.js");
const main = import("./node_modules/hybrid-schedule-organizer/hybrid_schedule_organizer.js");

main.then(main => {

main.greet("WebAssembly");
XLSX.then(XLSX => {

	main.greet("XLSX LOADED!");

    var wb = XLSX.utils.table_to_book(document.getElementById('mytable'), {sheet:"Sheet JS"});
    var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
    
    main.greet(wbout.toString());
});
});