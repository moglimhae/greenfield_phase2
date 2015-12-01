/* Datepicker */
$('.form_date').datetimepicker({
	weekStart: 1,
	todayBtn:  1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0
});

/* Data table */
$.extend( true, $.fn.dataTable.defaults, {
    "searching": false,
} );
 
 

$(document).ready(function() {
	$('#example').DataTable({
	  "scrollX": true,
	  "sScrollX": "100%",
	  "sScrollXInner": "150%",
	  "bScrollCollapse": true,
	  //"sDom": 'Rfrtlip',
	  "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
      "iDisplayLength": 10
	});
});