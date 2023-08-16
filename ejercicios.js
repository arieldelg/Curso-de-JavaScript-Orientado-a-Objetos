class Student {
    constructor ({
        name, 
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }  
}



class LearningPath {
    constructor({
        name,
        cursos = [],
    }) {
        this.name = name;
        this.cursos = cursos;
    }
}

class Curso {
    constructor({
        name,
        clases = [],
    }) {
        this.name = name;
        this.clases = clases;
    }
}

const programacionBasica = new Curso ({
    name: 'Curso de Programacion Basica',
    clases: [
        'video 1',
        'video 2',
    ]
}) 

const cursoDefdeHTML = new Curso ({
    name: 'Curso Definitivo de Html',
    clases: [
        'video 1',
        'video 2',
    ]
}) 

const cursoPracticodeHTML = new Curso ({
    name: 'Curso Practico de HTML y CSS',
    clases: [
        'video 1',
        'video 2',
    ]
}) 

const escuelaDeDesarolloWeb = new LearningPath ({
    name: 'Escuela de Desarollo Web',
    cursos: [
        cursoDefdeHTML,
        cursoPracticodeHTML,
        programacionBasica
    ]    
})

const ariel = new Student ({
    name: 'Ariel',
    email: 'arieldelgrande@hotmail.com',
    username: 'SpookyD',
    instagram: 'arieldelg',
    learningPaths: [
        escuelaDeDesarolloWeb
    ]
})

console.log(ariel);
console.log(ariel.learningPaths.cursos);

/* const natalia = {
    name: 'Natalia',
    edad: 28,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practivo de HTML y CSS',
    ],
    aprobarCurso (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

natalia.cursosAprobados.push('Curso de responsive Design');
console.log(natalia);

natalia.aprobarCurso('Curso de POO en JS')

console.log(natalia)

// prototipo

function Student(name, edad, cursosAprobados) {
    this.name = name;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
}

// Creando metodo con prototypo
Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student('Juanita', 28, ['Curso Definitivo de HTML y CSS', 'Curso Practivo de HTML y CSS'])

console.log(juanita)

juanita.aprobarCurso('curso de Ingles');

console.log(juanita);

// Creando Class en JS

class Student2 {
    constructor({
        name, 
        age, 
        cursosAprobados = [],
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const ariel = new Student2({
    name: 'ariel', 
    age: 28, 
    cursosAprobados: ['Curso Definitivo de HTML y CSS', 'Curso Practivo de HTML y CSS']
})
console.log(ariel);
ariel.aprobarCurso('Curso de React');
console.log(ariel); */



// OTRA DIFERENTE MANERA DE HACERLO
/* class Student {
    constructor ({
        name, 
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    } 
    learning (object) {
        this.learningPaths.push(object)
    }   
}

class LearningPaths {
    constructor ({
        ruta,
        cursos,
    }) {
        this.ruta = ruta;
        this.cursos = cursos;
    }
}


const ariel = new Student ({
    name: 'Ariel',
    email: 'arieldelgrande@hotmail.com',
    username: 'SpookyD',
    instagram: 'arieldelg',
    facebook: 'arieldelgrande',
})

ariel.learning(new LearningPaths ({ruta: 'Escuela de Desarollo Web', cursos: ['Ruta de JavaScript', 'Ruta de JavaScript a Profundidad', 'Ruta de CSS Grid']}))
ariel.learning(new LearningPaths ({ruta: 'Escuela de BackEnd', cursos: ['Ruta de HTML', 'Ruta de NodeJs', 'Ruta de React']}))
ariel.learning(new LearningPaths ({ruta: 'Escuela de Desarollo Server', cursos: ['Ruta de JavaScript', 'Ruta de JavaScript a Profundidad', 'Ruta de CSS Grid']}))

console.log(ariel); */

// HECHO POR MI
/* class Course { 
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
    get name() {
        return this._name;
      }
    
    set name(nuevoNombrecito) {
        if (typeof nuevoNombrecito === 'string') {
            nuevoNombrecito = nuevoNombrecito.trim()
          if (nuevoNombrecito.length !== 0) {
            let nuevoArray2 = []
            nuevoNombrecito.split(' ').forEach(element => {
              const nuevoElement = element.charAt(0).toUpperCase() + element.slice(1)
              nuevoArray2.push(nuevoElement)
            })
            const stringCompleto = nuevoArray2.join(' ')
            this._name = stringCompleto
          } 
        }
    }
}

const courseName = 'esto es un string'
const nombreMayusculas = new Course({
    name: courseName,
})

console.log(nombreMayusculas.name) 
nombreMayusculas.name = 'adsadada '

console.log(nombreMayusculas);  
nombreMayusculas.name = ' adasd  dasdasd dasd sad das  '

console.log(nombreMayusculas);  
 */


/*  class Course {  hecho por el profesor
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito === "string") {
        nuevoNombrecito = nuevoNombrecito.trim()
        if (nuevoNombrecito.length !== 0) {
          let words = nuevoNombrecito.split(" ")
          let nuevoNombrecitoMayusculas = words.map((word) => {
            return word[0]?.toUpperCase() + word.substring(1);
          }).join(" ")
          this._name = nuevoNombrecitoMayusculas
        }
      }
    }
  }


  const courseName = 'esto es un string'
  const nombreMayusculas = new Course({
      name: courseName,
  })
  
  console.log(nombreMayusculas.name) 
  nombreMayusculas.name = ' '
  
  console.log(nombreMayusculas); */

class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
        return this._name
      }
    
      set name(nuevoNombrecito) {
        
        if (typeof nuevoNombrecito === 'string') {
            nuevoNombrecito = nuevoNombrecito.trim()
          if (nuevoNombrecito.length !== 0) {
            const words = nuevoNombrecito.split(' ')
            const nuevo = words.map(element =>
              element.charAt(0)?.toUpperCase() + element.slice(1)
            ).join(' ')
            this._name = nuevo
          }
        }
      }
  }

const courseName = "curso de programación básica  "
const nombreMaysuculas = new Course({
    name: courseName,
})

nombreMaysuculas.name = 44

console.log(nombreMaysuculas.name);
console.log(nombreMaysuculas)