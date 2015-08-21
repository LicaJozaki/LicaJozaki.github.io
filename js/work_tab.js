$(function() {
    $('.tabSet').each(function() {
        var topDiv = $(this);
        var anchors = topDiv.find('ul.tabs a');
        var panelDivs = topDiv.find('div.panel');
        var lastAnchor;
        var lastPanel;
        anchors.show();
        lastAnchor = anchors.filter('.on');
        lastPanel = $(lastAnchor.attr('href'));
        panelDivs.hide();
        lastPanel.show();
        anchors.click(function(event) {
            event.preventDefault();
            var currentAnchor = $(this);
            var currentPanel = $(currentAnchor.attr('href'));
            if (currentAnchor.get(0) === lastAnchor.get(0)) {
                return;
            }
            lastPanel.fadeOut(200, function() {
                lastAnchor.removeClass('on');
                currentAnchor.addClass('on');
                currentPanel.fadeIn(200);
                lastAnchor = currentAnchor;
                lastPanel = currentPanel;
                $(currentPanel.selector + " #tab li").first().click();
            });
        });
    });
});

$(function() {
    $("#tab li").click(function() {
        var num = $("#tab li").index(this);
        $(".content_wrap").addClass('disnon');
        $(".content_wrap").eq(num).removeClass('disnon');
        $("#tab li").removeClass('select');
        $(this).addClass('select')
    });
});