define(['backbone', 'compiled_templates'],
    function (Backbone, Templates) {
        'use strict';
        var FeedBackView = Backbone.Marionette.LayoutView.extend({
            template: Templates.jobDetailsTemplate,
            onShow : function () {
                this.setElement(this.$('#jobDetailModal').foundation('reveal', 'open'));
            }
        });
        return FeedBackView;
    });