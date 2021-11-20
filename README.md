## Screenshots of the application:

![image](https://user-images.githubusercontent.com/66957811/142736210-656b6295-583f-4daf-b4ee-9fa722732514.png)

![image](https://user-images.githubusercontent.com/66957811/142736204-2729b17f-1af2-43bd-96c9-56a36f2ef0e3.png)


## Procedure to clone and run the application:

Kryptomania is a Ticker application that shows the current market value of coins with the percentage variation.

The coins are collectively arranged in such a way that the users can identify trending coins, the ones that are ideal for new investors and the non-trending coins.

This application gets data from nomics (A cryptocurrency and bitcoin API).

The icons are colleted using "react-ions".

Kryptomania can be cloned using `git clone https://github.com/vasupradharamachanrdan/Ticker_App.git` command into a new folder.

Make sure to delete the `package-lock.json` first and then use the command, `npm update` to update the changes locally on your PC.

Then finally, run `npm start` command to start the development server.

## Login Credentials:

Kryptomania has a login page which allows the user to login into their account.

Please make sure to use the provided credentials to access the app.
USERNAME: `example@gmail.com`
PASSWORD: `adminpass`


## Live link to the website:

The application has been deployed in heroku using heroku CLI.

Link to live website: (https://vasu-kryptomania.herokuapp.com/home)

## API information:

The API used in this application to fetch and render coin data is: "(https://stg.walrusmoney.com)".

The icons for the coin has been rendered into "(https://stg.walrusmoney.com/rwd/layout/1)". Hence it is adviced to not test this API using `PUT` method on postman.

## Method used to implement sockets:

The API socket has been connected to the server using the "WebSocket Request" on Postman.

Procedure:

- New -> WebSocketRequest
- change the type from Raw to Socket.io
- in settings change the version to v2
- Add the url -> https://stg.walrusmoney.com
- Connect to the server
- Add listener as tickerArray


