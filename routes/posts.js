const express = require('express');
const router = express.Router();

// TODO: Add your routes to the route here.
const PostsController = require('../controllers/PostsController.js');

router.get('/', PostsController.list);

router.get('/new', PostsController.createForm);

router.get('/:id', PostsController.show);

router.get('/:id/edit', PostsController.updateForm);

router.post('/', PostsController.create);

router.put('/:id', PostsController.update);

router.delete('/:id', PostsController.remove);

module.exports = router;
