'use strict';

//Category -- Id, Description, Created Time, Updated Time
//Location -- Id, Description, Created Time, Updated Time
//Record -- Id, Description, Price, Quantity, Location, Category, TimesModified, Expiration Date, Created Time, Updated Time

var schemas = [{
    name: 'inventoryCategory',
    schema: {
        'description': String,
        'createdTime': Date,
        'updatedTime': Date
    }
}, {
    name: 'inventoryLocation',
    schema: {
        'description': String,
        'createdTime': Date,
        'updatedTime': Date
    }
}, {
    name: 'inventoryRecord',
    schema: {
        'description': String,
        'price': Number,
        'quantity': Number,
        'location': Number,
        'category': Number,
        'timesModified': Number,
        'expirationDate': Date,
        'createdTime': Date,
        'updatedTime': Date
    }
}];

module.exports = schemas;
