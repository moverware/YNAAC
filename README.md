# You Need An Apple Card

An API endpoint that receives transactions (via iOS Transaction Shortcuts) and
posts them to you YNAB Apple Card account.

## YNAB API Key

Go here: <https://app.ynab.com/settings/developer>

Generate a new key and set the environment variable `YNAB_API_KEY` to the value.
This can be done via a `.env` file in the root of the project or env vars in a
docker container.

Set `PASSWORD` env var to a secure password of your choice.

## Start

Run `yarn start`

## Finding your Budget ID & Account ID

Run the project locally and navigate to `src/ynab/ynab.http`. Edit the password
in the query param to match your secure password. You can click run
(assuming you have the VSCode REST Client extension installed) and it will
return a list of your budgets and accounts.
Alternatively, you can use Postman etc to make the request locally.

Once you have your budget ID and account ID, set the environment variables
`YNAB_BUDGET_ID` and `YNAB_ACCOUNT_ID` to the values (again via `.env` or env
vars in docker container).

## Docker

I recommend using Docker to run this project. You can build and run the image
somewhere permanently (e.g. GCP Cloud Run) and then use the iOS Shortcuts app to
send transactions to the endpoint.

### Install

1. Install Docker Desktop
2. Install gcloud: <https://cloud.google.com/sdk/docs/install>
3. Run `gcloud auth login` and sign in with your browser
4. Run `gcloud auth configure-docker us-central1-docker.pkg.dev`

### GCP

1. `Artifact Registry -> Enable`
2. `Create Repository`
3. Region: `us-central1`

### Extension

First install the Docker VSCode extension (Recommended)

### Building the image

1. Right click `Dockerfile` in repo root. Select `Build Image...`
2. Name the image: `us-central1-docker.pkg.dev/<project-name>/<repository-name>/<image-name>:latest`

### Pushing the image

1. Go to Docker extension tab
2. Right click on`Images -> us-central1-docker.pkg.dev/<project-name>/<repository-name>/<image-name> -> latest`, then `Push`

### Deploying

1. Go to Cloud Run: <https://console.cloud.google.com/run>
2. Create new service, and select your latest image when deploying

## iOS Shortcuts

Create a new automation of the transaction type. Add a `URL` action and set the
URL to your endpoint. Add a `Get Contents of URL` action and set the method to
`POST`. Set the body to the following:

```json
{
  "amount": <transaction amount>,
  "date": <transaction date>,
  "payee": <transaction payee>,
}
```
