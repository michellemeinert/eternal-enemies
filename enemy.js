'use strict';

function Enemy (canvas, y) {
  this.speed = 3;
  this.size = 20;
  this.direction = -1;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d')
  this.x = this.canvas.width - this.size/2;
  this.y = y;
}

Enemy.prototype.draw = function () {
this.ctx.fillStyle = 'red';
this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
}

Enemy.prototype.update = function () {
 this.x += this.direction * this.speed;
}

