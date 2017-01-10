module.exports.do = function(req, res){
res.status(200).send({
  "package": "ClarifaiV2",
  "tagline": "ClarifaiV2 API Package",
  "keywords": [
    "AI",
    "API",
    "artificial",
    "image",
    "intelligence",
    "learning",
    "machine",
    "media",
    "networking",
    "neural",
    "recognition",
    "video",
    "visual"
  ],
  "description": "Build amazing apps with the world’s best image and video recognition API.",
  "image": "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAkRAAAAJDc4ZDU2MjRmLWI2N2MtNGI3YS05NDhiLWVjMmU4N2IzOGE3OA.png",
  "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-ClarifaiV2-Package",
  "accounts": {
    "domain": "clarifai.com",
    "credentials": [
      "clientId", "clientSecret"
    ]
  },
  "blocks": [
    {
      "name": "getAccessToken",
      "description": "Gets a token from the API using client credentials",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getAllConcepts",
      "description": "List all the concepts",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "page",
          "info": "The page Number (optional, default: 1)",
          "type": "Number",
          "required": false
        },
        {
          "name": "perPage",
          "info": "Number of images to return per page (optional, default: 20)",
          "type": "Number",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getConcept",
      "description": "List a single concept given an id",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The concept's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "createConcept",
      "description": "Add a list of concepts given an id and name",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "concepts",
          "info": "An array of media objects. See README for more info.",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "searchConcepts",
      "description": "Search for a concept given a name. A wildcard can be given (example: The name \"bo*\" will match with \"boat\" and \"bow\" given those concepts exist",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "name",
          "info": "The name of the concept to search for",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getAllInputs",
      "description": "Get all inputs in app",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "page",
          "info": "The page Number (optional, default: 1)",
          "type": "Number",
          "required": false
        },
        {
          "name": "perPage",
          "info": "Number of images to return per page (optional, default: 20)",
          "type": "Number",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getInput",
      "description": "Get input by id",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The input id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getInputsStatus",
      "description": "Get inputs status (Number of uploaded, in process or failed inputs)",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "createInputs",
      "description": "Adds Inputs. You are limited to sending 128 inputs at a time.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "inputs",
          "info": "Can be a single media object or an array of media objects (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info.",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "createInput",
      "description": "Creates a single input.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "image",
          "info": "Image file",
          "type": "File",
          "required": true
        },
        {
          "name": "id",
          "info": "ID of input",
          "type": "String",
          "required": false
        },
        {
          "name": "conceptId",
          "info": "The concept id",
          "type": "String",
          "required": false
        },
        {
          "name": "conceptValue",
          "info": "Whether or not the input is a positive (true) or negative (false) example of the concept (default: true)",
          "type": "String",
          "required": false
        },
        {
          "name": "metadata",
          "info": "Object with key values to attach to the input",
          "type": "JSON",
          "required": false
        },
        {
          "name": "cropLeft",
          "info": "Percent to be cropped from left. Example: `0.3`",
          "type": "String",
          "required": false
        },
        {
          "name": "cropRight",
          "info": "Percent to be cropped from right. Example: `0.6`",
          "type": "String",
          "required": false
        },
        {
          "name": "cropTop",
          "info": "Percent to be cropped from top. Example: `0.2`",
          "type": "String",
          "required": false
        },
        {
          "name": "cropBottom",
          "info": "Percent to be cropped from bottom. Example: `0.1`",
          "type": "String",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "deleteInputs",
      "description": "Deletes list of inputs.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "ids",
          "info": "JSON Array of Strings. The id of input to delete",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "deleteInputById",
      "description": "Delete an input by id",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The id of input to delete",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "deleteAllInputs",
      "description": "You can also delete multiple inputs in one API call. This will happen asynchronously.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "mergeInputsConcepts",
      "description": "Merge concepts to inputs in bulk",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "inputs",
          "info": "List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info.",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "deleteInputsConcepts",
      "description": "Delete concepts to inputs in bulk",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "inputs",
          "info": "JSON Array of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info.",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "overwriteInputsConcepts",
      "description": "Overwrite inputs in bulk",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "inputs",
          "info": "List of concepts to update (max of 128 inputs/call; passing > 128 will throw an exception). See README for more info",
          "type": "JSON",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "searchInputs",
      "description": "Search for inputs or outputs based on concepts or images",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "queries",
          "info": "List of all predictions to match with. See README for more info.",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "addModelConcepts",
      "description": "Merge concepts to a model",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The id of the model to apply changes to",
          "type": "String",
          "required": true
        },
        {
          "name": "concepts",
          "info": "An array of concept objects or String. See README for more info.",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "removeModelConcepts",
      "description": "Remove concepts from a model",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The id of the model to apply changes to",
          "type": "String",
          "required": true
        },
        {
          "name": "concepts",
          "info": "List of concept objects with id. See README for more info.",
          "type": "JSON",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "predictModel",
      "description": "Once you have trained a model you are ready to use your new model to get predictions. The predictions returned will only contain the concepts that you told it to see.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "Model's id",
          "type": "String",
          "required": false
        },
        {
          "name": "inputs",
          "info": "An array of Inputs Objects. See README for more info.",
          "type": "JSON",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "trainModel",
      "description": "When you train a model, you are telling the system to look at all the images with concepts you've provided and learn from them. This train operation is asynchronous. It may take a few seconds for your model to be fully trained and ready.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "Model's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getAllModels",
      "description": "Returns all the models",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "page",
          "info": "The page Number (optional, default: 1)",
          "type": "Number",
          "required": false
        },
        {
          "name": "perPage",
          "info": "Number of images to return per page (optional, default: 20)",
          "type": "Number",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "createModel",
      "description": "You can create your own model and train it with your own images and concepts. Once you train it to see how you would like it to see, you can then use that model to make predictions.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "modelId",
          "info": "Model id",
          "type": "String",
          "required": true
        },
        {
          "name": "modelName",
          "info": "Model name",
          "type": "String",
          "required": false
        },
        {
          "name": "conceptsData",
          "info": "List of objects with ids, concept id Strings or an instance of Concepts object. See README for more info.",
          "type": "JSON",
          "required": false
        },
        {
          "name": "conceptsMutuallyExclusive",
          "info": "Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.",
          "type": "Boolean",
          "required": false
        },
        {
          "name": "closedEnvironment",
          "info": "Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.",
          "type": "Boolean",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "updateModel",
      "description": "Update a model",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "modelId",
          "info": "Model id",
          "type": "String",
          "required": true
        },
        {
          "name": "modelName",
          "info": "Model name",
          "type": "String",
          "required": false
        },
        {
          "name": "conceptsMutuallyExclusive",
          "info": "Do you expect to see more than one of the concepts in this model in the SAME image? Set to false (default) if so. Otherwise, set to true.",
          "type": "Boolean",
          "required": false
        },
        {
          "name": "closedEnvironment",
          "info": "Do you expect to run the trained model on images that do not contain ANY of the concepts in the model? Set to false (default) if so. Otherwise, set to true.",
          "type": "Boolean",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getModel",
      "description": "Returns a model specified by ID",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The model's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getModelOutputInfo",
      "description": "The output info of a model lists what concepts it contains.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The model's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getAllModelVersions",
      "description": "The output info of a model lists what concepts it contains.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The model's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getModelVersion",
      "description": "To get a specific model version, you must provide the modelId as well as the versionId. You can inspect the model version status to determine if your model is trained or still training.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "modelId",
          "info": "The model's id",
          "type": "String",
          "required": true
        },
        {
          "name": "versionId",
          "info": "The model version's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getModelTrainingInputs",
      "description": "You can list all the inputs that were used to train the model.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "The model's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "getModelTrainingInputsByVersion",
      "description": "You can also list all the inputs that were used to train a specific model version.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "modelId",
          "info": "The model's id",
          "type": "String",
          "required": true
        },
        {
          "name": "versionId",
          "info": "The model version's id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "deleteModelVersion",
      "description": "If you would like to delete all models associated with an application, you can also do that. Please proceed with caution as these cannot be recovered.",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "modelId",
          "info": "If of model to delete",
          "type": "String",
          "required": true
        },
        {
          "name": "versionId",
          "info": "The model's version id",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "deleteModel",
      "description": "Deletes model by id",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "id",
          "info": "Model's id",
          "type": "String",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "deleteAllModels",
      "description": "Deletes all models",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    }/*,
    {
      "name": "searchModel",
      "description": "Search for models by name or type",
      "args": [
        {
          "name": "accessToken",
          "info": "This is used to authorize your access to the API.",
          "type": "String",
          "required": true
        },
        {
          "name": "name",
          "info": "The model name",
          "type": "String",
          "required": false
        },
        {
          "name": "type",
          "info": "This can be `concept`, `color`, `embed`, `facedetect`, `cluster` or `blur`",
          "type": "String",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    }*/
  ]
})
};
