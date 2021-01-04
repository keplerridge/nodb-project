const express = require('express');
const gryffCtrl = require('./controllers/gryffCtrl');
const huffCtrl = require('./controllers/huffCtrl');
const ravenCtrl = require('./controllers/ravenCtrl');
const slyCtrl = require('./controllers/slyCtrl');
const port = 3333;
const app= express();

app.use(express.json())


//Gryffindor endpoints
app.get('/api/gryff-students', gryffCtrl.getGryffStudents);
app.post('/api/gryff-students', gryffCtrl.addGryffStudent);
app.put('/api/gryff-students/:id', gryffCtrl.editGryffStudent);
app.delete('/api/gryff-student/:id', gryffCtrl.expelGryffStudent);

//Hufflepuff endpoints
app.get('/api/huff-students', huffCtrl.getHuffStudents);
app.post('/api/huff-students', huffCtrl.addHuffStudent);
app.put('/api/huff-student/:id', huffCtrl.editHuffStudent);
app.delete('/api/huff-student/:id', huffCtrl.expelHuffStudent);

//Ravenclaw endpoints
app.get('/api/raven-students', ravenCtrl.getRavenStudents);
app.post('/api/raven-students', ravenCtrl.addRavenStudent);
app.put('/api/raven-students/:id', ravenCtrl.editRavenStudent);
app.delete('/api/raven-student/:id', ravenCtrl.expelRavenStudent);

//Slytherin endpoints
app.get('/api/sly-students', slyCtrl.getSlyStudents);
app.post('/api/sly-students', slyCtrl.addSlyStudent);
app.put('/api/sly-students/:id', slyCtrl.editSlyStudent);
app.delete('/api/sly-students/:id', slyCtrl.expelSlyStudent);

app.listen(port, () => console.log(`Up to no good on port ${port}`))