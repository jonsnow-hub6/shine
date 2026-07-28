/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3228155173")

  // update collection data
  unmarshal({
    "createRule": "@request.body.title != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3228155173")

  // update collection data
  unmarshal({
    "createRule": null
  }, collection)

  return app.save(collection)
})
