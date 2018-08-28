# Progressive WebApp Experiement
Based on
* https://medium.com/@nsmirnova/creating-pwa-with-angular-5-e36ea2378b5d
* https://medium.com/@nsmirnova/creating-pwa-with-angular-5-part-2-progressifying-the-application-449e3a706129
* https://blog.angular-university.io/angular-push-notifications/
* https://developers.google.com/web/fundamentals/codelabs/push-notifications/

# Setup
```
$ npm install
$ npm publish
```
# Usage
* Go to https://makmu.github.io/pwcat/
* Install PWA on your device
* Click 'subscribe' and allow notifications
* Copy subscription string from UI into clipboard
* Open https://web-push-codelab.glitch.me/
* Paste subscription string into 'Subscription to Send To' input field
* Paste following notification string into 'Text to Send' input field:
 ```
 {
        "notification": {
            "title": "Angular News",
            "body": "Newsletter Available Max!",
            "icon": "assets/main-page-logo-small-hat.png",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": "1535453299590",
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
}
 ```
* Hit button 'Send Push Message'
