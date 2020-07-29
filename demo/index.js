const js = import("./node_modules/hybrid-schedule-organizer/hybrid_schedule_organizer.js");
js.then(js => {
  js.greet("WebAssembly");
});