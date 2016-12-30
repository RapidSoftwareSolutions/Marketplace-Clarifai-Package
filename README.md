# ClarifaiV2 Package
Build amazing apps with the world’s best image and video recognition API.
* Domain: clarifai.com
* Credentials: accessToken

## How to get credentials: 
0. Signup in [clarifai.com](https://clarifai.com)
1. Go to [Developer Dashboard](https://developer.clarifai.com/account/applications/)
2. Press **Create a New Application** button
3. Copy and save your `client_id and` and `client_secret`
4. Press **Generate Access Token** button or use [getAccessToken](#getAccessToken) method.

## ClarifaiV2.getAccessToken
Gets a token from the API using client credentials

| Field          | Type       | Description
|----------------|------------|----------
| clientId       | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret   | credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.

## ClarifaiV2.getAllConcepts
List all the concepts

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| page           | number     | The page number (optional, default: 1)
| perPage        | number     | Number of images to return per page (optional, default: 20)

## ClarifaiV2.getConcept
List a single concept given an id

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | String     | The concept's id

## ClarifaiV2.createConcept
Add a list of concepts given an id and name

| Field                  | Type       | Description
|------------------------|------------|----------
| accessToken            | credentials| This is used to authorize your access to the API.
| concepts               | JSON       | An array of media objects
| concepts[].concept     | object     | If string, this is assumed to be the concept id. Otherwise, an object with the following attributes
| concepts[].concept.id  | String     | The new concept's id (Required)
| concepts[].concept.name| String     | The new concept's name

#### `concepts` field example: 
```json
"concepts": [{
	"id": "test_c_1",
	"name": "Test concepts"
}]
```

## ClarifaiV2.searchConcepts
Search for a concept given a name. A wildcard can be given (example: The name "bo*" will match with "boat" and "bow" given those concepts exist

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| name           | string     | The name of the concept to search for

## ClarifaiV2.getAllInputs
Get all inputs in app

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| page           | Number     | The page number (optional, default: 1)
| perPage        | Number     | Number of images to return per page (optional, default: 20)

## ClarifaiV2.getInput
Get input by id

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | String     | The input id

## ClarifaiV2.getInputsStatus
Get inputs status (number of uploaded, in process or failed inputs)

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.

## ClarifaiV2.createInputs
Adds Inputs. You are limited to sending 128 inputs at a time.

| Field                                   | Type            | Description
|-----------------------------------------|-----------------|----------
| accessToken                             | credentials     | This is used to authorize your access to the API.
| inputs                                  | JSON            | Can be a single media object or an array of media objects (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info.
| inputs[].input                          | object          | If string, is given, this is assumed to be an image url
| inputs[].input.data.image.base64        | string          | Can be a publicly accessibly url (base64 or url is required)
| inputs[].input.data.image.url           | string          | Can be a publicly accessibly url or base64 string representing image bytes (base64 or url is required)
| inputs[].input.id                       | string          | ID of input (optional)
| inputs[].input.crop                     | Array of numbers| An array containing the percent to be cropped from top, left, bottom and right (optional)
| inputs[].input.data.metadata            | Array of objects| Object with key values to attach to the input (optional)
| inputs[].input.data.concepts            | Array of objects| An array of concepts to attach to media object (optional)
| inputs[].input.data.concepts[].concept  | object          | If string, is given, this is assumed to be concept id with value equals true
| inputs[].input.data.concepts[].concept.id | string        | The concept id (required)
| inputs[].input.data.concepts[].concept.value | boolean    | Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)
| inputs[].input.data.concepts[].<key>    | string          | <key> can be any string with any <value>

#### `inputs` field example:
```json
"inputs": [{
  "data": {
    "image": {
      "url": "https://samples.clarifai.com/puppy.jpeg"
    },
    "concepts":[
      {
        "id": "boscoe",
        "value": true
      }
    ]
  }
}]
```
With crop: 
```json
"inputs": [{
  "data": {
    "image": {
      "url": "https://samples.clarifai.com/metro-north.jpg",
      "crop": [0.2, 0.4, 0.3, 0.6]
    }
  }
}]
```

With custom metadata: 
```json
"inputs": [{
  "data": {
    "image": {
      "url": "https://samples.clarifai.com/puppy.jpeg"
    },
    "metadata": {
      "key": "value",
      "list":[1,2,3]
    }
  }
}]
```

## ClarifaiV2.deleteInputs
Deletes list of inputs.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| ids            | JSON       | JSON Array of strings. The id of input to delete

#### `ids` field example:
```json
"ids": ["test1", "test2"]
```

## ClarifaiV2.deleteInputById
Delete an input by id

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | string     | The id of input to delete

## ClarifaiV2.deleteAllInputs
You can also delete multiple inputs in one API call. This will happen asynchronously.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.

## ClarifaiV2.mergeInputsConcepts
Merge concepts to inputs in bulk

| Field                                        | Type       | Description
|----------------------------------------------|------------|----------
| accessToken                                  | credentials| This is used to authorize your access to the API.
| inputs                                       | JSON       | List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info.
| inputs[].input                               | object     | 
| inputs[].input.id                            | string     | The id of the input to update
| inputs[].input.data.metadata                 | object     | Object with key values to attach to the input (optional)
| inputs[].input.data.concepts                 | string     | Object with keys explained below:
| inputs[].input.data.concepts[].concept       | object     | 
| inputs[].input.data.concepts[].concept.id    | string     | The concept id (required)
| inputs[].input.data.concepts[].concept.value | boolean    | Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)

#### `inputs` field example: 
```json
"inputs": [{
  "id": "{id1}",
  "data": {
    "concepts": [
      {
        "id": "tree",
        "value": true
      },
      {
        "id": "water",
        "value": false
      }
    ]
  }
},
{
  "id": "{id2}",
  "data": {
    "concepts": [
      {
        "id": "tree",
        "value": true
      },
      {
        "id": "water",
        "value": false
      }
    ]
  }
}]
```

## ClarifaiV2.deleteInputsConcepts
Delete concepts to inputs in bulk

| Field                                        | Type       | Description
|----------------------------------------------|------------|----------
| accessToken                                  | credentials| This is used to authorize your access to the API.
| inputs                                       | JSON       | JSON Array of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info.
| inputs[].input                               | object     | 
| inputs[].input.id                            | string     | The id of the input to update
| inputs[].input.data.concepts                 | string     | Object with keys explained below:
| inputs[].input.data.concepts[].concept       | object     | 
| inputs[].input.data.concepts[].concept.id    | string     | The concept id (required)
| inputs[].input.data.concepts[].concept.value | boolean    | Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)

#### `inputs` field example: 
```json
"inputs": [{
  "id": "{id1}",
  "data": {
    "concepts": [
      {
        "id": "tree",
        "value": true
      },
      {
        "id": "water",
        "value": false
      }
    ]
  }
},
{
  "id": "{id2}",
  "data": {
    "concepts": [
      {
        "id": "tree",
        "value": true
      },
      {
        "id": "water",
        "value": false
      }
    ]
  }
}]
```

## ClarifaiV2.overwriteInputsConcepts
Overwrite inputs in bulk

| Field                                   | Type       | Description
|-----------------------------------------|------------|----------
| accessToken                             | credentials| This is used to authorize your access to the API.
| inputs                                  | JSON       | List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info
| inputs[].input                          | object     | 
| inputs[].input.id                       | string     | The id of the input to update
| inputs[].input.data.metadata            | object     | Object with key values to attach to the input (optional)
| inputs[].input.concepts                 | string     | Object with keys explained below:
| inputs[].input.concepts[].concept       | object     | 
| inputs[].input.concepts[].concept.id    | string     | The concept id (required)
| inputs[].input.concepts[].concept.value | boolean    | Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)

#### `inputs` field example: 
```json
"inputs": [{
  "id": "{id1}",
  "data": {
    "concepts": [
      {
        "id": "tree",
        "value": true
      },
      {
        "id": "water",
        "value": false
      }
    ]
  }
},
{
  "id": "{id2}",
  "data": {
    "concepts": [
      {
        "id": "tree",
        "value": true
      },
      {
        "id": "water",
        "value": false
      }
    ]
  }
}]
```

## ClarifaiV2.searchInputs
Search for inputs or outputs based on concepts or images

| Field                   | Type          | Description
|-------------------------|---------------|----------
| accessToken             | credentials   | This is used to authorize your access to the API.
| queries                 | JSON          | List of all predictions to match with
| queries[].concept       | object        | An object with the following keys:
| queries[].concept.type  | string        | Search over 'input' or 'output' (default: 'output')
| queries[].concept.name  | string        | The concept name
| queries[].concept.value | boolean       | Indicates whether or not the term should match with the prediction returned (default: true)
| queries[].image         | object        | An image object that contains the following keys:
| queries[].image.type    | string        | Search over 'input' or 'output' (default: 'output')
| queries[].image.url     | string        | Publicly accessibly url
| queries[].image.base64  | string        | Base64 string representing image bytes
| queries[].image.crop    | Array.<number>| An array containing the percent to be cropped from top, left, bottom and right (optional)
| queries[].image.metadata| object        | An object with <key> and <value> specified by user to refine search with (optional)
| page                    | Number        | The page number (optional, default: 1)
| perPage                 | Number        | Number of images to return per page (optional, default: 20)

#### queries field example: 
```json
"queries": [{
	"image": "http://path.to/image.jpg"
}]
```

## ClarifaiV2.addModelConcepts
Merge concepts to a model

| Field                | Type       | Description
|----------------------|------------|----------
| accessToken          | credentials| This is used to authorize your access to the API.
| id                   | String     | The id of the model to apply changes to
| concepts             | JSON       | An array of concept objects or string
| concepts[].concept.id| String     | The id of the concept to attach to the model

#### `concepts` field example: 
```json
"concepts": ["c1", "c2"]
```

## ClarifaiV2.removeModelConcepts
Remove concepts from a model

| Field                | Type       | Description
|----------------------|------------|----------
| accessToken          | credentials| This is used to authorize your access to the API.
| id                   | String     | The id of the model to apply changes to
| concepts             | JSON       | List of concept objects with id. See README for more info.
| concepts[].concept.id| String     | The id of the concept to delete.

#### `concepts` field example: 
```json
"concepts": ["c1", "c2"]
```

## ClarifaiV2.predictModel
Once you have trained a model you are ready to use your new model to get predictions. The predictions returned will only contain the concepts that you told it to see.

| Field                     | Type       | Description
|---------------------------|------------|----------
| accessToken               | credentials| This is used to authorize your access to the API.
| id                        | string     | Model's id
| inputs                    | JSON       | An array of Inputs Objects. See README for more info.
| inputs[].data.image       | object     | Object with keys explained below:
| inputs[].data.image.url   | string     | Can be a publicly accessibly url (url or base64 is required)
| inputs[].data.image.base64| string     | Base64 string representing image bytes (url or base64 is required)

#### `inputs` field example: 
```json
"inputs": [{
  "data": {
    "image": {
      "url": "https://samples.clarifai.com/puppy.jpeg"
    }
  }
}]
```

## ClarifaiV2.trainModel
When you train a model, you are telling the system to look at all the images with concepts you've provided and learn from them. This train operation is asynchronous. It may take a few seconds for your model to be fully trained and ready.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | string     | Model's id

## ClarifaiV2.getAllModels
Returns all the models

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| page           | Number     | The page number (optional, default: 1)
| perPage        | Number     | Number of images to return per page (optional, default: 20)

## ClarifaiV2.createModel
You can create your own model and train it with your own images and concepts. Once you train it to see how you would like it to see, you can then use that model to make predictions.

| Field                    | Type       | Description
|--------------------------|------------|----------
| accessToken              | credentials| This is used to authorize your access to the API.
| modelId                  | string     | Model id
| modelName                | string     | Model name
| conceptsData             | JSON       | List of objects with ids, concept id strings or an instance of Concepts object. See README for more info.
| conceptsMutuallyExclusive| boolean    | Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
| closedEnvironment        | boolean    | Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.

## ClarifaiV2.updateModel
Update a model

| Field                    | Type       | Description
|--------------------------|------------|----------
| accessToken              | credentials| This is used to authorize your access to the API.
| modelId                  | string     | Model id
| modelName                | string     | Model name
| conceptsMutuallyExclusive| boolean    | Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.
| closedEnvironment        | boolean    | Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.

## ClarifaiV2.getModel
Returns a model specified by ID

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | String     | The model's id

## ClarifaiV2.getModelOutputInfo
The output info of a model lists what concepts it contains.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | String     | The model's id

## ClarifaiV2.getAllModelVersions
The output info of a model lists what concepts it contains.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | String     | The model's id

## ClarifaiV2.getModelVersion
To get a specific model version, you must provide the modelId as well as the versionId. You can inspect the model version status to determine if your model is trained or still training.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| modelId        | String     | The model's id
| versionId      | String     | The model version's id

## ClarifaiV2.getModelTrainingInputsByVersion
You can list all the inputs that were used to train the model.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| id             | String     | The model's id

## ClarifaiV2.getModelTrainingInputsByVersion
You can list all the inputs that were used to train the model.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| modelId        | String     | The model's id
| versionId      | String     | The model version's id

## ClarifaiV2.deleteModelVersion
If you would like to delete all models associated with an application, you can also do that. Please proceed with caution as these cannot be recovered.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| modelId        | String     | If of model to delete
| versionId      | String     | The model's version id

## ClarifaiV2.deleteAllModels
Deletes model by id

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| ids            | String     | Can be a single string or an array of strings representing the model ids

## ClarifaiV2.deleteAllModels
Deletes all models

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.

## ClarifaiV2.searchModel
Search for models by name or type

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| This is used to authorize your access to the API.
| name           | String     | The model name
| type           | String     | This can be `concept`, `color`, `embed`, `facedetect`, `cluster` or `blur`