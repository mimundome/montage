/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2012 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;

exports.Test = Montage.create(Montage, {

    hideValue: {
        value: false
    },

    removeValue: {
        value: false
    },

    outerCondition: {
        value: true
    },

    innerCondition: {
        value: true
    }

});
