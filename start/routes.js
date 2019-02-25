'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('files', 'FileController.store')
Route.get('files/:name', 'FileController.show')

Route.get('agencies', 'AgencyController.index')
Route.post('agency', 'AgencyController.store')
Route.get('agency/:id', 'AgencyController.show')
Route.put('agency/:id', 'AgencyController.update')

Route.get('projects', 'ProjectController.index')
Route.post('project', 'ProjectController.store')
Route.get('project/:slug', 'ProjectController.show')
Route.put('project/:id', 'ProjectController.update')

Route.get('educations', 'EducationController.index')
Route.post('education', 'EducationController.store')
Route.get('education/:id', 'EducationController.show')
Route.put('education/:id', 'EducationController.update')
