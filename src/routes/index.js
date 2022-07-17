import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.render('index', {title:'Learning Node'}));

router.get('/about', (req, res) => res.render('about', {title:'About Me'}));

router.get('/contact', (req, res) => res.render('contact', {title:'Contact'}));

router.get('/resources', (req, res) => res.render('resources', {title:'Resources'}));


export default router;