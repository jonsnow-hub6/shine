/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3228155173")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = \"\" || @request.auth.id != \"\"\n\n",
    "viewRule": "@request.auth.id = \"\" || @request.auth.id != \"\"\n\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3228155173")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\"\n",
    "viewRule": "@request.auth.id != \"\"\n"
  }, collection)

  return app.save(collection)
})
