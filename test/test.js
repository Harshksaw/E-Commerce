const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const mongoose = require('mongoose');

// Import your models
const Address = require('../models/address.model.js');
const User = require('../models/user.model.js');

chai.use(chaiHttp);

// Import the database connection from db.js
// const { connectDB, disconnectDB } = require('../config/db.js');

// before(async function () {
//     // Connect to the MongoDB database
//     await connectDB();
// });

// after(async function () {
//     // Disconnect from the MongoDB database
//     await disconnectDB();
// });

// Test Address Schema
describe('Address Schema', () => {
    it('should save an address with valid data', async () => {
        const addressData = {
            firstName: 'John',
            lastName: 'Doe',
            streetAddress: '123 Main St',
            city: 'Cityville',
            state: 'Stateville',
            zipcode: '12345',
            mobile: '1234567890',
        };

        const address = new Address(addressData);
        const savedAddress = await address.save();

        // Check if the address was saved successfully
        savedAddress.should.have.property('_id');
        savedAddress.should.have.property('firstName').eql(addressData.firstName);
        // Add more property checks as needed
    });

    // Add more tests for Address Schema as needed
});

// Test User Schema
describe('User Schema', () => {
    it('should save a user with valid data', async () => {
        const userData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            role: 'user',
            mobile: '1234567890',
            createdAt: new Date(),
        };

        const user = new User(userData);
        const savedUser = await user.save();

        // Check if the user was saved successfully
        savedUser.should.have.property('_id');
        savedUser.should.have.property('firstName').eql(userData.firstName);
        // Add more property checks as needed
    });

    // Add more tests for User Schema as needed
});
