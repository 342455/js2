class Param {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    constructor(size, add, fillings){
        this.size = new Param(this._selector(size));
        this.add = new Param(this._selector(add));
        this.fillings = this._getFillings(fillings);
    }

    _selector(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    _getFillings(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    _selectAll(name) {
        return document.querySelectorAll(`input[name="${name}"]:checked`);
    }

    _sumPrice() {
        let result = this.size.price + this.add.price;
        this.fillings.forEach(fillings => result += fillings.price);
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.fillings.forEach(fillings => result += fillings.calories);
        return result;
    }

    showSum(price, calories){
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}
