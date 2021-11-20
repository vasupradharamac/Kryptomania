## Screenshots of the application:

![image](https://user-images.githubusercontent.com/66957811/142737564-7db9f3be-d39d-4f7e-ba4d-475e02f17ac6.png)

![image](https://user-images.githubusercontent.com/66957811/142736204-2729b17f-1af2-43bd-96c9-56a36f2ef0e3.png)


## Procedure to clone and run the application:

Kryptomania is a Ticker application that shows the current market value of coins with the percentage variation.

The coins are collectively arranged in such a way that the users can identify trending coins, the ones that are ideal for new investors and the non-trending coins.

Kryptomania can be cloned using `https://github.com/vasupradharamachanrdan/Kryptomania.git` command into a new folder.

Make sure to delete the `package-lock.json` first and then use the command, `npm update` to update the changes locally on your PC.

Then finally, run `npm start` command to start the development server.

## Login Credentials:

Kryptomania has a login functionality that allows the users to access the application.

Please make sure to use the provided credentials to access the app.
USERNAME: `example@gmail.com`
PASSWORD: `adminpass`


## Live link to the website:

The application has been deployed in heroku using heroku CLI.

Link to live website: (https://vasu-kryptomania.herokuapp.com/)

## API information:

The API used in this application to fetch and render coin data is: `https://stg.walrusmoney.com`.

The icons for the coin has been rendered into `https://stg.walrusmoney.com/rwd/layout/1`. Hence it is adviced to not test this API using `PUT` method on postman.

## Method used to implement sockets:

The API socket has been connected to the server using the "WebSocket Request" on Postman.

Procedure:

- New -> WebSocketRequest
- change the type from Raw to Socket.io
- in settings change the version to v2
- Add the url -> https://stg.walrusmoney.com
- Connect to the server
- Add listener as tickerArray

## PS:

The deployed version of the application runs a bit slow in terms of rending the API data.
