$(document).ready(function () {
    // generate nav for pages
    var $detail = $('.page-detail h2');
    if ($detail.length > 0) {
        // has title in detail
        $detail.each(function (i) {
            var link = 'href="#' + $(this).attr('id') + '"';
            var title = $(this).text();
            if ($(this).next('.time')) {
                // add time for change log page
                title += ' ' + $(this).next('.time').text();
            }
            var className = i === 0 ? ' class="active"' : ' ';
            var $a = $('<a ' + link + className + '>' + title + '</a>')
                .click(function () {
                    $('.page-nav a').removeClass('active');
                    $(this).addClass('active');
                });
            $('.page-nav ul')
                .append(
                    $('<li></li>').append($a)
                );
        });
    }

    // lazy loading iframes
    var $area = $('.page-content');
    var $iframes = $area.find('iframe');
    function lazyload() {
        $iframes.filter(function () {
            var $this = $(this);
            if ($this.attr('src')) {
                return false;
            }
            var rect = $this[0].getClientRects();
            return rect.length > 0 && rect[0].top > 0
                && rect[0].top < $(window).height();
        }).each(function () {
            $(this).attr('src', $(this).data('src'));
        });
    }
    lazyload();
    $(window).scroll(function () {
        lazyload();
    });

    // toggle nav sliding for mobile
    $('.slide-btn').click(function () {
        var $content = $(this).parent().parent();
        if ($content.hasClass('slide-up')) {
            // slide down
            $(this).text('收起目录');
            $content.removeClass('slide-up');
        }
        else {
            // slide up
            $(this).text('展开目录');
            $content.addClass('slide-up');
        }
    });

    // single page nav fixed position
    if ($('.page-nav')) {
        $(window).scroll(function () {
            var defaultTop = 120;
            var top = Math.max(120 - (window.pageYOffset - defaultTop), 70);
            $('.page-nav').css('top', top);
        });
    }
});
