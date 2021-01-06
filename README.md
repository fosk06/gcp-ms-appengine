# GPC app engine microservices architecture sample

This is a sample of microservices architecture on GCP app Engine.
Each folder is a micro service.
The dispatch.yaml file is the routing configuration file for app Engine.

## Github actions

They are located in .github/workflows.
There is one Github actions to deploy the dispatch.yaml file (dispatch-production.yaml).

### Pre requisite

To make those project you need :

- a valid GCP account
- create a service account with correct permissions to deploy app Engine applications

Once you have the service account file, go to Github page project and move to "credentials/secret" sections.

Here you must create those two secrets:

- PROJECT_ID_STAGING: the name of your GCP project
- GCP_SA_KEY_STAGING: the full content of the json service account file created previously
