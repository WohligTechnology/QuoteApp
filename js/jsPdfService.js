angular.module('jsPdfGenerator', [])
    .factory('jsPdfGenerator', function () {
        var pdf = {};
        pdf.generatePdf = function () {
            var doc = new jsPDF();
            var specialElementHandlers = {
                '#bypass': function (element, renderer) {
                    return true;
                }
            };
            doc.fromHTML($("body").get(0), 15, 15, {
                'width': 1000
            },function (error) {console.log(error);});
            doc.save("Test.pdf");


        }

        return pdf;
    });