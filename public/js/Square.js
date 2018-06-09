class Square {
  constructor(side, x, y) {
    this.side = side;
    this.x = x || 0;
    this.y = y || 0;
    this.width = side;
    this.height = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return this.side * 4;
  }

  contains(x, y) {
    if ((this.x - (this.side / 2)) <= x &&
     x <= (this.x + (this.side / 2)) &&
      (this.y - (this.side / 2)) < y &&
      y <= (this.y + (this.side / 2)) ) {
      return true;
    } else {
      return false;
    }
  }

}
