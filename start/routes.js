'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('files', 'FileController.store')
Route.get('files/:name', 'FileController.show')

Route.resource('agencies', 'AgencyController').apiOnly()

Route.resource('projects', 'ProjectController').apiOnly()
