# Shara API

This is a sample Shara API that perform the following actions: 

1. Authentication - Register and Login
2. Create and Manage Orders
3. Send notifications - Email (Amazon SES) and SMS (Twillio)
4. Admin Dashboard

## Setup

To run the setup offline, run the following command - make sure you setup a `.env` file with your configs

```bash
adonis serve --dev
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
