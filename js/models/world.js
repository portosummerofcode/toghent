World.prototype.constructor = World;
World.prototype.generateWorld = generateWorld;
World.prototype.generateGoats = generateGoats;
World.prototype.generateCells = generateCells;
World.prototype.tick = tick;

function World(width, height) {
    this.width = width;
    this.height = height;
    this.goats = [];
    this.cells = [];
}

/**
 * Generate the world
 */
function generateWorld() {
    this.generateGoats(INITIAL_POPULATION_SIZE);
    this.generateCells();
}

/**
 * Generate the goats
 */
function generateGoats(populationSize) {
    var x, y, gender;
    var xOffset = INITIAL_GOAT_SIZE,
        yOffset = INITIAL_GOAT_SIZE;

    for (var i = 0; i < populationSize; i++) {
        gender = Math.random() >= 0.5 ? 'M' : 'F';
        x = Math.floor(Math.random() * (this.width - (2 * xOffset) + 1)) + xOffset;
        y = Math.floor(Math.random() * (this.height - (2 * yOffset) + 1)) + yOffset;
        this.goats.push(new Goat(x, y, gender));
    }
}

/**
 * Generate the cells
 */
function generateCells() {
    var x, y;

    var factor = gcd(this.width, this.height),
        size = factor / NUMBER_CELLS_FACTOR,
        nrColumns = this.width / size,
        nrRows = this.height / size;

    for (var i = 0; i < nrRows; i++) {
        for (var j = 0; j < nrColumns; j++) {
            x = j * size;
            y = i * size;
            this.cells.push(new Cell(x, y, size, size));
        }
    }
}

/**
 * Tick the world
 */
function tick() {
    var goat;

    for(var i = 0; i < this.goats.length; i++) {
        goat = this.goats[i];
        goat.x += Math.random() * 10 - 5;
        goat.y += Math.random() * 10 - 5;
    }
}

/**
 * Calculate GCD between two numbers
 * @param a first number
 * @param b second number
 * @returns {*} returns the greatest common denominator
 */
function gcd(a, b) {
    return (b === 0) ? a : gcd(b, a % b);
}