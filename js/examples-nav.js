var charts = [];

$(document).ready(function () {

    // chart type as category
    var $navList = $('#left-chart-nav ul');
    var inDemoPage = location.pathname.match(/demo.html/);
    for (var type in CHART_TYPES) {
        $navList.append($('<li>').append(
            '<a class="left-chart-nav-link" id="left-chart-nav-' + type + '" '
            + 'href="' + (inDemoPage ? 'examples.html' : '' ) + '#chart-type-' + type + '">'
                + '<div class="chart-icon"></div>'
                + '<div class="chart-name">' + CHART_TYPES[type] + '</div>'
            + '</a>'));
    }

    // Set chart thumbnail image height according to width.
    // Making sure nav calculation is correct.
    $('.chart-area').height($('.chart-area').width() / 5 * 4);

    var chartListHeights = null;
    var activeChartType = null;
    $(window)
        .scroll(function () {
            // When scroll, check top of right content
            var top = -$('.chart-list-panel')[0].getBoundingClientRect().top;

            var margin = parseInt(
                $('#chart-type-scatter h3').css('margin-top'),
                10
            );

            if (!chartListHeights) {
                // Init chart height for only the first time
                var children = $('.chart-list-panel').children();
                var height = 0;
                chartListHeights = [];

                for (var i = 0; i < children.length; ++i) {
                    height += $($('.chart-list-panel').children()[i]).height()
                        + margin;
                    chartListHeights.push({
                        height: height,
                        id: $($('.chart-list-panel').children()[i])
                            .attr('id')
                            .slice('chart-type-'.length)
                    });
                }
            }

            for (var i = 0; i < chartListHeights.length; ++i) {
                if (chartListHeights[i].height > top) {
                    if (activeChartType !== chartListHeights[i].id) {
                        // Chart type in left nav changed
                        $('#left-chart-nav li').removeClass('active');
                        $('#left-chart-nav-' + chartListHeights[i].id)
                            .parent()
                            .addClass('active');

                        activeChartType = chartListHeights[i].id;
                    }
                    break;
                }
            }
        });
});