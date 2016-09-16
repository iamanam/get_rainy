/**
 * Created by iamanam on 4/16/2016.
 */
Meteor.startup(function(){
  "use strict";
  sChat.init('ZJtTjqiniR3RMBwa6', {
        ssl: true,
        welcomeMessage: 'Hi, how can I help you?',
        hostName: 'SimpleChat.Support',
        labels: {
            sendPlaceholder: 'Send the message...',
            headerTitle: 'Welcome on my website!'
        }
    });
 console.log(Meteor.isDevelopment)
});
