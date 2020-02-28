# Expense Tracker Project (MERN)

## Dependencies

`concurrently`: Start the backend server and the frontend server in one script.
`nodemon`: Keep the nodejs server running without having to restart.

`express`: Nodejs server.
`mongoose`: Operating MongoDB.

## Port

Frontend: `:3000`
Backend: `:5000`

Set up frontend proxy:

`client/package.json`:

```json
{
  "proxy": "http://localhost:5000"
}
```