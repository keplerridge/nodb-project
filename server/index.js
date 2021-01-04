const express = require('express'),
      ctrl = require('./controller'),
      port = 3456,
      app= express();

app.use(express.json())

app.get('/api/students', ctrl.getStudents);
app.post('/api/students', ctrl.addStudent);
app.put('/api/students/:id', ctrl.editStudent);
app.delete('/api/student/:id', ctrl.expelStudent);

app.listen(port, () => console.log(`Up to no good on port ${port}`))