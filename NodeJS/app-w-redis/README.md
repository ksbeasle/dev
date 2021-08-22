# Testing out redis

* Start redis server (used macOS so `brew services start redis`)

* Then I start the application `node app.js`

* On the first call (before caching) it takes about 27ms with the sample data.

* After caching it goes down to 10ms and then 7ms and then as low as 4ms per request