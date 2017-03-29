import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { mongo } from 'mongoose';

// BASIC JS FROM AUTH0 CLIENT DASHBOARD

function create (user, callback) {
  mongo('mongodb://admin:admin@ds123370.mlab.com:23370/heroku_m8hpkfsk', function (db) {
    var users = db.collection('users');

    users.findOne({ email: user.email }, function (err, withSameMail) {

      if (err) return callback(err);
      if (withSameMail) return callback(new Error('the user already exists'));

      bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) { return callback(err); }
        user.password = hash;
        users.insert(user, function (err, inserted) {
          console.log("SAVED");
          if (err) return callback(err);
          callback(null);
        });
      });
    });
  });
}

