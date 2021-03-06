# Shara API

This is a sample Shara API that perform the following actions: 

1. Authentication - Register and Login
2. Create and Manage Orders
3. Send notifications - Email (Amazon SES) and SMS (Twilio)
4. Admin Dashboard

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1b1635bef9083f5d63a4)

## Setup

To run the setup offline, run the following command - make sure you setup a `.env` file with your configs

```bash

adonis migration:run

adonis key:generate

adonis serve --dev
```

### Migrations

Run the following command to run startup migrations.

```js
adonis run
```
