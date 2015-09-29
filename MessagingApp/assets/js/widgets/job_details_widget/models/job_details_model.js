define(['backbone'],
    function (Backbone) {
        //ItemView provides some default rendering logic
        'use strict';
        var jobDetailsModel = Backbone.Model.extend({
            formatJobDescription : function () {
                if (this.get('jobDescription')) {
                    var jobDescription = this.get('jobDescription'),
                    jobDetailsArray = jobDescription.split('\n'),
                    jobValue, jobDescriptionArray = [];
                    _.each(jobDetailsArray, function (eachDesc) {
                        jobValue = eachDesc.split(':');
                        if (jobValue[0]) {
                            jobDescriptionArray.push({
                                jobLabel: jobValue[0],
                                jobDesc: jobValue[1]
                            });
                        }
                    });
                    this.set('formattedJobDesc', jobDescriptionArray);
                }
            }
        });

        return jobDetailsModel;
    });