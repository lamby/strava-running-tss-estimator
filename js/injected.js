var TSS_PER_HOUR = {
  'Z1':  60,
  'Z2': 100,
  'Z3': 120,
  'Z4': 200,
  'Z5': 300,
  'Z6': 600
};

var view = Strava.Labs.Activities.PaceZones;
var fn = view.prototype.getPaceZones;

view.prototype.getPaceZones = function () {
  var result = fn.apply(this, Array.prototype.slice.call(arguments));

  var tss = 0;
  jQuery.each(this.paceZones, function (i, item) {
    // Re-parse the time (eg. "23s" / "32:21")
    var parts = item.time.replace('s', '').split(':').reverse();
    var seconds = parts.reduce(function (prev, cur, idx) {
        return prev + (cur * Math.pow(60, idx));
    }, 0);

    // Calculate the contribution to TSS
    tss += TSS_PER_HOUR[item.name] / 3600 * seconds;
  });

  jQuery('#view .inline-stats').append(
    '<li><strong>' + Math.round(tss) + '</strong><div class="label">TSS (estimated)</div></li>'
  );

  return result;
};
