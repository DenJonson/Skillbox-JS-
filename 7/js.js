function Vehicle(model) {
  this.engine = true;
  this.steeringWheel = true;
  this.model = model;

  this.engineOn = function() {
    return 'Двигатель запущен';
  };

  this.rotateLeft = function() {
    return 'Поворот на 90 градусов влево';
  };

  this.rotateRight = function() {
    return 'Поворот на 90 градусов вправо';
  };
}

function Car(model) {
  Vehicle.apply(this, arguments);

  this.wheel = 4;

  this.hanbrakeOn = function() {
    console.log('Ручник поднят');
  }

  this.hanbrakeOff = function() {
    console.log('Ручник опущен');
  }
}

function Airplane(model) {
  Vehicle.apply(this, arguments);

  this.wheel = 3;

  this.landingGearOn = function() {
    console.log('Шасси выпущены');
  }
  this.landingGearOff = function() {
    console.log('Шасси убраны');
  }
}

function Ship(model) {
  Vehicle.apply(this, arguments);

  this.sailsUp = function() {
    console.log('Паруса подняты')
  }

  this.sailsDown = function() {
    console.log('Паруса опущены')
  }
}

let a = new Car('киа'),
    b = new Ship('парусник'),
    c = new Airplane('Боинг');

//У этих трех объектов есть наследуемое свойство поворота вправо. Переопределим его для каждого объекта в зависимости от его поведения

a.rotateRight = function() {
  return 'Повернуть руль на 90 градусов вправо';
};

b.rotateRight = function() {
  return 'Повернуть штурвал на 90 градусов вправо';
};

c.rotateRight = function() {
  return 'Крен на 45 градусов вправо';
};

//Теперь у каждого объекта есть свойство с тем же названием, но выполняющее другое действие