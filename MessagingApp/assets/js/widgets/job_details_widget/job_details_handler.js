define(['backbone',
    'jobDetailsWidget/views/job_details_view',
    'jobDetailsWidget/models/job_details_model', 'clientApp'],
    function (Backbone, JobDetailsView, JobDetailsModel, clientApp) {
        'use strict';
        var JobDetailsHandler = {};

        JobDetailsHandler.openPopUp = function (data) {
            var jobDetailsModel = new JobDetailsModel(data);
            jobDetailsModel.formatJobDescription();
            clientApp.dialogRegion.show(new JobDetailsView({
                model: jobDetailsModel
            }));
        };
        return JobDetailsHandler;
    });








